import ElementView from 'element-view';

export default class FormBehavior extends ElementView {
    /**
     * @inheritDoc
     */
    get events() {
        return {
            'paper-input, input': {
                keypress: this._onKeyPress,
            },
            '*[type="submit"]': {
                click: this._onButtonSubmit
            }
        };
    }

    /**
     * @param {Event} event
     * @private
     */
    _onKeyPress(event) {
        if (event.keyCode === 13) {
            this._root.submit();
        }
    }

    /**
     * @param {Event} event
     * @private
     */
    _onButtonSubmit(event) {
        const name = event.target.getAttribute('name');

        if (name && !event.target.parentElement.querySelector(`input[name="${name}"]`)) {
            const hidden = document.createElement('input');
            hidden.hidden = true;
            hidden.name = event.target.getAttribute('name');
            hidden.value = '1';
            event.target.parentElement.appendChild(hidden);
        }

        this._root.submit();
    }
}
