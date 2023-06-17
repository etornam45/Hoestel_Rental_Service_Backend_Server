import mongoose from "mongoose";

const Schema = mongoose

const schema  = new Schema({
    _id : Schema.Types.ObjectId,
    first_name: {type: String, required} ,
    last_name: {type: String, required},
    password: {type: String, required}
})

module.exports = mongoose.model("Owner", schema)