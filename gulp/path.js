/**
 * Static methods that returns project paths.
 */
class Path {
    static bundle(path = '') {
        return `./bundle${path}`;
    }
    static lib(path = '') {
        return `./lib${path}`;
    }
    static nodeModules(path = '') {
        return `./node_modules${path}`;
    }
    static style(path = '') {
        return `./style${path}`;
    }
}

module.exports = Path;
