import ReviewRepository from "@/repositories/ReviewRepository";
import { ReviewsData } from "@/types/reviews"

export async function createReviewService(data: ReviewsData) {
  if(
    !data.customerName ||
    !data.rate ||
    !data.review
  ) {
    return {
      status: "error",
      message: "Missing fields!"
    }
  }

  const result = await ReviewRepository.create(data);

  return {
    status: "success",
    message: "Successfully created review",
    data: result
  }
}