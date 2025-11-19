import { Router } from "express";
import UserRoutes from "@/routes/users-routes";

const router = Router();

router.use(UserRoutes);

export default router;