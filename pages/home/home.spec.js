var helper = require('../../helper');
    HomePage = require('./home.po.js');
    CreateAccountPage = require('../createAccount/createAccount.po.js');

describe('Automation Practice homepage', function() {

    var createAccountPage = new CreateAccountPage();

    var homepage = new HomePage();
   // var createAccountPage = new createAccountPage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should visit the homepage and verify the title of the page', function () {
        expect(browser.getTitle()).toEqual(homepage.title);
        browser.waitForAngular();
        homepage.addToCart();
        browser.driver.sleep(3000);
        expect(createAccountPage.createAccountHeading.getText()).toBe(createAccountPage.createAccountHeadingTxt)
        expect(homepage.createAccountForm.isPresent()).toBe(true);


        //create account after changing colour of an item
        createAccountPage.createAccount();
        browser.driver.sleep(3000);
        createAccountPage.orderConfirmation();
        browser.driver.sleep(3000);
        createAccountPage.logout.click();
        browser.driver.sleep(2000);

        expect(homepage.createAccountForm.isPresent()).toBe(true);



    });

});