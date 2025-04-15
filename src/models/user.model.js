import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email: { 
        type: String,
        required: true,
        trim: true,
        unique: true
    
    },
    password: {
        type: String,
        required: true,
    }
    
}, {
    timestamps: true
})

export default mongoose.model ('User', UserSchema) //va a interactuar con la BD
// Con este esquema, mongoDB entiende como guardarlo con todo el modelo de la coleccion de User 
//con este model se podran hacer consultas