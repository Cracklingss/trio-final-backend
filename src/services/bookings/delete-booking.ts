import BookingsRepository from "@/repositories/BookingRepository";

export async function hardDeleteBookingService(id: string) {
  // Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  // Check if booking exists
  const bookingExists = await BookingsRepository.findById(id);
  if(!bookingExists) {
    return {
      status: "error",
      message: "Service doesn't exists",
      data: null
    }
  }

  // Hard delete booking
  const result = await BookingsRepository.hardDelete(id);

  return {
    status: "success",
    message: "Successfully deleted service",
    data: result
  }
}

export async function softDeleteBookingService(id: string) {
  // Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  // Check if booking is deactivated
  const serviceActive = await BookingsRepository.findById(id);
  if(!serviceActive?.isActive) {
    return {
      status: "error",
      message: "Service is already deactivated",
      data: null
    }
  }

  // Deactivate booking
  const result = await BookingsRepository.softDelete(id);

  return {
    status: "success",
    message: "Successfully deactivated booking",
    data: result
  }
}