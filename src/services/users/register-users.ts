import UserRepository from "@/repositories/UserRepository";
import bcrypt from "bcryptjs";
import { CreateUserData } from "@/types/user";

export async function registerLaborerService(
  data: CreateUserData,
  userType: string
) {
  // Validate the fields
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

  //Create user
  const result = await UserRepository.createLaborer({
    email: data.email,
    password: hashedPassword,
  });

  return {
    status: "success",
    message: "User created successfully",
    data: result,
  };
}

export async function registerCustomerService(
  data: CreateUserData,
  userType: string
) {
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
  const result = await UserRepository.createCustomer({
    email: data.email,
    password: hashedPassword,
  });

  return {
    status: "success",
    message: "User created successfully",
    data: result,
  };
}
