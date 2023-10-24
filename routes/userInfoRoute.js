import express from "express";
import {
  createUserResume,
  getResumeById,
  getResumeByUserId,
  updateResume,
} from "../controllers/userInfo.js";

const router = express.Router();

router.post("/createResume", createUserResume);
router.get("/getResumeById/:id", getResumeById);
router.get("/getResumeByUserId/:id", getResumeByUserId);
router.put("/updateResume/:id", updateResume);

export default router;
