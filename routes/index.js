'use strict';

const express = require('express');
const app = express();
const { sendEmail } = require('../controllers/email');

app.get('/', async (req, res) => {
	res.render('inicio', { page: 'Inicio' });
});

app.post('/sendEmail', async (req, res) => {
    const usuario = req.body;

    const enviar = await sendEmail({
        to: '',
        from: '',
        template: 'contacto',
		nombre: usuario.nombre,
		email: usuario.email,
        mensaje: usuario.mensaje
    })
    
    return res.json({
        respuesta: enviar
    });
});

module.exports = app;
