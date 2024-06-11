import { Router } from "express";
import userRouter from "./users";
import newsRoutes from './news';
import roadRouter from "./roads";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/news', newsRoutes);
routes.use('/road', roadRouter);

export default routes;