import ServicesRepository from "@/repositories/ServicesRepository";
import { ServiceData } from "@/types/service";

export async function updateServiceService(id: string, data: ServiceData) {
  //Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "Id is not provided",
      data: null
    }
  }

  //Check if service exists
  const serviceExists = await ServicesRepository.findById(id);
  if(!serviceExists) {
    return {
      status: "error",
      message: "Service not found",
      data: null
    }
  }

  //Update service
  const result = await ServicesRepository.update(id, data);

  return {
    status: "success",
    message: "Successfully updated service",
    data: result
  }
}

export async function reactivateServiceService(id: string) {
  //Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  //Check if service is already active
  const serviceActive = await ServicesRepository.findById(id);
  if(serviceActive?.isActive){
    return {
      status: "error",
      message: "Product is already activated",
      data: null
    }
  }

  //Reactivate the Service
  const result = await ServicesRepository.reactivate(id);

  return {
    status: "success",
    message: " Successfully reactivated service",
    data: result
  }
}
