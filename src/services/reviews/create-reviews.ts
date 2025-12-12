import ReviewRepository from "@/repositories/ReviewRepository";
import UserRepository from "@/repositories/UserRepository";
import { ReviewsData } from "@/types/reviews"

export async function createReviewService(data: ReviewsData) {
  if(
    !data.customerName ||
    !data.laborerRate ||
    !data.review ||
    !data.laborerId
  ) {
    return {
      status: "error",
      message: "Missing fields!"
    }
  }

  const result = await ReviewRepository.create({
    customerName: data.customerName,
    laborerRate: data.laborerRate,
    review: data.review,
    laborerId: data.laborerId
  });

  const laborerRates = await ReviewRepository.findAll();
  const rate = laborerRates.filter((l) => l.laborerId === data.laborerId).map((l) => l.laborerRate)
  const sum = rate.reduce((a, b) => a + b, 0);
  const average = sum / rate.length;

  await UserRepository.update(data.laborerId, { rate: parseFloat(average.toFixed(2)) });

  return {
    status: "success",
    message: "Successfully created review",
    data: result
  }
}