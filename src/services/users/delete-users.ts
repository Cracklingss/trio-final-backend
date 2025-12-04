import UserRepository from "@/repositories/UserRepository";

export async function  hardDeleteUserService(id: string) {
  // Check if user exists
  const userExist = await UserRepository.findById(id);
  if (!userExist) {
    return { status: "error", message: "User not found" };
  }

  // Delete user from the database
  await UserRepository.hardDelete(id);

  return {
    status: "success",
    message: "User deleted from the database!",
  }
}

export async function softDeleteUserService(id: string) {
  // Check if user exists
  const userExist = await UserRepository.findById(id);
  if (!userExist) {
    return { status: "error", message: "User not found" };
  }

  // Validate if use is already deactivated
  if(!userExist.isActive) {
    return { status: "error", message: "User is already deactivated" };
  }

  // isActive = false
  await UserRepository.softDelete(id);

  return {
    status: "success",
    message: "User deactivated",
  }
}