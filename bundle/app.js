(function (ElementView) {
'use strict';

ElementView = ElementView && ElementView.hasOwnProperty('default') ? ElementView['default'] : ElementView;

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

var DrawerToggle = function (_ElementView) {
    babelHelpers.inherits(DrawerToggle, _ElementView);

    function DrawerToggle() {
        babelHelpers.classCallCheck(this, DrawerToggle);
        return babelHelpers.possibleConstructorReturn(this, (DrawerToggle.__proto__ || Object.getPrototypeOf(DrawerToggle)).apply(this, arguments));
    }

    babelHelpers.createClass(DrawerToggle, [{
        key: '_onClick',


        /**
         * @param {Event} event
         * @private
         */
        value: function _onClick(event) {
            var id = event.target.getAttribute('data-drawer-id');

            if (typeof id === 'string' && id.length > 0) {
                var drawer = document.getElementById(id);

                if (drawer !== null) {
                    drawer.toggle();
                }
            }
        }
    }, {
        key: 'events',

        /**
         * @inheritDoc
         */
        get: function get() {
            return {
                click: this._onClick
            };
        }
    }]);
    return DrawerToggle;
}(ElementView);

var PageProgress = function (_ElementView) {
    babelHelpers.inherits(PageProgress, _ElementView);

    /**
     * @param {HTMLElement} htmlElement
     */
    function PageProgress(htmlElement) {
        babelHelpers.classCallCheck(this, PageProgress);

        var _this = babelHelpers.possibleConstructorReturn(this, (PageProgress.__proto__ || Object.getPrototypeOf(PageProgress)).call(this, htmlElement));

        _this.root.classList.add('active');
        _this._reset();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                _this._afterDomReady();
            });
        } else {
            _this._afterDomReady();
        }

        WCReady(function () {
            _this._wcReady = true;
            _this._loadUpdate();
        });

        window.addEventListener('beforeunload', function () {
            _this._reset();
            _this.root.classList.add('active');
            _this.root.setAttribute('value', '5');
        });
        return _this;
    }

    /**
     * @private
     */


    babelHelpers.createClass(PageProgress, [{
        key: '_reset',
        value: function _reset() {
            this._loaded = false;
            this._docReady = false;
            this._wcReady = false;
            this.root.setAttribute('value', '0');
        }

        /**
         * @private
         */

    }, {
        key: '_loadUpdate',
        value: function _loadUpdate() {
            var _this2 = this;

            if (this._docReady && this._wcReady) {
                this.root.setAttribute('value', '100');
                setTimeout(function () {
                    _this2.root.classList.remove('active');
                }, 500);
                this._loaded = true;
            } else if (this._docReady || this._wcReady) {
                this.root.setAttribute('value', '40');
            } else {
                this.root.setAttribute('value', '0');
            }
        }

        /**
         * @private
         */

    }, {
        key: '_afterDomReady',
        value: function _afterDomReady() {
            this._docReady = true;
            this._loadUpdate();
        }
    }]);
    return PageProgress;
}(ElementView);

var initialize$1 = function initialize() {
    WCReady(function () {
        var progress = document.querySelector('#page-progress');

        if (progress !== null) {
            new PageProgress(progress);
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = document.querySelectorAll('*[wc-hidden], *[wc-lazy]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var el = _step.value;

                el.classList.add('ready');
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = document.querySelectorAll('.drawer-toggle')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _el = _step2.value;

                new DrawerToggle(_el);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });
};

initialize$1();

window.App = {};

namespace(window.App);

}(ElementView));
//# sourceMappingURL=app.js.map
