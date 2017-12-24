const Path = require('./path');
const rollup = require('rollup');
const nodeResolve = require('./node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const getGlobals = require('./global-modules');

/**
 * @param {string} inputPath
 * @param {string} distFileName
 * @param {Object} [babelOptions]
 * @param {Object} [resolveOptions]
 * @param {Object} [commonjsOptions]
 *
 * @return {Promise}
 */
module.exports = (inputPath, distFileName, babelOptions = {}, resolveOptions = {}, commonjsOptions = {}) => {
    return new Promise((resolve, reject) => {
        rollup.rollup({
            input: inputPath,
            external: Object.keys(getGlobals()),
            plugins: [
                nodeResolve(Object.assign({
                    browser: true
                }, resolveOptions)),
                commonjs(Object.assign({}, commonjsOptions)),
                babel(Object.assign({}, babelOptions))
            ],
        }).then((bundle) => {
            resolve(bundle.write({
                file: Path.bundle('/' + distFileName),
                format: 'iife',
                sourcemap: true,
                globals: getGlobals(),
            }));
        }).catch((e) => {
            reject(e);
        });
    });
};
