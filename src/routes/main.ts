import { Router } from "express";
import userRouter from "./users";

const routes = Router();
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
routes.use('/users', userRouter);

export default routes;