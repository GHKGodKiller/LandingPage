const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a la base de datos SQLite (crea un archivo database.sqlite automáticamente)
const dbFile = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error('Error conectando a la base de datos SQLite:', err.message);
    } else {
        console.log('Conectado exitosamente a la base de datos SQLite.');
        
        // Crear la tabla si no existe
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS newsletter (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `;
        db.run(createTableQuery, (err) => {
            if (err) {
                console.error('Error al crear la tabla:', err.message);
            } else {
                console.log('La tabla "newsletter" verificada/creada con éxito.');
            }
        });
    }
});

// Ruta para recibir y guardar correos electrónicos
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'El correo electrónico es requerido.' });
    }

    const checkQuery = 'SELECT id FROM newsletter WHERE email = ?';
    
    db.get(checkQuery, [email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Error interno del servidor.' });
        }

        if (row) {
            return res.status(409).json({ 
                message: '¡Advertencia! Este correo ya está suscrito a Los Murmullos del Bosque.' 
            });
        } else {
            const insertQuery = 'INSERT INTO newsletter (email) VALUES (?)';
            
            db.run(insertQuery, [email], function(err) {
                if (err) {
                    console.error(err.message);
                    return res.status(500).json({ message: 'Error al registrar el correo.' });
                }
                
                return res.status(201).json({ 
                    message: '¡Suscripción exitosa! Te has unido a los murmullos del bosque.' 
                });
            });
        }
    });
});

// Levantar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});