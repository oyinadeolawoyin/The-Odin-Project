require('dotenv').config();
const express = require("express");
const app = express();

const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const pool = require("./db/pool");
require("./passport/passport-config");
const passport = require("passport");
const flash = require('connect-flash');

const profileFormRoutes = require("./routes/profileFormRoutes");
const indexRoutes = require("./routes/indexRoutes");
const logInRoutes = require("./routes/logInRoutes");
const profileRoutes = require("./routes/profileRoutes");
const memberFormRoutes = require("./routes/memberFormRoutes");
const logoutRoutes = require("./routes/logoutRoutes");
const contentFormRoutes = require("./routes/contentFormRoutes");
const contentRoutes = require("./routes/contentRoutes");


const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));

app.use(express.urlencoded({ extended: true }));

app.use(session({
    store: new pgSession({
        pool: pool,
        tableName: "session",
        createTableIfMissing: true 
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg'); // success messages
    res.locals.error_msg = req.flash('error_msg');  // general error messages
    res.locals.error = req.flash('error');// passport error messages
    next();
});
app.use((req, res, next) => {
    res.locals.user = req.user; // Makes user available in all views
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});
  

app.use("/", indexRoutes);
app.use("/profileForm", profileFormRoutes);
app.use("/logIn", logInRoutes);
app.use("/profile", profileRoutes);
app.use("/memberForm", memberFormRoutes);
app.use("/logout", logoutRoutes);
app.use("/contentForm", contentFormRoutes);
app.use("/content", contentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port: ${PORT}`);
});