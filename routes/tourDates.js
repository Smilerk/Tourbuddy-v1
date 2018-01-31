const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const TourDate = require("../models/tourDate");

// Add Tour Date
router.post("/new", function(req, res, next) {
  let newTourDate = new TourDate({
    tour: req.body.tour._id,
    date: req.body.date,
    status: req.body.status,
    venueName: req.body.venueName,
    addressInfo: {
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode
    },
    contact: req.body.contact,
    showInfo: {
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      bands: req.body.bands
    }
  });
  TourDate.addTourDate(newTourDate, function(err, tourDate) {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        msg: "Failed to create tour date"
      });
    } else {
      res.json({
        success: true,
        msg: "Successfully created tour date"
      });
    }
  });
});

// Get all tour Dates for a certain tour.
router.get("/", function(req, res, next) {
  TourDate.getTourDates(req.query.id, function(err, tourDates) {
    if (err) throw err;
    else {
      res.json({
        tourDates: tourDates
      });
    }
  });
});
module.exports = router;
