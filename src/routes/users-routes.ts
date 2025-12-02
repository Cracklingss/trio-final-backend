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
router.delete("/user-hard", UserController.hardDeleteUser);
router.delete("/user-soft", UserController.softDeleteUser);
router.patch("/user-reactivate", UserController.reactivateUser);
router.patch("/change-password", UserController.changePassword);
router.put("/forgot-password", UserController.forgotPassword);
router.post("/token", UserUtilities.createToken);
router.post("/delete-token", UserUtilities.deleteToken);

export default router;
