import ReviewRepository from "@/repositories/ReviewRepository";

export async function deleteReviewService(id: string) {
  // Check if id is provided
  if(!id) {
    return {
      status: "error",
      message: "No id provided"
    }
  }

  await ReviewRepository.delete(id);

  return {
    status: "success",
    message: "Successfully deleted review"
  }
}