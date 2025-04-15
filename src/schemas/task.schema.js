import {z} from 'zod';

export const createTaskSchema = z.object (
    {
        title: z.string ({
            required_error: "El titulo de la tarea es requerido",
        }),
        description: z.string ({
            required_error: "La descripcion de la tarea es necesaria",
        }),
        date: z.string().datetime().optional(),
    }
);