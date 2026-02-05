import express, { Request, Response, NextFunction } from 'express';
import routes from './routes/index';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// Handle routes not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'Error',
    message: 'Route not found'
  });
});

// Handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

export default app;
