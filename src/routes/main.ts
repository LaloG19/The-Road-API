import { Router } from "express";
import userRouter from "./users";
import newsRoutes from './news';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/news', newsRoutes);


export default routes;