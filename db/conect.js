const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

async function main() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI não está definida');
    return null;
  }

  if (mongoose.connection.readyState >= 1) {
    isConnected = true;
    return mongoose;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('MongoDB conectado');
    return mongoose;
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    return null;
  }
}

module.exports ={main, isConnected};

