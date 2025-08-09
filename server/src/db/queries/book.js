import { query } from '../pool.js';

const queries = {
  getAll: `
    SELECT 
      b.id,
      b.title,
      b.description,
      b.status,
      b.created_at,
      b.updated_at,
      c.id as category_id,
      CASE 
        WHEN c.id IS NULL THEN NULL
        ELSE jsonb_build_object(
          'id', c.id,
          'name', c.name
        )
      END AS category,
      jsonb_agg(
        jsonb_build_object(
          'id', a.id,
          'name', a.name
        )
      ) FILTER (WHERE a.id IS NOT NULL) AS authors
    FROM books b
    LEFT JOIN categories c ON b.category_id = c.id
    LEFT JOIN book_authors ba ON ba.book_id = b.id
    LEFT JOIN authors a ON ba.author_id = a.id
    GROUP BY b.id, c.id, c.name, c.description
    ORDER BY b.id;
  `,
  getById: `
    SELECT 
      b.id,
      b.title,
      b.description,
      b.status,
      b.created_at,
      b.updated_at,
      c.id as category_id,
      CASE 
        WHEN c.id IS NULL THEN NULL
        ELSE jsonb_build_object(
          'id', c.id,
          'name', c.name
        )
      END AS category,
      jsonb_agg(
        jsonb_build_object(
          'id', a.id,
          'name', a.name
        )
      ) FILTER (WHERE a.id IS NOT NULL) AS authors
    FROM books b
    LEFT JOIN categories c ON b.category_id = c.id
    LEFT JOIN book_authors ba ON ba.book_id = b.id
    LEFT JOIN authors a ON ba.author_id = a.id
    WHERE b.id = $1
    GROUP BY b.id, c.id, c.name, c.description;
  `,
  create: `
    INSERT INTO books (title, description, category_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
  update: `
    UPDATE books 
    SET title = $1, description = $2, category_id = $3, status = $4, updated_at = CURRENT_TIMESTAMP 
    WHERE id = $5 
    RETURNING *
  `,
  delete: `
    DELETE FROM books WHERE id = $1
  `,
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
