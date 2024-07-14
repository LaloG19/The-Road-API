import { Router } from 'express';
import { check } from 'express-validator';
import {getAllNewsController,getByIdController,CreateNewController,updateNewsByIdController,DeleteNewByIdController} from '../controllers/News/controller';
import { Controller123 } from '../controllers/Controller123';

const NewsRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Novedades
 *     description: CRUD y buscador de novedades
 *
 *
 */

/**
 * @swagger
 * /api/news/getNews:
 *   get:
 *     summary: Obtener todas las noticias
 *     tags:
 *       - Novedades
 *     description: Retorna una lista de todas las noticias registradas
 *     responses:
 *       200:
 *         description: Lista de noticias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "6671f8c5f066417aa3164939"
 *                   title:
 *                     type: string
 *                     example: "Nueva actualización de software"
 *                   content:
 *                     type: string
 *                     example: "Se ha lanzado una nueva versión con varias mejoras y correcciones de errores."
 */
NewsRouter.get('/getNews', getAllNewsController);

/**
 * @swagger
 * /api/news/getNewsById/{id}:
 *   get:
 *     summary: Obtiene una noticia por ID
 *     tags:
 *       - Novedades
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
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Novedad Obtenida"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "669431775cef6c7497ecbe7f"
 *                     title:
 *                       type: string
 *                       example: "Nueva actualización de software"
 *                     content:
 *                       type: string
 *                       example: "Se ha lanzado una nueva versión con varias mejoras y correcciones de errores."
 */
NewsRouter.get('/getNewsById/:id', getByIdController);

/**
 * @swagger
 * /api/news/CreateNews:
 *   post:
 *     summary: Crea una nueva noticia
 *     tags:
 *       - Novedades
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nueva actualización de software"
 *               content:
 *                 type: string
 *                 example: "Se ha lanzado una nueva versión con varias mejoras y correcciones de errores."
 *     responses:
 *       201:
 *         description: Noticia creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Noticia creada con éxito"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "669431775cef6c7497ecbe7f"
 */
NewsRouter.post('/CreateNews', CreateNewController);

/**
 * @swagger
 * /api/news/UpdateNewsById/{id}:
 *   put:
 *     summary: Actualiza una noticia por ID
 *     tags:
 *       - Novedades
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la noticia a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nueva actualización de software"
 *               content:
 *                 type: string
 *                 example: "Se ha lanzado una nueva versión con varias mejoras y correcciones de errores."
 *     responses:
 *       200:
 *         description: Noticia actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Novedad actualizada con éxito"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "669431775cef6c7497ecbe7f"
 *                     title:
 *                       type: string
 *                       example: "Nueva actualización de software"
 *                     content:
 *                       type: string
 *                       example: "Se ha lanzado una nueva versión con varias mejoras y correcciones de errores."
 */
NewsRouter.put('/UpdateNewsById/:id', updateNewsByIdController);

/**
 * @swagger
 * /api/news/deleteNewsById/{id}:
 *   delete:
 *     summary: Elimina una noticia por ID
 *     tags:
 *       - Novedades
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la noticia a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Noticia eliminada
 *         content:
 *           application/json:
 *             example:
 *               status: 200
 *               message: "Novedad Eliminada con éxito"
 *               data: "6671f8c5f066417aa3164939"  # ID de la noticia eliminada
 */
NewsRouter.delete('/deleteNewsById/:id', DeleteNewByIdController);

export default NewsRouter;
