import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import getJobsRoute from "./routes/getJobsRoute.js";
import { getAllJobs } from "./controllers/JobDetails.js";

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
app.use("/api/jobs", getJobsRoute);

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
