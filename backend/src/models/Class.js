const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true },
    dayOfWeek: { type: String, required: true, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
    startTime: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    maxSpots: { type: Number, required: true },
    enrolledMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    category: { type: String, enum: ["strength", "cardio", "yoga", "hiit", "boxing", "crossfit", "pilates", "spin", "other"] },
    description: String,
    isActive: { type: Boolean, default: true },
    requiredPlan: { type: String, enum: ["basic", "standard", "premium"], default: "standard" },
  },
  { timestamps: true }
);

classSchema.virtual("availableSpots").get(function () {
  return this.maxSpots - this.enrolledMembers.length;
});

module.exports = mongoose.model("Class", classSchema);
