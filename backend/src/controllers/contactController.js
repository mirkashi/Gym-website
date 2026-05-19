const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: "Message received! We will respond within 24 hours.", data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort("-createdAt").populate("resolvedBy", "firstName lastName");
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.resolveContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { isResolved: true, resolvedBy: req.user.id, notes: req.body.notes }, { new: true });
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
