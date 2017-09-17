const Path = require('./path');
const rollup = require('rollup');
const nodeResolve = require('./node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const globalModules = require('global-modules');

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
            plugins: [
                nodeResolve(resolveOptions),
                commonjs(commonjsOptions),
                babel(babelOptions),
            ],
        }).then((bundle) => {
            resolve(bundle.write({
                file: Path.bundle('/' + distFileName),
                format: 'iife',
                sourcemap: true,
                globals: globalModules,
            }));
        }).catch((e) => {
            reject(e);
        });
    });
};
