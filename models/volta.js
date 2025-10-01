const mongoose = require('mongoose');

const VoltaSchema = new mongoose.Schema({
    pilotoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Piloto' },
    bateriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bateria' },
    tempo: { type: Number, required: true }, // Tempo em milissegundos
    numeroVolta: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Volta', VoltaSchema);
