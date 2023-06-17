const { default: mongoose } = require("mongoose");
const Owner = require("../models/owner");
const argon2 = require("argon2");

const get_owner = async (req, res) => {
  await Owner.findById(req.params.owner_id)
    .then((result) => {
      res.status(200).json({
        first_name: result.first_name,
        last_name: result.last_name,
        email: result.email,
        _id: result._id,
      });
    })
    .catch((err) => {
      // I think the if statement is redundant

      if (err.error) {
        res.status(500).json(err);
      }
      res.sendStatus(404);
    });
};

async function get_owners(req, res) {
  await Owner.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

async function add_owner(req, res) {
  let hash;

  try {
    hash = await argon2.hash(req.body.password);
  } catch (err) {
    //...
    //   console.log("Error hashing password");
    res.status(500).send("Error hashing password");
  }

  const new_owner = new Owner({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
  });

  new_owner
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

async function update_owner(req, res) {
  let hash;

  try {
    hash = await argon2.hash(req.body.password);
  } catch (err) {
    //...
    console.log("Error hashing password");
    res.json("Error hashing password");
  }

  Owner.findOneAndUpdate(
    {
      _id: req.params.owner_id,
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
        error: "owner deos not exist",
      });
    });
}

async function delete_owner(req, res) {
    await Owner.findByIdAndDelete(req.params.owner_id).exec()
    .then((result) => {
      if(result){
        res.status(200).json("owner deleted");
      }else{
        res.status(404).json({error: "owner not found"});
      }
    })
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  get_owner,
  get_owners,
  add_owner,
  update_owner,
  delete_owner,
};
