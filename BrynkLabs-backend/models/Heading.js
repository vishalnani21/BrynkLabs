const mongoose = require("mongoose");

const headingSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Heading", headingSchema);
