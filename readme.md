Setup
-----
Install [Java from here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
Install [Node.js](http://nodejs.org/)

You can use npm to install Protractor globally with:
```
npm install -g protractor
```

...or after cloning inside project folder execute: (that will install all dependencies from package.json)
```
npm i
```

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```
webdriver-manager update
webdriver-manager start
```
Running Tests
-------------
Tests need to be run from the project directory inside the udemy-protractor:
```
cd QA-project
```
Run Selenium in one tab via:
```
webdriver-manager start
```
You can run without the above command as I have already defined in my config.js file whihc run the tests without starting the selenium server :

```
directConnect: true
```

Once the Selenium server is running, run this command in another tab:
```
protractor config.js
```

It is possible to run tests by test suites/groups separately:

```
protractor config.js --suite home
protractor config.js --suite changeSize
protractor config.js --suite changeColour
```