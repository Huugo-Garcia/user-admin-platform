import { Router } from 'express';
import { healthCheck, healthCheckDB } from '../controllers/health.controller.js';

const router = Router();

router.get('/', healthCheck);
router.get('/db', healthCheckDB);

export default router;
