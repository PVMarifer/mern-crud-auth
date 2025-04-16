import {Router}from 'express';
import {getCupon, getCupons, createCupon, updateCupon, deleteCupon} from "../controllers/cupon.controller.js"

const router = Router ()
router.get('/cupon', getCupons)
router.post('/cupon',createCupon)
router.delete('/cupon/:id',deleteCupon)
router.get('/cupon/:id', getCupon)
router.put('/cupon/:id', updateCupon)

export default router
