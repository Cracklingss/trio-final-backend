import ReviewRepository from "@/repositories/ReviewRepository";

export async function getReviewsService() {
  const result = await ReviewRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched reviews",
    data: result
  }
}

export async function getReviewByIdService(id: string) {
  // Check if id is provided
  if(!id) {
    return {
      status: "error",
      message: "No id provided"
    }
  }

  // Get review by id
  const result = await ReviewRepository.findById(id);

  return {
    status: "success",
    message: "Successfully fetched review by id",
    data: result
  }
}