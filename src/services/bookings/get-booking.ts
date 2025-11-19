import BookingRepository from "@/repositories/BookingRepository";

export async function getBookingsService() {
  const result = await BookingRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched bookings",
    data: result
  }
}

export async function getBookingByIdService(id: string) {
  // Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  // Check if booking exists
  const bookingExists = await BookingRepository.findById(id);
  if(!bookingExists) {
    return {
      status: "error",
      message: "Booking doesn't exists",
      data: null
    }
  }

  // Check if booking is active
  if(!bookingExists.isActive) {
    return {
      status: "error",
      message: "Booking is no longer active",
      data: null,
    }
  }

  return {
    status: "success",
    message: "Successfully fetched booking by ID",
    data: bookingExists
  }
}

export async function getAllActiveBookingService() {
  // Fetch all active bookings
  const result = await BookingRepository.findAllActive();

  return {
    status: "success",
    message: "Successfully fetched all active bookings",
    data: result
  }
}