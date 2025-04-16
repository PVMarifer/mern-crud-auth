import {Router}from 'express';
import {getMenu, getMenus, createMenu, updateMenu, deleteMenu} from "../controllers/menu.controller.js"

const router = Router ()
router.get('/menu', getMenus)
router.post('/menu',createMenu)
router.delete('/menu/:id',deleteMenu)
router.get('/menu/:id', getMenu)
router.put('/menu/:id', updateMenu)

export default router
