// IMPORTS----------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import ImageKit from 'imagekit'
import { spawn } from 'child_process'
import multer from 'multer'

// ROUTE IMPORTS----------------------------------------------------------
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'


// CONFIGURATION----------------------------------------------------------
const app = express()
const imagekit = new ImageKit({
    urlEndpoint: 'https://ik.imagekit.io/xcuqahb2st38',
    publicKey: 'public_RR6bfJBYwkidUbZcaYUvdNfv2Ow=',
    privateKey: 'private_VAswuspfqK9ylEByON3Ua25CFGs='
});

// allow cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/auth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.use(cors())
const URL = 'mongodb+srv://admin:admin@ssmcluster.xscdphp.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(bodyParser.json({ limit: '30mb' }));

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


// MULTER--------------------------------------------------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cd(null, './utils/image')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalName)
    }
})

const upload = multer({
    storage: storage
})

//PYTHON---------------------------------------------------------------------
app.get("/python", upload.single("postImg ") ,(req, res) => {
    console.log(req.file)

    var data;
    const python = spawn('python3', ['./utils/blur-recognization.py'])
    python.stdout.on('data', (returnedData) => {
        console.log('pipe data from script')
        data = returnedData.toString()
    })
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(data)
    });
})