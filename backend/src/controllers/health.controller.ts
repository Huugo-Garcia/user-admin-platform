import { Request, Response } from 'express';
import { prisma } from '../config/prisma';

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
};

export const healthCheckDB = async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: 'OK',
      message: 'Database is OK',
      timestamp: new Date().toISOString()
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({
      status: 'Error',
      message: 'Database is not OK',
      error: errorMessage,
      timestamp: new Date().toISOString()
    });
  }
};
