import { Router } from 'express';
import { check } from 'express-validator';
import { CreateUserController, getAllUsersController, getByIdController, UpdateUserByIdController } from '../controllers/Users/controller';

const userRouter = Router();

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

/* router.get(
  '/getUserController',
  [
    check('param').isString().withMessage('[GET]: Endpoint de prueba Get Usuarios falló.')
  ],
  getUserController
); */
 
export default userRouter;
