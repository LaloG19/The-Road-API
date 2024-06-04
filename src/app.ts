import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

// Importar rutas
import routes from './routes/main';
import { options } from './swagger.options';

// Base de datos
import { dbConnect } from './database/mongoose.database';

dotenv.config();

const App = {
  main: async () => {
    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middlewares
    app.use(cors());
    app.use(express.json());

    // Swagger
    const specs = swaggerJsDoc(options);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

    // Rutas
    app.use('/api', routes);

    app.use('/', (req: Request, res: Response) => {
      res.status(404).json({ message: 'Request not found' });
    });

    function handleError(err: any, req: Request, res: Response, next: NextFunction) {
      console.error(err);
      res.status(500).json({ error: 'Error interno del servidor' });
    }

    // Middleware para manejo de errores
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.error(err);
      res.status(500).send('[ERROR] Ocurrió un error en el servidor');
    });

    async function startServer() {
      app.use(handleError);
      app.listen(PORT, () => {
        console.log(`[ERP-API] se ejecuta en http://localhost:${PORT}`);
      });
      await dbConnect();
    }

    startServer();
  },
};

export default App;
