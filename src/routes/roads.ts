import { Router } from 'express';
import { check } from 'express-validator';
import * as roadsService from '../controllers/Roads/controller';
import { Controller123 } from '../controllers/Controller123';

const roadRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Rutas
 *     description: CRUD y buscador de rutas
 *
 *
 */

/**
 * @swagger
 * /api/roads/getAllRoads:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *      - Rutas
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
roadRouter.get('/getAllRoads', roadsService.getAllRoadsController);

/**
 * @swagger
 * /api/roads/getRoadById/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags:
 *      - Rutas
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
roadRouter.get('/getRoadById/:id', roadsService.getByIdController);

/**
 * @swagger
 * /api/roads/CreateRoad:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *      - Rutas
 *     description: Crea un nuevo usuario y lo guarda en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               easyDescription:
 *                 type: string
 *               fullDescription:
 *                 type: string
 *               activities: 
 *               properties: 
 *                  _id: 
 *                    string
 *                  title: 
 *                    string
 *                  
 *     responses:
 *       201:
 *         description: Usuario creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
roadRouter.post('/CreateRoad', roadsService.CreateRoadController);

/**
 * @swagger
 * /api/road/UpdateRoadById/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags:
 *      - Rutas
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
 *               title:
 *                 type: string
 *               easyDescription:
 *                 type: string
 *               fullDescription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ruta actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
roadRouter.put('/UpdateRoadById/:id', roadsService.UpdateRoadByIdController);

/**
 * @swagger
 * /api/road/deleteRoadById/{id}:
 *   put:
 *     summary: Actualizar una Ruta por ID
 *     tags:
 *      - Rutas
 *     description: Actualiza los detalles de una Ruta específica por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ruta
 *     responses:
 *       200:
 *         description: Usuario Eliminado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
roadRouter.delete('/deleteRoadById/:id', roadsService.DeleteRoadByIdController);

export default roadRouter;
