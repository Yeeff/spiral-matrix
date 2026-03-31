import { Request, Response } from 'express';
import { caracolService } from '../services/caracol.service';

export const getCaracol = (req: Request, res: Response): void => {
  const nParam = req.params.n;
  const n = typeof nParam === 'string' ? parseInt(nParam, 10) : parseInt(nParam[0], 10);

  if (isNaN(n) || n < 3 || n > 15) {
    res.status(400).json({
      error: 'El parámetro debe ser un número entero entre 3 y 15'
    });
    return;
  }

  const matrix = caracolService.generateCaracol(n);
  res.json(matrix);
};