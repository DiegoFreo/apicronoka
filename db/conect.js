const mongoose = require('mongoose');
require('dotenv').config();

  async function main()
  {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      return mongoose;
    } catch (err) {
      console.error("Erro ao conectar ao MongoDB", err);
      process.exit(1);
    }
  }
  module.exports = main();
