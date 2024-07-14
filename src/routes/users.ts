import { Router } from 'express';
import { check } from 'express-validator';
import { CreateUserController, DeleteUserByIdController, getAllUsersController, getByIdController, UpdateUserByIdController } from '../controllers/Users/controller';
import { Controller123 } from '../controllers/Controller123';

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Usuarios
 *     description: CRUD, buscador y autenticación de usuarios 
 *
 *
 */

/**
 * @swagger
 * /api/users/getUsers:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Usuarios
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
userRouter.get('/getUsers', getAllUsersController);

/**
 * @swagger
 * /api/users/getUserById/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags:
 *       - Usuarios
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
userRouter.get('/getUserById/:id', getByIdController);

/**
 * @swagger
 * /api/users/createUser:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *       - Usuarios
 *     description: Crea un nuevo usuario y lo guarda en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               na'me:
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
userRouter.post('/createUser', CreateUserController);

/**
 * @swagger
 * /api/users/updateUserById:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags:
 *       - Usuarios
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
userRouter.put('/updateUserById', UpdateUserByIdController);

/**
 * @swagger
 * /api/users/deleteUserById/{id}:
 *   put:
 *     summary: Eliminar un usuario por ID
 *     tags:
 *       - Usuarios
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
userRouter.delete('/deleteUserById/:id', DeleteUserByIdController);
 
export default userRouter;
