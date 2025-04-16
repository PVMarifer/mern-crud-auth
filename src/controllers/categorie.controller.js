import Categorie from '../models/categorie.model.js'

export const getCategorie = async (req, res) => {
    const categories = await Categorie.find({})
       res.json(categories)
};
export const createCategorie = async (req, res) => {
     const {title, description}= req.body;
    
        const newCategorie = new Categorie({
            title,
            description
        });
    
        const savedCategorie = await newCategorie.save()
        res.json(savedCategorie);
};
export const getCategories = async (req, res) => {

    const categorie = await categorie.findById(req.params.id)
    if (!categorie) return res.status(404).json({message: 'Categoria no encontrada'})
    res.json(categorie)
};
export const deleteCategorie = async (req, res) => {
    const categorie = await categorie.findByIdAndDelete(req.params.id)
    if (!categorie) return res.status(404).json({message: 'Categoria no encontrada'})
    res.json(categorie)
};
export const updateCategorie= async (req, res) => {
    const categorie = await categorie.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!categorie) return res.status(404).json({message:'Categoria no encontrada'})
 res.json(categorie)
};

