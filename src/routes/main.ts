import { Router } from "express";
import userRouter from "./users";
import newsRoutes from './news';
import roadRouter from "./roads";
import activityRouter from "./activities";
import genreRouter from "./genres";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/news', newsRoutes);
routes.use('/roads', roadRouter);
routes.use('/activity', activityRouter);
routes.use('/genre', genreRouter);

export default routes;