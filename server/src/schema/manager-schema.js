const mongoose = require('mongoose');

const Manager = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ticket_window: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('manager', Manager);
