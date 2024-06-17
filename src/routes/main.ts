import { Router } from "express";
import userRouter from "./users";
import newsRoutes from './news';
import roadRouter from "./roads";
import activityRouter from "./activities";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/news', newsRoutes);
routes.use('/roads', roadRouter);
routes.use('/activity', activityRouter);

export default routes;