const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  price: Number,
  features: [
    {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      total: Number,
      images: [String],
      description: String,
    },
  ],
});

module.exports = mongoose.model("Room", schema);
