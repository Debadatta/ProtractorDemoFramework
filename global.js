(function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');

    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    
    global.pages = {};
    global.pages.homePage = require('./pages/HomePage.js');

    global.wait = {
        until: {
          not: {
            present: function (elementFinder, optionalTimeout) {
              return present(elementFinder, optionalTimeout, false);
            }
          },
    
          displayed: function (elementFinder, optionalTimeout) {
            return displayed(elementFinder, optionalTimeout, true);
          },
    
          present: function (elementFinder, optionalTimeout) {
            return present(elementFinder, optionalTimeout, true);
          }
        }
      };

}());
