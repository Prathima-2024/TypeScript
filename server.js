const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
