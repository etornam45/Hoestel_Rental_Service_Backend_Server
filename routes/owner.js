const router = require("express").Router()
const {get_owner, get_owners, add_owner, update_owner, delete_owner} = require("../controller/owner")

router.get("/", get_owners)

router.get("/:owner_id", get_owner)

router.post("/", add_owner)

router.put("/:owner_id", update_owner)

router.delete("/:owner_id", delete_owner)

module.exports = router