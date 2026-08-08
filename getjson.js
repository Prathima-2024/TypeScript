const express = require("express");

const app = express();

// GET request - Sending JSON
app.get("/student", (req, res) => {
    res.json({
        name: "Radha",
        rollno: 98,
        branch: "AIDS"
    });
});

// Start the server
app.listen(3002, () => {
    console.log("Server is running on http://localhost:3002");
});

