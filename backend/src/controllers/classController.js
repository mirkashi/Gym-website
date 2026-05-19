const Class = require("../models/Class");

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find({ isActive: true }).populate("trainer", "name specialty image").sort("dayOfWeek startTime");
    res.status(200).json({ success: true, count: classes.length, data: classes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.bookClass = async (req, res) => {
  try {
    const cls = await Class.findById(req.params.id);
    if (!cls) return res.status(404).json({ success: false, message: "Class not found" });
    if (cls.enrolledMembers.length >= cls.maxSpots) {
      return res.status(400).json({ success: false, message: "Class is fully booked" });
    }
    if (cls.enrolledMembers.includes(req.user.id)) {
      return res.status(400).json({ success: false, message: "Already booked for this class" });
    }
    cls.enrolledMembers.push(req.user.id);
    await cls.save();
    res.status(200).json({ success: true, message: "Class booked successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const cls = await Class.findByIdAndUpdate(req.params.id, { $pull: { enrolledMembers: req.user.id } }, { new: true });
    if (!cls) return res.status(404).json({ success: false, message: "Class not found" });
    res.status(200).json({ success: true, message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
