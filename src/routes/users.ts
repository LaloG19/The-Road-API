import { Router } from 'express';
import { check } from 'express-validator';
import { CreateUserController, getAllUsersController, getByIdController, UpdateUserByIdController } from '../controllers/Users/controller';
import { Controller123 } from '../controllers/Controller123';

const userRouter = Router();
/**
 * @swagger
 * /api/users/getUsers:
 *   get:
 *     summary: GET de prueba
 *     description: Retorna un mensaje que le envies
 *     parameters:
 *       - in: query
 *         name: param
 *         required: false
 *         schema:
 *           type: string
 *         description: Un parámetro de ejemplo
 *     responses:
 *       200:
 *         description: Mensaje de éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
userRouter.get(
  '/getUsers',
  getAllUsersController
);
userRouter.get(
  '/getUserById/:id',
  getByIdController
);
userRouter.post(
  '/CreateUser',
  CreateUserController
);
userRouter.put(
  '/UpdateUserById/:id',
  UpdateUserByIdController
);

userRouter.get(
  '/test',
  [
    check('param').isString().withMessage('[GET]: Endpoint de prueba Get Usuarios falló.')
  ],
  Controller123
);
 
export default userRouter;
