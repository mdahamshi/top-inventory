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
function print (path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    console.log('%s /%s',
      layer.method.toUpperCase(),
      path.concat(split(layer.regexp)).filter(Boolean).join('/'))
  }
}

function split (thing) {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    var match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}

app._router.stack.forEach(print.bind(null, []))
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Try to visit http://localhost:${PORT}/api/health`);
});
