var mongoose = require("mongoose");

// Schema Setup
var tourDateSchema = mongoose.Schema({
  // Object Reference to Tour
  tour: mongoose.Schema.Types.ObjectId,
  date: Date,
  // Status - where in the process user is at, "booked", "waiting on promoter", etc. will be user input?
  status: String,
  addressInfo: {
    streetAddress: String,
    city: String,
    state: String,
    zipCode: Number
  },
  venueName: String,
  contactInfo: mongoose.Schema.Types.ObjectId,
  showInfo: {
    startTime: String,
    endTime: String,
    // Other bands playing
    bands: [String]
  }
});

const TourDate = module.exports = mongoose.model("TourDate", tourDateSchema);

// Add new Tour Date
module.exports.addTourDate = function (newDate, callback) {
  newDate.save(callback);
};

// Get all Tour Dates for a specific Tour
module.exports.getTourDates = function (id, callback) {
  const query = {
    tour: id
  };
  TourDate.find(query, callback);
};