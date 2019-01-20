import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import template from './template.js';

class HelloElement extends PolymerElement {
    static get properties() {
        return {
            userName: {
                type: String,
                reflectToAttribute: true
            }
        };
    }

    static get template() {
        return template;
    }
}

window.customElements.define('hello-element', HelloElement);
