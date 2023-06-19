const { get_hostel, get_hostels, add_hostel, update_hostel, delete_hostel } = require("../controller/hostel")

const router = require("express").Router()


router.get("/", get_hostels)
router.get("/:hostel_id", get_hostel)
router.post("/", add_hostel)
router.put("/:hostel_id", update_hostel)
router.delete("/:hostel_id", delete_hostel)

module.exports = router