import Piloto from '../models/piloto.js';

//const Piloto = require('../models/piloto');

// Criar um novo piloto
async function criarPiloto(req, res) {
  try {
    const novoPiloto = new Piloto(req.body);
    const resultado = await novoPiloto.save();
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}
// Listar todos os pilotos
async function listarPilotos(req, res) {
  try {
    const pilotos = await Piloto.find();
    res.status(200).json(pilotos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}
// Atualizar um piloto
async function atualizarPiloto(req, res) {
  try {
    const pilotoAtualizado = await Piloto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pilotoAtualizado) {
      return res.status(404).json({ erro: 'Piloto não encontrado' });
    }
    res.status(200).json(pilotoAtualizado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}
// Deletar um piloto
async function deletarPiloto(req, res) {
  try {
    const pilotoDeletado = await Piloto.findByIdAndDelete(req.params.id);
    if (!pilotoDeletado) {
      return res.status(404).json({ erro: 'Piloto não encontrado' });
    }
    res.status(200).json({ mensagem: 'Piloto deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}
module.exports = { criarPiloto, listarPilotos, atualizarPiloto, deletarPiloto };

