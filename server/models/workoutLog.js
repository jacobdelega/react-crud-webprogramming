const mongoose = require("mongoose");

const workoutLogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    workouts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workout", // Reference the Workout model
            required: true,
        },
    ],
});

module.exports = mongoose.model("WorkoutLog", workoutLogSchema);
