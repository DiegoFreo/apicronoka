const rotas = require('express').Router();
const { criarBateria, listarBaterias, atualizarBateria, deletarBateria } = require('../controllers/bateriaController');
// Rotas para Bateria
rotas.post('/bateria', criarBateria);
rotas.get('/bateria', listarBaterias);
rotas.put('/bateria/:id', atualizarBateria);  
rotas.delete('/bateria/:id', deletarBateria);

module.exports = rotas;