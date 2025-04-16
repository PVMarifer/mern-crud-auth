import {Router}from 'express';

import {getProduct, getProducts, deleteProduct, createProduct, updateProduct} from "../controllers/product.controller.js"

const router = Router ()
router.get('/menu', getProducts)
router.post('/menu',createProduct)
router.delete('/menu/:id',deleteProduct)
router.get('/menu/:id', getProduct)
router.put('/menu/:id', updateProduct)


export default router
