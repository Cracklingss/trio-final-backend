import ServicesRepository from "@/repositories/ServicesRepository";

export async function getServicesService() {
  //Fetch all data
  const result = await ServicesRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched data",
    data: result
  }
}

export async function getServiceByIdService(id: string) {
  //Check if ID provided
  if(!id) {
    return {
      status: "error",
      message: "No id provided",
    }
  }

  //Fetch all data by id
  const result = await ServicesRepository.findById(id);

  //Check if service exists
  if(!result) {
    return {
      status: "error",
      message: "Service not found",
    }
  }

  return {
    status: "success",
    message: "Successfully fetched data",
    data: result
  }
}

export async function getAllActiveServiceService() {
  //Fetch all active data
  const result = await ServicesRepository.findAllActive();

  return {
    status: "success",
    message: "Successfully fetched data",
    data: result
  }
}