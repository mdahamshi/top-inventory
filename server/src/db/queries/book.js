import { query } from '../pool.js';

const queries = {
  getAll: 'SELECT * FROM books ORDER BY id ASC',
  getById: 'SELECT * FROM books WHERE id = $1',
  create: 'INSERT INTO books (title, description, category_id) VALUES ($1, $2, $3) RETURNING *', // <-- Placeholder
  update: 'UPDATE books SET title = $1, description = $2, category_id = $3, status = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *', // <-- Placeholder
  delete: 'DELETE FROM books WHERE id = $1',
};

const book = {
  getAll: async (params = []) => {
    const res = await query(queries.getAll, params);
    return res.rows;
  },
  getById: async (params = []) => {
    const res = await query(queries.getById, params);
    return res.rows[0];
  },
  create: async (params = []) => {
    const res = await query(queries.create, params);
    return res.rows[0];
  },
  update: async (params = []) => {
    const res = await query(queries.update, params);
    return res.rows[0];
  },
  delete: async (params = []) => {
    await query(queries.delete, params);
    return { deleted: params[0] };
  },
};

export default book;
