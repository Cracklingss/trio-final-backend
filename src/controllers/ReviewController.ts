import { Request, Response } from "express";
import {
  getReviewsService,
  getReviewByIdService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
} from "@/services/reviews";

class ReviewController {
  async createReview(req: Request, res: Response) {
    // Create review
    const result = await createReviewService(req.body);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async getReviews(req: Request, res: Response) {
    const result = await getReviewsService();

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async getReviewById(req: Request, res: Response) {
    const { id } = req.body;

    const result = await getReviewByIdService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async updateReview(req: Request, res: Response) {
    const { id, ...data } = req.body;

    const result = await updateReviewService(id, data);
    
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async deleteReview(req: Request, res: Response) {
    const { id } =  req.body;

    const result = await deleteReviewService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}

export default new ReviewController();
