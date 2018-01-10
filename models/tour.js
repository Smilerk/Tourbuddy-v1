const mongoose = require("mongoose");

// Schema Setup
const tourSchema = mongoose.Schema({
    tourName: String,
    bandName: String,
    startDate: Date,
    endDate: Date,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
});

const Tour = module.exports = mongoose.model("Tour", tourSchema)

module.exports.addTour = function (newTour, callback) {
    // Need error catch in here somewhere.
    newTour.save(callback);
}