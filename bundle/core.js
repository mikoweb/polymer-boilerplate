(function (global) {
  var babelHelpers = global.babelHelpers = {};

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      babelHelpers.typeof = _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      babelHelpers.typeof = _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  babelHelpers.typeof = _typeof;
  var REACT_ELEMENT_TYPE;

  function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {
        children: void 0
      };
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  }

  babelHelpers.jsx = _createRawReactElement;

  function _asyncIterator(iterable) {
    var method;

    if (typeof Symbol === "function") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator];
        if (method != null) return method.call(iterable);
      }

      if (Symbol.iterator) {
        method = iterable[Symbol.iterator];
        if (method != null) return method.call(iterable);
      }
    }

    throw new TypeError("Object is not async iterable");
  }

  babelHelpers.asyncIterator = _asyncIterator;

  function _AwaitValue(value) {
    this.wrapped = value;
  }

  babelHelpers.AwaitValue = _AwaitValue;

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;
        var wrappedAwait = value instanceof babelHelpers.AwaitValue;
        Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
          if (wrappedAwait) {
            resume("next", arg);
            return;
          }

          settle(result.done ? "return" : "normal", arg);
        }, function (err) {
          resume("throw", err);
        });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  babelHelpers.AsyncGenerator = AsyncGenerator;

  function _wrapAsyncGenerator(fn) {
    return function () {
      return new babelHelpers.AsyncGenerator(fn.apply(this, arguments));
    };
  }

  babelHelpers.wrapAsyncGenerator = _wrapAsyncGenerator;

  function _awaitAsyncGenerator(value) {
    return new babelHelpers.AwaitValue(value);
  }

  babelHelpers.awaitAsyncGenerator = _awaitAsyncGenerator;

  function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {},
        waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }

    ;

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () {
        return this;
      };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }

        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }

    return iter;
  }

  babelHelpers.asyncGeneratorDelegate = _asyncGeneratorDelegate;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  babelHelpers.asyncToGenerator = _asyncToGenerator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  babelHelpers.classCallCheck = _classCallCheck;

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

  babelHelpers.createClass = _createClass;

  function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);

      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }

    return obj;
  }

  babelHelpers.defineEnumerableProperties = _defineEnumerableProperties;

  function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  }

  babelHelpers.defaults = _defaults;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  babelHelpers.defineProperty = _defineProperty;

  function _extends() {
    babelHelpers.extends = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  babelHelpers.extends = _extends;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        babelHelpers.defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  babelHelpers.objectSpread = _objectSpread;

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
    if (superClass) babelHelpers.setPrototypeOf(subClass, superClass);
  }

  babelHelpers.inherits = _inherits;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  babelHelpers.inheritsLoose = _inheritsLoose;

  function _getPrototypeOf(o) {
    babelHelpers.getPrototypeOf = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  babelHelpers.getPrototypeOf = _getPrototypeOf;

  function _setPrototypeOf(o, p) {
    babelHelpers.setPrototypeOf = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  babelHelpers.setPrototypeOf = _setPrototypeOf;

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      babelHelpers.construct = _construct = Reflect.construct;
    } else {
      babelHelpers.construct = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) babelHelpers.setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  babelHelpers.construct = _construct;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  babelHelpers.isNativeFunction = _isNativeFunction;

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    babelHelpers.wrapNativeSuper = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !babelHelpers.isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return babelHelpers.construct(Class, arguments, babelHelpers.getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return babelHelpers.setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  babelHelpers.wrapNativeSuper = _wrapNativeSuper;

  function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }

  babelHelpers.instanceof = _instanceof;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  babelHelpers.interopRequireDefault = _interopRequireDefault;

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  babelHelpers.interopRequireWildcard = _interopRequireWildcard;

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  babelHelpers.newArrowCheck = _newArrowCheck;

  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }

  babelHelpers.objectDestructuringEmpty = _objectDestructuringEmpty;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  babelHelpers.objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = babelHelpers.objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  babelHelpers.objectWithoutProperties = _objectWithoutProperties;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  babelHelpers.assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return babelHelpers.assertThisInitialized(self);
  }

  babelHelpers.possibleConstructorReturn = _possibleConstructorReturn;

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = babelHelpers.getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  babelHelpers.superPropBase = _superPropBase;

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      babelHelpers.get = _get = Reflect.get;
    } else {
      babelHelpers.get = _get = function _get(target, property, receiver) {
        var base = babelHelpers.superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  babelHelpers.get = _get;

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = babelHelpers.superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          babelHelpers.defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  babelHelpers.set = _set;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  babelHelpers.taggedTemplateLiteral = _taggedTemplateLiteral;

  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
  }

  babelHelpers.taggedTemplateLiteralLoose = _taggedTemplateLiteralLoose;

  function _temporalRef(val, name) {
    if (val === babelHelpers.temporalUndefined) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  }

  babelHelpers.temporalRef = _temporalRef;

  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }

  babelHelpers.readOnlyError = _readOnlyError;

  function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
  }

  babelHelpers.classNameTDZError = _classNameTDZError;
  babelHelpers.temporalUndefined = {};

  function _slicedToArray(arr, i) {
    return babelHelpers.arrayWithHoles(arr) || babelHelpers.iterableToArrayLimit(arr, i) || babelHelpers.nonIterableRest();
  }

  babelHelpers.slicedToArray = _slicedToArray;

  function _slicedToArrayLoose(arr, i) {
    return babelHelpers.arrayWithHoles(arr) || babelHelpers.iterableToArrayLimitLoose(arr, i) || babelHelpers.nonIterableRest();
  }

  babelHelpers.slicedToArrayLoose = _slicedToArrayLoose;

  function _toArray(arr) {
    return babelHelpers.arrayWithHoles(arr) || babelHelpers.iterableToArray(arr) || babelHelpers.nonIterableRest();
  }

  babelHelpers.toArray = _toArray;

  function _toConsumableArray(arr) {
    return babelHelpers.arrayWithoutHoles(arr) || babelHelpers.iterableToArray(arr) || babelHelpers.nonIterableSpread();
  }

  babelHelpers.toConsumableArray = _toConsumableArray;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  babelHelpers.arrayWithoutHoles = _arrayWithoutHoles;

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  babelHelpers.arrayWithHoles = _arrayWithHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  babelHelpers.iterableToArray = _iterableToArray;

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  babelHelpers.iterableToArrayLimit = _iterableToArrayLimit;

  function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  }

  babelHelpers.iterableToArrayLimitLoose = _iterableToArrayLimitLoose;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  babelHelpers.nonIterableSpread = _nonIterableSpread;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  babelHelpers.nonIterableRest = _nonIterableRest;

  function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    };
  }

  babelHelpers.skipFirstGeneratorNext = _skipFirstGeneratorNext;

  function _toPropertyKey(key) {
    if (typeof key === "symbol") {
      return key;
    } else {
      return String(key);
    }
  }

  babelHelpers.toPropertyKey = _toPropertyKey;

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.');
  }

  babelHelpers.initializerWarningHelper = _initializerWarningHelper;

  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  babelHelpers.initializerDefineProperty = _initializerDefineProperty;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  babelHelpers.applyDecoratedDescriptor = _applyDecoratedDescriptor;
  var id = 0;

  function _classPrivateFieldKey(name) {
    return "__private_" + id++ + "_" + name;
  }

  babelHelpers.classPrivateFieldLooseKey = _classPrivateFieldKey;

  function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
  }

  babelHelpers.classPrivateFieldLooseBase = _classPrivateFieldBase;

  function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return privateMap.get(receiver).value;
  }

  babelHelpers.classPrivateFieldGet = _classPrivateFieldGet;

  function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }

    var descriptor = privateMap.get(receiver);

    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
    return value;
  }

  babelHelpers.classPrivateFieldSet = _classPrivateFieldSet;

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }

    return descriptor.value;
  }

  babelHelpers.classStaticPrivateFieldSpecGet = _classStaticPrivateFieldSpecGet;

  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }

    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
    return value;
  }

  babelHelpers.classStaticPrivateFieldSpecSet = _classStaticPrivateFieldSpecSet;

  function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
      _initializeInstanceElements(O, decorated.elements);
    }, superClass);

    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);

    _initializeClassElements(r.F, decorated.elements);

    return _runClassFinishers(r.F, decorated.finishers);
  }

  function _createElementDescriptor(def) {
    var descriptor;

    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "get") {
      descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "set") {
      descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "field") {
      descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
      };
    }

    var element = {
      kind: def.kind === "field" ? "field" : "method",
      key: def.key,
      placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
      descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
  }

  function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  function _coalesceClassElements(elements) {
    var newElements = [];

    var isSameElement = function (other) {
      return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var other;

      if (element.kind === "method" && (other = newElements.find(isSameElement))) {
        if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
          }

          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
            }

            other.decorators = element.decorators;
          }

          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
  }

  function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    ["method", "field"].forEach(function (kind) {
      elements.forEach(function (element) {
        var placement = element.placement;

        if (element.kind === kind && (placement === "static" || placement === "prototype")) {
          var receiver = placement === "static" ? F : proto;

          _defineClassElement(receiver, element);
        }
      });
    });
  }

  function _initializeInstanceElements(O, elements) {
    ["method", "field"].forEach(function (kind) {
      elements.forEach(function (element) {
        if (element.kind === kind && element.placement === "own") {
          _defineClassElement(O, element);
        }
      });
    });
  }

  function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;

    if (element.kind === "field") {
      var initializer = element.initializer;
      descriptor = {
        enumerable: descriptor.enumerable,
        writable: descriptor.writable,
        configurable: descriptor.configurable,
        value: initializer === void 0 ? void 0 : initializer.call(receiver)
      };
    }

    Object.defineProperty(receiver, element.key, descriptor);
  }

  function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
      static: [],
      prototype: [],
      own: []
    };
    elements.forEach(function (element) {
      _addElementPlacement(element, placements);
    });
    elements.forEach(function (element) {
      if (!_hasDecorators(element)) return newElements.push(element);

      var elementFinishersExtras = _decorateElement(element, placements);

      newElements.push(elementFinishersExtras.element);
      newElements.push.apply(newElements, elementFinishersExtras.extras);
      finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });

    if (!decorators) {
      return {
        elements: newElements,
        finishers: finishers
      };
    }

    var result = _decorateConstructor(newElements, decorators);

    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
  }

  function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];

    if (!silent && keys.indexOf(element.key) !== -1) {
      throw new TypeError("Duplicated element (" + element.key + ")");
    }

    keys.push(element.key);
  }

  function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];

    for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
      var keys = placements[element.placement];
      keys.splice(keys.indexOf(element.key), 1);

      var elementObject = _fromElementDescriptor(element);

      var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);

      element = elementFinisherExtras.element;

      _addElementPlacement(element, placements);

      if (elementFinisherExtras.finisher) {
        finishers.push(elementFinisherExtras.finisher);
      }

      var newExtras = elementFinisherExtras.extras;

      if (newExtras) {
        for (var j = 0; j < newExtras.length; j++) {
          _addElementPlacement(newExtras[j], placements);
        }

        extras.push.apply(extras, newExtras);
      }
    }

    return {
      element: element,
      finishers: finishers,
      extras: extras
    };
  }

  function _decorateConstructor(elements, decorators) {
    var finishers = [];

    for (var i = decorators.length - 1; i >= 0; i--) {
      var obj = _fromClassDescriptor(elements);

      var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);

      if (elementsAndFinisher.finisher !== undefined) {
        finishers.push(elementsAndFinisher.finisher);
      }

      if (elementsAndFinisher.elements !== undefined) {
        elements = elementsAndFinisher.elements;

        for (var j = 0; j < elements.length - 1; j++) {
          for (var k = j + 1; k < elements.length; k++) {
            if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
              throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
          }
        }
      }
    }

    return {
      elements: elements,
      finishers: finishers
    };
  }

  function _fromElementDescriptor(element) {
    var obj = {
      kind: element.kind,
      key: element.key,
      placement: element.placement,
      descriptor: element.descriptor
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
  }

  function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return babelHelpers.toArray(elementObjects).map(function (elementObject) {
      var element = _toElementDescriptor(elementObject);

      _disallowProperty(elementObject, "finisher", "An element descriptor");

      _disallowProperty(elementObject, "extras", "An element descriptor");

      return element;
    });
  }

  function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);

    if (kind !== "method" && kind !== "field") {
      throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
    }

    var key = elementObject.key;
    if (typeof key !== "string" && typeof key !== "symbol") key = String(key);
    var placement = String(elementObject.placement);

    if (placement !== "static" && placement !== "prototype" && placement !== "own") {
      throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
    }

    var descriptor = elementObject.descriptor;

    _disallowProperty(elementObject, "elements", "An element descriptor");

    var element = {
      kind: kind,
      key: key,
      placement: placement,
      descriptor: Object.assign({}, descriptor)
    };

    if (kind !== "field") {
      _disallowProperty(elementObject, "initializer", "A method descriptor");
    } else {
      _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");

      _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");

      _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");

      element.initializer = elementObject.initializer;
    }

    return element;
  }

  function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);

    var finisher = _optionalCallableProperty(elementObject, "finisher");

    var extras = _toElementDescriptors(elementObject.extras);

    return {
      element: element,
      finisher: finisher,
      extras: extras
    };
  }

  function _fromClassDescriptor(elements) {
    var obj = {
      kind: "class",
      elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
  }

  function _toClassDescriptor(obj) {
    var kind = String(obj.kind);

    if (kind !== "class") {
      throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
    }

    _disallowProperty(obj, "key", "A class descriptor");

    _disallowProperty(obj, "placement", "A class descriptor");

    _disallowProperty(obj, "descriptor", "A class descriptor");

    _disallowProperty(obj, "initializer", "A class descriptor");

    _disallowProperty(obj, "extras", "A class descriptor");

    var finisher = _optionalCallableProperty(obj, "finisher");

    var elements = _toElementDescriptors(obj.elements);

    return {
      elements: elements,
      finisher: finisher
    };
  }

  function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) {
      throw new TypeError(objectType + " can't have a ." + name + " property.");
    }
  }

  function _optionalCallableProperty(obj, name) {
    var value = obj[name];

    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }

    return value;
  }

  function _runClassFinishers(constructor, finishers) {
    for (var i = 0; i < finishers.length; i++) {
      var newConstructor = (0, finishers[i])(constructor);

      if (newConstructor !== undefined) {
        if (typeof newConstructor !== "function") {
          throw new TypeError("Finishers must return a constructor.");
        }

        constructor = newConstructor;
      }
    }

    return constructor;
  }

  babelHelpers.decorate = _decorate;
})(typeof global === "undefined" ? self : global);

