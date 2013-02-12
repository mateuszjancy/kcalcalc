var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Unit = require("./unit").Unit;

var product = new Schema({
	symbol: String, 
	name: String,
	mesures : {
		calories : {
			value: String,
			unit: {type: ObjectId, ref: 'Unit'}
		},
		fats : {
			value: String,
			unit: {type: ObjectId, ref: 'Unit'}
		},
		sugars : {
			value: String,
			unit: {type: ObjectId, ref: 'Unit'}
		},
		cellulose : {
			value: String,
			unit: {type: ObjectId, ref: 'Unit'}
		}
	},
	portionSize : {
		value: String,
		unit: {type: ObjectId, ref: 'Unit'}
	}
});

exports.Product = mongoose.model("Product", product);