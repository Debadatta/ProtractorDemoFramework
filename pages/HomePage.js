const labelActions = require('../commons/labelActions');

module.exports = function () {
    'use strict';
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var labelActions = new commons.labelActions();

    var homePageLogo = objLocator.findLocator(objRepo.homePage.homePageLogo);
    var yourNameTextBox = objLocator.findLocator(objRepo.homePage.yourNameTextBox);
    var heading = objLocator.findLocator(objRepo.homePage.heading);
    var toDoTextBox = objLocator.findLocator(objRepo.homePage.toDoTextBox);
    var addButton = objLocator.findLocator(objRepo.homePage.addButton);
    var toDoTaskLabel = objLocator.findLocator(objRepo.homePage.checkBoxLabel);
    var learnMenu= objLocator.dynamicMenuSelector("Learn");
    var tutorialMenu= objLocator.dynamicMenuSelector("Tutorial");

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

    this.getLogo = function () {
        waitActions.waitForElementIsDisplayed(homePageLogo);
        return homePageLogo.getText();
    };

    this.enterYourName  = function( yourName ) {
        waitActions.waitForElementIsDisplayed(yourNameTextBox);
        inputBoxActions.type(yourNameTextBox, yourName);
    };

    this.getYourName = function( ) {
        waitActions.waitForElementIsDisplayed(heading);
        return heading.getText();
    };

    this.enterTodoTask = function(todoItem) {
        waitActions.waitForElementIsDisplayed(toDoTextBox);
        inputBoxActions.type(toDoTextBox, todoItem);
    };

    this.getTodoTaskLabel =  function() {
        waitActions.waitForElementIsDisplayed(toDoTaskLabel);
        return toDoTaskLabel.getText();
    };

    this.clickAddButton = function() {
        waitActions.waitForElementIsDisplayed(addButton);
        buttonActions.click(addButton);
    }

    this.openTutorialPage = function() {
        waitActions.waitForElementIsDisplayed(learnMenu);
        learnMenu.click();
        waitActions.waitForElementIsDisplayed(tutorialMenu);
        tutorialMenu.click();
    }

    
};