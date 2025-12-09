import { Router } from "express";
import UserController from "@/controllers/UserController";
import UserUtilities from "@/utilities/user-utilities";

const router = Router();

router.get("/users", UserController.getAllUsers);
router.post("/user", UserController.getUserByEmail);
router.get("/user/:id", UserController.getUserById);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/user", UserController.updateUser);
router.post("/user/hard-delete", UserController.hardDeleteUser);
router.post("/user/soft-delete", UserController.softDeleteUser);
router.patch("/user-reactivate", UserController.reactivateUser);
router.patch("/change-password", UserController.changePassword);
router.put("/forgot-password", UserController.forgotPassword);
router.post("/token", UserController.createToken);
router.post("/delete-token", UserUtilities.deleteToken);
router.post("/send-email", UserController.sendEmail);
router.post("/verify-code", UserController.verifyCode);

export default router;
