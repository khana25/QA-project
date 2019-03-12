var HomePage = function() {

    // homepage elements
    this.title = 'Nature';
    this.searchIcon = element(by.css(".inner-banner .pin-left .icon-search-25x25-white"));
    this.ealertIcon = element(by.css(".pin-right .icon-ealert-25x25-white"));
    this.submitIcon = element(by.css(".pin-right .icon-submit-25x25-white"));
    this.loginButton = element(by.id("login-button"));

}

module.exports = HomePage;