const Volta = require('../models/volta');
// Criar uma nova volta
async function criarVolta(req, res) {
  try {
    const novaVolta = new Volta(req.body);
    const resultado = await novaVolta.save();
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}
// Listar todas as voltas
async function listarVoltas(req, res) {
    try {
        const voltas = await Volta.find();
        res.status(200).json(voltas);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
async function obterVoltasPorPiloto(req, res) {
    try {
        const { pilotoId } = req.params;
        const voltas = await Volta.find({ pilotoId });
        res.status(200).json(voltas);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}
async function obterVoltasPorBateria(req, res) {
    try {
        const { bateriaId } = req.params;
        const voltas = await Volta.find({ bateriaId });
        res.status(200).json(voltas);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}



module.exports = { criarVolta, listarVoltas, obterVoltasPorPiloto, obterVoltasPorBateria };
