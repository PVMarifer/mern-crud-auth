import {Router}from 'express';
import {getMenu, getCategorie, createCategorie, updateCategorie, deleteCategorie} from "../controllers/categorie.controller.js"

const router = Router ()
router.get('/categorie',)
router.post('/categorie',)
router.delete('/categorie/:id',)
router.get('/categorie/:id',)
router.put('/categorie/:id',)


export default router
