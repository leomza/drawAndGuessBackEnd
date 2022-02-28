var mongoose = require("mongoose");
var sessionSchema = mongoose.Schema({
    users: { type: Array },
    word: { type: String },
    difficulty: { type: String },
    points: { type: Number, "default": 0 },
    createdDate: { type: Date, "default": Date.now() },
    finishedDate: { type: Date },
    image: { type: String }
});
module.exports = mongoose.model("Session", sessionSchema);
