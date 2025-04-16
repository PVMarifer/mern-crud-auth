import { Router } from 'express';
import {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview
} from "../controllers/review.controller.js";

const router = Router();

router.get('/review',   getReviews,);

router.post('/review', createReview);

router.delete('/review/:id', deleteReview);

router.get('/review/:id', getReview);

router.put('/review/:id', updateReview);

export default router;
