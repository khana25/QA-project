var helper = require('../../helper');
var HomePage = require('../home/home.po.js');
SearchPage = require('./search.po.js');

describe('Nature homepage', function() {

    var homepage = new HomePage();
    var searchPage = new SearchPage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
        homepage.searchIcon.click();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should search for a keyword and verify the results against that keyword search', function(){
        //searchPage.toSearch();
        var searchElement = browser.driver.findElement(by.id('search-menu'));
        var searchField = searchElement.findElement(by.css(".menu-inner input[type='search']"));
        searchField.sendKeys('Nature');
        searchPage.searchFieldIcon.click();
        expect(searchPage.searchResultsList.isPresent()).toBe(true);
    })
});