/* axios v0.17.1 | (c) 2017 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(20);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(2);
	var InterceptorManager = __webpack_require__(17);
	var dispatchRequest = __webpack_require__(18);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(7);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(8);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(8);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(9);
	var buildURL = __webpack_require__(12);
	var parseHeaders = __webpack_require__(13);
	var isURLSameOrigin = __webpack_require__(14);
	var createError = __webpack_require__(10);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(16);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(10);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(11);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(19);
	var isCancel = __webpack_require__(20);
	var defaults = __webpack_require__(6);
	var isAbsoluteURL = __webpack_require__(21);
	var combineURLs = __webpack_require__(22);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
// ObjectModel v2.6.4 - http://objectmodel.js.org
//MIT License - Sylvain Pollet-Villard
;(function (globals, factory) {
 if (typeof define === 'function' && define.amd) define(factory); // AMD
 else if (typeof exports === 'object') module.exports = factory(); // Node
 else globals['Model'] = factory(); // globals
}(this, function () {
// string constants
var
OBJECT                = "Object",
ARRAY                 = "Array",
FUNCTION              = "Function",
CONVENTION_CONSTANT   = "conventionForConstant",
CONVENTION_PRIVATE    = "conventionForPrivate",
DEFINITION            = "definition",
ASSERTIONS            = "assertions",
DESCRIPTION           = "_description",
VALIDATE              = "validate",
VALIDATOR             = "_validator",
TEST                  = "test",
EXTEND                = "extend",
ASSERT                = "assert",
EXPECTED              = "expected",
RECEIVED              = "received",
PATH                  = "path",
MESSAGE               = "message",
ERROR_STACK           = "errorStack",
ERROR_COLLECTOR       = "errorCollector",
UNSTACK               = "unstack",
PROTO                 = "prototype",
CONSTRUCTOR           = "constructor",
CONSTRUCTOR_PRIVATE   = "_constructor",
DEFAULT               = "default",
DEFAULT_TO            = "defaultTo",
DEFAULTS              = "defaults",
RETURN                = "return",
ARGS                  = "arguments",

ARRAY_MUTATOR_METHODS = ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
STACKTRACE_BLACKBOX_MATCHER = /\n.*object-model(.|\n)*object-model.*/
;
var isProxySupported = typeof Proxy === "function";
var defineProperty = Object.defineProperty;

// shim for Function.name for browsers that don't support it. IE, I'm looking at you.
if (!("name" in Function.prototype && "name" in (function x() {}))) {
	defineProperty(Function.prototype, "name", {
		get: function() {
			var results = Function.prototype.toString.call(this).match(/\s*function\s+([^\(\s]*)\s*/);
			return results && results[1];
		}
	});
}

// shim for Object.setPrototypeOf if __proto__ is supported
if(!Object.setPrototypeOf && is(Array, {__proto__:[]})){
	Object.setPrototypeOf = function (obj, proto) {
		obj.__proto__ = proto
		return obj
	}
}

function getProto(x){
	return Object.getPrototypeOf(x)
}

function is(Constructor, obj){
	return obj instanceof Constructor;
}

function has(o, prop){
	return o.hasOwnProperty(prop)
}

function isFunction(o){
	return typeof o === "function";
}

function isObject(o){
    return typeof o === "object";
}

function isPlainObject(o){
	return o && isObject(o) && getProto(o) === Object.prototype;
}

function bettertypeof(obj){
	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];
}

function cloneArray(arr){
	return Array.prototype.slice.call(arr);
}

function defaultTo(defaultVal, val){
	return val === undefined ? defaultVal : val;
}

function merge(target, src, deep, includingProto) {
	for(var key in (src || {})){
		if(includingProto || has(src, key)){
			if(deep && isPlainObject(src[key])){
				var o = {};
				merge(o, target[key], deep);
				merge(o, src[key], deep);
				target[key] = o;
			} else {
				target[key] = src[key]
			}
		}
	}
}

function define(obj, key, val, enumerable) {
	defineProperty(obj, key, {
		value: val,
		enumerable: enumerable,
		writable: true,
		configurable: true
	});
}

function setConstructor(model, constructor){
	Object.setPrototypeOf(model, constructor[PROTO]);
	define(model, CONSTRUCTOR, constructor);
}

function setConstructorProto(constructor, proto){
	constructor[PROTO] = Object.create(proto);
	constructor[PROTO][CONSTRUCTOR] = constructor;
}

function toString(obj, stack){
	stack = stack || [];
	if(stack.length > 15 || stack.indexOf(obj) >= 0){ return '...'; }
	if(obj == null){ return String(obj); }
	if(typeof obj == "string"){ return '"'+obj+'"'; }
	if(is(Model, obj)) return obj.toString(stack);
	stack = [obj].concat(stack);
	if(isFunction(obj)){
		return obj.name || obj.toString(stack);
	}
	if(is(Array, obj)){
		return '[' + obj.map(function(item) {
				return toString(item, stack);
			}).join(', ') + ']';
	}
	if(obj.toString !== Object.prototype.toString){
		return obj.toString();
	}
	if(obj && isObject(obj)){
		var indent = (new Array(stack.length)).join('\t');
		var props = Object.keys(obj);
		return '{' + props.map(function(key){
			return '\n' + indent + '\t' + key + ': ' + toString(obj[key], stack);
		}).join(',') + (props.length ? '\n' + indent : '') + '}';
	}
	return String(obj)
}
function Model(def){
	if(isPlainObject(def)) return Model[OBJECT](def);

	var model = function(obj) {
		obj = defaultTo(model[DEFAULT], obj);
		model[VALIDATE](obj);
		return obj;
	};

	initModel(model, arguments, Model);
	return model;
}

setConstructorProto(Model, Function[PROTO]);
var ModelProto = Model[PROTO];

ModelProto.toString = function(stack){
	return parseDefinition(this[DEFINITION]).map(function(d){
		return toString(d, stack);
	}).join(" or ");
};

ModelProto[ASSERTIONS] = [];

ModelProto[VALIDATE] = function(obj, errorCollector){
	this[VALIDATOR](obj, null, [], this[ERROR_STACK]);
	this[UNSTACK](errorCollector);
};

ModelProto[TEST] = function(obj){
	var model = this;
	while(!has(model, ERROR_COLLECTOR)){
		model = getProto(model)
	}

	var initialErrorCollector = model[ERROR_COLLECTOR],
	    failed;

	model[ERROR_COLLECTOR] = function(){ failed = true };
	new this(obj); // may trigger this.errorCollector
	model[ERROR_COLLECTOR] = initialErrorCollector;
	return !failed;
};

