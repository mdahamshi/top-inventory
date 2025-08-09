import categorie from './queries/categorie.js';
import author from './queries/author.js';
import book from './queries/book.js';
import { query } from './pool.js';
const db = {
  query,
  categorie,
  author,
  book,
};

export default db;
