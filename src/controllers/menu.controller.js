import Menu from '../models/menu.model.js'

export const getMenus = async (req, res) => {
    const menus = await Menu.find({})
       res.json(menus)
};
export const createMenu = async (req, res) => {
     const {title, price, description}= req.body;
    
        const newMenu = new Menu({
            title,
            price,
            description
        });
    
        const savedMenu = await newMenu.save()
        res.json(savedMenu);
};
export const getMenu = async (req, res) => {
    const menu = await menu.findById(req.params.id)
    if (!menu) return res.status(404).json({message: 'Menu no encontrado'})
    res.json(menu)
};
export const deleteMenu = async (req, res) => {
    const menu = await menu.findByIdAndDelete(req.params.id)
    if (!menu) return res.status(404).json({message: 'Menu no encontrado'})
    res.json(menu)
};
export const updateMenu = async (req, res) => {
    const menu = await menu.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!menu) return res.status(404).json({message:'Menu no encontrado'})
 res.json(menu)
};

