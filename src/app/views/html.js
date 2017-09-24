import Mn from 'backbone.marionette';
import _ from 'underscore';
import DrawerToggle from './drawer-toggle';

export default class Html extends Mn.View {
    tagName() {
        return 'html';
    }
    template() {
        return _.noop;
    }
    onRender() {
        WCReady(() => {
            $('[wc-hidden], [wc-lazy]').addClass('ready');
            new DrawerToggle().render();
        });
    }
}
