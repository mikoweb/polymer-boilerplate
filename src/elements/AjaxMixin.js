import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
import '@polymer/iron-ajax/iron-ajax.js';

const AjaxMixin = dedupingMixin((superClass) => {
    /**
     * @polymer
     * @mixinClass
     */
    class Mixin extends superClass {
        /**
         * @param {string} url
         * @param {string} method
         * @param {object|null} body
         * @return {Promise}
         * @protected
         */
        _ajax(url, method='GET', body = null) {
            return new Promise((resolve, reject) => {
                const ajax = document.createElement('iron-ajax');
                ajax.url = url;
                ajax.method = method;
                ajax.body = body ? JSON.stringify(body) : null;
                ajax.handleAs = 'json';
                ajax.debounceDuration = 0;

                ajax.addEventListener('response', (event) => {
                    const request = event.detail;

                    if (request.succeeded) {
                        resolve(request);
                    } else {
                        this.errorElement.text = this.ajaxError;
                        this.errorElement.open();
                        reject();
                    }
                });

                ajax.addEventListener('error', (event) => {
                    const error = event.detail.error;

                    if (error.message !== 'Request aborted.') {
                        this.errorElement.text = this.ajaxError;
                        this.errorElement.open();
                    }

                    reject();
                });

                this._currentAjaxRequest = ajax.generateRequest();
            });
        }
    }

    return Mixin;
});

export default AjaxMixin;
