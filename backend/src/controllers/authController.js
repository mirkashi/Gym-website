const jwt = require("jsonwebtoken");
const User = require("../models/User");

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
  const data = { _id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, plan: user.plan };
  res.status(statusCode).json({ success: true, token, user: data });
};

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, plan } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }
    const user = await User.create({ firstName, lastName, email, phone, password, plan: plan || "basic" });
    sendToken(user, 201, res);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    if (!user.isActive) {
      return res.status(401).json({ success: false, message: "Account is suspended. Contact support." });
    }
    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, user });
};

exports.updateProfile = async (req, res) => {
  try {
    const allowed = ["firstName", "lastName", "phone"];
    const updates = {};
    allowed.forEach((k) => { if (req.body[k] !== undefined) updates[k] = req.body[k]; });
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true });
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