ModelProto[EXTEND] = function(){
	var def, proto,
	    parent = this,
		assertions = cloneArray(this[ASSERTIONS]),
		args = cloneArray(arguments);

	if(is(Model[OBJECT], parent)){
		def = {};
		proto = {};
		merge(def, parent[DEFINITION]);
		merge(proto, parent[PROTO], false, true);
		args.forEach(function(arg){
			if(is(Model, arg)){
				merge(def, arg[DEFINITION], true);
			}
			if(isFunction(arg)){
				merge(proto, arg[PROTO], true, true);
			}
			if(isObject(arg)) {
				merge(def, arg, true, true);
			}
		})
		delete proto.constructor;
	} else {
		def = args
			.reduce(function(def, ext){
				return def.concat(parseDefinition(ext));
			}, parseDefinition(this[DEFINITION]))
			.filter(function(value, index, self) {
				return self.indexOf(value) === index; // remove duplicates
			});
	}

	args.forEach(function(arg){
		if(is(Model, arg)){
			assertions = assertions.concat(arg[ASSERTIONS]);
		}
	});

	var submodel = new parent[CONSTRUCTOR](def);
	setConstructorProto(submodel, parent[PROTO]);
	merge(submodel[PROTO], proto);
	submodel[ASSERTIONS] = assertions;

	if(getProto(parent) !== Model[OBJECT][PROTO]) { // extended class
		submodel[CONSTRUCTOR_PRIVATE] = function(obj){
			var parentInstance = new parent(obj)
			merge(obj, parentInstance, true) // get modified props from parent class constructor
			return obj
		}
	}

	return submodel;
};

ModelProto[ASSERT] = function(assertion, description){
	description = description || toString(assertion);
	define(assertion, DESCRIPTION, description);
	this[ASSERTIONS] = this[ASSERTIONS].concat(assertion);
	return this;
};

ModelProto[DEFAULT_TO] = function(val){
	this[DEFAULT] = val;
	return this;
}

ModelProto[ERROR_COLLECTOR] = function(errors){
	var e = new TypeError(errors.map(function(e){ return e[MESSAGE]; }).join('\n'));
	if(e.stack){
		e.stack = e.stack.replace(STACKTRACE_BLACKBOX_MATCHER, "");
	}
	throw e;
};

Model[CONVENTION_CONSTANT] = function(key){ return key.toUpperCase() === key };
Model[CONVENTION_PRIVATE] = function(key){ return key[0] === "_" };

// private methods
define(ModelProto, VALIDATOR, function(obj, path, callStack, errorStack){
	checkDefinition(obj, this[DEFINITION], path, callStack, errorStack);
	checkAssertions(obj, this, path, errorStack);
});

// throw all errors collected
define(ModelProto, UNSTACK, function(errorCollector){
	if(!this[ERROR_STACK].length){
		return;
	}
	if(!errorCollector){
		errorCollector = this[ERROR_COLLECTOR];
	}
	var errors = this[ERROR_STACK].map(function(err){
		if(!err[MESSAGE]){
			var def = is(Array, err[EXPECTED]) ? err[EXPECTED] : [err[EXPECTED]];
			err[MESSAGE] = ("expecting " + (err[PATH] ? err[PATH] + " to be " : "")
			+ def.map(function(d){ return toString(d); }).join(" or ")
			+ ", got " + (err[RECEIVED] != null ? bettertypeof(err[RECEIVED]) + " " : "")
			+ toString(err[RECEIVED]))
		}
		return err;
	});
	this[ERROR_STACK] = [];
	errorCollector.call(this, errors);
})

function initModel(model, args, constructor){
	if(args.length === 0) throw new Error("Model definition is required");
	setConstructor(model, constructor);
	model[DEFINITION] = args[0];
	model[ASSERTIONS] = model[ASSERTIONS].slice(); // clone from Model.prototype
	define(model, ERROR_STACK, []);
}

function parseDefinition(def){
	if(!isPlainObject(def)){
		if(!is(Array, def)) return [def];
		if(def.length === 1) return def.concat(undefined, null);
	} else {
		Object.keys(def).forEach(function(key) {
			def[key] = parseDefinition(def[key]);
		});
	}
	return def;
}

function checkDefinition(obj, def, path, callStack, errorStack, shouldCast){
	var indexFound = callStack.indexOf(def);
	if(indexFound !== -1 && callStack.slice(indexFound+1).indexOf(def) !== -1){
		return obj; //if found twice in call stack, cycle detected, skip validation
	}

	if(shouldCast) {
		obj = cast(obj, def);
	}

	if(is(Model, def)){
		def[VALIDATOR](obj, path, callStack.concat(def), errorStack);
	}
	else if(isPlainObject(def)) {
		Object.keys(def).forEach(function (key) {
			var val = obj != null ? obj[key] : undefined;
			checkDefinition(val, def[key], path ? path + '.' + key : key, callStack, errorStack);
		});
	} else {
		var pdef = parseDefinition(def);
		for(var i=0, l=pdef.length; i<l; i++){
			if(checkDefinitionPart(obj, pdef[i], path, callStack)){
				return obj;
			}
		}
		var err = {};
		err[EXPECTED] = def;
		err[RECEIVED] = obj;
		err[PATH] = path;
		errorStack.push(err);
	}
	return obj;
}

function checkDefinitionPart(obj, def, path, callStack){
	if(obj == null){
		return obj === def;
	}
	if(isPlainObject(def) || is(Model, def)){ // object or model as part of union type
		var errorStack = [];
		checkDefinition(obj, def, path, callStack, errorStack);
		return !errorStack.length;
	}
	if(is(RegExp, def)){
		return def.test(obj);
	}
	if(def === Number || def === Date){
		return obj[CONSTRUCTOR] === def && !isNaN(obj)
	}

	return obj === def
		|| (isFunction(def) && is(def, obj))
		|| obj[CONSTRUCTOR] === def;
}

function checkAssertions(obj, model, path, errorStack){
	for(var i=0, l=model[ASSERTIONS].length; i<l ; i++){
		var assert = model[ASSERTIONS][i],
			assertionResult,
			description = assert[DESCRIPTION],
		    onFail = isFunction(description) ? description : function (assertionResult, value) {
				return 'assertion "' + description
				     + '" returned ' + toString(assertionResult)
				     + ' for value ' + toString(value);
			};
		try {
			assertionResult = assert.call(model, obj);
		} catch(err){
			assertionResult = err;
		}
		if(assertionResult !== true){
			var err = {};
			err[MESSAGE] = onFail.call(model, assertionResult, obj)
			err[EXPECTED] = assert;
			err[RECEIVED] = obj;
			err[PATH] = path;
			errorStack.push(err);
		}
	}
}

function cast(obj, defNode){
	if(!obj || is(Model, obj[CONSTRUCTOR])){
		return obj; // no value or already a model instance
	}

	var def = parseDefinition(defNode || []),
	    suitableModels = [];

	for(var i=0, l=def.length; i<l; i++){
		var defPart = def[i];
		if(is(Model, defPart) && defPart[TEST](obj)){
			suitableModels.push(defPart);
		}
	}

	var nbSuitableModels = suitableModels.length;
	if(nbSuitableModels === 1) {
		return new suitableModels[0](obj); // automatically cast to the suitable model when explicit
	}
	if(nbSuitableModels > 1){
		console.warn("Ambiguous model for value " + toString(obj)
			+ ", could be " + suitableModels.join(" or "));
	}

	return obj;
}
Model[OBJECT] = function ObjectModel(def){

	var model = function(obj) {
		if(is(model, obj)){
			return obj;
		}
		if(!is(model, this)){
			return new model(obj);
		}

		if(!is(Object, obj) && obj !== undefined){
			var err = {};
			err[EXPECTED] = OBJECT;
			err[RECEIVED] = obj;
			model[ERROR_STACK].push(err);
		}

		obj = defaultTo(model[DEFAULT], obj);
		merge(this, model[CONSTRUCTOR_PRIVATE](obj), true);
		var proxy = getProxy(model, this, model[DEFINITION]);
		model[VALIDATE](proxy);
		return proxy;
	};

	setConstructorProto(model, Object[PROTO]);
	initModel(model, arguments, Model[OBJECT]);
	return model;
};

setConstructorProto(Model[OBJECT], ModelProto);
var ObjectModelProto = Model[OBJECT][PROTO];

ObjectModelProto[DEFAULTS] = function(p){
	merge(this[PROTO], p);
	return this;
};

ObjectModelProto.toString = function(stack){
	return toString(this[DEFINITION], stack);
};

// private methods
define(ObjectModelProto, VALIDATOR, function(obj, path, callStack, errorStack){
	if(!isObject(obj)){
		var err = {};
		err[EXPECTED] = this;
		err[RECEIVED] = obj;
		err[PATH] = path;
		errorStack.push(err);
	} else {
		checkDefinition(obj, this[DEFINITION], path, callStack, errorStack);
	}
	checkAssertions(obj, this, path, errorStack);
});

define(ObjectModelProto, CONSTRUCTOR_PRIVATE, function(o){ return o });

function getProxy(model, obj, defNode, path) {
	if(!isPlainObject(defNode)) {
		return cast(obj, defNode);
	}

	var wrapper = is(Object, obj) ? obj : {};
	var proxy = Object.create(getProto(wrapper));

	for(var key in wrapper){
		if(has(wrapper, key) && !(key in defNode)){
			proxy[key] = wrapper[key]; // properties out of model definition are kept
		}
	}

	Object.keys(defNode).forEach(function(key) {
		var newPath = (path ? path + '.' + key : key);
		var isConstant = Model[CONVENTION_CONSTANT](key);
		var defPart = defNode[key];

		if(!isPlainObject(defPart) && wrapper[key] && !is(Model, wrapper[key][CONSTRUCTOR])) {
			// cast nested models immediately at parent instanciation
			wrapper[key] = cast(wrapper[key], defPart);
		}

		defineProperty(proxy, key, {
			get: function () {
				return getProxy(model, wrapper[key], defPart, newPath);
			},
			set: function (val) {
				if(isConstant && wrapper[key] !== undefined){
					var err = {};
					err[MESSAGE] = "cannot redefine constant " + key;
					model[ERROR_STACK].push(err);
				}
				var newProxy = getProxy(model, val, defPart, newPath);
				checkDefinition(newProxy, defPart, newPath, [], model[ERROR_STACK]);
				var oldValue = wrapper[key];
				wrapper[key] = newProxy;
				checkAssertions(obj, model, newPath, model[ERROR_STACK]);
				if(model[ERROR_STACK].length){
					wrapper[key] = oldValue;
					model[UNSTACK]();
				}
			},
			enumerable: !Model[CONVENTION_PRIVATE](key)
		});
	});
	return proxy;
}
Model[ARRAY] = function ArrayModel(def){

	var model = function(array) {
		array = defaultTo(model[DEFAULT], array);

		var proxy;
		model[VALIDATE](array);
		if(isProxySupported){
			proxy = new Proxy(array, {
				get: function (arr, key) {
					if(key === CONSTRUCTOR){
						return model;
					} else if(ARRAY_MUTATOR_METHODS.indexOf(key) >= 0){
						return proxifyArrayMethod(arr, key, model);
					}
					return arr[key];
				},
				set: function (arr, key, val) {
					setArrayKey(arr, key, val, model);
				},
				getPrototypeOf: function(){
					return model[PROTO];
				}
			});
		} else {
			proxy = Object.create(Array[PROTO]);
			for(var key in array){
				if(has(array, key)){
					proxifyArrayKey(proxy, array, key, model);
				}
			}
			defineProperty(proxy, "length", { get: function() { return array.length; } });
			defineProperty(proxy, "toJSON", { value: function() { return array; } });
			ARRAY_MUTATOR_METHODS.forEach(function (method) {
				define(proxy, method, proxifyArrayMethod(array, method, model, proxy));
			});
			setConstructor(proxy, model);
		}

		return proxy;
	};

	setConstructorProto(model, Array[PROTO]);
	initModel(model, arguments, Model[ARRAY]);
	return model;
};

