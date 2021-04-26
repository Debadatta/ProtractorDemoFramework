module.exports = function () {
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var labelActions = new commons.labelActions();

    var dashboardHeader =  objLocator.findLocator(objRepo.dashBoardPage.header);

    this.verifyDashboardHeader = function () {
        waitActions.waitForElementIsDisplayed(dashboardHeader);
    }

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(dashboardHeader);
        return this;
    };

    this.headerTitle = function () {
        return labelActions.findText();
    }
};