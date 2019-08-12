var helper = require('../../helper.js');
var faker = require('faker');

var ChangeSizePage = function() {

    this.productDetails = element(by.css('.product_attributes'));
    this.changeSize = element(by.id('uniform-group_1'));
    this.selectSize = element(by.css("option[value='3']"));
    this.addBtn = element(by.id('add_to_cart'));


}

module.exports = ChangeSizePage;