setConstructorProto(Model[ARRAY], Model[PROTO]);
var ArrayModelProto = Model[ARRAY][PROTO];

ArrayModelProto.toString = function(stack){
	return ARRAY + ' of ' + toString(this[DEFINITION], stack);
};

// private methods
define(ArrayModelProto, VALIDATOR, function(arr, path, callStack, errorStack){
	if(!is(Array, arr)){
		var err = {};
		err[EXPECTED] = this;
		err[RECEIVED] = arr;
		err[PATH] = path;
		errorStack.push(err);
	} else {
		for(var i=0, l=arr.length; i<l; i++){
			arr[i] = checkDefinition(arr[i], this[DEFINITION], (path||ARRAY)+'['+i+']', callStack, errorStack, true);
		}
	}
	checkAssertions(arr, this, path, errorStack);
});

function proxifyArrayKey(proxy, array, key, model){
	defineProperty(proxy, key, {
		enumerable: true,
		get: function () {
			return array[key];
		},
		set: function (val) {
			setArrayKey(array, key, val, model);
		}
	});
}

function proxifyArrayMethod(array, method, model, proxy){
	return function() {
		var testArray = array.slice();
		Array[PROTO][method].apply(testArray, arguments);
		model[VALIDATE](testArray);

		if(!isProxySupported){
			for(var key in testArray){ // proxify new array keys if any after method call
				if(has(testArray, key) && !(key in proxy)){
					proxifyArrayKey(proxy, array, key, model);
				}
			}
		}

		var returnValue = Array[PROTO][method].apply(array, arguments);
		for(var i=0, l=array.length; i<l; i++) {
			array[i] = cast(array[i], model[DEFINITION]);
		}
		return returnValue;
	};
}

function setArrayKey(array, key, value, model){
	var path = ARRAY+'['+key+']';
	if(parseInt(key) === +key && key >= 0){
		value = checkDefinition(value, model[DEFINITION], path, [], model[ERROR_STACK], true);
	}
	var testArray = array.slice();
	testArray[key] = value;
	checkAssertions(testArray, model, path, model[ERROR_STACK]);
	model[UNSTACK]();
	array[key] = value;
}
Model[FUNCTION] = function FunctionModel(){

	var model = function(fn) {
		fn = defaultTo(model[DEFAULT], fn);

		var def = model[DEFINITION];
		var proxyFn = function () {
			var args = [], returnValue;
			merge(args, def[DEFAULTS]);
			merge(args, cloneArray(arguments));
			if (args.length > def[ARGS].length) {
				var err = {};
				err[EXPECTED] = toString(fn) + " to be called with " + def[ARGS].length + " "+ARGS;
				err[RECEIVED] = args.length;
				model[ERROR_STACK].push(err);
			}
			def[ARGS].forEach(function (argDef, i) {
				args[i] = checkDefinition(args[i], argDef, ARGS + '[' + i + ']', [], model[ERROR_STACK], true);
			});
			checkAssertions(args, model, ARGS, model[ERROR_STACK]); //TODO: improve path parameter

			if(!model[ERROR_STACK].length){
				returnValue = fn.apply(this, args);
				if (RETURN in def) {
					returnValue = checkDefinition(returnValue, def[RETURN], RETURN+' value', [], model[ERROR_STACK], true);
				}
			}
			model[UNSTACK]();
			return returnValue;
		};
		setConstructor(proxyFn, model);
		return proxyFn;
	};

	setConstructorProto(model, Function[PROTO]);

	var def = {};
	def[ARGS] = cloneArray(arguments);
	initModel(model, [def], Model[FUNCTION]);
	return model;
};

setConstructorProto(Model[FUNCTION], Model[PROTO]);

var FunctionModelProto = Model[FUNCTION][PROTO];

FunctionModelProto.toString = function(stack){
	var out = FUNCTION + '(' + this[DEFINITION][ARGS].map(function(argDef){
		return toString(argDef, stack);
	}).join(",") +')';
	if(RETURN in this[DEFINITION]) {
		out += " => " + toString(this[DEFINITION][RETURN]);
	}
	return out;
};

FunctionModelProto[RETURN] = function(def){
	this[DEFINITION][RETURN] = def;
	return this;
};

FunctionModelProto[DEFAULTS] = function(){
	this[DEFINITION][DEFAULTS] = cloneArray(arguments);
	return this;
};

// private methods
define(FunctionModelProto, VALIDATOR, function(f, path, callStack, errorStack){
	if(!isFunction(f)){
		var err = {};
		err[EXPECTED] = FUNCTION;
		err[RECEIVED] = f;
		err[PATH] = path;
		errorStack.push(err);
	}
});
return Model;
}));
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('objectmodel'), require('axios')) :
	typeof define === 'function' && define.amd ? define(['objectmodel', 'axios'], factory) :
	(global.modelPersist = factory(global.Model,global.axios));
}(this, (function (Model,axios) { 'use strict';

Model = Model && Model.hasOwnProperty('default') ? Model['default'] : Model;
axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
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

        if (prop !== null && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object' && prop.constructor === Object) {
            namespace(prop);
        }
    });
};

/**
 * It's shit model type like object literal. No schema, no strong typing, no validation, no nothing.
 */
var DynamicModel = function () {
    /**
     * @param {Object} object
     */
    function DynamicModel(object) {
        classCallCheck(this, DynamicModel);

        if (object === null || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
            throw new TypeError('expecting object literal');
        }

        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                this[prop] = object[prop];
            }
        }
    }

    /**
     * @return {string}
     */


    createClass(DynamicModel, [{
        key: 'toJSON',
        value: function toJSON() {
            return JSON.stringify(this);
        }
    }]);
    return DynamicModel;
}();

var Interface = function () {
    function Interface() {
        classCallCheck(this, Interface);
    }

    createClass(Interface, [{
        key: 'defineInterfaceMethod',
        value: function defineInterfaceMethod() {
            throw new Error('Class should implement this method');
        }
    }]);
    return Interface;
}();

/**
 * Data locator.
 */

var LocatorInterface = function (_Interface) {
  inherits(LocatorInterface, _Interface);

  function LocatorInterface() {
    classCallCheck(this, LocatorInterface);
    return possibleConstructorReturn(this, (LocatorInterface.__proto__ || Object.getPrototypeOf(LocatorInterface)).apply(this, arguments));
  }

  createClass(LocatorInterface, [{
    key: 'locate',

    /**
     * Locate place where model is storage.
     *
     * @param {Model} model
     * @param {Object} [options]
     * @return {string}
     */
    value: function locate(model) {
      this.defineInterfaceMethod();
    }

    /**
     * Locate place by id.
     *
     * @param id
     * @param {Object} [options]
     * @return {string}
     */

  }, {
    key: 'locateById',
    value: function locateById(id) {
      this.defineInterfaceMethod();
    }

    /**
     * Name of id property.
     *
     * @return {string}
     */

  }, {
    key: 'getIdPropName',
    value: function getIdPropName() {
      this.defineInterfaceMethod();
    }

    /**
     * Get id from model.
     *
     * @param {Model} model
     * @return {*}
     */

  }, {
    key: 'getModelId',
    value: function getModelId(model) {
      this.defineInterfaceMethod();
    }

    /**
     * Is empty model id?
     *
     * @param {Model} model
     * @return {boolean}
     */

  }, {
    key: 'isEmptyModelId',
    value: function isEmptyModelId(model) {
      this.defineInterfaceMethod();
    }

    /**
     * ModelManagerClass related to this locator.
     *
     * @return {ModelManagerInterface.prototype}
     */

  }, {
    key: 'getModelManagerClass',
    value: function getModelManagerClass() {
      this.defineInterfaceMethod();
    }

    /**
     * RepositoryClass related to this locator.
     *
     * @return {RepositoryInterface.prototype}
     */

  }, {
    key: 'getRepositoryClass',
    value: function getRepositoryClass() {
      this.defineInterfaceMethod();
    }

    /**
     * Input Transformer class related to this locator.
     *
     * @return {TransformerInterface.prototype}
     */

  }, {
    key: 'getInputTransformerClass',
    value: function getInputTransformerClass() {
      this.defineInterfaceMethod();
    }

    /**
     * Input Transformer class related to this locator.
     *
     * @return {TransformerInterface.prototype}
     */

  }, {
    key: 'getOutputTransformerClass',
    value: function getOutputTransformerClass() {
      this.defineInterfaceMethod();
    }
  }]);
  return LocatorInterface;
}(Interface);

/**
 * Data persistence layer.
 */

var ModelManagerInterface = function (_Interface) {
  inherits(ModelManagerInterface, _Interface);

  function ModelManagerInterface() {
    classCallCheck(this, ModelManagerInterface);
    return possibleConstructorReturn(this, (ModelManagerInterface.__proto__ || Object.getPrototypeOf(ModelManagerInterface)).apply(this, arguments));
  }

  createClass(ModelManagerInterface, [{
    key: 'get',

    /**
     * Get model by id from storage.
     *
     * @async
     * @param id
     * @param {Model.prototype} modelClass
     * @param {Object} [options]
     * @return {Promise.<Model>}
     */
    value: function get$$1(id, modelClass) {
      this.defineInterfaceMethod();
    }

    /**
     * Save model to storage.
     *
     * @async
     * @param {Model} model
     * @param {Object} [options]
     * @return {Promise.<Object>}
     */

  }, {
    key: 'save',
    value: function save(model) {
      this.defineInterfaceMethod();
    }

    /**
     * Remove model from storage.
     *
     * @async
     * @param {Model} model
     * @param {Object} [options]
     * @return {Promise.<Object>}
     */

  }, {
    key: 'remove',
    value: function remove(model) {
      this.defineInterfaceMethod();
    }
  }]);
  return ModelManagerInterface;
}(Interface);

