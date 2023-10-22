import express from "express";
import { createUserResume, getResumeById } from "../controllers/userInfo.js";

const router = express.Router();

router.post("/createResume", createUserResume);
router.get("/getResumeById/:id",getResumeById)

export default router;
