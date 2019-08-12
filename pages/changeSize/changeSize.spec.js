var helper = require('../../helper');
HomePage = require('../home/home.po.js');
CreateAccountPage = require('../createAccount/createAccount.po.js');
ChangeColourPage = require('../changeColour/changeColour.po.js');
ChangeSizePage = require('./changeSize.po.js')

describe('Test to change the size of the item before add to the cart', function() {

    var changeSizePage = new ChangeSizePage();
    var changeColourPage = new ChangeColourPage();
    var createAccountPage = new CreateAccountPage();
    var homepage = new HomePage();


    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();

        //Click the more button of the first item to visit the item's details page
        homepage.moreDetails();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('change the size of the item and add to cart', function () {
        helper.waitUntilReady(changeSizePage.productDetails);
        changeSizePage.changeSize.click();
        changeSizePage.selectSize.click();
        changeSizePage.addBtn.click();

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

    });

});