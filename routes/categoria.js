import express from 'express';

const rotas = express.Router();
//const rotas = require('express').Router();

const { criarCategoria, listarCategorias, atualizarCategoria, deletarCategoria } = require('../controllers/categoriaController');
// Rotas para Categoria
rotas.post('/categoria', criarCategoria);
rotas.get('/categoria', listarCategorias);
rotas.put('/categoria/:id', atualizarCategoria);  
rotas.delete('/categoria/:id', deletarCategoria);

module.exports = rotas;