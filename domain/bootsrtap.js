var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Unit = require("./unit").Unit;
var Product = require("./product").Product;

exports.dropDatabase = function(){
	Unit.remove({}, function(){});
	Product.remove({}, function(){});
};

exports.createProduct = function(unit, symbol, name, calories, fats, sugars, cellulose, portionSize, callback){
	var product = new Product({
		symbol: symbol, 
		name: name,
		mesures : {
			calories : {
				value: calories,
				unit: unit._id
			},
			fats : {
				value: fats,
				unit: unit._id
			},
			sugars : {
				value: sugars,
				unit: unit._id
			},
			cellulose : {
				value: cellulose,
				unit: unit._id
			}
		},
		portionSize : {
			value: portionSize,
			unit: unit._id
		}
	});

	product.save(function(err, product){
		if(!err && callback != null){
			callback(product);
		}
	});
};

exports.createUnit = function(symbol, name, callback){
	var unit = new Unit({
		symbol: symbol,
		name: name
	});

	unit.save(function(err, unit){
		if(!err && callback != null){
			callback(unit);
		}
	});
};