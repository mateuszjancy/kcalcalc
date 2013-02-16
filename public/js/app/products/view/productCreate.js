define([
    'jquery',
    'underscore',
    'backbone',
    'app/products/model/product',
    'text!app/products/template/productCreate.html'
], function($, _, backbone, product, template){

    var ProductShow;
    ProductShow = Backbone.View.extend({
        tagName:"div",

        initialize:function () {
            this.model.bind("change", this.render, this);
        },

        events:{
            "click #save": "save",
            "change input":"fieldChanged"
        },

        fieldChanged:function (e) {
            console.log("->chane", e);
            var field = $(e.currentTarget);
            var data = {};

            data[field.attr('id')] = field.val();
            this.model.set(data);
        },

        save: function(){
            console.log("save");
            this.model.save();
        },

        render:function () {
            console.log("->template", template);
            console.log("->model", this.model.toJSON());
            var templ = _.template(template);
            this.$el.html(templ({
                data:{
                    product: this.model.toJSON(),
                    units: null
                }
            }));
            return this;
        }
    });

    return ProductShow;
});
