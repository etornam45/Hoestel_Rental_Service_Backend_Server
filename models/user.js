const mongoose = require("mongoose")


const schema  = new mongoose.Schema({
    _id : {type: mongoose.Schema.Types.ObjectId},
    first_name: {type: String, required: true} ,
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("User", schema)