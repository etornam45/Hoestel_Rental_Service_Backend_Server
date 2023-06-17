const argon2 = require("argon2");

async function hash(password ,res) {
  let hash;

  try {
    hash = await argon2.hash(password);
  } catch (err) {
    //...
    console.log("Error hashing password");
    res.send("Error hashing password");
  }

  return hash
}


module.exports = hash