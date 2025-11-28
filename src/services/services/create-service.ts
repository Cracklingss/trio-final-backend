import ServicesRepository from "@/repositories/ServicesRepository";
import { ServiceData } from "@/types/service";

export async function createServiceService(data: ServiceData) {
  //Validate fields
  if (
    !data.name ||
    !data.service ||
    !data.description ||
    !data.availability ||
    !data.serviceLoc
  ) {
    return {
      status: "error",
      message: "Error, missing fields!",
    };
  }

  //Create data
  const result = await ServicesRepository.create({
    name: data.name,
    service: data.service,
    description: data.description,
    availability: data.availability,
    serviceLoc: data.serviceLoc,
    isActive: data.isActive,
  });

  return {
    status: "success",
    message: "Successfully created service",
    data: result,
  };
}
