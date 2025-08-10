import { query } from '../pool.js';

const queries = {
  getAll: 'SELECT * FROM categories ORDER BY id ASC',
  getById: 'SELECT * FROM categories WHERE id = $1',
  searchByName:
    'SELECT * FROM categories WHERE name ILIKE $1 ORDER BY name ASC LIMIT 20',
  create:
    'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *',
  update:
    'UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *',
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
  searchByName: async (params = []) => {
    const res = await query(queries.searchByName, params);
    return res.rows;
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
