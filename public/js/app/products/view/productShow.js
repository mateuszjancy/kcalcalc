define([
	'jquery', 
  'underscore',
	'backbone',
	'app/products/model/product',
  'text!app/products/template/productShow.html'
	], function($, _, backbone, product, template){

	var ProductShow = Backbone.View.extend({  
  		tagName: "li",  
  		
  		initialize: function() {
    		this.model.bind("change", this.render, this);
  		},

		  render: function() {
        var templ = _.template(template);
    		this.$el.html(templ({
          data: this.model.toJSON()
        }));
    		return this;
  		}
	});

	return ProductShow; 
});
