
const rotas = require('express').Router();
const { criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario, loginUsuario } = require('../controllers/usuarioController');
// Rotas para Usuário
rotas.post('/usuario', criarUsuario);
rotas.post('/usuario/login', loginUsuario);
rotas.get('/usuario', listarUsuarios);
rotas.put('/usuario/:id', atualizarUsuario);  
rotas.delete('/usuario/:id', deletarUsuario);

module.exports = rotas;