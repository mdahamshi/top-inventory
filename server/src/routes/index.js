import categoriesRoutes from './categories.js';
import authorsRoutes from './authors.js';
import booksRoutes from './books.js';

function registerRoutes(app, apiV) {
  app.use(`/api/${apiV}/categories`, categoriesRoutes);
  app.use(`/api/${apiV}/authors`, authorsRoutes);
  app.use(`/api/${apiV}/books`, booksRoutes);
}

export default registerRoutes;
