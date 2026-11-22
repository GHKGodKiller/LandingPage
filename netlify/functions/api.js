import express from 'express';
import serverless from 'serverless-http';
import crypto from 'node:crypto';
import nodemailer from 'nodemailer';
import { connectLambda, getStore } from '@netlify/blobs';

const app = express();
const router = express.Router();
app.use(express.json({ limit: '20kb' }));

// ---------------------------------------------------------------
// Constantes y helpers
// ---------------------------------------------------------------
const META_REGISTROS = 5000;
const MAX_EVENTOS = 2000;          // tope de eventos que se leen por consulta
const EMAIL_REGEX = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/;
const TOKEN_REGEX = /^[a-z0-9_]{1,40}$/;

const lineaSimple = (v, max) => (typeof v === 'string' ? v.replace(/[\r\n]+/g, ' ').trim().slice(0, max) : '');
const textoLibre = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const cleanSrc = (v) => (typeof v === 'string' && TOKEN_REGEX.test(v) ? v : 'directo');

const storeMetricas = () => getStore({ name: 'funnel-metrics', consistency: 'strong' });
const storeSuscriptores = () => getStore({ name: 'newsletter', consistency: 'strong' });

app.set('etag', false);
router.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// ---------------------------------------------------------------
// Correo: Nodemailer + SMTP (Gmail con contraseña de aplicación)
// ---------------------------------------------------------------
let transporter = null;

function obtenerTransporte() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Servicio de correo no configurado (faltan SMTP_HOST / SMTP_USER / SMTP_PASS).');
  }
  const port = Number(SMTP_PORT) || 587;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
  return transporter;
}

async function enviarCorreo({ to, subject, text, html, replyTo }) {
  return obtenerTransporte().sendMail({
    from: process.env.EMAIL_FROM || `"Yolcatl" <${process.env.SMTP_USER}>`,
    to,
    replyTo,
    subject: lineaSimple(subject, 200), // Reto 2: sin \r ni \n en el asunto
    text,
    html
  });
}

// Reto 3: plantilla HTML con estilos inline y firma. El contenido se escapa para evitar inyección de HTML.
const escaparHtml = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function plantillaHtml({ titulo, mensaje, senderName }) {
  const remitente = senderName
    ? `<p style="margin:0 0 18px;font-size:13px;color:#6b705c;">Enviado por <strong>${escaparHtml(senderName)}</strong></p>`
    : '';
  const parrafos = escaparHtml(mensaje)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#2b2d42;">${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

  return `<div style="background:#f4f1e8;padding:24px;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e3dccb;border-radius:12px;overflow:hidden;">
    <div style="background:#2f5d3a;padding:18px 24px;">
      <h1 style="margin:0;font-size:20px;color:#ffffff;">${escaparHtml(titulo)}</h1>
    </div>
    <div style="padding:24px;">
      ${remitente}
      ${parrafos}
      <hr style="border:none;border-top:1px solid #e3dccb;margin:24px 0 16px;">
      <p style="margin:0;font-size:13px;color:#6b705c;">— Equipo Yolcatl<br>Cozy farming y bullet heaven mesoamericano</p>
      <p style="margin:12px 0 0;font-size:11px;color:#9a9a8a;">Enviado automáticamente el ${new Date().toUTCString()}</p>
    </div>
  </div>
</div>`;
}

// Reto 1: protección por API Key (header x-api-key), comparación en tiempo constante.
function requerirApiKey(req, res, next) {
  const esperado = process.env.API_SECRET_KEY;
  if (!esperado) {
    return res.status(500).json({ status: 'error', message: 'El servidor no tiene API_SECRET_KEY configurada.' });
  }
  const recibido = req.get('x-api-key');
  if (!recibido) {
    return res.status(401).json({ status: 'error', message: 'No autorizado: falta el encabezado x-api-key.' });
  }
  const hash = (v) => crypto.createHash('sha256').update(v).digest();
  if (!crypto.timingSafeEqual(hash(recibido), hash(esperado))) {
    return res.status(401).json({ status: 'error', message: 'No autorizado: API key inválida.' });
  }
  return next();
}

