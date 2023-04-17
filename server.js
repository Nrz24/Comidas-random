const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoose = require('./database');

app.get('/', function(req, res) {
    res.send('¡Hola, mundo!');
});

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
