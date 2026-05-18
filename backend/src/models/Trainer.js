const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: String, required: true },
    bio: { type: String },
    image: { type: String },
    certifications: [String],
    socialLinks: {
      instagram: String,
      twitter: String,
      facebook: String,
    },
    isActive: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trainer", trainerSchema);
