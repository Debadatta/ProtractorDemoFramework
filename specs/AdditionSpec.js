describe('Protractor Demo App', function() {
  var testData = require('../resources/testData.json');

  var homePage = new pages.homePage();
  
  beforeEach(function() {
    homePage.openUrl(testData.application.baseUrl);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    homePage.enterFirstNumber(1);
    homePage.enterSecondNumber(2);
    homePage.clickGoButton();

    expect(homePage.getLatestResult()).toEqual('3');
  });

  it('should add four and six', function() {

    homePage.enterFirstNumber(4);
    homePage.enterSecondNumber(6);
    homePage.clickGoButton();    

    expect(homePage.getLatestResult()).toEqual('10');
  });

  it('should read the value from an input', function() {
    homePage.enterFirstNumber( 1 );
    expect(homePage.verifyFirstNumber( 1)).toBe(true);
  });
});