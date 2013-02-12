var Unit = require("../domain/unit").Unit;

exports.list = function(req, res){
  	Unit.find({}, function(err, units){
  		if(!err) res.send(units);	
  		else res.send("err");
  	});
};

exports.get = function(req, res){
	Unit.findOne({_id:req.params._id}, function(err, unit){
		if(!err) res.send(unit);	
  		else res.send("err");
	})
};

exports.create = function(req, res){
	var unit = new Unit({
		symbol: req.body.symbol, 
		name: req.body.name
	});

	unit.save(function(err, unit){
		if(!err) res.send(unit);	
  		else res.send("err");
	});
};

exports.update = function(req, res){
	Unit.findOneAndUpdate({_id: req.param._id}, {
  		symbol: req.body.symbol, 
		name: req.body.name
	}, function(err, unit){
		if(!err) res.send(unit);	
  		else res.send("err");
	});
};

exports.remove = function(req, res){
	Unit.remove({_id: req.params._id});
	res.send("err");
};