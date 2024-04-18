const mongoose = require("mongoose");

// Building the schema for Users collection
const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: { unique: true },
    },
    message: {
        type: String,
    },
    name: {
        type: String,
    }
});

//Define the model

const Contact = mongoose.model("contact", contactSchema); // The first param is the name of the collection {If none then it creates it}, the second param is the schema


module.exports = Contact;
