import mongoose from "mongoose";

const userResumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skills: [String],
  experience: [
    {
      title: String,
      companyName: String,
      responsibility: String,
      skillsUsed: [String],
      dateWorkedOn: String,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      skillsUsed: [String],
      dateWorkedOn: String,
    },
  ],
});

const UserResume = mongoose.model("UserResume", userResumeSchema);

export default UserResume;
