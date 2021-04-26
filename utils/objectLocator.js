module.exports = function () {

    var webElement = null;

    //find locator using provided locator type and locator value
    this.findLocator = function (locator, value) {
        var locatorType = locator[0];
        var locatorValue = locator[1];
        if (typeof locatorType !== 'undefined') {
            //if (locatorValue.includes('#REPLACE#')) {
                //locatorValue = locatorValue.replace('#REPLACE#', value);
            //}
            if (locatorType == 'id') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.id(locatorValue));
                }
            } else if (locatorType == 'name') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.name(locatorValue));
                }
            } else if (locatorType == 'xpath') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.xpath(locatorValue));
                }
            } else if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue));
                }
            } else if (locatorType == 'model') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.model(locatorValue));
                }
            } else if (locatorType == 'binding') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.binding(locatorValue));
                }
            }
        }
        return this.webElement;
    };
};