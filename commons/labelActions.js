module.exports = function () {
    //verify a text in label 
    this.findText = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') {
                        labelText = element.getText();
                    }
                    return labelText;
                });
            });
        }
    };
};