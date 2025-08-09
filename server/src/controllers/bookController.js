import db from '../db/db.js';
import { pool } from '../db/pool.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await db.book.getAll(); // Includes category_name now
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid book ID' });
  }

  try {
    const book = await db.book.getById([id]); // Includes category_name now
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    next(error);
  }
};
export const createBook = async (req, res, next) => {
  try {
    const { title, description, category_id, authors } = req.body;

    if (!title || !category_id) {
      return res.status(400).json({ error: 'Title and category_id are required' });
    }

    // 1. Create the book
    const newBook = await db.book.create([title, description ?? '', category_id]);

    // 2. If authors array exists, insert relations in book_authors
    if (Array.isArray(authors) && authors.length > 0) {
      // You may want to create a helper in your db layer for bulk insert, example:
      const insertPromises = authors.map(authorId =>
        db.query(
          `INSERT INTO book_authors (book_id, author_id) VALUES ($1, $2)`,
          [newBook.id, authorId]
        )
      );
      await Promise.all(insertPromises);
    }

    // 3. Return the full book object including category and authors
    // For simplicity, fetch the book by id (you already have a method for that)
    const bookWithRelations = await db.book.getById([newBook.id]);
    res.status(201).json(bookWithRelations);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid book ID' });

  const { title, description, category_id, status, authors } = req.body;

  if (!title || !category_id || !status) {
    return res.status(400).json({ error: 'Title, category_id, and status are required' });
  }



  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Update book main data
    const updateBookQuery = `
      UPDATE books 
      SET title = $1, description = $2, category_id = $3, status = $4, updated_at = CURRENT_TIMESTAMP
      WHERE id = $5
      RETURNING *;
    `;
    const { rows } = await client.query(updateBookQuery, [title, description ?? '', category_id, status, id]);
    if (rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'Book not found' });
    }
    // authors: array of author ids expected
    if (!Array.isArray(authors)) {
      return res.status(400).json({ error: 'Authors must be an array of author IDs' });
    }
    // Delete old authors
    await client.query('DELETE FROM book_authors WHERE book_id = $1', [id]);

    // Insert new authors
    if (authors.length > 0) {
      const insertValues = authors.map((_, idx) => `($1, $${idx + 2})`).join(',');
      const insertParams = [id, ...authors];
      const insertQuery = `INSERT INTO book_authors (book_id, author_id) VALUES ${insertValues}`;
      await client.query(insertQuery, insertParams);
    }

    await client.query('COMMIT');

    // Return updated book with authors & category joined
    // You can reuse your getById method or query here
    const updatedBook = await db.book.getById([id]);
    res.json(updatedBook);

  } catch (error) {
    await client.query('ROLLBACK');
    next(error);
  } finally {
    client.release();
  }
};

export const deleteBook = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid book ID' });
  }

  try {
    await db.book.delete([id]);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    next(error);
  }
};
