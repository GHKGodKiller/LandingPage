const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const META_REGISTROS = 5000;

app.use(cors());
app.use(express.json({ limit: '20kb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Base de datos SQLite (crea database.sqlite automáticamente)
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
    if (err) {
        console.error('Error conectando a la base de datos SQLite:', err.message);
        return;
    }
    console.log('Conectado exitosamente a la base de datos SQLite.');
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS newsletter (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            src TEXT,
            fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL,
            mensaje TEXT NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
       
        // Bases creadas con la versión anterior: agrega la columna src si falta
        db.run('ALTER TABLE newsletter ADD COLUMN src TEXT', () => {});
    });
});

// ---------- Utilidades de validación (la validación del servidor manda) ----------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const cleanSrc = (value) => (typeof value === 'string' && /^[a-z0-9_]{1,40}$/.test(value) ? value : 'directo');
const likert = (value) => {
    const n = Number(value);
    return Number.isInteger(n) && n >= 1 && n <= 5 ? n : null;
};

// ---------- Newsletter / registro anticipado ----------
app.post('/subscribe', (req, res) => {
    const email = clean(req.body.email, 254);
    if (!email) return res.status(400).json({ message: 'El correo electrónico es requerido.' });
    if (!EMAIL_REGEX.test(email)) return res.status(400).json({ message: 'Ingresa un correo electrónico válido.' });

    db.get('SELECT id FROM newsletter WHERE email = ?', [email.toLowerCase()], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Error interno del servidor.' });
        }
        if (row) {
            return res.status(409).json({ message: '¡Advertencia! Este correo ya está suscrito a Los Murmullos del Bosque.' });
        }
        db.run('INSERT INTO newsletter (email, src) VALUES (?, ?)', [email.toLowerCase(), cleanSrc(req.body.src)], (insertErr) => {
            if (insertErr) {
                console.error(insertErr.message);
                return res.status(500).json({ message: 'Error al registrar el correo.' });
            }
            return res.status(201).json({ message: '¡Suscripción exitosa! Te has unido a los murmullos del bosque.' });
        });
    });
});

// Conteo para la barra de metas comunitarias (solo el total, sin datos personales)
app.get('/stats', (req, res) => {
    db.get('SELECT COUNT(*) AS total FROM newsletter', (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Error interno del servidor.' });
        }
        res.json({ registros: row.total, meta: META_REGISTROS });
    });
});

// ---------- Contacto ----------
app.post('/contact', (req, res) => {
    const name = clean(req.body.name, 100);
    const email = clean(req.body.email, 254);
    const message = clean(req.body.message, 1000);

    if (name.length < 2) return res.status(400).json({ message: 'El nombre debe tener al menos 2 caracteres.' });
    if (!EMAIL_REGEX.test(email)) return res.status(400).json({ message: 'Ingresa un correo electrónico válido.' });
    if (message.length < 10) return res.status(400).json({ message: 'El mensaje debe tener al menos 10 caracteres.' });

    db.run('INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)', [name, email, message], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Error al guardar tu mensaje.' });
        }
        res.status(201).json({ message: '¡Mensaje enviado! Te responderemos pronto.' });
    });
});



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
