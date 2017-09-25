import Mn from 'backbone.marionette';
import _ from 'underscore';
import $ from 'jquery';

export default class PageProgress extends Mn.View {
    initialize() {
        this._reset();

        $(document).ready(() => {
            this._docReady = true;
            this._loadUpdate();
        });

        WCReady(() => {
            this._wcReady = true;
            this._loadUpdate();
        });

        window.addEventListener('beforeunload', () => {
            this._reset();
            this.$el.addClass('active');
            this.$el.attr('value', '5');
        });
    }
    template() {
        return _.noop;
    }
    el() {
        return '#page-progress';
    }
    onRender() {
        this.$el.addClass('active');
    }
    _reset() {
        this._loaded = false;
        this._docReady = false;
        this._wcReady = false;
        this.$el.attr('value', '0');
    }
    _loadUpdate() {
        if (this._docReady && this._wcReady) {
            this.$el.attr('value', '100');
            setTimeout(() => {
                this.$el.removeClass('active');
            }, 500);
            this._loaded = true;
        } else if (this._docReady || this._wcReady) {
            this.$el.attr('value', '40');
        } else {
            this.$el.attr('value', '0');
        }
    }
}
