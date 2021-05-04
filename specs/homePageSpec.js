const { browser } = require('protractor');
var logger = require("log4js-protractor-appender");

describe('Protractor Demo App', function() {
  var testData = require('../resources/testData.json');
  var testDataProvider = require('../resources/testDataProvider.json');
  var using = require('jasmine-data-provider');

  var homePage = new pages.homePage();
  var tutorialPage = new pages.tutorialPage();
  
  beforeEach(function() {
    browser.logger.info("Execution Started..");
    homePage.openUrl(testData.application.baseUrl);
    browser.logger.info("Browser opened..");
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual(testData.application.title);
  });

  it('should have logo AngularJS', function() {
    expect(homePage.getLogo()).toContain("AngularJS");
  });

  using(testDataProvider.names,  function (name) {
    it('should display your name while writing in textbox', function() {
      browser.logger.info("Name to be typed:"+ name.name);
      homePage.enterYourName(name.name);
      expect(homePage.getYourName()).toContain(name.name);
    });
  });

  it('should add todo list', function() {
    homePage.enterTodoTask( "Build a Protractor APP" );
    homePage.clickAddButton();
    expect(homePage.getTodoTaskLabel()).toContain( "Build a Protractor APP" );
  });


  it('should open tutorial page successfully', function() {
    homePage.openTutorialPage();
    browser.logger.info("Tutorial Page Opened..");
    expect(browser.getTitle()).toContain( testData.tutorialPage.title);
    expect(tutorialPage.tutorialLinkPresent).toBeTruthy();
    tutorialPage.findTutorialTopics().then(function(tutorials) {
      var tutorialHeading = tutorialPage.getTutorialTopicName(tutorials[0]);
      var tutorial1 = tutorialPage.getTutorialTopicName(tutorials[1]);
      var tutorial2 = tutorialPage.getTutorialTopicName(tutorials[2]);
      var tutorial3 = tutorialPage.getTutorialTopicName(tutorials[3]);
      
      expect(tutorialHeading).toEqual(testData.tutorialPage.topicHeading);
      expect(tutorial1).toContain(testData.tutorialPage.topic1);
      expect(tutorial2).toContain(testData.tutorialPage.topic2);
      expect(tutorial3).toContain(testData.tutorialPage.topic3);
   });
  });

});