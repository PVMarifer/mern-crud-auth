import Product from '../models/product.model.js'

export const getProducts = async (req, res) => {
    const products = await Product.find({})
       res.json(products)
};
export const createProduct = async (req, res) => { 
    const {title, price, description}= req.body;

    const newProduct = new Product({
        title,
        price,
        description,
        
    });

    const savedProduct = await newProduct.save()
    res.json(savedProduct);
};

export const getProduct = async (req, res) => {
    const product = await product.findById(req.params.id)
    if (!product) return res.status(404).json({message: 'Producto no encontrado'})
    res.json(product)

};
export const deleteProduct = async (req, res) => {
    const product = await product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({message: 'Producto no encontrado'})
    res.json(product)
};

export const updateProduct = async (req, res) => {
    const product = await product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!product) return res.status(404).json({message:'Producto no encontrada'})
 res.json(product)
};

