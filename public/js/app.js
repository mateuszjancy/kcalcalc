require.config({
	baseUrl: "/js/",
	paths:{
		jquery: 'lib/jquery-1.8.3',
		backbone: 'lib/backbone-0.9.10',
		underscore: 'lib/underscore-1.4.3',
		bootstap: 'lib/bootstrap-2.3.0',
		text: 'lib/text-2.0.5'
	},

	shim:{
		underscore: {
      	exports: "_",
      		init: function () {
        			this._.templateSettings = {
	          		evaluate: /\{\{(.+?)\}\}/g,
    	      		interpolate: /\{\{=(.+?)\}\}/g
        		};
        		console.log("-->>in init", this._.templateSettings);
        		return this._;        
      		}
    	},

    	backbone: {
      		deps: ['underscore', 'jquery'],
      		exports: 'Backbone'
    	}
	}
});

require(['underscore', 'app/routher/main'], function(_, Router){
  console.log("->in main", Router);
  
  var router = new Router();
  Backbone.history.start();
});