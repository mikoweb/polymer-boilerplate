import { PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class AbstractAppState extends PolymerElement {
    ready() {
        super.ready();
        this.style.display = 'none';
    }

    /**
     * @param {string} property
     * @param {function} listener
     */
    observeState(property, listener) {
        this._createPropertyObserver(property, listener);
    }

    /**
     * @param {string} property
     * @param {function} listener
     */
    whenPropertyInit(property, listener) {
        if (typeof this[property] !== 'undefined') {
            listener(this[property]);
        }

        this.observeState(property, listener);
    }
}
