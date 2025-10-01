import express from 'express';

const rotas = express.Router();

//const rotas = require('express').Router();
const { criarPiloto, listarPilotos, atualizarPiloto, deletarPiloto } = require('../controllers/pilotoController');
// Rotas para Piloto
rotas.post('/piloto', criarPiloto);
rotas.get('/piloto', listarPilotos);
rotas.put('/piloto/:id', atualizarPiloto);  
rotas.delete('/piloto/:id', deletarPiloto);

module.exports = rotas;
