const mongoose = require("mongoose");

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.jbfyaf5.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("MongoDB Atlas Connected");
    })
    .catch((error) => {
        console.log("Connection Error:", error);
    });

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    rollNumber: Number,
    course: String
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

console.log("Student model created");