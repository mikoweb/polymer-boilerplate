import layoutReady from '../../layoutReady';
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

        layoutReady(() => {
            this._layoutReady = true;
            this._loadUpdate();
        });

        window.addEventListener('beforeunload', () => {
            this._reset();
            this.root.classList.add('active');
            this.root.value = 0;
        });
    }

    /**
     * @private
     */
    _reset() {
        this._loaded = false;
        this._docReady = false;
        this._layoutReady = false;
        this.root.value = 0;
    }

    /**
     * @private
     */
    _loadUpdate() {
        if (this._docReady && this._layoutReady) {
            this.root.value = 100;
            setTimeout(() => {
                this.root.classList.remove('active');
            }, 500);
            this._loaded = true;
        } else if (this._docReady || this._layoutReady) {
            this.root.value = 40;
        } else {
            this.root.value = 0;
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
