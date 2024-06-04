import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const Controller123 = (req: Request, res: Response) => {
  const text = req.query.param;
  res.json({ message: '¡Test, endpoint Controller123!: ' + text });
};
