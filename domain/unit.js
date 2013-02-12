var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unit = new Schema({
	symbole: String,
	name: String
});

exports.Unit = mongoose.model("Unit", unit);