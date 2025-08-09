import db from '../db/db.js';

export const getAllCategories = async (req, res, next) => {
  try {
    const search = req.query.search?.trim();
    let items;

    if (search) {
      items = await db.categorie.searchByName([`%${search}%`]);
    } else {
      items = await db.categorie.getAll();
    }

    res.json(items);
  } catch (error) {
    next(error);
  }
};


export const getCategorieById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const item = await db.categorie.getById([id]);
    if (!item) return res.status(404).json({ error: 'Categorie not found' });
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const createCategorie = async (req, res, next) => {
  try {
    // NOTE: You must customize these params according to your model
    const { name, description } = req.body;
    const newItem = await db.categorie.create([name, description]);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

export const updateCategorie = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    // NOTE: You must customize these params according to your model
    const { name, description } = req.body;
    const updatedItem = await db.categorie.update([name, description, id]);
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
};

export const deleteCategorie = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    await db.categorie.delete([id]);
    res.json({ message: 'Categorie deleted' });
  } catch (error) {
    next(error);
  }
};
