const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// Use EJS
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Read cookies
app.use(cookieParser());

// Create session
app.use(
    session({
        secret: "my-secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    })
);


// Authentication middleware
function checkLogin(req, res, next) {

    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/login");
    }
}


// Login page
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});


// Login
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // Check username and password
    if (username === "admin" && password === "123") {

        // Store login information in session
        req.session.loggedIn = true;
        req.session.username = username;

        // Create cookie
        res.cookie(
            "lastVisit",
            new Date().toLocaleTimeString()
        );

        // Go to dashboard
        res.redirect("/dashboard");

    } else {

        res.render("login", {
            error: "Invalid username or password"
        });
    }
});


// Dashboard - Private page
app.get("/dashboard", checkLogin, (req, res) => {

    // Read cookie
    const lastVisit = req.cookies.lastVisit || "First time!";

    res.render("dashboard", {
        username: req.session.username,
        lastVisit: lastVisit
    });
});


// Logout
app.get("/logout", (req, res) => {

    req.session.destroy(() => {

        res.clearCookie("connect.sid");

        res.redirect("/login");
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/login");
});