import UserResume from "../models/userResumeSchema.js";

export const createUserResume = async (req, res) => {
  try {
    const { skills, experience, projects } = req.body;
    const userResume = new UserResume({ skills, experience, projects });
    const savedResume = await userResume.save();
    res.status(201).json({
      message: "User resume created successfully",
      resume: savedResume,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user resume" });
  }
};

export const getResumeById = async (req, res) => {
  try {
    const resumeId = req.params.id;
    const resume = await UserResume.findById(resumeId);
    if (!resume) {
      return res.status(404).json({ error: "Invalid resume" });
    }
    return res.status(200).json({ resume });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
