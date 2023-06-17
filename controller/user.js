const User = require("../models/user");
const mongoose = require("mongoose")
const argon2 = require("argon2");

async function get_user(req, res) {
  await User.findById(req.params.user_id)
    .exec()
    .then((result) => {
      res.status(200).json({
        first_name: result.first_name,
        last_name: result.last_name,
        email: result.email,
        _id: result._id,
      });
    })
    .catch((error) => {
      res.status(404).json(error);
    });
  // res.json("All users")
}

async function get_users(req, res) {
  await User.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
  // res.json({msg: "All users"})
}

add_user = async (req, res) => {
  let hash;

  try {
    hash = await argon2.hash(req.body.password);
  } catch (err) {
    //...
    console.log("Error hashing password");
    res.json("Error hashing password");
  }

  let new_user = new User({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
  });

  new_user
    .save()
    .then((result) => {
      res.status(200).json({
        last_name: result.last_name,
        first_name: result.first_name,
        email: result.email,
        _id: result._id
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });

  //   res.json("User added");
};

async function update_user(req, res) {
  let hash;

  try {
    hash = await argon2.hash(req.body.password);
  } catch (err) {
    //...
    console.log("Error hashing password");
    res.json("Error hashing password");
  }

  User.findOneAndUpdate(
    {
      _id: req.params.user_id,
    },
    {
      first_name: req.body.first_name ? req.body.first_name : undefined,
      last_name: req.body.last_name ? req.body.last_name : undefined,
      email: req.body.email ? req.body.email : undefined,
      password: req.body.password ? hash : ud,
    }
  )
    .then((result) => {
      res.status(200).send({
        first_name: req.body.first_name
          ? req.body.first_name
          : result.first_name,
        last_name: req.body.last_name ? req.body.last_name : result.last_name,
        email: req.body.email ? req.body.email : result.email,
        _id: result._id,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "user deos not exist",
      });
    });
}

async function delete_user(req, res) {
  await User.findByIdAndDelete(req.params.user_id)
    .then((result) => {
      if (result) {
        res.status(200).json("user deleted");
      } else {
        res.status(404).json({ error: "user not found" });
      }
    })
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  get_user,
  get_users,
  update_user,
  add_user,
  delete_user,
};
