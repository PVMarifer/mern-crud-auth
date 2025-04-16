import Cupon from '../models/cupon.model.js'

export const getCupons = async (req, res) => {
    const cupons = await cupons.find({})
       res.json(cupons)
};
export const createCupon = async (req, res) => {
     const {title, price, description}= req.body;
    
        const newCupon = new Cupon({
            title,
            price,
            description
        });
    
        const savedCupon = await newCupon.save()
        res.json(savedCupon);
};
export const getCupon = async (req, res) => {
    const cupon = await cupon.findById(req.params.id)
    if (!cupon) return res.status(404).json({message: 'Cupon no encontrado'})
    res.json(cupon)
};
export const deleteCupon = async (req, res) => {
    const cupon = await cupon.findByIdAndDelete(req.params.id)
    if (!cupon) return res.status(404).json({message: 'Cupon no encontrado'})
    res.json(cupon)
};
export const updateCupon = async (req, res) => {
    const cupon = await cupon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!cupon) return res.status(404).json({message:'Cupon no encontrado'})
 res.json(cupon)
};

