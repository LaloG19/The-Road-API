import { Router } from 'express';
import { check } from 'express-validator';
import {getAllNewsController,getByIdController,CreateNewController,updateNewsByIdController,DeleteNewByIdController} from '../controllers/News/controller';
import { Controller123 } from '../controllers/Controller123';

const NewsRouter = Router();


/**
 * @swagger
 * /api/news/getNews:
 *   get:
 *     summary: Obtiene todas las noticias
 *     responses:
 *       200:
 *         description: Lista de noticias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
NewsRouter.get('/getNews', getAllNewsController);

/**
 * @swagger
 * /api/news/getNewsById/{id}:
 *   get:
 *     summary: Obtiene una noticia por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la noticia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Noticia obtenida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
NewsRouter.get('/getNewsById/:id', getByIdController);

/**
 * @swagger
 * /api/news/CreateNews:
 *   post:
 *     summary: Crea una nueva noticia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Noticia creada
 */
NewsRouter.post('/CreateNews', CreateNewController);

/**
 * @swagger
 * /api/news/UpdateNewsById/{id}:
 *   put:
 *     summary: Actualiza una noticia por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la noticia
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Noticia actualizada
 */
NewsRouter.put('/UpdateNewsById/:id', updateNewsByIdController);

/**
 * @swagger
 * /api/news/deleteNewsById/{id}:
 *   put:
 *     summary: Elimina una noticia por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la noticia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Noticia eliminada
 */
NewsRouter.put('/deleteNewsById/:id', DeleteNewByIdController);
NewsRouter.get(
  '/test',
  [
    check('param').isString().withMessage('[GET]: Endpoint de prueba Get Usuarios falló.')
  ],
  Controller123
);
 
export default NewsRouter;
