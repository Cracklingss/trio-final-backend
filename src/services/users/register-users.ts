import UserRepository from "@/repositories/UserRepository";
import bcrypt from "bcryptjs";
import { CreateUserData } from "@/types/user";

export async function registerUserService(data: CreateUserData) {
  // Validate fields
  if (
    !data.email ||
    !data.password
  ) {
    return {
      status: "error",
      message: "Empty input fields!",
    };
  }

  //Check for email duplication
  const user = await UserRepository.findByEmail(data.email);
  if (user?.email === data.email) {
    return {
      status: "error",
      message: "Email already existed!",
    };
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  //Create User
  await UserRepository.create({
    email: data.email,
    password: hashedPassword,
  });

  return {
    status: "error",
    message: "User created successfully!"
  }
}