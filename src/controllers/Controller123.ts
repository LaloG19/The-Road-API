import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const Controller123 = (req: Request, res: Response) => {
  const errors = validationResult(req);
  const text = req.query.param;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json({ message: '¡Test, endpoint Controller123!: ' + text });
};
