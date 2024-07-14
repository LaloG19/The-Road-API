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
 *     summary: Obtener todos los usuarios
 *     tags:
 *     - Géneros / Categorías
 *     description: Retorna una lista de todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
genreRouter.get('/getAllGenres', genresController.GetAllGenresController);

/**
 * @swagger
 * /api/genre/getGenreById/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags:
 *     - Géneros / Categorías
 *     description: Retorna un usuario específico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
genreRouter.get('/getGenreById/:id', genresController.GetGenreByIdController);

/**
 * @swagger
 * /api/genre/createGenre:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *     - Géneros / Categorías
 *     description: Crea un nuevo usuario y lo guarda en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password: 
 *                 type: string
 *               rolename: 
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
genreRouter.post('/createGenre', genresController.CreateGenreController);

/**
 * @swagger
 * /api/genre/updateGenreById/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags:
 *     - Géneros / Categorías
 *     description: Actualiza los detalles de un usuario específico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password: 
 *                 type: string
 *               rolename: 
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
genreRouter.put('/updateGenreById', genresController.UpdateGenreByIdController);


/**
 * @swagger
 * /api/genre/deleteGenreById/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags:
 *     - Géneros / Categorías
 *     description: Actualiza los detalles de un usuario específico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario Eliminado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
genreRouter.delete('/deleteGenreById/:id', genresController.DeleteGenreByIdController);
 
export default genreRouter;
