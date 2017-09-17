const fs = require('fs-extra');

const getGlobals = () => {
    if (fs.pathExistsSync(__dirname + '/../globals.custom.json')) {
        return require('../globals.custom.json');
    } else {
        return require('../globals.default.json');
    }
};

module.exports = getGlobals;
