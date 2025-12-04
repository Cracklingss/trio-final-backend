import { Router } from "express";
import UserRoutes from "./users-routes";
import ReportRoutes from "./report-routes";
import ServiceRoutes from "./service-routes";
import BookingRoutes from "./booking-routes";

const router = Router();

router.use(UserRoutes);
router.use(ReportRoutes);
router.use(ServiceRoutes);
router.use(BookingRoutes);

export default router;