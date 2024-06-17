import { Router } from 'express';
import { check } from 'express-validator';
import * as activityControllers from '../controllers/Activities/controller';
import { Controller123 } from '../controllers/Controller123';

const activityRouter = Router();

/**
 * @swagger
 * /api/activity/getActivity:
 *   get:
 *     summary: Obtener todos los usuarios
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
activityRouter.get('/getActivity',activityControllers.GetAllActivitiesController);

/**
 * @swagger
 * /api/activity/getActivityById/{id}:
 *   get:
 *     summary: Obtener usuario por ID
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
activityRouter.get('/getActivityById/:id', activityControllers.GetActivityByIdController);

/**
 * @swagger
 * /api/activity/createActivity:
 *   post:
 *     summary: Crear un nuevo usuario
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
activityRouter.post('/createActivity', activityControllers.CreateActivityController);

/**
 * @swagger
 * /api/activity/updateActivityById/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
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
activityRouter.put('/updateActivityById/:id', activityControllers.UpdateActivityByIdController);


/**
 * @swagger
 * /api/activity/deleteActivityById/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
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
activityRouter.delete('/deleteActivityById/:id', activityControllers.DeleteActivityByIdController);
 
export default activityRouter;
