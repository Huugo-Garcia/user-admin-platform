import { Router, Request, Response } from 'express';
import healthRoutes from './health.routes';

const router = Router();

// Register routes
router.use('/health', healthRoutes);

// Default route
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'User Admin Platform API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      healthDB: '/health/db'
    }
  });
});

export default router;
