import ServicesRepository from "@/repositories/ServicesRepository";
import { ServiceData } from "@/types/service";

export async function createServiceService(data: ServiceData) {
  //Validate fields
  if (
    !data.service ||
    !data.description ||
    !data.availability ||
    !data.laborerId ||
    !data.serviceLoc
  ) {
    return {
      status: "error",
      message: "Error, missing fields!",
    };
  }

  //Create data
  const result = await ServicesRepository.create({
    service: data.service,
    description: data.description,
    availability: data.availability,
    serviceLoc: data.serviceLoc,
    laborerId: data.laborerId,
    isActive: data.isActive,
  });

  return {
    status: "success",
    message: "Successfully created service",
    data: result,
  };
}
