// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Resource from "./src/models/Resource.js"; // adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const resources = [
  {
    title: "Employment Portal",
    description: "Helps single parents find jobs and skill training.",
    eligibility: "Open to all",
    link: "https://employment.gov.in",
    category: "employment",
  },
  {
    title: "Legal Aid Services",
    description: "Free legal consultation for single parents.",
    eligibility: "Must be a single parent",
    link: "https://legalaid.gov.in",
    category: "legal",
  },
  {
    title: "Housing Assistance",
    description: "Government schemes for affordable housing.",
    eligibility: "Income criteria apply",
    link: "https://housing.gov.in",
    category: "housing",
  },
];

const importData = async () => {
  try {
    await Resource.deleteMany();
    await Resource.insertMany(resources);
    console.log("Sample data inserted!");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
