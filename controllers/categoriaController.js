import Categoria from '../models/categoria.js';

//const Categoria = require('../models/categoria');
// Criar uma nova categoria
async function criarCategoria(req, res) {
    try {
        const novaCategoria = new Categoria(req.body);
        const resultado = await novaCategoria.save();
        res.status(201).json(resultado);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
// Listar todas as categorias
async function listarCategorias(req, res) {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
//atualizar categoria
async function atualizarCategoria(req, res) {
    try {
        const categoriaAtualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!categoriaAtualizada) {
            return res.status(404).json({ erro: 'Categoria não encontrada' });
        }
        res.status(200).json(categoriaAtualizada);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
//deletar categoria
async function deletarCategoria(req, res) {
    try {
        const categoriaDeletada = await Categoria.findByIdAndDelete(req.params.id);
        if (!categoriaDeletada) {
            return res.status(404).json({ erro: 'Categoria não encontrada' });
        }
        res.status(200).json({ mensagem: 'Categoria deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}


module.exports = { criarCategoria, listarCategorias, atualizarCategoria, deletarCategoria };