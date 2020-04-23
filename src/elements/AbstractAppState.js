import { PolymerElement } from '@polymer/polymer/polymer-element.js';

export default class AbstractAppState extends PolymerElement {
    constructor() {
        super();
        this._observeOnceListenersCallsMap = new WeakMap();
    }

    ready() {
        super.ready();
        this.style.display = 'none';
    }

    /**
     * @param {string} property
     * @param {function} listener
     * @param {boolean} once
     */
    observeState(property, listener, once = false) {
        if (once) {
            const onceListener = ((state, registeredListener) => {
                return (value) => {
                    if (!state._observeOnceListenersCallsMap.has(registeredListener)) {
                        state._observeOnceListenersCallsMap.set(registeredListener, true);
                        registeredListener(value);
                    }
                };
            })(this, listener);

            this._createPropertyObserver(property, onceListener);
        } else {
            this._createPropertyObserver(property, listener);
        }
    }

    /**
     * @param {string} property
     * @param {function} listener
     * @param {boolean} once
     */
    whenPropertyChange(property, listener, once = false) {
        if (typeof this[property] !== 'undefined') {
            listener(this[property]);

            if (!once) {
                this.observeState(property, listener, once);
            }
        } else {
            this.observeState(property, listener, once);
        }
    }
}
