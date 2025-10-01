const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    tag: { type: String, required: true, unique: true },
}, { timestamps: true });
module.exports = mongoose.model('Tag', TagSchema);