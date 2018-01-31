const mongoose = require("mongoose");

// Schema Setup
const tourSchema = mongoose.Schema({
    tourName: String,
    bandName: String,
    createdDate: Date,
    startDate: Date,
    endDate: Date,
    author: mongoose.Schema.Types.ObjectId
});

const Tour = module.exports = mongoose.model("Tour", tourSchema)

module.exports.addTour = function (newTour, callback) {
    // Need error catch in here somewhere.
    newTour.save(callback);
}

module.exports.getTours = function (id, callback) {
    const query = {
        author: id
    }
    Tour.find(query, callback);
}