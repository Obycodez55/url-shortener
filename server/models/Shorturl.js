const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;
const ShorturlSchema = new Schema({
  originalLink: {
    type: String,
    required: true,
    unique: true
  },
  shortlink: {
    type: String,
    required: true,
    unique: true,
    default: shortid.generate()
  },
  No_of_clicks: {
    type: Number,
    required: true,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Shorturl", ShorturlSchema);
