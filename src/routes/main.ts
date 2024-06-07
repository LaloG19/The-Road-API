import { Router } from "express";
import userRouter from "./users";

const routes = Router();

routes.use('/users', userRouter);

export default routes;