const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://Nico:nicodark2323@cluster0.inlbtod.mongodb.net/test';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Conexión exitosa a la base de datos');
})
    . catch((error) => {
    console.error('Error al conectarse a la base de datos:', error);
});

module.exports = mongoose;
