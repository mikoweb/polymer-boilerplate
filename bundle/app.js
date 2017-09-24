(function (Mn,_) {
'use strict';

Mn = Mn && Mn.hasOwnProperty('default') ? Mn['default'] : Mn;
_ = _ && _.hasOwnProperty('default') ? _['default'] : _;

/**
 * @param {Object} object
 * @param {string} property
 * @param value
 */
var name = function name(object, property, value) {
    Object.defineProperty(object, property, {
        enumerable: true,
        configurable: false,
        writable: false,
        value: value
    });
};

var DrawerToggle = function (_Mn$View) {
    babelHelpers.inherits(DrawerToggle, _Mn$View);

    function DrawerToggle() {
        babelHelpers.classCallCheck(this, DrawerToggle);
        return babelHelpers.possibleConstructorReturn(this, (DrawerToggle.__proto__ || Object.getPrototypeOf(DrawerToggle)).apply(this, arguments));
    }

    babelHelpers.createClass(DrawerToggle, [{
        key: 'template',
        value: function template() {
            return _.noop;
        }
    }, {
        key: 'el',
        value: function el() {
            return '.drawer-toggle';
        }
    }, {
        key: 'events',
        value: function events() {
            return {
                'click': '_onClick'
            };
        }
        /**
         * @param {Event} e
         * @private
         */

    }, {
        key: '_onClick',
        value: function _onClick(e) {
            var id = this.$el.attr('data-drawer-id');

            if (_.isString(id) && id.length > 0) {
                var drawer = document.getElementById(id);

                if (drawer) {
                    drawer.toggle();
                }
            }
        }
    }]);
    return DrawerToggle;
}(Mn.View);

var Html = function (_Mn$View) {
    babelHelpers.inherits(Html, _Mn$View);

    function Html() {
        babelHelpers.classCallCheck(this, Html);
        return babelHelpers.possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
    }

    babelHelpers.createClass(Html, [{
        key: 'tagName',
        value: function tagName() {
            return 'html';
        }
    }, {
        key: 'template',
        value: function template() {
            return _.noop;
        }
    }, {
        key: 'onRender',
        value: function onRender() {
            WCReady(function () {
                $('[wc-hidden], [wc-lazy]').addClass('ready');
                new DrawerToggle().render();
            });
        }
    }]);
    return Html;
}(Mn.View);

/** @typedef {Object} window.App */
name(window, 'App', {});

new Html().render();

}(Mn,_));
//# sourceMappingURL=app.js.map
