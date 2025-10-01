import express from 'express';
import usuarioRoutes from './usuario.js';
import pilotoRoutes from './piloto.js';
import tagRoutes from './tags.js';
import eventoRoutes from './evento.js';
import CategoriaRoutes from './categoria.js';
import bateriaRoutes from './bateria.js';
import voltaRoutes from './voltas.js';

const router = express.Router();

//const router = require('express').Router();

/*
const usuarioRoutes = require('./usuario');
const pilotoRoutes = require('./piloto');
const tagRoutes = require('./tags');
const eventoRoutes = require('./evento');
const CategoriaRoutes = require('./categoria');
const bateriaRoutes = require('./bateria');
const voltaRoutes = require('./voltas');
*/

// Aqui você pode adicionar outras rotas, por exemplo:
// const pilotoRoutes = require('./piloto');
// router.use('/piloto', pilotoRoutes);
router.use('/', pilotoRoutes);
router.use('/', usuarioRoutes);
router.use('/', tagRoutes);
router.use('/', eventoRoutes);
router.use('/', CategoriaRoutes);
router.use('/', bateriaRoutes);
router.use('/', voltaRoutes);

module.exports = router;