const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/tasks');

const app = express();
const port = 3000;

// Conectar a MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/tasks', taskRoutes);

// Manejador de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});