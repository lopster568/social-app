import mongoose from 'mongoose'
import User from '../models/user.js'
import passport from 'passport'

export const registerUser = (req, res) => {
    const { username, displayName, email, password } = req.body
    const newUser = new User({
        username, displayName, email
    })
    User.register(newUser, password, (err, user) => {
        if (!err) {
            passport.authenticate("local")(req, res, function () {
                res.send(user)
            })
            return
        }
        console.log(err)
    })
}

export const loginUser = passport.authenticate('local')

export const loginCb = (req, res) => {
    res.send(req.user)
}

export const getUser = (req, res) => {
    const user = req.user
    if (user) {
        res.send(user)
    } else {
        res.send(null)
    }
}
export const updateUser = (req, res) => {
    const user = req.user
    const { field, value } = req.body

    const arr = [[field, value]];
    const mp = new Map(arr);
    const changes = Object.fromEntries(mp);

    User.findByIdAndUpdate(user._id, changes, (err, prevDoc) => {
        if (!err) {
            res.send("User Updated")
            return
        }
        console.log(err)
    })
}

export const logout = (req, res) => {
    req.logout(function(err) {
        if (err) { console.log(err); }
        res.send("Successfully Logged Out!")
      });
}
