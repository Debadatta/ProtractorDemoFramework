var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var fs = require('file-system');
exports.config = {
    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['global.js', 'specs/homePageSpec.js' ],
    multiCapabilities: [ {
        browserName: 'chrome'
    }],


    directConnect: true,
    allScriptsTimeout: 120000,
    getPageTimeout: 180000,
    maxSessions: 1,
    
    
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 120000
    },

    
    beforeLaunch:function(){
        if (fs.existsSync('./logs/ExecutionLog.log')) {
            fs.unlink('./logs/ExecutionLog.log', function(){console.log('Log file deleted.')});
        }
        log4js.configure({
            appenders: [
                { type: 'log4js-protractor-appender', category: 'protractorLog4js' },
                {
                    type: "file",
                    filename: './logs/ExecutionLog.log',
                    category: 'protractorLog4js'
                }
            ]
        });
    },

    onPrepare: function () {
        browser.getCapabilities().then(function (cap) {
            browser.browserName = cap.get('browserName');
            console.log('browserName:', browser.browserName);
        });
        // Default window size
        browser.driver.manage().window().maximize();
        // Default implicit wait
        browser.manage().timeouts().implicitlyWait(60000);
        // Angular sync for non angular apps
        browser.ignoreSynchronization = false;
        browser.logger = log4js.getLogger('protractorLog4js');
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
          })
        );        
    }
  }