import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.status).json({
      message: err.message
    });
    return;
  }

  res.status(500).json({
    message: 'Internal server error'
  });
};