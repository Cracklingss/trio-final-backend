import { Router } from "express";
import BookingController from "@/controllers/BookingController";

const router = Router();

router.get("/bookings", BookingController.getAllBookings);
router.get("/bookings/by-id", BookingController.getBookingById);
router.get("/bookings/by-active", BookingController.getAllActiveBookings);
router.post("/booking", BookingController.createBooking);
router.put("/booking", BookingController.updateBooking);
router.patch("/booking/reactivate", BookingController.reactivateBooking);
router.post("/booking", BookingController.hardDeleteBooking);
router.patch("/booking/deactivate", BookingController.softDeleteBooking);
router.post("/booking/accept", BookingController.acceptBooking);
router.post("/booking/decline", BookingController.declineBooking);

export default router; 