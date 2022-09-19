// IMPORTS----------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// ROUTE IMPORTS----------------------------------------------------------
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'

// CONFIGURATION----------------------------------------------------------
const app = express()

app.use(cors())
const URL = 'mongodb+srv://admin:admin@ssmcluster.xscdphp.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(bodyParser.json({limit: '30mb'}));

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
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)