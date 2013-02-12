var Product = require("../domain/product").Product;

//Read
exports.list = function(req, res){
  	Product.find({}, function(err, products){
  		if(!err) res.send(products);	
  		else res.send("err");
  	});
};

exports.get = function(req, res){
	Product.findOne({_id:req.params._id}, function(err, product){
		if(!err) res.send(product);	
  		else res.send("err");
	})
};

exports.create = function(req, res){
	var product = new Product({
		symbol: req.body.symbol, 
		name: req.body.name,
		mesures : {
			calories : {
				value: req.body.calories,
				unit: req.body.unit._id
			},
			fats : {
				value: req.body.fats,
				unit: req.body.unit._id
			},
			sugars : {
				value: req.body.sugars,
				unit: req.body.unit._id
			},
			cellulose : {
				value: req.body.cellulose,
				unit: req.body.unit._id
			}
		},
		portionSize : {
			value: req.body.portionSize,
			unit: req.body.unit._id
		}
	});

	product.save(function(err, product){
		if(!err) res.send(product);	
  		else res.send("err");
	});
};

exports.update = function(req, res){
	Product.findOneAndUpdate({_id: req.param._id}, {
  		symbol: req.body.symbol, 
		name: req.body.name,
		mesures : {
			calories : {
				value: req.body.calories,
				unit: req.body.unit._id
			},
			fats : {
				value: req.body.fats,
				unit: req.body.unit._id
			},
			sugars : {
				value: req.body.sugars,
				unit: req.body.unit._id
			},
			cellulose : {
				value: req.body.cellulose,
				unit: req.body.unit._id
			}
		},
		portionSize : {
			value: req.body.portionSize,
			unit: req.body.unit._id
		}
	}, function(err, product){
		if(!err) res.send(product);	
  		else res.send("err");
	});
};

exports.remove = function(req, res){
	Product.remove({_id: req.params._id});
	res.send("err");
};