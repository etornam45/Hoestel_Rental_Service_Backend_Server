const Room = require("../models/room");

async function get_room(req, res) {
    
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

async function add_room(req, res) {}

async function update_room(req, res) {}

async function delete_room(req, res) {}

module.exports = { get_room, get_rooms, add_room, update_room, delete_room };
