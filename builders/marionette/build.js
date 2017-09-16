#!/usr/bin/env node

const helper = require('../helper');
const repoPath = __dirname + '/repo';
const chalk = require('chalk');
const fs = require('fs-extra');
const libDir = __dirname + '/../../lib/marionette';
const spawn = require('cross-spawn');

/**
 * @param {string} code
 * @param {string} line
 * @param {string} tip
 *
 * @return {string}
 */
const commentOutLine = (code, line, tip) => {
    return code.replace(new RegExp(line, 'g'), (match) => {
        return '// ' + tip + "\n//" + match;
    });
};

helper.downloadFromRepo(
    repoPath,
    'https://github.com/marionettejs/backbone.marionette.git',
    helper.getConfig().marionette.branch
).then(() => {
    const content = fs.readFileSync(repoPath + '/.eslintrc', 'utf8');
    const eslintrc = JSON.parse(content.replace(/(.*?),\s*(\}|])/g, "$1$2"));
    eslintrc.root = true;
    fs.outputFileSync(repoPath + '/.eslintrc', JSON.stringify(eslintrc));

    let code = fs.readFileSync(repoPath + '/src/backbone.marionette.js', 'utf8');
    code = "// DO NOT MODIFY THIS FILE BECAUSE IT WAS GENERATED AUTOMATICALLY\n\n" + code;

    helper.getConfig().marionette.commentOut.forEach((item) => {
        code = commentOutLine(code, item[0], item[1]);
    });

    fs.outputFileSync(repoPath + '/src/backbone.marionette.js', code);
    fs.outputFileSync(__dirname + '/backbone.marionette.custom.js', code);

    spawn('npm', ['install'], {cwd: repoPath, stdio: 'inherit'}).on('close', () => {
        spawn('npm', ['run', 'build'], {cwd: repoPath, stdio: 'inherit'}).on('close', () => {
            fs.copySync(repoPath + '/lib/backbone.marionette.js', libDir + '/backbone.marionette.js');
            fs.copySync(repoPath + '/lib/backbone.marionette.js.map', libDir + '/backbone.marionette.js.map');
            fs.copySync(repoPath + '/lib/backbone.marionette.min.js', libDir + '/backbone.marionette.min.js');
            fs.copySync(repoPath + '/lib/backbone.marionette.min.js.map', libDir + '/backbone.marionette.min.js.map');
        });
    });
}).catch((e) => {
    console.error(chalk.red(e.message));
});
