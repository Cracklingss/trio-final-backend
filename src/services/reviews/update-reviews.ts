import ReviewRepository from "@/repositories/ReviewRepository";
import { ReviewsData } from "@/types/reviews"

export async function updateReviewService(id: string, data: Partial<ReviewsData>) {
  // Chcek if  no id proviede
  if(!id) {
    return {
      status: "error",
      message: "No id provided"
    }
  }

  await ReviewRepository.update(id, data);

  return {
    status: "success",
    message: "Successfully updated review"
  }
}