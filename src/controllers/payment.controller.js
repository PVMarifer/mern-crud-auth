import paymentModel from '../models/payment.model.js';
import Payment from '../models/payment.model.js'

export const getPayments = async (req, res) => {
    const payments = await Payment.find({})
       res.json(payments)
};
export const createPayment = async (req, res) => {
     const {PaymentM, description}= req.body;
    
        const newPayment = new Payment({
            PaymentM,
            description
        });
    
        const savedPayment = await newPayment.save()
        res.json(savedPayment);
};
export const getPayment = async (req, res) => {};
const payment = await payment.findById(req.params.id)
if (!payment) return res.status(404).json({message: 'Pago no encontrado'})
res.json(payment)

export const deletePayment = async (req, res) => {
    const payment = await payment.findByIdAndDelete(req.params.id)
    if (!payment) return res.status(404).json({message: 'Pago no encontrado'})
    res.json(payment)
};
export const updatePayment = async (req, res) => {
    const payment = await categorie.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!payment) return res.status(404).json({message:'Pago no encontrada'})
 res.json(payment)
};

