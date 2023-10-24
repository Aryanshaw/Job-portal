import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  loginUser,
  logoutUser,
  updateUser,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/getAllUsers", getAllUsers);
router.put("/updateUser/:id", updateUser);
router.get("/getUserById/:id", getUserById);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
