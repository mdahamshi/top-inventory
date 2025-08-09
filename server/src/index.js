import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import registerRoutes from './routes/index.js';
import logger, { logError } from './utils/logger.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// ✅ Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is healthy 🚀' });
});

const API_VERSION = process.env.API_VERSION || 'v1';
registerRoutes(app, API_VERSION);

// 404 capture
app.use((req, res, next) => {
  const err = new Error('Not found');
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  logError(err);
  res.status(status).json({
    error: true,
    status,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Try to visit http://localhost:${PORT}/api/health`);
});
