import express from "express";
import {
  createUserResume,
  getResumeById,
  updateResume,
} from "../controllers/userInfo.js";

const router = express.Router();

router.post("/createResume", createUserResume);
router.get("/getResumeById/:id", getResumeById);
router.put("/updateResume/:id", updateResume);

export default router;
