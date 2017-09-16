#!/usr/bin/env node

const helper = require('../helper');
const spawn = require('cross-spawn');
const fs = require('fs-extra');
const libDir = __dirname + '/../../lib/lodash';
const binPath = __dirname + '/../../node_modules/.bin/lodash';
const chalk = require('chalk');

if (fs.pathExistsSync(binPath)) {
    spawn(binPath, helper.getConfig().lodash, {cwd: __dirname, stdio: 'inherit'})
        .on('close', () => {
            if (fs.pathExistsSync(libDir)) {
                fs.removeSync(libDir);
            }

            fs.moveSync(__dirname + '/lodash.custom.js', libDir + '/lodash.custom.js');
            fs.moveSync(__dirname + '/lodash.custom.min.js', libDir + '/lodash.custom.min.js');
        });
} else {
    console.warn(chalk.yellow('Not found lodash-cli'));
}
