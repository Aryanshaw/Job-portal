import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "jobSchema" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  coverLetter: String,
  resume: { type: mongoose.Schema.Types.ObjectId, ref: "UserResume" },
});

const jobApplication = mongoose.model("jobApplication", jobApplicationSchema);

export default jobApplication;
