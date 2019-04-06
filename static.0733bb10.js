(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(15);

var _reactHelmet = __webpack_require__(65);

var _browser = __webpack_require__(12);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(32));

var _RouteData = _interopRequireWildcard(__webpack_require__(66));

var _SiteData = _interopRequireWildcard(__webpack_require__(67));

var _Prefetch = _interopRequireDefault(__webpack_require__(68));

var _Routes = _interopRequireDefault(__webpack_require__(34));

var _Root = _interopRequireDefault(__webpack_require__(69));

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROOT_PAGE_TITLE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAX_EXECUTION_TIME; });
var ROOT_PAGE_TITLE_PREFIX='Observable Playground | Learn, test and play with RxJS, Bacon.js and Kefir';var palette=['#03a9f4','#ffeb3b','#8bc34a','#00bcd4','#ff9800','#ff5073','#4caf50','#2196f3','#33cf89','#4e86ff','#009688','#cddc39','#ffc107'];// 1 sec is max execution time for scripts
var MAX_EXECUTION_TIME=1000;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/shared/LoadingIndicator/LoadingIndicator.jsx
var LoadingIndicator = __webpack_require__(16);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/SSRPlayground.css
var Playground_SSRPlayground = __webpack_require__(76);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/SSRPlayground.js
var SSRPlayground_SSRPlayground=function SSRPlayground(props){return external_react_default.a.createElement("div",{className:"Playground"},external_react_default.a.createElement("div",{className:"Playground__editor"},external_react_default.a.createElement("pre",{className:"SSRPlayground__Pre"},external_react_default.a.createElement("code",{className:"SSRPlayground__Code"},props.code))),external_react_default.a.createElement("div",{className:"Playground__chart"},external_react_default.a.createElement("span",{className:"SSRPlayground__Loader"},external_react_default.a.createElement(LoadingIndicator["a" /* LoadingIndicator */],null))));};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/PlaygroundWrapper.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundWrapper_PlaygroundWrapper; });
var PlaygroundWrapper_PlaygroundWrapper=function PlaygroundWrapper(props){if(typeof document!=='undefined'){var _require=__webpack_require__(87),Playground=_require.Playground;return external_react_default.a.createElement(Playground,props);}else{return external_react_default.a.createElement(SSRPlayground_SSRPlayground,props);}};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
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

var _requireUniversalModule = __webpack_require__(59);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(61);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(62);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
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
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplateForPath = exports.registerTemplates = exports.templateUpdated = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _axios = _interopRequireDefault(__webpack_require__(21));

var _utils = __webpack_require__(15);

var _Visibility = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;

var registerTemplates = function registerTemplates(tmps, notFoundKey) {
  Object.keys(templates).forEach(function (key) {
    delete templates[key];
  });
  Object.keys(tmps).forEach(function (key) {
    templates[key] = tmps[key];
  });
  templatesByPath['404'] = templates[notFoundKey];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');
        var shouldPrefetch = !(el.getAttribute('prefetch') === 'false');

        if (href && shouldPrefetch) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "https://observable-playground.github.io/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 43;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true; // Unless we already fetched the 404 page,
            // try to load info for the 404 page

            if (!(!routeInfoByPath['404'] && !routeErrorByPath['404'])) {
              _context2.next = 42;
              break;
            }

            return _context2.abrupt("return", getRouteInfo('404', {
              priority: priority
            }));

          case 42:
            return _context2.abrupt("return");

          case 43:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.sharedData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return");

          case 8:
            // Request and build the props one by one
            routeInfo.sharedData = {}; // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.sharedData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              // Make sure to use the path as defined in the routeInfo object here.
              // This will make sure 404 route info returned from getRouteInfo is handled correctly.
              registerTemplateForPath(routeInfo.path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (routeInfo) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return");

          case 12:
            if (!(routeInfo && !routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 21;
              break;
            }

            if (!priority) {
              _context5.next = 18;
              break;
            }

            _context5.next = 16;
            return Template.preload();

          case 16:
            _context5.next = 20;
            break;

          case 18:
            _context5.next = 20;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 20:
            routeInfo.templateLoaded = true;

          case 21:
            return _context5.abrupt("return", Template);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 9;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            _context6.next = 16;
            break;

          case 9:
            if (!(type === 'template')) {
              _context6.next = 14;
              break;
            }

            _context6.next = 12;
            return prefetchTemplate(path, options);

          case 12:
            _context6.next = 16;
            break;

          case 14:
            _context6.next = 16;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 16:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = {"a":{"@babel/standalone":"^7.3.4","@fortawesome/fontawesome-svg-core":"^1.2.15","@fortawesome/free-brands-svg-icons":"^5.7.2","@fortawesome/free-solid-svg-icons":"^5.7.2","@fortawesome/react-fontawesome":"^0.1.4","@reach/router":"^1.2.1","acorn":"^6","axios":"^0.18.0","baconjs":"2.0.11","brace":"^0.11.1","d3":"5.9.1","kefir":"3.8.6","lodash":"^4.17.11","node-sass-chokidar":"^1.3.4","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","promise-polyfill":"8.1.0","react":"^16.8.1","react-ace":"^6.4.0","react-dom":"^16.8.1","react-hot-loader":"^4.3.12","react-static":"^6.3.6","rxjs":"6.4.0","rxjs-compat":"6.4.0","save-svg-as-png":"^1.4.11"}};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _swimmer = __webpack_require__(56);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

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

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingIndicator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _LoadingIndicator_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingIndicator_css__WEBPACK_IMPORTED_MODULE_1__);
var LoadingIndicator=function LoadingIndicator(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"lds-ellipsis"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null));};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(23);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(60)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
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
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(18);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/mock-delayed-execution/mock-delayed-execution.js
function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/**
 * This module substitutes delayed code execution methods on global object to
 * execute them in syncronous way, while `Date.now` and `new Date()` will behave
 * as if they were executed asyncronously.
 * 
 * NOTE: The substitution happens only within `execute` function,
 *       but this module's code should be required
 *       before any other code closes the methods
 * 
 * Next methods are currently covered:
 * - Date
 * - Date.now
 * - setTimeout
 * - clearTimeout
 * - setInterval
 * - clearInterval
 * 
 * These are not yet implemented:
 * - requestAnimationFrame
 * - cancelAnimationFrame
 * 
 * NOTE: real async functions like `readFile`, `fetch` etc
 *       are not supported by this module
 * 
 * @example
 * const { execute } = require('./index');
 * 
 * console.log('start');
 * 
 * execute(()=>{
 *   setTimeout(()=>{
 *     console.log(Date.now());
 *   }, 100);
 * });
 * 
 * console.log('end');
 * 
 * // Outputs
 * // > start
 * // > 100
 * // > end
 */ // NOTE: consider using 3rd party implementation, like Jest's fakeTimers
// https://github.com/facebook/jest/blob/86752905a079498a5315df32e85378ca943818d0/packages/jest-fake-timers/src/jestFakeTimers.ts
// Get global object, typesafe
var __window=typeof window!=='undefined'&&window;var __global=typeof global!=='undefined'&&global;var glob=__window||__global;var ONE_MINUTE=1000*60;// a randomly picked number, to be honest
var MAX_TASKS_PER_TICK=1024;// Store ref to both mocked and original methods
// to switch between while in `.execute` function
var originals=Object.create(null);var mocks=Object.create(null);var isMockMode=false;var DEBUG_MODE=false;// Methods to override
var overridies=['Date','setTimeout','clearTimeout','setInterval','clearInterval','setImmediate','clearImmediate','requestAnimationFrame','cancelAnimationFrame'];overridies.filter(function(key){return glob[key]!==undefined;}).forEach(function(key){originals[key]=glob[key];glob[key]=function MockSub(){var mock=mocks[key];var original=originals[key];// Run mocks only in MockMode
var fn=isMockMode?mock:original;// const fn = original;
// Keep the behaviour for `new Date()` vs `Date()`
for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(this instanceof MockSub){return _construct(fn,args);}else{return fn.apply(void 0,args);}};});// Mock for `Date.now`, special case {{{
if(originals.Date&&originals.Date.now){glob.Date.now=function(){var fn=isMockMode?mocks.Date.now:originals.Date.now;return fn();};}// }}}
// NOTE: This polyfill is needed to mock original Promise, because original is
// **async**, while we need it to be **sync** when executing code.
// This particular implementation from ["promise-polyfill":
// "8.1.0"](https://github.com/taylorhakes/promise-polyfill) stores links to
// `setTimeout` and usage of `setImmediate` in scope. and uses
// Promise._immediateFn to execute tasks.
// Substituting this method to make it sync while executing user code. source:
// https://github.com/taylorhakes/promise-polyfill/blob/master/src/index.js#L225
if(typeof window!=='undefined'){glob.Promise=__webpack_require__(64).default;glob.Promise._immediateFn=function(fn){if(isMockMode){return setTimeout(fn,0);}if(typeof setImmediate=='function'){return setImmediate(fn);}return setTimeout(fn,0);};}/**
 * Runs a function within mocked env
 * 
 * @param {Function} fn function to execute in MockMode
 * @param {Number} maxLifetime limits maximum lifetime of the fn's async calls
 */function execute(fn){var maxLifetime=arguments.length>1&&arguments[1]!==undefined?arguments[1]:ONE_MINUTE;maxLifetime=maxLifetime>0?+maxLifetime:ONE_MINUTE;var time;// Date {{{
mocks.Date=function _Date(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}if(!(this instanceof _Date)){return originals.Date.apply(originals,args);}if(args.length===0){return new originals.Date(time);}return _construct(originals.Date,args);};mocks.Date.now=function(){return time;};// }}}
var tasks=[];// Helper to create ids to setTimeout and setInterval
var getId=function(){// NOTE: id should be positive integer, and this is important.
var id=1;return function(){return id++;};}();// intervals and timeouts are tasks
var createTask=function createTask(timeout,type){return{id:getId(),time:time,registeredAt:time,timeout:Math.max(0,timeout),type:type};};var addTask=function addTask(task){if(DEBUG_MODE){console.log('[+]',task.id,task);}tasks.push(task);};var clearTask=function clearTask(id){if(DEBUG_MODE){console.log('[-]',id);}tasks=tasks.filter(function(x){return x.id!==id;});};// setInterval {{{
mocks.setInterval=function(cb,timeout){for(var _len3=arguments.length,args=new Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++){args[_key3-2]=arguments[_key3];}var task=createTask(timeout,'interval');task.fn=function(){// updates last executed time on each execution
task.time=time;cb.apply(void 0,args);};addTask(task);return task.id;};mocks.clearInterval=clearTask;// }}}
// setImmediate {{{
mocks.setImmediate=function(cb){for(var _len4=arguments.length,args=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){args[_key4-1]=arguments[_key4];}var task=createTask(0,'timeout');task.fn=function(){clearTimeout(task.id);cb.apply(void 0,args);};addTask(task);return task.id;};mocks.clearImmediate=clearTask;// }}}
// setTimeout {{{
mocks.setTimeout=function(cb,timeout){for(var _len5=arguments.length,args=new Array(_len5>2?_len5-2:0),_key5=2;_key5<_len5;_key5++){args[_key5-2]=arguments[_key5];}var task=createTask(timeout,'timeout');task.fn=function(){clearTimeout(task.id);cb.apply(void 0,args);};addTask(task);return task.id;};mocks.clearTimeout=clearTask;// }}}
// requestAnimationFrame {{{
mocks.requestAnimationFrame=function(){throw new Error('Sorry, `requestAnimationFrame` is not implemented yet');};mocks.cancelAnimationFrame=function(){throw new Error('Sorry, `cancelAnimationFrame` is not implemented yet');};// }}}
// Gets next task to execute
// TODO: [kos] check docs for execution order rules
var getNextTask=function getNextTask(){return tasks.filter(function(x){return time-x.time>=x.timeout;}).sort(function(a,b){return a.registeredAt-b.registeredAt||// registered earlier
a.time-b.time// or executed earlier
||a.id-b.id;})// or with lesser id
.shift();};// Runs all delayed code
var flush=function flush(){while(tasks.length){if(time>=maxLifetime){return"Execution terminated: maximum execution time is ".concat(maxLifetime,"ms");}var tasksPerTickCounter=0;var nextTask=void 0;while(nextTask=getNextTask()){// eslint-disable-line no-cond-assign
if(DEBUG_MODE){console.log('[>]',nextTask.id);}nextTask.fn();// NOTE: [kos] potentially this loop might be infinite.
//       Adding anti-infinite guard to limit max tasks run per 1 tick.
// TODO: [kos] consider adding throttling
//       https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified
//       e.g. `timeout = Math.max(4, Number(timeout))`
tasksPerTickCounter++;if(tasksPerTickCounter>MAX_TASKS_PER_TICK){return"Execution terminated: over ".concat(MAX_TASKS_PER_TICK," tasks were scheduled for a single tick at ").concat(time);}}tasksPerTickCounter=0;time++;}time--;// [kos] I know, this is dumb, needed to undo last `time++`
return 0;};var status;var ACTUAL_TIME=new Date(Date.now()).toLocaleTimeString('en-GB');var CONSOLE_GROUP="\u26A1\uFE0F @".concat(ACTUAL_TIME);try{time=0;enableMocks();if(console&&console.group){console.group(CONSOLE_GROUP);}fn();status=flush();if(status!==0&&console&&console.warn){console.warn(status);}}finally{disableMocks();if(console&&console.groupEnd){console.groupEnd(CONSOLE_GROUP);}}return{time:time,status:status};}function enableMocks(){isMockMode=true;}function disableMocks(){isMockMode=false;// cleanup mocks
overridies.forEach(function(key){mocks[key]=null;});}
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/mock-delayed-execution/index.js
/* concated harmony reexport execute */__webpack_require__.d(__webpack_exports__, "a", function() { return execute; });


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/Users/kos/projects/observable-playground",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(57); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 36))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(36);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/gist.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-gist */).then(__webpack_require__.bind(null, 42))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/gist.js');},resolve:function resolve(){return /*require.resolve*/(42);},chunkName:function chunkName(){return"src-pages-gist";}}),universalOptions);var t_2=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-index */).then(__webpack_require__.bind(null, 38))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/index.js');},resolve:function resolve(){return /*require.resolve*/(38);},chunkName:function chunkName(){return"src-pages-index";}}),universalOptions);var t_3=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/Library/rxjs/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-Library-rxjs-index */).then(__webpack_require__.bind(null, 41))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/Library/rxjs/index.js');},resolve:function resolve(){return /*require.resolve*/(41);},chunkName:function chunkName(){return"src-Library-rxjs-index";}}),universalOptions);var t_4=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/Example/Example.page.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-Example-Example.page */).then(__webpack_require__.bind(null, 37))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/Example/Example.page.js');},resolve:function resolve(){return /*require.resolve*/(37);},chunkName:function chunkName(){return"src-Example-Example.page";}}),universalOptions);var t_5=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/Library/baconjs/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-Library-baconjs-index */).then(__webpack_require__.bind(null, 40))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/Library/baconjs/index.js');},resolve:function resolve(){return /*require.resolve*/(40);},chunkName:function chunkName(){return"src-Library-baconjs-index";}}),universalOptions);var t_6=_Users_kos_projects_observable_playground_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/Library/kefir/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-Library-kefir-index */).then(__webpack_require__.bind(null, 39))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/Library/kefir/index.js');},resolve:function resolve(){return /*require.resolve*/(39);},chunkName:function chunkName(){return"src-Library-kefir-index";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'../src/pages/404.js':t_0,'../src/pages/gist.js':t_1,'../src/pages/index.js':t_2,'../src/Library/rxjs/index.js':t_3,'../src/Example/Example.page.js':t_4,'../src/Library/baconjs/index.js':t_5,'../src/Library/kefir/index.js':t_6});var notFoundTemplate="../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

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
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

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
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(12);

