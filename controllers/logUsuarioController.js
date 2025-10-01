import LogUsuario from '../models/logusuario.js';

//const LogUsuario = require('../models/logusuario');
// Criar um novo log de usuário
async function criarLogUsuario(req, res) {
    try {
        const novoLog = new LogUsuario(req.body);
        const resultado = await novoLog.save();
        res.status(201).json(resultado);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
// Listar todos os logs de usuário
async function listarLogsUsuario(req, res) {
    try {
        const logs = await LogUsuario.find().populate('usuarioId', 'nome email');
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
module.exports = { criarLogUsuario, listarLogsUsuario };