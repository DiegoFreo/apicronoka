
const mongoose = require('mongoose');
require('dotenv').config();
/*
  async function main()
  {
    try {
      await mongoose.connect(process.env.MONGODB_URI, );
      return mongoose;
    } catch (err) {
      console.error("Erro ao conectar ao MongoDB", err);
      process.exit(1);
    }
  }
   
  module.exports = main();
  */
 let isConnected = false;

async function main() {
  if (isConnected) return mongoose;
  mongoose.set('bufferCommands', false);

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log('MongoDB conectado');
    return mongoose;
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    return null;
  }
}
module.exports = main();