/**
 * Repository pattern - data collection.
 */

var RepositoryInterface = function (_Interface) {
  inherits(RepositoryInterface, _Interface);

  function RepositoryInterface() {
    classCallCheck(this, RepositoryInterface);
    return possibleConstructorReturn(this, (RepositoryInterface.__proto__ || Object.getPrototypeOf(RepositoryInterface)).apply(this, arguments));
  }

  createClass(RepositoryInterface, [{
    key: 'findOne',

    /**
     * Find one model by id from storage.
     *
     * @async
     * @param id
     * @return {Promise.<Model>}
     */
    value: function findOne(id) {
      this.defineInterfaceMethod();
    }
  }]);
  return RepositoryInterface;
}(Interface);

/**
 * Data Transformer.
 */

var TransformerInterface = function (_Interface) {
  inherits(TransformerInterface, _Interface);

  function TransformerInterface() {
    classCallCheck(this, TransformerInterface);
    return possibleConstructorReturn(this, (TransformerInterface.__proto__ || Object.getPrototypeOf(TransformerInterface)).apply(this, arguments));
  }

  createClass(TransformerInterface, [{
    key: 'transform',

    /**
     * Transform data.
     *
     * @async
     * @param {Object} object
     * @return {Object}
     */
    value: function transform(object) {
      this.defineInterfaceMethod();
    }
  }]);
  return TransformerInterface;
}(Interface);

/**
 * Default input transformer.
 * Used as "middleware" between data source (e.g. HTTP Response) and Model constructor.
 */

var InputTransformer = function (_TransformerInterface) {
  inherits(InputTransformer, _TransformerInterface);

  function InputTransformer() {
    classCallCheck(this, InputTransformer);
    return possibleConstructorReturn(this, (InputTransformer.__proto__ || Object.getPrototypeOf(InputTransformer)).apply(this, arguments));
  }

  createClass(InputTransformer, [{
    key: 'transform',

    /**
     * By default, nothing changes.
     *
     * @inheritdoc
     */
    value: function transform(object) {
      return object;
    }
  }]);
  return InputTransformer;
}(TransformerInterface);

var ModelHelpers = function () {
    function ModelHelpers() {
        classCallCheck(this, ModelHelpers);
    }

    createClass(ModelHelpers, [{
        key: 'getData',

        /**
         * Get raw object data from model.
         *
         * @param {Model} model
         * @param {boolean} isRaw
         * @return {Object}
         */
        value: function getData(model) {
            var isRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!isRaw && !this.isModel(model)) {
                throw new TypeError('expecting model to be Model, got ' + (typeof model === 'undefined' ? 'undefined' : _typeof(model)));
            }

            var data = {};

            if (this.isModel(model)) {
                // This work's with ObjectModel 2.x version.
                // For 3.x major must be changed to Object.keys()
                for (var prop in model) {
                    if (model.hasOwnProperty(prop)) {
                        var descriptor = Object.getOwnPropertyDescriptor(model, prop);

                        if (typeof descriptor.get === 'function' && typeof model[prop] !== 'undefined') {
                            data[prop] = this._getObjectValue(model, prop);
                        }
                    }
                }
            } else if (this.isRawObject(model)) {
                for (var _prop in model) {
                    if (model.hasOwnProperty(_prop)) {
                        data[_prop] = this._getObjectValue(model, _prop);
                    }
                }
            }

            return data;
        }

        /**
         * Is model?
         *
         * @param {Object} object
         */

    }, {
        key: 'isModel',
        value: function isModel(object) {
            return object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && (object instanceof Model || typeof object.constructor === 'function' && object.constructor instanceof Model);
        }

        /**
         * Is raw model?
         *
         * @param {Object} object
         */

    }, {
        key: 'isRawObject',
        value: function isRawObject(object) {
            return object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Object;
        }

        /**
         * @param {Model|Object} model
         * @param {string} prop
         * @return {*}
         * @private
         */

    }, {
        key: '_getObjectValue',
        value: function _getObjectValue(model, prop) {
            var _this = this;

            var value = void 0;

            if (Array.isArray(model[prop])) {
                value = [];
                model[prop].forEach(function (item) {
                    value.push(_this.isRawObject(item) || _this.isModel(item) ? _this.getData(item, true) : item);
                });
            } else {
                value = model[prop];
                value = this.isRawObject(value) || this.isModel(value) ? this.getData(value, true) : value;
            }

            return value;
        }
    }]);
    return ModelHelpers;
}();

var helpers = new ModelHelpers();

/**
 * Default output transformer.
 * Used as "middleware" between Model and data storage (e.g. HTTP Request).
 */

var OutputTransformer = function (_TransformerInterface) {
    inherits(OutputTransformer, _TransformerInterface);

    function OutputTransformer() {
        classCallCheck(this, OutputTransformer);
        return possibleConstructorReturn(this, (OutputTransformer.__proto__ || Object.getPrototypeOf(OutputTransformer)).apply(this, arguments));
    }

    createClass(OutputTransformer, [{
        key: 'transform',

        /**
         * Only properties from model schema.
         *
         * @inheritdoc
         */
        value: function transform(object) {
            var data = {};

            if (helpers.isModel(object)) {
                data = helpers.getData(object);
            } else if (object instanceof DynamicModel || helpers.isRawObject(object)) {
                data = object;
            }

            return data;
        }
    }]);
    return OutputTransformer;
}(TransformerInterface);

/**
 * Abstract Locator with common methods.
 */

