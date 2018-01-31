var mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
    // User Id Reference
    author: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    city: String,
    state: String
});

const Contact = module.exports = mongoose.model("Contact", contactSchema);

module.exports.addContact = function (newContact, callback) {
    newContact.save(callback);
}

module.exports.getContacts = function (id, callback) {
    const query = {
        author: id
    }
    Contact.find(query, callback);
}