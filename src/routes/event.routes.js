import { Router } from 'express';
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} from "../controllers/event.controller.js";

const router = Router();

router.get('/event', getEvents);

router.post('/event', createEvent);

router.delete('/event/:id', deleteEvent);

router.get('/event/:id', getEvent);

router.put('/event/:id', updateEvent);

export default router;
