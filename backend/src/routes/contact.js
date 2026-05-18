const express = require("express");
const router = express.Router();
const { submitContact, getAllContacts, resolveContact } = require("../controllers/contactController");
const { protect, authorize } = require("../middleware/auth");

router.post("/", submitContact);
router.get("/", protect, authorize("admin"), getAllContacts);
router.put("/:id/resolve", protect, authorize("admin"), resolveContact);

module.exports = router;
