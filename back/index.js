import express from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";
import { paginatedResults } from "./utils/paginatedResults.js";

const app = express();
app.use(cors());
const PORT = config.get("serverPort");
const DB_URL = config.get("urlDB");

const db = mongoose.connect(DB_URL);

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

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
