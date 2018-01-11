const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Tour = require("../models/tour");

// Add Tour
router.post("/new", function (req, res, next) {
    let newTour = new Tour({
        tourName: req.body.tourName,
        bandName: req.body.bandName,
        createdDate: req.body.createdDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        author: req.body.author
    });
    Tour.addTour(newTour, function (err, tour) {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to create tour'
            });
        } else {
            res.json({
                sucess: true,
                msg: 'Successfully created tour'
            });
        }
    });
});

module.exports = router;