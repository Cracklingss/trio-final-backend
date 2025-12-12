import { Request, Response } from "express";
import {
  createBookingService,
  getAllActiveBookingService,
  getBookingByIdService,
  getBookingsService,
  updateBookingService,
  reactivateBookingService,
  hardDeleteBookingService,
  softDeleteBookingService,
  acceptBookingService,
  declineBookingService,
} from "@/services/bookings";

class BookingController {
  async getAllBookings(req: Request, res: Response) {
    const results = await getBookingsService();

    return res.status(200).json(results);
  }

  async getBookingById(req: Request, res: Response) {
    // Get id
    const { id } = req.body;

    // Call service by id
    const result = await getBookingByIdService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async createBooking(req: Request, res: Response) {
    // call create booking
    console.log(req.body);
    const result = await createBookingService(req.body);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
  
  async getAllActiveBookings(req: Request, res: Response) {
    // Call all active bookings
    const result = await getAllActiveBookingService();

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async updateBooking(req: Request, res: Response) {
    // Get bookings data
    const { id, ...data } = req.body;

    // Call update bookings
    const result = await updateBookingService(id, data);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async reactivateBooking(req: Request, res: Response) {
    // Get booking id
    const { id } = req.body;

    // Call reactivate booking
    const result = await reactivateBookingService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async hardDeleteBooking(req: Request, res: Response) {
    // Get booking id
    const { id } = req.body;

    // Call hard delete booking
    const result = await hardDeleteBookingService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async softDeleteBooking(req: Request, res: Response) {
    // Get booking id
    const { id } = req.body;

    // Call soft delete booking
    const result = await softDeleteBookingService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async acceptBooking(req: Request, res: Response) {
    // Get booking id
    const { id } = req.body;

    // Call accept booking service
    const result = await acceptBookingService(id);

    return res.status(200).json(result);
  }

  async declineBooking(req: Request, res: Response) {
    // Get booking id
    const { id } = req.body;

    // Call accept booking service
    const result = await declineBookingService(id);

    return res.status(200).json(result);
  }
}

export default new BookingController();