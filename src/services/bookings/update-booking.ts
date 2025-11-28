import BookingsRepository from "@/repositories/BookingRepository";
import { BookingsData } from "@/types/bookings";

export async function updateBookingService(id: string, data: BookingsData) {
  //Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "Id is not provided",
    }
  }

  //Check if booking exists
  const serviceExists = await BookingsRepository.findById(id);
  if(!serviceExists) {
    return {
      status: "error",
      message: "Service not found",
    }
  }

  //Update booking
  const result = await BookingsRepository.update(id, data);

  return {
    status: "success",
    message: "Successfully updated service",
    data: result
  }
}

export async function reactivateBookingService(id: string) {
  //Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
    }
  }

  //Check if booking is already active
  const serviceActive = await BookingsRepository.findById(id);
  if(serviceActive?.isActive){
    return {
      status: "error",
      message: "Product is already activated",
    }
  }

  //Reactivate the booking
  const result = await BookingsRepository.reactivate(id);

  return {
    status: "success",
    message: " Successfully reactivated service",
    data: result
  }
}
