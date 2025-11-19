import UserRepository from "@/repositories/UserRepository";
import bcrypt from "bcryptjs";
import { CustomerData, LaborerData } from "@/types/user";

export async function registerLaborerService(
  data: LaborerData,
  userType: string
) {
  // Validate the fields
  if (
    !data.email ||
    !data.password ||
    !data.displayName ||
    !data.firstName ||
    !data.lastName ||
    !data.gender ||
    !data.contactNumber ||
    !data.profilePicture
  ) {
    return {
      status: "error",
      message: "Empty input fields!",
    };
  }

  //Check for email duplication
  const user = await UserRepository.findByEmail(data.email, userType);
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
    displayName: data.displayName,
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    contactNumber: data.contactNumber,
    profilePicture: data.profilePicture,
    isActive: data.isActive,
  });

  return {
    status: "success",
    message: "User created successfully",
    data: result,
  };
}

export async function registerCustomerService(
  data: CustomerData,
  userType: string
) {
  // Validate fields
  if (
    !data.email ||
    !data.password ||
    !data.displayName ||
    !data.firstName ||
    !data.lastName ||
    !data.gender ||
    !data.contactNumber ||
    !data.profilePicture
  ) {
    return {
      status: "error",
      message: "Empty input fields!",
    };
  }

  //Check for email duplication
  const user = await UserRepository.findByEmail(data.email, userType);
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
    displayName: data.displayName,
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    contactNumber: data.contactNumber,
    profilePicture: data.profilePicture,
    isActive: data.isActive,
  });

  return {
    status: "success",
    message: "User created successfully",
    data: result,
  };
}
