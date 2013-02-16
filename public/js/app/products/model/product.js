define(['jquery', 'backbone'], function($, backbone){
	var Product = Backbone.Model.extend({  
		defaults: {  
	      	symbol: "", 
			name: "",
			mesures : {
				calories : {
					value: 0,
					unit: {
						_id: "-1",
						symbole: "",
						name: ""
					}
				},
				fats : {
					value: 0,
					unit: {
						_id: "-1",
						symbole: "",
						name: ""
					}
				},
				sugars : {
					value: 0,
					unit: {
						_id: "-1",
						symbole: "",
						name: ""
					}
				},
				cellulose : {
					value: 0,
					unit: {
						_id: "-1",
						symbole: "",
						name: ""
					}
				}
			},
			portionSize : {
				value: 0,
				unit: {
					_id: "-1",
					symbole: "",
					name: ""
				}
			}
    	},

    	idAttribute: '_id',
    	urlRoot: '/product'
	});

	return Product; 
});
