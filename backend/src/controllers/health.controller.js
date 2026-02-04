import { pool } from '../config/db.js';

export const healthCheck = (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
};

export const healthCheckDB = async (req, res) => {
  try {
    await pool.query('SELECT NOW()');
    res.status(200).json({
      status: 'OK',
      message: 'Database is OK',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: 'Database is not OK',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};
