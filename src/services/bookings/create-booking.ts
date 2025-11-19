import BookingRepository from "@/repositories/BookingRepository";
import { BookingsData } from "@/types/bookings"

export async function createBookingService(data: BookingsData) {
  //Validate fields
  if(
    !data.bookingTime ||
    !data.address ||
    !data.bookerName ||
    !data.bookerContact ||
    !data.details 
  ) {
    return {
      status: "error",
      message: "Error, missing fields!"
    }
  }

  //Create data
  const result = await BookingRepository.create({ 
    bookingTime: data.bookingTime,
    address: data.address,
    bookerName: data.bookerName,
    bookerContact: data.bookerContact,
    details: data.details,
    isActive: data.isActive
   });

  return {
    status: "success",
    message: "Successfully created booking",
    data: result
  }
}