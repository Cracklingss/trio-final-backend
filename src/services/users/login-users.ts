import UserRepository from "@/repositories/UserRepository";
import bcrypt from "bcryptjs"

export async function loginUserService(email: string, password: string) {
  const user = await UserRepository.findByEmail(email);

  //Check if email is registered
  if(!user) {
    return {
      status: "error",
      message: "Email is not registered!"
    }
  }

  //Check if user is deactivated
  if(!user.isActive) {
    return {
      status: "error",
      message: "User is deactivated"
    }
  }

  //Compare password
  const validPass = await bcrypt.compare(password, user.password);
  if(!validPass) {
    return {
      status: "error",
      message: "Invalid email or password!"
    }
  }

  return {
    status: "success",
    message: "Successfully logged in!",
  }
}