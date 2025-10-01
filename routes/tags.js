import express from 'express';

const rotas = express.Router();

//const rotas = require('express').Router();

const { criarTag, listarTags, atualizarTag, deletarTag } = require('../controllers/tagsController');
// Rotas para Tag
rotas.post('/tag', criarTag);
rotas.get('/tag', listarTags);
rotas.put('/tag/:id', atualizarTag);
rotas.delete('/tag/:id', deletarTag);

module.exports = rotas;