var helper = require('../../helper');
    HomePage = require('./home.po.js');

describe('Nature homepage', function() {

    var homepage = new HomePage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should visit the Nature homepage and verify the title of the page', function () {
        expect(browser.getTitle()).toEqual(homepage.title);
    });

    it('should have a search Icon, e-alert icon, submit icon and a login button present on the homepage', function(){
        expect(homepage.searchIcon.isPresent()).toBe(true);
        expect(homepage.ealertIcon.isPresent()).toBe(true);
        expect(homepage.submitIcon.isPresent()).toBe(true);
        expect(homepage.loginButton.isPresent()).toBe(true);
    })
});