var mongoose = require("mongoose");

// Schema Setup
var tourDateSchema = mongoose.Schema({
    // Object Reference to Tour
    tour: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tour"
        }
    },
    date: Date,
    // Status - where in the process user is at, "booked", "waiting on promoter", etc. will be user input?
    status: String,
    addressInfo: {
        streetAddress: String,
        city: String,
        state: String,
        zipCode: String,
    },
    contactInfo: {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String
    },
    showInfo: {
        startTime: Date,
        endTime: Date,
        // Other bands playing
        bands: [String]
    }
});

module.exports = mongoose.model("TourDate", tourDateSchema);