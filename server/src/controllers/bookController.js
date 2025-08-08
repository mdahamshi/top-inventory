import db from '../db/db.js';

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
    const { title, description, category_id } = req.body;

    if (!title || !category_id) {
      return res.status(400).json({ error: 'Title and category_id are required' });
    }

    const newBook = await db.book.create([title, description ?? '', category_id]);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid book ID' });
  }

  try {
    const { title, description, category_id, status } = req.body;

    if (!title || !category_id || !status) {
      return res.status(400).json({ error: 'Title, category_id, and status are required' });
    }

    const updatedBook = await db.book.update([title, description ?? '', category_id, status, id]);
    if (!updatedBook) return res.status(404).json({ error: 'Book not found' });

    res.json(updatedBook);
  } catch (error) {
    next(error);
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
