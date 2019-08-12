var helper = require('../../helper.js');
var faker = require('faker');

var HomePage = function() {

    var randomEmail = faker.internet.email();

    // homepage elements
    this.title = 'My Store';
    this.firstItem = element(by.css(".first-in-line"));
    this.add_to_cart_btn = element(by.css(".ajax_add_to_cart_button"));
    this.moreBtn = element(by.css('.first-in-line .lnk_view'));
    this.shopping_cart = element(by.css(".shopping_cart"));
    this.checkoutBtn = element(by.css('.button-medium'));
    this.cartPageTitle = 'Order - My Store'

    this.cartTitle = element(by.id('cart_title'))
    this.standardCheckoutBtn = element(by.css('.standard-checkout'))

    this.createAccountForm = element(by.id('account-creation_form'))
    this.emailAddressField = element(by.id("email_create"))
    this.createAccountBtn = element(by.id("SubmitCreate"))



    //enter emai lto create an account
    this.emailAddressToCreateAnAccount = function() {
        browser.driver.sleep(2000);

        this.emailAddressField.sendKeys(randomEmail);
        this.createAccountBtn.click();
    }

    //functions to interact with our page
    this.addToCart = function() {
        browser.actions().mouseMove(this.firstItem).perform();
        expect(this.firstItem.isDisplayed()).toBeTruthy();
        helper.waitUntilReady(this.add_to_cart_btn);
        this.add_to_cart_btn.click();
        helper.waitUntilReady(this.checkoutBtn);
        this.checkoutBtn.click();

        expect(browser.getTitle()).toEqual(this.cartPageTitle);
        expect(browser.getTitle()).toEqual(this.cartTitle);

        this.standardCheckoutBtn.click();
        helper.waitUntilReady(this.emailAddressField);

        this.emailAddressField.sendKeys(randomEmail);
        this.createAccountBtn.click();
    }

    this.moreDetails = function() {
        browser.actions().mouseMove(this.firstItem).perform();
        expect(this.firstItem.isDisplayed()).toBeTruthy();
        helper.waitUntilReady(this.moreBtn);
        this.moreBtn.click();
    }
}

module.exports = HomePage;