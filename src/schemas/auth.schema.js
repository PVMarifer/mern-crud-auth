import {z} from 'zod';
import { register } from '../controllers/auth.controller.js';

export const registerSchema = z.object ({
username: z.string({
    required_error: 'El nombre de usuario es requerrido'
}),
email: z.string({
    required_error: 'El Email es requerido'
}).email({
    message: 'Email inválido'
}),     
password: z.string({
    required_error: 'La contraseña es requerida'
}).min(6, {
    message: 'La contraseña debe tener mínimo 6 caracteres'
})

});

export const loginSchema = z.object ({
   
    email: z.string({
        required_error: "El email es requerrido", 
    }).email({
        message: "Invalid email",
    }), 
    password: z.string ({
        required_error: "La contraseña es requerrida",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
    }),
})