var _StaticInfo = __webpack_require__(19);

var _utils = __webpack_require__(15);

var _Location = _interopRequireDefault(__webpack_require__(35));

var _Spinner = _interopRequireDefault(__webpack_require__(24));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

function _extends() {
  _extends = Object.assign || function (target) {
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

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;
var componentCache = new WeakMap();

function with404Prop(Component) {
  // If the wrapped Component is currently in cached, return it from cache.
  if (componentCache.has(Component)) {
    return componentCache.get(Component);
  } // Otherwise, create a new wrapped Component...


  var WrappedComponent = function WrappedComponent(props) {
    return _react.default.createElement(Component, _extends({
      is404: true
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }; // ...and cache it


  componentCache.set(Component, WrappedComponent);
  return WrappedComponent;
}

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getComponentForPath", function (routePath) {
      var Loader = _this.props.Loader; // Clean the path

      routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

      var Comp = _.templatesByPath[routePath]; // Detect a 404

      var is404 = routePath === '404'; // Detect a failed template

      if (_.templateErrorByPath[routePath]) {
        is404 = true;
        Comp = _.templatesByPath['404'];
      } // Detect an unloaded template
      // TODO:suspense - This will become a suspense resource


      if (!Comp) {
        if (is404) {
          throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
        }

        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return Loader;
      }

      return is404 ? with404Prop(Comp) : Comp;
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();
      var Comp = this.getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: this.getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(componentCache, "componentCache", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(with404Prop, "with404Prop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
// the issue with /gist/* pages is that they are not static pages
// therefore these need time to load scripts to load a proper ui
// so here we're showing half loading, half 404 state to the user
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"PageNotFound"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"PageBlock"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Your playground is loading...")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__[/* LoadingIndicator */ "a"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"PageBlock"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"If it takes too long to load, you might:"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Get to the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/"},"home page"))," and start exploring other playgrounds"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Check out ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/rxjs/of/"},"RxJS of()"))," operator example and build on top of it"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Submit an issue at ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/observable-playground/observable-playground",target:"_blank"},"github project page")," to report this case")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)));});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Playground_PlaygroundWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var ExamplePage=/*#__PURE__*/function(_React$Component){_inherits(ExamplePage,_React$Component);function ExamplePage(){_classCallCheck(this,ExamplePage);return _possibleConstructorReturn(this,_getPrototypeOf(ExamplePage).apply(this,arguments));}_createClass(ExamplePage,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){var props=this.props;return props.libraryName!==nextProps.libraryName||props.exampleName!==nextProps.exampleName||props.exampleCode!==nextProps.exampleCode;}},{key:"render",value:function render(){var _this$props=this.props,libraryName=_this$props.libraryName,exampleName=_this$props.exampleName,exampleCode=_this$props.exampleCode;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,libraryName," ",exampleName," example and playground"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:"Test and explore ".concat(libraryName," \"").concat(exampleName,"\" behavior and other reactive programming code examples in this marble visualisation playground")})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Playground_PlaygroundWrapper__WEBPACK_IMPORTED_MODULE_2__[/* PlaygroundWrapper */ "a"],{key:"PlaygroundWrapper",code:exampleCode}));}}]);return ExamplePage;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(ExamplePage));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(4);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Home/awesome-rxjs-example.js
/* harmony default export */ var awesome_rxjs_example = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take, map } = require('rxjs/operators');\n\nconst msg = 'awesome';\n\ntimer(0, 5)\n  .pipe(\n    take(msg.length),\n    map(index=>msg[index])\n  )\n  .subscribe(rxObserver());");
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/PlaygroundWrapper.js + 1 modules
var PlaygroundWrapper = __webpack_require__(10);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/shared/consts.js
var consts = __webpack_require__(9);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Home/Home.css
var Home = __webpack_require__(85);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(2);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Home/Home.page.js
var Home_page_ExternalLink=function ExternalLink(_ref){var href=_ref.href,text=_ref.text;return external_react_default.a.createElement("a",{href:href,target:"_blank",rel:"noopener noreferrer"},text||href);};var Home_page_HomePage=function HomePage(){return external_react_default.a.createElement("div",{className:"Landing"},external_react_default.a.createElement(lib["Head"],null,external_react_default.a.createElement("title",null,consts["b" /* ROOT_PAGE_TITLE_PREFIX */]),external_react_default.a.createElement("meta",{name:"description",content:"Test your RxJS, kefir.js and bacon.js code and play with Observables in an online sandbox playground"})),external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("h1",null,"Lightning marble visualization for ",external_react_default.a.createElement(router_["Link"],{to:"/rxjs/"},"RxJS"),", ",external_react_default.a.createElement(router_["Link"],{to:"/baconjs/"},"Bacon.js"),", ",external_react_default.a.createElement(router_["Link"],{to:"/kefir/"},"Kefir.js")," reactive programming libraries with a bunch of examples"),external_react_default.a.createElement("blockquote",null,"Test your Observables before deploying them to production!"),external_react_default.a.createElement("p",null,"This tool is aimed at assisting you in understanding observables by playing with them. There are some code examples prebuilt for you in the left menu. Further, you can modify any of them to see how it changes output. Once a snippet has changed \u2014 resulting output would be recalculated ",external_react_default.a.createElement("b",null,"immediately"),"."),external_react_default.a.createElement("h2",null,"Start exploring with these examples:"),external_react_default.a.createElement("h3",null,"RxJS"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/of/"},"of"))," operator"),external_react_default.a.createElement("li",null,"creating Observable ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/fromPromise/"},"from"))," Promise"),external_react_default.a.createElement("li",null,"switching to other Observable using ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/switchMap/"},"switchMap"))," operator")),external_react_default.a.createElement("h3",null,"Bacon"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/baconjs/interval/"},"interval"))," operator")),external_react_default.a.createElement("h3",null,"Kefir"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/kefir/sequentially/"},"sequentially"))," operator")),external_react_default.a.createElement("blockquote",null,"Try comparing ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/interval/"},"RxJS interval")),", ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/kefir/interval/"},"Kefir.js interval")),", and ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/baconjs/interval/"},"Bacon.js interval")),"!"),external_react_default.a.createElement("p",null,external_react_default.a.createElement("b",null,"NOTE:")," currently this tool has following limitations:"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,"timeline is cut to 1000ms"),external_react_default.a.createElement("li",null,"async browser api is not supported")),external_react_default.a.createElement("p",null,"Your feedback is always welcome at ",external_react_default.a.createElement(Home_page_ExternalLink,{text:"github issues section",href:"https://github.com/observable-playground/observable-playground/issues"}),"!"),external_react_default.a.createElement("br",null),external_react_default.a.createElement("p",null,"Inspired by ",external_react_default.a.createElement(Home_page_ExternalLink,{href:'http://rxmarbles.com/',text:'rxmarbles.com'}),", ",external_react_default.a.createElement(Home_page_ExternalLink,{href:'https://www.learnrxjs.io',text:'learnrxjs.io'})," and great talks by ",external_react_default.a.createElement(Home_page_ExternalLink,{href:'http://worrydream.com/',text:'Bret Victor'}))),external_react_default.a.createElement("br",null),external_react_default.a.createElement(PlaygroundWrapper["a" /* PlaygroundWrapper */],{code:awesome_rxjs_example}));};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/pages/index.js
/* harmony default export */ var pages = __webpack_exports__["default"] = (function(){return external_react_default.a.createElement(Home_page_HomePage,null);});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/PlaygroundWrapper.js + 1 modules
var PlaygroundWrapper = __webpack_require__(10);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(4);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(2);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Library/kefir/basic.example.js
/* harmony default export */ var basic_example = ("const { kefirObserver } = require('api/v0.3');\nconst Kefir = require('kefir');\n\nKefir\n  .sequentially(10, [1, 2, 3])\n  .observe(kefirObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Library/kefir/index.js
/* harmony default export */ var kefir = __webpack_exports__["default"] = (function(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(lib["Head"],null,external_react_default.a.createElement("title",null,"Kefir.js playground and examples")),external_react_default.a.createElement("div",{key:"Kefir"},external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("h1",null,"Kefir.js Playground"),external_react_default.a.createElement("blockquote",null,"Kefir \u2014 is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage."),external_react_default.a.createElement("p",null,"To visualize the observables we developed a small API. Provided ",external_react_default.a.createElement("code",null,"api/v0.3")," package has a function ",external_react_default.a.createElement("code",null,"kefirObserver(title: string): observer"),", that you can call to create a ",external_react_default.a.createElement("a",{href:"https://kefirjs.github.io/kefir/#observe",target:"_blank"},"kefir observer"),", which will display its state on the time chart in the right part of the screen."),external_react_default.a.createElement("p",null,"If you are looking for a place to start \u2014 take a look at ",external_react_default.a.createElement(router_["Link"],{to:"/kefir/interval/"},external_react_default.a.createElement("b",null,"interval"))," example.")),external_react_default.a.createElement("br",null),external_react_default.a.createElement(PlaygroundWrapper["a" /* PlaygroundWrapper */],{code:basic_example}),external_react_default.a.createElement("br",null),external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("div",null,external_react_default.a.createElement("h2",null,"External links"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement("a",{href:"https://github.com/kefirjs/kefir",target:"_blank"},"kefirjs/kefir"))," \u2014 Kefir repo"),external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement("a",{href:"https://kefirjs.github.io/kefir/",target:"_blank"},"kefirjs.github.io/kefir"))," \u2014 official docs"))))));});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/PlaygroundWrapper.js + 1 modules
var PlaygroundWrapper = __webpack_require__(10);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(4);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Library/baconjs/basic.example.js
/* harmony default export */ var basic_example = ("const { baconObserver } = require('api/v0.3');\nconst Bacon = require('baconjs');\n\nBacon\n  .interval(5, '+')\n  .take(5)\n  .subscribe(baconObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Library/baconjs/index.js
/* harmony default export */ var baconjs = __webpack_exports__["default"] = (function(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(lib["Head"],null,external_react_default.a.createElement("title",null,"Bacon.js playground and examples")),external_react_default.a.createElement("div",{key:"Bacon"},external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("h1",null,"Bacon.js Playground"),external_react_default.a.createElement("blockquote",null,"A small functional reactive programming lib for JavaScript. Turns your event spaghetti into clean and declarative feng shui bacon, by switching from imperative to functional. "),external_react_default.a.createElement("p",null,"To visualize the observables we developed a small API. Provided ",external_react_default.a.createElement("code",null,"api/v0.3")," package has a function ",external_react_default.a.createElement("code",null,"baconObserver(title: string): f(Event)"),", that you can call to create a ",external_react_default.a.createElement("a",{href:"https://baconjs.github.io/api2.html#observable-subscribe",target:"_blank"},"subscribe function"),", which will display its state on the time chart in the right part of the screen.")),external_react_default.a.createElement("br",null),external_react_default.a.createElement(PlaygroundWrapper["a" /* PlaygroundWrapper */],{code:basic_example}),external_react_default.a.createElement("br",null),external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("div",null,external_react_default.a.createElement("h2",null,"External links"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement("a",{href:"https://baconjs.github.io/",target:"_blank"},"baconjs.github.io"))," \u2014 Official Bacon.Js page"))))));});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/PlaygroundWrapper.js + 1 modules
var PlaygroundWrapper = __webpack_require__(10);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(2);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(4);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Library/rxjs/basic.example.js
/* harmony default export */ var basic_example = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take } = require('rxjs/operators');\n\ntimer(0, 5)\n  .pipe(\n    take(10)\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Library/rxjs/index.js
/* harmony default export */ var rxjs = __webpack_exports__["default"] = (function(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(lib["Head"],null,external_react_default.a.createElement("title",null,"RxJS playground and examples")),external_react_default.a.createElement("div",{key:"RxJS"},external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("h1",null,"RxJS Playground"),external_react_default.a.createElement("blockquote",null,"RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code"),external_react_default.a.createElement("p",null,"In this playground we added both ",external_react_default.a.createElement("a",{href:"https://github.com/ReactiveX/rxjs",target:"_blank"},"RxJS 6")," and a compatibility  ",external_react_default.a.createElement("a",{href:"https://github.com/ReactiveX/rxjs/tree/master/compat",target:"_blank"},"rxjs-compat")," package, that allows you to write code in RxJS 5 style.",external_react_default.a.createElement("br",null),"You can use them via ",external_react_default.a.createElement("code",null,"require('rxjs')")," and ",external_react_default.a.createElement("code",null,"require('rxjs/operators')")," or just ",external_react_default.a.createElement("code",null,"require('rxjs/Rx')")," for rxjs-compat version."),external_react_default.a.createElement("p",null,"To visualize the observables we developed a small API. Provided ",external_react_default.a.createElement("code",null,"api/v0.3")," package has a function ",external_react_default.a.createElement("code",null,"rxObserver(title: string): Observer"),", that you can call to create an ",external_react_default.a.createElement("a",{href:"https://rxjs.dev/api/index/interface/Observer",target:"_blank"},"Rx Observer"),", which will display its state on the time chart in the right part of the screen.")),external_react_default.a.createElement("br",null),external_react_default.a.createElement(PlaygroundWrapper["a" /* PlaygroundWrapper */],{code:basic_example}),external_react_default.a.createElement("br",null),external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("p",null,"If you're only starting to explore RxJS \u2014 we'd advice you to start with Creation section examples, like ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/timer/"},"timer"))," or ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/fromPromise/"},"fromPromise")),"."),external_react_default.a.createElement("p",null,"If you want to get familiar with pipeable operators \u2014 head right to the ",external_react_default.a.createElement("b",null,external_react_default.a.createElement(router_["Link"],{to:"/rxjs/pipe/"},"pipe"))," operator and experiment with it. Be sure to check ",external_react_default.a.createElement("a",{href:"https://rxjs.dev/guide/v6/pipeable-operators",target:"_blank"},"pipeable operators")," official page as well."),external_react_default.a.createElement("div",null,external_react_default.a.createElement("h2",null,"External links"),external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",null,external_react_default.a.createElement("b",null,external_react_default.a.createElement("a",{href:"https://rxjs.dev/",target:"_blank"},"rxjs.dev"))," \u2014 official website for RxJS 6"),external_react_default.a.createElement("li",null,external_react_default.a.createElement("a",{href:"https://www.learnrxjs.io/",target:"_blank"},"learnrxjs.io")," \u2014 clear examples, explanations, and resources for rxjs"),external_react_default.a.createElement("li",null,external_react_default.a.createElement("a",{href:"https://rxviz.com/",target:"_blank"},"rxviz.com")," \u2014 animated playground for rx observables"))))));});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(2);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(4);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Gist/Gists.page.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Gists_page_GistsPageComponent=/*#__PURE__*/function(_Component){_inherits(GistsPageComponent,_Component);function GistsPageComponent(props){var _this;_classCallCheck(this,GistsPageComponent);_this=_possibleConstructorReturn(this,_getPrototypeOf(GistsPageComponent).call(this,props));_this.onSubmit=_this.onSubmit.bind(_assertThisInitialized(_this));return _this;}_createClass(GistsPageComponent,[{key:"onSubmit",value:function onSubmit(event){event.preventDefault();var gistId=event.target.gistId.value;if(!gistId){return;}Object(router_["navigate"])('/gist/'+gistId);}},{key:"render",value:function render(){return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(lib["Head"],null,external_react_default.a.createElement("title",null,"Load a gist")),external_react_default.a.createElement("div",{key:"GistsPage",className:"GistsPage PageBlock"},external_react_default.a.createElement("h1",null,"Load a gist and share it with others"),external_react_default.a.createElement("form",{target:"#",onSubmit:this.onSubmit},external_react_default.a.createElement("input",{placeholder:"Gist ID",name:"gistId",autoComplete:"off"}),external_react_default.a.createElement("button",{type:"submit"},"Open")),external_react_default.a.createElement("p",null,external_react_default.a.createElement("i",null,"https://gist.github.com/name/",external_react_default.a.createElement("b",null,"Gist_ID")))));}}]);return GistsPageComponent;}(external_react_["Component"]);
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/pages/gist.js
/* harmony default export */ var gist = __webpack_exports__["default"] = (function(){return external_react_default.a.createElement(Gists_page_GistsPageComponent,null);});

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("lodash/groupBy");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("lodash/values");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("lodash/entries");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("save-svg-as-png");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone/babel");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("baconjs");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("kefir");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(58);
module.exports = __webpack_require__(63);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(28).default;

var _require = __webpack_require__(12),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/kos/projects/observable-playground/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(28).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(30),
    templates = _require.default,
    notFoundTemplate = _require.notFoundTemplate;

var _require2 = __webpack_require__(12),
    registerTemplates = _require2.registerTemplates;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/kos/projects/observable-playground/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(30),
        templates = _require3.default,
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

exports.default = requireUniversalModule;

var _utils = __webpack_require__(23);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 18,
	"./": 18,
	"./index": 18,
	"./index.js": 18
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 60;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
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
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(19));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
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

