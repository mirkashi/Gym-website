const express = require("express");
const router = express.Router();
const { getAllClasses, bookClass, cancelBooking } = require("../controllers/classController");
const { protect } = require("../middleware/auth");

router.get("/", getAllClasses);
router.post("/:id/book", protect, bookClass);
router.delete("/:id/book", protect, cancelBooking);

module.exports = router;
