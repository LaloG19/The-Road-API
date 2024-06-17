import { Router } from 'express';
import { check } from 'express-validator';
import { CreateUserController, DeleteUserByIdController, getAllUsersController, getByIdController, UpdateUserByIdController } from '../controllers/Users/controller';
import { Controller123 } from '../controllers/Controller123';

const userRouter = Router();

/**
 * @swagger
 * /api/users/getUsers:
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
userRouter.get('/getUsers', getAllUsersController);

/**
 * @swagger
 * /api/users/getUserById/{id}:
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
userRouter.get('/getUserById/:id', getByIdController);

/**
 * @swagger
 * /api/users/CreateUser:
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
userRouter.post('/CreateUser', CreateUserController);

/**
 * @swagger
 * /api/users/UpdateUserById/{id}:
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
userRouter.put('/UpdateUserById/:id', UpdateUserByIdController);


/**
 * @swagger
 * /api/users/deleteUserById/{id}:
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
userRouter.delete('/deleteUserById/:id', DeleteUserByIdController);
 
export default userRouter;