var App = __webpack_require__(86).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("promise-polyfill");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(12);

var _Spinner = _interopRequireDefault(__webpack_require__(24));

var _StaticInfo = __webpack_require__(19);

var _Routes = __webpack_require__(34);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
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
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath;
      var routeError = _.routeErrorByPath[routePath];
      var routeInfo = routeError ? _.routeInfoByPath['404'] : _.routeInfoByPath[routePath]; // If there was an error reported for this path, throw an error
      // unless there is data for the 404 page

      if (routeError && (!routeInfo || !routeInfo.data)) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo and its shared data yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (shouldLoadData(routeInfo)) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)
      // and merge it with the shared data


      var fullData = _objectSpread({}, routeInfo.data, routeInfo.sharedData);

      return children(fullData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));

function shouldLoadData(routeInfo) {
  if (!routeInfo || !routeInfo.data) {
    return true;
  }

  return shouldLoadSharedData(routeInfo);
}

function shouldLoadSharedData(routeInfo) {
  return hasPropHashes(routeInfo) && !routeInfo.sharedData;
}

function hasPropHashes(routeInfo) {
  return routeInfo.sharedHashesByProp && Object.keys(routeInfo.sharedHashesByProp).length > 0;
}

var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadData, "shouldLoadData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadSharedData, "shouldLoadSharedData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(hasPropHashes, "hasPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(21));

var _Spinner = _interopRequireDefault(__webpack_require__(24));

var _StaticInfo = __webpack_require__(19);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(15);

var _ = __webpack_require__(12);

var _Visibility = _interopRequireDefault(__webpack_require__(29));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(2);

var _ = __webpack_require__(12);

var _utils = __webpack_require__(15);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(70));

var _HashScroller = _interopRequireDefault(__webpack_require__(71));

var _StaticInfo = __webpack_require__(19);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath,
      staticInfo = _ref2.staticInfo;
  children = _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
  return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
    url: (0, _utils.makePathAbsolute)(staticInfo.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children) : children;
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _.registerTemplateForPath)(path, template); // For a 404 route we will register the current route as invalid

      if (path === '404') {
        var currentPath = (0, _.getCurrentRoutePath)(); // As long as we didn't navigate to the 404.html page directly

        if (currentPath !== '404') {
          _.routeErrorByPath[currentPath] = true;
          _.templateErrorByPath[currentPath] = true;
        }
      }
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(15);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(33));

var _Location = _interopRequireDefault(__webpack_require__(35));

var _scrollTo = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".Menu {\n  color: #757575; }\n  .Menu hr {\n    border-width: 0px;\n    border-bottom: 1px solid #c5c5c5; }\n  .Menu__Link {\n    padding: 0.25rem 0;\n    display: block;\n    color: inherit;\n    text-decoration: none; }\n    @media screen and (max-width: 779px) {\n      .Menu__Link {\n        padding: 0.333rem 0; } }\n    .Menu__Link:hover, .Menu__Link.active {\n      color: #04a9f4; }\n  .Menu__examples {\n    display: block;\n    margin: 0;\n    padding: 0 0 1rem 0; }\n  .Menu__Gist {\n    color: #757575; }\n  .Menu__library {\n    display: block; }\n    .Menu__library-name {\n      position: relative;\n      color: #757575;\n      font-weight: bold; }\n    .Menu__library-contents {\n      display: block;\n      margin: 0;\n      padding: 0; }\n    .Menu__library-version {\n      position: absolute;\n      right: 0;\n      top: 0.25rem;\n      font-weight: normal;\n      font-size: 0.6rem;\n      border: 1px solid #c5c5c5;\n      padding: 0.2rem;\n      border-radius: 0.1rem; }\n  .Menu__group {\n    display: block;\n    padding: 0 0 0.5rem 0; }\n    .Menu__group-name {\n      color: #c5c5c5;\n      padding: 0.25rem 0;\n      display: block; }\n      @media screen and (max-width: 779px) {\n        .Menu__group-name {\n          padding: 0.333rem 0; } }\n    .Menu__group-contents {\n      display: block;\n      margin: 0;\n      padding: 0; }\n  .Menu__item {\n    display: block;\n    color: #757575;\n    text-decoration: none;\n    white-space: nowrap; }\n    .Menu__item:hover {\n      color: #04a9f4; }\n", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Imports
exports.i(__webpack_require__(74), "");

