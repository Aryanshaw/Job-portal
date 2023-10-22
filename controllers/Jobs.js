import jobApplication from "../models/jobApplicationSchema.js";
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

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobDetails = await jobSchema.findById(jobId);
    if (!jobDetails) throw Error(`No job found with id ${jobId}`);
    return res.status(200).json(jobDetails);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .send({ message: "Failed to find the job with given id." });
  }
};

export const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobDetails = await jobSchema.findByIdAndUpdate(
      jobId,
      { $set: req.body },
      { new: true }
    );
    if (!jobDetails) throw Error(`No job found with id ${jobId}`);
    await jobDetails.save();
    return res.status(200).send({ message: "Job Updated successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
};

export const applyForJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { user, coverLetter, resume } = req.body;

    const application = new jobApplication({
      job: jobId,
      user,
      coverLetter,
      resume,
    });

    const savedApplication = await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application: savedApplication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error submitting job application" });
  }
};
