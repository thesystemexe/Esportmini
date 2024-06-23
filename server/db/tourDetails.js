const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  image: String,
  org: String,
  name: String,
  date: String,
});

module.exports = mongoose.model("tourneydetails", TourSchema);
