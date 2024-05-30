const mongoose = require('mongoose');
var api_url = process.env.DB_URI || '';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '', {
      // Las opciones useNewUrlParser y useUnifiedTopology ya no son necesarias
    });
    console.log('[OK] Conexión establecida con MongoDB');
  } catch (error) {
    console.error('[ERROR] No se pudo conectar con MongoDB', error);
    process.exit(1);
  }
};