// const { route } = require("express/lib/application")

const { add_user, get_user, get_users, update_user, delete_user } = require("../controller/user")

const router = require("express").Router()

router.get("/", get_users)

router.get("/:user_id", get_user)

router.post("/", add_user)

router.put("/:user_id", update_user)

router.delete("/:user_id", delete_user)

module.exports = router