import express from "express";
import { createJob, getAllJobs } from "../controllers/JobDetails.js";

const router = express.Router();

router.get("/getAllJobs", getAllJobs);
router.post("/createJob",createJob)

export default router;
