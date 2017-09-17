/**
 * @param {Object} object
 * @param {string} property
 * @param value
 */
const name = (object, property, value) => {
    Object.defineProperty(object, property, {
        enumerable: true,
        configurable: false,
        writable: false,
        value
    });
};

export default name;
