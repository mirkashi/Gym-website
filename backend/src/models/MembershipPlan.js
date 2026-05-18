const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, enum: ["basic", "standard", "premium"] },
    displayName: { type: String, required: true },
    monthlyPrice: { type: Number, required: true },
    yearlyPrice: { type: Number, required: true },
    features: [String],
    isPopular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    maxGuestsPerMonth: { type: Number, default: 0 },
    ptSessionsPerMonth: { type: Number, default: 0 },
    groupClassesPerMonth: { type: Number, default: -1 }, // -1 = unlimited
  },
  { timestamps: true }
);

module.exports = mongoose.model("MembershipPlan", planSchema);
