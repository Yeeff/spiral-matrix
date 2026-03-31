import express, { Application, Request, Response } from 'express';
import caracolRoutes from './routes/caracol.routes';

const app: Application = express();

app.use(express.json());

// Routes
app.use('/caracol', caracolRoutes);

// Health check
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'API Running' });
});

export default app;