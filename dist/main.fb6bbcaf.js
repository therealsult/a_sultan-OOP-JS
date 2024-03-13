// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Province.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Province = /*#__PURE__*/_createClass(function Province(name, cities) {
  _classCallCheck(this, Province);
  this.name = name;
  this.cities = cities;
});
var _default = exports.default = Province;
},{}],"js/City.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var City = /*#__PURE__*/function () {
  function City(name, image, treeSpecies, mammalSpecies, invertebrateSpecies, fishSpecies, amphibianSpecies, birdSpecies, reptileSpecies, maxElevation, minElevation) {
    _classCallCheck(this, City);
    this.name = name;
    this.image = image;
    this.treeSpecies = treeSpecies;
    this.mammalSpecies = mammalSpecies;
    this.invertebrateSpecies = invertebrateSpecies;
    this.fishSpecies = fishSpecies;
    this.amphibianSpecies = amphibianSpecies;
    this.birdSpecies = birdSpecies;
    this.reptileSpecies = reptileSpecies;
    this.maxElevation = maxElevation;
    this.minElevation = minElevation;
  }
  _createClass(City, [{
    key: "getCardHTML",
    value: function getCardHTML() {
      return "\n        <div class=\"city-card\">\n          <img src=\"./images/".concat(this.image, "\" alt=\"").concat(this.name, "\">\n          <div class=\"city-info\">\n            <h2>").concat(this.name, "</h2>\n            <p>Number of Tree Species: ").concat(this.treeSpecies, "</p>\n            <p>Number of Mammal Species: ").concat(this.mammalSpecies, "</p>\n            <p>Number of Invertebrate Species: ").concat(this.invertebrateSpecies, "</p>\n            <p>Number of Fish Species: ").concat(this.fishSpecies, "</p>\n            <p>Number of Amphibian Species: ").concat(this.amphibianSpecies, "</p>\n            <p>Number of Bird Species: ").concat(this.birdSpecies, "</p>\n            <p>Number of Reptile Species: ").concat(this.reptileSpecies, "</p>\n            <p>Max Elevation: ").concat(this.maxElevation, " meters</p>\n            <p>Min Elevation: ").concat(this.minElevation, " meters</p>\n          </div>\n          <a href=\"city.php\">select</a>\n\n        </div>\n      ");
    }
  }]);
  return City;
}();
var _default = exports.default = City;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _Province = _interopRequireDefault(require("./Province.js"));
var _City = _interopRequireDefault(require("./City.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener('DOMContentLoaded', function () {
  var provinces = [new _Province.default('Alberta', [new _City.default('Calgary', 'calgary.jpg', 50, 40, 60, 30, 20, 80, 10, 1500, 100), new _City.default('Edmonton', 'edmonton.jpg', 40, 30, 50, 20, 15, 70, 8, 1400, 90), new _City.default('Red Deer', 'red-deer.jpg', 35, 25, 45, 15, 10, 60, 5, 1200, 80)]), new _Province.default('British Columbia', [new _City.default('Vancouver', 'vancouver.jpg', 60, 50, 70, 40, 30, 90, 15, 1800, 200), new _City.default('Victoria', 'victoria.jpg', 45, 35, 55, 25, 20, 75, 12, 1600, 150), new _City.default('Kelowna', 'kelowna.jpg', 40, 30, 50, 20, 15, 70, 10, 1400, 100)]), new _Province.default('Manitoba', [new _City.default('Winnipeg', 'winnipeg.jpg', 35, 25, 45, 15, 10, 60, 5, 1000, 50), new _City.default('Brandon', 'brandon.jpg', 30, 20, 40, 10, 8, 50, 4, 900, 40), new _City.default('Steinbach', 'steinbach.jpg', 25, 15, 35, 8, 6, 40, 3, 800, 30)]), new _Province.default('New Brunswick', [new _City.default('Fredericton', 'fredericton.jpg', 25, 20, 30, 10, 8, 40, 3, 800, 30), new _City.default('Saint John', 'saint-john.jpg', 20, 15, 25, 8, 6, 35, 2, 700, 20), new _City.default('Moncton', 'moncton.jpg', 22, 17, 27, 9, 7, 37, 2, 750, 25)]), new _Province.default('Newfoundland and Labrador', [new _City.default('St. John\'s', 'st-johns.webp', 30, 25, 35, 12, 10, 50, 4, 900, 40), new _City.default('Corner Brook', 'corner-brook.jpg', 27, 22, 32, 11, 9, 45, 3, 850, 35), new _City.default('Mount Pearl', 'mount-pearl.png', 28, 23, 33, 11, 9, 46, 3, 870, 36)]), new _Province.default('Nova Scotia', [new _City.default('Halifax', 'halifax.jpg', 40, 35, 50, 20, 15, 70, 6, 1100, 60), new _City.default('Dartmouth', 'dartmouth.jpg', 37, 32, 47, 18, 13, 67, 5, 1050, 55), new _City.default('Sydney', 'sydney.jpg', 33, 28, 43, 16, 11, 63, 4, 1000, 50)]), new _Province.default('Ontario', [new _City.default('Toronto', 'toronto.webp', 70, 60, 80, 40, 35, 100, 18, 2000, 150), new _City.default('Ottawa', 'ottawa.jpg', 60, 50, 70, 35, 30, 90, 15, 1800, 120), new _City.default('Mississauga', 'mississauga.webp', 65, 55, 75, 38, 33, 95, 17, 1900, 130)]), new _Province.default('Prince Edward Island', [new _City.default('Charlottetown', 'charlottetown.jpg', 20, 15, 25, 8, 6, 35, 2, 700, 20), new _City.default('Summerside', 'summerside.jpg', 18, 13, 23, 7, 5, 30, 2, 680, 18), new _City.default('Stratford', 'stratford.jpg', 19, 14, 24, 8, 6, 32, 2, 690, 19)]), new _Province.default('Quebec', [new _City.default('Montreal', 'montreal.jpg', 65, 55, 75, 35, 30, 95, 16, 1900, 130), new _City.default('Quebec City', 'quebec-city.jpg', 50, 45, 60, 30, 25, 80, 12, 1700, 110), new _City.default('Laval', 'laval.jpg', 58, 48, 68, 33, 28, 88, 15, 1850, 125)]), new _Province.default('Saskatchewan', [new _City.default('Regina', 'regina.jpg', 30, 20, 40, 15, 10, 50, 5, 900, 40), new _City.default('Saskatoon', 'saskatoon.jpg', 35, 25, 45, 20, 15, 60, 6, 1000, 50), new _City.default('Prince Albert', 'prince-albert.webp', 32, 22, 42, 17, 12, 55, 6, 950, 45)])];
  var provinceSelect = document.getElementById('province');
  var cityContainer = document.getElementById('city-container');
  provinceSelect.addEventListener('change', function () {
    var selectedProvinceName = provinceSelect.value;
    var selectedProvince = provinces.find(function (province) {
      return province.name === selectedProvinceName;
    });
    if (selectedProvince) {
      cityContainer.innerHTML = '';
      selectedProvince.cities.forEach(function (city) {
        cityContainer.innerHTML += city.getCardHTML();
      });
    } else {
      cityContainer.innerHTML = '';
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 1000);
});
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000);
}
gsap.to(".hero-heading", {
  duration: 1,
  opacity: 1,
  delay: 0.5
});
},{"./Province.js":"js/Province.js","./City.js":"js/City.js"}],"../../../Users/abbod/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63902" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../Users/abbod/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map