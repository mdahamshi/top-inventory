import { query } from '../pool.js';

const queries = {
  getAll: 'SELECT * FROM categories ORDER BY id ASC',
  getById: 'SELECT * FROM categories WHERE id = $1',
  create: 'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *', // <-- Placeholder
  update: 'UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *', // <-- Placeholder
  delete: 'DELETE FROM categories WHERE id = $1',
};

const categorie = {
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

export default categorie;
