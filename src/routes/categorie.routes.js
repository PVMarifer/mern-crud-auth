import { Router } from 'express';
import {
  getCategories,
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie
} from "../controllers/categorie.controller.js";

const router = Router();

// Obtener todas las categorías
router.get('/categorie', getCategories);

// Crear una nueva categoría
router.post('/categorie', createCategorie);

// Eliminar una categoría por ID
router.delete('/categorie/:id', deleteCategorie);

// Obtener una categoría específica por ID
router.get('/categorie/:id', getCategorie);

// Actualizar una categoría por ID
router.put('/categorie/:id', updateCategorie);

export default router;
