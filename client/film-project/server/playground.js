const mongooseConnection = require('./mongoose'); // Import the mongoose connection
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

const Workout = mongoose.model("Workout", workoutSchema);

//Function to retrieve all the workouts from the database
const getWorkouts = async () => {
    try {
        // Wait for the connection to establish
        await mongooseConnection;
        
        // Find all documents in the workouts collection
        const workouts = await Workout.find({});
        console.log('Workouts:', workouts);
    } catch (err) {
        console.error('Error fetching workouts:', err.message);
    }
};

getWorkouts();
