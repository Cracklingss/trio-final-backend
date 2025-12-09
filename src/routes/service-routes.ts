import { Router } from "express";
import ServiceController from "@/controllers/ServiceController";

const router = Router();

router.get("/services", ServiceController.getAllService);
router.post("/service/by-id", ServiceController.getServiceById);
router.get("/services/by-active", ServiceController.getAllActiveService);
router.post("/service", ServiceController.createService);
router.put("/service", ServiceController.updateService);
router.patch("/service/reactivate", ServiceController.reactivateService);
router.delete("/service", ServiceController.hardDeleteService);
router.patch("/service/deactivate", ServiceController.softDeleteService);

export default router;
