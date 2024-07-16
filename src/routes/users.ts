import { Router } from 'express';
import { check } from 'express-validator';
import { CreateUserController, DeleteUserByIdController, getAllUsersController, getByIdController, getByMailController, UpdateUserByIdController } from '../controllers/Users/controller';
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
 *     summary: Obtiene todos los usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "609e67f6e559360015301b43"
 *                     description: ID único del usuario
 *                   username:
 *                     type: string
 *                     example: "usuario123"
 *                     description: Nombre de usuario
 *                   email:
 *                     type: string
 *                     example: "usuario@example.com"
 *                     description: Correo electrónico del usuario
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2023-07-17T19:30:00.000Z"
 *                     description: Fecha y hora de creación del usuario
 *             example:
 *               - _id: "609e67f6e559360015301b43"
 *                 username: "usuario123"
 *                 email: "usuario1@example.com"
 *                 createdAt: "2023-07-17T19:30:00.000Z"
 *               - _id: "609e67f6e559360015301b44"
 *                 username: "otrousuario"
 *                 email: "usuario2@example.com"
 *                 createdAt: "2023-07-18T10:15:00.000Z"
 */
userRouter.get('/getUsers', getAllUsersController);

/**
 * @swagger
 * /api/users/getUserById/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "609e67f6e559360015301b43"
 *                   description: ID único del usuario
 *                 username:
 *                   type: string
 *                   example: "usuario123"
 *                   description: Nombre de usuario
 *                 email:
 *                   type: string
 *                   example: "usuario@example.com"
 *                   description: Correo electrónico del usuario
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-07-17T19:30:00.000Z"
 *                   description: Fecha y hora de creación del usuario
 *             example:
 *               _id: "609e67f6e559360015301b43"
 *               username: "usuario123"
 *               email: "usuario1@example.com"
 *               createdAt: "2023-07-17T19:30:00.000Z"
 *       404:
 *         description: Usuario no encontrado
 */
userRouter.get('/getUserById/:id', getByIdController);

/**
 * @swagger
 * /api/users/createUser:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Juan"
 *                 description: Nombre del usuario
 *               lastname:
 *                 type: string
 *                 example: "Pérez"
 *                 description: Apellido del usuario
 *               rolename:
 *                 type: string
 *                 example: "Usuario estándar"
 *                 description: Rol del usuario
 *               email:
 *                 type: string
 *                 example: "juan@example.com"
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 example: "claveSegura123"
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                   description: Código de estado HTTP
 *                 message:
 *                   type: string
 *                   example: "Usuario Creado con Éxito!"
 *                   description: Mensaje descriptivo
 *                 data:
 *                   type: string
 *                   example: "609e67f6e559360015301b43"
 *                   description: ID del usuario creado
 *       400:
 *         description: Parámetros incorrectos o faltantes
 *       409:
 *         description: Ya existe un usuario con el mismo correo electrónico
 */
userRouter.post('/createUser', CreateUserController);

/**
 * @swagger
 * /api/users/updateUserById:
 *   put:
 *     summary: Actualiza un usuario por ID
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "609ae36e9a3e9c001f1e4b52"
 *                 description: ID del usuario a actualizar
 *               name:
 *                 type: string
 *                 example: "Juan"
 *                 description: Nuevo nombre del usuario
 *               lastname:
 *                 type: string
 *                 example: "Pérez"
 *                 description: Nuevo apellido del usuario
 *               rolename:
 *                 type: string
 *                 example: "Administrador"
 *                 description: Nuevo rol del usuario
 *               email:
 *                 type: string
 *                 example: "juan@example.com"
 *                 description: Nuevo correo electrónico del usuario
 *               password:
 *                 type: string
 *                 example: "nuevaClave123"
 *                 description: Nueva contraseña del usuario
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 */
userRouter.put('/updateUserById', UpdateUserByIdController);

/**
 * @swagger
 * /api/users/deleteUserById/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
userRouter.delete('/deleteUserById/:id', DeleteUserByIdController);
userRouter.post('/getUserByMail', getByMailController);
 
export default userRouter;
