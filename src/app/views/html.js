import Mn from 'backbone.marionette';
import _ from 'underscore';
import DrawerToggle from './drawer-toggle';
import PageProgress from './page-progress';
import $ from 'jquery';

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
            new PageProgress().render();
        });
    }
}