var LocatorAbstract = function (_LocatorInterface) {
    inherits(LocatorAbstract, _LocatorInterface);

    function LocatorAbstract() {
        classCallCheck(this, LocatorAbstract);
        return possibleConstructorReturn(this, (LocatorAbstract.__proto__ || Object.getPrototypeOf(LocatorAbstract)).apply(this, arguments));
    }

    createClass(LocatorAbstract, [{
        key: 'getIdPropName',

        /**
         * @inheritdoc
         */
        value: function getIdPropName() {
            return 'id';
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'getModelId',
        value: function getModelId(model) {
            if (model === null || (typeof model === 'undefined' ? 'undefined' : _typeof(model)) !== 'object') {
                throw new Error('argument is not Object');
            }

            return model[this.getIdPropName()];
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'isEmptyModelId',
        value: function isEmptyModelId(model) {
            var id = this.getModelId(model);

            return id === null || typeof id === 'undefined' || typeof id === 'string' && id.length === 0;
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'getInputTransformerClass',
        value: function getInputTransformerClass() {
            return InputTransformer;
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'getOutputTransformerClass',
        value: function getOutputTransformerClass() {
            return OutputTransformer;
        }
    }]);
    return LocatorAbstract;
}(LocatorInterface);

/**
 * Data persistence layer - common.
 */

var ModelManagerAbstract = function (_ModelManagerInterfac) {
  inherits(ModelManagerAbstract, _ModelManagerInterfac);

  function ModelManagerAbstract() {
    classCallCheck(this, ModelManagerAbstract);
    return possibleConstructorReturn(this, (ModelManagerAbstract.__proto__ || Object.getPrototypeOf(ModelManagerAbstract)).apply(this, arguments));
  }

  createClass(ModelManagerAbstract, [{
    key: 'createInputTransformer',

    /**
     * Create input transformer object.
     *
     * @return {TransformerInterface}
     */
    value: function createInputTransformer() {
      var Transformer = this._locator.getInputTransformerClass();

      return new Transformer();
    }

    /**
     * Create output transformer object.
     *
     * @return {TransformerInterface}
     */

  }, {
    key: 'createOutputTransformer',
    value: function createOutputTransformer() {
      var Transformer = this._locator.getOutputTransformerClass();

      return new Transformer();
    }
  }]);
  return ModelManagerAbstract;
}(ModelManagerInterface);

/**
 * Data persistence by HTTP protocol.
 */

var HTTPModelManager = function (_ModelManagerAbstract) {
    inherits(HTTPModelManager, _ModelManagerAbstract);

    /**
     * @param {HTTPLocatorAbstract} locator
     * @param {AxiosInstance} httpClient
     */
    function HTTPModelManager(locator, httpClient) {
        classCallCheck(this, HTTPModelManager);

        /** @protected */
        var _this = possibleConstructorReturn(this, (HTTPModelManager.__proto__ || Object.getPrototypeOf(HTTPModelManager)).call(this));

        _this._locator = locator;
        /** @protected */
        _this._client = httpClient;
        return _this;
    }

    /**
     * @inheritdoc
     */


    createClass(HTTPModelManager, [{
        key: 'get',
        value: function get$$1(id, modelClass) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2._client.get(_this2._locator.locateById(id), _this2._getRequestOptions()).then(function (response) {
                    resolve(new modelClass(_this2.createInputTransformer().transform(response.data)));
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'save',
        value: function save(model) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var requestOptions = _this3._getRequestOptions();

                var method = _this3._locator.isEmptyModelId(model) ? _this3._client.post : _this3._client.put;
                method(_this3._locator.locate(model), _this3.createOutputTransformer().transform(model), requestOptions).then(function (response) {
                    resolve(response.data !== null && _typeof(response.data) === 'object' ? response.data : {});
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'remove',
        value: function remove(model) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4._client.delete(_this4._locator.locate(model), _this4._getRequestOptions()).then(function (response) {
                    resolve(response.data !== null && _typeof(response.data) === 'object' ? response.data : {});
                }).catch(function (e) {
                    reject(e);
                });
            });
        }

        /**
         * Common request options.
         * This method is for overwriting.
         *
         * @protected
         */

    }, {
        key: '_getRequestOptions',
        value: function _getRequestOptions() {
            var additional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return additional;
        }
    }]);
    return HTTPModelManager;
}(ModelManagerAbstract);

/**
 * Data collection from HTTP protocol.
 */

var HTTPRepository = function (_RepositoryInterface) {
    inherits(HTTPRepository, _RepositoryInterface);

    /**
     * @param {Model.prototype} modelClass
     * @param {HTTPLocatorAbstract} locator
     * @param {HTTPModelManager} manager
     * @param {AxiosInstance} httpClient
     */
    function HTTPRepository(modelClass, locator, manager, httpClient) {
        classCallCheck(this, HTTPRepository);

        /** @protected */
        var _this = possibleConstructorReturn(this, (HTTPRepository.__proto__ || Object.getPrototypeOf(HTTPRepository)).call(this));

        _this._modelClass = modelClass;
        /** @protected */
        _this._locator = locator;
        /** @protected */
        _this._manager = manager;
        /** @protected */
        _this._client = httpClient;
        return _this;
    }

    /**
     * @inheritdoc
     */


    createClass(HTTPRepository, [{
        key: 'findOne',
        value: function findOne(id) {
            return this._manager.get(id, this._modelClass);
        }
    }]);
    return HTTPRepository;
}(RepositoryInterface);

/**
 * Locator which locates data by HTTP protocol.
 */

var HTTPLocatorAbstract = function (_LocatorAbstract) {
  inherits(HTTPLocatorAbstract, _LocatorAbstract);

  function HTTPLocatorAbstract() {
    classCallCheck(this, HTTPLocatorAbstract);
    return possibleConstructorReturn(this, (HTTPLocatorAbstract.__proto__ || Object.getPrototypeOf(HTTPLocatorAbstract)).apply(this, arguments));
  }

  createClass(HTTPLocatorAbstract, [{
    key: 'getBaseURL',


    /**
     * Get base URL.
     *
     * @return {string}
     */
    value: function getBaseURL() {
      return '' + this.hostPath + this.basePath;
    }

    /**
     * Get custom URL.
     *
     * @param {string} path
     * @return {string}
     */

  }, {
    key: 'getUrl',
    value: function getUrl(path) {
      return '' + this.getBaseURL() + path;
    }

    /**
     * @inheritdoc
     */

  }, {
    key: 'locate',
    value: function locate(model) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.isEmptyModelId(model) ? this.getBaseURL() : this.locateById(this.getModelId(model), options);
    }

    /**
     * @inheritdoc
     */

  }, {
    key: 'locateById',
    value: function locateById(id) {
      return this.getUrl('/' + id);
    }

    /**
     * @inheritdoc
     *
     * @return {HTTPModelManager.prototype}
     */

  }, {
    key: 'getModelManagerClass',
    value: function getModelManagerClass() {
      return HTTPModelManager;
    }

    /**
     * @inheritdoc
     *
     * @return {HTTPRepository.prototype}
     */

  }, {
    key: 'getRepositoryClass',
    value: function getRepositoryClass() {
      return HTTPRepository;
    }
  }, {
    key: 'hostPath',

    /**
     * Host path like https://google.com. It's optionally.
     *
     * @return {string}
     */
    get: function get$$1() {
      return '';
    }

    /**
     * Base path in URL.
     *
     * @return {string}
     */

  }, {
    key: 'basePath',
    get: function get$$1() {
      throw new Error('basePath should be defined in HTTPLocator');
    }

    /**
     * Additional headers e.g. api key.
     *
     * @return {Object}
     */

  }, {
    key: 'headers',
    get: function get$$1() {
      return {};
    }
  }]);
  return HTTPLocatorAbstract;
}(LocatorAbstract);

var FactoryInterface = function (_Interface) {
    inherits(FactoryInterface, _Interface);

    function FactoryInterface() {
        classCallCheck(this, FactoryInterface);
        return possibleConstructorReturn(this, (FactoryInterface.__proto__ || Object.getPrototypeOf(FactoryInterface)).apply(this, arguments));
    }

    createClass(FactoryInterface, [{
        key: 'createManager',

        /**
         * Create ModelManager object.
         *
         * @param {LocatorInterface} locator
         * @return {ModelManagerInterface}
         */
        value: function createManager(locator) {
            this.defineInterfaceMethod();
        }

        /**
         * Create Repository object.
         *
         * @param {Model.prototype} modelClass
         * @param {LocatorInterface} locator
         * @return {RepositoryInterface}
         */

    }, {
        key: 'createRepository',
        value: function createRepository(modelClass, locator) {
            this.defineInterfaceMethod();
        }
    }]);
    return FactoryInterface;
}(Interface);

var ClientConfig = function () {
    function ClientConfig() {
        classCallCheck(this, ClientConfig);

        this.options = {};
    }

    /**
     * @return {Object}
     */


    createClass(ClientConfig, [{
        key: "options",
        get: function get$$1() {
            return Object.assign({}, this._options);
        }

        /**
         * @param {Object} options
         */
        ,
        set: function set$$1(options) {
            this._options = Object.assign({}, options);
        }
    }]);
    return ClientConfig;
}();

var options = new ClientConfig();

/**
 * @param {HTTPLocatorAbstract} locator
 * @return {AxiosInstance}
 */
var createClient = function createClient(locator) {
    var options$$1 = {};

    if (locator !== null && (typeof locator === 'undefined' ? 'undefined' : _typeof(locator)) === 'object' && Object.keys(locator.headers).length > 0) {
        options$$1.headers = Object.assign({}, locator.headers);
    }

    return axios.create(Object.assign({}, options.options, options$$1));
};

var HTTPFactory = function (_FactoryInterface) {
    inherits(HTTPFactory, _FactoryInterface);

    function HTTPFactory() {
        classCallCheck(this, HTTPFactory);
        return possibleConstructorReturn(this, (HTTPFactory.__proto__ || Object.getPrototypeOf(HTTPFactory)).apply(this, arguments));
    }

    createClass(HTTPFactory, [{
        key: 'createManager',

        /**
         * @inheritdoc
         *
         * @param {HTTPLocatorAbstract} locator
         * @return {HTTPModelManager}
         */
        value: function createManager(locator) {
            var Manager = locator.getModelManagerClass();

            return new Manager(locator, createClient(locator));
        }

        /**
         * @inheritdoc
         *
         * @param {Model.prototype} modelClass
         * @param {HTTPLocatorAbstract} locator
         * @return {HTTPRepository}
         */

    }, {
        key: 'createRepository',
        value: function createRepository(modelClass, locator) {
            var Repository = locator.getRepositoryClass();
            var manager = this.createManager(locator);

            return new Repository(modelClass, locator, manager, createClient(locator));
        }
    }]);
    return HTTPFactory;
}(FactoryInterface);

var factory = new HTTPFactory();

/**
 * CustomTransformer for dynamic method definition.
 */

var CustomTransformer = function (_TransformerInterface) {
    inherits(CustomTransformer, _TransformerInterface);

    function CustomTransformer() {
        classCallCheck(this, CustomTransformer);
        return possibleConstructorReturn(this, (CustomTransformer.__proto__ || Object.getPrototypeOf(CustomTransformer)).apply(this, arguments));
    }

    return CustomTransformer;
}(TransformerInterface);

/**
 * @param {Array.<TransformerInterface>} transformers
 */
var mergeTransformers = function mergeTransformers(transformers) {
    return function (_TransformerInterface) {
        inherits(_class, _TransformerInterface);

        function _class() {
            classCallCheck(this, _class);
            return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        createClass(_class, [{
            key: 'transform',

            /**
             * @inheritdoc
             */
            value: function transform(object) {
                var data = object;

                transformers.forEach(function (transformer) {
                    data = transformer.transform(data);
                });

                return data;
            }
        }]);
        return _class;
    }(TransformerInterface);
};

/**
 * Data persistence by Web Storage API.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */

var StorageModelManager = function (_ModelManagerAbstract) {
    inherits(StorageModelManager, _ModelManagerAbstract);

    /**
     * @param {StorageLocatorAbstract} locator
     */
    function StorageModelManager(locator) {
        classCallCheck(this, StorageModelManager);

        /** @protected */
        var _this = possibleConstructorReturn(this, (StorageModelManager.__proto__ || Object.getPrototypeOf(StorageModelManager)).call(this));

        _this._locator = locator;
        return _this;
    }

    /**
     * @inheritdoc
     *
     * @return {Promise.<Model>}
     */


    createClass(StorageModelManager, [{
        key: 'get',
        value: function get$$1(id, modelClass) {
            var _this2 = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var model = _this2.getSync(id, modelClass, options);
                    resolve(model);
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Synchronous version of the `get` method.
         *
         * @param id
         * @param {Model.prototype} modelClass
         * @param {Object} [options]
         *
         * @return {Model}
         */

    }, {
        key: 'getSync',
        value: function getSync(id, modelClass) {
            var locate = this._locator.locateById(id);
            var item = this._locator.storage.getItem(locate);

            if (item === null) {
                throw new TypeError('Item with the key [' + locate + '] was not found');
            }

            return new modelClass(this.createInputTransformer().transform(JSON.parse(item)));
        }

        /**
         * Get all stored Models.
         *
         * @param {Model.prototype} modelClass
         *
         * @return {Model.Array}
         */

    }, {
        key: 'getAll',
        value: function getAll(modelClass) {
            var _this3 = this;

            var ArrayModel = new Model.Array(modelClass);
            var items = [];

            this.getKeys().forEach(function (id) {
                items.push(_this3.getSync(id, modelClass));
            });

            return ArrayModel(items);
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'save',
        value: function save(model) {
            var _this4 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    _this4.saveSync(model, options);
                    resolve({});
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Synchronous version of the `save` method.
         *
         * @param {Model} model
         * @param {Object} [options]
         */

    }, {
        key: 'saveSync',
        value: function saveSync(model) {
            this._locator.storage.setItem(this._locator.locate(model), JSON.stringify(this.createOutputTransformer().transform(model)));

            this._persistId(this._locator.getModelId(model));
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'remove',
        value: function remove(model) {
            var _this5 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return new Promise(function (resolve, reject) {
                try {
                    _this5.removeSync(model, options);
                    resolve({});
                } catch (e) {
                    reject(e);
                }
            });
        }

        /**
         * Synchronous version of the `remove` method.
         *
         * @param {Model} model
         * @param {Object} [options]
         */

    }, {
        key: 'removeSync',
        value: function removeSync(model) {
            this._locator.storage.removeItem(this._locator.locate(model));
            this._removeId(this._locator.getModelId(model));
        }

        /**
         * Does exists an item with given id?
         *
         * @param id
         *
         * @return {boolean}
         */

    }, {
        key: 'has',
        value: function has(id) {
            return this._locator.storage.getItem(this._locator.locateById(id)) !== null;
        }

        /**
         * Return Array with all stored models ids.
         */

    }, {
        key: 'getKeys',
        value: function getKeys() {
            var _this6 = this;

            var ids = [];
            var item = this._locator.storage.getItem(this._getIdsKey());

            if (item !== null) {
                var data = void 0;

                try {
                    data = JSON.parse(item);
                } catch (e) {
                    data = [];
                }

                if (Array.isArray(data)) {
                    data.forEach(function (id) {
                        if (id !== null && _this6.has(id) && typeof id.toString === 'function' && ids.indexOf(id.toString()) === -1) {
                            ids.push(id.toString());
                        }
                    });
                }
            }

            return ids;
        }

        /**
         * The key that gives access to Models Ids.
         *
         * @return {string}
         *
         * @protected
         */

    }, {
        key: '_getIdsKey',
        value: function _getIdsKey() {
            return '__ids__' + this._locator.basePath;
        }

        /**
         * Persist Model Id.
         *
         * @param id
         *
         * @protected
         */

    }, {
        key: '_persistId',
        value: function _persistId(id) {
            if (id !== null && this.has(id) && typeof id.toString === 'function') {
                var ids = this.getKeys();

                if (ids.indexOf(id.toString()) === -1) {
                    ids.push(id.toString());
                    this._locator.storage.setItem(this._getIdsKey(), JSON.stringify(ids));
                }
            }
        }

        /**
         * Remove Model Id.
         *
         * @param id
         *
         * @protected
         */

    }, {
        key: '_removeId',
        value: function _removeId(id) {
            var ids = this.getKeys().filter(function (el) {
                return el.toString() !== id.toString();
            });
            this._locator.storage.setItem(this._getIdsKey(), JSON.stringify(ids));
        }
    }]);
    return StorageModelManager;
}(ModelManagerAbstract);

/**
 * Data collection from Web Storage API.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */

var StorageRepository = function (_RepositoryInterface) {
  inherits(StorageRepository, _RepositoryInterface);

  /**
   * @param {Model.prototype} modelClass
   * @param {StorageLocatorAbstract} locator
   * @param {StorageModelManager} manager
   */
  function StorageRepository(modelClass, locator, manager) {
    classCallCheck(this, StorageRepository);

    /** @protected */
    var _this = possibleConstructorReturn(this, (StorageRepository.__proto__ || Object.getPrototypeOf(StorageRepository)).call(this));

    _this._modelClass = modelClass;
    /** @protected */
    _this._locator = locator;
    /** @protected */
    _this._manager = manager;
    return _this;
  }

  /**
   * @inheritdoc
   */


  createClass(StorageRepository, [{
    key: 'findOne',
    value: function findOne(id) {
      return this._manager.get(id, this._modelClass);
    }

    /**
     * Synchronous version of the `findOne` method.
     *
     * @param id
     *
     * @return {Model}
     */

  }, {
    key: 'findOneSync',
    value: function findOneSync(id) {
      return this._manager.getSync(id, this._modelClass);
    }

    /**
     * Get all Models.
     *
     * @return {Model.Array}
     */

  }, {
    key: 'getAll',
    value: function getAll() {
      return this._manager.getAll(this._modelClass);
    }
  }]);
  return StorageRepository;
}(RepositoryInterface);

/**
 * Locator to Storage API.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */

var StorageLocatorAbstract = function (_LocatorAbstract) {
    inherits(StorageLocatorAbstract, _LocatorAbstract);

    function StorageLocatorAbstract() {
        classCallCheck(this, StorageLocatorAbstract);
        return possibleConstructorReturn(this, (StorageLocatorAbstract.__proto__ || Object.getPrototypeOf(StorageLocatorAbstract)).apply(this, arguments));
    }

    createClass(StorageLocatorAbstract, [{
        key: 'locate',


        /**
         * @inheritdoc
         */
        value: function locate(model) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.isEmptyModelId(model)) {
                throw new Error('Model Id cannot be empty in StorageLocator');
            }

            return this.locateById(this.getModelId(model), options);
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'locateById',
        value: function locateById(id) {
            return this.basePath + '/' + id;
        }

        /**
         * @inheritdoc
         *
         * @return {StorageModelManager.prototype}
         */

    }, {
        key: 'getModelManagerClass',
        value: function getModelManagerClass() {
            return StorageModelManager;
        }

        /**
         * @inheritdoc
         *
         * @return {StorageRepository.prototype}
         */

    }, {
        key: 'getRepositoryClass',
        value: function getRepositoryClass() {
            return StorageRepository;
        }
    }, {
        key: 'storage',

        /**
         * Web Storage API.
         *
         * @return {Storage}
         */
        get: function get$$1() {
            throw new Error('storage should be defined in StorageLocator');
        }

        /**
         * Base path in URL.
         *
         * @return {string}
         */

    }, {
        key: 'basePath',
        get: function get$$1() {
            throw new Error('basePath should be defined in StorageLocator');
        }
    }]);
    return StorageLocatorAbstract;
}(LocatorAbstract);

/**
 * Locator to localStorage.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

var LocalStorageLocatorAbstract = function (_StorageLocatorAbstra) {
  inherits(LocalStorageLocatorAbstract, _StorageLocatorAbstra);

  function LocalStorageLocatorAbstract() {
    classCallCheck(this, LocalStorageLocatorAbstract);
    return possibleConstructorReturn(this, (LocalStorageLocatorAbstract.__proto__ || Object.getPrototypeOf(LocalStorageLocatorAbstract)).apply(this, arguments));
  }

  createClass(LocalStorageLocatorAbstract, [{
    key: 'storage',

    /**
     * @inheritdoc
     */
    get: function get$$1() {
      return localStorage;
    }
  }]);
  return LocalStorageLocatorAbstract;
}(StorageLocatorAbstract);

/**
 * Locator to sessionStorage.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

var SessionStorageLocatorAbstract = function (_StorageLocatorAbstra) {
  inherits(SessionStorageLocatorAbstract, _StorageLocatorAbstra);

  function SessionStorageLocatorAbstract() {
    classCallCheck(this, SessionStorageLocatorAbstract);
    return possibleConstructorReturn(this, (SessionStorageLocatorAbstract.__proto__ || Object.getPrototypeOf(SessionStorageLocatorAbstract)).apply(this, arguments));
  }

  createClass(SessionStorageLocatorAbstract, [{
    key: 'storage',

    /**
     * @inheritdoc
     */
    get: function get$$1() {
      return sessionStorage;
    }
  }]);
  return SessionStorageLocatorAbstract;
}(StorageLocatorAbstract);

