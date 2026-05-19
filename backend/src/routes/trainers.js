const express = require("express");
const router = express.Router();
const { getAllTrainers, getTrainer, createTrainer, updateTrainer, deleteTrainer } = require("../controllers/trainerController");
const { protect, authorize } = require("../middleware/auth");

router.get("/", getAllTrainers);
router.get("/:id", getTrainer);
router.post("/", protect, authorize("admin"), createTrainer);
router.put("/:id", protect, authorize("admin"), updateTrainer);
router.delete("/:id", protect, authorize("admin"), deleteTrainer);

module.exports = router;
