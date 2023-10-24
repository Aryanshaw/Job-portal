import UserResume from "../models/userResumeSchema.js";

export const createUserResume = async (req, res) => {
  try {
    const { user, skills, experience, projects } = req.body;
    const userResume = new UserResume({ skills, experience, projects, user });
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

export const getResumeByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const resume = await UserResume.findOne({ user: userId }).populate("user");

    if (!resume) {
      return res.status(404).json({ error: "User does not have a resume" });
    }

    return res.status(200).json({ resume });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateResume = async (req, res) => {
  try {
    const resumeId = req.params.id;
    if (!resumeId) throw new Error("Invalid resume id");
    const newUpdatedResume = await UserResume.findByIdAndUpdate(
      resumeId,
      { $set: req.body },
      { new: true }
    );
    await newUpdatedResume.save();
    return res.status(200).json({ message: "Resume updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
