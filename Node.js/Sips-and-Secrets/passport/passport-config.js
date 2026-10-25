const passport= require("passport");
const LocalStrategy = require('passport-local').Strategy;
const db = require("../db/queries");
const bcrypt = require("bcrypt");

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try{
            const user = await db.getUsername(username);

            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: "incorrect password" });
            }
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try{
        const user = await db.getUserId(id);
        done(null, user);
    } catch(err) {
        done(err);
    }
});