var StorageFactory = function (_FactoryInterface) {
    inherits(StorageFactory, _FactoryInterface);

    function StorageFactory() {
        classCallCheck(this, StorageFactory);
        return possibleConstructorReturn(this, (StorageFactory.__proto__ || Object.getPrototypeOf(StorageFactory)).apply(this, arguments));
    }

    createClass(StorageFactory, [{
        key: 'createManager',

        /**
         * @inheritdoc
         *
         * @param {StorageLocatorAbstract} locator
         * @return {StorageModelManager}
         */
        value: function createManager(locator) {
            var Manager = locator.getModelManagerClass();

            return new Manager(locator);
        }

        /**
         * @inheritdoc
         *
         * @param {Model.prototype} modelClass
         * @param {StorageLocatorAbstract} locator
         * @return {StorageRepository}
         */

    }, {
        key: 'createRepository',
        value: function createRepository(modelClass, locator) {
            var Repository = locator.getRepositoryClass();
            var manager = this.createManager(locator);

            return new Repository(modelClass, locator, manager);
        }
    }]);
    return StorageFactory;
}(FactoryInterface);

var factory$1 = new StorageFactory();

var modelPersist = {
    Interface: Interface,
    Model: Model,
    DynamicModel: DynamicModel,
    modelHelpers: helpers,
    LocatorInterface: LocatorInterface,
    ModelManagerInterface: ModelManagerInterface,
    RepositoryInterface: RepositoryInterface,
    LocatorAbstract: LocatorAbstract,
    ModelManagerAbstract: ModelManagerAbstract,
    HTTPLocatorAbstract: HTTPLocatorAbstract,
    HTTPModelManager: HTTPModelManager,
    HTTPRepository: HTTPRepository,
    httpFactory: factory,
    StorageLocatorAbstract: StorageLocatorAbstract,
    LocalStorageLocatorAbstract: LocalStorageLocatorAbstract,
    SessionStorageLocatorAbstract: SessionStorageLocatorAbstract,
    StorageModelManager: StorageModelManager,
    StorageRepository: StorageRepository,
    storageFactory: factory$1,
    http: {
        createClient: createClient,
        config: options
    },
    transformer: {
        TransformerInterface: TransformerInterface,
        InputTransformer: InputTransformer,
        OutputTransformer: OutputTransformer,
        CustomTransformer: CustomTransformer,
        mergeTransformers: mergeTransformers
    }
};

namespace(modelPersist);

