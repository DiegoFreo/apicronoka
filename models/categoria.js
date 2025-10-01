import mongoose from 'mongoose';

//const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.Categoria || mongoose.model('Categoria', CategoriaSchema);