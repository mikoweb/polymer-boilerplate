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

        if (prop !== null && babelHelpers.typeof(prop) === 'object' && prop.constructor === Object) {
          namespace(prop);
        }
      });
    };

    var listeners = [];
    var ready = false;
    var elements = document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]');
    var promises = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;
        promises.push(window.customElements.whenDefined(el.localName));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    Promise.all(promises).then(function () {
      ready = true;
      listeners.forEach(function (listener) {
        return listener();
      });
      listeners = [];
      document.body.classList.add('layout-ready');
    });
    var layoutReady = (function (listener) {
      if (typeof listener === 'function') {
        if (ready) {
          listener();
        } else {
          listeners.push(listener);
        }
      }
    });

    var DrawerToggle = /*#__PURE__*/function (_ElementView) {
      babelHelpers.inherits(DrawerToggle, _ElementView);

      function DrawerToggle() {
        babelHelpers.classCallCheck(this, DrawerToggle);
        return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DrawerToggle).apply(this, arguments));
      }

      babelHelpers.createClass(DrawerToggle, [{
        key: "_onClick",

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
        key: "events",

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

    var PageProgress = /*#__PURE__*/function (_ElementView) {
      babelHelpers.inherits(PageProgress, _ElementView);

      /**
       * @param {HTMLElement} htmlElement
       */
      function PageProgress(htmlElement) {
        var _this;

        babelHelpers.classCallCheck(this, PageProgress);
        _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PageProgress).call(this, htmlElement));

        _this.root.classList.add('active');

        _this._reset();

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function () {
            _this._afterDomReady();
          });
        } else {
          _this._afterDomReady();
        }

        layoutReady(function () {
          _this._layoutReady = true;

          _this._loadUpdate();
        });
        window.addEventListener('beforeunload', function () {
          _this._reset();

          _this.root.classList.add('active');

          _this.root.value = 0;
        });
        return _this;
      }
      /**
       * @private
       */


      babelHelpers.createClass(PageProgress, [{
        key: "_reset",
        value: function _reset() {
          this._loaded = false;
          this._docReady = false;
          this._layoutReady = false;
          this.root.value = 0;
        }
        /**
         * @private
         */

      }, {
        key: "_loadUpdate",
        value: function _loadUpdate() {
          var _this2 = this;

          if (this._docReady && this._layoutReady) {
            setTimeout(function () {
              _this2.root.value = 100;
            }, 100);
            setTimeout(function () {
              _this2.root.classList.remove('active');
            }, 1000);
            this._loaded = true;
          } else if (this._docReady || this._layoutReady) {
            setTimeout(function () {
              _this2.root.value = 40;
            }, 100);
          } else {
            setTimeout(function () {
              _this2.root.value = 0;
            }, 100);
          }
        }
        /**
         * @private
         */

      }, {
        key: "_afterDomReady",
        value: function _afterDomReady() {
          this._docReady = true;

          this._loadUpdate();
        }
      }]);
      return PageProgress;
    }(ElementView);

    var initialize = function initialize() {
      layoutReady(function () {
        var progress = document.querySelector('#page-progress');

        if (progress !== null) {
          new PageProgress(progress);
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            el.classList.add('ready');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
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
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
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

    initialize();
    window.App = {};
    namespace(window.App);

}(ElementView));
//# sourceMappingURL=app.js.map