return modelPersist;

})));
//# sourceMappingURL=model-persistence.js.map

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ElementView = factory());
}(this, (function () { 'use strict';

/*jshint browser:true, node:true*/

'use strict';

var delegate = Delegate;

/**
 * DOM event delegator
 *
 * The delegator will listen
 * for events that bubble up
 * to the root node.
 *
 * @constructor
 * @param {Node|string} [root] The root node or a selector string matching the root node
 */
function Delegate(root) {

  /**
   * Maintain a map of listener
   * lists, keyed by event name.
   *
   * @type Object
   */
  this.listenerMap = [{}, {}];
  if (root) {
    this.root(root);
  }

  /** @type function() */
  this.handle = Delegate.prototype.handle.bind(this);
}

/**
 * Start listening for events
 * on the provided DOM element
 *
 * @param  {Node|string} [root] The root node or a selector string matching the root node
 * @returns {Delegate} This method is chainable
 */
Delegate.prototype.root = function (root) {
  var listenerMap = this.listenerMap;
  var eventType;

  // Remove master event listeners
  if (this.rootElement) {
    for (eventType in listenerMap[1]) {
      if (listenerMap[1].hasOwnProperty(eventType)) {
        this.rootElement.removeEventListener(eventType, this.handle, true);
      }
    }
    for (eventType in listenerMap[0]) {
      if (listenerMap[0].hasOwnProperty(eventType)) {
        this.rootElement.removeEventListener(eventType, this.handle, false);
      }
    }
  }

  // If no root or root is not
  // a dom node, then remove internal
  // root reference and exit here
  if (!root || !root.addEventListener) {
    if (this.rootElement) {
      delete this.rootElement;
    }
    return this;
  }

  /**
   * The root node at which
   * listeners are attached.
   *
   * @type Node
   */
  this.rootElement = root;

  // Set up master event listeners
  for (eventType in listenerMap[1]) {
    if (listenerMap[1].hasOwnProperty(eventType)) {
      this.rootElement.addEventListener(eventType, this.handle, true);
    }
  }
  for (eventType in listenerMap[0]) {
    if (listenerMap[0].hasOwnProperty(eventType)) {
      this.rootElement.addEventListener(eventType, this.handle, false);
    }
  }

  return this;
};

/**
 * @param {string} eventType
 * @returns boolean
 */
Delegate.prototype.captureForType = function (eventType) {
  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
};

/**
 * Attach a handler to one
 * event for all elements
 * that match the selector,
 * now or in the future
 *
 * The handler function receives
 * three arguments: the DOM event
 * object, the node that matched
 * the selector while the event
 * was bubbling and a reference
 * to itself. Within the handler,
 * 'this' is equal to the second
 * argument.
 *
 * The node that actually received
 * the event can be accessed via
 * 'event.target'.
 *
 * @param {string} eventType Listen for these events
 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
 * @param {function()} handler Handler function - event data passed here will be in event.data
 * @param {Object} [eventData] Data to pass in event.data
 * @returns {Delegate} This method is chainable
 */
Delegate.prototype.on = function (eventType, selector, handler, useCapture) {
  var root, listenerMap, matcher, matcherParam;

  if (!eventType) {
    throw new TypeError('Invalid event type: ' + eventType);
  }

  // handler can be passed as
  // the second or third argument
  if (typeof selector === 'function') {
    useCapture = handler;
    handler = selector;
    selector = null;
  }

  // Fallback to sensible defaults
  // if useCapture not set
  if (useCapture === undefined) {
    useCapture = this.captureForType(eventType);
  }

  if (typeof handler !== 'function') {
    throw new TypeError('Handler must be a type of Function');
  }

  root = this.rootElement;
  listenerMap = this.listenerMap[useCapture ? 1 : 0];

  // Add master handler for type if not created yet
  if (!listenerMap[eventType]) {
    if (root) {
      root.addEventListener(eventType, this.handle, useCapture);
    }
    listenerMap[eventType] = [];
  }

  if (!selector) {
    matcherParam = null;

    // COMPLEX - matchesRoot needs to have access to
    // this.rootElement, so bind the function to this.
    matcher = matchesRoot.bind(this);

    // Compile a matcher for the given selector
  } else if (/^[a-z]+$/i.test(selector)) {
    matcherParam = selector;
    matcher = matchesTag;
  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
    matcherParam = selector.slice(1);
    matcher = matchesId;
  } else {
    matcherParam = selector;
    matcher = matches;
  }

  // Add to the list of listeners
  listenerMap[eventType].push({
    selector: selector,
    handler: handler,
    matcher: matcher,
    matcherParam: matcherParam
  });

  return this;
};

/**
 * Remove an event handler
 * for elements that match
 * the selector, forever
 *
 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
 * @returns {Delegate} This method is chainable
 */
Delegate.prototype.off = function (eventType, selector, handler, useCapture) {
  var i, listener, listenerMap, listenerList, singleEventType;

  // Handler can be passed as
  // the second or third argument
  if (typeof selector === 'function') {
    useCapture = handler;
    handler = selector;
    selector = null;
  }

  // If useCapture not set, remove
  // all event listeners
  if (useCapture === undefined) {
    this.off(eventType, selector, handler, true);
    this.off(eventType, selector, handler, false);
    return this;
  }

  listenerMap = this.listenerMap[useCapture ? 1 : 0];
  if (!eventType) {
    for (singleEventType in listenerMap) {
      if (listenerMap.hasOwnProperty(singleEventType)) {
        this.off(singleEventType, selector, handler);
      }
    }

    return this;
  }

  listenerList = listenerMap[eventType];
  if (!listenerList || !listenerList.length) {
    return this;
  }

  // Remove only parameter matches
  // if specified
  for (i = listenerList.length - 1; i >= 0; i--) {
    listener = listenerList[i];

    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
      listenerList.splice(i, 1);
    }
  }

  // All listeners removed
  if (!listenerList.length) {
    delete listenerMap[eventType];

    // Remove the main handler
    if (this.rootElement) {
      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
    }
  }

  return this;
};

/**
 * Handle an arbitrary event.
 *
 * @param {Event} event
 */
Delegate.prototype.handle = function (event) {
  var i,
      l,
      type = event.type,
      root,
      phase,
      listener,
      returned,
      listenerList = [],
      target,
      /** @const */EVENTIGNORE = 'ftLabsDelegateIgnore';

  if (event[EVENTIGNORE] === true) {
    return;
  }

  target = event.target;

  // Hardcode value of Node.TEXT_NODE
  // as not defined in IE8
  if (target.nodeType === 3) {
    target = target.parentNode;
  }

  root = this.rootElement;

  phase = event.eventPhase || (event.target !== event.currentTarget ? 3 : 2);

  switch (phase) {
    case 1:
      //Event.CAPTURING_PHASE:
      listenerList = this.listenerMap[1][type];
      break;
    case 2:
      //Event.AT_TARGET:
      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
      break;
    case 3:
      //Event.BUBBLING_PHASE:
      listenerList = this.listenerMap[0][type];
      break;
  }

  // Need to continuously check
  // that the specific list is
  // still populated in case one
  // of the callbacks actually
  // causes the list to be destroyed.
  l = listenerList.length;
  while (target && l) {
    for (i = 0; i < l; i++) {
      listener = listenerList[i];

      // Bail from this loop if
      // the length changed and
      // no more listeners are
      // defined between i and l.
      if (!listener) {
        break;
      }

      // Check for match and fire
      // the event if there's one
      //
      // TODO:MCG:20120117: Need a way
      // to check if event#stopImmediatePropagation
      // was called. If so, break both loops.
      if (listener.matcher.call(target, listener.matcherParam, target)) {
        returned = this.fire(event, target, listener);
      }

      // Stop propagation to subsequent
      // callbacks if the callback returned
      // false
      if (returned === false) {
        event[EVENTIGNORE] = true;
        event.preventDefault();
        return;
      }
    }

    // TODO:MCG:20120117: Need a way to
    // check if event#stopPropagation
    // was called. If so, break looping
    // through the DOM. Stop if the
    // delegation root has been reached
    if (target === root) {
      break;
    }

    l = listenerList.length;
    target = target.parentElement;
  }
};

/**
 * Fire a listener on a target.
 *
 * @param {Event} event
 * @param {Node} target
 * @param {Object} listener
 * @returns {boolean}
 */
Delegate.prototype.fire = function (event, target, listener) {
  return listener.handler.call(target, event, target);
};

/**
 * Check whether an element
 * matches a generic selector.
 *
 * @type function()
 * @param {string} selector A CSS selector
 */
var matches = function (el) {
  if (!el) return;
  var p = el.prototype;
  return p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
}(Element);

/**
 * Check whether an element
 * matches a tag selector.
 *
 * Tags are NOT case-sensitive,
 * except in XML (and XML-based
 * languages such as XHTML).
 *
 * @param {string} tagName The tag name to test against
 * @param {Element} element The element to test with
 * @returns boolean
 */
function matchesTag(tagName, element) {
  return tagName.toLowerCase() === element.tagName.toLowerCase();
}

/**
 * Check whether an element
 * matches the root.
 *
 * @param {?String} selector In this case this is always passed through as null and not used
 * @param {Element} element The element to test with
 * @returns boolean
 */
function matchesRoot(selector, element) {
  /*jshint validthis:true*/
  if (this.rootElement === window) return element === document;
  return this.rootElement === element;
}

/**
 * Check whether the ID of
 * the element in 'this'
 * matches the given ID.
 *
 * IDs are case-sensitive.
 *
 * @param {string} id The ID to test against
 * @param {Element} element The element to test with
 * @returns boolean
 */
function matchesId(id, element) {
  return id === element.id;
}

/**
 * Short hand for off()
 * and root(), ie both
 * with no parameters
 *
 * @return void
 */
Delegate.prototype.destroy = function () {
  this.off();
  this.root();
};

/*jshint browser:true, node:true*/

'use strict';

/**
 * @preserve Create and manage a DOM event delegator.
 *
 * @version 0.3.0
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

var lib = function lib(root) {
  return new delegate(root);
};

var Delegate_1 = delegate;

lib.Delegate = Delegate_1;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * Simple View layer for HTMLElement
 */

var ElementView$1 = function () {
    createClass(ElementView, [{
        key: 'events',


        /**
         * Event listeners.
         *
         * @return {Object.<String, Function|Object.<String, Function>>}
         */
        get: function get$$1() {
            return {};
        }

        /**
         * Direct access to Delegate.
         *
         * @return {Delegate}
         */

    }, {
        key: 'delegate',
        get: function get$$1() {
            return this._delegate;
        }

        /**
         * Root element.
         *
         * @return {HTMLElement}
         */

    }, {
        key: 'root',
        get: function get$$1() {
            return this._root;
        }

        /**
         * @param {HTMLElement} htmlElement
         * @param {string} [listenerContext]
         */

    }], [{
        key: 'Delegate',

        /**
         * @return {Delegate}
         * @constructor
         */
        get: function get$$1() {
            return lib.Delegate;
        }
    }]);

    function ElementView(htmlElement) {
        var listenerContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view';
        classCallCheck(this, ElementView);

        /** @protected */
        this._listenerContext = listenerContext;
        /** @protected */
        this._root = htmlElement;
        /** @protected */
        this._delegate = new ElementView.Delegate(htmlElement);
        this._attachListeners(this.events);
    }

    /**
     * Remove all registered listeners and attach them again.
     */


    createClass(ElementView, [{
        key: 'resetEvents',
        value: function resetEvents() {
            this._delegate.off();
            this._attachListeners(this.events);
        }

        /**
         * @param {Object.<String, Function|Object.<String, Function>>} listeners
         * @param {String} [selector]
         *
         * @protected
         */

    }, {
        key: '_attachListeners',
        value: function _attachListeners(listeners) {
            var _this = this;

            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            for (var eventName in listeners) {
                if (listeners.hasOwnProperty(eventName)) {
                    (function () {
                        var listener = listeners[eventName];

                        switch (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) {
                            case 'function':
                                if (selector === null) {
                                    _this._delegate.on(eventName, function () {
                                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                            args[_key] = arguments[_key];
                                        }

                                        listener.apply(_this._getListenerContext(), args);
                                    });
                                } else if (typeof selector === 'string') {
                                    _this._delegate.on(eventName, selector, function () {
                                        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                                            args[_key2] = arguments[_key2];
                                        }

                                        listener.apply(_this._getListenerContext(), args);
                                    });
                                }

                                break;
                            case 'object':
                                if (selector === null) {
                                    _this._attachListeners(listener, eventName);
                                }

                                break;
                            default:
                        }
                    })();
                }
            }
        }

        /**
         * @return {Object}
         *
         * @protected
         */

    }, {
        key: '_getListenerContext',
        value: function _getListenerContext() {
            var context = void 0;

            switch (this._listenerContext) {
                case 'view':
                    context = this;
                    break;
                case 'root':
                    context = this.root;
                    break;
                case 'host':
                    context = this.root.host;
                    break;
                default:
                    context = this;
            }

            return context;
        }
    }]);
    return ElementView;
}();

return ElementView$1;

})));
//# sourceMappingURL=element-view.js.map

(function (global) {
    var ready = false;
    var calls = [];

    global.addEventListener('WebComponentsReady', function readyListener () {
        ready = true;

        calls.forEach(function (listener) {
            listener();
        });

        calls = [];
        global.removeEventListener('WebComponentsReady', readyListener);
    });

    /**
     * @param {Function} listener
     */
    global.WCReady = function (listener) {
        if (typeof listener === 'function') {
            if (ready) {
                listener();
            } else {
                calls.push(listener);
            }
        }
    }
}(window));
