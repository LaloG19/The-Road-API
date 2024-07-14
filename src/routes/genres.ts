import { Router } from 'express';
import * as genresController from '../controllers/Genres/controller';

const genreRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Géneros / Categorías
 *     description: CRUD y buscador de géneros / categorías
 *
 *
 */

/**
 * @swagger
 * /api/genre/getAllGenres:
 *   get:
 *     summary: Obtener todos los géneros
 *     tags:
 *       - Géneros / Categorías
 *     description: Retorna una lista de todos los géneros disponibles
 *     responses:
 *       200:
 *         description: Lista de géneros obtenida exitosamente
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
 *                   example: Todos los Géneros obtenidos!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "6671f8c5f066417aa3164939"
 *                       title:
 *                         type: string
 *                         example: "Express"
 *                       cantidad:
 *                         type: integer
 *                         example: 0
 */
genreRouter.get('/getAllGenres', genresController.GetAllGenresController);

/**
 * @swagger
 * /api/genre/getGenreById/{id}:
 *   get:
 *     summary: Obtener género por ID
 *     tags:
 *       - Géneros / Categorías
 *     description: Retorna un género específico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del género
 *     responses:
 *       200:
 *         description: Género encontrado
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
 *                   example: Genero Obtenido
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6671f8c5f066417aa3164939"
 *                     title:
 *                       type: string
 *                       example: "Express"
 *                     cantidad:
 *                       type: integer
 *                       example: 0
 *       404:
 *         description: Género no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: Género no encontrado
 */
genreRouter.get('/getGenreById/:id', genresController.GetGenreByIdController);

/**
 * @swagger
 * /api/genre/createGenre:
 *   post:
 *     summary: Crear un nuevo género
 *     tags:
 *       - Géneros / Categorías
 *     description: Crea un nuevo género y lo guarda en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Express
 *               cantidad:
 *                 type: integer
 *                 example: 0
 *     responses:
 *       201:
 *         description: Género creado
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
 *                   example: Género creado exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6671f8c5f066417aa3164939"
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Error al crear el género
 */
genreRouter.post('/createGenre', genresController.CreateGenreController);

/**
 * @swagger
 * /api/genre/updateGenreById:
 *   put:
 *     summary: Actualizar un género por ID
 *     tags:
 *       - Géneros / Categorías
 *     description: Actualiza los detalles de un género específico por su ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "6671f8c5f066417aa3164939"
 *               title:
 *                 type: string
 *                 example: "Express"
 *               cantidad:
 *                 type: number
 *                 example: "1"
 *     responses:
 *       200:
 *         description: Género actualizado
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
 *                   example: Género actualizado exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6671f8c5f066417aa3164939"
 *                     title:
 *                       type: string
 *                       example: "Express"
 *                     cantidad:
 *                       type: number
 *                       example: 0
 *       404:
 *         description: Género no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: Género no encontrado
 */
genreRouter.put('/updateGenreById', genresController.UpdateGenreByIdController);

/**
 * @swagger
 * /api/genre/deleteGenreById/{id}:
 *   delete:
 *     summary: Eliminar un género por ID
 *     tags:
 *       - Géneros / Categorías
 *     description: Elimina un género específico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del género a eliminar
 *     responses:
 *       200:
 *         description: Género eliminado
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
 *                   example: Género eliminado exitosamente
 *                 data:
 *                   type: string
 *                   example: "6671f8c5f066417aa3164939"
 *       404:
 *         description: Género no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: Género no encontrado
 */
genreRouter.delete('/deleteGenreById/:id', genresController.DeleteGenreByIdController);
 
export default genreRouter;
