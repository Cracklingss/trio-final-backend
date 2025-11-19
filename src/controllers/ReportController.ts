import { Request, Response } from "express";
import {
  getReportsService,
  getReportByIdService,
  createReportService,
  deleteReportService,
} from "@/services/reports";

class ReportController {
  async getReports(req: Request, res: Response) {
    const result = await getReportsService();

    return res.status(200).json(result);
  }

  async getReportById(req: Request, res: Response) {
    // Get id
    const { id } = req.body;

    // Call get report by ID service
    const result = await getReportByIdService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async createReport(req: Request, res: Response) {
    // Call the create report service
    const result = await createReportService(req.body);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async deleteReport(req: Request, res: Response) {
    // Get ID
    const { id } = req.body;

    // Call delete report service
    const result = await deleteReportService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}

export default new ReportController();