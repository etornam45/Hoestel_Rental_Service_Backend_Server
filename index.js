const express = require("express")
const bodyParser = require("body-parser")
const userRouter = require("./routes/user")

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.use("/api/user", userRouter)

app.listen(PORT, () => {console.log(`App listerning on http://localhost:${PORT}`)})

