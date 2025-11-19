import { Request, Response } from "express";
import {
  createServiceService,
  getAllActiveServiceService,
  getServiceByIdService,
  getServicesService,
  updateServiceService,
  reactivateServiceService,
  hardDeleteServiceService,
  softDeleteServiceService
} from "@/services/services";

class ServiceController {
  async getAllService(req: Request, res: Response) {
    const results = await getServicesService();

    return res.status(200).json(results);
  }

  async getServiceById(req: Request, res: Response) {
    // Get id
    const { id } = req.body;

    // Call service by id
    const result = await getServiceByIdService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async createService(req: Request, res: Response) {
    // call create service
    const result = await createServiceService(req.body);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
  
  async getAllActiveService(req: Request, res: Response) {
    // Call all active service
    const result = await getAllActiveServiceService();

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async updateService(req: Request, res: Response) {
    // Get service data
    const { id, ...data } = req.body;

    // Call update service
    const result = await updateServiceService(id, data);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async reactivateService(req: Request, res: Response) {
    // Get service id
    const { id } = req.body;

    // Call reactivate service
    const result = await reactivateServiceService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async hardDeleteService(req: Request, res: Response) {
    // Get service id
    const { id } = req.body;

    // Call hard delete service
    const result = await hardDeleteServiceService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async softDeleteService(req: Request, res: Response) {
    // Get service id
    const { id } = req.body;

    // Call soft delete service
    const result = await softDeleteServiceService(id);

    // Check if error
    if(result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}

export default new ServiceController();