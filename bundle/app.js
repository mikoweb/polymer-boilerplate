(function (Mn,_,$) {
'use strict';

Mn = Mn && Mn.hasOwnProperty('default') ? Mn['default'] : Mn;
_ = _ && _.hasOwnProperty('default') ? _['default'] : _;
$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

/**
 * Make read-only properties.
 *
 * @param {Object} object
 */
var namespace = function namespace(object) {
    Object.keys(object).forEach(function (key) {
        var prop = object[key];
        var descriptor = Object.getOwnPropertyDescriptor(object, key);

        Object.defineProperty(object, key, {
            enumerable: true,
            configurable: false,
            writable: false,
            value: descriptor.value
        });

        if (prop !== null && (typeof prop === 'undefined' ? 'undefined' : babelHelpers.typeof(prop)) === 'object' && prop.constructor === Object) {
            namespace(prop);
        }
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
            var id = e.target.getAttribute('data-drawer-id');

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

var PageProgress = function (_Mn$View) {
    babelHelpers.inherits(PageProgress, _Mn$View);

    function PageProgress() {
        babelHelpers.classCallCheck(this, PageProgress);
        return babelHelpers.possibleConstructorReturn(this, (PageProgress.__proto__ || Object.getPrototypeOf(PageProgress)).apply(this, arguments));
    }

    babelHelpers.createClass(PageProgress, [{
        key: 'initialize',
        value: function initialize() {
            var _this2 = this;

            this._reset();

            $(document).ready(function () {
                _this2._docReady = true;
                _this2._loadUpdate();
            });

            WCReady(function () {
                _this2._wcReady = true;
                _this2._loadUpdate();
            });

            window.addEventListener('beforeunload', function () {
                _this2._reset();
                _this2.$el.addClass('active');
                _this2.$el.attr('value', '5');
            });
        }
    }, {
        key: 'template',
        value: function template() {
            return _.noop;
        }
    }, {
        key: 'el',
        value: function el() {
            return '#page-progress';
        }
    }, {
        key: 'onRender',
        value: function onRender() {
            this.$el.addClass('active');
        }
    }, {
        key: '_reset',
        value: function _reset() {
            this._loaded = false;
            this._docReady = false;
            this._wcReady = false;
            this.$el.attr('value', '0');
        }
    }, {
        key: '_loadUpdate',
        value: function _loadUpdate() {
            var _this3 = this;

            if (this._docReady && this._wcReady) {
                this.$el.attr('value', '100');
                setTimeout(function () {
                    _this3.$el.removeClass('active');
                }, 500);
                this._loaded = true;
            } else if (this._docReady || this._wcReady) {
                this.$el.attr('value', '40');
            } else {
                this.$el.attr('value', '0');
            }
        }
    }]);
    return PageProgress;
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
                new PageProgress().render();
            });
        }
    }]);
    return Html;
}(Mn.View);

window.App = {};

namespace(window.App);

new Html().render();

}(Mn,_,$));
//# sourceMappingURL=app.js.map
