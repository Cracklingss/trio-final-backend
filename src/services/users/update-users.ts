import UserRepository from "@/repositories/UserRepository";
import * as Interfaces from "@/types/user";

export async function updateCustomerService (email: string, data: Partial<Interfaces.CustomerData>, userType: string) {
  //Check if user exists 
  const userExist = await UserRepository.findByEmail(email, userType);
  if (!userExist) {
    return {
      status: "error",
      message: "User not found"
    }
  }

  //Check if user is not a Customer
  if(userExist.userType === "laborer") {
    return {
      status: "error",
      message: "User not a Customer"
    }
  }

  //Check if user is deactived
  if (!userExist.isActive) {
    return {
      status: "error",
      message: "User is deactivated"
    }
  }

  //Update user data
  await UserRepository.updateCustomer(email, data);

  return {
    status: "success",
    message: "User Updated",
    data: null
  }
}

export async function updateLaborerService (email: string, data: Partial<Interfaces.CustomerData>, userType: string) {
  //Check if user exist
  const userExist = await UserRepository.findByEmail(email, userType);
  if(!userExist) {
    return {
      status: "error",
      message: "User not found"
    }
  }

  //Check if user is not a Laborer
  if(userExist.userType === "customer") {
    return {
      status: "error",
      message: "User not a laborer"
    }
  }

  //Check if user is deactived
  if (!userExist.isActive) {
    return {
      status: "error",
      message: "User is deactivated"
    }
  }

  //Update user data
  await UserRepository.updateLaborer(email, data);

  return {
    status: "success",
    message: "User Updated",
    data: null
  }
}

export async function reactivateUserService(email: string, userType: string) {
  const user = await UserRepository.findByEmail(email, userType);

  //Check if users exists
  if (!user) {
    return {
      status: "error",
      message: "There are no users"
    }
  }

  //Check if user is activated
  if(user.isActive) {
    return {
      status: "error",
      message: "User Already Activated!"
    }
  }

  //Activate user
  await UserRepository.reactivate(email, userType);

  return {
    status: "success",
    message: "User reactivated!"
  }
}