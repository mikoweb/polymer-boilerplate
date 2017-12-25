/**
 * Make read-only properties.
 *
 * @param {Object} object
 */
const namespace = (object) => {
    Object.keys(object).forEach((key) => {
        const prop = object[key];
        const descriptor = Object.getOwnPropertyDescriptor(object, key);

        Object.defineProperty(object, key, {
            enumerable: true,
            configurable: false,
            writable: false,
            value: descriptor.value
        });

        if (prop !== null && typeof prop === 'object' && prop.constructor === Object) {
            namespace(prop);
        }
    });
};

export default namespace;
