import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {getTask, getTasks, createTask, updateTask, deleteTask} from "../controllers/tasks.controller.js";
const router = Router()

//RUTAS PARA EL CRUD 
router.get('/tasks', authRequired, getTasks );
router.get('/tasks/:id', authRequired,getTask );//con un id especifico de tarea
router.post('/tasks', authRequired, createTask);
router.delete('/tasks/:id', authRequired, deleteTask );
router.put('/tasks/:id', authRequired, updateTask);

export default router

/*
1. Crear las rutas para el crud 
2. Crear los tasks controller 
3. Importar los tasks



*/