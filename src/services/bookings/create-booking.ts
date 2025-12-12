import BookingRepository from "@/repositories/BookingRepository";
import { BookingsData } from "@/types/bookings"

export async function createBookingService(data: BookingsData) {
  //Validate fields
  if(
    !data.hasReviewed ||
    !data.bookingDate ||
    !data.bookingTime ||
    !data.address ||
    !data.bookerName ||
    !data.bookerContact ||
    !data.bookerEmail ||
    !data.details 
  ) {
    return {
      status: "error",
      message: "Error, missing fields!"
    }
  }

  //Create data
  const result = await BookingRepository.create({ 
    hasReviewed: data.hasReviewed,
    serviceName: data.serviceName,
    bookingDate: data.bookingDate,
    bookingTime: data.bookingTime,
    address: data.address,
    bookerName: data.bookerName,
    bookerContact: data.bookerContact,
    bookerEmail: data.bookerEmail,
    details: data.details,
    laborerId: data.laborerId,
    customerId: data.customerId
   });

  return {
    status: "success",
    message: "Successfully created booking",
    data: result
  }
}