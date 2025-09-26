
const mongoose = require('mongoose');
require('dotenv').config();

 let isConnected = false;

async function main() {
  if (isConnected) return mongoose;
  //mongoose.set('bufferCommands', false);

  try {
    await mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URL, {
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
module.exports = main();