// ---------------------------------------------------------------
// Tarea 6: GET /api/time y POST /api/send-email (protegido)
// ---------------------------------------------------------------
router.get('/time', (req, res) => {
  const now = new Date();
  return res.status(200).json({
    status: 'success',
    data: {
      serverTimeISO: now.toISOString(),
      timestamp: now.getTime(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      formatted: now.toUTCString(),
      platform: 'Netlify Functions (AWS Lambda)'
    }
  });
});

router.post('/send-email', requerirApiKey, async (req, res) => {
  try {
    const to = lineaSimple(req.body.to, 254);
    const subject = lineaSimple(req.body.subject, 200);   // Reto 2: elimina saltos de línea (CRLF injection)
    const message = textoLibre(req.body.message, 5000);
    const senderName = lineaSimple(req.body.senderName, 60);

    if (!to || !subject || !message) {
      return res.status(400).json({ status: 'error', message: 'Parámetros obligatorios faltantes: to, subject y message son requeridos.' });
    }
    if (!EMAIL_REGEX.test(to)) {
      return res.status(400).json({ status: 'error', message: 'El formato de correo en el campo "to" no es válido.' });
    }

    const info = await enviarCorreo({
      to,
      subject,
      text: senderName ? `${message}\n\n— ${senderName}` : message,
      html: plantillaHtml({ titulo: subject, mensaje: message, senderName })
    });

    return res.status(200).json({
      status: 'success',
      message: 'Correo despachado satisfactoriamente.',
      data: { messageId: info.messageId, recipient: to }
    });
  } catch (error) {
    console.error('Error al procesar envío de correo:', error); // el detalle solo va al log, nunca al cliente
    return res.status(500).json({ status: 'error', message: 'Fallo interno al despachar el correo.' });
  }
});

// ---------------------------------------------------------------
// Newsletter: GET /api/stats y POST /api/subscribe  (sin SQL: Netlify Blobs)
// ---------------------------------------------------------------
router.get('/stats', async (req, res) => {
  try {
    const { blobs } = await storeSuscriptores().list();
    return res.json({ registros: blobs.length, meta: META_REGISTROS });
  } catch (error) {
    console.error('Error en /stats:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

router.post('/subscribe', async (req, res) => {
  try {
    const email = lineaSimple(req.body.email, 254).toLowerCase();
    if (!email) return res.status(400).json({ message: 'El correo electrónico es requerido.' });
    if (!EMAIL_REGEX.test(email)) return res.status(400).json({ message: 'Ingresa un correo electrónico válido.' });

    const store = storeSuscriptores();
    const key = crypto.createHash('sha256').update(email).digest('hex');

    if ((await store.get(key)) !== null) {
      return res.status(409).json({ message: '¡Advertencia! Este correo ya está suscrito a Los Murmullos del Bosque.' });
    }

    await store.setJSON(key, { email, src: cleanSrc(req.body.src), fecha: new Date().toISOString() });

    // El correo de bienvenida no debe romper la suscripción si el SMTP falla.
    if (process.env.WELCOME_EMAIL !== 'false') {
      const bienvenida = [
        '¡Gracias por registrarte en Los Murmullos del Bosque!',
        '',
        'Recibirás fichas botánicas y mitológicas, lore de Yolcatl y fechas de pruebas.',
        '',
        'Si llegamos a 5,000 registros, todas las personas registradas desbloquean un accesorio exclusivo para animales dentro del juego.'
      ].join('\n');
      try {
        await enviarCorreo({
          to: email,
          subject: 'Bienvenido a Los Murmullos del Bosque',
          text: bienvenida,
          html: plantillaHtml({ titulo: 'Los Murmullos del Bosque', mensaje: bienvenida })
        });
      } catch (mailError) {
        console.error('No se pudo enviar el correo de bienvenida:', mailError.message);
      }
    }

    return res.status(201).json({ message: '¡Suscripción exitosa! Te has unido a los murmullos del bosque.' });
  } catch (error) {
    console.error('Error en /subscribe:', error);
    return res.status(500).json({ message: 'Error al registrar el correo.' });
  }
});

// ---------------------------------------------------------------
// Contacto: POST /api/contact  (llega como correo al equipo)
// ---------------------------------------------------------------
router.post('/contact', async (req, res) => {
  try {
    // Honeypot: un bot rellena este campo oculto; fingimos éxito y no enviamos nada.
    if (textoLibre(req.body.website, 100)) {
      return res.status(201).json({ message: '¡Mensaje enviado! Te responderemos pronto.' });
    }

    const name = lineaSimple(req.body.name, 100);
    const email = lineaSimple(req.body.email, 254);
    const message = textoLibre(req.body.message, 1000);

    if (name.length < 2) return res.status(400).json({ message: 'El nombre debe tener al menos 2 caracteres.' });
    if (!EMAIL_REGEX.test(email)) return res.status(400).json({ message: 'Ingresa un correo electrónico válido.' });
    if (message.length < 10) return res.status(400).json({ message: 'El mensaje debe tener al menos 10 caracteres.' });

    const cuerpo = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Origen: ${cleanSrc(req.body.src)}`,
      '',
      message
    ].join('\n');

    await enviarCorreo({
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Yolcatl · Contacto] ${name}`,
      text: cuerpo,
      html: plantillaHtml({ titulo: 'Nuevo mensaje de contacto', mensaje: cuerpo, senderName: name })
    });

    return res.status(201).json({ message: '¡Mensaje enviado! Te responderemos pronto.' });
  } catch (error) {
    console.error('Error en /contact:', error);
    return res.status(502).json({ message: 'No pudimos enviar tu mensaje. Inténtalo más tarde o escríbenos directamente al correo del proyecto.' });
  }
});

// ---------------------------------------------------------------
// Telemetría del funnel: POST /api/metrics
// ---------------------------------------------------------------
router.post('/metrics', async (req, res) => {
  try {
    const { step, source, sessionId, metadata } = req.body || {};
    const stepLimpio = typeof step === 'string' ? step.toLowerCase().trim() : '';
    const sourceLimpio = typeof source === 'string' ? source.toLowerCase().trim() : '';

    if (!stepLimpio || !sourceLimpio) {
      return res.status(400).json({ status: 'error', message: 'Los campos "step" y "source" son obligatorios.' });
    }
    if (!TOKEN_REGEX.test(stepLimpio) || !TOKEN_REGEX.test(sourceLimpio)) {
      return res.status(400).json({ status: 'error', message: '"step" y "source" solo admiten letras minúsculas, números y guion bajo (máx. 40).' });
    }
    if (metadata !== undefined && (typeof metadata !== 'object' || metadata === null || Array.isArray(metadata) || JSON.stringify(metadata).length > 1000)) {
      return res.status(400).json({ status: 'error', message: '"metadata" debe ser un objeto de máximo 1000 caracteres.' });
    }

    const id = `metric_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const registro = {
      id,
      step: stepLimpio,
      source: sourceLimpio,
      sessionId: lineaSimple(sessionId, 64) || 'anon_guest',
      metadata: metadata || {},
      timestamp: new Date().toISOString()
    };

    await storeMetricas().setJSON(id, registro);

    return res.status(201).json({
      status: 'success',
      message: 'Métrica persistida correctamente en Netlify Blobs.',
      data: registro
    });
  } catch (error) {
    console.error('Error al registrar métrica:', error);
    return res.status(500).json({ status: 'error', message: 'Fallo interno al persistir la métrica.' });
  }
});

// ---------------------------------------------------------------
// Lectura de métricas (compartida por GET /metrics y /metrics/export)
// ---------------------------------------------------------------
async function cargarEventos(filtros) {
  const store = storeMetricas();
  const { blobs } = await store.list({ prefix: 'metric_' });
  const claves = blobs.map((b) => b.key).sort().slice(-MAX_EVENTOS); // las más recientes (la clave empieza con Date.now())

  const eventos = [];
  for (let i = 0; i < claves.length; i += 50) {
    const lote = await Promise.all(claves.slice(i, i + 50).map((k) => store.get(k, { type: 'json' })));
    eventos.push(...lote.filter(Boolean));
  }

  const filtrados = eventos
    .filter((e) => !filtros.step || e.step === filtros.step)
    .filter((e) => !filtros.source || e.source === filtros.source)
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

  return { eventos: filtrados, truncado: blobs.length > MAX_EVENTOS };
}

const leerFiltros = (query) => ({
  step: typeof query.step === 'string' ? query.step.toLowerCase().trim() : '',
  source: typeof query.source === 'string' ? query.source.toLowerCase().trim() : ''
});

// Reto 1: GET /api/metrics?step=...&source=...
router.get('/metrics', async (req, res) => {
  try {
    const filtros = leerFiltros(req.query);
    const limite = Math.min(Math.max(parseInt(req.query.limit, 10) || 50, 1), 200);
    const { eventos, truncado } = await cargarEventos(filtros);

    const summary = { totalEvents: eventos.length, byStep: {}, bySource: {} };
    for (const e of eventos) {
      summary.byStep[e.step] = (summary.byStep[e.step] || 0) + 1;
      summary.bySource[e.source] = (summary.bySource[e.source] || 0) + 1;
    }

    return res.status(200).json({
      status: 'success',
      data: {
        filters: { step: filtros.step || null, source: filtros.source || null },
        truncated: truncado,
        summary,
        recentEvents: eventos.slice(0, limite)
      }
    });
  } catch (error) {
    console.error('Error al consultar métricas:', error);
    return res.status(500).json({ status: 'error', message: 'Fallo interno al consultar métricas en Netlify Blobs.' });
  }
});

// Reto 3: GET /api/metrics/export?format=csv
const csvCelda = (valor) => {
  let s = String(valor ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // evita inyección de fórmulas en Excel/Sheets
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

router.get('/metrics/export', async (req, res) => {
  try {
    if (req.query.format !== 'csv') {
      return res.status(400).json({ status: 'error', message: 'Formato no soportado. Usa ?format=csv' });
    }
    const { eventos } = await cargarEventos(leerFiltros(req.query));
    const filas = ['id,step,source,sessionId,timestamp'];
    for (const e of eventos) {
      filas.push([e.id, e.step, e.source, e.sessionId, e.timestamp].map(csvCelda).join(','));
    }

    res.set('Content-Type', 'text/csv; charset=utf-8');
    res.set('Content-Disposition', 'attachment; filename="metricas_funnel.csv"');
    return res.status(200).send('\uFEFF' + filas.join('\r\n'));
  } catch (error) {
    console.error('Error al exportar métricas:', error);
    return res.status(500).json({ status: 'error', message: 'Fallo interno al exportar métricas.' });
  }
});

// ---------------------------------------------------------------
// Montaje de rutas, errores y handler
// ---------------------------------------------------------------
// Se monta en ambos prefijos: /api (producción, vía redirect) y la ruta directa de la función (netlify dev).
app.use('/api', router);
app.use('/.netlify/functions/api', router);

app.use((req, res) => res.status(404).json({ status: 'error', message: 'Ruta no encontrada.' }));
app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ status: 'error', message: 'El cuerpo de la petición no es JSON válido.' });
  }
  console.error(err);
  return res.status(500).json({ status: 'error', message: 'Error interno del servidor.' });
});

const expressHandler = serverless(app);

// serverless-http usa el modo de compatibilidad Lambda: Blobs necesita connectLambda(event).
export const handler = async (event, context) => {
  connectLambda(event);
  return expressHandler(event, context);
};
