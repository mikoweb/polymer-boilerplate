(function () {
'use strict';

/**
 * @param {Object} object
 * @param {string} property
 * @param value
 */
var name = function name(object, property, value) {
    Object.defineProperty(object, property, {
        enumerable: true,
        configurable: false,
        writable: false,
        value: value
    });
};

/** @typedef {Object} window.App */
name(window, 'App', {});

}());
//# sourceMappingURL=app.js.map
