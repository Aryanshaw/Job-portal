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
    const { id } = req.params;
    const { user, coverLetter, resume, applied } = req.body;

    const existingApplication = await jobApplication
      .findOne({ job: id, user })
      .exec();

    if (existingApplication) {
      return res.status(400).json({
        error: "You have already applied for this job",
        application: existingApplication,
        submitted: true,
      });
    }

    const application = new jobApplication({
      job: id,
      user,
      coverLetter,
      resume,
      applied: true,
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

export const getAllJobApplications = async (req, res) => {
  try {
    const jobApplications = await jobApplication.find();
    if (!jobApplication)
      res.status(404).json({ message: "Job application not found" });
    else res.status(200).json({ applications: jobApplications });
  } catch (error) {
    res.status(500).json({ message: "Job application error" });
  }
};

export const getJobApplicationByJobId = async (req, res) => {
  try {
    const jobId = req.params.id;
    const application = await jobApplication
      .findOne({ job: jobId })
      .populate("job");

    if (!application)
      res.status(404).json({ message: "Job Application Not Found" });
    else res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "Job Application Error" });
  }
};
export const getJobApplicationByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const application = await jobApplication
      .find({ user: userId })
      .populate("job");

    if (!application)
      res.status(404).json({ message: "Job Application Not Found" });
    else res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "Job Application Error" });
  }
};

export const getJobByInput = async (req, res) => {
  try {
    const { title } = req.body;
    const job = await jobSchema.find({ title });
    if (!job) return res.status(404).json("No Jobs Available");
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
