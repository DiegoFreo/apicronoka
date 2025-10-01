import express from 'express';

const rotas = express.Router();

//const rotas = require('express').Router();

const {criarLogUsuario, listarLogsUsuario} = require('../controllers/logUsuarioController');
rotas.post('/logs', criarLogUsuario);
rotas.get('/logs', listarLogsUsuario);

module.exports = rotas;