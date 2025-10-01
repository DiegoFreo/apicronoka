import mongoose from 'mongoose';

//const mongoose = require('mongoose');

const LogUsuarioSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    acao: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('LogUsuario', LogUsuarioSchema);