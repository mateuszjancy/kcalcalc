define(['jquery','backbone', 'app/products/model/product'], function($, backbone, product){
	var Client = backbone.Collection.extend({
		model:  product,
		url: "/product"
	});
});
