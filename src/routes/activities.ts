import { Router } from 'express';
import { check } from 'express-validator';
import * as activityControllers from '../controllers/Activities/controller';
import { Controller123 } from '../controllers/Controller123';

const activityRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Actividades
 *     description: CRUD y buscador de actividades
 *
 *
 */

/**
 * @swagger
 * /api/activity/getActivity:
 *   get:
 *     summary: Obtener todas las actividades
 *     tags:
 *       - Actividades
 *     description: Retorna una lista de todas las actividades dadas de alta en la base de datos
 *     responses:
 *       200:
 *         description: Lista de actividades
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
 *                   example: Todas las Actividades obtenidas!
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 6691f5c11ef9004af1f9504b
 *                       title:
 *                         type: string
 *                         example: Actividad 2
 *                       description:
 *                         type: string
 *                         example: Descripcion generica de actividad 2
 *                       preguntas:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: Pregunta 1
 *                             options:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   title:
 *                                     type: string
 *                                     example: Opcion 1
 *                                   valid:
 *                                     type: boolean
 *                                     example: false
 *                                   id:
 *                                     type: integer
 *                                     example: 1
 */
activityRouter.get('/getActivity',activityControllers.GetAllActivitiesController);

/**
 * @swagger
 * /api/activity/getActivityById/{id}:
 *   get:
 *     summary: Obtener actividad por ID
 *     tags:
 *       - Actividades
 *     description: Retorna una actividad específica por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la actividad
 *     responses:
 *       200:
 *         description: Actividad encontrada
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
 *                   example: Actividad Obtenida
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 6691f5c11ef9004af1f9504b
 *                     title:
 *                       type: string
 *                       example: Actividad 2
 *                     description:
 *                       type: string
 *                       example: Descripcion generica de actividad 2
 *                     preguntas:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: Pregunta 1
 *                           options:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 title:
 *                                   type: string
 *                                   example: Opcion 1
 *                                 valid:
 *                                   type: boolean
 *                                   example: false
 *                                 id:
 *                                   type: integer
 *                                   example: 1
 */
activityRouter.get('/getActivityById/:id', activityControllers.GetActivityByIdController);

/**
 * @swagger
 * /api/activity/createActivity:
 *   post:
 *     summary: Crear una nueva actividad
 *     tags:
 *       - Actividades
 *     description: Crea una nueva actividad y la guarda en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Actividad 2
 *               description:
 *                 type: string
 *                 example: Descripcion generica de actividad 2
 *               preguntas:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: Pregunta 1
 *                     options:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           title:
 *                             type: string
 *                             example: Opcion 1
 *                           valid:
 *                             type: boolean
 *                             example: false
 *                           id:
 *                             type: integer
 *                             example: 1
 *     responses:
 *       200:
 *         description: Actividad creada con éxito
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
 *                   example: Actividad Creada con Exito!
 *                 data:
 *                   type: string
 *                   example: 6694200e1b9e53a8c358c330
 */
activityRouter.post('/createActivity', activityControllers.CreateActivityController);

/**
 * @swagger
 * /api/activity/updateActivityById:
 *   put:
 *     summary: Actualizar una actividad por ID
 *     tags:
 *       - Actividades
 *     description: Actualiza los detalles de una actividad específica por su ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: 6691f5c11ef9004af1f9504b
 *               title:
 *                 type: string
 *                 example: Actividad Actualizada
 *               description:
 *                 type: string
 *                 example: Descripcion actualizada de la actividad
 *               preguntas:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: Pregunta Actualizada
 *                     options:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           title:
 *                             type: string
 *                             example: Opcion Actualizada
 *                           valid:
 *                             type: boolean
 *                             example: true
 *                           id:
 *                             type: integer
 *                             example: 1
 *     responses:
 *       200:
 *         description: Actividad actualizada con éxito
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
 *                   example: Actividad Actualizada con Exito!
 *                 data:
 *                   type: object
 *                   properties:
 *                     acknowledged:
 *                       type: boolean
 *                       example: true
 *                     modifiedCount:
 *                       type: integer
 *                       example: 1
 *                     upsertedId:
 *                       type: string
 *                       example: null
 *                     upsertedCount:
 *                       type: integer
 *                       example: 0
 *                     matchedCount:
 *                       type: integer
 *                       example: 1
 */
activityRouter.put('/updateActivityById', activityControllers.UpdateActivityByIdController);

/**
 * @swagger
 * /api/activity/deleteActivityById/{id}:
 *   delete:
 *     summary: Eliminar una actividad por ID
 *     tags:
 *       - Actividades
 *     description: Elimina una actividad específica por su ID si existe en la base de datos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la actividad
 *     responses:
 *       200:
 *         description: Actividad eliminada con éxito
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
 *                   example: Actividad eliminada con éxito
 *                 data:
 *                   type: string
 *                   example: 6694200e1b9e53a8c358c330
 *       404:
 *         description: Actividad no encontrada
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
 *                   example: Actividad no encontrada
 */
activityRouter.delete('/deleteActivityById/:id', activityControllers.DeleteActivityByIdController);
 
export default activityRouter;
