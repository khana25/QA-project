var helper = require('../../helper.js');
var SearchPage = function() {

    // search page elements
    this.searchFieldIcon = element(by.css(".icon.icon-center.search-btn.kill-border"));
    this.searchResultsList = element(by.css(".cleared.grid.grid-7.mq640-grid-12.mq640-last"));
}

module.exports = SearchPage;