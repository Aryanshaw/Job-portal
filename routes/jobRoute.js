import express from "express";
import {
  applyForJobById,
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
} from "../controllers/Jobs.js";

const router = express.Router();

router.get("/getAllJobs", getAllJobs);
router.post("/createJob", createJob);
router.get("/getJobById/:id", getJobById);
router.put("/updateJob/:id", updateJob);
router.post("/applyForJobById/:id",applyForJobById)

export default router;
