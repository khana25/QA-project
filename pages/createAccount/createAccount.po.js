var helper = require('../../helper.js');
var faker = require('faker');

var createAccountPage = function() {

    var fname = faker.name.firstName();
    var lname = faker.name.lastName();
    var password1 = faker.internet.password();
    var randomAddress = faker.address.streetAddress();
    var city1 = faker.address.city();
    var state1 = faker.address.state();
    var zipcode = faker.address.zipCode("#####");
    var mobile1 = faker.phone.phoneNumber();
    var reference1 = faker.lorem.word();

    // create account page elements
    this.createAccountHeadingTxt = 'CREATE AN ACCOUNT';
    this.createAccountHeading = element(by.css('.page-heading'));
    this.first_name = element(by.id('customer_firstname'));
    this.last_name = element(by.id('customer_lastname'));
    this.password = element(by.id('passwd'));


    //Address elements
    this.address = element(by.id('address1'));
    this.city = element(by.id('city'));
    this.state = element(by.id('id_state'));
    this.postcode = element(by.id('postcode'));
    this.mobile = element(by.id('phone_mobile'));
    this.reference = element(by.id('alias'));
    this.registerBtn = element(by.id('submitAccount'));

    // Elements after registering a user
    this.delivery_address = element(by.id('address_delivery'));
    this.proceedCheckoutBtn = element(by.css("button[name='processAddress']"));
    this.orderBox = element(by.css('.order_carrier_content'));
    this.termsAndConditions = element(by.id('uniform-cgv'));
    this.proceedCarrierBtn = element(by.css("button[name='processCarrier']"));
    this.paymentMethod = element(by.css("a[title = 'Pay by bank wire']"));
    this.chequeBox = element(by.css('.cheque-box'));
    this.confirmOrderBtb = element(by.css("#cart_navigation button[type='submit']"));
    this.orderConfirmationInfo = element(by.css('.box'));

    //Logout button
    this.logout = element(by.css('.logout'));


    //function to create account
    this.createAccount = function() {
        this.first_name.sendKeys(fname);
        this.last_name.sendKeys(lname);
        this.password.sendKeys(password1);
        this.address.sendKeys(randomAddress);
        this.city.sendKeys(city1);
        this.state.sendKeys(state1);
        this.postcode.sendKeys(zipcode);
        this.mobile.sendKeys('011-500-3450');
        this.reference.sendKeys(reference1);
        this.registerBtn.click();
        helper.waitUntilReady(this.delivery_address);
    }

    //function for order confirmation
    this.orderConfirmation = function() {
        this.proceedCheckoutBtn.click();
        helper.waitUntilReady(this.orderBox);
        this.termsAndConditions.click();
        helper.waitUntilReady(this.proceedCarrierBtn)
        this.proceedCarrierBtn.click();
        helper.waitUntilReady(this.paymentMethod);
        this.paymentMethod.click();
        helper.waitUntilReady(this.chequeBox);
        this.confirmOrderBtb.click();
        helper.waitUntilReady(this.orderConfirmationInfo);
        this.orderConfirmationInfo.click();
    }
}

module.exports = createAccountPage;