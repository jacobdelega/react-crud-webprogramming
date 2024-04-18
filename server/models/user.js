const mongoose = require("mongoose");

// Building the schema for Users collection
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    }
});

//Define the model

const User = mongoose.model("User", userSchema); // The first param is the name of the collection {If none then it creates it}, the second param is the schema


module.exports = User;