// Module
exports.push([module.i, "p {\n  padding: 0.5rem 0; }\n\n@media screen and (max-width: 779px) {\n  .DangerousContentWidth {\n    word-break: break-all; } }\n\n.PageBlock {\n  display: block;\n  padding: 0 1rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: white;\n  border: 1px solid #f1f1f1;\n  font-size: 14px; }\n  .PageBlock a {\n    color: #00a7f7;\n    text-decoration: none; }\n    .PageBlock a:hover {\n      text-decoration: underline; }\n  .PageBlock blockquote {\n    display: block;\n    color: #757575;\n    padding: 0.25rem 0.5rem;\n    border-left: 0.25rem solid #c5c5c5;\n    margin: 0;\n    font-style: italic; }\n\nbody {\n  font-family: sans-serif;\n  background: #fafafa;\n  font-size: 16px; }\n\n.App {\n  max-width: 1600px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: auto; }\n  @media screen and (min-width: 780px) {\n    .App {\n      padding: 0 2rem; } }\n  .App__header {\n    display: -ms-flexbox;\n    display: flex;\n    padding: 1rem 10px 0.5rem 10rem;\n    line-height: 1.5rem;\n    vertical-align: middle; }\n    @media screen and (max-width: 779px) {\n      .App__header {\n        font-size: 1.2rem;\n        padding: 0.75rem 0.5rem 0.25rem; } }\n  .App__header-spring {\n    -ms-flex-positive: 1;\n        flex-grow: 1; }\n  .App__MobileMenuSwitch {\n    padding: 2px;\n    background: none;\n    border: none;\n    padding-right: 0.5rem;\n    margin-right: 1rem; }\n    @media screen and (min-width: 780px) {\n      .App__MobileMenuSwitch {\n        display: none; } }\n    .App__MobileMenuSwitch.active {\n      color: #04a9f4; }\n  .App__logo {\n    font-family: sans-serif;\n    color: #757575;\n    text-decoration: none; }\n    .App__logo_main {\n      font-weight: bold; }\n    .App__logo:hover .App__logo_main, .App__logo.active .App__logo_main {\n      color: #04a9f4; }\n  .App__twitter-link {\n    color: #757575;\n    margin-right: 1rem; }\n    .App__twitter-link:hover {\n      color: #1da1f2; }\n    @media screen and (max-width: 779px) {\n      .App__twitter-link {\n        padding: 0 0.25rem; } }\n  .App__github-link {\n    color: #757575; }\n    @media screen and (max-width: 779px) {\n      .App__github-link {\n        padding: 0 0.25rem; } }\n    .App__github-link:hover {\n      color: #000; }\n  .App__body {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n    overflow: auto; }\n  .App__contents {\n    -ms-flex-positive: 1;\n        flex-grow: 1; }\n    .App__contents.hidden {\n      display: none; }\n  @media screen and (max-width: 779px) {\n    .App__menu {\n      display: none;\n      font-size: 1.2rem;\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      top: 3rem;\n      background: #fafafa;\n      overflow: auto;\n      z-index: 1000;\n      padding: 0.5rem 1rem 2rem; }\n      .App__menu.visible {\n        display: block; } }\n  @media screen and (min-width: 780px) {\n    .App__menu {\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n      -ms-flex-preferred-size: 10rem;\n          flex-basis: 10rem;\n      max-width: 10rem;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding-right: 1rem;\n      padding-left: 0.25rem; } }\n  .App__footer {\n    padding: 0.5rem;\n    font-size: 0.7rem;\n    text-align: right;\n    color: #c5c5c5; }\n", ""]);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 0.8rem; }\n  .lds-ellipsis span {\n    position: absolute;\n    top: 0;\n    width: 0.8rem;\n    height: 0.8rem;\n    border-radius: 50%;\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n            animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n    .lds-ellipsis span:nth-child(1) {\n      background: #03a9f4;\n      left: 6px;\n      -webkit-animation: lds-ellipsis1 0.6s infinite;\n              animation: lds-ellipsis1 0.6s infinite; }\n    .lds-ellipsis span:nth-child(2) {\n      background: #ffeb3b;\n      left: 6px;\n      -webkit-animation: lds-ellipsis2 0.6s infinite;\n              animation: lds-ellipsis2 0.6s infinite; }\n    .lds-ellipsis span:nth-child(3) {\n      background: #8bc34a;\n      left: 26px;\n      -webkit-animation: lds-ellipsis2 0.6s infinite;\n              animation: lds-ellipsis2 0.6s infinite;\n      z-index: 1; }\n    .lds-ellipsis span:nth-child(4) {\n      background: #ff9800;\n      left: 45px;\n      -webkit-animation: lds-ellipsis3 0.6s infinite;\n              animation: lds-ellipsis3 0.6s infinite; }\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0); } }\n", ""]);



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".SSRPlayground__Pre {\n  min-height: 7rem;\n  padding: 6px 0 3em 0.5rem;\n  background: #272722;\n  color: #f8f8f2;\n  border-left: 2rem #2f3129 solid;\n  margin: 0; }\n\n.SSRPlayground__Code {\n  font-size: 0.75rem;\n  font-family: Monaco, Menlo, \"Ubuntu Mono\", Consolas, source-code-pro, monospace;\n  white-space: pre-wrap; }\n\n.SSRPlayground__Loader {\n  display: block;\n  text-align: center; }\n", ""]);



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".EditorComponent.ace-monokai {\n  border-top: 6px solid #272822;\n  padding-bottom: 3rem;\n  min-height: 7rem; }\n", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/javascript");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("brace/theme/monokai");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".ErrorComponent {\n  padding: 0.25rem 0.5rem;\n  background: #ffaa00;\n  font-family: monospace;\n  font-size: 0.86rem;\n  white-space: pre-wrap;\n  margin-bottom: 1rem; }\n", ""]);



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".TimeLineChart {\n  min-height: 7rem;\n  position: relative;\n  padding-bottom: 3rem; }\n  @media screen and (max-width: 779px) {\n    .TimeLineChart {\n      margin-bottom: 1rem; } }\n  @media screen and (min-width: 780px) {\n    .TimeLineChart {\n      margin-left: 0.5rem; } }\n  .TimeLineChart:hover .TimeLineChart__Download {\n    opacity: 1;\n    -webkit-transition: 300;\n    -o-transition: 300;\n    transition: 300; }\n  .TimeLineChart__Download {\n    opacity: 0.25;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    border: 0;\n    background: none;\n    color: #c5c5c5; }\n    .TimeLineChart__Download:hover {\n      color: #999; }\n    .TimeLineChart__Download:active {\n      margin-bottom: -1px; }\n", ""]);



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".Playground {\n  display: -ms-flexbox;\n  display: flex; }\n  @media screen and (min-width: 780px) {\n    .Playground {\n      width: 100%; }\n      .Playground__editor {\n        max-height: 90vh;\n        overflow: auto;\n        -ms-scroll-chaining: none;\n            overscroll-behavior: contain;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n        -ms-flex-preferred-size: 50%;\n            flex-basis: 50%;\n        max-width: 450px; }\n      .Playground__chart {\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n        -ms-flex-preferred-size: 50%;\n            flex-basis: 50%;\n        -ms-flex-positive: 1;\n            flex-grow: 1; } }\n  @media screen and (max-width: 779px) {\n    .Playground {\n      width: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0 0.5rem;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse; }\n      .Playground__chart {\n        margin-top: 1rem; } }\n", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".GistFile {\n  margin: 1em 0; }\n  .GistFile__Name {\n    color: #757575;\n    padding-bottom: 0.5em; }\n    @media screen and (max-width: 779px) {\n      .GistFile__Name {\n        padding: 0 0.5rem; } }\n  .GistFile__Content {\n    font-family: monospace; }\n", ""]);



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".Gist__Header {\n  display: block; }\n  @media screen and (max-width: 779px) {\n    .Gist__Header {\n      padding: 0.5rem 0.5rem 0; } }\n  .Gist__Header__Main {\n    padding-left: 54px; }\n\n.Gist__Path {\n  color: #333; }\n\n.Gist__UserName {\n  color: #333;\n  text-decoration: none; }\n  .Gist__UserName:hover {\n    color: #04a9f4; }\n\n.Gist__GistName {\n  text-decoration: none;\n  font-weight: bold;\n  color: #04a9f4; }\n\n.Gist__Description {\n  padding-top: 0.5rem;\n  color: #333; }\n\n.Gist__Avatar {\n  float: left;\n  height: 48px;\n  width: 48px;\n  border-radius: 2px;\n  overflow: hidden; }\n  .Gist__Avatar > img {\n    max-width: 100%;\n    max-height: 100%; }\n", ""]);



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".Landing {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse; }\n", ""]);



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/core/mock-delayed-execution/index.js + 1 modules
var mock_delayed_execution = __webpack_require__(25);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(26);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(4);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(2);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/interval.js
/* harmony default export */ var interval = ("const { rxObserver } = require('api/v0.3');\nconst { interval } = require('rxjs');\nconst { take } = require('rxjs/operators');\n\ninterval(5).pipe(\n    take(10)\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/from.js
/* harmony default export */ var from = ("const { rxObserver } = require('api/v0.3');\nconst { from } = require('rxjs');\n\n// from Array\nfrom([ 5, 10, 20 ])\n  .subscribe(rxObserver('from([5, 10, 20])'));\n\n// from string\nfrom('Hello')\n  .subscribe(rxObserver(`from('Hello')`));\n\n// NOTE: also check the `fromPromise` example\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/fromPromise.js
/* harmony default export */ var fromPromise = ("const { rxObserver } = require('api/v0.3');\nconst { from } = require('rxjs');\n\nconst promise = new Promise((resolve, reject)=>{\n  setTimeout(() => resolve('done'), 10);\n});\n\nfrom(promise)\n  .subscribe(rxObserver('from(promise)'));\n\n// NOTE: also check the `from` example\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/timer.js
/* harmony default export */ var timer = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take } = require('rxjs/operators');\n\n\n// Will emit once\ntimer(10)\n  .subscribe(rxObserver('timer(10)'));\n\n// Will start emiting after 10ms timeout\n// with 5ms interval\ntimer(10, 5).pipe(\n    take(4)\n  )\n  .subscribe(rxObserver('timer(10, 5)'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/of.js
/* harmony default export */ var of = ("const { rxObserver } = require('api/v0.3');\nconst { of } = require('rxjs');\n\nof(1)\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/constructor.js
/* harmony default export */ var creation_constructor = ("const { rxObserver } = require('api/v0.3');\nconst { Observable } = require('rxjs/Rx');\n\n\nconst source$ = new Observable(observer=>{\n  let index = 0;\n  const id = setInterval(()=>{\n    observer.next(index++);\n  }, 10);\n  \n  return ()=>{\n    clearInterval(id);\n  };\n});\n\nsource$\n  .take(5)\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/defer.js
/* harmony default export */ var defer = ("const { rxObserver } = require('api/v0.3');\nconst { defer, of } = require('rxjs');\n\n// decides later what observable to return\nconst source$ = defer(()=>{\n  if (Date.now() < 3) {\n    return of('\uD83D\uDC26');\n  }\n\n  return of('\uD83E\uDD89');\n});\n\n// subsctibe at T0\nsource$.subscribe(rxObserver('Early bird'));\n\n// delayed subscription\nsetTimeout(()=>{\n  source$.subscribe(rxObserver('Night owl'));\n}, 5);\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/creation/iif.js
/* harmony default export */ var iif = ("const { rxObserver } = require('api/v0.3');\nconst { iif, of } = require('rxjs');\n\n// decides later which observable to return\nconst source$ = iif(\n  ()=> Date.now() < 3 // predicate\n  , of('\uD83D\uDC26')          // true\n  , of('\uD83E\uDD89')          // false\n);\n\n// subsctibe at T0\nsource$.subscribe(rxObserver('Early bird'));\n\n// delayed subscription\nsetTimeout(()=>{\n  source$.subscribe(rxObserver('Night owl'));\n}, 5);\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/combination/zip.js
/* harmony default export */ var zip = ("const { rxObserver } = require('api/v0.3');\nconst { timer, from } = require('rxjs');\nconst { zip, take } = require('rxjs/operators');\n\n\nconst alphabet = 'abcdefghijklmnopqrstuvwxyz';\nconst alphabet$ = from(alphabet);\n\ntimer(0, 5).pipe(\n    zip(alphabet$, (digit, letter)=>digit+letter),\n    take(10)\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/combination/forkJoin.js
/* harmony default export */ var forkJoin = ("const { rxObserver } = require('api/v0.3');\nconst { timer, forkJoin } = require('rxjs');\nconst { mapTo, take } = require('rxjs/operators');\n\n\nconst a$ = timer(10).pipe(mapTo('a'));\nconst b$ = timer(0, 10).pipe(take(3));\n\nconst result$ = forkJoin(a$, b$);\n\na$.subscribe(rxObserver('a$'));\nb$.subscribe(rxObserver('b$'));\nresult$.subscribe(rxObserver('forkJoin(a$, b$)'));");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/combination/combineLatest.js
/* harmony default export */ var combineLatest = ("const { rxObserver } = require('api/v0.3');\nconst { timer, combineLatest } = require('rxjs');\nconst { take } = require('rxjs/operators');\n\n\nconst a$ = timer(0, 10).pipe(\n    take(5)\n  );\n\nconst b$ = timer(0, 4).pipe(\n    take(7)\n  );\n\nconst result$ = combineLatest(a$, b$);\n\na$.subscribe(rxObserver('a$'));\nb$.subscribe(rxObserver('b$'));\nresult$.subscribe(rxObserver('result$'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/filter.js
/* harmony default export */ var filter = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { filter, take } = require('rxjs/operators');\n\n\nconst source$ = timer(0, 5).pipe(\n    take(4)\n  );\n\nconst result$ = source$.pipe(\n    filter(x => x % 2)\n  );\n\nsource$.subscribe(rxObserver());\nresult$.subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/find.js
/* harmony default export */ var find = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { find, take } = require('rxjs/operators');\n\n\nconst source$ = timer(0, 5).pipe(\n    take(4)\n  );\n\nconst result$ = source$.pipe(\n    find(x => x > 1)\n  );\n\nsource$.subscribe(rxObserver());\nresult$.subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/buffer.js
/* harmony default export */ var buffer = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { buffer, take } = require('rxjs/operators');\n\n\nconst source$ = timer(0, 3).pipe(\n    take(10)\n  );\n\nconst trigger$ = timer(0, 7).pipe(\n    take(5)\n  );\n\nconst buffered$ = source$.pipe(\n    buffer(trigger$)\n  );\n\nsource$.subscribe(rxObserver('source'));\ntrigger$.subscribe(rxObserver('trigger'));\nbuffered$.subscribe(rxObserver('buffered'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/mergeMap.js
/* harmony default export */ var mergeMap = ("const { rxObserver, palette } = require('api/v0.3');\nconst { Observable } = require('rxjs/Rx');\n\n// stream for coloring\nconst palette$ = Observable.from(palette);\n\nconst source$ = fromDelayed([ 5, 10, 20 ])\n  // get color for each item\n  .zip(palette$, Marble);\n\nconst mergeMap$ = source$\n  .mergeMap(x=> Observable\n    .timer(0, 3)\n    .take(3)\n    // inherit color from the source$ stream\n    .map(y => Marble(y, x.color)));\n\nsource$.subscribe(rxObserver());\nmergeMap$.subscribe(rxObserver());\n\n\n// helpers\n// creates a colored Marble\nfunction Marble(value,color) {\n  return {\n    valueOf: ()=>value\n    , color\n  };\n}\n\n// like .from, but items are delayed by their value\nfunction fromDelayed (arr) {\n  return Observable\n    .from(arr)\n    .delayWhen(x=>Observable.timer(x));\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/switchMap.js
/* harmony default export */ var switchMap = ("const { rxObserver, palette } = require('api/v0.3');\nconst { Observable } = require('rxjs/Rx');\n\n// stream for coloring\nconst palette$ = Observable.from(palette);\n\nconst source$ = fromDelayed([ 5, 10, 20 ])\n  // get color for each item\n  .zip(palette$, Marble);\n\nconst switchMap$ = source$\n  .switchMap(x=> Observable\n    .timer(0, 3)\n    .take(5)\n    // inherit color from the source$ stream\n    .map(y=>Marble(y, x.color)));\n\nsource$.subscribe(rxObserver());\nswitchMap$.subscribe(rxObserver());\n\n\n// helpers\n// creates a colored Marble\nfunction Marble(value,color) {\n  return {\n    valueOf: ()=>value\n    , color\n  };\n}\n\n// like .from, but items are delayed by their value\nfunction fromDelayed (arr) {\n  return Observable\n    .from(arr)\n    .delayWhen(x=>Observable.timer(x));\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/exhaustMap.js
/* harmony default export */ var exhaustMap = ("const { rxObserver, palette } = require('api/v0.3');\nconst { Observable } = require('rxjs/Rx');\n\n// stream for coloring\nconst palette$ = Observable.from(palette);\n\nconst source$ = fromDelayed([ 5, 10, 20 ])\n  // get color for each item\n  .zip(palette$, Marble);\n\nconst exhaustMap$ = source$\n  .exhaustMap(x=> Observable\n    .timer(0, 3)\n    .take(4)\n    // inherit color from the source$ stream\n    .map(y=>Marble(y, x.color)));\n\n\nsource$.subscribe(rxObserver());\nexhaustMap$.subscribe(rxObserver());\n\n\n// helpers\n// creates a colored Marble\nfunction Marble(value,color) {\n  return {\n    valueOf: ()=>value\n    , color\n  };\n}\n\n// like .from, but items are delayed by their value\nfunction fromDelayed (arr) {\n  return Observable\n    .from(arr)\n    .delayWhen(x=>Observable.timer(x));\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/concatMap.js
/* harmony default export */ var concatMap = ("const { rxObserver, palette } = require('api/v0.3');\nconst { Observable } = require('rxjs/Rx');\n\n// stream for coloring\nconst palette$ = Observable.from(palette);\n\nconst source$ = fromDelayed([ 5, 10, 20 ])\n  // get color for each item\n  .zip(palette$, Marble);\n\nconst concatMap$ = source$\n  .concatMap(x=> Observable\n    .interval(5)\n    .take(3)\n    // inherit color from the source$ stream\n    .map(y=>Marble(y, x.color)));\n\n\nsource$.subscribe(rxObserver());\nconcatMap$.subscribe(rxObserver());\n\n\n// helpers\n// creates a colored Marble\nfunction Marble(value,color) {\n  return {\n    valueOf: ()=>value\n    , color\n  };\n}\n\n// like .from, but items are delayed by their value\nfunction fromDelayed (arr) {\n  return Observable\n    .from(arr)\n    .delayWhen(x=>Observable.timer(x));\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/windowToggle.js
/* harmony default export */ var windowToggle = ("const { rxObserver } = require('api/v0.3');\nconst { timer, merge, Subject } = require('rxjs');\nconst { windowToggle, take, flatMap, mapTo } = require('rxjs/operators');\n\n\nconst source$ = timer(0, 10).pipe(take(10));\n\nconst windowOn$ = new Subject();\nconst windowOff$ = new Subject();\n\nconst result$ = source$.pipe(\n  // filter values between on-off pairs\n  windowToggle(\n    windowOn$,\n    ()=>windowOff$\n  ),\n\n  // flattern window values\n  flatMap(v=>v)\n);\n\n// trigger ONs and OFFs\nwindowOn(15);\nwindowOff(35);\n\nwindowOn(75);\nwindowOff(85);\n\n\n// subscriptions\nsource$.subscribe(rxObserver('source'));\nresult$.subscribe(rxObserver('result'));\nmerge(\n    windowOn$.pipe(mapTo('on')),\n    windowOff$.pipe(mapTo('off'))\n  )\n  .subscribe(rxObserver('switch'));\n\n\n// helpers\nfunction windowOn(delay){\n  return setTimeout(()=>{\n    windowOn$.next(void 0);\n  }, delay);\n}\n\nfunction windowOff(delay){\n  return setTimeout(()=>{\n    windowOff$.next(void 0);\n  }, delay);\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/expand.js
/* harmony default export */ var expand = ("const { rxObserver } = require('api/v0.3');\nconst { of, timer, EMPTY } = require('rxjs');\nconst { expand, mapTo } = require('rxjs/operators');\n\nof(1).pipe(\n    expand(value =>\n      value < 5\n      ? timer(5).pipe(mapTo(++value))\n      : EMPTY\n    )\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/transformation/toArray.js
/* harmony default export */ var toArray = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take, toArray } = require('rxjs/operators');\n\n\n// create a timer with 3 events\nconst source$ = timer(0, 5).pipe(\n    take(3)\n  );\n\n// collapse all events into one array\nconst result$ = source$.pipe(\n    toArray()\n  );\n\nsource$.subscribe(rxObserver('timer(0, 10).take(4)'));\nresult$.subscribe(rxObserver('.toArray()'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/error-handling/throwError.js
/* harmony default export */ var throwError = ("const { rxObserver } = require('api/v0.3');\nconst { timer, throwError } = require('rxjs');\nconst { switchMap } = require('rxjs/operators');\n\ntimer(10)\n  .pipe(\n    switchMap(()=>\n      throwError('Err!')\n    )\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/error-handling/catch.js
/* harmony default export */ var error_handling_catch = ("const { rxObserver } = require('api/v0.3');\nconst { timer, throwError, of } = require('rxjs');\nconst { switchMap, catchError } = require('rxjs/operators');\n\nconst error$ = timer(5).pipe(\n    switchMap(() => throwError('oh'))\n  );\n  \nconst catch$ = error$.pipe(\n    catchError(err => of(err))\n  );\n\n\nerror$.subscribe(rxObserver());\ncatch$.subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/error-handling/retry.js
/* harmony default export */ var retry = ("const { rxObserver, palette } = require('api/v0.3');\nconst { timer, from } = require('rxjs');\nconst { zip, map, retry } = require('rxjs/operators');\n\nconst error$ = timer(0, 5).pipe(\n    map(x=>{\n      if (x>2) { throw 'Bam!' }\n      return x;\n    })\n  );\n\n// same error$ stream, just frozen colors\nconst errorColorized$ = error$.pipe(\n    zip(from(palette), Marble)\n  );\n\n// retry 2 times\nconst retry$ = errorColorized$.pipe(\n    retry(2)\n  );\n\n\nerror$.subscribe(rxObserver());\nretry$.subscribe(rxObserver());\n\n\n// helpers\n// creates a colored Marble\nfunction Marble(value,color) {\n  return {\n    valueOf: ()=>value\n    , color\n  };\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/error-handling/retryWhen.js
/* harmony default export */ var retryWhen = ("const {rxObserver} = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { map, tap, retryWhen, delayWhen } = require('rxjs/operators');\n\nconst source$ =\n  timer(0, 100).pipe(\n    map(val => {\n      if (val == 1) {\n        throw 'Err';\n      }\n      return val;\n    })\n  );\n\nconst result$ = source$.pipe(\n    retryWhen(errors =>\n      // here Errors are just events\n      errors.pipe(\n        // show error messages thread\n        tap(rxObserver('Error messages')),\n        // will restart with increasing delay\n        delayWhen((_, index) => timer(index * 50))\n      )\n    )\n);\n\nsource$.subscribe(rxObserver('source$'));\nresult$.subscribe(rxObserver('result$'));\n\n// a modification of\n// https://www.learnrxjs.io/operators/error_handling/retrywhen.html\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/error-handling/onErrorResumeNext.js
/* harmony default export */ var onErrorResumeNext = ("const { rxObserver, palette } = require('api/v0.3');\nconst { timer, onErrorResumeNext, throwError, of } = require('rxjs');\nconst { map, take, concat, ignoreElements } = require('rxjs/operators');\n\n\nconst failTimer = timer(5).pipe(\n    ignoreElements(),\n    concat(throwError('Ouch!'))\n  );\n\nconst fineTimer = timer(5).pipe(\n    ignoreElements(),\n    concat(of('Ok!'))\n  );\n\nconst strategicTimer = onErrorResumeNext(\n    failTimer,\n    fineTimer\n  );\n\nfailTimer.subscribe(rxObserver('fail timer'));\nfineTimer.subscribe(rxObserver('fine timer'));\nstrategicTimer.subscribe(rxObserver('strategic'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/multicasting/share.js
/* harmony default export */ var share = ("const { rxObserver, palette } = require('api/v0.3');\nconst { Observable } = require('rxjs/Rx');\n\nconst palette$ = Observable.from(palette);\n\nconst source$ = Observable.timer(0, 5)\n  // add color to items\n  .zip(palette$, Marble);\n\nconst shared$ = source$.share();\n\n// creating observers for source$\nconst a = rxObserver('source$');\nconst b = rxObserver('delayed subscription');\nsource$.take(5).subscribe(a);\n\n// creating observers for shared$\nconst c = rxObserver('shared$');\nconst d = rxObserver('delayed subscription');\nshared$.take(5).subscribe(c);\n\n// delayed subscriptions\nsetTimeout(()=>{\n  source$.take(5).subscribe(b);\n  shared$.take(5).subscribe(d);\n}, 10);\n\n\nfunction Marble(value,color) {\n  return {\n    valueOf: ()=>value\n    , color\n  };\n}\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/tap.js
/* harmony default export */ var tap = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { tap, take } = require('rxjs/operators');\n\ntimer(0, 5)\n  .pipe(\n    take(10),\n    tap(v => console.log('tap', v))\n  )\n  .subscribe(rxObserver('tap()'));\n\n\n// Compat version with .do\nconst { Observable } = require('rxjs/Rx');\nObservable\n  .timer(0, 5)\n  .take(10)\n  .do(v => console.log('do', v))\n  .subscribe(rxObserver('.do()'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/finalize.js
/* harmony default export */ var finalize = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { finalize } = require('rxjs/operators');\n\ntimer(5)\n  .pipe(\n    finalize(()=>\n      console.log(`Finished @ ${ Date.now() }ms`)\n    )\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/timeInterval.js
// https://rxjs-dev.firebaseapp.com/api/operators/timeInterval
/* harmony default export */ var timeInterval = ("\nconst { rxObserver } = require('api/v0.3');\nconst { interval, merge } = require('rxjs');\nconst { timeInterval, take, map } = require('rxjs/operators');\n\n// Indicates time passed since previous value\n\nmerge(\n  interval(5),\n  interval(7)\n)\n  .pipe(\n    take(10),\n    timeInterval(),\n    map(({ interval }) => `+${interval}`)\n  )\n  .subscribe(rxObserver(''));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/delay.js
/* harmony default export */ var delay = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { delay, take } = require('rxjs/operators');\n\n// basic timer\nconst timer$ = timer(0, 10)\n  .pipe(\n    take(5)\n  );\n\n// same timer, values delayed by 15ms\nconst delayed$ = timer$.pipe(\n    delay(15)\n  );\n\ntimer$.subscribe(rxObserver('Basic timer'));\ndelayed$.subscribe(rxObserver('Delayed by 15ms'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/delayWhen.js
// https://rxjs.dev/api/operators/delayWhen
/* harmony default export */ var delayWhen = ("const { rxObserver } = require('api/v0.3');\nconst { from, timer } = require('rxjs');\nconst { delayWhen } = require('rxjs/operators');\n\nfrom([ 0, 15, 20, 25, 5, 10 ])\n  .pipe(\n    delayWhen(x => timer(x))\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/dematerialize.js
/* harmony default export */ var dematerialize = ("const { rxObserver } = require('api/v0.3');\nconst { timer, throwError, Notification } = require('rxjs');\nconst { switchMap, materialize, dematerialize, delay, map } = require('rxjs/operators');\n\n\nconst source$ = timer(5).pipe(\n  switchMap(() => throwError('Err!'))\n);\n\nconst result$ = source$.pipe(\n  // turn all events on stream into Notifications\n  materialize(),\n  // delay error by 5ms\n  delay(5),\n  // turn error into a value\n  map(n => new Notification('N', n.error, undefined)),\n  // turn Notifications back to events on stream\n  dematerialize()\n);\n\nsource$.subscribe(rxObserver('source$'));\nresult$.subscribe(rxObserver('result$'));\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/repeat.js
// https://rxjs-dev.firebaseapp.com/api/operators/repeat
/* harmony default export */ var repeat = ("\nconst { rxObserver } = require('api/v0.3');\nconst { timer, iif, of } = require('rxjs');\nconst { repeat, delay } = require('rxjs/operators');\n\n// repeat:\n// resubscribe when source stream completes\n\n// basic example\ntimer(5)\n  .pipe(\n    repeat(5)\n  )\n  .subscribe(rxObserver());\n\n// when source stream completes -- repeat\n// subscribes again and gets a new stream\niif(\n  () => Date.now() < 10\n  , of('0..10')\n  , of('10+')\n)\n  .pipe(\n    delay(5),\n    repeat(5)\n  )\n  .subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/timeout.js
/* harmony default export */ var timeout = ("const { rxObserver } = require('api/v0.3');\nconst { from, timer } = require('rxjs');\nconst { delayWhen, timeout } = require('rxjs/operators');\n\nconst source$ = from([ 0, 10, 20, 45 ])\n  .pipe(\n    delayWhen(x => timer(x))\n  );\n\nconst result$ = source$.pipe(\n  timeout(20)\n);\n\nsource$.subscribe(rxObserver());\nresult$.subscribe(rxObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/utility/pipe.js
/* harmony default export */ var pipe = ("const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { filter,take } = require('rxjs/operators');\n\n\ntimer(0, 10)\n  .pipe(\n    take(10),\n    filter(x => x % 2)\n  )\n  .subscribe(rxObserver('Odd'));\n");
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/package.json
var observable_playground_package = __webpack_require__(13);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/rxjs/index.js
// Creation
// Combination
// Transformation
// Error handling
// Multicasting
// Utility
// import pausableBuffer from  './recipes/pausableBuffer';
// read the lib version
var LIB_VERSION=observable_playground_package["a" /* dependencies */].rxjs;var examples={interval:interval,timer:timer,'from':from,'fromPromise':fromPromise,'of':of,defer:defer,iif:iif,'constructor':creation_constructor,filter:filter,find:find,buffer:buffer,mergeMap:mergeMap,switchMap:switchMap,exhaustMap:exhaustMap,concatMap:concatMap,windowToggle:windowToggle,expand:expand,toArray:toArray,throwError:throwError,'catch':error_handling_catch,retry:retry,retryWhen:retryWhen,onErrorResumeNext:onErrorResumeNext,share:share,zip:zip,forkJoin:forkJoin,combineLatest:combineLatest,tap:tap,finalize:finalize,timeInterval:timeInterval,delay:delay,delayWhen:delayWhen,dematerialize:dematerialize,repeat:repeat,timeout:timeout,pipe:pipe// , 'pausable-buffer': pausableBuffer
};var library={name:'RxJS',version:LIB_VERSION,description:'Reactive Extensions For JavaScript',examples:examples,groups:[{name:'Creation',items:['of','from','fromPromise','interval','timer','defer','iif','constructor']},{name:'Combination',items:['zip','forkJoin','combineLatest']},{name:'Error handling',items:['throwError','catch','retry','retryWhen','onErrorResumeNext']},{name:'Transformation',items:['filter','find','buffer','mergeMap','switchMap','exhaustMap','concatMap','windowToggle','expand','toArray']},{name:'Multicasting',items:['share']},{name:'Utility',items:['tap','finalize','timeInterval','delay','delayWhen','dematerialize','repeat','timeout','pipe']// ,   { name: 'Recipes'
//     , items:
//         [ 'pausable-buffer'
//         ]
//     }
}]};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/kefir/creation/sequentially.js
/* harmony default export */ var sequentially = ("const { kefirObserver } = require('api/v0.3');\nconst Kefir = require('kefir');\n\nKefir\n  .sequentially(10, [1, 2, 3])\n  .observe(kefirObserver());");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/kefir/creation/interval.js
/* harmony default export */ var creation_interval = ("const { kefirObserver } = require('api/v0.3');\nconst Kefir = require('kefir');\n\nKefir\n  .interval(10, 1)\n  .take(5)\n  .observe(kefirObserver());");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/kefir/combination/pool.js
/* harmony default export */ var pool = ("const { kefirObserver } = require('api/v0.3');\nconst Kefir = require('kefir');\n\nlet a,b,c;\n\na = Kefir.sequentially(100, [0, 1, 2]);\nb = Kefir.sequentially(100, [0, 1, 2]).delay(30);\nc = Kefir.sequentially(100, [0, 1, 2]).delay(60);\n\nconst pool = Kefir.pool();\n\npool.plug(a);\npool.plug(b);\npool.plug(c);\n\na.observe(kefirObserver());\nb.observe(kefirObserver());\nc.observe(kefirObserver());\npool.observe(kefirObserver('pool'));");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/kefir/index.js
// Creation
// Combination
// read the lib version
var kefir_LIB_VERSION=observable_playground_package["a" /* dependencies */].kefir;var kefir_examples=// Creation
{sequentially:sequentially,interval:creation_interval// Combination
,pool:pool};var kefir_library={name:'Kefir.js',version:kefir_LIB_VERSION,description:'Kefir — is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.',examples:kefir_examples,groups:[{name:'Creation',items:['sequentially','interval']},{name:'Combination',items:['pool']}]};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/bacon/creation/interval.js
/* harmony default export */ var bacon_creation_interval = ("const { baconObserver } = require('api/v0.3');\nconst Bacon = require('baconjs');\n\nBacon\n  .interval(5, '+')\n  .take(5)\n  .subscribe(baconObserver());\n");
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/bacon/index.js
// Creation
// read the lib version
var bacon_LIB_VERSION=observable_playground_package["a" /* dependencies */].baconjs;var bacon_examples=// Creation
{interval:bacon_creation_interval};var bacon_library={name:'Bacon.js',version:bacon_LIB_VERSION,description:'A small functional reactive programming lib for JavaScript.',examples:bacon_examples,groups:[{name:'Creation',items:['interval']}]};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/examples/index.js
var libraries={rxjs:library,baconjs:bacon_library,kefir:kefir_library};var menu=Object.keys(libraries).map(function(key){return{handle:key,library:libraries[key]};});var findExample=function findExample(_ref){var libraryHandle=_ref.libraryHandle,exampleHandle=_ref.exampleHandle;var library=libraries[libraryHandle];if(library===undefined){return;}return library.examples[exampleHandle];};
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/shared/Menu/MenuComponent.css
var Menu_MenuComponent = __webpack_require__(72);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/shared/Menu/MenuComponent.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var RXJS_MENU_ROOT=menu.find(function(_ref){var handle=_ref.handle;return handle==='rxjs';});var MenuComponent_MenuComponent=/*#__PURE__*/function(_Component){_inherits(MenuComponent,_Component);function MenuComponent(){var _getPrototypeOf2;var _this;_classCallCheck(this,MenuComponent);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(MenuComponent)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"isLinkActive",function(_ref2){var isPartiallyCurrent=_ref2.isPartiallyCurrent;return isPartiallyCurrent?{className:"Menu__Link active"}:{className:"Menu__Link"};});return _this;}_createClass(MenuComponent,[{key:"renderLibraryMenu",value:function renderLibraryMenu(root){var _this2=this;return external_react_default.a.createElement("ul",{className:"Menu__library-contents"},root.library.groups.map(function(group){return external_react_default.a.createElement("li",{key:group.name,className:"Menu__group"},external_react_default.a.createElement("span",{className:"Menu__group-name"},group.name),external_react_default.a.createElement("ul",{className:"Menu__group-contents"},group.items.map(function(item){return external_react_default.a.createElement("li",{key:item,className:"Menu__item"},external_react_default.a.createElement(router_["Link"],{to:"/".concat(root.handle,"/").concat(item,"/"),getProps:_this2.isLinkActive,key:item},item));})));}));}},{key:"render",value:function render(){var _this3=this;return external_react_default.a.createElement("nav",{className:"Menu"},menu.map(function(root){return external_react_default.a.createElement("div",{key:root.handle,className:"Menu__library-name"},external_react_default.a.createElement(router_["Link"],{getProps:_this3.isLinkActive,to:'/'+root.handle+'/'},root.library.name),external_react_default.a.createElement("span",{className:"Menu__library-version"},"v",root.library.version));}),external_react_default.a.createElement("div",{className:"Menu__Gist"},external_react_default.a.createElement(router_["Link"],{getProps:this.isLinkActive,to:"/gist/"},"Load a gist")),external_react_default.a.createElement("hr",null),external_react_default.a.createElement("ul",{className:"Menu__examples"},menu.map(function(root){return external_react_default.a.createElement("li",{key:root.handle,className:"Menu__library"},external_react_default.a.createElement(router_["Match"],{path:'/'+root.handle+'/*'},function(props){return props.match?_this3.renderLibraryMenu(root):null;}));}),external_react_default.a.createElement("li",{key:root.handle,className:"Menu__library"},external_react_default.a.createElement(router_["Match"],{path:'/gist/*'},function(props){return props.match?_this3.renderLibraryMenu(RXJS_MENU_ROOT):null;}),external_react_default.a.createElement(router_["Match"],{path:'/'},function(props){return props.match?_this3.renderLibraryMenu(RXJS_MENU_ROOT):null;}))));}}]);return MenuComponent;}(external_react_["Component"]);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(22);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(27);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/App.css
var src_App = __webpack_require__(73);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(21);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Gist/Gist/const.js
var GIST_URL_PREFIX='https://gist.github.com/';
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/PlaygroundWrapper.js + 1 modules
var PlaygroundWrapper = __webpack_require__(10);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Gist/Gist/GistFile.css
var GistFile = __webpack_require__(83);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Gist/Gist/GistFile.component.js
function GistFile_component_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){GistFile_component_typeof=function _typeof(obj){return typeof obj;};}else{GistFile_component_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return GistFile_component_typeof(obj);}function GistFile_component_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function GistFile_component_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function GistFile_component_createClass(Constructor,protoProps,staticProps){if(protoProps)GistFile_component_defineProperties(Constructor.prototype,protoProps);if(staticProps)GistFile_component_defineProperties(Constructor,staticProps);return Constructor;}function GistFile_component_possibleConstructorReturn(self,call){if(call&&(GistFile_component_typeof(call)==="object"||typeof call==="function")){return call;}return GistFile_component_assertThisInitialized(self);}function GistFile_component_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function GistFile_component_getPrototypeOf(o){GistFile_component_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return GistFile_component_getPrototypeOf(o);}function GistFile_component_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)GistFile_component_setPrototypeOf(subClass,superClass);}function GistFile_component_setPrototypeOf(o,p){GistFile_component_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return GistFile_component_setPrototypeOf(o,p);}var GistFile_component_GistFileComponent=/*#__PURE__*/function(_Component){GistFile_component_inherits(GistFileComponent,_Component);function GistFileComponent(){GistFile_component_classCallCheck(this,GistFileComponent);return GistFile_component_possibleConstructorReturn(this,GistFile_component_getPrototypeOf(GistFileComponent).apply(this,arguments));}GistFile_component_createClass(GistFileComponent,[{key:"render",value:function render(){var file=this.props.file;var isJSFile=/.*\.js/.test(file.filename);return external_react_default.a.createElement("div",{className:"GistFile"},external_react_default.a.createElement("div",{className:"GistFile__Name"},file.filename),isJSFile?external_react_default.a.createElement(PlaygroundWrapper["a" /* PlaygroundWrapper */],{key:file.filename,code:file.content}):external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("div",{className:"GistFile__Content DangerousContentWidth"},external_react_default.a.createElement("pre",null,file.content))));}}]);return GistFileComponent;}(external_react_["Component"]);
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Gist/Gist/Gist.css
var Gist = __webpack_require__(84);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Gist/Gist/Gist.component.js
function Gist_component_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Gist_component_typeof=function _typeof(obj){return typeof obj;};}else{Gist_component_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Gist_component_typeof(obj);}function Gist_component_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Gist_component_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Gist_component_createClass(Constructor,protoProps,staticProps){if(protoProps)Gist_component_defineProperties(Constructor.prototype,protoProps);if(staticProps)Gist_component_defineProperties(Constructor,staticProps);return Constructor;}function Gist_component_possibleConstructorReturn(self,call){if(call&&(Gist_component_typeof(call)==="object"||typeof call==="function")){return call;}return Gist_component_assertThisInitialized(self);}function Gist_component_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Gist_component_getPrototypeOf(o){Gist_component_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Gist_component_getPrototypeOf(o);}function Gist_component_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Gist_component_setPrototypeOf(subClass,superClass);}function Gist_component_setPrototypeOf(o,p){Gist_component_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Gist_component_setPrototypeOf(o,p);}var Gist_component_GistComponent=/*#__PURE__*/function(_Component){Gist_component_inherits(GistComponent,_Component);function GistComponent(){Gist_component_classCallCheck(this,GistComponent);return Gist_component_possibleConstructorReturn(this,Gist_component_getPrototypeOf(GistComponent).apply(this,arguments));}Gist_component_createClass(GistComponent,[{key:"render",value:function render(){var data=this.props.data;var owner=data.owner;var files=Object.values(data.files);var gistName=files[0].filename;var fileValues=files.sort(function(a,b){return a.filename.localeCompare(b.filename);});return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(lib["Head"],null,external_react_default.a.createElement("title",null,"Gist ",data.description)),external_react_default.a.createElement("div",{key:"Gist",className:"Gist"},external_react_default.a.createElement("div",{className:"Gist__Header"},external_react_default.a.createElement("a",{className:"Gist__Avatar",href:'https://gist.github.com/'+owner.login,target:"_blank"},external_react_default.a.createElement("img",{src:owner.avatar_url,alt:"Owner avatar"})),external_react_default.a.createElement("div",{className:"Gist__Header__Main DangerousContentWidth"},external_react_default.a.createElement("div",{className:"Gist__Path"},external_react_default.a.createElement("a",{className:"Gist__UserName",href:'https://gist.github.com/'+owner.login,target:"_blank"},owner.login),"\xA0/\xA0",external_react_default.a.createElement("a",{className:"Gist__GistName",href:GIST_URL_PREFIX+data.id,target:"_blank"},gistName)),external_react_default.a.createElement("div",{className:"Gist__Description"},data.description))),external_react_default.a.createElement(external_react_default.a.Fragment,null,fileValues.map(function(file){return external_react_default.a.createElement(GistFile_component_GistFileComponent,{key:"GistFile__"+file.filename,file:file});}))));}}]);return GistComponent;}(external_react_["Component"]);
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/shared/LoadingIndicator/LoadingIndicator.jsx
var LoadingIndicator = __webpack_require__(16);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Gist/Gist/Gist.container.js
function Gist_container_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Gist_container_typeof=function _typeof(obj){return typeof obj;};}else{Gist_container_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Gist_container_typeof(obj);}function Gist_container_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Gist_container_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Gist_container_createClass(Constructor,protoProps,staticProps){if(protoProps)Gist_container_defineProperties(Constructor.prototype,protoProps);if(staticProps)Gist_container_defineProperties(Constructor,staticProps);return Constructor;}function Gist_container_possibleConstructorReturn(self,call){if(call&&(Gist_container_typeof(call)==="object"||typeof call==="function")){return call;}return Gist_container_assertThisInitialized(self);}function Gist_container_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Gist_container_getPrototypeOf(o){Gist_container_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Gist_container_getPrototypeOf(o);}function Gist_container_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Gist_container_setPrototypeOf(subClass,superClass);}function Gist_container_setPrototypeOf(o,p){Gist_container_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Gist_container_setPrototypeOf(o,p);}var Gist_container_GistContainer=/*#__PURE__*/function(_Component){Gist_container_inherits(GistContainer,_Component);function GistContainer(props){var _this;Gist_container_classCallCheck(this,GistContainer);_this=Gist_container_possibleConstructorReturn(this,Gist_container_getPrototypeOf(GistContainer).call(this,props));_this.state={loading:true,data:undefined};return _this;}Gist_container_createClass(GistContainer,[{key:"componentWillMount",value:function componentWillMount(){var _this2=this;var gistId=this.props.gistId;external_axios_default.a.get("https://api.github.com/gists/".concat(gistId)).then(function(response){_this2.setState({loading:false,data:response.data});});}},{key:"render",value:function render(){if(!this.state.loading){return external_react_default.a.createElement(Gist_component_GistComponent,{data:this.state.data});}// Loading indicator
var gistId=this.props.gistId;var gistUrl=GIST_URL_PREFIX+gistId;return external_react_default.a.createElement("div",null,external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("h3",null,"Your playground is loading...")),external_react_default.a.createElement("p",null,external_react_default.a.createElement(LoadingIndicator["a" /* LoadingIndicator */],null)),external_react_default.a.createElement("div",{className:"PageBlock"},external_react_default.a.createElement("p",null,external_react_default.a.createElement("span",{className:"DangerousContentWidth"},"Fetching Gist from ",external_react_default.a.createElement("a",{href:gistUrl,target:"_blank"},gistUrl),"..."))));}}]);return GistContainer;}(external_react_["Component"]);
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/App.js
function App_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){App_typeof=function _typeof(obj){return typeof obj;};}else{App_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return App_typeof(obj);}function App_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function App_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function App_createClass(Constructor,protoProps,staticProps){if(protoProps)App_defineProperties(Constructor.prototype,protoProps);if(staticProps)App_defineProperties(Constructor,staticProps);return Constructor;}function App_possibleConstructorReturn(self,call){if(call&&(App_typeof(call)==="object"||typeof call==="function")){return call;}return App_assertThisInitialized(self);}function App_getPrototypeOf(o){App_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return App_getPrototypeOf(o);}function App_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function App_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)App_setPrototypeOf(subClass,superClass);}function App_setPrototypeOf(o,p){App_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return App_setPrototypeOf(o,p);}var App_App=/*#__PURE__*/function(_React$Component){App_inherits(App,_React$Component);function App(props){var _this;App_classCallCheck(this,App);_this=App_possibleConstructorReturn(this,App_getPrototypeOf(App).call(this,props));_this.state={mobileMenuVisible:false};_this.toggleMobileMenu=_this.toggleMobileMenu.bind(App_assertThisInitialized(_this));_this.hideMobileMenu=_this.hideMobileMenu.bind(App_assertThisInitialized(_this));return _this;}App_createClass(App,[{key:"hideMobileMenu",value:function hideMobileMenu(){if(!this.state.mobileMenuVisible){return;}this.setState({mobileMenuVisible:false});}},{key:"toggleMobileMenu",value:function toggleMobileMenu(){this.setState({mobileMenuVisible:!this.state.mobileMenuVisible});}},{key:"isLinkHeaderActive",value:function isLinkHeaderActive(_ref){var isCurrent=_ref.isCurrent;return isCurrent?{className:"App__logo active"}:{className:"App__logo"};}},{key:"render",value:function render(){return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement("div",{className:"App"},external_react_default.a.createElement("div",{className:"App__header"},external_react_default.a.createElement("button",{className:'App__MobileMenuSwitch '+(this.state.mobileMenuVisible?' active':''),onClick:this.toggleMobileMenu},external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"],{icon:free_solid_svg_icons_["faBars"]})),external_react_default.a.createElement(router_["Link"],{to:"/",onClick:this.hideMobileMenu,getProps:this.isLinkHeaderActive},external_react_default.a.createElement("span",{className:"App__logo_main"},"Observable")," Playground"),external_react_default.a.createElement("span",{className:"App__header-spring"}),external_react_default.a.createElement("a",{target:"_blank",className:"App__twitter-link",title:"Follow me on twitter",href:"https://twitter.com/kddsky"},external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"],{icon:free_brands_svg_icons_["faTwitter"],style:{width:'1em'}})),external_react_default.a.createElement("a",{target:"_blank",className:"App__github-link",title:"Check the source code on GitHub",href:"https://github.com/observable-playground/observable-playground"},external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"],{icon:free_brands_svg_icons_["faGithub"],style:{width:'1em'}}))),external_react_default.a.createElement("div",{className:"App__body"},external_react_default.a.createElement("div",{className:'App__contents'+(this.state.mobileMenuVisible?' hidden':'')},external_react_default.a.createElement(router_["Router"],{basepath:"/"},external_react_default.a.createElement(lib["Routes"],{path:"/gist"}),external_react_default.a.createElement(Gist_container_GistContainer,{path:"/gist/:gistId"}),external_react_default.a.createElement(lib["Routes"],{default:true}))),external_react_default.a.createElement("div",{className:'App__menu'+(this.state.mobileMenuVisible?' visible':''),onClick:this.hideMobileMenu},external_react_default.a.createElement(MenuComponent_MenuComponent,null)))));}}]);return App;}(external_react_default.a.Component);/* harmony default export */ var observable_playground_src_App = (App_App);
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/index.js
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (observable_playground_src_App);// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById('root'));};// Render!
src_render(observable_playground_src_App);// Hot Module Replacement
if(false){}}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors_namespaceObject = {};
__webpack_require__.r(colors_namespaceObject);
__webpack_require__.d(colors_namespaceObject, "palette", function() { return consts["c" /* palette */]; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/components/Editor/EditorComponent.css
var Editor_EditorComponent = __webpack_require__(77);

// EXTERNAL MODULE: external "react-ace"
var external_react_ace_ = __webpack_require__(43);
var external_react_ace_default = /*#__PURE__*/__webpack_require__.n(external_react_ace_);

// EXTERNAL MODULE: external "brace/mode/javascript"
var javascript_ = __webpack_require__(78);

// EXTERNAL MODULE: external "brace/theme/monokai"
var monokai_ = __webpack_require__(79);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/components/Editor/EditorComponent.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var EditorComponent_EditorComponent=/*#__PURE__*/function(_Component){_inherits(EditorComponent,_Component);function EditorComponent(){_classCallCheck(this,EditorComponent);return _possibleConstructorReturn(this,_getPrototypeOf(EditorComponent).apply(this,arguments));}_createClass(EditorComponent,[{key:"render",value:function render(){return external_react_default.a.createElement(external_react_ace_default.a,{className:"EditorComponent",name:"AceEditor_EditorComponent",mode:"javascript",theme:"monokai",defaultValue:this.props.defaultValue,value:this.props.value,width:"100%",maxLines:Infinity,showGutter:true,tabSize:2,wrapEnabled:false,showPrintMargin:false,setOptions:{showFoldWidgets:false},editorProps:{$blockScrolling:true},debounceChangePeriod:500,onChange:this.props.onChange});}}]);return EditorComponent;}(external_react_["Component"]);
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/components/Error/ErrorComponent.css
var Error_ErrorComponent = __webpack_require__(80);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/components/Error/ErrorComponent.js
function ErrorComponent_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ErrorComponent_typeof=function _typeof(obj){return typeof obj;};}else{ErrorComponent_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return ErrorComponent_typeof(obj);}function ErrorComponent_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function ErrorComponent_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function ErrorComponent_createClass(Constructor,protoProps,staticProps){if(protoProps)ErrorComponent_defineProperties(Constructor.prototype,protoProps);if(staticProps)ErrorComponent_defineProperties(Constructor,staticProps);return Constructor;}function ErrorComponent_possibleConstructorReturn(self,call){if(call&&(ErrorComponent_typeof(call)==="object"||typeof call==="function")){return call;}return ErrorComponent_assertThisInitialized(self);}function ErrorComponent_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function ErrorComponent_getPrototypeOf(o){ErrorComponent_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return ErrorComponent_getPrototypeOf(o);}function ErrorComponent_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)ErrorComponent_setPrototypeOf(subClass,superClass);}function ErrorComponent_setPrototypeOf(o,p){ErrorComponent_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return ErrorComponent_setPrototypeOf(o,p);}var ErrorComponent_ErrorComponent=/*#__PURE__*/function(_Component){ErrorComponent_inherits(ErrorComponent,_Component);function ErrorComponent(){ErrorComponent_classCallCheck(this,ErrorComponent);return ErrorComponent_possibleConstructorReturn(this,ErrorComponent_getPrototypeOf(ErrorComponent).apply(this,arguments));}ErrorComponent_createClass(ErrorComponent,[{key:"render",value:function render(){var error=this.props.error;return external_react_default.a.createElement("div",{className:"ErrorComponent"},error.toString());}}]);return ErrorComponent;}(external_react_["Component"]);
// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(20);

// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(44);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);

// EXTERNAL MODULE: external "lodash/values"
var values_ = __webpack_require__(45);
var values_default = /*#__PURE__*/__webpack_require__.n(values_);

// EXTERNAL MODULE: external "lodash/entries"
var entries_ = __webpack_require__(46);
var entries_default = /*#__PURE__*/__webpack_require__.n(entries_);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/shared/consts.js
var consts = __webpack_require__(9);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/components/TimeLineChart/printValue.js
function printValue_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){printValue_typeof=function _typeof(obj){return typeof obj;};}else{printValue_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return printValue_typeof(obj);}function printValue(value){if(printValue_typeof(value)=='object'){return printPrimitive(getObjectValue(value));}return printPrimitive(value);}function printPrimitive(primitive){if(primitive===null){return'null';}if(primitive===undefined){return'undefined';}return primitive;}function getObjectValue(object){if(!object){return object;}// Array handling
if(Object.prototype.toString.call(object)=='[object Array]'&&typeof object.join=='function'){return"[".concat(object.join(),"]");}if(typeof object.valueOf=='function'){return object.valueOf();}if(typeof object.toString=='function'){return object.toString();}return Object.prototype.toString.call(object);}
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(22);

// EXTERNAL MODULE: external "save-svg-as-png"
var external_save_svg_as_png_ = __webpack_require__(47);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(17);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/components/TimeLineChart/TimeLineChartComponent.css
var TimeLineChart_TimeLineChartComponent = __webpack_require__(81);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/components/TimeLineChart/TimeLineChartComponent.js
function TimeLineChartComponent_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){TimeLineChartComponent_typeof=function _typeof(obj){return typeof obj;};}else{TimeLineChartComponent_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return TimeLineChartComponent_typeof(obj);}function TimeLineChartComponent_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function TimeLineChartComponent_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function TimeLineChartComponent_createClass(Constructor,protoProps,staticProps){if(protoProps)TimeLineChartComponent_defineProperties(Constructor.prototype,protoProps);if(staticProps)TimeLineChartComponent_defineProperties(Constructor,staticProps);return Constructor;}function TimeLineChartComponent_possibleConstructorReturn(self,call){if(call&&(TimeLineChartComponent_typeof(call)==="object"||typeof call==="function")){return call;}return TimeLineChartComponent_assertThisInitialized(self);}function TimeLineChartComponent_getPrototypeOf(o){TimeLineChartComponent_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return TimeLineChartComponent_getPrototypeOf(o);}function TimeLineChartComponent_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function TimeLineChartComponent_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)TimeLineChartComponent_setPrototypeOf(subClass,superClass);}function TimeLineChartComponent_setPrototypeOf(o,p){TimeLineChartComponent_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return TimeLineChartComponent_setPrototypeOf(o,p);}var EVENT_RADIUS=17;var EVENT_DIAMETER=EVENT_RADIUS*2;var TIMELINE_HEIGHT=35;var LINE_TITLE_HEIGHT=12;var LINE_TITLE_MARGIN_BOTTOM=10;var LINE_MARGIN_BOTTOM=14;var MARK_HALF_HEIGHT=25;var EVENT_MARGIN=-6;var EVENT_DIAMETER_WITH_MARGIN=EVENT_DIAMETER+EVENT_MARGIN;// colors
var STROKE_WIDTH='2';var COLOR_ORANGE='#ff9900';var COLOR_LIGHT_GREY='#c5c5c5';var COLOR_GREY='#757575';var COLOR_DARK_GREY='#333';var TimeLineChartComponent_TimeLineChartComponent=/*#__PURE__*/function(_Component){TimeLineChartComponent_inherits(TimeLineChartComponent,_Component);function TimeLineChartComponent(props){var _this;TimeLineChartComponent_classCallCheck(this,TimeLineChartComponent);_this=TimeLineChartComponent_possibleConstructorReturn(this,TimeLineChartComponent_getPrototypeOf(TimeLineChartComponent).call(this,props));_this.createChart=_this.createChart.bind(TimeLineChartComponent_assertThisInitialized(_this));_this.downloadAsSvg=_this.downloadAsSvg.bind(TimeLineChartComponent_assertThisInitialized(_this));return _this;}TimeLineChartComponent_createClass(TimeLineChartComponent,[{key:"componentDidMount",value:function componentDidMount(){this.createChart();}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.createChart();}},{key:"createChart",value:function createChart(){var svgNode=this.svgNode;var wrapperNode=this.wrapperNode;var VIEW_WIDTH=wrapperNode.clientWidth;var MIN_MS_TO_DISPLAY=10;var margin={top:0,right:EVENT_RADIUS+2,bottom:0,left:EVENT_RADIUS+2};var width=VIEW_WIDTH-margin.left-margin.right;var lines=this.props.lines;var time=Math.max(this.props.time,MIN_MS_TO_DISPLAY);// cleanup before going further
external_d3_["select"](svgNode).selectAll('g.root').remove();var svg=external_d3_["select"](svgNode);var rootg=svg.append('g').attr('class','root').attr('transform',"translate( ".concat(margin.left,", ").concat(margin.top,")"));var xScale=external_d3_["scaleLinear"]().domain([0,time]).range([0,width]).nice();// add x axis
var axis=rootg.append('g').attr('class','axis axis--x').call(external_d3_["axisBottom"](xScale).tickFormat(function(x){return x+'ms';}).ticks(// for mobile/narrow screen
// cut ticks count to 7
VIEW_WIDTH<500?7:undefined));axis.selectAll('line, path').attr('stroke',COLOR_LIGHT_GREY);axis.selectAll('text').attr('fill',COLOR_LIGHT_GREY);var graph=rootg.append('g').attr('transform',"translate(0, ".concat(TIMELINE_HEIGHT,")"));if(!lines){return;}var accHeight=0;lines.forEach(function(line){var start=line.start;// TOOD: mark line as exhausting the chart, instead of drawing it to infinity
var end=line.end===undefined?consts["a" /* MAX_EXECUTION_TIME */]:line.end;var events=groupBy_default()(line.events||[],function(event){return event.time;});var errors=line.errors||[];var stops=line.stops||[];var lineName=line.lineName!=null?printValue(line.lineName):'';// TODO: scale vert
var y=accHeight;var lineTitleHeight=lineName?LINE_TITLE_HEIGHT+LINE_TITLE_MARGIN_BOTTOM:0;var maxEventsAtOneTime=values_default()(events).reduce(function(acc,curr){return Math.max(curr.length,acc);},1);var eventsHeight=Math.max((maxEventsAtOneTime-1)*EVENT_DIAMETER_WITH_MARGIN+EVENT_DIAMETER,MARK_HALF_HEIGHT*2);var lineHeight=lineTitleHeight+eventsHeight;accHeight+=lineHeight+LINE_MARGIN_BOTTOM;var threadg=graph.append('g').attr('class','thread').attr('transform',function(){return"translate(0, ".concat(y,")");});// Line title
if(lineName){threadg.append('text').attr('class','lineTitle').attr('font-family','sans-serif').attr('font-size',LINE_TITLE_HEIGHT).attr('fill',COLOR_GREY).attr('y',LINE_TITLE_HEIGHT).text(lineName);}var linefg=threadg.append('g').attr('class','line').attr('transform',function(){return"translate(0, ".concat(lineTitleHeight,")");}).attr('stroke',COLOR_DARK_GREY).attr('stroke-width',STROKE_WIDTH);var lineg=linefg.append('g').attr('transform',function(){return"translate(0, ".concat(eventsHeight/2,")");});// Baseline
lineg.append('line').attr('class','baseline').attr('x1',function(){return xScale(start);}).attr('y1',0).attr('x2',function(){return xScale(end);}).attr('y2',0);// Start mark
lineg.append('line').attr('class','startmark').attr('x1',function(){return xScale(start);}).attr('y1',-MARK_HALF_HEIGHT).attr('x2',function(){return xScale(start);}).attr('y2',0).append('title').text('start');// End marks
lineg.selectAll('g.end').data(stops).enter().append('g').attr('class','end').attr('transform',function(d){return"translate(".concat(xScale(d.time),", 0)");}).append('line').attr('class','endmark').attr('x1',0).attr('y1',-MARK_HALF_HEIGHT).attr('x2',0).attr('y2',+MARK_HALF_HEIGHT).append('title').text('complete');// Events {{{
entries_default()(events).sort(function(a,b){return a[0]-b[0];}).forEach(function(entry){var currentEvents=entry[1];// TODO: use scaleLinear
var eventMarks=lineg.selectAll("g.event".concat(entry[0])).data(currentEvents).enter().append('g').attr('class',"event".concat(entry[0]," event")).attr('transform',function(d,index){return"translate(".concat(xScale(d.time),", ").concat((index-(currentEvents.length-1)/2)*EVENT_DIAMETER_WITH_MARGIN,")");});eventMarks.append('circle').attr('r',EVENT_RADIUS).style('fill',function(d){if(d.value&&d.value.color){return d.value.color;}return consts["c" /* palette */][d.index%consts["c" /* palette */].length];});eventMarks.append('text').attr('font-family','sans-serif').attr('font-size','14px').attr('text-anchor','middle').attr('stroke-width',0).attr('y',5).text(function(d){return printValue(d.value);});eventMarks.append('title').text(function(d){return printValue(d.value);});});// }}}
var errorMarks=lineg.selectAll('g.error').data(errors).enter().append('g').attr('class','error').attr('transform',function(d){return"translate(".concat(xScale(d.time),", 0)");});// error mark = cross with an exclamation mark in a triangle in it
errorMarks.append('title').text(function(d){return printValue(d.value);});errorMarks.append('line').attr('x1',-EVENT_RADIUS).attr('y1',-EVENT_RADIUS).attr('x2',+EVENT_RADIUS).attr('y2',+EVENT_RADIUS);errorMarks.append('line').attr('x1',+EVENT_RADIUS).attr('y1',-EVENT_RADIUS).attr('x2',-EVENT_RADIUS).attr('y2',+EVENT_RADIUS);errorMarks.append('path')// triangle generated via `npm d3-shape`:
// d3.symbol().type(d3.symbolTriangle).size(250);
.attr('d','M0,-13.872638167626057L12.01405707067377,6.936319083813029L-12.01405707067377,6.936319083813029Z').attr('class','errorTriangle').attr('stroke',COLOR_ORANGE).attr('fill',COLOR_ORANGE).attr('stroke-linejoin','round').attr('stroke-width',STROKE_WIDTH*2);errorMarks.append('text').attr('font-family','monospace').attr('text-anchor','middle').attr('stroke-width',0).attr('y',4).text('!');svg.attr('height',accHeight+TIMELINE_HEIGHT+margin.top+margin.bottom).attr('width',width+margin.left+margin.right);});}},{key:"downloadAsSvg",value:function downloadAsSvg(){var filename=window.document.title.replace(/[^a-z0-9]/gi,'-').toLowerCase();Object(external_save_svg_as_png_["saveSvgAsPng"])(this.svgNode,filename,{encoderOptions:1,// high image quality
scale:2// upscale for better quality in publicaions
});}},{key:"render",value:function render(){var _this2=this;return external_react_default.a.createElement("div",{className:"TimeLineChart",ref:function ref(node){return _this2.wrapperNode=node;}},external_react_default.a.createElement("svg",{ref:function ref(node){return _this2.svgNode=node;},width:"0",height:"0"}),external_react_default.a.createElement("button",{className:"TimeLineChart__Download",onClick:this.downloadAsSvg,title:"Download as .png"},external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"],{icon:free_solid_svg_icons_["faDownload"]})));}}]);return TimeLineChartComponent;}(external_react_["Component"]);
// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/Playground/Playground.css
var Playground_Playground = __webpack_require__(82);

// EXTERNAL MODULE: /Users/kos/projects/observable-playground/src/core/mock-delayed-execution/index.js + 1 modules
var mock_delayed_execution = __webpack_require__(25);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/state.js
// Naive state implementation
// TODO: move to a 3rd party state management
var state=Object.create(null);var getState=function getState(){return state;};var setState=function setState(newState){state=Object.assign(Object.create(null),state,newState);return state;};var resetState=function resetState(){state=Object.create(null);return state;};
// EXTERNAL MODULE: external "@babel/standalone/babel"
var babel_ = __webpack_require__(48);

// EXTERNAL MODULE: external "rxjs/Rx"
var Rx_ = __webpack_require__(49);

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(50);

// EXTERNAL MODULE: external "rxjs/operators"
var operators_ = __webpack_require__(51);

// EXTERNAL MODULE: external "baconjs"
var external_baconjs_ = __webpack_require__(52);
var external_baconjs_default = /*#__PURE__*/__webpack_require__.n(external_baconjs_);

// EXTERNAL MODULE: external "kefir"
var external_kefir_ = __webpack_require__(53);
var external_kefir_default = /*#__PURE__*/__webpack_require__.n(external_kefir_);

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/chart-state-proxy.js
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var chart_state_proxy_addLine=function addLine(line){var lines=getState().lines||[];setState({lines:[].concat(_toConsumableArray(lines),[line])});};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/line.js
var createLine=function createLine(lineName){return{lineName:lineName,start:Date.now(),end:undefined,events:[],errors:[],stops:[]};};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/chart.js
var DEBUG=false;var chart_createObserver=function createObserver(){var lineName=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var line=createLine(lineName);var eventIndex=0;if(DEBUG){console.log("v @ ".concat(Date.now(),"ms ").concat(lineName));}var onNext=function onNext(value){if(DEBUG){console.log('o',value,"@ ".concat(Date.now(),"ms ").concat(lineName));}line.events.push({index:eventIndex++,time:Date.now(),value:value});};var onError=function onError(value){if(DEBUG){console.error('x',value,"@ ".concat(Date.now(),"ms ").concat(lineName));}line.errors.push({time:Date.now(),value:value});line.end=Date.now();};var onComplete=function onComplete(){if(DEBUG){console.log("\u2014 @ ".concat(Date.now(),"ms ").concat(lineName));}line.stops.push({time:Date.now()});line.end=Date.now();};chart_state_proxy_addLine(line);// Line implements RxJS Observer interface
// http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html
return{next:onNext,error:onError,complete:onComplete};};var createRxObserver=function createRxObserver(lineName){var _createObserver=chart_createObserver(lineName),next=_createObserver.next,error=_createObserver.error,complete=_createObserver.complete;return{next:next,error:error,complete:complete};};var createKefirObserver=function createKefirObserver(lineName){var _createObserver2=chart_createObserver(lineName),next=_createObserver2.next,error=_createObserver2.error,complete=_createObserver2.complete;return{value:next,error:error,end:complete};};var createBaconObserver=function createBaconObserver(lineName){var _createObserver3=chart_createObserver(lineName),next=_createObserver3.next,error=_createObserver3.error,complete=_createObserver3.complete;return function(event){if(event.isNext){return next(event.value);}if(event.isError){return error(event.value);}if(event.isEnd){return complete();}};};var chart={createObserver:chart_createObserver,createRxObserver:createRxObserver,createKefirObserver:createKefirObserver,createBaconObserver:createBaconObserver};/* harmony default export */ var playground_api_chart = (chart);
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/v0/index.js
var api={chart:playground_api_chart};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/v0.3/index.js
var v0_3_api={rxObserver:playground_api_chart.createRxObserver,kefirObserver:playground_api_chart.createKefirObserver,baconObserver:playground_api_chart.createBaconObserver,palette:consts["c" /* palette */]};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/colors.js

// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/playground-api/require.js
function require_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){require_typeof=function _typeof(obj){return typeof obj;};}else{require_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return require_typeof(obj);}function require_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function require_possibleConstructorReturn(self,call){if(call&&(require_typeof(call)==="object"||typeof call==="function")){return call;}return require_assertThisInitialized(self);}function require_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function require_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)require_setPrototypeOf(subClass,superClass);}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,require_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return require_setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)require_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function require_setPrototypeOf(o,p){require_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return require_setPrototypeOf(o,p);}function require_getPrototypeOf(o){require_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return require_getPrototypeOf(o);}/**
 * Naive implementation of require mock for playground scripts
 * TODO: find a better way to do proper requires on the fly
 */ // RxJS {{{
// Compatibility package
// https://github.com/ReactiveX/rxjs/tree/master/compat
// Regular
// Lettable operators
// https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
// }}}
// baconjs {{{
// }}}
// kefirjs {{{
// }}}
var availablePackages=[{// RxJS
name:'rxjs',load:function load(){return external_rxjs_;}},{// RxJS Compat
name:'rxjs/Rx',load:function load(){return Rx_;}},{// RxJS lettable operators
name:'rxjs/operators',load:function load(){return operators_;}},{// Bacon
name:'baconjs',load:function load(){return external_baconjs_default.a;}},{// kefir
name:'kefir',load:function load(){return external_kefir_default.a;}},{// chart api
name:'rp-api',load:function load(){return api;}},{name:'api/v0.3',load:function load(){return v0_3_api;}},{name:'rp-api/colors',load:function load(){return colors_namespaceObject;}}];var PackageNotSupportedError=/*#__PURE__*/function(_Error){require_inherits(PackageNotSupportedError,_Error);function PackageNotSupportedError(name){require_classCallCheck(this,PackageNotSupportedError);var availablePackageNames=availablePackages.map(function(p){return p.name;});var errorMessage="Currently package \"".concat(name,"\" is not supported. Please, use one of these: ").concat(availablePackageNames);return require_possibleConstructorReturn(this,require_getPrototypeOf(PackageNotSupportedError).call(this,errorMessage));}return PackageNotSupportedError;}(_wrapNativeSuper(Error));var _require=function _require(name){var pkg=availablePackages.find(function(x){return x.name===name;});if(pkg===undefined){throw new PackageNotSupportedError(name);}return pkg.load();};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/compiler.js
var compiler_compile=function compile(sourceCode){// currently it takes
// ~20 ms to compile normal code
// ~1-2 sec to compile errorneous code
var transpiledSource=babel_["transform"](sourceCode,{presets:['es2017']}).code;// return a runable function with all requirements
return function(){// eslint-disable-next-line no-new-func
var fn=Function('require',transpiledSource);fn(_require);};};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/core/runner.js
var runner_run=function run(sourceCode){resetState();var execStatus,execTime;try{var compiledFn=compiler_compile(sourceCode);var result=Object(mock_delayed_execution["a" /* execute */])(compiledFn,consts["a" /* MAX_EXECUTION_TIME */]);execStatus=result.status;execTime=result.time;}catch(err){console.error(err);if(err instanceof Error){execStatus=err;}else{execStatus=new Error(err);}execTime=0;}var _chartState$getState=getState(),lines=_chartState$getState.lines;return{time:execTime,status:execStatus,lines:lines};};
// CONCATENATED MODULE: /Users/kos/projects/observable-playground/src/Playground/Playground.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playground", function() { return Playground_Playground_Playground; });
function Playground_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Playground_typeof=function _typeof(obj){return typeof obj;};}else{Playground_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Playground_typeof(obj);}function Playground_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Playground_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Playground_createClass(Constructor,protoProps,staticProps){if(protoProps)Playground_defineProperties(Constructor.prototype,protoProps);if(staticProps)Playground_defineProperties(Constructor,staticProps);return Constructor;}function Playground_possibleConstructorReturn(self,call){if(call&&(Playground_typeof(call)==="object"||typeof call==="function")){return call;}return Playground_assertThisInitialized(self);}function Playground_getPrototypeOf(o){Playground_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Playground_getPrototypeOf(o);}function Playground_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Playground_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Playground_setPrototypeOf(subClass,superClass);}function Playground_setPrototypeOf(o,p){Playground_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Playground_setPrototypeOf(o,p);}var Playground_Playground_Playground=/*#__PURE__*/function(_Component){Playground_inherits(Playground,_Component);function Playground(props){var _this;Playground_classCallCheck(this,Playground);_this=Playground_possibleConstructorReturn(this,Playground_getPrototypeOf(Playground).call(this,props));_this.onChange=_this.onChange.bind(Playground_assertThisInitialized(_this));var code=props.code;var _run=runner_run(code),status=_run.status,time=_run.time,lines=_run.lines;_this.state={value:code,defaultValue:code,status:status,time:time,lines:lines};return _this;}Playground_createClass(Playground,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref){var code=_ref.code;this.onChange(code);}},{key:"onChange",value:function onChange(sourceCode){if(sourceCode==this.state.value){return;}var _run2=runner_run(sourceCode),status=_run2.status,time=_run2.time,lines=_run2.lines;this.setState({value:sourceCode,status:status,time:time,lines:lines});}},{key:"render",value:function render(){var _this$state=this.state,status=_this$state.status,time=_this$state.time,lines=_this$state.lines,value=_this$state.value,defaultValue=_this$state.defaultValue;var showError=status instanceof Error;return external_react_default.a.createElement("div",{className:"Playground"},external_react_default.a.createElement("div",{className:"Playground__editor"},external_react_default.a.createElement(EditorComponent_EditorComponent,{value:value,defaultValue:defaultValue,onChange:this.onChange})),external_react_default.a.createElement("div",{className:"Playground__chart"},showError&&external_react_default.a.createElement(ErrorComponent_ErrorComponent,{error:status}),external_react_default.a.createElement(TimeLineChartComponent_TimeLineChartComponent,{time:time,lines:lines})));}}]);return Playground;}(external_react_["Component"]);

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.0733bb10.js.map