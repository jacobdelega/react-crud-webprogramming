const mongoose = require("mongoose");


// TODO: figure issues with .env 
const uri = "mongodb+srv://jacobdelega:admin@cluster0.34jadgf.mongodb.net/fitness-crud?retryWrites=true&w=majority&appName=cluster0";



mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error: ", err);
    });

module.exports = mongoose.connection;
