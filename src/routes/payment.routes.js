import {Router}from 'express';
import {getPayments, getPayment, createPayment, updatePayment, deletePayment} from "../controllers/payment.controller.js"

const router = Router ()

router.get('/payment', getPayments)
router.post('/payment',createPayment)
router.delete('/payment/:id', deletePayment)
router.get('/payment/:id',getPayment)
router.put('/payment/:id',updatePayment)


export default router
