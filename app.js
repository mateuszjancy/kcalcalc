//Const
var WITH_BOOTSTRAP = true;
var DB = {
  DEV: "mongodb://localhost/kcalcalc_dev",
  QA: "mongodb://localhost/kcalcalc_qa",
  PROD: "mongodb://localhost/kcalcalc_prod"
}

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require("mongoose")
  ;

//routers
var product = require('./routes/product');
var unit = require("./routes/unit");

//Bootsrtap
var bootsrtap = require("./domain/bootsrtap");
var unitModel = require("./domain/unit");
var productModel = require("./domain/product");

//DB connection
mongoose.connect(DB.DEV);

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

//Product
app.get('/product', product.list);
app.get('/product/:_id', product.get);
app.put('/product', product.create);
app.post('/product/:_id', product.update);
app.delete('/product/:_id', product.remove);

//Units
app.get('/unit', unit.list);
app.get('/unit/:_id', unit.get);
app.put('/unit', unit.create);
app.post('/unit/:_id', unit.update);
app.delete('/unit/:_id', unit.remove);


if(WITH_BOOTSTRAP){
    bootsrtap.dropDatabase();
    bootsrtap.createUnit("gr.", "Kilogram", function(unitModel){
      for(var i = 0; i < 10; i++){
        bootsrtap.createProduct(unitModel, "S1000" + i, "Name00"+i, i, i, i, i, i * 10, null);  
      }
    });
};

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
