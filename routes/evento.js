import express from 'express';

const rotas = express.Router();
//const rotas = require('express').Router();
const { criarEvento, listarEventos, atualizarEvento, deletarEvento } = require('../controllers/eventoController');
// Rotas para Evento
rotas.post('/evento', criarEvento);
rotas.get('/evento', listarEventos);   
rotas.put('/evento/:id', atualizarEvento);
rotas.delete('/evento/:id', deletarEvento);

module.exports = rotas;