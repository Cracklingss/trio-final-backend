import { Router } from "express";
import UserController from "@/controllers/UserController"

const router = Router();

router.get("/users", UserController.getAllUsers);
router.get("/user", UserController.getUserByEmail);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/user", UserController.updateUser);
router.delete("/user-hard", UserController.hardDeleteUser);
router.delete("/user-soft", UserController.softDeleteUser);
router.patch("/user-reactivate", UserController.reactivateUser);
router.patch("/change-password", UserController.changePassword);

export default router;