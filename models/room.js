const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    price: Number,
    features: [{
            name: String,
            total: Number,
            images: [String],
            description: String
    }]
})


module.exports = mongoose.Model("Room", schema)