const mongoose = require("mongoose");

// Building the schema for workouts collection
const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
});

//Define the model

const Workout = mongoose.model("Workout", workoutSchema); // The first param is the name of the collection {If none then it creates it}, the second param is the schema


module.exports = Workout;
