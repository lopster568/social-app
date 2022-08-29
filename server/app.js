// IMPORTS----------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// ROUTE IMPORTS----------------------------------------------------------
import userRoutes from './routes/user.js'

// CONFIGURATION----------------------------------------------------------
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }))
const URL = 'mongodb+srv://admin:admin@ssmcluster.xscdphp.mongodb.net/?retryWrites=true&w=majority'

// SERVER-----------------------------------------------------------------
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(!err){
        app.listen(process.env.PORT || "8000", () => {
            console.log("database connected & server started")
        })
        return
    }
    console.log(err)
})

// ROUTES-----------------------------------------------------------------
app.use('/user', userRoutes)