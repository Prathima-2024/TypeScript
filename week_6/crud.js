const express = require("express");

const app = express();

// To receive JSON data
app.use(express.json());

// Sample student data
let student = {
    id: 1,
    name: "Prathima",
    branch: "CSE"
};

// GET - Send JSON
app.get("/student", (req, res) => {
    res.json(student);
});

// POST - Receive JSON
app.post("/student", (req, res) => {
    student = req.body;
    res.json({
        message: "Student added successfully",
        student: student
    });
});

// PUT - Update JSON using Dynamic URL
app.put("/student/:id", (req, res) => {
    const id = req.params.id;

    student = {
        id: id,
        name: req.body.name,
        branch: req.body.branch
    };

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE - Delete using Dynamic URL
app.delete("/student/:id", (req, res) => {
    const id = req.params.id;

    student = null;

    res.json({
        message: "Student deleted successfully",
        id: id
    });
});

// Start server
app.listen(3003, () => {
    console.log("Server is running on http://localhost:3003");
});
