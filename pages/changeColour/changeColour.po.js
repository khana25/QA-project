var helper = require('../../helper.js');
var faker = require('faker');

var ChangeColourPage = function() {

    this.changeColour = element(by.css("a[name='Blue']"));
    this.addBtn = element(by.id('add_to_cart'));

}

module.exports = ChangeColourPage;