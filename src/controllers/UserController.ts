import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByEmailService,
  registerCustomerService,
  registerLaborerService,
  // updateCustomerService,
  // updateLaborerService,
  hardDeleteUserService,
  softDeleteUserService,
  // reactivateUserService,
  // changePasswordService,
  loginUserService,
} from "@/services/users";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";


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

  async register(req: Request, res: Response) {
    console.log("Registering...");
    //Get user input
    const { userType, ...userData } = req.body;

    //Call the register service
    if (userType === "customer") {
      const results = await registerCustomerService(userData, userType);

      //Check if error
      if (results.status === "error") {
        return res.status(400).json(results);
      }

      return res.status(200).json({ message: "customer", data: results });
    } else if (userType === "laborer") {
      const results = await registerLaborerService(userData, userType);

      //Check if error
      if (results.status === "error") {
        return res.status(400).json(results);
      }

      return res.status(200).json(results);
    }
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
    const payload = { email: email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 100
    });

    return res.status(200).json(result);
  }

  // async changePassword(req: Request, res: Response) {
  //   //Get user input
  //   const { email, password, userType } = req.body;

  //   //Call the change password service
  //   const result = await changePasswordService(email, password, userType);

  //   //Check if error
  //   if (result.status === "error") {
  //     return res.status(400).json(result);
  //   }

  //   return res.status(200).json(result);
  // }

  // async updateCustomer(req: Request, res: Response) {
  //   //Get user data
  //   const { email, userType, ...data } = req.body;

  //   //Update user
  //   const result = await updateCustomerService(email, data, userType);

  //   //Check if error
  //   if (result.status === "error") {
  //     return res.status(400).json(result);
  //   }

  //   return res.status(200).json(result);
  // }

  // async updateLaborer(req: Request, res: Response) {
  //   //Get user data
  //   const { email, userType, ...data } = req.body;

  //   //Update user
  //   const result = await updateLaborerService(email, data, userType);

  //   //Check if error
  //   if (result.status === "error") {
  //     return res.status(400).json(result);
  //   }

  //   return res.status(200).json(result);
  // }

  async hardDeleteUser(req: Request, res: Response) {
    //Get user email
    const { email, userType } = req.body;

    //Delete user
    const result = await hardDeleteUserService(email, userType);

    //Check if error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  async softDeleteUser(req: Request, res: Response) {
    //Get user email
    const { email, userType } = req.body;

    //Delete user
    const result = await softDeleteUserService(email, userType);

    //Check if error
    if (result.status === "error") {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  }

  // async reactivateUser(req: Request, res: Response) {
  //   const { email, userType } = req.body;

  //   const result = await reactivateUserService(email, userType);

  //   if (result.status === "error") {
  //     return res.status(400).json(result);
  //   }

  //   return res.status(200).json(result);
  // }
}

export default new UserController();
