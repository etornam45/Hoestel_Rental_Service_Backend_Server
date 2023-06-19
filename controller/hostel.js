const { default: mongoose } = require("mongoose");
const Hostel = require("../models/hostel");

async function get_hostel(req, res) {
  await Hostel.findById(req.params.hostel_id).then((result) => {
    res.status(200).json();
  });
}

async function get_hostels(req, res) {
  await Hostel.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
}

async function add_hostel(req, res) {
  const new_hostel = new Hostel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
  });

  new_hostel
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

async function update_hostel(req, res) {
  await Hostel.findByIdAndUpdate(req.params.hostel_id)
  .then((result) => {
    res.status(200).json(result)
  }).catch(err => {
    res.status(500).json(err)
  });
}

async function delete_hostel(req, res) {
  await Hostel.findByIdAndDelete(req.params.hostel_id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  get_hostel,
  get_hostels,
  add_hostel,
  update_hostel,
  delete_hostel,
};
