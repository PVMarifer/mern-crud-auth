import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
   const {email, password, username} = req.body;
   
try {

 const passwordHash =  await bcrypt.hash(password, 10) // la libreria de bcryptjs tiene la pocion de hash. Hash ayuda a encriptar la contrase;a

    const newUser = new User ({
        username,
        email,
        password: passwordHash, 
      });

      const userSaved = await newUser.save();
      const token = await createAccessToken({id: userSaved._id});
     
        res.cookie("token", token) //Se guarda en una cookie por defecto para que el frontend no tenga que leer todo el request body
        res.json({
        //Estos son los datos que vamos a extraer del frontend. El frontend no tiene que saber la contrasena del usuario
        id: userSaved._id,   //Trae el email de la constante userSaved donde se guardaron los documentos.
        username: userSaved.username,
        email: userSaved.email,
      });
      
      
} catch (error) {
    res.status(500).json({Message: error.Message});
}
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    
 try {
    const userFound = await User.findOne({email});
    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});

    const isMatch =  await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});

    const token = await createAccessToken({id: userFound._id});
        
            res.cookie("token", token); //Se guarda en una cookie por defecto para que el frontend no tenga que leer todo el request body
            res.json({
            //Estos son los datos que vamos a extraer del frontend. El frontend no tiene que saber la contrasena del usuario
            id: userFound._id,   //Trae el email de la constante userSaved donde se guardaron los documentos.
            username: userFound.username,
            email: userFound.email,
        });
        
        
 } catch (error) {
     res.status(500).json({Message: error.Message});
 }
 };

 export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    }); //Se resetea el token
    return res.sendStatus(200);
 };
 
 export const profile =async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email

    })
 }