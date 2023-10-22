import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String], 
    },
    type: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
      required: true,
    },
    salary: {
      type: Number,
    },
    applicationDeadline: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("jobSchema", jobSchema);
