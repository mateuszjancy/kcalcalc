define([
    'jquery',
    'backbone',
    'app/products/model/product',
    'app/products/view/productCreate'
  ], 
  function(
      $, 
      Backbone,
      ProductModel,
      ProductCreateView
    ) {
    var Router = Backbone.Router.extend({
      routes: {
        'list': 'list',
        'get/:_id': 'get',
        'create': 'create',
        'update/:_id': 'update',
        'remove/:_id': 'remove',

        '': 'main'
      },

      list : function(){
        console.log("list");
      },

      get: function(_id){
        console.log("get");
      },

      create: function(){
          console.log("create");

          var productModel = new ProductModel();
          var productCreateView = new ProductCreateView({model: productModel});

          $("#product-container").html(productCreateView.render().el);
          this.navigate("#main", {trigger: false, replace: true});

      },

      update: function(_id){
          console.log("update");
      },

      save: function(){
          console.log("save");
      },

      remove: function(_id){
        console.log("remove");
      },



      main: function(){
        console.log("main");
      }

    }); 
    return Router;
});