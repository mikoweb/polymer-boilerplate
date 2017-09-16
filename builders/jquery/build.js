#!/usr/bin/env node

const helper = require('../helper');
const spawn = require('cross-spawn');
const fs = require('fs-extra');
const jQueryDir = __dirname + '/../bower_components/jQuery';
const libDir = __dirname + '/../../lib/jquery';

helper.updateDependencies().on('close', () => {
    spawn('npm', ['install'], {cwd: jQueryDir, stdio: 'inherit'}).on('close', () => {
        spawn('grunt', ['custom:' + helper.getConfig().jquery],
            {cwd: jQueryDir, stdio: 'inherit'})
        .on('close', () => {
            if (fs.pathExistsSync(libDir)) {
                fs.removeSync(libDir);
            }

            fs.copySync(jQueryDir + '/dist/jquery.js', libDir + '/jquery.js');
            fs.copySync(jQueryDir + '/dist/jquery.min.js', libDir + '/jquery.min.js');
            fs.copySync(jQueryDir + '/dist/jquery.min.map', libDir + '/jquery.min.map');
        });
    });
});
