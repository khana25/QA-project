var helper = require('../../helper');
var HomePage = require('../home/home.po.js');
CreateAccountPage = require('./createAccount.po.js');

describe('Create Account Page', function() {

    var homepage = new HomePage();
    var createAccountPage = new CreateAccountPage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
        homepage.addToCart();

    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should createAccount for a keyword and verify the results against that keyword createAccount', function(){
        expect(createAccountPage.createAccountHeading.getText()).toBe(createAccountPage.createAccountHeadingTxt);
        homepage.emailAddressToCreateAnAccount

        //create account after changing colour of an item
        createAccountPage.createAccount();
        browser.driver.sleep(3000);
        createAccountPage.orderConfirmation();
        browser.driver.sleep(3000);
        createAccountPage.logout.click();
        browser.driver.sleep(3000);

        expect(homepage.createAccountForm.isPresent()).toBe(true);

    })
});