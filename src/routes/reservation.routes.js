import {Router} from 'express'
import {getReservation, getReservations, createReservation, updateReservation, deleteReservartion} from "../controllers/reservation.controller.js";
const router = Router()

//RUTAS PARA EL CRUD 

router.get('/reservation', getReservations);

router.post('/reservation', createReservation);

router.delete('/reservation/:id', deleteReservartion);

router.get('/reservation/:id', getReservation);

router.put('/reservation/:id', updateReservation);


export default router
