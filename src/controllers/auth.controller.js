import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jsw from "jsonwebtoken"; //Este es el que va a "encriptar " o generar los permisos para poder acceder a ciertos modulos en el frontend

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
      res.json({
        //Estos son los datos que vamos a extraer del frontend. El frontend no tiene que saber la contrasena del usuario
        id: userSaved._id,   //Trae el email de la constante userSaved donde se guardaron los documentos.
        username: userSaved.username,
        email: userSaved.email,
      });

      
      
} catch (error) {
    console.log(error);
}
};

export const login = (req, res) => res.send('login');