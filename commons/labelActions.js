const { browser } = require("protractor");

module.exports = function () {
    //verify a text in label 
    this.findText = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    return element.getText();
                });
            });
        }
    };
};