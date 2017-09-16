const spawn = require('cross-spawn');
const fs = require('fs-extra');

class Helper {
    constructor() {
        this._config = null;
    }
    /**
     * @return {ChildProcess}
     */
    updateDependencies() {
        return spawn('bower', ['update'], {cwd: __dirname, stdio: 'inherit'});
    }
    getConfig() {
        if (this._config === null) {
            if (fs.pathExistsSync(__dirname + '/config.custom.json')) {
                this._config = require('./config.custom.json');
            } else {
                this._config = require('./config.default.json');
            }
        }

        return this._config;
    }
    /**
     * @param {string} repoPath
     * @param {string} gitURL
     * @param {string} branch
     * @return {Promise}
     */
    downloadFromRepo(repoPath, gitURL, branch) {
        return new Promise((resolve, reject) => {
            const update = () => {
                spawn('git', ['reset', '--hard', 'HEAD'], {cwd: repoPath, stdio: 'inherit'}).on('close', () => {
                    spawn('git', ['fetch'], {cwd: repoPath, stdio: 'inherit'}).on('close', () => {
                        spawn('git', ['checkout', branch], {cwd: repoPath, stdio: 'inherit'}).on('close', () => {
                            spawn('git', ['pull', 'origin', branch], {cwd: repoPath, stdio: 'inherit'}).on('close', () => {
                                resolve();
                            }).on('error', () => {
                                reject(new Error('Error during pull'));
                            });
                        }).on('error', () => {
                            reject(new Error('Error during checkout'));
                        });
                    }).on('error', () => {
                        reject(new Error('Error during fetch'));
                    });
                }).on('error', () => {
                    reject(new Error('Error git reset'));
                });
            };

            if (fs.pathExistsSync(repoPath)) {
                update();
            } else {
                spawn('git', ['clone', gitURL, repoPath],
                    {cwd: __dirname, stdio: 'inherit'})
                    .on('close', () => {
                        update();
                    })
                    .on('error', () => {
                        reject(new Error('Error during clone'));
                    });
            }
        });
    }
}

module.exports = new Helper();
