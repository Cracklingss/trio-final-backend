import { Router } from "express";
import ReviewController from "@/controllers/ReviewController";

const router = Router();

router.get("/reviews", ReviewController.getReviews);
router.get("/review-by-id", ReviewController.getReviewById);
router.post("/review", ReviewController.createReview);
router.put("/review", ReviewController.updateReview);
router.delete("/review", ReviewController.deleteReview);

export default router;