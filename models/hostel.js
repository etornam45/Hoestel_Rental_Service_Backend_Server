const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,

    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
})


module.exports = mongoose.model("Hostel", schema)