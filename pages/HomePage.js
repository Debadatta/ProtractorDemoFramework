const labelActions = require('../commons/labelActions');

module.exports = function () {
    'use strict';
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var firstTextbox = objLocator.findLocator(objRepo.homePage.firstTextbox);
    var secondTextbox = objLocator.findLocator(objRepo.homePage.secondTextbox);
    var operatorDropdown = objLocator.findLocator(objRepo.homePage.operatorDropdown);
    var goButton = objLocator.findLocator(objRepo.homePage.goButton);
    var calculatorPage = objLocator.findLocator(objRepo.homePage.pageHeader);
    var latestResult = objLocator.findLocator(objRepo.homePage.latestResult);

    this.openUrl = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(calculatorPage);
        return this;
    };

    this.enterFirstNumber  = function( firstNumber ) {
        waitActions.waitForElementIsDisplayed(firstTextbox);
        inputBoxActions.type(firstTextbox, firstNumber);
    }

    this.enterSecondNumber = function( secondNumber ) {
        waitActions.waitForElementIsDisplayed(secondTextbox);
        inputBoxActions.type(secondTextbox, secondNumber);
    }

    this.clickGoButton = function () {
        waitActions.waitForElementIsDisplayed(goButton);
        buttonActions.click(goButton);
    }

    this.getLatestResult = function () {
        waitActions.waitForElementIsDisplayed(latestResult);
        labelActions.findText(latestResult);
    }

    this.verifyFirstNumber = function (value) {
        inputBoxActions.verifyValue(firstTextbox, value);
    }
};