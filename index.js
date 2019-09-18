'use strict';

require('./config/config.js');
var mongoose = require('mongoose');
var app = require('./app');

//Conexión a Base de datos
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URLDB, { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión se ha realizado con éxito.');

        //Crea el servidor
        app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en http://localhost:3000/');
        });
    })
    .catch(err => console.log('Error en conexión: ' + err));