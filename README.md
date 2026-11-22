# Yolcatl · Landing + API de telemetría y correo (Netlify)

Sitio estático (`public/`) + una sola Netlify Function (`netlify/functions/api.js`, Express + serverless-http).
Sin base de datos SQL: los datos viven en **Netlify Blobs** y los correos salen por la **Gmail API**.

## Arquitectura
```
yolcatl-netlify/
├── netlify/functions/api.js   # Express: métricas, newsletter, contacto, Gmail
├── public/                    # index.html, styles.css, main.js, assets/, APK, KitPrensa.zip
├── netlify.toml               # publish, functions y redirect /api/* -> función
├── package.json
├── .env.example
└── .gitignore
```
Copia aquí tu carpeta `assets/`, `Yolcatl-Demo.apk` y `KitPrensa.zip` dentro de `public/`.

## Endpoints (prefijo /api)
| Método | Ruta | Qué hace |
|---|---|---|
| POST | /api/metrics | Registra un evento del funnel en el store `funnel-metrics` |
| GET | /api/metrics?step=&source=&limit= | Resumen agregado + eventos recientes (filtros opcionales) |
| GET | /api/metrics/export?format=csv | Descarga `metricas_funnel.csv` |
| POST | /api/subscribe | Guarda el correo en el store `newsletter` y envía bienvenida por Gmail |
| GET | /api/stats | Contador de registros y meta (5,000) |
| POST | /api/contact | Envía el mensaje del formulario al correo del proyecto (Reply-To = visitante) |

## Funnel en la landing
- `tofu_attraction`: llegada (1 vez por sesión; `source` = `?src=` o `utm_source` o `directo`)
- `mofu_landing`: la persona llega a la sección Historia (1 vez por sesión)
- `bofu_interaction`: clics `data-track` (demo, redes, trailer…)
- `bofu_cross_promo`: clics a proyectos aliados (`aliado_*`)
- `feedback_submission`: clic al cuestionario de Google Forms

Links para QR/redes: `https://TU-SITIO.netlify.app/?src=qr_campus&utm_source=qr&utm_medium=cartel&utm_campaign=demoday`

## Variables de entorno
Ver `.env.example`. Nunca subas `.env` a GitHub.

## Desarrollo local
```
npm install
cp .env.example .env     # y llena los valores
npx netlify-cli dev      # http://localhost:8888
```
