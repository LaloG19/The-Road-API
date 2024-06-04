import { Router } from 'express';
import { check } from 'express-validator';
import { Controller123 } from '../controllers/Controller123';
import { CreateUserController, getAllUsersController, getByIdController, UpdateUserByIdController } from '../controllers/Users/controller';

const router = Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: GET de prueba
 *     description: Retorna un mensaje que le envies
 *     parameters:
 *       - in: query
 *         name: param
 *         required: true
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
router.get(
  '/test',
  [
    check('param').isString().withMessage('[GET]: Endpoint de prueba Controller 123 falló.')
  ],
  Controller123
);
router.get(
  '/getUsers',
  getAllUsersController
);
router.get(
  '/getUserById',
  getByIdController
);
router.post(
  '/CreateUser',
  CreateUserController
);
router.put(
  '/UpdateUserById',
  UpdateUserByIdController
);

/* router.get(
  '/getUserController',
  [
    check('param').isString().withMessage('[GET]: Endpoint de prueba Get Usuarios falló.')
  ],
  getUserController
); */
 
export default router;
