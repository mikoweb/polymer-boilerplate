let listeners = [];
let ready = false;
const elements = document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]');
const promises = [];

for (const el of elements) {
    promises.push(window.customElements.whenDefined(el.localName));
}

Promise.all(promises).then(() => {
    ready = true;
    listeners.forEach(listener => listener());
    listeners = [];
    document.body.classList.add('layout-ready');
});

export default (listener) => {
    if (typeof listener === 'function') {
        if (ready) {
            listener();
        } else {
            listeners.push(listener);
        }
    }
};
