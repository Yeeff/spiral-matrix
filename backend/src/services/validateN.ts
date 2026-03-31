import { AppError } from '../middleware/AppError';
import { ERROR_MESSAGES } from '../config/messages';

export const validateN = (n: any): number => {
  if (!n) {
    throw new AppError(ERROR_MESSAGES.REQUIRED, 400);
  }

  const trimmed = typeof n === 'string' ? n.trim() : n.toString().trim();
  
  if (trimmed === '') {
    throw new AppError(ERROR_MESSAGES.EMPTY, 400);
  }

  const parsed = Number(trimmed);

  if (isNaN(parsed)) {
    throw new AppError(ERROR_MESSAGES.NOT_A_NUMBER, 400);
  }

  if (!Number.isInteger(parsed)) {
    throw new AppError(ERROR_MESSAGES.NOT_INTEGER, 400);
  }

  if (parsed < 3 || parsed > 15) {
    throw new AppError(ERROR_MESSAGES.OUT_OF_RANGE, 400);
  }

  return parsed;
};