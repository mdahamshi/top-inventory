import express from 'express';
import {
  getAllCategories,
  getCategorieById,
  createCategorie,
  updateCategorie,
  deleteCategorie,
} from '../controllers/categorieController.js';

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', getCategorieById);
router.post('/', createCategorie);
router.put('/:id', updateCategorie);
router.delete('/:id', deleteCategorie);

export default router;
