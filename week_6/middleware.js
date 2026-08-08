const express = require("express");
const app = express();

// Custom Middleware for Logging
const logger = (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
};

// Use the middleware
app.use(logger);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// Start server
app.listen(3004, () => {
    console.log("Server is running on http://localhost:3004");
});

