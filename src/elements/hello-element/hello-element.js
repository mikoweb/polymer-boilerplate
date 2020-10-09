import AbstractElement from "../AbstractElement";
import template from './template.js';

class HelloElement extends AbstractElement {
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
