(function (ElementView) {
  'use strict';

  ElementView = ElementView && ElementView.hasOwnProperty('default') ? ElementView['default'] : ElementView;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

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

      if (prop !== null && _typeof(prop) === 'object' && prop.constructor === Object) {
        namespace(prop);
      }
    });
  };

  var DrawerToggle =
  /*#__PURE__*/
  function (_ElementView) {
    _inherits(DrawerToggle, _ElementView);

    function DrawerToggle() {
      _classCallCheck(this, DrawerToggle);

      return _possibleConstructorReturn(this, _getPrototypeOf(DrawerToggle).apply(this, arguments));
    }

    _createClass(DrawerToggle, [{
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

  var PageProgress =
  /*#__PURE__*/
  function (_ElementView) {
    _inherits(PageProgress, _ElementView);

    /**
     * @param {HTMLElement} htmlElement
     */
    function PageProgress(htmlElement) {
      var _this;

      _classCallCheck(this, PageProgress);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PageProgress).call(this, htmlElement));

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


    _createClass(PageProgress, [{
      key: "_reset",
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
      key: "_loadUpdate",
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
      key: "_afterDomReady",
      value: function _afterDomReady() {
        this._docReady = true;

        this._loadUpdate();
      }
    }]);

    return PageProgress;
  }(ElementView);

  var initialize = function initialize() {
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
