import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByEmailService,
  getUserByIdService,
  // getLaborers,
  // getCustomers,
  registerUserService,
  updateUserService,
  hardDeleteUserService,
  softDeleteUserService,
  reactivateUserService,
  changePasswordService,
  loginUserService,
  forgotPasswordService,
} from "@/services/users";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserUtilities from "@/utilities/user-utilities";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

class UserController {
  async getAllUsers(req: Request, res: Response) {
    const results = await getAllUsersService();

    return res.status(200).json(results);
  }

  async getUserByEmail(req: Request, res: Response) {
    const { email } = req.body;

    const result = await getUserByEmailService(email);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await getUserByIdService(id);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async register(req: Request, res: Response) {
    console.log("Registering...");
    //Get user input
    const { ...userData } = req.body;

    //Call the register service
    const results = await registerUserService(userData);

    //Check if error
    if (results.status === "error") {
      return res.status(400).json(results);
    }

    return res.status(200).json({ data: results });
  }

  async login(req: Request, res: Response) {
    console.log("Logging in...");
    //Get user input
    const { email, password } = req.body;

    //Call login user service
    const result = await loginUserService(email, password);

    //Check if error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    // Create token
    const { token } = await UserUtilities.createToken(req);
    console.log("old token", token);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json(result);
  }

  async changePassword(req: Request, res: Response) {
    //Get user input
    const { email, password } = req.body;

    //Call the change password service
    const result = await changePasswordService(email, password);

    //Check if error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async forgotPassword(req: Request, res: Response) {
    // Get user input
    const { email, newPassword: password } = req.body;
    console.log(email, password);

    // Call the forgot password service
    const result = await forgotPasswordService(email, password);

    // Check error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async updateUser(req: Request, res: Response) {
    //Get user data
    const { email, ...data } = req.body;
    console.log("user data", data);

    //Update user
    const result = await updateUserService(email, data);
    console.log(result)

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    const { token, payload } = await UserUtilities.newTokenForOnboarding(req);
    console.log("new token", token);
    console.log("new payload", payload);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json(result);
  }

  async createToken(req: Request, res: Response) {
    const { token } = await UserUtilities.createToken(req);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1000
    })

    return res.status(200).json({ status: "success", message: "Token created" })
  }

  async hardDeleteUser(req: Request, res: Response) {
    //Get user email
    const { email } = req.body;

    //Delete user
    const result = await hardDeleteUserService(email);

    //Check if error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async softDeleteUser(req: Request, res: Response) {
    //Get user email
    const { email } = req.body;

    //Delete user
    const result = await softDeleteUserService(email);

    //Check if error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async reactivateUser(req: Request, res: Response) {
    const { email } = req.body;

    const result = await reactivateUserService(email);

    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }
}

export default new UserController();
