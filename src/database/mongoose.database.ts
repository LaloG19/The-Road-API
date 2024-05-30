import mongoose from 'mongoose';

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