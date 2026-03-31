import { Request, Response, NextFunction } from 'express';
import { caracolService } from '../services/caracol.service';
import { AppError } from '../middleware/AppError';
import { ERROR_MESSAGES } from '../config/messages';

export const getCaracol = (req: Request, res: Response, next: NextFunction): void => {

  if (!req.params.n) {
    next(new AppError(ERROR_MESSAGES.REQUIRED, 400));
    return;
  }

  try {
    const matrix = caracolService.generateCaracol(req.params.n);
    res.json(matrix);
  } catch (error) {
    next(error);
  }
};