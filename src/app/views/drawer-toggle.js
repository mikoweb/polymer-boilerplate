import Mn from 'backbone.marionette';
import _ from 'underscore';

export default class DrawerToggle extends Mn.View {
    template() {
        return _.noop;
    }
    el() {
        return '.drawer-toggle';
    }
    events() {
        return {
            'click': '_onClick',
        }
    }
    /**
     * @param {Event} e
     * @private
     */
    _onClick(e) {
        const id = this.$el.attr('data-drawer-id');

        if (_.isString(id) && id.length > 0) {
            const drawer = document.getElementById(id);

            if (drawer) {
                drawer.toggle();
            }
        }
    }
}
