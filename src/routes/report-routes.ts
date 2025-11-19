import { Router } from "express";
import ReportController from "@/controllers/ReportController";

const router = Router();

router.get("/reports", ReportController.getReports);
router.get("/reports/by-id", ReportController.getReportById);
router.post("reports", ReportController.createReport);
router.delete("/reports", ReportController.deleteReport);

export default router;