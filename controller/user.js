const User = require('../models/user')
// const mongoose = require("mongoose")
const argon2 = require("argon2")

async function get_user(req, res) {
    // await User.findById(req.params.user_id).exec().then(result => {
    //     res.send(result)
    // }).catch(error => {
    //     res.send(error)
    // })


    res.send("All users")
}

async function get_users(req, res) {
    // await User.find().then(result => {
    //     res.send(result)
    // }).catch(err => {
    //     res.send(err)
    // })

    res.send({msg: "All users"})
}

add_user = async (req, res) => {

    let hash

    try {
        hash = await argon2.hash("password");
    } catch (err) {
        //...
        console.log("Error hashing password")
        res.send("Error hashing password")
    }


    let new_user = new User({
        first_name: req.body.firstname,
        last_name: req.body.last_name,
        password: hash
    })

    new_user.save()

    res.send("User added")
}

function update_user(req, res) {

}

async function delete_user(req, res) {
    await User.findByIdAndDelete(req.params.user_id)
}


module.exports = {
    get_user,
    get_users,
    update_user,
    add_user,
    delete_user
}