import { Router } from 'express';
import healthRoutes from './health.routes.js';

const router = Router();

// Register routes
router.use('/health', healthRoutes);

// Default route
router.get('/', (req, res) => {
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
