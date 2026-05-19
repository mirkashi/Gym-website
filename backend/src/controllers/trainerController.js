const Trainer = require("../models/Trainer");

exports.getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find({ isActive: true }).sort("name");
    res.status(200).json({ success: true, count: trainers.length, data: trainers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ success: false, message: "Trainer not found" });
    res.status(200).json({ success: true, data: trainer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(201).json({ success: true, data: trainer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!trainer) return res.status(404).json({ success: false, message: "Trainer not found" });
    res.status(200).json({ success: true, data: trainer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!trainer) return res.status(404).json({ success: false, message: "Trainer not found" });
    res.status(200).json({ success: true, message: "Trainer deactivated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
