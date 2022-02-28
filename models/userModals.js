var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    playerName: { type: String },
    drawer: { type: Boolean }
});
module.exports = mongoose.model("User", userSchema);
