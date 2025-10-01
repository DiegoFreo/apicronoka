import express from 'express';

const rotas = express.Router();

//const rotas = require('express').Router();

const { criarVolta, listarVoltas, obterVoltasPorPiloto, obterVoltasPorBateria } = require('../controllers/voltaController');
rotas.post('/voltas', criarVolta);
rotas.get('/voltas', listarVoltas);
rotas.get('/voltas/piloto/:pilotoId', obterVoltasPorPiloto);
rotas.get('/voltas/bateria/:bateriaId', obterVoltasPorBateria);

module.exports = rotas;