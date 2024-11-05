const express = require('express');
const app = express();
const path = require('path');

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'images')));

// Ruta para cada vista
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/nosotros', (req, res) => res.sendFile(path.join(__dirname, 'views/nosotros.html')));
app.get('/servicios', (req, res) => res.sendFile(path.join(__dirname, 'views/servicios.html')));
app.get('/testimonios', (req, res) => res.sendFile(path.join(__dirname, 'views/testimonios.html')));
app.get('/productos', (req, res) => res.sendFile(path.join(__dirname, 'views/productos.html')));
app.get('/noticias', (req, res) => res.sendFile(path.join(__dirname, 'views/noticias.html')));
app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname, 'views/contacto.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, 'views/carrito.html')));

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
