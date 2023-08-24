const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")


const initialize = (passport, getUserByEmail, getUserById) => {
    // function to authenticate users

    const authenticateUsers = async (email, password, done) => {

        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, {message: "No user found with that email"})
        }
        try {
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else {
                return done (null, false, {message: "password incorrect"})
            }
        } catch (error) {
            console.log(error)
            return done(error)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize