const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  playerName: { type: String },
  drawer: { type: Boolean },
});

module.exports = mongoose.model("User", userSchema);
