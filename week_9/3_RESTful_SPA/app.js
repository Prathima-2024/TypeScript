const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("view engine", "ejs");

// Connect to MongoDB Atlas
mongoose.connect(
    "mongodb+srv://<db_username>:<db_password>@cluster0.jbfyaf5.mongodb.net/?appName=Cluster0"
)
.then(() => {
    console.log("MongoDB Connected");
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

const Student = mongoose.model("Student", studentSchema);


// Home page
app.get("/", async (req, res) => {

    const students = await Student.find();

    res.render("index", {
        students: students
    });
});


// Add Student
app.post("/students", async (req, res) => {

    const student = new Student({
        name: req.body.name,
        rollNumber: req.body.rollNumber,
        course: req.body.course
    });

    await student.save();

    res.redirect("/");
});


// Delete Student
app.delete("/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: "Student deleted"
    });
});


// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});