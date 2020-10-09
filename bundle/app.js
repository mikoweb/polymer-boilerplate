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

    function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

    var listeners = [];
    var ready = false;
    var elements = document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]');
    var promises = [];

    var _iterator = _createForOfIteratorHelper(elements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;
        promises.push(window.customElements.whenDefined(el.localName));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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

    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

    var DrawerToggle = /*#__PURE__*/function (_ElementView) {
      babelHelpers.inherits(DrawerToggle, _ElementView);

      var _super = _createSuper(DrawerToggle);

      function DrawerToggle() {
        babelHelpers.classCallCheck(this, DrawerToggle);
        return _super.apply(this, arguments);
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

    function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

    function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

    var PageProgress = /*#__PURE__*/function (_ElementView) {
      babelHelpers.inherits(PageProgress, _ElementView);

      var _super = _createSuper$1(PageProgress);

      /**
       * @param {HTMLElement} htmlElement
       */
      function PageProgress(htmlElement) {
        var _this;

        babelHelpers.classCallCheck(this, PageProgress);
        _this = _super.call(this, htmlElement);

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

    function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

    function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

    var FormBehavior = /*#__PURE__*/function (_ElementView) {
      babelHelpers.inherits(FormBehavior, _ElementView);

      var _super = _createSuper$2(FormBehavior);

      function FormBehavior() {
        babelHelpers.classCallCheck(this, FormBehavior);
        return _super.apply(this, arguments);
      }

      babelHelpers.createClass(FormBehavior, [{
        key: "_onKeyPress",

        /**
         * @param {Event} event
         * @private
         */
        value: function _onKeyPress(event) {
          if (event.keyCode === 13) {
            this._root.submit();
          }
        }
        /**
         * @param {Event} event
         * @private
         */

      }, {
        key: "_onButtonSubmit",
        value: function _onButtonSubmit(event) {
          var name = event.target.getAttribute('name');

          if (name && !event.target.parentElement.querySelector("input[name=\"".concat(name, "\"]"))) {
            var hidden = document.createElement('input');
            hidden.hidden = true;
            hidden.name = event.target.getAttribute('name');
            hidden.value = '1';
            event.target.parentElement.appendChild(hidden);
          }

          this._root.submit();
        }
      }, {
        key: "events",

        /**
         * @inheritDoc
         */
        get: function get() {
          return {
            'paper-input, input': {
              keypress: this._onKeyPress
            },
            '*[type="submit"]': {
              click: this._onButtonSubmit
            }
          };
        }
      }]);
      return FormBehavior;
    }(ElementView);

    function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

    function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

    function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

    var initialize = function initialize() {
      layoutReady(function () {
        var progress = document.querySelector('#page-progress');

        if (progress !== null) {
          new PageProgress(progress);
        }

        var _iterator = _createForOfIteratorHelper$1(document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]')),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var el = _step.value;
            el.classList.add('ready');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper$1(document.querySelectorAll('.drawer-toggle')),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _el = _step2.value;
            new DrawerToggle(_el);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var _iterator3 = _createForOfIteratorHelper$1(document.querySelectorAll('.form-behavior')),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _el2 = _step3.value;
            new FormBehavior(_el2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
    };

    initialize();
    window.App = {
      FormBehavior: FormBehavior
    };
    namespace(window.App);

}(ElementView));
//# sourceMappingURL=app.js.map
