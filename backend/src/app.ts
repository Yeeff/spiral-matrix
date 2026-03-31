import express, { Application, Request, Response } from 'express';
import caracolRoutes from './routes/caracol.routes';
import { errorHandler } from './middleware/errorHandler';
import { CORS_OPTIONS } from './config/cors';

const app: Application = express();

app.use(CORS_OPTIONS);
app.use(express.json());

// Routes
app.use('/caracol', caracolRoutes);

// Health check
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'API Running' });
});

app.use(errorHandler);

export default app;