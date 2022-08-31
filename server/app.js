// IMPORTS----------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import passport from 'passport'
import session from 'express-session'
import User from './models/user.js'

// ROUTE IMPORTS----------------------------------------------------------
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'

// CONFIGURATION----------------------------------------------------------
const app = express()
const URL = 'mongodb+srv://admin:admin@ssmcluster.xscdphp.mongodb.net/?retryWrites=true&w=majority'
app.use(session({
    secret: 'r8q,+&1LM3)CD*zAGpx1xmdsg{NeQhc;#',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
app.use(bodyParser.urlencoded({ extended: true }))
// PASSPORT AUTH
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// SERVER-----------------------------------------------------------------
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        app.listen(process.env.PORT || "8000", () => {
            console.log("database connected & server started")
        })
        return
    }
    console.log(err)
})

// ROUTES-----------------------------------------------------------------
app.use('/user', userRoutes)
app.use('/post', postRoutes)