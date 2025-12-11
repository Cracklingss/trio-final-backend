import UserRepository from "@/repositories/UserRepository";
import * as Interfaces from "@/types/user";

export async function updateUserService (id: string, data: Partial<Interfaces.CreateUserData>) {
  //Check if user exist
  const userExist = await UserRepository.findById(id);
  if(!userExist) {
    return {
      status: "error",
      message: "User not found"
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
  await UserRepository.update(id, data);

  return {
    status: "success",
    message: "User Updated",
  }
}

export async function reactivateUserService(email: string) {
  const user = await UserRepository.findByEmail(email);

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
  await UserRepository.reactivate(email);

  return {
    status: "success",
    message: "User reactivated!"
  }
}