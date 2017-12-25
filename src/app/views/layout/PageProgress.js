import ElementView from 'element-view';

export default class PageProgress extends ElementView {
    /**
     * @param {HTMLElement} htmlElement
     */
    constructor(htmlElement) {
        super(htmlElement);

        this.root.classList.add('active');
        this._reset();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this._afterDomReady();
            });
        } else {
            this._afterDomReady();
        }

        WCReady(() => {
            this._wcReady = true;
            this._loadUpdate();
        });

        window.addEventListener('beforeunload', () => {
            this._reset();
            this.root.classList.add('active');
            this.root.setAttribute('value', '5');
        });
    }

    /**
     * @private
     */
    _reset() {
        this._loaded = false;
        this._docReady = false;
        this._wcReady = false;
        this.root.setAttribute('value', '0');
    }

    /**
     * @private
     */
    _loadUpdate() {
        if (this._docReady && this._wcReady) {
            this.root.setAttribute('value', '100');
            setTimeout(() => {
                this.root.classList.remove('active');
            }, 500);
            this._loaded = true;
        } else if (this._docReady || this._wcReady) {
            this.root.setAttribute('value', '40');
        } else {
            this.root.setAttribute('value', '0');
        }
    }

    /**
     * @private
     */
    _afterDomReady() {
        this._docReady = true;
        this._loadUpdate();
    }
}
