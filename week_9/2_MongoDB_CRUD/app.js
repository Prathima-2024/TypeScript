const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB Atlas
mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.jbfyaf5.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    rollNumber: Number,
    course: String
});

// Model
const Student = mongoose.model("Student", studentSchema);


// CREATE
app.post("/students", async (req, res) => {

    const student = new Student(req.body);

    await student.save();

    res.json(student);
});


// READ
app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);
});


// UPDATE
app.put("/students/:id", async (req, res) => {

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(student);
});


// DELETE
app.delete("/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: "Student deleted successfully"
    });
});


// Start server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});