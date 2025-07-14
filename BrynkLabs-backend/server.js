require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const headingRoutes = require("./routes/headingRoutes");

const app = express();



app.use(cors());
app.use(express.json());



app.use("/api/heading", headingRoutes);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
