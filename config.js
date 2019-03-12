// config.js
exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./pages/*/*.spec.js'],

    params: {
        url: 'https://www.nature.com/'
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'report',
            filePrefix: 'xmloutput'
        }));
    },
    suites: {
        home: 'pages/home/**/*.spec.js',
        search: 'pages/search/**/*.spec.js'
    },

        browserName: 'chrome',
        directConnect: true
}