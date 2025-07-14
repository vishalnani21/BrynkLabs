const express = require("express");
const router = express.Router();
const Heading = require("../models/Heading.js");

// GET heading
router.get("/", async (req, res) => {
  try {
    // Assuming only one heading document exists
    let headingDoc = await Heading.findOne();
    if (!headingDoc) {
      // If none, send default heading
      return res.json({ heading: "Welcome to Company ABC" });
    }
    res.json({ heading: headingDoc.heading });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST update heading
router.post("/", async (req, res) => {
  try {
    const { heading } = req.body;
    if (!heading || heading.trim() === "") {
      return res.status(400).json({ message: "Heading is required" });
    }

    // Update if exists, else create new
    let headingDoc = await Heading.findOne();
    if (headingDoc) {
      headingDoc.heading = heading;
      await headingDoc.save();
    } else {
      headingDoc = new Heading({ heading });
      await headingDoc.save();
    }

    res.json({ message: "Heading updated successfully", heading: headingDoc.heading });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
