import AbstractElement from './AbstractElement.js';

export default class AbstractFormElement extends AbstractElement {
    get formElement() {
        return this.shadowRoot.querySelector('iron-form');
    }

    disabled(disabled) {
        for (const input of this.shadowRoot.querySelectorAll('*[name], paper-button')) {
            input.disabled = disabled;
        }
    }

    disabledSubmitButton(disabled) {
        this.shadowRoot.querySelector('*[type="submit"]').disabled = disabled;
    }

    /**
     * @return {boolean}
     */
    isFormDataChanged() {
        return !!diff(this.primaryForm, this.form);
    }

    updateFormState() {
        if (this.formElement) {
            const valid = this.formElement.validate();
            this.disabledSubmitButton(!valid);

            if (valid) {
                this.disabledSubmitButton(!this.isFormDataChanged());
            }
        }
    }

    updatePrimaryData() {
        this.primaryForm = Object.assign({}, this.form);
    }

    /**
     * @protected
     */
    _onLoaded() {
        new App.FormBehavior(this.formElement);
        this.updateFormState();
    }
}
