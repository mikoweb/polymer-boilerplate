import name from './namespace';
import Html from './views/html';

/** @typedef {Object} window.App */
name(window, 'App', {});

new Html().render();
