import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { paginatedResults } from "./utils/paginatedResults.js";

const app = express();
app.use(cors());
dotenv.config();

const db = mongoose.connect(process.env.MONGO_URL);

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
  },
  region: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  flags: {
    svg: {
      type: String,
      required: true,
    },
    png: {
      type: String,
      required: true,
    },
  },
  independent: {
    type: Boolean,
    required: true,
  },
});

const Country = mongoose.model("Country", CountrySchema);

app.get("/countries", paginatedResults(Country), (req, res) => {
  res.json(res.paginatedResults);
});

app.use(express.static(path.join(__dirname, "/front/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port");
});
