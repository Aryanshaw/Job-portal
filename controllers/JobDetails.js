import jobSchema from "../models/jobSchema.js";

export const getAllJobs = async (req, res) => {
  try {
    const allJobs = await jobSchema.find();
    res.status(200).send(allJobs);
  } catch (e) {
    res.status(500).send("Error in fetching jobs");
  }
};

export const createJob = async (req, res) => {
  let newJob = new jobSchema({ ...req.body });
  try {
    const savedJob = await newJob.save();
    if (!savedJob) throw Error("Could not save Job");
    await res.status(200).send({ message: "Job saved successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
};
