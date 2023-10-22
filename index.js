import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import jobRoute from "./routes/jobRoute.js";
import { getAllJobs } from "./controllers/Jobs.js";
import authRoute from "./routes/authRoute.js";
import userInfoRoute from "./routes/userInfoRoute.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected");
  } catch (err) {
    console.log("Failed to connect", err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/jobs", jobRoute);
app.use("/api/auth", authRoute);
app.use("/api/user",userInfoRoute)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/jobs/getAllJobs", (req, res) => {
  res.send(getAllJobs);
});

const port = 8800;

app.listen(port, "0.0.0.0", () => {
  connect();
  console.log(`http://localhost:8800`);
});
