const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Contact = require("../models/Contact");

// Create Contact
router.post("/new", passport.authenticate("jwt", {
        session: false
    }),
    function (req, res, next) {
        let newContact = new Contact({
            author: req.user._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            state: req.body.state
        });
        Contact.addContact(newContact, function (err, contact) {
            if (err) {
                console.log(err);
                res.json({
                    success: false,
                    msg: 'Failed to create contact'
                });
            } else {
                res.json({
                    success: true,
                    msg: 'Successfully created contact'
                })
            }
        });
    });

// Get all conatcts
router.get("/all", passport.authenticate("jwt", {
    session: false
}), function (req, res, next) {
    Contact.getContacts(req.user._id, function (err, contacts) {
        if (err) throw err;
        else {
            res.json({
                contacts: contacts
            })
        }
    });
});

module.exports = router;