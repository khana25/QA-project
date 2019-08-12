var helper = require('../../helper');
HomePage = require('../home/home.po.js');
CreateAccountPage = require('../createAccount/createAccount.po.js');
ChangeColourPage = require('./changeColour.po.js');

describe('Test to change the colour of the item before add to the cart', function() {

    var changeColourPage = new ChangeColourPage();
    var createAccountPage = new CreateAccountPage();
    var homepage = new HomePage();


    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();

        homepage.moreDetails();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('change the colour of the item and add to cart', function () {
        helper.waitUntilReady(changeColourPage.changeColour);
        changeColourPage.changeColour.click();
        changeColourPage.addBtn.click();

        helper.waitUntilReady(homepage.checkoutBtn)
        homepage.checkoutBtn.click();

        helper.waitUntilReady(homepage.standardCheckoutBtn);
        homepage.standardCheckoutBtn.click();

        // create account after changing size of an item
        homepage.emailAddressToCreateAnAccount();
        browser.driver.sleep(2000);

        createAccountPage.createAccount();
        browser.driver.sleep(3000);
        createAccountPage.orderConfirmation();
        browser.driver.sleep(3000);
        createAccountPage.logout.click();
        browser.driver.sleep(3000);

        expect(homepage.createAccountForm.isPresent()).toBe(true);

        //create account after changing colour of an item
        createAccountPage.createAccount();
        browser.driver.sleep(3000);
        createAccountPage.orderConfirmation();
        browser.driver.sleep(3000);
        createAccountPage.logout.click();
        browser.driver.sleep(3000);

        expect(homepage.createAccountForm.isPresent()).toBe(true);

    });

});