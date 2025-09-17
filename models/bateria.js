const mongoose = require('mongoose');

const BateriaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    categotriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
    eventoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Evento' },
    pilotos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Piloto' }],
}, { timestamps: true });

module.exports =  mongoose.models.Bateria || mongoose.model('Bateria', BateriaSchema);