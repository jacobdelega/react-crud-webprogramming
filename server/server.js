// Import the express module
const express = require("express");
const app = express();
const cors = require("cors");

// Import the mongoose module
const mongoose = require("mongoose");
const Workout = require("./models/workout");
const WorkoutLog = require("./models/workoutLog");
const User = require("./models/user");
const Contact = require("./models/contact");

// ========= Connect to MongoDB =========
const uri = "mongodb+srv://jacobdelega:admin@cluster0.34jadgf.mongodb.net/fitness-crud?retryWrites=true&w=majority&appName=cluster0";

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error: ", err);
    });
// ========= end of MongoDB connection =========

// Parse incoming JSON data
app.use(
    cors({
        origin: "http://localhost:3001", // Allow requests from your React app's origin
    })
);

app.use(express.json()); // Turn request into JSON data

// Get all workouts
app.get("/api/workouts", async (req, res) => {
    try {
        const workouts = await Workout.find({});
        res.json(workouts);
    } catch (err) {
        console.error("Error fetching workouts:", err.message);
        res.status(500).json({ error: "Error fetching workouts" });
    }
});

// Get a specific workout by ID
app.get("/api/workouts/:id", async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        res.json(workout);
    } catch (err) {
        console.error("Error fetching workout:", err.message);
        res.status(500).json({ error: "Error fetching workout" });
    }
});

// Get a specific workout log by ID
app.get("/api/workout-logs/:id", async (req, res) => {
    try {
        const log = await WorkoutLog.findById(req.params.id).populate("workouts");
        res.json(log);
    } catch (err) {
        console.error("Error fetching workout log:", err.message);
        res.status(500).json({ error: "Error fetching workout log" });
    }
});

// Get all workout logs
app.get("/api/workout-logs", async (req, res) => {
    try {
        const logs = await WorkoutLog.find({}).populate("workouts");
        res.json(logs);
    } catch (err) {
        console.error("Error fetching workout logs:", err.message);
        res.status(500).json({ error: "Error fetching workout logs" });
    }
});

// Add a new workout
// app.get("/api/add-workout", async (req, res) => {
//     try {
//         const newWorkout = new Workout({
//             name: "Squat",
//             reps: 5,
//             sets: 5,
//             weight: 3100,
//         });

//         await newWorkout.save();
//         res.send(newWorkout);
//     } catch (err) {
//         console.error("Error adding workout:", err.message);
//         res.status(500).json({ error: "Error adding workout" });
//     }
// });

// Add a new workout by post
app.post("/api/add-workout", async (req, res) => {
    try {
        const { name, reps, sets, weight } = req.body; // Access form data with req.body
        if (!name || !reps || !sets || !weight) {
            return res.status(400).json({ error: "Please fill in all workout details" });
        }

        const newWorkout = new Workout({
            name: req.body.name,
            reps: req.body.reps,
            sets: req.body.sets,
            weight: req.body.weight,
        });

        await newWorkout.save();
        res.send(newWorkout);
        console.log("New workout added:", newWorkout);
    } catch (err) {
        console.error("Error adding workout:", err.message);
        res.status(500).json({ error: "Error adding workout" });
    }
});

// Add a new workout log
app.get("/api/add-workout-log", async (req, res) => {
    try {
        const newLog = new WorkoutLog({
            date: new Date(),
            workouts: ["660c166455061045c3179cd8", "661329bdb5e14b58c19ff4f4", "66134f24cf160b43e4794eb5"],
        });
        newLog.save();
        res.send(newLog);
    } catch (err) {
        console.error("Error adding workout log:", err.message);
        res.status(500).json({ error: "Error adding workout log" });
    }
});

// Update a workout
app.get("/api/update-workout/:id", async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, { name: "Bench Press" }, { new: true });
        res.json(workout);
    } catch (err) {
        console.error("Error updating workout:", err.message);
        res.status(500).json({ error: "Error updating workout" });
    }
});

app.put("/api/update-workout/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedWorkout = req.body; // Access request body for PUT data

        const workout = await Workout.findByIdAndUpdate(id, updatedWorkout, { new: true });

        if (!workout) {
            return res.status(404).json({ error: "Workout not found" }); // Handle not found case
        }

        res.json(workout);
    } catch (err) {
        console.error("Error updating workout:", err.message);
        res.status(500).json({ error: "Error updating workout" });
    }
});

// Delete a workout
app.delete("/api/delete-workout/:id", async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        res.json(workout);
    } catch (err) {
        console.error("Error deleting workout:", err.message);
        res.status(500).json({ error: "Error deleting workout" });
    }
});

// Delete a workout log
app.get("/api/delete-workout-log/:id", async (req, res) => {
    try {
        const log = await WorkoutLog.findByIdAndDelete(req.params.id);
        res.json(log);
    } catch (err) {
        console.error("Error deleting workout log:", err.message);
        res.status(500).json({ error: "Error deleting workout log" });
    }
});

app.get("/workouts", (req, res) => {
    try {
        getWorkouts();
    } catch (err) {
        console.error("Error fetching workouts:", err.message);
        res.status(500).json({ error: "Error fetching workouts" });
    }
});

// ========= User Authentication =========
// Register a new user by post
app.post("/api/register", async (req, res) => {
    try {
        // Grab information from client side
        const { email, password, name } = req.body; // Access form data with req.body
        if (!email || !password || !name) {
            return res.status(400).json({ error: "Please fill in all registration details" });
        }
        // Build the user based
        const newUser = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        });

        await newUser.save();
        res.status(204).send(newUser);
        console.log("New user added:", newUser);
    } catch (err) {
        console.error("Error adding user:", err.message);
        res.status(500).json({ error: "Error adding user" });
    }
});

const jwt = require("jsonwebtoken");

// Register a user
app.post("/api/register", async (req, res) => {
    try {
        // get user information via req body
        const { email, password, name } = req.body;

        // push user information to the database
        const newUser = new User({
            email: email,
            password: password,
            name: name,
        });

        await newUser.save();

        res.status(202).json({ message: "User registered successfully" });
        console.log("New user added:", newUser);
    } catch (err) {
        console.error("Error adding user:", err.message);
        res.status(500).json({ error: "Error adding user" });
    }
});

// Login a user
app.post("/api/login", async (req, res) => {
    try {
        // get user information via req body
        const { email, password } = req.body;

        // error handling
        if (!email || !password) {
            return res.status(400).json({ error: "Missing login details" });
        }

        const user = await User.findOne({ email: email, password: password });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        } else {
            // Login success
            // Create a token
            const expiresIn = "1h";
            const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY", { expiresIn });

            res.json({ message: "Login successful", token: token });
            console.log("User logged in:", user);
        }
    } catch (err) {
        console.error("Error logging in user:", err.message);
        res.status(500).json({ error: "Error logging in user" });
    }
});

// ========= end of User Authentication =========

// ========= Contact Form =========
// Add a new contact form
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body; // Access form data with req.body
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Please fill in all contact details" });
        }

        const newContact = new Contact({
            name: name,
            email: email,
            message: message,
        });

        await newContact.save();
        res.send(newContact);
        console.log("New contact added:", newContact);
    } catch (err) {
        console.error("Error adding contact:", err.message);
        res.status(500).json({ error: "Error adding contact" });
    }
});


// Start the server

app.listen(3000, () => console.log(`Server listening on port 3000`));
