import express from "express";
import {
  applyForJobById,
  createJob,
  getAllJobApplications,
  getAllJobs,
  getJobApplicationByJobId,
  getJobApplicationByUserId,
  getJobById,
  getJobByInput,
  updateJob,
} from "../controllers/Jobs.js";

const router = express.Router();

router.get("/getAllJobs", getAllJobs);
router.post("/createJob", createJob);
router.get("/getJobById/:id", getJobById);
router.put("/updateJob/:id", updateJob);
router.post("/applyForJobById/:id", applyForJobById);
router.get("/getAllJobApplications", getAllJobApplications);
router.get("/getJobApplicationByJobId/:id", getJobApplicationByJobId);
router.get("/getJobApplicationByUserId/:id", getJobApplicationByUserId);
router.post("/getJobByInput", getJobByInput);

export default router;
