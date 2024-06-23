const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  image: String,
  org: String,
  game: String,
  date: String,
});

module.exports = mongoose.model("tourneydetails", TourSchema);
