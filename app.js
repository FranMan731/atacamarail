'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const server = http.createServer(app);

let routes = require('./routes/index.js');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cors
app.use(cors());

// view engine setup
app.set('view engine', 'ejs');

//Routes
//app.use(express.static(__dirname + '/public'));
app.use(routes);
app.use(express.static(__dirname + '/public'));
//Exportar
module.exports = server;