/**
 * Created with JetBrains WebStorm.
 * User: fm
 * Date: 12.02.13
 * Time: 22:43
 * To change this template use File | Settings | File Templates.
 */

$.widget( "kcalcalc.kcPanel", {
// options
    options: {
        data: null
    },
//constructor
    _create: function() {
        var o = this.options;

        this.element.addClass('kcBg');

        console.log(o.data)

        this.typeDiv = $('<div>',{'class':'kcType'}).text(o.type).appendTo(this.element);

        this.quantityDiv = $('<div>',{'class':'kcQuantity'}).text(o.quantity).appendTo(this.element);

        this.smallDiv = $('<div>',{'class':'kcSmall'}).appendTo(this.element);

        this.valDiv = $('<div>',{'class':'kcVal'}).text(o.val).appendTo(this.smallDiv);

    }

});