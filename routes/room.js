const { get_rooms } = require("../controller/room")

const router = require("express").Router()


router.get("/", get_rooms)
router.get("/:room_id", )
router.post("/", )
router.put("/:room_id", )
router.delete("/:room_id", )

module.exports = router