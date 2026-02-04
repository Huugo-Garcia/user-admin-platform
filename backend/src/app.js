import express from 'express';
import routes from './routes/index.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// Handle routes not found
app.use((req, res) => {
  res.status(404).json({
    status: 'Error',
    message: 'Route not found'
  });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

export default app;
