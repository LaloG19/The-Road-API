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
 *     summary: Obtener todas las rutas
 *     tags:
 *       - Rutas
 *     description: Retorna una lista de todas las rutas disponibles
 *     responses:
 *       200:
 *         description: Lista de rutas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID único de la ruta
 *                   title:
 *                     type: string
 *                     description: Título de la ruta
 *                   easyDescription:
 *                     type: string
 *                     description: Descripción corta de la ruta
 *                   fullDescription:
 *                     type: string
 *                     description: Descripción completa de la ruta
 *                   activities:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Array de IDs de actividades asociadas a la ruta
 *                 example:
 *                   status: 200
 *                   message: "Todas las Rutas obtenidas!"
 *                   data:
 *                     - _id: "6668c9722ab4373e5a371447"
 *                       title: "Ruta 1"
 *                       easyDescription: "Lorem ipsum dolor sit admet"
 *                       fullDescription: "Lorem ipsum dolor sit admet, request kit ad mater dolor sit"
 *                       activities:
 *                         - "665e0947a8482a9f87f7acc0"
 */
roadRouter.get('/getAllRoads', roadsService.getAllRoadsController);

/**
 * @swagger
 * /api/roads/getRoadById/{id}:
 *   get:
 *     summary: Obtener una ruta por ID
 *     tags:
 *       - Rutas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la ruta
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ruta obtenida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                   description: Código de estado de la respuesta
 *                 message:
 *                   type: string
 *                   example: "Ruta Obtenida"
 *                   description: Mensaje descriptivo de la respuesta
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6668c9722ab4373e5a371447"
 *                       description: ID único de la ruta
 *                     title:
 *                       type: string
 *                       example: "Ruta 1"
 *                       description: Título de la ruta
 *                     easyDescription:
 *                       type: string
 *                       example: "Lorem ipsum dolor sit admet"
 *                       description: Descripción corta de la ruta
 *                     fullDescription:
 *                       type: string
 *                       example: "Lorem ipsum dolor sit admet, request kit ad mater dolor sit"
 *                       description: Descripción completa de la ruta
 *                     activities:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example:
 *                         - "665e0947a8482a9f87f7acc0"
 *                       description: Array de IDs de actividades asociadas a la ruta
 *                     activityDetails:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "665e0947a8482a9f87f7acc0"
 *                             description: ID único de la actividad
 *                           title:
 *                             type: string
 *                             example: "Actividad 1"
 *                             description: Título de la actividad
 *                           description:
 *                             type: string
 *                             example: "Descripcion generica de actividad 1"
 *                             description: Descripción de la actividad
 *                           preguntas:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                   example: "Pregunta 1"
 *                                   description: Nombre de la pregunta
 *                                 options:
 *                                   type: array
 *                                   items:
 *                                     type: object
 *                                     properties:
 *                                       title:
 *                                         type: string
 *                                         example: "Opcion 1"
 *                                         description: Título de la opción
 *                                       valid:
 *                                         type: boolean
 *                                         example: false
 *                                         description: Indicador de validez de la opción
 *                                       id:
 *                                         type: integer
 *                                         example: 1
 *                                         description: ID único de la opción
 *                             description: Lista de preguntas asociadas a la actividad
 *                         description: Detalles de cada actividad asociada a la ruta
 *                       description: Detalles de actividades asociadas a la ruta
 *                   description: Datos de la ruta obtenida
 */
roadRouter.get('/getRoadById/:id', roadsService.getByIdController);

/**
 * @swagger
 * /api/roads/createRoad:
 *   post:
 *     summary: Crea una nueva ruta
 *     tags:
 *       - Rutas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nueva Ruta"
 *                 description: Título de la nueva ruta
 *               easyDescription:
 *                 type: string
 *                 example: "Descripción breve de la nueva ruta"
 *                 description: Descripción breve de la nueva ruta
 *               fullDescription:
 *                 type: string
 *                 example: "Descripción completa detallada de la nueva ruta"
 *                 description: Descripción completa detallada de la nueva ruta
 *               activities:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "665e0947a8482a9f87f7acc0"
 *                   description: ID de la actividad enlazada a la ruta
 *     responses:
 *       201:
 *         description: Ruta creada exitosamente
 */
roadRouter.post('/CreateRoad', roadsService.CreateRoadController);

/**
 * @swagger
 * /api/roads/updateRoadById:
 *   put:
 *     summary: Actualiza una ruta por su ID
 *     tags:
 *       - Rutas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "6668c9722ab4373e5a371447"
 *                 description: ID de la ruta a actualizar
 *               title:
 *                 type: string
 *                 example: "Ruta actualizada"
 *                 description: Nuevo título de la ruta
 *               easyDescription:
 *                 type: string
 *                 example: "Descripción breve actualizada"
 *                 description: Nueva descripción breve de la ruta
 *               fullDescription:
 *                 type: string
 *                 example: "Descripción completa detallada actualizada"
 *                 description: Nueva descripción completa detallada de la ruta
 *               activities:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "665e0947a8482a9f87f7acc0"
 *                       description: ID de la actividad enlazada a la ruta
 *     responses:
 *       200:
 *         description: Ruta actualizada exitosamente
 */
roadRouter.put('/UpdateRoadById/:id', roadsService.UpdateRoadByIdController);

/**
 * @swagger
 * /api/roads/deleteRoadById/{id}:
 *   delete:
 *     summary: Elimina una ruta por su ID
 *     tags:
 *       - Rutas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ruta a eliminar
 *     responses:
 *       200:
 *         description: Ruta eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                   description: Código de estado de la respuesta
 *                 message:
 *                   type: string
 *                   example: Ruta eliminada exitosamente
 *                   description: Mensaje descriptivo de la respuesta
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6668c9722ab4373e5a371447"
 *                       description: ID de la ruta eliminada
 */

roadRouter.delete('/deleteRoadById/:id', roadsService.DeleteRoadByIdController);

export default roadRouter;
