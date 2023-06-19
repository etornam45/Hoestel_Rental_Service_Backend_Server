const Room = require("../models/room");

async function get_room(req, res) {
  await Room.findById(req.params.room_id)
    .then((result) => {
      if (result) {
        res.status().json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

async function get_rooms(req, res) {
  await Room.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

async function add_room(req, res) {
  let new_room = new Room({});

  new_room.save().then();
}

async function update_room(req, res) {}

async function delete_room(req, res) {
  await Room.findByIdAndDelete(req.params.room_id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => res.status(500).json(err));
}

module.exports = { get_room, get_rooms, add_room, update_room, delete_room };
