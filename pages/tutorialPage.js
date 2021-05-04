module.exports = function () {
    var objRepo = require('../resources/objectRepository.json');
    var testData = require('../resources/testData.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var labelActions = new commons.labelActions();

    var tutorialLink =  objLocator.dynamicMenuSelector("Tutorial");
    var tutorialTopics =  objLocator.findRepeators(testData.tutorialPage.repeaterName);

   
    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(dashboardHeader);
        return this;
    };

    this.tutorialLinkPresent = function() {
        return waitActions.waitForElementIsDisplayed(tutorialLink);
    }

    this.findTutorialTopics = function () {
        return tutorialTopics;
    };

    this.getTutorialTopicName = function(element) {
        return element.element(by.className('ng-binding')).getText();
    }
};