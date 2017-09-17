const resolve = require('rollup-plugin-node-resolve');
const getGlobals = require('./global-modules');

const nodeResolve = (options = {}) => {
    const parent = resolve(options);
    const globals = getGlobals();

    return {
        name: parent.name,
        resolveId(importee, importer) {
            if (globals.hasOwnProperty(importee)) {
                return new Promise((accept) => {
                    accept();
                });
            } else {
                return parent.resolveId(importee, importer);
            }
        }
    };
};

module.exports = nodeResolve;
