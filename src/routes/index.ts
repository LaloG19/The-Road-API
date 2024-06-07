import { Router } from 'express';
import { check } from 'express-validator';
import { Controller123 } from '../controllers/Controller123';

const router = Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: GET de prueba
 *     description: Retorna un mensaje que le envie
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

export default router;
