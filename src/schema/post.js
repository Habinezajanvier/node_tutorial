const mongoose = require("mongoose");

const ContactsSchema = mongoose.Schema({
  email: String,
  name: String,
  message: String,
});

module.exports = mongoose.model("Contacts", ContactsSchema);
