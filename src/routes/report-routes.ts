import { Router } from "express";
import ReportController from "@/controllers/ReportController";

const router = Router();

router.get("/reports", ReportController.getReports);
router.get("/report/by-id", ReportController.getReportById);
router.post("/report", ReportController.createReport);
router.post("/delete-report", ReportController.deleteReport);

export default router;
