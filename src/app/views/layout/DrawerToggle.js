import ElementView from 'element-view';

export default class DrawerToggle extends ElementView {
    /**
     * @inheritDoc
     */
    get events() {
        return {
            click: this._onClick,
        }
    }

    /**
     * @param {Event} event
     * @private
     */
    _onClick(event) {
        const id = event.target.getAttribute('data-drawer-id');

        if (typeof id === 'string' && id.length > 0) {
            const drawer = document.getElementById(id);

            if (drawer !== null) {
                drawer.toggle();
            }
        }
    }
}
