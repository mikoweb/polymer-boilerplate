/**
 * Static methods that returns project paths.
 */
class Path {
    static bundle(path = '') {
        return './bundle'.concat(path);
    }
    static lib(path = '') {
        return './lib'.concat(path);
    }
    static nodeModules(path = '') {
        return './node_modules'.concat(path);
    }
    static bowerComponents(path = '') {
        return './bower_components'.concat(path);
    }
}

module.exports = Path;
