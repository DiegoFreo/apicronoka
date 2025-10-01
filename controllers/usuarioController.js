import Usuario from '../models/usuario.js';
import jwt from 'jsonwebtoken';
//const Usuario = require('../models/usuario');
//const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; // defina no .env


// Criar um novo usuário
async function criarUsuario(req, res) {
    try {
        const novoUsuario = new Usuario(req.body);
        const usuarioSalvo = await novoUsuario.save();
        res.status(201).json(usuarioSalvo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
// Listar todos os usuários
async function listarUsuarios(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } 
}
// Atualizar um usuário
async function atualizarUsuario(req, res) {
    try {
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarioAtualizado) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(usuarioAtualizado);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
// Deletar um usuário
async function deletarUsuario(req, res) {
    try {
        const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioDeletado) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function loginUsuario(req, res) {
    try {
        const {emailUser, passworUser } = req.body;

        const usuario = await Usuario.findOne({emailUser, passworUser});
        if (!usuario) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const token = jwt.sign({ id: usuario._id, nivelUser: usuario.nivelUser }, jwtSecret, { expiresIn: '5h' });
        // Você pode retornar o token se estiver usando autenticação baseada em token

        return res.status(200).json({ message: 'Login bem-sucedido', usuario, token });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = { criarUsuario, listarUsuarios, atualizarUsuario, deletarUsuario, loginUsuario }; 
