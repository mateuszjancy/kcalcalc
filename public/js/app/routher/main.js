define([
    'jquery',
    'backbone'
  ], 
  function(
      $, 
      Backbone
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
      },

      update: function(_id){
          console.log("update");
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