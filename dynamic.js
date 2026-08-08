const express = require("express");

const app = express();

// Route Parameter
app.get("/student/:rollno", (req, res) => {
    const rollno = req.params.rollno;
    res.send("Student Roll Number: " + rollno);
});

// Query Parameter
app.get("/student", (req, res) => {
    const name = req.query.name;
    const branch = req.query.branch;

    res.send("Student Name: " + name + ", Branch: " + branch);
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});


