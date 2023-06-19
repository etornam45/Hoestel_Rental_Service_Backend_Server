const express = require("express")
const bodyParser = require("body-parser")
const userRouter = require("./routes/user")
const ownerRouter = require("./routes/owner")
const hostelRouter = require("./routes/hostel")
const roomRouter = require("./routes/room")
const mongoose = require('mongoose');

const app = express()
const PORT = 3000


/*
* TODO
    must add db url to env var.


* It's a good practice to hide the database uri in env variables 
* but i'll leave it because the batabase is on my local machine
*
*/

mongoose.connect('mongodb://127.0.0.1:27017/hostel-renting');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.use("/api/user", userRouter)

app.use("/api/owner", ownerRouter)

app.use("/api/hostel", hostelRouter)

app.use("/api/room", roomRouter)

app.listen(PORT, () => {console.log(`App listerning on http://localhost:${PORT}/api/`)})

