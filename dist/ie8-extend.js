/******/ !function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) 
        /******/ return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/        var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: !1,
            /******/ exports: {}
            /******/        };
        /******/
        /******/ // Execute the module function
        /******/        
        /******/
        /******/ // Return the exports of the module
        /******/ return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = !0, module.exports;
        /******/    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/    
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ __webpack_require__.m = modules, 
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules, 
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ __webpack_require__.o(exports, name) || 
        /******/ Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        })
        /******/;
    }, 
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function(exports) {
        /******/ "undefined" != typeof Symbol && Symbol.toStringTag && 
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        })
        /******/ , Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, 
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function(value, mode) {
        /******/ if (
        /******/ 1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        /******/        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        /******/        var ns = Object.create(null);
        /******/        
        /******/ if (__webpack_require__.r(ns), 
        /******/ Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        /******/        return ns;
        /******/    }, 
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function(module) {
        /******/ var getter = module && module.__esModule ? 
        /******/ function() {
            return module["default"];
        } : 
        /******/ function() {
            return module;
        };
        /******/        
        /******/ return __webpack_require__.d(getter, "a", getter), getter;
        /******/    }, 
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, 
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 151);
    /******/}
/************************************************************************/
/******/ ([ 
/* 0 */
/***/ function(module, exports, __webpack_require__) {
    var global = __webpack_require__(2), core = __webpack_require__(18), hide = __webpack_require__(11), redefine = __webpack_require__(12), ctx = __webpack_require__(19), $export = function(type, name, source) {
        var key, own, out, exp, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})["prototype"], exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports["prototype"] || (exports["prototype"] = {});
        for (key in IS_GLOBAL && (source = name), source) 
        // contains in native
        // export native or passed
        out = ((own = !IS_FORCED && target && target[key] !== undefined) ? target : source)[key], 
        // bind timers to global for call from export context
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, 
        // extend global
        target && redefine(target, key, out, type & $export.U), 
        // export
        exports[key] != out && hide(exports, key, exp), IS_PROTO && expProto[key] != out && (expProto[key] = out);
    };
    global.core = core, 
    // type bitmap
    $export.F = 1, // forced
    $export.G = 2, // global
    $export.S = 4, // static
    $export.P = 8, // proto
    $export.B = 16, // bind
    $export.W = 32, // wrap
    $export.U = 64, // safe
    $export.R = 128, // real proto method for `library`
    module.exports = $export;
}, 
/* 1 */
/***/ function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4);
    module.exports = function(it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
    };
}, 
/* 2 */
/***/ function(module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = global);
 // eslint-disable-line no-undef
    /***/}, 
/* 3 */
/***/ function(module, exports) {
    module.exports = function(exec) {
        try {
            return !!exec();
        } catch (e) {
            return !0;
        }
    };
    /***/}, 
/* 4 */
/***/ function(module, exports) {
    module.exports = function(it) {
        return "object" == typeof it ? null !== it : "function" == typeof it;
    };
    /***/}, 
/* 5 */
/***/ function(module, exports, __webpack_require__) {
    var store = __webpack_require__(59)("wks"), uid = __webpack_require__(35), Symbol = __webpack_require__(2).Symbol, USE_SYMBOL = "function" == typeof Symbol;
    (module.exports = function(name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
    }).store = store;
}, 
/* 6 */
/***/ function(module, exports, __webpack_require__) {
    // 7.1.15 ToLength
    var toInteger = __webpack_require__(21), min = Math.min;
    module.exports = function(it) {
        return 0 < it ? min(toInteger(it), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
        };
}, 
/* 7 */
/***/ function(module, exports, __webpack_require__) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(3)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
    /***/}, 
/* 8 */
/***/ function(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(1), IE8_DOM_DEFINE = __webpack_require__(115), toPrimitive = __webpack_require__(23), dP = Object.defineProperty;
    exports.f = __webpack_require__(7) ? Object.defineProperty : function(O, P, Attributes) {
        if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
        } catch (e) {/* empty */}
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        return "value" in Attributes && (O[P] = Attributes.value), O;
    };
}, 
/* 9 */
/***/ function(module, exports, __webpack_require__) {
    // 7.1.13 ToObject(argument)
    var defined = __webpack_require__(24);
    module.exports = function(it) {
        return Object(defined(it));
    };
}, 
/* 10 */
/***/ function(module, exports) {
    module.exports = function(it) {
        if ("function" != typeof it) throw TypeError(it + " is not a function!");
        return it;
    };
    /***/}, 
/* 11 */
/***/ function(module, exports, __webpack_require__) {
    var dP = __webpack_require__(8), createDesc = __webpack_require__(34);
    module.exports = __webpack_require__(7) ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
        return object[key] = value, object;
    };
}, 
/* 12 */
/***/ function(module, exports, __webpack_require__) {
    var global = __webpack_require__(2), hide = __webpack_require__(11), has = __webpack_require__(14), SRC = __webpack_require__(35)("src"), $toString = Function["toString"], TPL = ("" + $toString).split("toString");
    __webpack_require__(18).inspectSource = function(it) {
        return $toString.call(it);
    }, (module.exports = function(O, key, val, safe) {
        var isFunction = "function" == typeof val;
        isFunction && (has(val, "name") || hide(val, "name", key)), O[key] !== val && (isFunction && (has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)))), 
        O === global ? O[key] = val : safe ? O[key] ? O[key] = val : hide(O, key, val) : (delete O[key], 
        hide(O, key, val)));
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[SRC] || $toString.call(this);
    });
}, 
/* 13 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), fails = __webpack_require__(3), defined = __webpack_require__(24), quot = /"/g, createHTML = function(string, tag, attribute, value) {
        var S = String(defined(string)), p1 = "<" + tag;
        return "" !== attribute && (p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"'), 
        p1 + ">" + S + "</" + tag + ">";
    };
    module.exports = function(NAME, exec) {
        var O = {};
        O[NAME] = exec(createHTML), $export($export.P + $export.F * fails(function() {
            var test = ""[NAME]('"');
            return test !== test.toLowerCase() || 3 < test.split('"').length;
        }), "String", O);
    };
}, 
/* 14 */
/***/ function(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
    };
}, 
/* 15 */
/***/ function(module, exports, __webpack_require__) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__(52), defined = __webpack_require__(24);
    module.exports = function(it) {
        return IObject(defined(it));
    };
}, 
/* 16 */
/***/ function(module, exports, __webpack_require__) {
    var pIE = __webpack_require__(53), createDesc = __webpack_require__(34), toIObject = __webpack_require__(15), toPrimitive = __webpack_require__(23), has = __webpack_require__(14), IE8_DOM_DEFINE = __webpack_require__(115), gOPD = Object.getOwnPropertyDescriptor;
    exports.f = __webpack_require__(7) ? gOPD : function(O, P) {
        if (O = toIObject(O), P = toPrimitive(P, !0), IE8_DOM_DEFINE) try {
            return gOPD(O, P);
        } catch (e) {/* empty */}
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
}, 
/* 17 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = __webpack_require__(14), toObject = __webpack_require__(9), IE_PROTO = __webpack_require__(81)("IE_PROTO"), ObjectProto = Object.prototype;
    module.exports = Object.getPrototypeOf || function(O) {
        return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null;
    };
}, 
/* 18 */
/***/ function(module, exports) {
    var core = module.exports = {
        version: "2.6.2"
    };
    "number" == typeof __e && (__e = core);
 // eslint-disable-line no-undef
    /***/}, 
/* 19 */
/***/ function(module, exports, __webpack_require__) {
    // optional / simple context binding
    var aFunction = __webpack_require__(10);
    module.exports = function(fn, that, length) {
        if (aFunction(fn), that === undefined) return fn;
        switch (length) {
          case 1:
            return function(a) {
                return fn.call(that, a);
            };

          case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };

          case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
        }
        return function() {
            return fn.apply(that, arguments);
        };
    };
}, 
/* 20 */
/***/ function(module, exports) {
    var toString = {}.toString;
    module.exports = function(it) {
        return toString.call(it).slice(8, -1);
    };
}, 
/* 21 */
/***/ function(module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil, floor = Math.floor;
    module.exports = function(it) {
        return isNaN(it = +it) ? 0 : (0 < it ? floor : ceil)(it);
    };
}, 
/* 22 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var fails = __webpack_require__(3);
    module.exports = function(method, arg) {
        return !!method && fails(function() {
            // eslint-disable-next-line no-useless-call
            arg ? method.call(null, function() {/* empty */}, 1) : method.call(null);
        });
    };
}, 
/* 23 */
/***/ function(module, exports, __webpack_require__) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = __webpack_require__(4);
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
        if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
        if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };
}, 
/* 24 */
/***/ function(module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function(it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
    };
    /***/}, 
/* 25 */
/***/ function(module, exports, __webpack_require__) {
    // most Object methods by ES6 should accept primitives
    var $export = __webpack_require__(0), core = __webpack_require__(18), fails = __webpack_require__(3);
    module.exports = function(KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
        exp[KEY] = exec(fn), $export($export.S + $export.F * fails(function() {
            fn(1);
        }), "Object", exp);
    };
}, 
/* 26 */
/***/ function(module, exports, __webpack_require__) {
    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex
    var ctx = __webpack_require__(19), IObject = __webpack_require__(52), toObject = __webpack_require__(9), toLength = __webpack_require__(6), asc = __webpack_require__(97);
    module.exports = function(TYPE, $create) {
        var IS_MAP = 1 == TYPE, IS_FILTER = 2 == TYPE, IS_SOME = 3 == TYPE, IS_EVERY = 4 == TYPE, IS_FIND_INDEX = 6 == TYPE, NO_HOLES = 5 == TYPE || IS_FIND_INDEX, create = $create || asc;
        return function($this, callbackfn, that) {
            for (var val, res, O = toObject($this), self = IObject(O), f = ctx(callbackfn, that, 3), length = toLength(self.length), index = 0, result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined; index < length; index++) if ((NO_HOLES || index in self) && (res = f(val = self[index], index, O), 
            TYPE)) if (IS_MAP) result[index] = res; // map
             else if (res) switch (TYPE) {
              case 3:
                return !0;

 // some
                              case 5:
                return val;

 // find
                              case 6:
                return index;

 // findIndex
                              case 2:
                result.push(val);
 // filter
                        } else if (IS_EVERY) return !1;
 // every
                        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
    };
}, 
/* 27 */
/***/ function(module, exports) {
    var g;
    // This works in non-strict mode
        g = function() {
        return this;
    }();
    try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
    } catch (e) {
        // This works if the window reference is available
        "object" == typeof window && (g = window);
    }
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
        module.exports = g;
}, 
/* 28 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    if (__webpack_require__(7)) {
        var LIBRARY = __webpack_require__(31), global = __webpack_require__(2), fails = __webpack_require__(3), $export = __webpack_require__(0), $typed = __webpack_require__(70), $buffer = __webpack_require__(105), ctx = __webpack_require__(19), anInstance = __webpack_require__(41), propertyDesc = __webpack_require__(34), hide = __webpack_require__(11), redefineAll = __webpack_require__(43), toInteger = __webpack_require__(21), toLength = __webpack_require__(6), toIndex = __webpack_require__(143), toAbsoluteIndex = __webpack_require__(37), toPrimitive = __webpack_require__(23), has = __webpack_require__(14), classof = __webpack_require__(46), isObject = __webpack_require__(4), toObject = __webpack_require__(9), isArrayIter = __webpack_require__(94), create = __webpack_require__(38), getPrototypeOf = __webpack_require__(17), gOPN = __webpack_require__(39).f, getIterFn = __webpack_require__(96), uid = __webpack_require__(35), wks = __webpack_require__(5), createArrayMethod = __webpack_require__(26), createArrayIncludes = __webpack_require__(60), speciesConstructor = __webpack_require__(55), ArrayIterators = __webpack_require__(99), Iterators = __webpack_require__(48), $iterDetect = __webpack_require__(65), setSpecies = __webpack_require__(40), arrayFill = __webpack_require__(98), arrayCopyWithin = __webpack_require__(132), $DP = __webpack_require__(8), $GOPD = __webpack_require__(16), dP = $DP.f, gOPD = $GOPD.f, RangeError = global.RangeError, TypeError = global.TypeError, Uint8Array = global.Uint8Array, ArrayProto = Array["prototype"], $ArrayBuffer = $buffer.ArrayBuffer, $DataView = $buffer.DataView, arrayForEach = createArrayMethod(0), arrayFilter = createArrayMethod(2), arraySome = createArrayMethod(3), arrayEvery = createArrayMethod(4), arrayFind = createArrayMethod(5), arrayFindIndex = createArrayMethod(6), arrayIncludes = createArrayIncludes(!0), arrayIndexOf = createArrayIncludes(!1), arrayValues = ArrayIterators.values, arrayKeys = ArrayIterators.keys, arrayEntries = ArrayIterators.entries, arrayLastIndexOf = ArrayProto.lastIndexOf, arrayReduce = ArrayProto.reduce, arrayReduceRight = ArrayProto.reduceRight, arrayJoin = ArrayProto.join, arraySort = ArrayProto.sort, arraySlice = ArrayProto.slice, arrayToString = ArrayProto.toString, arrayToLocaleString = ArrayProto.toLocaleString, ITERATOR = wks("iterator"), TAG = wks("toStringTag"), TYPED_CONSTRUCTOR = uid("typed_constructor"), DEF_CONSTRUCTOR = uid("def_constructor"), ALL_CONSTRUCTORS = $typed.CONSTR, TYPED_ARRAY = $typed.TYPED, VIEW = $typed.VIEW, $map = createArrayMethod(1, function(O, length) {
            return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
        }), LITTLE_ENDIAN = fails(function() {
            // eslint-disable-next-line no-undef
            return 1 === new Uint8Array(new Uint16Array([ 1 ]).buffer)[0];
        }), FORCED_SET = !!Uint8Array && !!Uint8Array["prototype"].set && fails(function() {
            new Uint8Array(1).set({});
        }), toOffset = function(it, BYTES) {
            var offset = toInteger(it);
            if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset!");
            return offset;
        }, validate = function(it) {
            if (isObject(it) && TYPED_ARRAY in it) return it;
            throw TypeError(it + " is not a typed array!");
        }, allocate = function(C, length) {
            if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) throw TypeError("It is not a typed array constructor!");
            return new C(length);
        }, speciesFromList = function(O, list) {
            return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
        }, fromList = function(C, list) {
            for (var index = 0, length = list.length, result = allocate(C, length); index < length; ) result[index] = list[index++];
            return result;
        }, addGetter = function(it, key, internal) {
            dP(it, key, {
                get: function() {
                    return this._d[internal];
                }
            });
        }, $from = function(source /* , mapfn, thisArg */) {
            var i, length, values, result, step, iterator, O = toObject(source), aLen = arguments.length, mapfn = 1 < aLen ? arguments[1] : undefined, mapping = mapfn !== undefined, iterFn = getIterFn(O);
            if (iterFn != undefined && !isArrayIter(iterFn)) {
                for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) values.push(step.value);
                O = values;
            }
            for (mapping && 2 < aLen && (mapfn = ctx(mapfn, arguments[2], 2)), i = 0, length = toLength(O.length), 
            result = allocate(this, length); i < length; i++) result[i] = mapping ? mapfn(O[i], i) : O[i];
            return result;
        }, $of = function() {
            for (var index = 0, length = arguments.length, result = allocate(this, length); index < length; ) result[index] = arguments[index++];
            return result;
        }, TO_LOCALE_BUG = !!Uint8Array && fails(function() {
            arrayToLocaleString.call(new Uint8Array(1));
        }), $toLocaleString = function() {
            return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
        }, proto = {
            copyWithin: function(target, start /* , end */) {
                return arrayCopyWithin.call(validate(this), target, start, 2 < arguments.length ? arguments[2] : undefined);
            },
            every: function(callbackfn /* , thisArg */) {
                return arrayEvery(validate(this), callbackfn, 1 < arguments.length ? arguments[1] : undefined);
            },
            fill: function(value /* , start, end */) {
                // eslint-disable-line no-unused-vars
                return arrayFill.apply(validate(this), arguments);
            },
            filter: function(callbackfn /* , thisArg */) {
                return speciesFromList(this, arrayFilter(validate(this), callbackfn, 1 < arguments.length ? arguments[1] : undefined));
            },
            find: function(predicate /* , thisArg */) {
                return arrayFind(validate(this), predicate, 1 < arguments.length ? arguments[1] : undefined);
            },
            findIndex: function(predicate /* , thisArg */) {
                return arrayFindIndex(validate(this), predicate, 1 < arguments.length ? arguments[1] : undefined);
            },
            forEach: function(callbackfn /* , thisArg */) {
                arrayForEach(validate(this), callbackfn, 1 < arguments.length ? arguments[1] : undefined);
            },
            indexOf: function(searchElement /* , fromIndex */) {
                return arrayIndexOf(validate(this), searchElement, 1 < arguments.length ? arguments[1] : undefined);
            },
            includes: function(searchElement /* , fromIndex */) {
                return arrayIncludes(validate(this), searchElement, 1 < arguments.length ? arguments[1] : undefined);
            },
            join: function(separator) {
                // eslint-disable-line no-unused-vars
                return arrayJoin.apply(validate(this), arguments);
            },
            lastIndexOf: function(searchElement /* , fromIndex */) {
                // eslint-disable-line no-unused-vars
                return arrayLastIndexOf.apply(validate(this), arguments);
            },
            map: function(mapfn /* , thisArg */) {
                return $map(validate(this), mapfn, 1 < arguments.length ? arguments[1] : undefined);
            },
            reduce: function(callbackfn /* , initialValue */) {
                // eslint-disable-line no-unused-vars
                return arrayReduce.apply(validate(this), arguments);
            },
            reduceRight: function(callbackfn /* , initialValue */) {
                // eslint-disable-line no-unused-vars
                return arrayReduceRight.apply(validate(this), arguments);
            },
            reverse: function() {
                for (var value, length = validate(this).length, middle = Math.floor(length / 2), index = 0; index < middle; ) value = this[index], 
                this[index++] = this[--length], this[length] = value;
                return this;
            },
            some: function(callbackfn /* , thisArg */) {
                return arraySome(validate(this), callbackfn, 1 < arguments.length ? arguments[1] : undefined);
            },
            sort: function(comparefn) {
                return arraySort.call(validate(this), comparefn);
            },
            subarray: function(begin, end) {
                var O = validate(this), length = O.length, $begin = toAbsoluteIndex(begin, length);
                return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
            }
        }, $slice = function(start, end) {
            return speciesFromList(this, arraySlice.call(validate(this), start, end));
        }, $set = function(arrayLike /* , offset */) {
            validate(this);
            var offset = toOffset(arguments[1], 1), length = this.length, src = toObject(arrayLike), len = toLength(src.length), index = 0;
            if (length < len + offset) throw RangeError("Wrong length!");
            for (;index < len; ) this[offset + index] = src[index++];
        }, $iterators = {
            entries: function() {
                return arrayEntries.call(validate(this));
            },
            keys: function() {
                return arrayKeys.call(validate(this));
            },
            values: function() {
                return arrayValues.call(validate(this));
            }
        }, isTAIndex = function(target, key) {
            return isObject(target) && target[TYPED_ARRAY] && "symbol" != typeof key && key in target && String(+key) == String(key);
        }, $getDesc = function(target, key) {
            return isTAIndex(target, key = toPrimitive(key, !0)) ? propertyDesc(2, target[key]) : gOPD(target, key);
        }, $setDesc = function(target, key, desc) {
            return !(isTAIndex(target, key = toPrimitive(key, !0)) && isObject(desc) && has(desc, "value")) || has(desc, "get") || has(desc, "set") || desc.configurable || has(desc, "writable") && !desc.writable || has(desc, "enumerable") && !desc.enumerable ? dP(target, key, desc) : (target[key] = desc.value, 
            target);
        };
        ALL_CONSTRUCTORS || ($GOPD.f = $getDesc, $DP.f = $setDesc), $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
            getOwnPropertyDescriptor: $getDesc,
            defineProperty: $setDesc
        }), fails(function() {
            arrayToString.call({});
        }) && (arrayToString = arrayToLocaleString = function() {
            return arrayJoin.call(this);
        });
        var $TypedArrayPrototype$ = redefineAll({}, proto);
        redefineAll($TypedArrayPrototype$, $iterators), hide($TypedArrayPrototype$, ITERATOR, $iterators.values), 
        redefineAll($TypedArrayPrototype$, {
            slice: $slice,
            set: $set,
            constructor: function() {/* noop */},
            toString: arrayToString,
            toLocaleString: $toLocaleString
        }), addGetter($TypedArrayPrototype$, "buffer", "b"), addGetter($TypedArrayPrototype$, "byteOffset", "o"), 
        addGetter($TypedArrayPrototype$, "byteLength", "l"), addGetter($TypedArrayPrototype$, "length", "e"), 
        dP($TypedArrayPrototype$, TAG, {
            get: function() {
                return this[TYPED_ARRAY];
            }
        }), 
        // eslint-disable-next-line max-statements
        module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
            var NAME = KEY + ((CLAMPED = !!CLAMPED) ? "Clamped" : "") + "Array", GETTER = "get" + KEY, SETTER = "set" + KEY, TypedArray = global[NAME], Base = TypedArray || {}, TAC = TypedArray && getPrototypeOf(TypedArray), FORCED = !TypedArray || !$typed.ABV, O = {}, TypedArrayPrototype = TypedArray && TypedArray["prototype"], addElement = function(that, index) {
                dP(that, index, {
                    get: function() {
                        return function(that, index) {
                            var data = that._d;
                            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
                        }(this, index);
                    },
                    set: function(value) {
                        return function(that, index, value) {
                            var data = that._d;
                            CLAMPED && (value = (value = Math.round(value)) < 0 ? 0 : 255 < value ? 255 : 255 & value), 
                            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
                        }(this, index, value);
                    },
                    enumerable: !0
                });
            };
            FORCED ? (TypedArray = wrapper(function(that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME, "_d");
                var buffer, byteLength, length, klass, index = 0, offset = 0;
                if (isObject(data)) {
                    if (!(data instanceof $ArrayBuffer || "ArrayBuffer" == (klass = classof(data)) || "SharedArrayBuffer" == klass)) return TYPED_ARRAY in data ? fromList(TypedArray, data) : $from.call(TypedArray, data);
                    buffer = data, offset = toOffset($offset, BYTES);
                    var $len = data.byteLength;
                    if ($length === undefined) {
                        if ($len % BYTES) throw RangeError("Wrong length!");
                        if ((byteLength = $len - offset) < 0) throw RangeError("Wrong length!");
                    } else if ($len < (byteLength = toLength($length) * BYTES) + offset) throw RangeError("Wrong length!");
                    length = byteLength / BYTES;
                } else length = toIndex(data), buffer = new $ArrayBuffer(byteLength = length * BYTES);
                for (hide(that, "_d", {
                    b: buffer,
                    o: offset,
                    l: byteLength,
                    e: length,
                    v: new $DataView(buffer)
                }); index < length; ) addElement(that, index++);
            }), TypedArrayPrototype = TypedArray["prototype"] = create($TypedArrayPrototype$), 
            hide(TypedArrayPrototype, "constructor", TypedArray)) : fails(function() {
                TypedArray(1);
            }) && fails(function() {
                new TypedArray(-1);
 // eslint-disable-line no-new
                        }) && $iterDetect(function(iter) {
                new TypedArray(), // eslint-disable-line no-new
                new TypedArray(null), // eslint-disable-line no-new
                new TypedArray(1.5), // eslint-disable-line no-new
                new TypedArray(iter);
            }, !0) || (TypedArray = wrapper(function(that, data, $offset, $length) {
                var klass;
                // `ws` module bug, temporarily remove validation length for Uint8Array
                // https://github.com/websockets/ws/pull/645
                                return anInstance(that, TypedArray, NAME), isObject(data) ? data instanceof $ArrayBuffer || "ArrayBuffer" == (klass = classof(data)) || "SharedArrayBuffer" == klass ? $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data) : TYPED_ARRAY in data ? fromList(TypedArray, data) : $from.call(TypedArray, data) : new Base(toIndex(data));
            }), arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                key in TypedArray || hide(TypedArray, key, Base[key]);
            }), TypedArray["prototype"] = TypedArrayPrototype, LIBRARY || (TypedArrayPrototype.constructor = TypedArray));
            var $nativeIterator = TypedArrayPrototype[ITERATOR], CORRECT_ITER_NAME = !!$nativeIterator && ("values" == $nativeIterator.name || $nativeIterator.name == undefined), $iterator = $iterators.values;
            hide(TypedArray, TYPED_CONSTRUCTOR, !0), hide(TypedArrayPrototype, TYPED_ARRAY, NAME), 
            hide(TypedArrayPrototype, VIEW, !0), hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray), 
            (CLAMPED ? new TypedArray(1)[TAG] == NAME : TAG in TypedArrayPrototype) || dP(TypedArrayPrototype, TAG, {
                get: function() {
                    return NAME;
                }
            }), O[NAME] = TypedArray, $export($export.G + $export.W + $export.F * (TypedArray != Base), O), 
            $export($export.S, NAME, {
                BYTES_PER_ELEMENT: BYTES
            }), $export($export.S + $export.F * fails(function() {
                Base.of.call(TypedArray, 1);
            }), NAME, {
                from: $from,
                of: $of
            }), "BYTES_PER_ELEMENT" in TypedArrayPrototype || hide(TypedArrayPrototype, "BYTES_PER_ELEMENT", BYTES), 
            $export($export.P, NAME, proto), setSpecies(NAME), $export($export.P + $export.F * FORCED_SET, NAME, {
                set: $set
            }), $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators), LIBRARY || TypedArrayPrototype.toString == arrayToString || (TypedArrayPrototype.toString = arrayToString), 
            $export($export.P + $export.F * fails(function() {
                new TypedArray(1).slice();
            }), NAME, {
                slice: $slice
            }), $export($export.P + $export.F * (fails(function() {
                return [ 1, 2 ].toLocaleString() != new TypedArray([ 1, 2 ]).toLocaleString();
            }) || !fails(function() {
                TypedArrayPrototype.toLocaleString.call([ 1, 2 ]);
            })), NAME, {
                toLocaleString: $toLocaleString
            }), Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator, LIBRARY || CORRECT_ITER_NAME || hide(TypedArrayPrototype, ITERATOR, $iterator);
        };
    } else module.exports = function() {/* empty */};
    /***/}, 
/* 29 */
/***/ function(module, exports, __webpack_require__) {
    var Map = __webpack_require__(138), $export = __webpack_require__(0), shared = __webpack_require__(59)("metadata"), store = shared.store || (shared.store = new (__webpack_require__(141))()), getOrCreateMetadataMap = function(target, targetKey, create) {
        var targetMetadata = store.get(target);
        if (!targetMetadata) {
            if (!create) return undefined;
            store.set(target, targetMetadata = new Map());
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
            if (!create) return undefined;
            targetMetadata.set(targetKey, keyMetadata = new Map());
        }
        return keyMetadata;
    };
    module.exports = {
        store: store,
        map: getOrCreateMetadataMap,
        has: function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, !1);
            return metadataMap !== undefined && metadataMap.has(MetadataKey);
        },
        get: function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, !1);
            return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
        },
        set: function(MetadataKey, MetadataValue, O, P) {
            getOrCreateMetadataMap(O, P, !0).set(MetadataKey, MetadataValue);
        },
        keys: function(target, targetKey) {
            var metadataMap = getOrCreateMetadataMap(target, targetKey, !1), keys = [];
            return metadataMap && metadataMap.forEach(function(_, key) {
                keys.push(key);
            }), keys;
        },
        key: function(it) {
            return it === undefined || "symbol" == typeof it ? it : String(it);
        },
        exp: function(O) {
            $export($export.S, "Reflect", O);
        }
    };
}, 
/* 30 */
/***/ function(module, exports, __webpack_require__) {
    var META = __webpack_require__(35)("meta"), isObject = __webpack_require__(4), has = __webpack_require__(14), setDesc = __webpack_require__(8).f, id = 0, isExtensible = Object.isExtensible || function() {
        return !0;
    }, FREEZE = !__webpack_require__(3)(function() {
        return isExtensible(Object.preventExtensions({}));
    }), setMeta = function(it) {
        setDesc(it, META, {
            value: {
                i: "O" + ++id,
                // object ID
                w: {}
            }
        });
    }, meta = module.exports = {
        KEY: META,
        NEED: !1,
        fastKey: function(it, create) {
            // return primitive with prefix
            if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return "F";
                // not necessary to add metadata
                                if (!create) return "E";
                // add missing metadata
                                setMeta(it);
            }
            return it[META].i;
        },
        getWeak: function(it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return !0;
                // not necessary to add metadata
                                if (!create) return !1;
                // add missing metadata
                                setMeta(it);
            }
            return it[META].w;
        },
        onFreeze: function(it) {
            return FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it), 
            it;
        }
    };
}, 
/* 31 */
/***/ function(module, exports) {
    module.exports = !1;
    /***/}, 
/* 32 */
/***/ function(module, exports, __webpack_require__) {
    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = __webpack_require__(5)("unscopables"), ArrayProto = Array.prototype;
    ArrayProto[UNSCOPABLES] == undefined && __webpack_require__(11)(ArrayProto, UNSCOPABLES, {}), 
    module.exports = function(key) {
        ArrayProto[UNSCOPABLES][key] = !0;
    };
}, 
/* 33 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    // a duplex stream is just a stream that is both readable and writable.
    // Since JS doesn't have multiple prototypal inheritance, this class
    // prototypally inherits from Readable, and then parasitically from
    // Writable.
    /*<replacement>*/    var pna = __webpack_require__(57), objectKeys = Object.keys || function(obj) {
        var keys = [];
        for (var key in obj) keys.push(key);
        return keys;
    };
    /*</replacement>*/
    /*<replacement>*/    
    /*</replacement>*/
    module.exports = Duplex;
    /*<replacement>*/
    var util = __webpack_require__(51);
    util.inherits = __webpack_require__(44);
    /*</replacement>*/
    var Readable = __webpack_require__(108), Writable = __webpack_require__(78);
    util.inherits(Duplex, Readable);
    for (
    // avoid scope creep, the keys array can then be collected
    var keys = objectKeys(Writable.prototype), v = 0; v < keys.length; v++) {
        var method = keys[v];
        Duplex.prototype[method] || (Duplex.prototype[method] = Writable.prototype[method]);
    }
    function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
        Readable.call(this, options), Writable.call(this, options), options && !1 === options.readable && (this.readable = !1), 
        options && !1 === options.writable && (this.writable = !1), this.allowHalfOpen = !0, 
        options && !1 === options.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", onend);
    }
    // the no-half-open enforcer
    function onend() {
        // if we allow half-open state, or if the writable side ended,
        // then we're ok.
        this.allowHalfOpen || this._writableState.ended || 
        // no more data can be written.
        // But allow more writes to happen in this tick.
        pna.nextTick(onEndNT, this);
    }
    function onEndNT(self) {
        self.end();
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    }), Object.defineProperty(Duplex.prototype, "destroyed", {
        get: function() {
            return this._readableState !== undefined && this._writableState !== undefined && (this._readableState.destroyed && this._writableState.destroyed);
        },
        set: function(value) {
            // we ignore the value if the stream
            // has not been initialized yet
            this._readableState !== undefined && this._writableState !== undefined && (
            // backward compatibility, the user is explicitly
            // managing destroyed
            this._readableState.destroyed = value, this._writableState.destroyed = value);
        }
    }), Duplex.prototype._destroy = function(err, cb) {
        this.push(null), this.end(), pna.nextTick(cb, err);
    };
}, 
/* 34 */
/***/ function(module, exports) {
    module.exports = function(bitmap, value) {
        return {
            enumerable: !(1 & bitmap),
            configurable: !(2 & bitmap),
            writable: !(4 & bitmap),
            value: value
        };
    };
    /***/}, 
/* 35 */
/***/ function(module, exports) {
    var id = 0, px = Math.random();
    module.exports = function(key) {
        return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
    };
}, 
/* 36 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = __webpack_require__(117), enumBugKeys = __webpack_require__(82);
    module.exports = Object.keys || function(O) {
        return $keys(O, enumBugKeys);
    };
}, 
/* 37 */
/***/ function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(21), max = Math.max, min = Math.min;
    module.exports = function(index, length) {
        return (index = toInteger(index)) < 0 ? max(index + length, 0) : min(index, length);
    };
}, 
/* 38 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = __webpack_require__(1), dPs = __webpack_require__(118), enumBugKeys = __webpack_require__(82), IE_PROTO = __webpack_require__(81)("IE_PROTO"), Empty = function() {/* empty */}, createDict = function() {
        // Thrash, waste and sodomy: IE GC bug
        var iframeDocument, iframe = __webpack_require__(79)("iframe"), i = enumBugKeys.length;
        for (iframe.style.display = "none", __webpack_require__(83).appendChild(iframe), 
        iframe.src = "javascript:", (// eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document).open(), iframeDocument.write("<script>document.F=Object<\/script>"), 
        iframeDocument.close(), createDict = iframeDocument.F; i--; ) delete createDict["prototype"][enumBugKeys[i]];
        return createDict();
    };
    module.exports = Object.create || function(O, Properties) {
        var result;
        return null !== O ? (Empty["prototype"] = anObject(O), result = new Empty(), Empty["prototype"] = null, 
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O) : result = createDict(), Properties === undefined ? result : dPs(result, Properties);
    };
}, 
/* 39 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = __webpack_require__(117), hiddenKeys = __webpack_require__(82).concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function(O) {
        return $keys(O, hiddenKeys);
    };
}, 
/* 40 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(2), dP = __webpack_require__(8), DESCRIPTORS = __webpack_require__(7), SPECIES = __webpack_require__(5)("species");
    module.exports = function(KEY) {
        var C = global[KEY];
        DESCRIPTORS && C && !C[SPECIES] && dP.f(C, SPECIES, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    };
}, 
/* 41 */
/***/ function(module, exports) {
    module.exports = function(it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) throw TypeError(name + ": incorrect invocation!");
        return it;
    };
    /***/}, 
/* 42 */
/***/ function(module, exports, __webpack_require__) {
    var ctx = __webpack_require__(19), call = __webpack_require__(130), isArrayIter = __webpack_require__(94), anObject = __webpack_require__(1), toLength = __webpack_require__(6), getIterFn = __webpack_require__(96), BREAK = {}, RETURN = {};
    (exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
        var length, step, iterator, result, iterFn = ITERATOR ? function() {
            return iterable;
        } : getIterFn(iterable), f = ctx(fn, that, entries ? 2 : 1), index = 0;
        if ("function" != typeof iterFn) throw TypeError(iterable + " is not iterable!");
        // fast case for arrays with default iterator
                if (isArrayIter(iterFn)) {
            for (length = toLength(iterable.length); index < length; index++) if ((result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index])) === BREAK || result === RETURN) return result;
        } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) if ((result = call(iterator, f, step.value, entries)) === BREAK || result === RETURN) return result;
    }).BREAK = BREAK, exports.RETURN = RETURN;
}, 
/* 43 */
/***/ function(module, exports, __webpack_require__) {
    var redefine = __webpack_require__(12);
    module.exports = function(target, src, safe) {
        for (var key in src) redefine(target, key, src[key], safe);
        return target;
    };
}, 
/* 44 */
/***/ function(module, exports) {
    "function" == typeof Object.create ? 
    // implementation from standard node.js 'util' module
    module.exports = function(ctor, superCtor) {
        ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
    } : 
    // old school shim for old browsers
    module.exports = function(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype, ctor.prototype = new TempCtor(), ctor.prototype.constructor = ctor;
    }
    /***/;
}, 
/* 45 */
/***/ function(module, exports, __webpack_require__) {
    var def = __webpack_require__(8).f, has = __webpack_require__(14), TAG = __webpack_require__(5)("toStringTag");
    module.exports = function(it, tag, stat) {
        it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
            configurable: !0,
            value: tag
        });
    };
}, 
/* 46 */
/***/ function(module, exports, __webpack_require__) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = __webpack_require__(20), TAG = __webpack_require__(5)("toStringTag"), ARG = "Arguments" == cof(function() {
        return arguments;
    }());
    module.exports = function(it) {
        var O, T, B;
        return it === undefined ? "Undefined" : null === it ? "Null" : "string" == typeof (T = function(it, key) {
            try {
                return it[key];
            } catch (e) {/* empty */}
        }(O = Object(it), TAG)) ? T : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B;
    };
}, 
/* 47 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), defined = __webpack_require__(24), fails = __webpack_require__(3), spaces = __webpack_require__(85), space = "[" + spaces + "]", ltrim = RegExp("^" + space + space + "*"), rtrim = RegExp(space + space + "*$"), exporter = function(KEY, exec, ALIAS) {
        var exp = {}, FORCE = fails(function() {
            return !!spaces[KEY]() || "​" != "​"[KEY]();
        }), fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
        ALIAS && (exp[ALIAS] = fn), $export($export.P + $export.F * FORCE, "String", exp);
    }, trim = exporter.trim = function(string, TYPE) {
        return string = String(defined(string)), 1 & TYPE && (string = string.replace(ltrim, "")), 
        2 & TYPE && (string = string.replace(rtrim, "")), string;
    };
    module.exports = exporter;
}, 
/* 48 */
/***/ function(module, exports) {
    module.exports = {};
    /***/}, 
/* 49 */
/***/ function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4);
    module.exports = function(it, TYPE) {
        if (!isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
        return it;
    };
}, 
/* 50 */
/***/ function(module, exports) {
    // shim for using process in browser
    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
        function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
    }
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) 
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
        // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
        setTimeout(fun, 0);
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    !function() {
        try {
            cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    }();
    var currentQueue, queue = [], draining = !1, queueIndex = -1;
    function cleanUpNextTick() {
        draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
        queue.length && drainQueue());
    }
    function drainQueue() {
        if (!draining) {
            var timeout = runTimeout(cleanUpNextTick);
            draining = !0;
            for (var len = queue.length; len; ) {
                for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                queueIndex = -1, len = queue.length;
            }
            currentQueue = null, draining = !1, function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) 
                //normal enviroments in sane situations
                return clearTimeout(marker);
                // if clearTimeout wasn't available but was latter defined
                                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                clearTimeout(marker);
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }(timeout);
        }
    }
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun, this.array = array;
    }
    function noop() {}
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
        queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
    process.version = "", // empty string to avoid regexp issues
    process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, 
    process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
    process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
    process.listeners = function(name) {
        return [];
    }, process.binding = function(name) {
        throw new Error("process.binding is not supported");
    }, process.cwd = function() {
        return "/";
    }, process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
    }, process.umask = function() {
        return 0;
    };
}, 
/* 51 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(Buffer) {
        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }
        /* WEBPACK VAR INJECTION */        exports.isArray = // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.
        function isArray(arg) {
            return Array.isArray ? Array.isArray(arg) : "[object Array]" === objectToString(arg);
        }, exports.isBoolean = function isBoolean(arg) {
            return "boolean" == typeof arg;
        }, exports.isNull = function isNull(arg) {
            return null === arg;
        }, exports.isNullOrUndefined = function isNullOrUndefined(arg) {
            return null == arg;
        }, exports.isNumber = function isNumber(arg) {
            return "number" == typeof arg;
        }, exports.isString = function isString(arg) {
            return "string" == typeof arg;
        }, exports.isSymbol = function isSymbol(arg) {
            return "symbol" == typeof arg;
        }, exports.isUndefined = function isUndefined(arg) {
            return void 0 === arg;
        }, exports.isRegExp = function isRegExp(re) {
            return "[object RegExp]" === objectToString(re);
        }, exports.isObject = function isObject(arg) {
            return "object" == typeof arg && null !== arg;
        }, exports.isDate = function isDate(d) {
            return "[object Date]" === objectToString(d);
        }, exports.isError = function isError(e) {
            return "[object Error]" === objectToString(e) || e instanceof Error;
        }, exports.isFunction = function isFunction(arg) {
            return "function" == typeof arg;
        }, exports.isPrimitive = function isPrimitive(arg) {
            return null === arg || "boolean" == typeof arg || "number" == typeof arg || "string" == typeof arg || "symbol" == typeof arg || // ES6 symbol
            void 0 === arg;
        }, exports.isBuffer = Buffer.isBuffer;
    }).call(this, __webpack_require__(111).Buffer)
    /***/;
}, 
/* 52 */
/***/ function(module, exports, __webpack_require__) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__(20);
    // eslint-disable-next-line no-prototype-builtins
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
        return "String" == cof(it) ? it.split("") : Object(it);
    };
}, 
/* 53 */
/***/ function(module, exports) {
    exports.f = {}.propertyIsEnumerable;
    /***/}, 
/* 54 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 21.2.5.3 get RegExp.prototype.flags
        var anObject = __webpack_require__(1);
    module.exports = function() {
        var that = anObject(this), result = "";
        return that.global && (result += "g"), that.ignoreCase && (result += "i"), that.multiline && (result += "m"), 
        that.unicode && (result += "u"), that.sticky && (result += "y"), result;
    };
}, 
/* 55 */
/***/ function(module, exports, __webpack_require__) {
    // 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject = __webpack_require__(1), aFunction = __webpack_require__(10), SPECIES = __webpack_require__(5)("species");
    module.exports = function(O, D) {
        var S, C = anObject(O).constructor;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
}, 
/* 56 */
/***/ function(module, exports) {
    module.exports = function(module) {
        return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], 
        // module.parent = undefined by default
        module.children || (module.children = []), Object.defineProperty(module, "loaded", {
            enumerable: !0,
            get: function() {
                return module.l;
            }
        }), Object.defineProperty(module, "id", {
            enumerable: !0,
            get: function() {
                return module.i;
            }
        }), module.webpackPolyfill = 1), module;
    };
    /***/}, 
/* 57 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */ (function(process) {
        !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? module.exports = {
            nextTick: function nextTick(fn, arg1, arg2, arg3) {
                if ("function" != typeof fn) throw new TypeError('"callback" argument must be a function');
                var args, i, len = arguments.length;
                switch (len) {
                  case 0:
                  case 1:
                    return process.nextTick(fn);

                  case 2:
                    return process.nextTick(function() {
                        fn.call(null, arg1);
                    });

                  case 3:
                    return process.nextTick(function() {
                        fn.call(null, arg1, arg2);
                    });

                  case 4:
                    return process.nextTick(function() {
                        fn.call(null, arg1, arg2, arg3);
                    });

                  default:
                    for (args = new Array(len - 1), i = 0; i < args.length; ) args[i++] = arguments[i];
                    return process.nextTick(function() {
                        fn.apply(null, args);
                    });
                }
            }
            /* WEBPACK VAR INJECTION */        } : module.exports = process;
    }).call(this, __webpack_require__(50))
    /***/;
}, 
/* 58 */
/***/ function(module, exports, __webpack_require__) {
    /* eslint-disable node/no-deprecated-api */
    var buffer = __webpack_require__(111), Buffer = buffer.Buffer;
    // alternative to using Object.keys for old browsers
    function copyProps(src, dst) {
        for (var key in src) dst[key] = src[key];
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
    }
    // Copy static methods from Buffer
        Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow ? module.exports = buffer : (
    // Copy properties from require('buffer')
    copyProps(buffer, exports), exports.Buffer = SafeBuffer), copyProps(Buffer, SafeBuffer), 
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if ("number" == typeof arg) throw new TypeError("Argument must not be a number");
        return Buffer(arg, encodingOrOffset, length);
    }, SafeBuffer.alloc = function(size, fill, encoding) {
        if ("number" != typeof size) throw new TypeError("Argument must be a number");
        var buf = Buffer(size);
        return fill !== undefined ? "string" == typeof encoding ? buf.fill(fill, encoding) : buf.fill(fill) : buf.fill(0), 
        buf;
    }, SafeBuffer.allocUnsafe = function(size) {
        if ("number" != typeof size) throw new TypeError("Argument must be a number");
        return Buffer(size);
    }, SafeBuffer.allocUnsafeSlow = function(size) {
        if ("number" != typeof size) throw new TypeError("Argument must be a number");
        return buffer.SlowBuffer(size);
    }
    /***/;
}, 
/* 59 */
/***/ function(module, exports, __webpack_require__) {
    var core = __webpack_require__(18), global = __webpack_require__(2), store = global["__core-js_shared__"] || (global["__core-js_shared__"] = {});
    (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
    })("versions", []).push({
        version: core.version,
        mode: __webpack_require__(31) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
}, 
/* 60 */
/***/ function(module, exports, __webpack_require__) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = __webpack_require__(15), toLength = __webpack_require__(6), toAbsoluteIndex = __webpack_require__(37);
    module.exports = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var value, O = toIObject($this), length = toLength(O.length), index = toAbsoluteIndex(fromIndex, length);
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el) {
                for (;index < length; ) 
                // eslint-disable-next-line no-self-compare
                if ((value = O[index++]) != value) return !0;
                // Array#indexOf ignores holes, Array#includes - not
                        } else for (;index < length; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            return !IS_INCLUDES && -1;
        };
    };
}, 
/* 61 */
/***/ function(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/}, 
/* 62 */
/***/ function(module, exports, __webpack_require__) {
    // 7.2.2 IsArray(argument)
    var cof = __webpack_require__(20);
    module.exports = Array.isArray || function(arg) {
        return "Array" == cof(arg);
    };
}, 
/* 63 */
/***/ function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(21), defined = __webpack_require__(24);
    // true  -> String#at
    // false -> String#codePointAt
    module.exports = function(TO_STRING) {
        return function(that, pos) {
            var a, b, s = String(defined(that)), i = toInteger(pos), l = s.length;
            return i < 0 || l <= i ? TO_STRING ? "" : undefined : (a = s.charCodeAt(i)) < 55296 || 56319 < a || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || 57343 < b ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536;
        };
    };
}, 
/* 64 */
/***/ function(module, exports, __webpack_require__) {
    // 7.2.8 IsRegExp(argument)
    var isObject = __webpack_require__(4), cof = __webpack_require__(20), MATCH = __webpack_require__(5)("match");
    module.exports = function(it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : "RegExp" == cof(it));
    };
}, 
/* 65 */
/***/ function(module, exports, __webpack_require__) {
    var ITERATOR = __webpack_require__(5)("iterator"), SAFE_CLOSING = !1;
    try {
        var riter = [ 7 ][ITERATOR]();
        riter["return"] = function() {
            SAFE_CLOSING = !0;
        }, 
        // eslint-disable-next-line no-throw-literal
        Array.from(riter, function() {
            throw 2;
        });
    } catch (e) {/* empty */}
    module.exports = function(exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return !1;
        var safe = !1;
        try {
            var arr = [ 7 ], iter = arr[ITERATOR]();
            iter.next = function() {
                return {
                    done: safe = !0
                };
            }, arr[ITERATOR] = function() {
                return iter;
            }, exec(arr);
        } catch (e) {/* empty */}
        return safe;
    };
}, 
/* 66 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var classof = __webpack_require__(46), builtinExec = RegExp.prototype.exec;
    // `RegExpExec` abstract operation
    // https://tc39.github.io/ecma262/#sec-regexpexec
    module.exports = function(R, S) {
        var exec = R.exec;
        if ("function" == typeof exec) {
            var result = exec.call(R, S);
            if ("object" != typeof result) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return result;
        }
        if ("RegExp" !== classof(R)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return builtinExec.call(R, S);
    };
}, 
/* 67 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(134);
    var redefine = __webpack_require__(12), hide = __webpack_require__(11), fails = __webpack_require__(3), defined = __webpack_require__(24), wks = __webpack_require__(5), regexpExec = __webpack_require__(100), SPECIES = wks("species"), REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        var re = /./;
        return re.exec = function() {
            var result = [];
            return result.groups = {
                a: "7"
            }, result;
        }, "7" !== "".replace(re, "$<a>");
    }), SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
        // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        var re = /(?:)/, originalExec = re.exec;
        re.exec = function() {
            return originalExec.apply(this, arguments);
        };
        var result = "ab".split(re);
        return 2 === result.length && "a" === result[0] && "b" === result[1];
    }();
    module.exports = function(KEY, length, exec) {
        var SYMBOL = wks(KEY), DELEGATES_TO_SYMBOL = !fails(function() {
            // String methods call symbol-named RegEp methods
            var O = {};
            return O[SYMBOL] = function() {
                return 7;
            }, 7 != ""[KEY](O);
        }), DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
            // Symbol-named RegExp methods call .exec
            var execCalled = !1, re = /a/;
            return re.exec = function() {
                return execCalled = !0, null;
            }, "split" === KEY && (
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {}, re.constructor[SPECIES] = function() {
                return re;
            }), re[SYMBOL](""), !execCalled;
        }) : undefined;
        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || "replace" === KEY && !REPLACE_SUPPORTS_NAMED_GROUPS || "split" === KEY && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL], fns = exec(defined, SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                return regexp.exec === regexpExec ? DELEGATES_TO_SYMBOL && !forceStringMethod ? {
                    done: !0,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                } : {
                    done: !0,
                    value: nativeMethod.call(str, regexp, arg2)
                } : {
                    done: !1
                };
            }), strfn = fns[0], rxfn = fns[1];
            redefine(String.prototype, KEY, strfn), hide(RegExp.prototype, SYMBOL, 2 == length ? function(string, arg) {
                return rxfn.call(string, this, arg);
            }
            // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
             : function(string) {
                return rxfn.call(string, this);
            });
        }
    };
}, 
/* 68 */
/***/ function(module, exports, __webpack_require__) {
    var navigator = __webpack_require__(2).navigator;
    module.exports = navigator && navigator.userAgent || "";
}, 
/* 69 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(2), $export = __webpack_require__(0), redefine = __webpack_require__(12), redefineAll = __webpack_require__(43), meta = __webpack_require__(30), forOf = __webpack_require__(42), anInstance = __webpack_require__(41), isObject = __webpack_require__(4), fails = __webpack_require__(3), $iterDetect = __webpack_require__(65), setToStringTag = __webpack_require__(45), inheritIfRequired = __webpack_require__(86);
    module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
        var Base = global[NAME], C = Base, ADDER = IS_MAP ? "set" : "add", proto = C && C.prototype, O = {}, fixMethod = function(KEY) {
            var fn = proto[KEY];
            redefine(proto, KEY, "delete" == KEY ? function(a) {
                return !(IS_WEAK && !isObject(a)) && fn.call(this, 0 === a ? 0 : a);
            } : "has" == KEY ? function(a) {
                return !(IS_WEAK && !isObject(a)) && fn.call(this, 0 === a ? 0 : a);
            } : "get" == KEY ? function(a) {
                return IS_WEAK && !isObject(a) ? undefined : fn.call(this, 0 === a ? 0 : a);
            } : "add" == KEY ? function(a) {
                return fn.call(this, 0 === a ? 0 : a), this;
            } : function(a, b) {
                return fn.call(this, 0 === a ? 0 : a, b), this;
            });
        };
        if ("function" == typeof C && (IS_WEAK || proto.forEach && !fails(function() {
            new C().entries().next();
        }))) {
            var instance = new C(), HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance, THROWS_ON_PRIMITIVES = fails(function() {
                instance.has(1);
            }), ACCEPT_ITERABLES = $iterDetect(function(iter) {
                new C(iter);
            }), BUGGY_ZERO = !IS_WEAK && fails(function() {
                for (
                // V8 ~ Chromium 42- fails only with 5+ elements
                var $instance = new C(), index = 5; index--; ) $instance[ADDER](index, index);
                return !$instance.has(-0);
            });
            // early implementations not supports chaining
                        ACCEPT_ITERABLES || (((C = wrapper(function(target, iterable) {
                anInstance(target, C, NAME);
                var that = inheritIfRequired(new Base(), target, C);
                return iterable != undefined && forOf(iterable, IS_MAP, that[ADDER], that), that;
            })).prototype = proto).constructor = C), (THROWS_ON_PRIMITIVES || BUGGY_ZERO) && (fixMethod("delete"), 
            fixMethod("has"), IS_MAP && fixMethod("get")), (BUGGY_ZERO || HASNT_CHAINING) && fixMethod(ADDER), 
            // weak collections should not contains .clear method
            IS_WEAK && proto.clear && delete proto.clear;
        } else 
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER), redefineAll(C.prototype, methods), 
        meta.NEED = !0;
        return setToStringTag(C, NAME), O[NAME] = C, $export($export.G + $export.W + $export.F * (C != Base), O), 
        IS_WEAK || common.setStrong(C, NAME, IS_MAP), C;
    };
}, 
/* 70 */
/***/ function(module, exports, __webpack_require__) {
    for (var Typed, global = __webpack_require__(2), hide = __webpack_require__(11), uid = __webpack_require__(35), TYPED = uid("typed_array"), VIEW = uid("view"), ABV = !(!global.ArrayBuffer || !global.DataView), CONSTR = ABV, i = 0, TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); i < 9; ) (Typed = global[TypedArrayConstructors[i++]]) ? (hide(Typed.prototype, TYPED, !0), 
    hide(Typed.prototype, VIEW, !0)) : CONSTR = !1;
    module.exports = {
        ABV: ABV,
        CONSTR: CONSTR,
        TYPED: TYPED,
        VIEW: VIEW
    };
}, 
/* 71 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // Forced replacement prototype accessors methods
        module.exports = __webpack_require__(31) || !__webpack_require__(3)(function() {
        var K = Math.random();
        // In FF throws only define methods
        // eslint-disable-next-line no-undef, no-useless-call
                __defineSetter__.call(null, K, function() {/* empty */}), delete __webpack_require__(2)[K];
    });
}, 
/* 72 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(0);
    module.exports = function(COLLECTION) {
        $export($export.S, COLLECTION, {
            of: function() {
                for (var length = arguments.length, A = new Array(length); length--; ) A[length] = arguments[length];
                return new this(A);
            }
        });
    };
}, 
/* 73 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__(0), aFunction = __webpack_require__(10), ctx = __webpack_require__(19), forOf = __webpack_require__(42);
    module.exports = function(COLLECTION) {
        $export($export.S, COLLECTION, {
            from: function(source /* , mapFn, thisArg */) {
                var mapping, A, n, cb, mapFn = arguments[1];
                return aFunction(this), (mapping = mapFn !== undefined) && aFunction(mapFn), source == undefined ? new this() : (A = [], 
                mapping ? (n = 0, cb = ctx(mapFn, arguments[2], 2), forOf(source, !1, function(nextItem) {
                    A.push(cb(nextItem, n++));
                })) : forOf(source, !1, A.push, A), new this(A));
            }
        });
    };
}, 
/* 74 */
/***/ function(module, exports) {
    module.exports = function() {
        throw new Error("define cannot be used indirect");
    };
    /***/}, 
/* 75 */
/***/ function(module, exports) {
    function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw e.code = "MODULE_NOT_FOUND", e;
    }
    webpackEmptyContext.keys = function() {
        return [];
    }, webpackEmptyContext.resolve = webpackEmptyContext, (module.exports = webpackEmptyContext).id = 75;
}, 
/* 76 */
/***/ function(module, exports) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    function EventEmitter() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || undefined;
    }
    function isFunction(arg) {
        return "function" == typeof arg;
    }
    function isObject(arg) {
        return "object" == typeof arg && null !== arg;
    }
    function isUndefined(arg) {
        return void 0 === arg;
    }
    /***/    (
    // Backwards-compat with node 0.10.x
    (module.exports = EventEmitter).EventEmitter = EventEmitter).prototype._events = undefined, 
    EventEmitter.prototype._maxListeners = undefined, 
    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10, 
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!function isNumber(arg) {
            return "number" == typeof arg;
        }(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
        return this._maxListeners = n, this;
    }, EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        // If there is no 'error' event listener then throw.
        if (this._events || (this._events = {}), "error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
            if ((er = arguments[1]) instanceof Error) throw er;
 // Unhandled 'error' event
                        // At least give some kind of context to the user
            var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
            throw err.context = er, err;
        }
        if (isUndefined(handler = this._events[type])) return !1;
        if (isFunction(handler)) switch (arguments.length) {
          // fast cases
            case 1:
            handler.call(this);
            break;

          case 2:
            handler.call(this, arguments[1]);
            break;

          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;

            // slower
                      default:
            args = Array.prototype.slice.call(arguments, 1), handler.apply(this, args);
        } else if (isObject(handler)) for (args = Array.prototype.slice.call(arguments, 1), 
        len = (listeners = handler.slice()).length, i = 0; i < len; i++) listeners[i].apply(this, args);
        return !0;
    }, EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), 
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener), 
        this._events[type] ? isObject(this._events[type]) ? 
        // If we've already got an array, just append.
        this._events[type].push(listener) : 
        // Adding the second element, need to change to array.
        this._events[type] = [ this._events[type], listener ] : 
        // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener, 
        // Check for listener leak
        isObject(this._events[type]) && !this._events[type].warned && (m = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) && 0 < m && this._events[type].length > m && (this._events[type].warned = !0, 
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length), 
        "function" == typeof console.trace && 
        // not supported in IE 10
        console.trace()), this;
    }, EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        var fired = !1;
        function g() {
            this.removeListener(type, g), fired || (fired = !0, listener.apply(this, arguments));
        }
        return g.listener = listener, this.on(type, g), this;
    }, 
    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[type]) return this;
        if (length = (list = this._events[type]).length, position = -1, list === listener || isFunction(list.listener) && list.listener === listener) delete this._events[type], 
        this._events.removeListener && this.emit("removeListener", type, listener); else if (isObject(list)) {
            for (i = length; 0 < i--; ) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                position = i;
                break;
            }
            if (position < 0) return this;
            1 === list.length ? (list.length = 0, delete this._events[type]) : list.splice(position, 1), 
            this._events.removeListener && this.emit("removeListener", type, listener);
        }
        return this;
    }, EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events) return this;
        // not listening for removeListener, no need to emit
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type], 
        this;
        // emit removeListener for all listeners on all events
                if (0 === arguments.length) {
            for (key in this._events) "removeListener" !== key && this.removeAllListeners(key);
            return this.removeAllListeners("removeListener"), this._events = {}, this;
        }
        if (isFunction(listeners = this._events[type])) this.removeListener(type, listeners); else if (listeners) 
        // LIFO order
        for (;listeners.length; ) this.removeListener(type, listeners[listeners.length - 1]);
        return delete this._events[type], this;
    }, EventEmitter.prototype.listeners = function(type) {
        return this._events && this._events[type] ? isFunction(this._events[type]) ? [ this._events[type] ] : this._events[type].slice() : [];
    }, EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            if (evlistener) return evlistener.length;
        }
        return 0;
    }, EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };
}, 
/* 77 */
/***/ function(module, exports, __webpack_require__) {
    (((exports = module.exports = __webpack_require__(108)).Stream = exports).Readable = exports).Writable = __webpack_require__(78), 
    exports.Duplex = __webpack_require__(33), exports.Transform = __webpack_require__(114), 
    exports.PassThrough = __webpack_require__(169);
}, 
/* 78 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */ (function(process, setImmediate, global) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        // A bit simpler than readable streams.
        // Implement an async ._write(chunk, encoding, cb), and it'll handle all
        // the drain event emission and buffering.
        /*<replacement>*/
        var pna = __webpack_require__(57);
        /*</replacement>*/        
        // It seems a linked list but it is not
        // there will be only 2 of these for each stream
        function CorkedRequest(state) {
            var _this = this;
            this.next = null, this.entry = null, this.finish = function() {
                !function onCorkedFinish(corkReq, state, err) {
                    var entry = corkReq.entry;
                    corkReq.entry = null;
                    for (;entry; ) {
                        var cb = entry.callback;
                        state.pendingcb--, cb(err), entry = entry.next;
                    }
                    state.corkedRequestsFree ? state.corkedRequestsFree.next = corkReq : state.corkedRequestsFree = corkReq;
                }(_this, state);
            };
        }
        /* </replacement> */
        /*<replacement>*/        module.exports = Writable;
        var Duplex, asyncWrite = !process.browser && -1 < [ "v0.10", "v0.9." ].indexOf(process.version.slice(0, 5)) ? setImmediate : pna.nextTick;
        /*</replacement>*/
        /*<replacement>*/        
        /*</replacement>*/
        Writable.WritableState = WritableState;
        /*<replacement>*/
        var util = __webpack_require__(51);
        util.inherits = __webpack_require__(44);
        /*</replacement>*/
        /*<replacement>*/
        var internalUtil = {
            deprecate: __webpack_require__(168)
        }, Stream = __webpack_require__(110), Buffer = __webpack_require__(58).Buffer, OurUint8Array = global.Uint8Array || function() {};
        /*</replacement>*/
        /*<replacement>*/        
        /*</replacement>*/
        var realHasInstance, destroyImpl = __webpack_require__(112);
        function nop() {}
        function WritableState(options, stream) {
            Duplex = Duplex || __webpack_require__(33), options = options || {};
            // Duplex streams are both readable and writable, but share
            // the same options object.
            // However, some cases require setting options to different
            // values for the readable and the writable sides of the duplex stream.
            // These options can be provided separately as readableXXX and writableXXX.
            var isDuplex = stream instanceof Duplex;
            // object stream flag to indicate whether or not this stream
            // contains buffers or objects.
                        this.objectMode = !!options.objectMode, isDuplex && (this.objectMode = this.objectMode || !!options.writableObjectMode);
            // the point at which write() starts returning false
            // Note: 0 is a valid value, means that we always return false if
            // the entire buffer is not flushed immediately on write()
            var hwm = options.highWaterMark, writableHwm = options.writableHighWaterMark, defaultHwm = this.objectMode ? 16 : 16384;
            this.highWaterMark = hwm || 0 === hwm ? hwm : isDuplex && (writableHwm || 0 === writableHwm) ? writableHwm : defaultHwm, 
            // cast to ints.
            this.highWaterMark = Math.floor(this.highWaterMark), 
            // if _final has been called
            this.finalCalled = !1, 
            // drain event flag.
            this.needDrain = !1, 
            // at the start of calling end()
            this.ending = !1, 
            // when end() has been called, and returned
            this.ended = !1, 
            // when 'finish' is emitted
            this.finished = !1;
            // should we decode strings into buffers before passing to _write?
            // this is here so that some node-core streams can optimize string
            // handling at a lower level.
            var noDecode = (
            // has it been destroyed
            this.destroyed = !1) === options.decodeStrings;
            this.decodeStrings = !noDecode, 
            // Crypto is kind of old and crusty.  Historically, its default string
            // encoding is 'binary' so we have to make this configurable.
            // Everything else in the universe uses 'utf8', though.
            this.defaultEncoding = options.defaultEncoding || "utf8", 
            // not an actual buffer we keep track of, but a measurement
            // of how much we're waiting to get pushed to some underlying
            // socket or file.
            this.length = 0, 
            // a flag to see when we're in the middle of a write.
            this.writing = !1, 
            // when true all writes will be buffered until .uncork() call
            this.corked = 0, 
            // a flag to be able to tell if the onwrite cb is called immediately,
            // or on a later tick.  We set this to true at first, because any
            // actions that shouldn't happen until "later" should generally also
            // not happen before the first write call.
            this.sync = !0, 
            // a flag to know if we're processing previously buffered items, which
            // may call the _write() callback in the same tick, so that we don't
            // end up in an overlapped onwrite situation.
            this.bufferProcessing = !1, 
            // the callback that's passed to _write(chunk,cb)
            this.onwrite = function(er) {
                !function onwrite(stream, er) {
                    var state = stream._writableState, sync = state.sync, cb = state.writecb;
                    if (function onwriteStateUpdate(state) {
                        state.writing = !1, state.writecb = null, state.length -= state.writelen, state.writelen = 0;
                    }(state), er) !function onwriteError(stream, state, sync, er, cb) {
                        --state.pendingcb, sync ? (
                        // defer the callback if we are being called synchronously
                        // to avoid piling up things on the stack
                        pna.nextTick(cb, er), 
                        // this can emit finish, and it will always happen
                        // after error
                        pna.nextTick(finishMaybe, stream, state), stream._writableState.errorEmitted = !0, 
                        stream.emit("error", er)) : (
                        // the caller expect this to happen before if
                        // it is async
                        cb(er), stream._writableState.errorEmitted = !0, stream.emit("error", er), 
                        // this can emit finish, but finish must
                        // always follow error
                        finishMaybe(stream, state));
                    }(stream, state, sync, er, cb); else {
                        // Check if we're actually ready to finish, but don't emit yet
                        var finished = needFinish(state);
                        finished || state.corked || state.bufferProcessing || !state.bufferedRequest || clearBuffer(stream, state), 
                        sync ? 
                        /*<replacement>*/
                        asyncWrite(afterWrite, stream, state, finished, cb) : afterWrite(stream, state, finished, cb);
                    }
                }(stream, er);
            }, 
            // the callback that the user supplies to write(chunk,encoding,cb)
            this.writecb = null, 
            // the amount that is being written when _write is called.
            this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, 
            // number of pending user-supplied write callbacks
            // this must be 0 before 'finish' can be emitted
            this.pendingcb = 0, 
            // emit prefinish if the only thing we're waiting for is _write cbs
            // This is relevant for synchronous Transform streams
            this.prefinished = !1, 
            // True if the error was already emitted and should not be thrown again
            this.errorEmitted = !1, 
            // count buffered requests
            this.bufferedRequestCount = 0, 
            // allocate the first CorkedRequest, there is always
            // one allocated and free to use, and we maintain at most two
            this.corkedRequestsFree = new CorkedRequest(this);
        }
        function Writable(options) {
            // Writable ctor is applied to Duplexes, too.
            // `realHasInstance` is necessary because using plain `instanceof`
            // would return false, as no `_writableState` property is attached.
            // Trying to use the custom `instanceof` for Writable here will also break the
            // Node.js LazyTransform implementation, which has a non-trivial getter for
            // `_writableState` that would lead to infinite recursion.
            if (Duplex = Duplex || __webpack_require__(33), !(realHasInstance.call(Writable, this) || this instanceof Duplex)) return new Writable(options);
            this._writableState = new WritableState(options, this), 
            // legacy.
            this.writable = !0, options && ("function" == typeof options.write && (this._write = options.write), 
            "function" == typeof options.writev && (this._writev = options.writev), "function" == typeof options.destroy && (this._destroy = options.destroy), 
            "function" == typeof options["final"] && (this._final = options["final"])), Stream.call(this);
        }
        // Otherwise people can pipe Writable streams, which is just wrong.
                function doWrite(stream, state, writev, len, chunk, encoding, cb) {
            state.writelen = len, state.writecb = cb, state.writing = !0, state.sync = !0, writev ? stream._writev(chunk, state.onwrite) : stream._write(chunk, encoding, state.onwrite), 
            state.sync = !1;
        }
        function afterWrite(stream, state, finished, cb) {
            finished || 
            // Must force callback to be called on nextTick, so that we don't
            // emit 'drain' before the write() consumer gets the 'false' return
            // value, and has a chance to attach a 'drain' listener.
            function onwriteDrain(stream, state) {
                0 === state.length && state.needDrain && (state.needDrain = !1, stream.emit("drain"));
            }
            // if there's something in the buffer waiting, then process it
            (stream, state), state.pendingcb--, cb(), finishMaybe(stream, state);
        }
        function clearBuffer(stream, state) {
            state.bufferProcessing = !0;
            var entry = state.bufferedRequest;
            if (stream._writev && entry && entry.next) {
                // Fast case, write everything using _writev()
                var l = state.bufferedRequestCount, buffer = new Array(l), holder = state.corkedRequestsFree;
                holder.entry = entry;
                for (var count = 0, allBuffers = !0; entry; ) (buffer[count] = entry).isBuf || (allBuffers = !1), 
                entry = entry.next, count += 1;
                buffer.allBuffers = allBuffers, doWrite(stream, state, !0, state.length, buffer, "", holder.finish), 
                // doWrite is almost always async, defer these to save a bit of time
                // as the hot path ends with doWrite
                state.pendingcb++, state.lastBufferedRequest = null, holder.next ? (state.corkedRequestsFree = holder.next, 
                holder.next = null) : state.corkedRequestsFree = new CorkedRequest(state), state.bufferedRequestCount = 0;
            } else {
                // Slow case, write chunks one-by-one
                for (;entry; ) {
                    var chunk = entry.chunk, encoding = entry.encoding, cb = entry.callback;
                    // if we didn't call the onwrite immediately, then
                    // it means that we need to wait until it does.
                    // also, that means that the chunk and cb are currently
                    // being processed, so move the buffer counter past them.
                    if (doWrite(stream, state, !1, state.objectMode ? 1 : chunk.length, chunk, encoding, cb), 
                    entry = entry.next, state.bufferedRequestCount--, state.writing) break;
                }
                null === entry && (state.lastBufferedRequest = null);
            }
            state.bufferedRequest = entry, state.bufferProcessing = !1;
        }
        function needFinish(state) {
            return state.ending && 0 === state.length && null === state.bufferedRequest && !state.finished && !state.writing;
        }
        function callFinal(stream, state) {
            stream._final(function(err) {
                state.pendingcb--, err && stream.emit("error", err), state.prefinished = !0, stream.emit("prefinish"), 
                finishMaybe(stream, state);
            });
        }
        function finishMaybe(stream, state) {
            var need = needFinish(state);
            return need && (!function prefinish(stream, state) {
                state.prefinished || state.finalCalled || ("function" == typeof stream._final ? (state.pendingcb++, 
                state.finalCalled = !0, pna.nextTick(callFinal, stream, state)) : (state.prefinished = !0, 
                stream.emit("prefinish")));
            }(stream, state), 0 === state.pendingcb && (state.finished = !0, stream.emit("finish"))), 
            need;
        }
        util.inherits(Writable, Stream), WritableState.prototype.getBuffer = function() {
            for (var current = this.bufferedRequest, out = []; current; ) out.push(current), 
            current = current.next;
            return out;
        }, function() {
            try {
                Object.defineProperty(WritableState.prototype, "buffer", {
                    get: internalUtil.deprecate(function() {
                        return this.getBuffer();
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                });
            } catch (_) {}
        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (realHasInstance = Function.prototype[Symbol.hasInstance], 
        Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function(object) {
                return !!realHasInstance.call(this, object) || this === Writable && (object && object._writableState instanceof WritableState);
            }
        })) : realHasInstance = function(object) {
            return object instanceof this;
        }, Writable.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"));
        }, Writable.prototype.write = function(chunk, encoding, cb) {
            var state = this._writableState, ret = !1, isBuf = !state.objectMode && function _isUint8Array(obj) {
                return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
            }(chunk);
            return isBuf && !Buffer.isBuffer(chunk) && (chunk = function _uint8ArrayToBuffer(chunk) {
                return Buffer.from(chunk);
            }(chunk)), "function" == typeof encoding && (cb = encoding, encoding = null), isBuf ? encoding = "buffer" : encoding || (encoding = state.defaultEncoding), 
            "function" != typeof cb && (cb = nop), state.ended ? function writeAfterEnd(stream, cb) {
                var er = new Error("write after end");
                // TODO: defer error events consistently everywhere, not just the cb
                                stream.emit("error", er), pna.nextTick(cb, er);
            }
            // Checks that a user-supplied chunk is valid, especially for the particular
            // mode the stream is in. Currently this means that `null` is never accepted
            // and undefined/non-string values are only allowed in object mode.
            (this, cb) : (isBuf || function validChunk(stream, state, chunk, cb) {
                var valid = !0, er = !1;
                return null === chunk ? er = new TypeError("May not write null values to stream") : "string" == typeof chunk || chunk === undefined || state.objectMode || (er = new TypeError("Invalid non-string/buffer chunk")), 
                er && (stream.emit("error", er), pna.nextTick(cb, er), valid = !1), valid;
            }(this, state, chunk, cb)) && (state.pendingcb++, ret = 
            // if we're already writing something, then just put this
            // in the queue, and wait our turn.  Otherwise, call _write
            // If we return false, then we need a drain event, so set that flag.
            function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                if (!isBuf) {
                    var newChunk = function decodeChunk(state, chunk, encoding) {
                        state.objectMode || !1 === state.decodeStrings || "string" != typeof chunk || (chunk = Buffer.from(chunk, encoding));
                        return chunk;
                    }(state, chunk, encoding);
                    chunk !== newChunk && (isBuf = !0, encoding = "buffer", chunk = newChunk);
                }
                var len = state.objectMode ? 1 : chunk.length;
                state.length += len;
                var ret = state.length < state.highWaterMark;
                // we must ensure that previous needDrain will not be reset to false.
                                ret || (state.needDrain = !0);
                if (state.writing || state.corked) {
                    var last = state.lastBufferedRequest;
                    state.lastBufferedRequest = {
                        chunk: chunk,
                        encoding: encoding,
                        isBuf: isBuf,
                        callback: cb,
                        next: null
                    }, last ? last.next = state.lastBufferedRequest : state.bufferedRequest = state.lastBufferedRequest, 
                    state.bufferedRequestCount += 1;
                } else doWrite(stream, state, !1, len, chunk, encoding, cb);
                return ret;
            }(this, state, isBuf, chunk, encoding, cb)), ret;
        }, Writable.prototype.cork = function() {
            this._writableState.corked++;
        }, Writable.prototype.uncork = function() {
            var state = this._writableState;
            state.corked && (state.corked--, state.writing || state.corked || state.finished || state.bufferProcessing || !state.bufferedRequest || clearBuffer(this, state));
        }, Writable.prototype.setDefaultEncoding = function(encoding) {
            if (
            // node::ParseEncoding() requires lower case.
            "string" == typeof encoding && (encoding = encoding.toLowerCase()), !(-1 < [ "hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw" ].indexOf((encoding + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + encoding);
            return this._writableState.defaultEncoding = encoding, this;
        }, Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
            // making it explicit this property is not enumerable
            // because otherwise some prototype manipulation in
            // userland will fail
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark;
            }
        }), Writable.prototype._write = function(chunk, encoding, cb) {
            cb(new Error("_write() is not implemented"));
        }, Writable.prototype._writev = null, Writable.prototype.end = function(chunk, encoding, cb) {
            var state = this._writableState;
            "function" == typeof chunk ? (cb = chunk, encoding = chunk = null) : "function" == typeof encoding && (cb = encoding, 
            encoding = null), null !== chunk && chunk !== undefined && this.write(chunk, encoding), 
            // .end() fully uncorks
            state.corked && (state.corked = 1, this.uncork()), 
            // ignore unnecessary end() calls.
            state.ending || state.finished || function endWritable(stream, state, cb) {
                state.ending = !0, finishMaybe(stream, state), cb && (state.finished ? pna.nextTick(cb) : stream.once("finish", cb));
                state.ended = !0, stream.writable = !1;
            }(this, state, cb);
        }, Object.defineProperty(Writable.prototype, "destroyed", {
            get: function() {
                return this._writableState !== undefined && this._writableState.destroyed;
            },
            set: function(value) {
                // we ignore the value if the stream
                // has not been initialized yet
                this._writableState && (
                // backward compatibility, the user is explicitly
                // managing destroyed
                this._writableState.destroyed = value);
            }
        }), Writable.prototype.destroy = destroyImpl.destroy, Writable.prototype._undestroy = destroyImpl.undestroy, 
        Writable.prototype._destroy = function(err, cb) {
            this.end(), cb(err);
        };
    }).call(this, __webpack_require__(50), __webpack_require__(166).setImmediate, __webpack_require__(27))
    /***/;
}, 
/* 79 */
/***/ function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4), document = __webpack_require__(2).document, is = isObject(document) && isObject(document.createElement);
    module.exports = function(it) {
        return is ? document.createElement(it) : {};
    };
}, 
/* 80 */
/***/ function(module, exports, __webpack_require__) {
    var global = __webpack_require__(2), core = __webpack_require__(18), LIBRARY = __webpack_require__(31), wksExt = __webpack_require__(116), defineProperty = __webpack_require__(8).f;
    module.exports = function(name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        "_" == name.charAt(0) || name in $Symbol || defineProperty($Symbol, name, {
            value: wksExt.f(name)
        });
    };
}, 
/* 81 */
/***/ function(module, exports, __webpack_require__) {
    var shared = __webpack_require__(59)("keys"), uid = __webpack_require__(35);
    module.exports = function(key) {
        return shared[key] || (shared[key] = uid(key));
    };
}, 
/* 82 */
/***/ function(module, exports) {
    // IE 8- don't enum bug keys
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    /***/}, 
/* 83 */
/***/ function(module, exports, __webpack_require__) {
    var document = __webpack_require__(2).document;
    module.exports = document && document.documentElement;
}, 
/* 84 */
/***/ function(module, exports, __webpack_require__) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var isObject = __webpack_require__(4), anObject = __webpack_require__(1), check = function(O, proto) {
        if (anObject(O), !isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? // eslint-disable-line
        function(test, buggy, set) {
            try {
                (set = __webpack_require__(19)(Function.call, __webpack_require__(16).f(Object.prototype, "__proto__").set, 2))(test, []), 
                buggy = !(test instanceof Array);
            } catch (e) {
                buggy = !0;
            }
            return function(O, proto) {
                return check(O, proto), buggy ? O.__proto__ = proto : set(O, proto), O;
            };
        }({}, !1) : undefined),
        check: check
    };
}, 
/* 85 */
/***/ function(module, exports) {
    module.exports = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff";
    /***/}, 
/* 86 */
/***/ function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4), setPrototypeOf = __webpack_require__(84).set;
    module.exports = function(that, target, C) {
        var P, S = target.constructor;
        return S !== C && "function" == typeof S && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf && setPrototypeOf(that, P), 
        that;
    };
}, 
/* 87 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var toInteger = __webpack_require__(21), defined = __webpack_require__(24);
    module.exports = function(count) {
        var str = String(defined(this)), res = "", n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
        for (;0 < n; (n >>>= 1) && (str += str)) 1 & n && (res += str);
        return res;
    };
}, 
/* 88 */
/***/ function(module, exports) {
    // 20.2.2.28 Math.sign(x)
    module.exports = Math.sign || function(x) {
        // eslint-disable-next-line no-self-compare
        return 0 == (x = +x) || x != x ? x : x < 0 ? -1 : 1;
    };
    /***/}, 
/* 89 */
/***/ function(module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $expm1 = Math.expm1;
    module.exports = !$expm1 || 22025.465794806718 < $expm1(10) || $expm1(10) < 22025.465794806718 || -2e-17 != $expm1(-2e-17) ? function(x) {
        return 0 == (x = +x) ? x : -1e-6 < x && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
    } : $expm1;
}, 
/* 90 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var LIBRARY = __webpack_require__(31), $export = __webpack_require__(0), redefine = __webpack_require__(12), hide = __webpack_require__(11), Iterators = __webpack_require__(48), $iterCreate = __webpack_require__(91), setToStringTag = __webpack_require__(45), getPrototypeOf = __webpack_require__(17), ITERATOR = __webpack_require__(5)("iterator"), BUGGY = !([].keys && "next" in [].keys()), returnThis = function() {
        return this;
    };
    module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var methods, key, IteratorPrototype, getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case "keys":
              case "values":
                return function() {
                    return new Constructor(this, kind);
                };
            }
            return function() {
                return new Constructor(this, kind);
            };
        }, TAG = NAME + " Iterator", DEF_VALUES = "values" == DEFAULT, VALUES_BUG = !1, proto = Base.prototype, $native = proto[ITERATOR] || proto["@@iterator"] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : undefined, $anyNative = "Array" == NAME && proto.entries || $native;
        if (
        // Fix native
        $anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))) !== Object.prototype && IteratorPrototype.next && (
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, !0), 
        // fix for some old engines
        LIBRARY || "function" == typeof IteratorPrototype[ITERATOR] || hide(IteratorPrototype, ITERATOR, returnThis)), 
        // fix Array#{values, @@iterator}.name in V8 / FF
        DEF_VALUES && $native && "values" !== $native.name && (VALUES_BUG = !0, $default = function() {
            return $native.call(this);
        }), 
        // Define iterator
        LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), 
        // Plug for library
        Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT) if (methods = {
            values: DEF_VALUES ? $default : getMethod("values"),
            keys: IS_SET ? $default : getMethod("keys"),
            entries: $entries
        }, FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        return methods;
    };
}, 
/* 91 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var create = __webpack_require__(38), descriptor = __webpack_require__(34), setToStringTag = __webpack_require__(45), IteratorPrototype = {};
    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    __webpack_require__(11)(IteratorPrototype, __webpack_require__(5)("iterator"), function() {
        return this;
    }), module.exports = function(Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
        }), setToStringTag(Constructor, NAME + " Iterator");
    };
}, 
/* 92 */
/***/ function(module, exports, __webpack_require__) {
    // helper for String#{startsWith, endsWith, includes}
    var isRegExp = __webpack_require__(64), defined = __webpack_require__(24);
    module.exports = function(that, searchString, NAME) {
        if (isRegExp(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
        return String(defined(that));
    };
}, 
/* 93 */
/***/ function(module, exports, __webpack_require__) {
    var MATCH = __webpack_require__(5)("match");
    module.exports = function(KEY) {
        var re = /./;
        try {
            "/./"[KEY](re);
        } catch (e) {
            try {
                return re[MATCH] = !1, !"/./"[KEY](re);
            } catch (f) {/* empty */}
        }
        return !0;
    };
}, 
/* 94 */
/***/ function(module, exports, __webpack_require__) {
    // check on default Array iterator
    var Iterators = __webpack_require__(48), ITERATOR = __webpack_require__(5)("iterator"), ArrayProto = Array.prototype;
    module.exports = function(it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
}, 
/* 95 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $defineProperty = __webpack_require__(8), createDesc = __webpack_require__(34);
    module.exports = function(object, index, value) {
        index in object ? $defineProperty.f(object, index, createDesc(0, value)) : object[index] = value;
    };
}, 
/* 96 */
/***/ function(module, exports, __webpack_require__) {
    var classof = __webpack_require__(46), ITERATOR = __webpack_require__(5)("iterator"), Iterators = __webpack_require__(48);
    module.exports = __webpack_require__(18).getIteratorMethod = function(it) {
        if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
    };
}, 
/* 97 */
/***/ function(module, exports, __webpack_require__) {
    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    var speciesConstructor = __webpack_require__(266);
    module.exports = function(original, length) {
        return new (speciesConstructor(original))(length);
    };
}, 
/* 98 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
        var toObject = __webpack_require__(9), toAbsoluteIndex = __webpack_require__(37), toLength = __webpack_require__(6);
    module.exports = function(value /* , start = 0, end = @length */) {
        for (var O = toObject(this), length = toLength(O.length), aLen = arguments.length, index = toAbsoluteIndex(1 < aLen ? arguments[1] : undefined, length), end = 2 < aLen ? arguments[2] : undefined, endPos = end === undefined ? length : toAbsoluteIndex(end, length); index < endPos; ) O[index++] = value;
        return O;
    };
}, 
/* 99 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var addToUnscopables = __webpack_require__(32), step = __webpack_require__(133), Iterators = __webpack_require__(48), toIObject = __webpack_require__(15);
    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = __webpack_require__(90)(Array, "Array", function(iterated, kind) {
        this._t = toIObject(iterated), // target
        this._i = 0, // next index
        this._k = kind;
    }, function() {
        var O = this._t, kind = this._k, index = this._i++;
        return !O || index >= O.length ? (this._t = undefined, step(1)) : step(0, "keys" == kind ? index : "values" == kind ? O[index] : [ index, O[index] ]);
    }, "values"), 
    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), 
    addToUnscopables("entries");
}, 
/* 100 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var re1, re2, regexpFlags = __webpack_require__(54), nativeExec = RegExp.prototype.exec, nativeReplace = String.prototype.replace, patchedExec = nativeExec, UPDATES_LAST_INDEX_WRONG = (re1 = /a/, 
    re2 = /b*/g, nativeExec.call(re1, "a"), nativeExec.call(re2, "a"), 0 !== re1["lastIndex"] || 0 !== re2["lastIndex"]), NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
    (UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED) && (patchedExec = function(str) {
        var lastIndex, reCopy, match, i, re = this;
        return NPCG_INCLUDED && (reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re))), 
        UPDATES_LAST_INDEX_WRONG && (lastIndex = re["lastIndex"]), match = nativeExec.call(re, str), 
        UPDATES_LAST_INDEX_WRONG && match && (re["lastIndex"] = re.global ? match.index + match[0].length : lastIndex), 
        NPCG_INCLUDED && match && 1 < match.length && 
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) arguments[i] === undefined && (match[i] = undefined);
        }), match;
    }), module.exports = patchedExec;
}, 
/* 101 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var at = __webpack_require__(63)(!0);
    // `AdvanceStringIndex` abstract operation
    // https://tc39.github.io/ecma262/#sec-advancestringindex
        module.exports = function(S, index, unicode) {
        return index + (unicode ? at(S, index).length : 1);
    };
}, 
/* 102 */
/***/ function(module, exports, __webpack_require__) {
    var defer, channel, port, ctx = __webpack_require__(19), invoke = __webpack_require__(123), html = __webpack_require__(83), cel = __webpack_require__(79), global = __webpack_require__(2), process = global.process, setTask = global.setImmediate, clearTask = global.clearImmediate, MessageChannel = global.MessageChannel, Dispatch = global.Dispatch, counter = 0, queue = {}, run = function() {
        var id = +this;
        // eslint-disable-next-line no-prototype-builtins
                if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id], fn();
        }
    }, listener = function(event) {
        run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    setTask && clearTask || (setTask = function(fn) {
        for (var args = [], i = 1; arguments.length > i; ) args.push(arguments[i++]);
        return queue[++counter] = function() {
            // eslint-disable-next-line no-new-func
            invoke("function" == typeof fn ? fn : Function(fn), args);
        }, defer(counter), counter;
    }, clearTask = function(id) {
        delete queue[id];
    }, 
    // Node.js 0.8-
    "process" == __webpack_require__(20)(process) ? defer = function(id) {
        process.nextTick(ctx(run, id, 1));
    } : Dispatch && Dispatch.now ? defer = function(id) {
        Dispatch.now(ctx(run, id, 1));
    } : MessageChannel ? (port = (channel = new MessageChannel()).port2, channel.port1.onmessage = listener, 
    defer = ctx(port.postMessage, port, 1)) : global.addEventListener && "function" == typeof postMessage && !global.importScripts ? (defer = function(id) {
        global.postMessage(id + "", "*");
    }, global.addEventListener("message", listener, !1)) : defer = "onreadystatechange" in cel("script") ? function(id) {
        html.appendChild(cel("script"))["onreadystatechange"] = function() {
            html.removeChild(this), run.call(id);
        };
    } : function(id) {
        setTimeout(ctx(run, id, 1), 0);
    }), module.exports = {
        set: setTask,
        clear: clearTask
    };
}, 
/* 103 */
/***/ function(module, exports, __webpack_require__) {
    var global = __webpack_require__(2), macrotask = __webpack_require__(102).set, Observer = global.MutationObserver || global.WebKitMutationObserver, process = global.process, Promise = global.Promise, isNode = "process" == __webpack_require__(20)(process);
    module.exports = function() {
        var head, last, notify, flush = function() {
            var parent, fn;
            for (isNode && (parent = process.domain) && parent.exit(); head; ) {
                fn = head.fn, head = head.next;
                try {
                    fn();
                } catch (e) {
                    throw head ? notify() : last = undefined, e;
                }
            }
            last = undefined, parent && parent.enter();
        };
        // Node.js
        if (isNode) notify = function() {
            process.nextTick(flush);
        };
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
         else if (!Observer || global.navigator && global.navigator.standalone) if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var promise = Promise.resolve(undefined);
            notify = function() {
                promise.then(flush);
            };
        } else notify = function() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
        }; else {
            var toggle = !0, node = document.createTextNode("");
            new Observer(flush).observe(node, {
                characterData: !0
            }), // eslint-disable-line no-new
            notify = function() {
                node.data = toggle = !toggle;
            };
        }
        return function(fn) {
            var task = {
                fn: fn,
                next: undefined
            };
            last && (last.next = task), head || (head = task, notify()), last = task;
        };
    };
}, 
/* 104 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = __webpack_require__(10);
    function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
            resolve = $$resolve, reject = $$reject;
        }), this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    }
    module.exports.f = function(C) {
        return new PromiseCapability(C);
    };
}, 
/* 105 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(2), DESCRIPTORS = __webpack_require__(7), LIBRARY = __webpack_require__(31), $typed = __webpack_require__(70), hide = __webpack_require__(11), redefineAll = __webpack_require__(43), fails = __webpack_require__(3), anInstance = __webpack_require__(41), toInteger = __webpack_require__(21), toLength = __webpack_require__(6), toIndex = __webpack_require__(143), gOPN = __webpack_require__(39).f, dP = __webpack_require__(8).f, arrayFill = __webpack_require__(98), setToStringTag = __webpack_require__(45), $ArrayBuffer = global["ArrayBuffer"], $DataView = global["DataView"], Math = global.Math, RangeError = global.RangeError, Infinity = global.Infinity, BaseBuffer = $ArrayBuffer, abs = Math.abs, pow = Math.pow, floor = Math.floor, log = Math.log, LN2 = Math.LN2, $BUFFER = DESCRIPTORS ? "_b" : "buffer", $LENGTH = DESCRIPTORS ? "_l" : "byteLength", $OFFSET = DESCRIPTORS ? "_o" : "byteOffset";
    // IEEE754 conversions based on https://github.com/feross/ieee754
    function packIEEE754(value, mLen, nBytes) {
        var e, m, c, buffer = new Array(nBytes), eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = 23 === mLen ? pow(2, -24) - pow(2, -77) : 0, i = 0, s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
        for (
        // eslint-disable-next-line no-self-compare
        (value = abs(value)) != value || value === Infinity ? (
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0, e = eMax) : (e = floor(log(value) / LN2), value * (c = pow(2, -e)) < 1 && (e--, 
        c *= 2), 2 <= (value += 1 <= e + eBias ? rt / c : rt * pow(2, 1 - eBias)) * c && (e++, 
        c /= 2), eMax <= e + eBias ? (m = 0, e = eMax) : 1 <= e + eBias ? (m = (value * c - 1) * pow(2, mLen), 
        e += eBias) : (m = value * pow(2, eBias - 1) * pow(2, mLen), e = 0)); 8 <= mLen; buffer[i++] = 255 & m, 
        m /= 256, mLen -= 8) ;
        for (e = e << mLen | m, eLen += mLen; 0 < eLen; buffer[i++] = 255 & e, e /= 256, 
        eLen -= 8) ;
        return buffer[--i] |= 128 * s, buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
        var m, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = eLen - 7, i = nBytes - 1, s = buffer[i--], e = 127 & s;
        for (s >>= 7; 0 < nBits; e = 256 * e + buffer[i], i--, nBits -= 8) ;
        for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; 0 < nBits; m = 256 * m + buffer[i], 
        i--, nBits -= 8) ;
        if (0 === e) e = 1 - eBias; else {
            if (e === eMax) return m ? NaN : s ? -Infinity : Infinity;
            m += pow(2, mLen), e -= eBias;
        }
        return (s ? -1 : 1) * m * pow(2, e - mLen);
    }
    function unpackI32(bytes) {
        return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }
    function packI8(it) {
        return [ 255 & it ];
    }
    function packI16(it) {
        return [ 255 & it, it >> 8 & 255 ];
    }
    function packI32(it) {
        return [ 255 & it, it >> 8 & 255, it >> 16 & 255, it >> 24 & 255 ];
    }
    function packF64(it) {
        return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
        return packIEEE754(it, 23, 4);
    }
    function addGetter(C, key, internal) {
        dP(C["prototype"], key, {
            get: function() {
                return this[internal];
            }
        });
    }
    function get(view, bytes, index, isLittleEndian) {
        var intIndex = toIndex(+index);
        if (intIndex + bytes > view[$LENGTH]) throw RangeError("Wrong index!");
        var store = view[$BUFFER]._b, start = intIndex + view[$OFFSET], pack = store.slice(start, start + bytes);
        return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
        var intIndex = toIndex(+index);
        if (intIndex + bytes > view[$LENGTH]) throw RangeError("Wrong index!");
        for (var store = view[$BUFFER]._b, start = intIndex + view[$OFFSET], pack = conversion(+value), i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }
    if ($typed.ABV) {
        if (!fails(function() {
            $ArrayBuffer(1);
        }) || !fails(function() {
            new $ArrayBuffer(-1);
 // eslint-disable-line no-new
                }) || fails(function() {
            // eslint-disable-line no-new
            return new $ArrayBuffer(), // eslint-disable-line no-new
            new $ArrayBuffer(1.5), // eslint-disable-line no-new
            new $ArrayBuffer(NaN), "ArrayBuffer" != $ArrayBuffer.name;
        })) {
            for (var key, ArrayBufferProto = ($ArrayBuffer = function ArrayBuffer(length) {
                return anInstance(this, $ArrayBuffer), new BaseBuffer(toIndex(length));
            })["prototype"] = BaseBuffer["prototype"], keys = gOPN(BaseBuffer), j = 0; keys.length > j; ) (key = keys[j++]) in $ArrayBuffer || hide($ArrayBuffer, key, BaseBuffer[key]);
            LIBRARY || (ArrayBufferProto.constructor = $ArrayBuffer);
        }
        // iOS Safari 7.x bug
                var view = new $DataView(new $ArrayBuffer(2)), $setInt8 = $DataView["prototype"].setInt8;
        view.setInt8(0, 2147483648), view.setInt8(1, 2147483649), !view.getInt8(0) && view.getInt8(1) || redefineAll($DataView["prototype"], {
            setInt8: function(byteOffset, value) {
                $setInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function(byteOffset, value) {
                $setInt8.call(this, byteOffset, value << 24 >> 24);
            }
        }, !0);
    } else $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, "ArrayBuffer");
        var byteLength = toIndex(length);
        this._b = arrayFill.call(new Array(byteLength), 0), this[$LENGTH] = byteLength;
    }, $DataView = function(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, "DataView"), anInstance(buffer, $ArrayBuffer, "DataView");
        var bufferLength = buffer[$LENGTH], offset = toInteger(byteOffset);
        if (offset < 0 || bufferLength < offset) throw RangeError("Wrong offset!");
        if (bufferLength < offset + (byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength))) throw RangeError("Wrong length!");
        this[$BUFFER] = buffer, this[$OFFSET] = offset, this[$LENGTH] = byteLength;
    }, DESCRIPTORS && (addGetter($ArrayBuffer, "byteLength", "_l"), addGetter($DataView, "buffer", "_b"), 
    addGetter($DataView, "byteLength", "_l"), addGetter($DataView, "byteOffset", "_o")), 
    redefineAll($DataView["prototype"], {
        getInt8: function(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function(byteOffset) {
            return get(this, 1, byteOffset)[0];
        },
        getInt16: function(byteOffset /* , littleEndian */) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function(byteOffset /* , littleEndian */) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return bytes[1] << 8 | bytes[0];
        },
        getInt32: function(byteOffset /* , littleEndian */) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function(byteOffset /* , littleEndian */) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function(byteOffset, value /* , littleEndian */) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
    });
    setToStringTag($ArrayBuffer, "ArrayBuffer"), setToStringTag($DataView, "DataView"), 
    hide($DataView["prototype"], $typed.VIEW, !0), exports["ArrayBuffer"] = $ArrayBuffer, 
    exports["DataView"] = $DataView;
}, 
/* 106 */
/***/ function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/    
    /*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
    !function(root, factory) {
        "use strict";
        // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
        // Rhino, and plain browser loading.
        /* istanbul ignore next */        __WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function(exports) {
            var Token, TokenName, FnExprTokens, Syntax, PropertyKind, Messages, Regex, SyntaxTreeDelegate, XHTMLEntities, ClassPropertyType, source, strict, index, lineNumber, lineStart, length, delegate, lookahead, state, extra;
            // Ensure the condition is true, otherwise throw an error.
            // This is only to have a better contract semantic, i.e. another safety net
            // to catch a logic error. The condition shall be fulfilled in normal case.
            // Do NOT use this to enforce a certain condition on any user input.
            function assert(condition, message) {
                /* istanbul ignore if */
                if (!condition) throw new Error("ASSERT: " + message);
            }
            function StringMap() {
                this.$data = {};
            }
            function isDecimalDigit(ch) {
                return 48 <= ch && ch <= 57;
 // 0..9
                        }
            function isHexDigit(ch) {
                return 0 <= "0123456789abcdefABCDEF".indexOf(ch);
            }
            function isOctalDigit(ch) {
                return 0 <= "01234567".indexOf(ch);
            }
            // 7.2 White Space
                        function isWhiteSpace(ch) {
                return 32 === ch || // space
                9 === ch || // tab
                11 === ch || 12 === ch || 160 === ch || 5760 <= ch && 0 < " ᠎             　\ufeff".indexOf(String.fromCharCode(ch));
            }
            // 7.3 Line Terminators
                        function isLineTerminator(ch) {
                return 10 === ch || 13 === ch || 8232 === ch || 8233 === ch;
            }
            // 7.6 Identifier Names and Identifiers
                        function isIdentifierStart(ch) {
                return 36 === ch || 95 === ch || // $ (dollar) and _ (underscore)
                65 <= ch && ch <= 90 || // A..Z
                97 <= ch && ch <= 122 || // a..z
                92 === ch || // \ (backslash)
                128 <= ch && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch));
            }
            function isIdentifierPart(ch) {
                return 36 === ch || 95 === ch || // $ (dollar) and _ (underscore)
                65 <= ch && ch <= 90 || // A..Z
                97 <= ch && ch <= 122 || // a..z
                48 <= ch && ch <= 57 || // 0..9
                92 === ch || // \ (backslash)
                128 <= ch && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch));
            }
            // 7.6.1.2 Future Reserved Words
                        function isStrictModeReservedWord(id) {
                switch (id) {
                  case "implements":
                  case "interface":
                  case "package":
                  case "private":
                  case "protected":
                  case "public":
                  case "static":
                  case "yield":
                  case "let":
                    return !0;

                  default:
                    return !1;
                }
            }
            function isRestrictedWord(id) {
                return "eval" === id || "arguments" === id;
            }
            // 7.6.1.1 Keywords
                        // 7.4 Comments
            function addComment(type, value, start, end, loc) {
                var comment;
                assert("number" == typeof start, "Comment must have valid position"), 
                // Because the way the actual token is scanned, often the comments
                // (if any) are skipped twice during the lexical analysis.
                // Thus, we need to skip adding a comment if the comment array already
                // handled it.
                state.lastCommentStart >= start || (state.lastCommentStart = start, comment = {
                    type: type,
                    value: value
                }, extra.range && (comment.range = [ start, end ]), extra.loc && (comment.loc = loc), 
                extra.comments.push(comment), extra.attachComment && (extra.leadingComments.push(comment), 
                extra.trailingComments.push(comment)));
            }
            function skipSingleLineComment() {
                var start, loc, ch, comment;
                for (start = index - 2, loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart - 2
                    }
                }; index < length; ) if (ch = source.charCodeAt(index), ++index, isLineTerminator(ch)) return extra.comments && (comment = source.slice(start + 2, index - 1), 
                loc.end = {
                    line: lineNumber,
                    column: index - lineStart - 1
                }, addComment("Line", comment, start, index - 1, loc)), 13 === ch && 10 === source.charCodeAt(index) && ++index, 
                ++lineNumber, void (lineStart = index);
                extra.comments && (comment = source.slice(start + 2, index), loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                }, addComment("Line", comment, start, index, loc));
            }
            function skipMultiLineComment() {
                var start, loc, ch, comment;
                for (extra.comments && (start = index - 2, loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart - 2
                    }
                }); index < length; ) if (isLineTerminator(ch = source.charCodeAt(index))) 13 === ch && 10 === source.charCodeAt(index + 1) && ++index, 
                ++lineNumber, length <= (lineStart = ++index) && throwError({}, Messages.UnexpectedToken, "ILLEGAL"); else if (42 === ch) {
                    // Block comment ends with '*/' (char #42, char #47).
                    if (47 === source.charCodeAt(index + 1)) return ++index, ++index, void (extra.comments && (comment = source.slice(start + 2, index - 2), 
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart
                    }, addComment("Block", comment, start, index, loc)));
                    ++index;
                } else ++index;
                throwError({}, Messages.UnexpectedToken, "ILLEGAL");
            }
            function skipComment() {
                for (var ch; index < length; ) if (isWhiteSpace(ch = source.charCodeAt(index))) ++index; else if (isLineTerminator(ch)) ++index, 
                13 === ch && 10 === source.charCodeAt(index) && ++index, ++lineNumber, lineStart = index; else {
                    if (47 !== ch) break;
                    if (47 === (// 47 is '/'
                    ch = source.charCodeAt(index + 1))) ++index, ++index, skipSingleLineComment(); else {
                        if (42 !== ch) break;
                        // 42 is '*'
                        ++index, ++index, skipMultiLineComment();
                    }
                }
            }
            function scanHexEscape(prefix) {
                var i, len, ch, code = 0;
                for (len = "u" === prefix ? 4 : 2, i = 0; i < len; ++i) {
                    if (!(index < length && isHexDigit(source[index]))) return "";
                    ch = source[index++], code = 16 * code + "0123456789abcdef".indexOf(ch.toLowerCase());
                }
                return String.fromCharCode(code);
            }
            function scanUnicodeCodePointEscape() {
                var ch, code, cu1, cu2;
                for (ch = source[index], code = 0, 
                // At least, one hex digit is required.
                "}" === ch && throwError({}, Messages.UnexpectedToken, "ILLEGAL"); index < length && isHexDigit(ch = source[index++]); ) code = 16 * code + "0123456789abcdef".indexOf(ch.toLowerCase());
                // UTF-16 Encoding
                return (1114111 < code || "}" !== ch) && throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                code <= 65535 ? String.fromCharCode(code) : (cu1 = 55296 + (code - 65536 >> 10), 
                cu2 = 56320 + (code - 65536 & 1023), String.fromCharCode(cu1, cu2));
            }
            function getEscapedIdentifier() {
                var ch, id;
                for (ch = source.charCodeAt(index++), id = String.fromCharCode(ch), 
                // '\u' (char #92, char #117) denotes an escaped character.
                92 === ch && (117 !== source.charCodeAt(index) && throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                ++index, (ch = scanHexEscape("u")) && "\\" !== ch && isIdentifierStart(ch.charCodeAt(0)) || throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                id = ch); index < length && isIdentifierPart(ch = source.charCodeAt(index)); ) ++index, 
                id += String.fromCharCode(ch), 
                // '\u' (char #92, char #117) denotes an escaped character.
                92 === ch && (id = id.substr(0, id.length - 1), 117 !== source.charCodeAt(index) && throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                ++index, (ch = scanHexEscape("u")) && "\\" !== ch && isIdentifierPart(ch.charCodeAt(0)) || throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                id += ch);
                return id;
            }
            function scanIdentifier() {
                var start, id;
                return start = index, 
                // Backslash (char #92) starts an escaped character.
                id = 92 === source.charCodeAt(index) ? getEscapedIdentifier() : function getIdentifier() {
                    var start, ch;
                    start = index++;
                    for (;index < length; ) {
                        if (92 === (ch = source.charCodeAt(index))) 
                        // Blackslash (char #92) marks Unicode escape sequence.
                        return index = start, getEscapedIdentifier();
                        if (!isIdentifierPart(ch)) break;
                        ++index;
                    }
                    return source.slice(start, index);
                }(), {
                    type: 
                    // There is no keyword or literal with only one character.
                    // Thus, it must be an identifier.
                    1 === id.length ? Token.Identifier : function isKeyword(id) {
                        if (strict && isStrictModeReservedWord(id)) return !0;
                        // 'const' is specialized as Keyword in V8.
                        // 'yield' is only treated as a keyword in strict mode.
                        // 'let' is for compatiblity with SpiderMonkey and ES.next.
                        // Some others are from future reserved words.
                                                switch (id.length) {
                          case 2:
                            return "if" === id || "in" === id || "do" === id;

                          case 3:
                            return "var" === id || "for" === id || "new" === id || "try" === id || "let" === id;

                          case 4:
                            return "this" === id || "else" === id || "case" === id || "void" === id || "with" === id || "enum" === id;

                          case 5:
                            return "while" === id || "break" === id || "catch" === id || "throw" === id || "const" === id || "class" === id || "super" === id;

                          case 6:
                            return "return" === id || "typeof" === id || "delete" === id || "switch" === id || "export" === id || "import" === id;

                          case 7:
                            return "default" === id || "finally" === id || "extends" === id;

                          case 8:
                            return "function" === id || "continue" === id || "debugger" === id;

                          case 10:
                            return "instanceof" === id;

                          default:
                            return !1;
                        }
                    }(id) ? Token.Keyword : "null" === id ? Token.NullLiteral : "true" === id || "false" === id ? Token.BooleanLiteral : Token.Identifier,
                    value: id,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                };
            }
            // 7.7 Punctuators
                        function scanPunctuator() {
                var code2, ch2, ch3, ch4, start = index, code = source.charCodeAt(index), ch1 = source[index];
                if (state.inJSXTag || state.inJSXChild) 
                // Don't need to check for '{' and '}' as it's already handled
                // correctly by default.
                switch (code) {
                  case 60:
 // <
                                      case 62:
                    // >
                    return ++index, {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [ start, index ]
                    };
                }
                switch (code) {
                  // Check for most common single-character punctuators.
                    case 40:
 // ( open bracket
                                      case 41:
 // ) close bracket
                                      case 59:
 // ; semicolon
                                      case 44:
 // , comma
                                      case 91:
 // [
                                      case 93:
 // ]
                                      case 58:
 // :
                                      case 63:
 // ?
                                      case 126:
                    // ~
                    return ++index, extra.tokenize && 40 === code && (extra.openParenToken = extra.tokens.length), 
                    {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [ start, index ]
                    };

                  case 123:
 // { open curly brace
                                      case 125:
                    // } close curly brace
                    return ++index, extra.tokenize && 123 === code && (extra.openCurlyToken = extra.tokens.length), 
                    // lookahead2 function can cause tokens to be scanned twice and in doing so
                    // would wreck the curly stack by pushing the same token onto the stack twice.
                    // curlyLastIndex ensures each token is pushed or popped exactly once
                    index > state.curlyLastIndex && (state.curlyLastIndex = index, 123 === code ? state.curlyStack.push("{") : state.curlyStack.pop()), 
                    {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [ start, index ]
                    };

                  default:
                    // '=' (char #61) marks an assignment or comparison operator.
                    if (61 === (code2 = source.charCodeAt(index + 1))) switch (code) {
                      case 37:
 // %
                                              case 38:
 // &
                                              case 42:
 // *:
                                              case 43:
 // +
                                              case 45:
 // -
                                              case 47:
 // /
                                              case 60:
 // <
                                              case 62:
 // >
                                              case 94:
 // ^
                                              case 124:
                        // |
                        return index += 2, {
                            type: Token.Punctuator,
                            value: String.fromCharCode(code) + String.fromCharCode(code2),
                            lineNumber: lineNumber,
                            lineStart: lineStart,
                            range: [ start, index ]
                        };

                      case 33:
 // !
                                              case 61:
                        // =
                        return index += 2, 
                        // !== and ===
                        61 === source.charCodeAt(index) && ++index, {
                            type: Token.Punctuator,
                            value: source.slice(start, index),
                            lineNumber: lineNumber,
                            lineStart: lineStart,
                            range: [ start, index ]
                        };
                    }
                }
                // Peek more characters.
                                // 4-character punctuator: >>>=
                return ch2 = source[index + 1], ch3 = source[index + 2], ch4 = source[index + 3], 
                ">" === ch1 && ">" === ch2 && ">" === ch3 && "=" === ch4 ? (index += 4, {
                    type: Token.Punctuator,
                    value: ">>>=",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : 
                // 3-character punctuators: === !== >>> <<= >>=
                ">" !== ch1 || ">" !== ch2 || ">" !== ch3 || state.inType ? "<" === ch1 && "<" === ch2 && "=" === ch3 ? (index += 3, 
                {
                    type: Token.Punctuator,
                    value: "<<=",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : ">" === ch1 && ">" === ch2 && "=" === ch3 ? (index += 3, {
                    type: Token.Punctuator,
                    value: ">>=",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : "." === ch1 && "." === ch2 && "." === ch3 ? (index += 3, {
                    type: Token.Punctuator,
                    value: "...",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : 
                // Other 2-character punctuators: ++ -- << >> && ||
                // Don't match these tokens if we're in a type, since they never can
                // occur and can mess up types like Map<string, Array<string>>
                ch1 === ch2 && 0 <= "+-<>&|".indexOf(ch1) && !state.inType ? (index += 2, {
                    type: Token.Punctuator,
                    value: ch1 + ch2,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : "=" === ch1 && ">" === ch2 ? (index += 2, {
                    type: Token.Punctuator,
                    value: "=>",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : 0 <= "<>=!+-*%&|^/".indexOf(ch1) ? (++index, {
                    type: Token.Punctuator,
                    value: ch1,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : "." === ch1 ? (++index, {
                    type: Token.Punctuator,
                    value: ch1,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                }) : void throwError({}, Messages.UnexpectedToken, "ILLEGAL") : (index += 3, {
                    type: Token.Punctuator,
                    value: ">>>",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                });
            }
            // 7.8.3 Numeric Literals
                        function scanNumericLiteral() {
                var number, start, ch;
                if (assert(isDecimalDigit((ch = source[index]).charCodeAt(0)) || "." === ch, "Numeric literal must start with a decimal digit or a decimal point"), 
                start = index, number = "", "." !== ch) {
                    // Hex number starts with '0x'.
                    // Octal number starts with '0'.
                    // Octal number in ES6 starts with '0o'.
                    // Binary number in ES6 starts with '0b'.
                    if (number = source[index++], ch = source[index], "0" === number) {
                        if ("x" === ch || "X" === ch) return ++index, function scanHexLiteral(start) {
                            var number = "";
                            for (;index < length && isHexDigit(source[index]); ) number += source[index++];
                            0 === number.length && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                            isIdentifierStart(source.charCodeAt(index)) && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                            return {
                                type: Token.NumericLiteral,
                                value: parseInt("0x" + number, 16),
                                lineNumber: lineNumber,
                                lineStart: lineStart,
                                range: [ start, index ]
                            };
                        }(start);
                        if ("b" === ch || "B" === ch) return ++index, function scanBinaryLiteral(start) {
                            var ch, number;
                            number = "";
                            for (;index < length && ("0" === (ch = source[index]) || "1" === ch); ) number += source[index++];
                            0 === number.length && 
                            // only 0b or 0B
                            throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                            index < length && (isIdentifierStart(ch = source.charCodeAt(index)) || isDecimalDigit(ch)) && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                            return {
                                type: Token.NumericLiteral,
                                value: parseInt(number, 2),
                                lineNumber: lineNumber,
                                lineStart: lineStart,
                                range: [ start, index ]
                            };
                        }(start);
                        if ("o" === ch || "O" === ch || isOctalDigit(ch)) return function scanOctalLiteral(prefix, start) {
                            var number, octal;
                            number = isOctalDigit(prefix) ? (octal = !0, "0" + source[index++]) : (octal = !1, 
                            ++index, "");
                            for (;index < length && isOctalDigit(source[index]); ) number += source[index++];
                            octal || 0 !== number.length || 
                            // only 0o or 0O
                            throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                            (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                            return {
                                type: Token.NumericLiteral,
                                value: parseInt(number, 8),
                                octal: octal,
                                lineNumber: lineNumber,
                                lineStart: lineStart,
                                range: [ start, index ]
                            };
                        }(ch, start);
                        // decimal number starts with '0' such as '09' is illegal.
                                                ch && isDecimalDigit(ch.charCodeAt(0)) && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                    }
                    for (;isDecimalDigit(source.charCodeAt(index)); ) number += source[index++];
                    ch = source[index];
                }
                if ("." === ch) {
                    for (number += source[index++]; isDecimalDigit(source.charCodeAt(index)); ) number += source[index++];
                    ch = source[index];
                }
                if ("e" === ch || "E" === ch) if (number += source[index++], "+" !== (ch = source[index]) && "-" !== ch || (number += source[index++]), 
                isDecimalDigit(source.charCodeAt(index))) for (;isDecimalDigit(source.charCodeAt(index)); ) number += source[index++]; else throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                return isIdentifierStart(source.charCodeAt(index)) && throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                {
                    type: Token.NumericLiteral,
                    value: parseFloat(number),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                };
            }
            // 7.8.4 String Literals
                        function scanRegExp() {
                var start, body, flags, value;
                return lookahead = null, skipComment(), start = index, body = function scanRegExpBody() {
                    var ch, str, classMarker, terminated;
                    assert("/" === (ch = source[index]), "Regular expression literal must start with a slash"), 
                    str = source[index++], terminated = classMarker = !1;
                    for (;index < length; ) if (ch = source[index++], str += ch, "\\" === ch) 
                    // ECMA-262 7.8.5
                    isLineTerminator((ch = source[index++]).charCodeAt(0)) && throwError({}, Messages.UnterminatedRegExp), 
                    str += ch; else if (isLineTerminator(ch.charCodeAt(0))) throwError({}, Messages.UnterminatedRegExp); else if (classMarker) "]" === ch && (classMarker = !1); else {
                        if ("/" === ch) {
                            terminated = !0;
                            break;
                        }
                        "[" === ch && (classMarker = !0);
                    }
                    terminated || throwError({}, Messages.UnterminatedRegExp);
                    // Exclude leading and trailing slash.
                                        return {
                        value: str.substr(1, str.length - 2),
                        literal: str
                    };
                }(), flags = function scanRegExpFlags() {
                    var ch, str, flags, restore;
                    flags = str = "";
                    for (;index < length && isIdentifierPart((ch = source[index]).charCodeAt(0)); ) if (++index, 
                    "\\" === ch && index < length) if ("u" === (ch = source[index])) {
                        if (restore = ++index, ch = scanHexEscape("u")) for (flags += ch, str += "\\u"; restore < index; ++restore) str += source[restore]; else index = restore, 
                        flags += "u", str += "\\u";
                        throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
                    } else str += "\\", throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL"); else flags += ch, 
                    str += ch;
                    return {
                        value: flags,
                        literal: str
                    };
                }(), value = function testRegExp(pattern, flags) {
                    var tmp = pattern;
                    0 <= flags.indexOf("u") && (
                    // Replace each astral symbol and every Unicode code point
                    // escape sequence with a single ASCII symbol to avoid throwing on
                    // regular expressions that are only valid in combination with the
                    // `/u` flag.
                    // Note: replacing with the ASCII symbol `x` might cause false
                    // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
                    // perfectly valid pattern that is equivalent to `[a-b]`, but it
                    // would be replaced by `[x-b]` which throws an error.
                    tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}/g, function($0, $1) {
                        if (parseInt($1, 16) <= 1114111) return "x";
                        throwError({}, Messages.InvalidRegExp);
                    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
                    // First, detect invalid regular expressions.
                                        try {
                        new RegExp(tmp);
                    } catch (e) {
                        throwError({}, Messages.InvalidRegExp);
                    }
                    // Return a regular expression object for this pattern-flag pair, or
                    // `null` in case the current environment doesn't support the flags it
                    // uses.
                                        try {
                        return new RegExp(pattern, flags);
                    } catch (exception) {
                        return null;
                    }
                }(body.value, flags.value), extra.tokenize ? {
                    type: Token.RegularExpression,
                    value: value,
                    regex: {
                        pattern: body.value,
                        flags: flags.value
                    },
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                } : {
                    literal: body.literal + flags.literal,
                    value: value,
                    regex: {
                        pattern: body.value,
                        flags: flags.value
                    },
                    range: [ start, index ]
                };
            }
            function isIdentifierName(token) {
                return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
            }
            function advance() {
                var ch;
                return state.inJSXChild || skipComment(), length <= index ? {
                    type: Token.EOF,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ index, index ]
                } : state.inJSXChild ? 
                /**
     * Between JSX opening and closing tags (e.g. <foo>HERE</foo>), anything that
     * is not another JSX tag and is not an expression wrapped by {} is text.
     */
                function advanceJSXChild() {
                    var ch = source.charCodeAt(index);
                    // '<' 60, '>' 62, '{' 123, '}' 125
                                        return 60 === ch || 62 === ch || 123 === ch || 125 === ch ? scanPunctuator() : scanJSXText([ "<", ">", "{", "}" ]);
                }() : 
                // Very common: ( and ) and ;
                40 === (ch = source.charCodeAt(index)) || 41 === ch || 58 === ch ? scanPunctuator() : 
                // String literal starts with single quote (#39) or double quote (#34).
                39 === ch || 34 === ch ? state.inJSXTag ? function scanJSXStringLiteral() {
                    var innerToken, quote, start;
                    assert("'" === (quote = source[index]) || '"' === quote, "String literal must starts with a quote"), 
                    start = index, ++index, innerToken = scanJSXText([ quote ]), quote !== source[index] && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                    return ++index, innerToken.range = [ start, index ], innerToken;
                }() : function scanStringLiteral() {
                    var quote, start, ch, code, unescaped, restore, str = "", octal = !1;
                    assert("'" === (quote = source[index]) || '"' === quote, "String literal must starts with a quote"), 
                    start = index, ++index;
                    for (;index < length; ) {
                        if ((ch = source[index++]) === quote) {
                            quote = "";
                            break;
                        }
                        if ("\\" === ch) if ((ch = source[index++]) && isLineTerminator(ch.charCodeAt(0))) ++lineNumber, 
                        "\r" === ch && "\n" === source[index] && ++index, lineStart = index; else switch (ch) {
                          case "n":
                            str += "\n";
                            break;

                          case "r":
                            str += "\r";
                            break;

                          case "t":
                            str += "\t";
                            break;

                          case "u":
                          case "x":
                            "{" === source[index] ? (++index, str += scanUnicodeCodePointEscape()) : (restore = index, 
                            (unescaped = scanHexEscape(ch)) ? str += unescaped : (index = restore, str += ch));
                            break;

                          case "b":
                            str += "\b";
                            break;

                          case "f":
                            str += "\f";
                            break;

                          case "v":
                            str += "\x0B";
                            break;

                          default:
                            isOctalDigit(ch) ? (
                            // \0 is not octal escape sequence
                            0 !== (code = "01234567".indexOf(ch)) && (octal = !0)
                            /* istanbul ignore else */ , index < length && isOctalDigit(source[index]) && (octal = !0, 
                            code = 8 * code + "01234567".indexOf(source[index++]), 
                            // 3 digits are only allowed when string starts
                            // with 0, 1, 2, 3
                            0 <= "0123".indexOf(ch) && index < length && isOctalDigit(source[index]) && (code = 8 * code + "01234567".indexOf(source[index++]))), 
                            str += String.fromCharCode(code)) : str += ch;
                        } else {
                            if (isLineTerminator(ch.charCodeAt(0))) break;
                            str += ch;
                        }
                    }
                    "" !== quote && throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                    return {
                        type: Token.StringLiteral,
                        value: str,
                        octal: octal,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [ start, index ]
                    };
                }() : state.inJSXTag && function isJSXIdentifierStart(ch) {
                    // exclude backslash (\)
                    return 92 !== ch && isIdentifierStart(ch);
                }(ch) ? function scanJSXIdentifier() {
                    var start, value = "";
                    start = index;
                    for (;index < length && isJSXIdentifierPart(source.charCodeAt(index)); ) value += source[index++];
                    return {
                        type: Token.JSXIdentifier,
                        value: value,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [ start, index ]
                    };
                }() : 
                // Template literals start with backtick (#96) for template head
                // or close curly (#125) for template middle or template tail.
                96 === ch || 125 === ch && "template" === state.curlyStack[state.curlyStack.length - 1] ? function scanTemplate() {
                    var ch, start, terminated, head, tail, restore, unescaped, code, octal, cooked = "";
                    tail = terminated = !1, head = "`" === source[start = index], ++index;
                    for (;index < length; ) {
                        if ("`" === (ch = source[index++])) {
                            terminated = tail = !0;
                            break;
                        }
                        if ("$" === ch) {
                            if ("{" === source[index]) {
                                ++index, terminated = !0;
                                break;
                            }
                            cooked += ch;
                        } else if ("\\" === ch) if (isLineTerminator((ch = source[index++]).charCodeAt(0))) ++lineNumber, 
                        "\r" === ch && "\n" === source[index] && ++index, lineStart = index; else switch (ch) {
                          case "n":
                            cooked += "\n";
                            break;

                          case "r":
                            cooked += "\r";
                            break;

                          case "t":
                            cooked += "\t";
                            break;

                          case "u":
                          case "x":
                            "{" === source[index] ? (++index, cooked += scanUnicodeCodePointEscape()) : (restore = index, 
                            (unescaped = scanHexEscape(ch)) ? cooked += unescaped : (index = restore, cooked += ch));
                            break;

                          case "b":
                            cooked += "\b";
                            break;

                          case "f":
                            cooked += "\f";
                            break;

                          case "v":
                            cooked += "\x0B";
                            break;

                          default:
                            isOctalDigit(ch) ? (
                            // \0 is not octal escape sequence
                            0 !== (code = "01234567".indexOf(ch)) && (octal = !0)
                            /* istanbul ignore else */ , index < length && isOctalDigit(source[index]) && (octal = !0, 
                            code = 8 * code + "01234567".indexOf(source[index++]), 
                            // 3 digits are only allowed when string starts
                            // with 0, 1, 2, 3
                            0 <= "0123".indexOf(ch) && index < length && isOctalDigit(source[index]) && (code = 8 * code + "01234567".indexOf(source[index++]))), 
                            cooked += String.fromCharCode(code)) : cooked += ch;
                        } else isLineTerminator(ch.charCodeAt(0)) ? (++lineNumber, "\r" === ch && "\n" === source[index] && ++index, 
                        lineStart = index, cooked += "\n") : cooked += ch;
                    }
                    terminated || throwError({}, Messages.UnexpectedToken, "ILLEGAL");
                    index > state.curlyLastIndex && (state.curlyLastIndex = index, tail || state.curlyStack.push("template"), 
                    head || state.curlyStack.pop());
                    return {
                        type: Token.Template,
                        value: {
                            cooked: cooked,
                            raw: source.slice(start + 1, index - (tail ? 1 : 2))
                        },
                        head: head,
                        tail: tail,
                        octal: octal,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [ start, index ]
                    };
                }() : isIdentifierStart(ch) ? scanIdentifier() : 
                // Dot (.) char #46 can also start a floating-point number, hence the need
                // to check the next character.
                46 === ch ? isDecimalDigit(source.charCodeAt(index + 1)) ? scanNumericLiteral() : scanPunctuator() : isDecimalDigit(ch) ? scanNumericLiteral() : 
                // Slash (/) char #47 can also start a regex.
                extra.tokenize && 47 === ch ? function advanceSlash() {
                    var prevToken, checkToken;
                    // Using the following algorithm:
                    // https://github.com/mozilla/sweet.js/wiki/design
                                        if (!(prevToken = extra.tokens[extra.tokens.length - 1])) 
                    // Nothing before that: it cannot be a division.
                    return scanRegExp();
                    if ("Punctuator" !== prevToken.type) return "Keyword" !== prevToken.type || "this" === prevToken.value ? scanPunctuator() : scanRegExp();
                    if (")" === prevToken.value) return !(checkToken = extra.tokens[extra.openParenToken - 1]) || "Keyword" !== checkToken.type || "if" !== checkToken.value && "while" !== checkToken.value && "for" !== checkToken.value && "with" !== checkToken.value ? scanPunctuator() : scanRegExp();
                    if ("}" !== prevToken.value) return scanRegExp();
                    // Dividing a function by anything makes little sense,
                    // but we have to check for that.
                    if (extra.tokens[extra.openCurlyToken - 3] && "Keyword" === extra.tokens[extra.openCurlyToken - 3].type) {
                        if (!(
                        // Anonymous function.
                        checkToken = extra.tokens[extra.openCurlyToken - 4])) return scanPunctuator();
                    } else {
                        if (!extra.tokens[extra.openCurlyToken - 4] || "Keyword" !== extra.tokens[extra.openCurlyToken - 4].type) return scanPunctuator();
                        // checkToken determines whether the function is
                        // a declaration or an expression.
                                                if (!(
                        // Named function.
                        checkToken = extra.tokens[extra.openCurlyToken - 5])) return scanRegExp();
                    }
                    if (0 <= FnExprTokens.indexOf(checkToken.value)) 
                    // It is an expression.
                    return scanPunctuator();
                    // It is a declaration.
                                        return scanRegExp();
                }() : scanPunctuator();
            }
            function lex() {
                var token;
                return index = (token = lookahead).range[1], lineNumber = token.lineNumber, lineStart = token.lineStart, 
                lookahead = advance(), index = token.range[1], lineNumber = token.lineNumber, lineStart = token.lineStart, 
                token;
            }
            function peek() {
                var pos, line, start;
                pos = index, line = lineNumber, start = lineStart, lookahead = advance(), index = pos, 
                lineNumber = line, lineStart = start;
            }
            function lookahead2() {
                var adv, pos, line, start, result;
                // If we are collecting the tokens, don't grab the next one yet.
                /* istanbul ignore next */                return adv = "function" == typeof extra.advance ? extra.advance : advance, 
                pos = index, line = lineNumber, start = lineStart, 
                // Scan for the next immediate token.
                /* istanbul ignore if */
                null === lookahead && (lookahead = adv()), index = lookahead.range[1], lineNumber = lookahead.lineNumber, 
                lineStart = lookahead.lineStart, 
                // Grab the token right after.
                result = adv(), index = pos, lineNumber = line, lineStart = start, result;
            }
            function rewind(token) {
                index = token.range[0], lineNumber = token.lineNumber, lineStart = token.lineStart, 
                lookahead = token;
            }
            function markerCreate() {
                return extra.loc || extra.range ? (skipComment(), {
                    offset: index,
                    line: lineNumber,
                    col: index - lineStart
                }) : undefined;
            }
            function markerCreatePreserveWhitespace() {
                return extra.loc || extra.range ? {
                    offset: index,
                    line: lineNumber,
                    col: index - lineStart
                } : undefined;
            }
            function markerApply(marker, node) {
                return extra.range && (node.range = [ marker.offset, index ]), extra.loc && (node.loc = {
                    start: {
                        line: marker.line,
                        column: marker.col
                    },
                    end: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                }, node = delegate.postProcess(node)), extra.attachComment && function processComment(node) {
                    var lastChild, trailingComments, bottomRight = extra.bottomRightStack, last = bottomRight[bottomRight.length - 1];
                    if (node.type === Syntax.Program && 0 < node.body.length) return;
                    0 < extra.trailingComments.length ? extra.trailingComments[0].range[0] >= node.range[1] ? (trailingComments = extra.trailingComments, 
                    extra.trailingComments = []) : extra.trailingComments.length = 0 : last && last.trailingComments && last.trailingComments[0].range[0] >= node.range[1] && (trailingComments = last.trailingComments, 
                    delete last.trailingComments);
                    // Eating the stack.
                                        if (last) for (;last && last.range[0] >= node.range[0]; ) lastChild = last, 
                    last = bottomRight.pop();
                    lastChild ? lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0] && (node.leadingComments = lastChild.leadingComments, 
                    delete lastChild.leadingComments) : 0 < extra.leadingComments.length && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0] && (node.leadingComments = extra.leadingComments, 
                    extra.leadingComments = []);
                    trailingComments && (node.trailingComments = trailingComments);
                    bottomRight.push(node);
                }(node), node;
            }
            // Return true if there is a line terminator before the next token.
            function peekLineTerminator() {
                var pos, line, start, found;
                return pos = index, line = lineNumber, start = lineStart, skipComment(), found = lineNumber !== line, 
                index = pos, lineNumber = line, lineStart = start, found;
            }
            // Throw an exception
                        function throwError(token, messageFormat) {
                var error, args = Array.prototype.slice.call(arguments, 2), msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                    return assert(idx < args.length, "Message reference must be in range"), args[idx];
                });
                throw "number" == typeof token.lineNumber ? ((error = new Error("Line " + token.lineNumber + ": " + msg)).index = token.range[0], 
                error.lineNumber = token.lineNumber, error.column = token.range[0] - lineStart + 1) : ((error = new Error("Line " + lineNumber + ": " + msg)).index = index, 
                error.lineNumber = lineNumber, error.column = index - lineStart + 1), error.description = msg, 
                error;
            }
            function throwErrorTolerant() {
                try {
                    throwError.apply(null, arguments);
                } catch (e) {
                    if (!extra.errors) throw e;
                    extra.errors.push(e);
                }
            }
            // Throw an exception because of the token.
                        function throwUnexpected(token) {
                if (token.type === Token.EOF && throwError(token, Messages.UnexpectedEOS), token.type === Token.NumericLiteral && throwError(token, Messages.UnexpectedNumber), 
                token.type !== Token.StringLiteral && token.type !== Token.JSXText || throwError(token, Messages.UnexpectedString), 
                token.type === Token.Identifier && throwError(token, Messages.UnexpectedIdentifier), 
                token.type === Token.Keyword) {
                    if (function isFutureReservedWord(id) {
                        switch (id) {
                          case "class":
                          case "enum":
                          case "export":
                          case "extends":
                          case "import":
                          case "super":
                            return !0;

                          default:
                            return !1;
                        }
                    }(token.value)) throwError(token, Messages.UnexpectedReserved); else if (strict && isStrictModeReservedWord(token.value)) return void throwErrorTolerant(token, Messages.StrictReservedWord);
                    throwError(token, Messages.UnexpectedToken, token.value);
                }
                token.type === Token.Template && throwError(token, Messages.UnexpectedTemplate, token.value.raw), 
                // BooleanLiteral, NullLiteral, or Punctuator.
                throwError(token, Messages.UnexpectedToken, token.value);
            }
            // Expect the next token to match the specified punctuator.
            // If not, an exception will be thrown.
                        function expect(value) {
                var token = lex();
                token.type === Token.Punctuator && token.value === value || throwUnexpected(token);
            }
            // Expect the next token to match the specified keyword.
            // If not, an exception will be thrown.
                        function expectKeyword(keyword, contextual) {
                var token = lex();
                token.type === (contextual ? Token.Identifier : Token.Keyword) && token.value === keyword || throwUnexpected(token);
            }
            // Expect the next token to match the specified contextual keyword.
            // If not, an exception will be thrown.
                        function expectContextualKeyword(keyword) {
                return expectKeyword(keyword, !0);
            }
            // Return true if the next token matches the specified punctuator.
                        function match(value) {
                return lookahead.type === Token.Punctuator && lookahead.value === value;
            }
            // Return true if the next token matches the specified keyword
                        function matchKeyword(keyword, contextual) {
                var expectedType = contextual ? Token.Identifier : Token.Keyword;
                return lookahead.type === expectedType && lookahead.value === keyword;
            }
            // Return true if the next token matches the specified contextual keyword
                        function matchContextualKeyword(keyword) {
                return matchKeyword(keyword, !0);
            }
            // Return true if the next token is an assignment operator
                        function matchAsync() {
                var backtrackToken = lookahead, matches = !1;
                return matchContextualKeyword("async") && (lex(), // Make sure peekLineTerminator() starts after 'async'.
                matches = !peekLineTerminator(), rewind(backtrackToken)), matches;
            }
            function consumeSemicolon() {
                var line, oldIndex = index, oldLineNumber = lineNumber, oldLineStart = lineStart, oldLookahead = lookahead;
                // Catch the very common case first: immediately a semicolon (char #59).
                                if (59 !== source.charCodeAt(index)) {
                    if (line = lineNumber, skipComment(), lineNumber !== line) return index = oldIndex, 
                    lineNumber = oldLineNumber, lineStart = oldLineStart, void (lookahead = oldLookahead);
                    match(";") ? lex() : lookahead.type === Token.EOF || match("}") || throwUnexpected(lookahead);
                } else lex();
            }
            // Return true if provided expression is LeftHandSideExpression
                        function isLeftHandSide(expr) {
                return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
            }
            // 11.1.4 Array Initialiser
            function parseArrayInitialiser() {
                var tmp, elements = [], blocks = [], filter = null, possiblecomprehension = !0, marker = markerCreate();
                for (expect("["); !match("]"); ) "for" === lookahead.value && lookahead.type === Token.Keyword ? (possiblecomprehension || throwError({}, Messages.ComprehensionError), 
                matchKeyword("for"), (tmp = parseForStatement({
                    ignoreBody: !0
                })).of = tmp.type === Syntax.ForOfStatement, tmp.type = Syntax.ComprehensionBlock, 
                tmp.left.kind && // can't be let or const
                throwError({}, Messages.ComprehensionError), blocks.push(tmp)) : "if" === lookahead.value && lookahead.type === Token.Keyword ? (possiblecomprehension || throwError({}, Messages.ComprehensionError), 
                expectKeyword("if"), expect("("), filter = parseExpression(), expect(")")) : "," === lookahead.value && lookahead.type === Token.Punctuator ? (possiblecomprehension = !1, 
                // no longer allowed.
                lex(), elements.push(null)) : (tmp = parseSpreadOrAssignmentExpression(), elements.push(tmp), 
                tmp && tmp.type === Syntax.SpreadElement ? match("]") || throwError({}, Messages.ElementAfterSpreadElement) : match("]") || matchKeyword("for") || matchKeyword("if") || (expect(","), 
                // this lexes.
                possiblecomprehension = !1));
                return expect("]"), filter && !blocks.length && throwError({}, Messages.ComprehensionRequiresBlock), 
                blocks.length ? (1 !== elements.length && throwError({}, Messages.ComprehensionError), 
                markerApply(marker, delegate.createComprehensionExpression(filter, blocks, elements[0]))) : markerApply(marker, delegate.createArrayExpression(elements));
            }
            // 11.1.5 Object Initialiser
                        function parsePropertyFunction(options) {
                var previousStrict, previousYieldAllowed, previousAwaitAllowed, params, defaults, body, marker = markerCreate();
                return previousStrict = strict, previousYieldAllowed = state.yieldAllowed, state.yieldAllowed = options.generator, 
                previousAwaitAllowed = state.awaitAllowed, state.awaitAllowed = options.async, params = options.params || [], 
                defaults = options.defaults || [], body = parseConciseBody(), options.name && strict && isRestrictedWord(params[0].name) && throwErrorTolerant(options.name, Messages.StrictParamName), 
                strict = previousStrict, state.yieldAllowed = previousYieldAllowed, state.awaitAllowed = previousAwaitAllowed, 
                markerApply(marker, delegate.createFunctionExpression(null, params, defaults, body, options.rest || null, options.generator, body.type !== Syntax.BlockStatement, options.async, options.returnType, options.typeParameters));
            }
            function parsePropertyMethodFunction(options) {
                var previousStrict, tmp, method;
                return previousStrict = strict, strict = !0, (tmp = parseParams()).stricted && throwErrorTolerant(tmp.stricted, tmp.message), 
                method = parsePropertyFunction({
                    params: tmp.params,
                    defaults: tmp.defaults,
                    rest: tmp.rest,
                    generator: options.generator,
                    async: options.async,
                    returnType: tmp.returnType,
                    typeParameters: options.typeParameters
                }), strict = previousStrict, method;
            }
            function parseObjectPropertyKey() {
                var propertyKey, result, marker = markerCreate(), token = lex();
                // Note: This function is called only from parseObjectProperty(), where
                // EOF and Punctuator tokens are already filtered out.
                                return token.type === Token.StringLiteral || token.type === Token.NumericLiteral ? (strict && token.octal && throwErrorTolerant(token, Messages.StrictOctalLiteral), 
                markerApply(marker, delegate.createLiteral(token))) : token.type === Token.Punctuator && "[" === token.value ? (
                // For computed properties we should skip the [ and ], and
                // capture in marker only the assignment expression itself.
                marker = markerCreate(), propertyKey = parseAssignmentExpression(), result = markerApply(marker, propertyKey), 
                expect("]"), result) : markerApply(marker, delegate.createIdentifier(token.value));
            }
            function parseObjectProperty() {
                var token, key, id, param, computed, returnType, typeParameters, marker = markerCreate();
                return computed = "[" === (token = lookahead).value && token.type === Token.Punctuator, 
                token.type === Token.Identifier || computed || matchAsync() ? (id = parseObjectPropertyKey(), 
                match(":") ? (lex(), markerApply(marker, delegate.createProperty("init", id, parseAssignmentExpression(), !1, !1, computed))) : match("(") || match("<") ? (match("<") && (typeParameters = parseTypeParameterDeclaration()), 
                markerApply(marker, delegate.createProperty("init", id, parsePropertyMethodFunction({
                    generator: !1,
                    async: !1,
                    typeParameters: typeParameters
                }), !0, !1, computed))) : 
                // Property Assignment: Getter and Setter.
                "get" === token.value ? (computed = "[" === lookahead.value, key = parseObjectPropertyKey(), 
                expect("("), expect(")"), match(":") && (returnType = parseTypeAnnotation()), markerApply(marker, delegate.createProperty("get", key, parsePropertyFunction({
                    generator: !1,
                    async: !1,
                    returnType: returnType
                }), !1, !1, computed))) : "set" === token.value ? (computed = "[" === lookahead.value, 
                key = parseObjectPropertyKey(), expect("("), token = lookahead, param = [ parseTypeAnnotatableIdentifier() ], 
                expect(")"), match(":") && (returnType = parseTypeAnnotation()), markerApply(marker, delegate.createProperty("set", key, parsePropertyFunction({
                    params: param,
                    generator: !1,
                    async: !1,
                    name: token,
                    returnType: returnType
                }), !1, !1, computed))) : "async" === token.value ? (computed = "[" === lookahead.value, 
                key = parseObjectPropertyKey(), match("<") && (typeParameters = parseTypeParameterDeclaration()), 
                markerApply(marker, delegate.createProperty("init", key, parsePropertyMethodFunction({
                    generator: !1,
                    async: !0,
                    typeParameters: typeParameters
                }), !0, !1, computed))) : (computed && 
                // Computed properties can only be used with full notation.
                throwUnexpected(lookahead), markerApply(marker, delegate.createProperty("init", id, id, !1, !0, !1)))) : token.type === Token.EOF || token.type === Token.Punctuator ? (match("*") || throwUnexpected(token), 
                lex(), computed = lookahead.type === Token.Punctuator && "[" === lookahead.value, 
                id = parseObjectPropertyKey(), match("<") && (typeParameters = parseTypeParameterDeclaration()), 
                match("(") || throwUnexpected(lex()), markerApply(marker, delegate.createProperty("init", id, parsePropertyMethodFunction({
                    generator: !0,
                    typeParameters: typeParameters
                }), !0, !1, computed))) : (key = parseObjectPropertyKey(), match(":") ? (lex(), 
                markerApply(marker, delegate.createProperty("init", key, parseAssignmentExpression(), !1, !1, !1))) : match("(") || match("<") ? (match("<") && (typeParameters = parseTypeParameterDeclaration()), 
                markerApply(marker, delegate.createProperty("init", key, parsePropertyMethodFunction({
                    generator: !1,
                    typeParameters: typeParameters
                }), !0, !1, !1))) : void throwUnexpected(lex()));
            }
            function parseObjectSpreadProperty() {
                var marker = markerCreate();
                return expect("..."), markerApply(marker, delegate.createSpreadProperty(parseAssignmentExpression()));
            }
            function getFieldName(key) {
                var toString = String;
                return key.type === Syntax.Identifier ? key.name : toString(key.value);
            }
            function parseObjectInitialiser() {
                var property, name, kind, storedKind, properties = [], map = new StringMap(), marker = markerCreate(), toString = String;
                for (expect("{"); !match("}"); ) match("...") ? property = parseObjectSpreadProperty() : (property = parseObjectProperty(), 
                name = property.key.type === Syntax.Identifier ? property.key.name : toString(property.key.value), 
                kind = "init" === property.kind ? PropertyKind.Data : "get" === property.kind ? PropertyKind.Get : PropertyKind.Set, 
                map.has(name) ? ((storedKind = map.get(name)) === PropertyKind.Data ? strict && kind === PropertyKind.Data ? throwErrorTolerant({}, Messages.StrictDuplicateProperty) : kind !== PropertyKind.Data && throwErrorTolerant({}, Messages.AccessorDataProperty) : kind === PropertyKind.Data ? throwErrorTolerant({}, Messages.AccessorDataProperty) : storedKind & kind && throwErrorTolerant({}, Messages.AccessorGetSet), 
                map.set(name, storedKind | kind)) : map.set(name, kind)), properties.push(property), 
                match("}") || expect(",");
                return expect("}"), markerApply(marker, delegate.createObjectExpression(properties));
            }
            function parseTemplateElement(option) {
                var marker, token;
                return (lookahead.type !== Token.Template || option.head && !lookahead.head) && throwError({}, Messages.UnexpectedToken, "ILLEGAL"), 
                marker = markerCreate(), token = lex(), strict && token.octal && throwError(token, Messages.StrictOctalLiteral), 
                markerApply(marker, delegate.createTemplateElement({
                    raw: token.value.raw,
                    cooked: token.value.cooked
                }, token.tail));
            }
            function parseTemplateLiteral() {
                var quasi, quasis, expressions, marker = markerCreate();
                for (quasi = parseTemplateElement({
                    head: !0
                }), quasis = [ quasi ], expressions = []; !quasi.tail; ) expressions.push(parseExpression()), 
                quasi = parseTemplateElement({
                    head: !1
                }), quasis.push(quasi);
                return markerApply(marker, delegate.createTemplateLiteral(quasis, expressions));
            }
            // 11.1.6 The Grouping Operator
                        function matchAsyncFuncExprOrDecl() {
                var token;
                return !(!matchAsync() || (token = lookahead2()).type !== Token.Keyword || "function" !== token.value);
            }
            // 11.1 Primary Expressions
                        function parsePrimaryExpression() {
                var marker, type, token, expr;
                if ((type = lookahead.type) === Token.Identifier) return markerApply(marker = markerCreate(), delegate.createIdentifier(lex().value));
                if (type === Token.StringLiteral || type === Token.NumericLiteral) return strict && lookahead.octal && throwErrorTolerant(lookahead, Messages.StrictOctalLiteral), 
                markerApply(marker = markerCreate(), delegate.createLiteral(lex()));
                if (type === Token.Keyword) {
                    if (matchKeyword("this")) return marker = markerCreate(), lex(), markerApply(marker, delegate.createThisExpression());
                    if (matchKeyword("function")) return parseFunctionExpression();
                    if (matchKeyword("class")) return parseClassExpression();
                    if (matchKeyword("super")) return marker = markerCreate(), lex(), markerApply(marker, delegate.createIdentifier("super"));
                }
                return type === Token.BooleanLiteral ? (marker = markerCreate(), (token = lex()).value = "true" === token.value, 
                markerApply(marker, delegate.createLiteral(token))) : type === Token.NullLiteral ? (marker = markerCreate(), 
                (token = lex()).value = null, markerApply(marker, delegate.createLiteral(token))) : match("[") ? parseArrayInitialiser() : match("{") ? parseObjectInitialiser() : match("(") ? function parseGroupExpression() {
                    var expr, marker, typeAnnotation;
                    expect("("), ++state.parenthesizedCount, marker = markerCreate(), expr = parseExpression(), 
                    match(":") && (typeAnnotation = parseTypeAnnotation(), expr = markerApply(marker, delegate.createTypeCast(expr, typeAnnotation)));
                    return expect(")"), expr;
                }() : match("/") || match("/=") ? (marker = markerCreate(), expr = delegate.createLiteral(scanRegExp()), 
                peek(), markerApply(marker, expr)) : type === Token.Template ? parseTemplateLiteral() : match("<") ? parseJSXElement() : void throwUnexpected(lex());
            }
            // 11.2 Left-Hand-Side Expressions
                        function parseArguments() {
                var arg, args = [];
                if (expect("("), !match(")")) for (;index < length; ) {
                    if (arg = parseSpreadOrAssignmentExpression(), args.push(arg), arg.type === Syntax.SpreadElement) {
                        if (match(")")) break;
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                    if (match(")")) break;
                    if (expect(","), match(")")) break;
                }
                return expect(")"), args;
            }
            function parseSpreadOrAssignmentExpression() {
                if (match("...")) {
                    var marker = markerCreate();
                    return lex(), markerApply(marker, delegate.createSpreadElement(parseAssignmentExpression()));
                }
                return parseAssignmentExpression();
            }
            function parseNonComputedProperty() {
                var marker = markerCreate(), token = lex();
                return isIdentifierName(token) || throwUnexpected(token), markerApply(marker, delegate.createIdentifier(token.value));
            }
            function parseNonComputedMember() {
                return expect("."), parseNonComputedProperty();
            }
            function parseComputedMember() {
                var expr;
                return expect("["), expr = parseExpression(), expect("]"), expr;
            }
            function parseNewExpression() {
                var callee, args, marker = markerCreate();
                return expectKeyword("new"), callee = function parseLeftHandSideExpression() {
                    var expr, marker = markerCreate();
                    expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
                    for (;match(".") || match("[") || lookahead.type === Token.Template && lookahead.head; ) expr = match("[") ? markerApply(marker, delegate.createMemberExpression("[", expr, parseComputedMember())) : match(".") ? markerApply(marker, delegate.createMemberExpression(".", expr, parseNonComputedMember())) : markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
                    return expr;
                }
                // 11.3 Postfix Expressions
                (), args = match("(") ? parseArguments() : [], markerApply(marker, delegate.createNewExpression(callee, args));
            }
            function parseLeftHandSideExpressionAllowCall() {
                var expr, args, marker = markerCreate();
                for (expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression(); match(".") || match("[") || match("(") || lookahead.type === Token.Template && lookahead.head; ) expr = match("(") ? (args = parseArguments(), 
                markerApply(marker, delegate.createCallExpression(expr, args))) : match("[") ? markerApply(marker, delegate.createMemberExpression("[", expr, parseComputedMember())) : match(".") ? markerApply(marker, delegate.createMemberExpression(".", expr, parseNonComputedMember())) : markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
                return expr;
            }
            function parsePostfixExpression() {
                var token, marker = markerCreate(), expr = parseLeftHandSideExpressionAllowCall();
                return lookahead.type !== Token.Punctuator || !match("++") && !match("--") || peekLineTerminator() || (
                // 11.3.1, 11.3.2
                strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name) && throwErrorTolerant({}, Messages.StrictLHSPostfix), 
                isLeftHandSide(expr) || throwError({}, Messages.InvalidLHSInAssignment), token = lex(), 
                expr = markerApply(marker, delegate.createPostfixExpression(token.value, expr))), 
                expr;
            }
            // 11.4 Unary Operators
                        function parseUnaryExpression() {
                var marker, token, expr;
                return lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword ? parsePostfixExpression() : match("++") || match("--") ? (marker = markerCreate(), 
                token = lex(), expr = parseUnaryExpression(), 
                // 11.4.4, 11.4.5
                strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name) && throwErrorTolerant({}, Messages.StrictLHSPrefix), 
                isLeftHandSide(expr) || throwError({}, Messages.InvalidLHSInAssignment), markerApply(marker, delegate.createUnaryExpression(token.value, expr))) : match("+") || match("-") || match("~") || match("!") ? (marker = markerCreate(), 
                token = lex(), expr = parseUnaryExpression(), markerApply(marker, delegate.createUnaryExpression(token.value, expr))) : matchKeyword("delete") || matchKeyword("void") || matchKeyword("typeof") ? (marker = markerCreate(), 
                token = lex(), expr = parseUnaryExpression(), expr = markerApply(marker, delegate.createUnaryExpression(token.value, expr)), 
                strict && "delete" === expr.operator && expr.argument.type === Syntax.Identifier && throwErrorTolerant({}, Messages.StrictDelete), 
                expr) : parsePostfixExpression();
            }
            function binaryPrecedence(token, allowIn) {
                var prec = 0;
                if (token.type !== Token.Punctuator && token.type !== Token.Keyword) return 0;
                switch (token.value) {
                  case "||":
                    prec = 1;
                    break;

                  case "&&":
                    prec = 2;
                    break;

                  case "|":
                    prec = 3;
                    break;

                  case "^":
                    prec = 4;
                    break;

                  case "&":
                    prec = 5;
                    break;

                  case "==":
                  case "!=":
                  case "===":
                  case "!==":
                    prec = 6;
                    break;

                  case "<":
                  case ">":
                  case "<=":
                  case ">=":
                  case "instanceof":
                    prec = 7;
                    break;

                  case "in":
                    prec = allowIn ? 7 : 0;
                    break;

                  case "<<":
                  case ">>":
                  case ">>>":
                    prec = 8;
                    break;

                  case "+":
                  case "-":
                    prec = 9;
                    break;

                  case "*":
                  case "/":
                  case "%":
                    prec = 11;
                }
                return prec;
            }
            // 11.5 Multiplicative Operators
            // 11.6 Additive Operators
            // 11.7 Bitwise Shift Operators
            // 11.8 Relational Operators
            // 11.9 Equality Operators
            // 11.10 Binary Bitwise Operators
            // 11.11 Binary Logical Operators
                        // 11.12 Conditional Operator
            function parseConditionalExpression() {
                var expr, previousAllowIn, consequent, alternate, marker = markerCreate();
                return expr = function parseBinaryExpression() {
                    var expr, token, prec, previousAllowIn, stack, right, operator, left, i, marker, markers;
                    if (previousAllowIn = state.allowIn, state.allowIn = !0, marker = markerCreate(), 
                    left = parseUnaryExpression(), 0 === (prec = binaryPrecedence(token = lookahead, previousAllowIn))) return left;
                    token.prec = prec, lex(), markers = [ marker, markerCreate() ], right = parseUnaryExpression(), 
                    stack = [ left, token, right ];
                    for (;0 < (prec = binaryPrecedence(lookahead, previousAllowIn)); ) {
                        // Reduce: make a binary expression from the three topmost entries.
                        for (;2 < stack.length && prec <= stack[stack.length - 2].prec; ) right = stack.pop(), 
                        operator = stack.pop().value, left = stack.pop(), expr = delegate.createBinaryExpression(operator, left, right), 
                        markers.pop(), markerApply(marker = markers.pop(), expr), stack.push(expr), markers.push(marker);
                        // Shift.
                                                (token = lex()).prec = prec, stack.push(token), markers.push(markerCreate()), 
                        expr = parseUnaryExpression(), stack.push(expr);
                    }
                    state.allowIn = previousAllowIn, 
                    // Final reduce to clean-up the stack.
                    i = stack.length - 1, expr = stack[i], markers.pop();
                    for (;1 < i; ) expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr), 
                    i -= 2, markerApply(marker = markers.pop(), expr);
                    return expr;
                }(), match("?") && (lex(), previousAllowIn = state.allowIn, state.allowIn = !0, 
                consequent = parseAssignmentExpression(), state.allowIn = previousAllowIn, expect(":"), 
                alternate = parseAssignmentExpression(), expr = markerApply(marker, delegate.createConditionalExpression(expr, consequent, alternate))), 
                expr;
            }
            // 11.13 Assignment Operators
            // 12.14.5 AssignmentPattern
                        function reinterpretAsAssignmentBindingPattern(expr) {
                var i, len, property, element;
                if (expr.type === Syntax.ObjectExpression) for (expr.type = Syntax.ObjectPattern, 
                i = 0, len = expr.properties.length; i < len; i += 1) (property = expr.properties[i]).type === Syntax.SpreadProperty ? (i < len - 1 && throwError({}, Messages.PropertyAfterSpreadProperty), 
                reinterpretAsAssignmentBindingPattern(property.argument)) : ("init" !== property.kind && throwError({}, Messages.InvalidLHSInAssignment), 
                reinterpretAsAssignmentBindingPattern(property.value)); else if (expr.type === Syntax.ArrayExpression) for (expr.type = Syntax.ArrayPattern, 
                i = 0, len = expr.elements.length; i < len; i += 1) 
                /* istanbul ignore else */
                (element = expr.elements[i]) && reinterpretAsAssignmentBindingPattern(element); else expr.type === Syntax.Identifier ? isRestrictedWord(expr.name) && throwError({}, Messages.InvalidLHSInAssignment) : expr.type === Syntax.SpreadElement ? (reinterpretAsAssignmentBindingPattern(expr.argument), 
                expr.argument.type === Syntax.ObjectPattern && throwError({}, Messages.ObjectPatternAsSpread)) : 
                /* istanbul ignore else */
                expr.type !== Syntax.MemberExpression && expr.type !== Syntax.CallExpression && expr.type !== Syntax.NewExpression && throwError({}, Messages.InvalidLHSInAssignment);
            }
            // 13.2.3 BindingPattern
                        function reinterpretAsDestructuredParameter(options, expr) {
                var i, len, property, element;
                if (expr.type === Syntax.ObjectExpression) for (expr.type = Syntax.ObjectPattern, 
                i = 0, len = expr.properties.length; i < len; i += 1) (property = expr.properties[i]).type === Syntax.SpreadProperty ? (i < len - 1 && throwError({}, Messages.PropertyAfterSpreadProperty), 
                reinterpretAsDestructuredParameter(options, property.argument)) : ("init" !== property.kind && throwError({}, Messages.InvalidLHSInFormalsList), 
                reinterpretAsDestructuredParameter(options, property.value)); else if (expr.type === Syntax.ArrayExpression) for (expr.type = Syntax.ArrayPattern, 
                i = 0, len = expr.elements.length; i < len; i += 1) (element = expr.elements[i]) && reinterpretAsDestructuredParameter(options, element); else expr.type === Syntax.Identifier ? validateParam(options, expr, expr.name) : expr.type === Syntax.SpreadElement ? (
                // BindingRestElement only allows BindingIdentifier
                expr.argument.type !== Syntax.Identifier && throwError({}, Messages.InvalidLHSInFormalsList), 
                validateParam(options, expr.argument, expr.argument.name)) : throwError({}, Messages.InvalidLHSInFormalsList);
            }
            function reinterpretAsCoverFormalsList(expressions) {
                var i, len, param, params, defaults, defaultCount, options, rest;
                for (params = [], defaults = [], defaultCount = 0, rest = null, options = {
                    paramSet: new StringMap()
                }, i = 0, len = expressions.length; i < len; i += 1) if ((param = expressions[i]).type === Syntax.Identifier) params.push(param), 
                defaults.push(null), validateParam(options, param, param.name); else if (param.type === Syntax.ObjectExpression || param.type === Syntax.ArrayExpression) reinterpretAsDestructuredParameter(options, param), 
                params.push(param), defaults.push(null); else if (param.type === Syntax.SpreadElement) assert(i === len - 1, "It is guaranteed that SpreadElement is last element by parseExpression"), 
                param.argument.type !== Syntax.Identifier && throwError({}, Messages.InvalidLHSInFormalsList), 
                reinterpretAsDestructuredParameter(options, param.argument), rest = param.argument; else {
                    if (param.type !== Syntax.AssignmentExpression) return null;
                    params.push(param.left), defaults.push(param.right), ++defaultCount, validateParam(options, param.left, param.left.name);
                }
                return options.message === Messages.StrictParamDupe && throwError(strict ? options.stricted : options.firstRestricted, options.message), 
                0 === defaultCount && (defaults = []), {
                    params: params,
                    defaults: defaults,
                    rest: rest,
                    stricted: options.stricted,
                    firstRestricted: options.firstRestricted,
                    message: options.message
                };
            }
            function parseArrowFunctionExpression(options, marker) {
                var previousStrict, previousYieldAllowed, previousAwaitAllowed, body;
                return expect("=>"), previousStrict = strict, previousYieldAllowed = state.yieldAllowed, 
                state.yieldAllowed = !1, previousAwaitAllowed = state.awaitAllowed, state.awaitAllowed = !!options.async, 
                body = parseConciseBody(), strict && options.firstRestricted && throwError(options.firstRestricted, options.message), 
                strict && options.stricted && throwErrorTolerant(options.stricted, options.message), 
                strict = previousStrict, state.yieldAllowed = previousYieldAllowed, state.awaitAllowed = previousAwaitAllowed, 
                markerApply(marker, delegate.createArrowFunctionExpression(options.params, options.defaults, body, options.rest, body.type !== Syntax.BlockStatement, !!options.async));
            }
            function parseAssignmentExpression() {
                var marker, expr, token, params, oldParenthesizedCount, startsWithParen = !1, backtrackToken = lookahead, possiblyAsync = !1;
                if (
                // Note that 'yield' is treated as a keyword in strict mode, but a
                // contextual keyword (identifier) in non-strict mode, so we need to
                // use matchKeyword('yield', false) and matchKeyword('yield', true)
                // (i.e. matchContextualKeyword) appropriately.
                function matchYield() {
                    return state.yieldAllowed && matchKeyword("yield", !strict);
                }()) return function parseYieldExpression() {
                    var delegateFlag, expr, marker = markerCreate();
                    expectKeyword("yield", !strict), delegateFlag = !1, match("*") && (lex(), delegateFlag = !0);
                    return expr = parseAssignmentExpression(), markerApply(marker, delegate.createYieldExpression(expr, delegateFlag));
                }();
                if (function matchAwait() {
                    return state.awaitAllowed && matchContextualKeyword("await");
                }()) return function parseAwaitExpression() {
                    var expr, marker = markerCreate();
                    return expectContextualKeyword("await"), expr = parseAssignmentExpression(), markerApply(marker, delegate.createAwaitExpression(expr));
                }
                // 14 Functions and classes
                // 14.1 Functions is defined above (13 in ES5)
                // 14.2 Arrow Functions Definitions is defined in (7.3 assignments)
                // 14.3 Method Definitions
                // 14.3.7
                ();
                if (oldParenthesizedCount = state.parenthesizedCount, marker = markerCreate(), matchAsyncFuncExprOrDecl()) return parseFunctionExpression();
                if (matchAsync() && (
                // We can't be completely sure that this 'async' token is
                // actually a contextual keyword modifying a function
                // expression, so we might have to un-lex() it later by
                // calling rewind(backtrackToken).
                possiblyAsync = !0, lex()), match("(")) {
                    if ((token = lookahead2()).type === Token.Punctuator && ")" === token.value || "..." === token.value) return params = parseParams(), 
                    match("=>") || throwUnexpected(lex()), params.async = possiblyAsync, parseArrowFunctionExpression(params, marker);
                    startsWithParen = !0;
                }
                return token = lookahead, 
                // If the 'async' keyword is not followed by a '(' character or an
                // identifier, then it can't be an arrow function modifier, and we
                // should interpret it as a normal identifer.
                possiblyAsync && !match("(") && token.type !== Token.Identifier && (possiblyAsync = !1, 
                rewind(backtrackToken)), expr = parseConditionalExpression(), match("=>") && (state.parenthesizedCount === oldParenthesizedCount || state.parenthesizedCount === oldParenthesizedCount + 1) && (expr.type === Syntax.Identifier ? params = reinterpretAsCoverFormalsList([ expr ]) : expr.type === Syntax.AssignmentExpression || expr.type === Syntax.ArrayExpression || expr.type === Syntax.ObjectExpression ? (startsWithParen || throwUnexpected(lex()), 
                params = reinterpretAsCoverFormalsList([ expr ])) : expr.type === Syntax.SequenceExpression && (params = reinterpretAsCoverFormalsList(expr.expressions)), 
                params) ? (params.async = possiblyAsync, parseArrowFunctionExpression(params, marker)) : (
                // If we haven't returned by now, then the 'async' keyword was not
                // a function modifier, and we should rewind and interpret it as a
                // normal identifier.
                possiblyAsync && (possiblyAsync = !1, rewind(backtrackToken), expr = parseConditionalExpression()), 
                function matchAssign() {
                    var op;
                    return lookahead.type === Token.Punctuator && ("=" === (op = lookahead.value) || "*=" === op || "/=" === op || "%=" === op || "+=" === op || "-=" === op || "<<=" === op || ">>=" === op || ">>>=" === op || "&=" === op || "^=" === op || "|=" === op);
                }() && (
                // 11.13.1
                strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name) && throwErrorTolerant(token, Messages.StrictLHSAssignment), 
                // ES.next draf 11.13 Runtime Semantics step 1
                !match("=") || expr.type !== Syntax.ObjectExpression && expr.type !== Syntax.ArrayExpression ? isLeftHandSide(expr) || throwError({}, Messages.InvalidLHSInAssignment) : reinterpretAsAssignmentBindingPattern(expr), 
                expr = markerApply(marker, delegate.createAssignmentExpression(lex().value, expr, parseAssignmentExpression()))), 
                expr);
            }
            // 11.14 Comma Operator
                        function parseExpression() {
                var marker, expr, expressions, sequence, spreadFound, possibleArrow;
                if (marker = markerCreate(), expr = parseAssignmentExpression(), expressions = [ expr ], 
                match(",")) {
                    for (;index < length && match(",") && (lex(), !match(")") || (possibleArrow = lookahead2()).type !== Token.Punctuator || "=>" !== possibleArrow.value); ) if (expr = parseSpreadOrAssignmentExpression(), 
                    expressions.push(expr), expr.type === Syntax.SpreadElement) {
                        spreadFound = !0, match(")") || throwError({}, Messages.ElementAfterSpreadElement);
                        break;
                    }
                    1 < expressions.length && (sequence = markerApply(marker, delegate.createSequenceExpression(expressions)));
                }
                return spreadFound && "=>" !== lookahead2().value && throwError({}, Messages.IllegalSpread), 
                sequence || expr;
            }
            // 12.1 Block
                        function parseBlock() {
                var block, marker = markerCreate();
                return expect("{"), block = function parseStatementList() {
                    var statement, list = [];
                    for (;index < length && !match("}") && void 0 !== (statement = parseSourceElement()); ) list.push(statement);
                    return list;
                }(), expect("}"), markerApply(marker, delegate.createBlockStatement(block));
            }
            // 12.2 Variable Statement
                        function parseTypeParameterDeclaration() {
                var marker = markerCreate(), paramTypes = [];
                for (expect("<"); !match(">"); ) paramTypes.push(parseTypeAnnotatableIdentifier()), 
                match(">") || expect(",");
                return expect(">"), markerApply(marker, delegate.createTypeParameterDeclaration(paramTypes));
            }
            function parseTypeParameterInstantiation() {
                var marker = markerCreate(), oldInType = state.inType, paramTypes = [];
                for (state.inType = !0, expect("<"); !match(">"); ) paramTypes.push(parseType()), 
                match(">") || expect(",");
                return expect(">"), state.inType = oldInType, markerApply(marker, delegate.createTypeParameterInstantiation(paramTypes));
            }
            function parseObjectTypeIndexer(marker, isStatic) {
                var id, key, value;
                return expect("["), id = parseObjectPropertyKey(), expect(":"), key = parseType(), 
                expect("]"), expect(":"), value = parseType(), markerApply(marker, delegate.createObjectTypeIndexer(id, key, value, isStatic));
            }
            function parseObjectTypeMethodish(marker) {
                var returnType, params = [], rest = null, typeParameters = null;
                for (match("<") && (typeParameters = parseTypeParameterDeclaration()), expect("("); lookahead.type === Token.Identifier; ) params.push(parseFunctionTypeParam()), 
                match(")") || expect(",");
                return match("...") && (lex(), rest = parseFunctionTypeParam()), expect(")"), expect(":"), 
                returnType = parseType(), markerApply(marker, delegate.createFunctionTypeAnnotation(params, returnType, rest, typeParameters));
            }
            function parseObjectTypeMethod(marker, isStatic, key) {
                var value;
                return value = parseObjectTypeMethodish(marker), markerApply(marker, delegate.createObjectTypeProperty(key, value, !1, isStatic));
            }
            function parseObjectTypeCallProperty(marker, isStatic) {
                var valueMarker = markerCreate();
                return markerApply(marker, delegate.createObjectTypeCallProperty(parseObjectTypeMethodish(valueMarker), isStatic));
            }
            function parseObjectType(allowStatic) {
                var marker, propertyKey, propertyTypeAnnotation, token, isStatic, matchStatic, callProperties = [], indexers = [], optional = !1, properties = [];
                for (expect("{"); !match("}"); ) marker = markerCreate(), matchStatic = strict ? matchKeyword("static") : matchContextualKeyword("static"), 
                allowStatic && matchStatic && (token = lex(), isStatic = !0), match("[") ? indexers.push(parseObjectTypeIndexer(marker, isStatic)) : match("(") || match("<") ? callProperties.push(parseObjectTypeCallProperty(marker, allowStatic)) : (isStatic && match(":") ? (propertyKey = markerApply(marker, delegate.createIdentifier(token)), 
                throwErrorTolerant(token, Messages.StrictReservedWord)) : propertyKey = parseObjectPropertyKey(), 
                match("<") || match("(") ? 
                // This is a method property
                properties.push(parseObjectTypeMethod(marker, isStatic, propertyKey)) : (match("?") && (lex(), 
                optional = !0), expect(":"), propertyTypeAnnotation = parseType(), properties.push(markerApply(marker, delegate.createObjectTypeProperty(propertyKey, propertyTypeAnnotation, optional, isStatic))))), 
                match(";") || match(",") ? lex() : match("}") || throwUnexpected(lookahead);
                return expect("}"), delegate.createObjectTypeAnnotation(properties, indexers, callProperties);
            }
            function parseFunctionTypeParam() {
                var name, typeAnnotation, marker = markerCreate(), optional = !1;
                return name = parseVariableIdentifier(), match("?") && (lex(), optional = !0), expect(":"), 
                typeAnnotation = parseType(), markerApply(marker, delegate.createFunctionTypeParam(name, typeAnnotation, optional));
            }
            function parseFunctionTypeParams() {
                for (var ret = {
                    params: [],
                    rest: null
                }; lookahead.type === Token.Identifier; ) ret.params.push(parseFunctionTypeParam()), 
                match(")") || expect(",");
                return match("...") && (lex(), ret.rest = parseFunctionTypeParam()), ret;
            }
            // The parsing of types roughly parallels the parsing of expressions, and
            // primary types are kind of like primary expressions...they're the
            // primitives with which other types are constructed.
                        function parsePrimaryType() {
                var tmp, typeParameters, token, type, params = null, returnType = null, marker = markerCreate(), rest = null, isGroupedType = !1;
                switch (lookahead.type) {
                  case Token.Identifier:
                    switch (lookahead.value) {
                      case "any":
                        return lex(), markerApply(marker, delegate.createAnyTypeAnnotation());

                      case "bool":
 // fallthrough
                                              case "boolean":
                        return lex(), markerApply(marker, delegate.createBooleanTypeAnnotation());

                      case "number":
                        return lex(), markerApply(marker, delegate.createNumberTypeAnnotation());

                      case "string":
                        return lex(), markerApply(marker, delegate.createStringTypeAnnotation());
                    }
                    return markerApply(marker, function parseGenericType() {
                        var typeIdentifier, marker = markerCreate(), typeParameters = null;
                        typeIdentifier = parseVariableIdentifier();
                        for (;match("."); ) expect("."), typeIdentifier = markerApply(marker, delegate.createQualifiedTypeIdentifier(typeIdentifier, parseVariableIdentifier()));
                        match("<") && (typeParameters = parseTypeParameterInstantiation());
                        return markerApply(marker, delegate.createGenericTypeAnnotation(typeIdentifier, typeParameters));
                    }());

                  case Token.Punctuator:
                    switch (lookahead.value) {
                      case "{":
                        return markerApply(marker, parseObjectType());

                      case "[":
                        return function parseTupleType() {
                            var marker = markerCreate(), types = [];
                            expect("[");
                            // We allow trailing commas
                            for (;index < length && !match("]") && (types.push(parseType()), !match("]")); ) expect(",");
                            return expect("]"), markerApply(marker, delegate.createTupleTypeAnnotation(types));
                        }();

                      case "<":
                        return typeParameters = parseTypeParameterDeclaration(), expect("("), tmp = parseFunctionTypeParams(), 
                        params = tmp.params, rest = tmp.rest, expect(")"), expect("=>"), returnType = parseType(), 
                        markerApply(marker, delegate.createFunctionTypeAnnotation(params, returnType, rest, typeParameters));

                      case "(":
                        return lex(), 
                        // Check to see if this is actually a grouped type
                        match(")") || match("...") || (isGroupedType = lookahead.type !== Token.Identifier || "?" !== (token = lookahead2()).value && ":" !== token.value), 
                        isGroupedType ? (type = parseType(), expect(")"), 
                        // If we see a => next then someone was probably confused about
                        // function types, so we can provide a better error message
                        match("=>") && throwError({}, Messages.ConfusedAboutFunctionType), type) : (tmp = parseFunctionTypeParams(), 
                        params = tmp.params, rest = tmp.rest, expect(")"), expect("=>"), returnType = parseType(), 
                        markerApply(marker, delegate.createFunctionTypeAnnotation(params, returnType, rest, null /* typeParameters */)));
                    }
                    break;

                  case Token.Keyword:
                    switch (lookahead.value) {
                      case "void":
                        return markerApply(marker, function parseVoidType() {
                            var marker = markerCreate();
                            return expectKeyword("void"), markerApply(marker, delegate.createVoidTypeAnnotation());
                        }());

                      case "typeof":
                        return markerApply(marker, function parseTypeofType() {
                            var argument, marker = markerCreate();
                            return expectKeyword("typeof"), argument = parsePrimaryType(), markerApply(marker, delegate.createTypeofTypeAnnotation(argument));
                        }());
                    }
                    break;

                  case Token.StringLiteral:
                    return (token = lex()).octal && throwError(token, Messages.StrictOctalLiteral), 
                    markerApply(marker, delegate.createStringLiteralTypeAnnotation(token));
                }
                throwUnexpected(lookahead);
            }
            function parsePrefixType() {
                var marker = markerCreate();
                return match("?") ? (lex(), markerApply(marker, delegate.createNullableTypeAnnotation(parsePrefixType()))) : function parsePostfixType() {
                    var marker = markerCreate(), t = parsePrimaryType();
                    if (match("[")) return expect("["), expect("]"), markerApply(marker, delegate.createArrayTypeAnnotation(t));
                    return t;
                }();
            }
            function parseIntersectionType() {
                var type, types, marker = markerCreate();
                for (type = parsePrefixType(), types = [ type ]; match("&"); ) lex(), types.push(parsePrefixType());
                return 1 === types.length ? type : markerApply(marker, delegate.createIntersectionTypeAnnotation(types));
            }
            function parseType() {
                var type, oldInType = state.inType;
                return state.inType = !0, type = function parseUnionType() {
                    var type, types, marker = markerCreate();
                    type = parseIntersectionType(), types = [ type ];
                    for (;match("|"); ) lex(), types.push(parseIntersectionType());
                    return 1 === types.length ? type : markerApply(marker, delegate.createUnionTypeAnnotation(types));
                }(), state.inType = oldInType, type;
            }
            function parseTypeAnnotation() {
                var type, marker = markerCreate();
                return expect(":"), type = parseType(), markerApply(marker, delegate.createTypeAnnotation(type));
            }
            function parseVariableIdentifier() {
                var marker = markerCreate(), token = lex();
                return token.type !== Token.Identifier && throwUnexpected(token), markerApply(marker, delegate.createIdentifier(token.value));
            }
            function parseTypeAnnotatableIdentifier(requireTypeAnnotation, canBeOptionalParam) {
                var marker = markerCreate(), ident = parseVariableIdentifier(), isOptionalParam = !1;
                return canBeOptionalParam && match("?") && (expect("?"), isOptionalParam = !0), 
                (requireTypeAnnotation || match(":")) && (ident.typeAnnotation = parseTypeAnnotation(), 
                ident = markerApply(marker, ident)), isOptionalParam && (ident.optional = !0, ident = markerApply(marker, ident)), 
                ident;
            }
            function parseVariableDeclaration(kind) {
                var id, marker = markerCreate(), init = null, typeAnnotationMarker = markerCreate();
                return match("{") ? (reinterpretAsAssignmentBindingPattern(id = parseObjectInitialiser()), 
                match(":") && (id.typeAnnotation = parseTypeAnnotation(), markerApply(typeAnnotationMarker, id))) : match("[") ? (reinterpretAsAssignmentBindingPattern(id = parseArrayInitialiser()), 
                match(":") && (id.typeAnnotation = parseTypeAnnotation(), markerApply(typeAnnotationMarker, id))) : (
                /* istanbul ignore next */
                id = state.allowKeyword ? parseNonComputedProperty() : parseTypeAnnotatableIdentifier(), 
                // 12.2.1
                strict && isRestrictedWord(id.name) && throwErrorTolerant({}, Messages.StrictVarName)), 
                "const" === kind ? (match("=") || throwError({}, Messages.NoUninitializedConst), 
                expect("="), init = parseAssignmentExpression()) : match("=") && (lex(), init = parseAssignmentExpression()), 
                markerApply(marker, delegate.createVariableDeclarator(id, init));
            }
            function parseVariableDeclarationList(kind) {
                var list = [];
                do {
                    if (list.push(parseVariableDeclaration(kind)), !match(",")) break;
                    lex();
                } while (index < length);
                return list;
            }
            // people.mozilla.org/~jorendorff/es6-draft.html
            function parseModuleSpecifier() {
                var specifier, marker = markerCreate();
                return lookahead.type !== Token.StringLiteral && throwError({}, Messages.InvalidModuleSpecifier), 
                specifier = delegate.createLiteral(lex()), markerApply(marker, specifier);
            }
            function parseExportSpecifier() {
                var id, name = null, marker = markerCreate();
                return id = matchKeyword("default") ? (lex(), markerApply(marker, delegate.createIdentifier("default"))) : parseVariableIdentifier(), 
                matchContextualKeyword("as") && (lex(), name = parseNonComputedProperty()), markerApply(marker, delegate.createExportSpecifier(id, name));
            }
            function parseExportDeclaration() {
                var sourceElement, isExportFromIdentifier, declaration = null, src = null, specifiers = [], marker = markerCreate();
                if (expectKeyword("export"), matchKeyword("default")) {
                    if (
                    // covers:
                    // export default ...
                    lex(), matchKeyword("function") || matchKeyword("class")) {
                        if (isIdentifierName(lookahead2())) 
                        // covers:
                        // export default function foo () {}
                        // export default class foo {}
                        return sourceElement = parseSourceElement(), markerApply(marker, delegate.createExportDeclaration(!0, sourceElement, [ sourceElement.id ], null));
                        // covers:
                        // export default function () {}
                        // export default class {}
                                                switch (lookahead.value) {
                          case "class":
                            return markerApply(marker, delegate.createExportDeclaration(!0, parseClassExpression(), [], null));

                          case "function":
                            return markerApply(marker, delegate.createExportDeclaration(!0, parseFunctionExpression(), [], null));
                        }
                    }
                    return matchContextualKeyword("from") && throwError({}, Messages.UnexpectedToken, lookahead.value), 
                    // covers:
                    // export default {};
                    // export default [];
                    declaration = match("{") ? parseObjectInitialiser() : match("[") ? parseArrayInitialiser() : parseAssignmentExpression(), 
                    consumeSemicolon(), markerApply(marker, delegate.createExportDeclaration(!0, declaration, [], null));
                }
                // non-default export
                                if (lookahead.type === Token.Keyword || matchContextualKeyword("type")) 
                // covers:
                // export var f = 1;
                switch (lookahead.value) {
                  case "type":
                  case "let":
                  case "const":
                  case "var":
                  case "class":
                  case "function":
                    return markerApply(marker, delegate.createExportDeclaration(!1, parseSourceElement(), specifiers, null));
                }
                if (match("*")) 
                // covers:
                // export * from "foo";
                return specifiers.push(function parseExportBatchSpecifier() {
                    var marker = markerCreate();
                    return expect("*"), markerApply(marker, delegate.createExportBatchSpecifier());
                }()), matchContextualKeyword("from") || throwError({}, lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value), 
                lex(), src = parseModuleSpecifier(), consumeSemicolon(), markerApply(marker, delegate.createExportDeclaration(!1, null, specifiers, src));
                if (expect("{"), !match("}")) for (;isExportFromIdentifier = isExportFromIdentifier || matchKeyword("default"), 
                specifiers.push(parseExportSpecifier()), match(",") && lex(); ) ;
                return expect("}"), matchContextualKeyword("from") ? (
                // covering:
                // export {default} from "foo";
                // export {foo} from "foo";
                lex(), src = parseModuleSpecifier(), consumeSemicolon()) : isExportFromIdentifier ? 
                // covering:
                // export {default}; // missing fromClause
                throwError({}, lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value) : 
                // cover
                // export {foo};
                consumeSemicolon(), markerApply(marker, delegate.createExportDeclaration(!1, declaration, specifiers, src));
            }
            function parseImportSpecifier() {
                // import {<foo as bar>} ...;
                var id, name = null, marker = markerCreate();
                return id = parseNonComputedProperty(), matchContextualKeyword("as") && (lex(), 
                name = parseVariableIdentifier()), markerApply(marker, delegate.createImportSpecifier(id, name));
            }
            function parseImportDeclaration() {
                var specifiers, src, token2, marker = markerCreate(), importKind = "value";
                return expectKeyword("import"), matchContextualKeyword("type") ? ((token2 = lookahead2()).type === Token.Identifier && "from" !== token2.value || token2.type === Token.Punctuator && ("{" === token2.value || "*" === token2.value)) && (importKind = "type", 
                lex()) : matchKeyword("typeof") && (importKind = "typeof", lex()), specifiers = [], 
                // covers:
                // import "foo";
                src = (lookahead.type === Token.StringLiteral || (!matchKeyword("default") && isIdentifierName(lookahead) && (
                // covers:
                // import foo
                // import foo, ...
                specifiers.push(function parseImportDefaultSpecifier() {
                    // import <foo> ...;
                    var id, marker = markerCreate();
                    return id = parseNonComputedProperty(), markerApply(marker, delegate.createImportDefaultSpecifier(id));
                }()), match(",") && lex()), match("*") ? 
                // covers:
                // import foo, * as foo
                // import * as foo
                specifiers.push(function parseImportNamespaceSpecifier() {
                    // import <* as foo> ...;
                    var id, marker = markerCreate();
                    expect("*"), matchContextualKeyword("as") || throwError({}, Messages.NoAsAfterImportNamespace);
                    return lex(), id = parseNonComputedProperty(), markerApply(marker, delegate.createImportNamespaceSpecifier(id));
                }()) : match("{") && (
                // covers:
                // import foo, {bar}
                // import {bar}
                specifiers = specifiers.concat(function parseNamedImports() {
                    var specifiers = [];
                    // {foo, bar as bas}
                                        if (expect("{"), !match("}")) for (;specifiers.push(parseImportSpecifier()), 
                    match(",") && lex(); ) ;
                    return expect("}"), specifiers;
                }())), matchContextualKeyword("from") || throwError({}, lookahead.value ? Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value), 
                lex()), parseModuleSpecifier()), consumeSemicolon(), markerApply(marker, delegate.createImportDeclaration(specifiers, src, importKind));
            }
            // 12.3 Empty Statement
                        function parseForStatement(opts) {
                var init, test, update, left, right, body, operator, oldInIteration, marker = markerCreate();
                return init = test = update = null, expectKeyword("for"), 
                // http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators&s=each
                matchContextualKeyword("each") && throwError({}, Messages.EachNotAllowed), expect("("), 
                match(";") ? lex() : (matchKeyword("var") || matchKeyword("let") || matchKeyword("const") ? (state.allowIn = !1, 
                init = function parseForVariableDeclaration() {
                    var marker = markerCreate(), token = lex(), declarations = parseVariableDeclarationList();
                    return markerApply(marker, delegate.createVariableDeclaration(declarations, token.value));
                }(), state.allowIn = !0, 1 === init.declarations.length && (matchKeyword("in") || matchContextualKeyword("of")) && ("in" !== (operator = lookahead).value && "var" === init.kind || !init.declarations[0].init) && (lex(), 
                left = init, right = parseExpression(), init = null)) : (state.allowIn = !1, init = parseExpression(), 
                state.allowIn = !0, matchContextualKeyword("of") ? (operator = lex(), left = init, 
                right = parseExpression(), init = null) : matchKeyword("in") && (
                // LeftHandSideExpression
                function isAssignableLeftHandSide(expr) {
                    return isLeftHandSide(expr) || expr.type === Syntax.ObjectPattern || expr.type === Syntax.ArrayPattern;
                }(init) || throwError({}, Messages.InvalidLHSInForIn), operator = lex(), left = init, 
                right = parseExpression(), init = null)), void 0 === left && expect(";")), void 0 === left && (match(";") || (test = parseExpression()), 
                expect(";"), match(")") || (update = parseExpression())), expect(")"), oldInIteration = state.inIteration, 
                state.inIteration = !0, opts !== undefined && opts.ignoreBody || (body = parseStatement()), 
                state.inIteration = oldInIteration, void 0 === left ? markerApply(marker, delegate.createForStatement(init, test, update, body)) : "in" === operator.value ? markerApply(marker, delegate.createForInStatement(left, right, body)) : markerApply(marker, delegate.createForOfStatement(left, right, body));
            }
            // 12.7 The continue statement
                        // 12.10 The swith statement
            function parseSwitchCase() {
                var test, sourceElement, consequent = [], marker = markerCreate();
                for (test = matchKeyword("default") ? (lex(), null) : (expectKeyword("case"), parseExpression()), 
                expect(":"); index < length && !(match("}") || matchKeyword("default") || matchKeyword("case")) && void 0 !== (sourceElement = parseSourceElement()); ) consequent.push(sourceElement);
                return markerApply(marker, delegate.createSwitchCase(test, consequent));
            }
            function parseTryStatement() {
                var block, handlers = [], finalizer = null, marker = markerCreate();
                return expectKeyword("try"), block = parseBlock(), matchKeyword("catch") && handlers.push(
                // 12.14 The try statement
                function parseCatchClause() {
                    var param, body, marker = markerCreate();
                    expectKeyword("catch"), expect("("), match(")") && throwUnexpected(lookahead);
                    // 12.14.1
                    param = parseExpression(), strict && param.type === Syntax.Identifier && isRestrictedWord(param.name) && throwErrorTolerant({}, Messages.StrictCatchVariable);
                    return expect(")"), body = parseBlock(), markerApply(marker, delegate.createCatchClause(param, body));
                }()), matchKeyword("finally") && (lex(), finalizer = parseBlock()), 0 !== handlers.length || finalizer || throwError({}, Messages.NoCatchOrFinally), 
                markerApply(marker, delegate.createTryStatement(block, [], handlers, finalizer));
            }
            // 12.15 The debugger statement
                        // 12 Statements
            function parseStatement() {
                var marker, expr, labeledBody, type = lookahead.type;
                if (type === Token.EOF && throwUnexpected(lookahead), type === Token.Punctuator) switch (lookahead.value) {
                  case ";":
                    return function parseEmptyStatement() {
                        var marker = markerCreate();
                        return expect(";"), markerApply(marker, delegate.createEmptyStatement());
                    }
                    // 12.4 Expression Statement
                    ();

                  case "{":
                    return parseBlock();

                  case "(":
                    return function parseExpressionStatement() {
                        var marker = markerCreate(), expr = parseExpression();
                        return consumeSemicolon(), markerApply(marker, delegate.createExpressionStatement(expr));
                    }
                    // 12.5 If statement
                    ();
                }
                if (type === Token.Keyword) switch (lookahead.value) {
                  case "break":
                    // 12.8 The break statement
                    return function parseBreakStatement() {
                        var label = null, marker = markerCreate();
                        // Catch the very common case first: immediately a semicolon (char #59).
                        if (expectKeyword("break"), 59 === source.charCodeAt(index)) return lex(), state.inIteration || state.inSwitch || throwError({}, Messages.IllegalBreak), 
                        markerApply(marker, delegate.createBreakStatement(null));
                        if (peekLineTerminator()) return state.inIteration || state.inSwitch || throwError({}, Messages.IllegalBreak), 
                        markerApply(marker, delegate.createBreakStatement(null));
                        lookahead.type === Token.Identifier && (label = parseVariableIdentifier(), state.labelSet.has(label.name) || throwError({}, Messages.UnknownLabel, label.name));
                        consumeSemicolon(), null !== label || state.inIteration || state.inSwitch || throwError({}, Messages.IllegalBreak);
                        return markerApply(marker, delegate.createBreakStatement(label));
                    }
                    // 12.9 The return statement
                    ();

                  case "continue":
                    return function parseContinueStatement() {
                        var label = null, marker = markerCreate();
                        // Optimize the most common form: 'continue;'.
                        if (expectKeyword("continue"), 59 === source.charCodeAt(index)) return lex(), state.inIteration || throwError({}, Messages.IllegalContinue), 
                        markerApply(marker, delegate.createContinueStatement(null));
                        if (peekLineTerminator()) return state.inIteration || throwError({}, Messages.IllegalContinue), 
                        markerApply(marker, delegate.createContinueStatement(null));
                        lookahead.type === Token.Identifier && (label = parseVariableIdentifier(), state.labelSet.has(label.name) || throwError({}, Messages.UnknownLabel, label.name));
                        consumeSemicolon(), null !== label || state.inIteration || throwError({}, Messages.IllegalContinue);
                        return markerApply(marker, delegate.createContinueStatement(label));
                    }();

                  case "debugger":
                    return function parseDebuggerStatement() {
                        var marker = markerCreate();
                        return expectKeyword("debugger"), consumeSemicolon(), markerApply(marker, delegate.createDebuggerStatement());
                    }();

                  case "do":
                    // 12.6 Iteration Statements
                    return function parseDoWhileStatement() {
                        var body, test, oldInIteration, marker = markerCreate();
                        expectKeyword("do"), oldInIteration = state.inIteration, state.inIteration = !0, 
                        body = parseStatement(), state.inIteration = oldInIteration, expectKeyword("while"), 
                        expect("("), test = parseExpression(), expect(")"), match(";") && lex();
                        return markerApply(marker, delegate.createDoWhileStatement(body, test));
                    }();

                  case "for":
                    return parseForStatement();

                  case "function":
                    return parseFunctionDeclaration();

                  case "class":
                    return function parseClassDeclaration() {
                        var id, implemented, previousYieldAllowed, superTypeParameters, typeParameters, superClass = null, marker = markerCreate();
                        expectKeyword("class"), id = parseVariableIdentifier(), match("<") && (typeParameters = parseTypeParameterDeclaration());
                        matchKeyword("extends") && (expectKeyword("extends"), previousYieldAllowed = state.yieldAllowed, 
                        state.yieldAllowed = !1, superClass = parseLeftHandSideExpressionAllowCall(), match("<") && (superTypeParameters = parseTypeParameterInstantiation()), 
                        state.yieldAllowed = previousYieldAllowed);
                        (strict ? matchKeyword("implements") : matchContextualKeyword("implements")) && (implemented = parseClassImplements());
                        return markerApply(marker, delegate.createClassDeclaration(id, superClass, parseClassBody(), typeParameters, superTypeParameters, implemented));
                    }
                    // 15 Program
                    ();

                  case "if":
                    return function parseIfStatement() {
                        var test, consequent, alternate, marker = markerCreate();
                        expectKeyword("if"), expect("("), test = parseExpression(), expect(")"), consequent = parseStatement(), 
                        alternate = matchKeyword("else") ? (lex(), parseStatement()) : null;
                        return markerApply(marker, delegate.createIfStatement(test, consequent, alternate));
                    }();

                  case "return":
                    return function parseReturnStatement() {
                        var argument = null, marker = markerCreate();
                        expectKeyword("return"), state.inFunctionBody || throwErrorTolerant({}, Messages.IllegalReturn);
                        // 'return' followed by a space and an identifier is very common.
                                                if (32 === source.charCodeAt(index) && isIdentifierStart(source.charCodeAt(index + 1))) return argument = parseExpression(), 
                        consumeSemicolon(), markerApply(marker, delegate.createReturnStatement(argument));
                        if (peekLineTerminator()) return markerApply(marker, delegate.createReturnStatement(null));
                        match(";") || match("}") || lookahead.type === Token.EOF || (argument = parseExpression());
                        return consumeSemicolon(), markerApply(marker, delegate.createReturnStatement(argument));
                    }
                    // 12.10 The with statement
                    ();

                  case "switch":
                    return function parseSwitchStatement() {
                        var discriminant, cases, clause, oldInSwitch, defaultFound, marker = markerCreate();
                        if (expectKeyword("switch"), expect("("), discriminant = parseExpression(), expect(")"), 
                        expect("{"), cases = [], match("}")) return lex(), markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
                        oldInSwitch = state.inSwitch, state.inSwitch = !0, defaultFound = !1;
                        for (;index < length && !match("}"); ) null === (clause = parseSwitchCase()).test && (defaultFound && throwError({}, Messages.MultipleDefaultsInSwitch), 
                        defaultFound = !0), cases.push(clause);
                        return state.inSwitch = oldInSwitch, expect("}"), markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
                    }
                    // 12.13 The throw statement
                    ();

                  case "throw":
                    return function parseThrowStatement() {
                        var argument, marker = markerCreate();
                        expectKeyword("throw"), peekLineTerminator() && throwError({}, Messages.NewlineAfterThrow);
                        return argument = parseExpression(), consumeSemicolon(), markerApply(marker, delegate.createThrowStatement(argument));
                    }();

                  case "try":
                    return parseTryStatement();

                  case "var":
                    return function parseVariableStatement() {
                        var declarations, marker = markerCreate();
                        return expectKeyword("var"), declarations = parseVariableDeclarationList(), consumeSemicolon(), 
                        markerApply(marker, delegate.createVariableDeclaration(declarations, "var"));
                    }
                    // kind may be `const` or `let`
                    // Both are experimental and not in the specification yet.
                    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
                    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
                    ();

                  case "while":
                    return function parseWhileStatement() {
                        var test, body, oldInIteration, marker = markerCreate();
                        return expectKeyword("while"), expect("("), test = parseExpression(), expect(")"), 
                        oldInIteration = state.inIteration, state.inIteration = !0, body = parseStatement(), 
                        state.inIteration = oldInIteration, markerApply(marker, delegate.createWhileStatement(test, body));
                    }();

                  case "with":
                    return function parseWithStatement() {
                        var object, body, marker = markerCreate();
                        strict && throwErrorTolerant({}, Messages.StrictModeWith);
                        return expectKeyword("with"), expect("("), object = parseExpression(), expect(")"), 
                        body = parseStatement(), markerApply(marker, delegate.createWithStatement(object, body));
                    }();
                }
                return matchAsyncFuncExprOrDecl() ? parseFunctionDeclaration() : (
                // 12.12 Labelled Statements
                marker = markerCreate(), (expr = parseExpression()).type === Syntax.Identifier && match(":") ? (lex(), 
                state.labelSet.has(expr.name) && throwError({}, Messages.Redeclaration, "Label", expr.name), 
                state.labelSet.set(expr.name, !0), labeledBody = parseStatement(), state.labelSet["delete"](expr.name), 
                markerApply(marker, delegate.createLabeledStatement(expr, labeledBody))) : (consumeSemicolon(), 
                markerApply(marker, delegate.createExpressionStatement(expr))));
            }
            // 13 Function Definition
                        function parseConciseBody() {
                return match("{") ? parseFunctionSourceElements() : parseAssignmentExpression();
            }
            function parseFunctionSourceElements() {
                var sourceElement, token, firstRestricted, oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesizedCount, sourceElements = [], marker = markerCreate();
                for (expect("{"); index < length && lookahead.type === Token.StringLiteral && (token = lookahead, 
                sourceElement = parseSourceElement(), sourceElements.push(sourceElement), sourceElement.expression.type === Syntax.Literal); ) "use strict" === source.slice(token.range[0] + 1, token.range[1] - 1) ? (strict = !0, 
                firstRestricted && throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral)) : !firstRestricted && token.octal && (firstRestricted = token);
                for (oldLabelSet = state.labelSet, oldInIteration = state.inIteration, oldInSwitch = state.inSwitch, 
                oldInFunctionBody = state.inFunctionBody, oldParenthesizedCount = state.parenthesizedCount, 
                state.labelSet = new StringMap(), state.inIteration = !1, state.inSwitch = !1, state.inFunctionBody = !0, 
                state.parenthesizedCount = 0; index < length && !match("}") && void 0 !== (sourceElement = parseSourceElement()); ) sourceElements.push(sourceElement);
                return expect("}"), state.labelSet = oldLabelSet, state.inIteration = oldInIteration, 
                state.inSwitch = oldInSwitch, state.inFunctionBody = oldInFunctionBody, state.parenthesizedCount = oldParenthesizedCount, 
                markerApply(marker, delegate.createBlockStatement(sourceElements));
            }
            function validateParam(options, param, name) {
                strict ? (isRestrictedWord(name) && (options.stricted = param, options.message = Messages.StrictParamName), 
                options.paramSet.has(name) && (options.stricted = param, options.message = Messages.StrictParamDupe)) : options.firstRestricted || (isRestrictedWord(name) ? (options.firstRestricted = param, 
                options.message = Messages.StrictParamName) : isStrictModeReservedWord(name) ? (options.firstRestricted = param, 
                options.message = Messages.StrictReservedWord) : options.paramSet.has(name) && (options.firstRestricted = param, 
                options.message = Messages.StrictParamDupe)), options.paramSet.set(name, !0);
            }
            function parseParam(options) {
                var marker, token, rest, param, def;
                return "..." === (token = lookahead).value && (token = lex(), rest = !0), match("[") ? (marker = markerCreate(), 
                param = parseArrayInitialiser(), reinterpretAsDestructuredParameter(options, param), 
                match(":") && (param.typeAnnotation = parseTypeAnnotation(), markerApply(marker, param))) : match("{") ? (marker = markerCreate(), 
                rest && throwError({}, Messages.ObjectPatternAsRestParameter), param = parseObjectInitialiser(), 
                reinterpretAsDestructuredParameter(options, param), match(":") && (param.typeAnnotation = parseTypeAnnotation(), 
                markerApply(marker, param))) : (param = parseTypeAnnotatableIdentifier(!1, !rest), 
                validateParam(options, token, token.value)), match("=") && (rest && throwErrorTolerant(lookahead, Messages.DefaultRestParameter), 
                lex(), def = parseAssignmentExpression(), ++options.defaultCount), rest ? (match(")") || throwError({}, Messages.ParameterAfterRestParameter), 
                options.rest = param, !1) : (options.params.push(param), options.defaults.push(def), 
                !match(")"));
            }
            function parseParams(firstRestricted) {
                var options, marker = markerCreate();
                if (options = {
                    params: [],
                    defaultCount: 0,
                    defaults: [],
                    rest: null,
                    firstRestricted: firstRestricted
                }, expect("("), !match(")")) for (options.paramSet = new StringMap(); index < length && parseParam(options) && (expect(","), 
                options.rest || !match(")")); ) ;
                return expect(")"), 0 === options.defaultCount && (options.defaults = []), match(":") && (options.returnType = parseTypeAnnotation()), 
                markerApply(marker, options);
            }
            function parseFunctionDeclaration() {
                var id, body, token, tmp, firstRestricted, message, generator, isAsync, previousStrict, previousYieldAllowed, previousAwaitAllowed, typeParameters, marker = markerCreate();
                return isAsync = !1, matchAsync() && (lex(), isAsync = !0), expectKeyword("function"), 
                generator = !1, match("*") && (lex(), generator = !0), token = lookahead, id = parseVariableIdentifier(), 
                match("<") && (typeParameters = parseTypeParameterDeclaration()), strict ? isRestrictedWord(token.value) && throwErrorTolerant(token, Messages.StrictFunctionName) : isRestrictedWord(token.value) ? (firstRestricted = token, 
                message = Messages.StrictFunctionName) : isStrictModeReservedWord(token.value) && (firstRestricted = token, 
                message = Messages.StrictReservedWord), tmp = parseParams(firstRestricted), firstRestricted = tmp.firstRestricted, 
                tmp.message && (message = tmp.message), previousStrict = strict, previousYieldAllowed = state.yieldAllowed, 
                state.yieldAllowed = generator, previousAwaitAllowed = state.awaitAllowed, state.awaitAllowed = isAsync, 
                body = parseFunctionSourceElements(), strict && firstRestricted && throwError(firstRestricted, message), 
                strict && tmp.stricted && throwErrorTolerant(tmp.stricted, message), strict = previousStrict, 
                state.yieldAllowed = previousYieldAllowed, state.awaitAllowed = previousAwaitAllowed, 
                markerApply(marker, delegate.createFunctionDeclaration(id, tmp.params, tmp.defaults, body, tmp.rest, generator, !1, isAsync, tmp.returnType, typeParameters));
            }
            function parseFunctionExpression() {
                var token, firstRestricted, message, tmp, body, generator, isAsync, previousStrict, previousYieldAllowed, previousAwaitAllowed, typeParameters, id = null, marker = markerCreate();
                return isAsync = !1, matchAsync() && (lex(), isAsync = !0), expectKeyword("function"), 
                generator = !1, match("*") && (lex(), generator = !0), match("(") || (match("<") || (token = lookahead, 
                id = parseVariableIdentifier(), strict ? isRestrictedWord(token.value) && throwErrorTolerant(token, Messages.StrictFunctionName) : isRestrictedWord(token.value) ? (firstRestricted = token, 
                message = Messages.StrictFunctionName) : isStrictModeReservedWord(token.value) && (firstRestricted = token, 
                message = Messages.StrictReservedWord)), match("<") && (typeParameters = parseTypeParameterDeclaration())), 
                tmp = parseParams(firstRestricted), firstRestricted = tmp.firstRestricted, tmp.message && (message = tmp.message), 
                previousStrict = strict, previousYieldAllowed = state.yieldAllowed, state.yieldAllowed = generator, 
                previousAwaitAllowed = state.awaitAllowed, state.awaitAllowed = isAsync, body = parseFunctionSourceElements(), 
                strict && firstRestricted && throwError(firstRestricted, message), strict && tmp.stricted && throwErrorTolerant(tmp.stricted, message), 
                strict = previousStrict, state.yieldAllowed = previousYieldAllowed, state.awaitAllowed = previousAwaitAllowed, 
                markerApply(marker, delegate.createFunctionExpression(id, tmp.params, tmp.defaults, body, tmp.rest, generator, !1, isAsync, tmp.returnType, typeParameters));
            }
            function parseClassElement() {
                var key, possiblyOpenBracketToken, computed = !1, generator = !1, marker = markerCreate(), isStatic = !1;
                return match(";") ? (lex(), undefined) : ("static" === lookahead.value && (lex(), 
                isStatic = !0), match("*") && (lex(), generator = !0), possiblyOpenBracketToken = lookahead, 
                (matchContextualKeyword("get") || matchContextualKeyword("set")) && (possiblyOpenBracketToken = lookahead2()), 
                possiblyOpenBracketToken.type === Token.Punctuator && "[" === possiblyOpenBracketToken.value && (computed = !0), 
                key = parseObjectPropertyKey(), generator || ":" !== lookahead.value ? markerApply(marker, function parseMethodDefinition(key, isStatic, generator, computed) {
                    var token, param, propType, isAsync, typeParameters, tokenValue, returnType;
                    if (propType = isStatic ? ClassPropertyType["static"] : ClassPropertyType.prototype, 
                    generator) return delegate.createMethodDefinition(propType, "", key, parsePropertyMethodFunction({
                        generator: !0
                    }), computed);
                    if ("get" === (tokenValue = "Identifier" === key.type && key.name) && !match("(")) return key = parseObjectPropertyKey(), 
                    expect("("), expect(")"), match(":") && (returnType = parseTypeAnnotation()), delegate.createMethodDefinition(propType, "get", key, parsePropertyFunction({
                        generator: !1,
                        returnType: returnType
                    }), computed);
                    if ("set" === tokenValue && !match("(")) return key = parseObjectPropertyKey(), 
                    expect("("), token = lookahead, param = [ parseTypeAnnotatableIdentifier() ], expect(")"), 
                    match(":") && (returnType = parseTypeAnnotation()), delegate.createMethodDefinition(propType, "set", key, parsePropertyFunction({
                        params: param,
                        generator: !1,
                        name: token,
                        returnType: returnType
                    }), computed);
                    match("<") && (typeParameters = parseTypeParameterDeclaration());
                    (isAsync = "async" === tokenValue && !match("(")) && (key = parseObjectPropertyKey());
                    return delegate.createMethodDefinition(propType, "", key, parsePropertyMethodFunction({
                        generator: !1,
                        async: isAsync,
                        typeParameters: typeParameters
                    }), computed);
                }(key, isStatic, generator, computed)) : markerApply(marker, function parseClassProperty(key, computed, isStatic) {
                    var typeAnnotation;
                    return typeAnnotation = parseTypeAnnotation(), expect(";"), delegate.createClassProperty(key, typeAnnotation, computed, isStatic);
                }(key, computed, isStatic)));
            }
            function parseClassBody() {
                var classElement, propName, propType, methodDefinition, classElements = [], existingProps = {}, marker = markerCreate();
                for (existingProps[ClassPropertyType["static"]] = new StringMap(), existingProps[ClassPropertyType.prototype] = new StringMap(), 
                expect("{"); index < length && !match("}"); ) void 0 !== (classElement = parseClassElement()) && (classElements.push(classElement), 
                !1 !== (propName = !classElement.computed && getFieldName(classElement.key)) && (propType = classElement["static"] ? ClassPropertyType["static"] : ClassPropertyType.prototype, 
                classElement.type === Syntax.MethodDefinition && ("constructor" !== propName || classElement["static"] || (("get" === (methodDefinition = classElement).kind || "set" === methodDefinition.kind || methodDefinition.value.generator) && throwError(classElement, Messages.IllegalClassConstructorProperty), 
                existingProps[ClassPropertyType.prototype].has("constructor") && throwError(classElement.key, Messages.IllegalDuplicateClassProperty)), 
                existingProps[propType].set(propName, !0))));
                return expect("}"), markerApply(marker, delegate.createClassBody(classElements));
            }
            function parseClassImplements() {
                var id, marker, typeParameters, implemented = [];
                for (strict ? expectKeyword("implements") : expectContextualKeyword("implements"); index < length && (marker = markerCreate(), 
                id = parseVariableIdentifier(), typeParameters = match("<") ? parseTypeParameterInstantiation() : null, 
                implemented.push(markerApply(marker, delegate.createClassImplements(id, typeParameters))), 
                match(",")); ) expect(",");
                return implemented;
            }
            function parseClassExpression() {
                var id, implemented, previousYieldAllowed, superTypeParameters, typeParameters, matchImplements, superClass = null, marker = markerCreate();
                return expectKeyword("class"), matchImplements = strict ? matchKeyword("implements") : matchContextualKeyword("implements"), 
                matchKeyword("extends") || matchImplements || match("{") || (id = parseVariableIdentifier()), 
                match("<") && (typeParameters = parseTypeParameterDeclaration()), matchKeyword("extends") && (expectKeyword("extends"), 
                previousYieldAllowed = state.yieldAllowed, state.yieldAllowed = !1, superClass = parseLeftHandSideExpressionAllowCall(), 
                match("<") && (superTypeParameters = parseTypeParameterInstantiation()), state.yieldAllowed = previousYieldAllowed), 
                (strict ? matchKeyword("implements") : matchContextualKeyword("implements")) && (implemented = parseClassImplements()), 
                markerApply(marker, delegate.createClassExpression(id, superClass, parseClassBody(), typeParameters, superTypeParameters, implemented));
            }
            function parseSourceElement() {
                var token;
                if (lookahead.type === Token.Keyword) switch (lookahead.value) {
                  case "const":
                  case "let":
                    return function parseConstLetDeclaration(kind) {
                        var declarations, marker = markerCreate();
                        return expectKeyword(kind), declarations = parseVariableDeclarationList(kind), consumeSemicolon(), 
                        markerApply(marker, delegate.createVariableDeclaration(declarations, kind));
                    }(lookahead.value);

                  case "function":
                    return parseFunctionDeclaration();

                  case "export":
                    return throwErrorTolerant({}, Messages.IllegalExportDeclaration), parseExportDeclaration();

                  case "import":
                    return throwErrorTolerant({}, Messages.IllegalImportDeclaration), parseImportDeclaration();

                  case "interface":
                    return lookahead2().type === Token.Identifier ? parseInterface() : parseStatement();

                  default:
                    return parseStatement();
                }
                if (matchContextualKeyword("type") && lookahead2().type === Token.Identifier) return function parseTypeAlias() {
                    var id, right, marker = markerCreate(), typeParameters = null;
                    expectContextualKeyword("type"), id = parseVariableIdentifier(), match("<") && (typeParameters = parseTypeParameterDeclaration());
                    return expect("="), right = parseType(), consumeSemicolon(), markerApply(marker, delegate.createTypeAlias(id, typeParameters, right));
                }();
                if (matchContextualKeyword("interface") && lookahead2().type === Token.Identifier) return parseInterface();
                if (matchContextualKeyword("declare")) if ((token = lookahead2()).type === Token.Keyword) switch (token.value) {
                  case "class":
                    return parseDeclareClass();

                  case "function":
                    return parseDeclareFunction();

                  case "var":
                    return parseDeclareVariable();
                } else if (token.type === Token.Identifier && "module" === token.value) return function parseDeclareModule() {
                    var bodyMarker, id, idMarker, body = [], marker = markerCreate();
                    expectContextualKeyword("declare"), expectContextualKeyword("module"), id = lookahead.type === Token.StringLiteral ? (strict && lookahead.octal && throwErrorTolerant(lookahead, Messages.StrictOctalLiteral), 
                    idMarker = markerCreate(), markerApply(idMarker, delegate.createLiteral(lex()))) : parseVariableIdentifier();
                    bodyMarker = markerCreate(), expect("{");
                    for (;index < length && !match("}"); ) switch (lookahead2().value) {
                      case "class":
                        body.push(parseDeclareClass());
                        break;

                      case "function":
                        body.push(parseDeclareFunction());
                        break;

                      case "var":
                        body.push(parseDeclareVariable());
                        break;

                      default:
                        throwUnexpected(lookahead);
                    }
                    return expect("}"), markerApply(marker, delegate.createDeclareModule(id, markerApply(bodyMarker, delegate.createBlockStatement(body))));
                }();
                return lookahead.type !== Token.EOF ? parseStatement() : void 0;
            }
            function parseProgramElement() {
                var isModule = "module" === extra.sourceType || "nonStrictModule" === extra.sourceType;
                if (isModule && lookahead.type === Token.Keyword) switch (lookahead.value) {
                  case "export":
                    return parseExportDeclaration();

                  case "import":
                    return parseImportDeclaration();
                }
                return parseSourceElement();
            }
            function parseProgram() {
                var body, marker = markerCreate();
                return strict = "module" === extra.sourceType, peek(), body = function parseProgramElements() {
                    var sourceElement, token, firstRestricted, sourceElements = [];
                    for (;index < length && (token = lookahead).type === Token.StringLiteral && (sourceElement = parseProgramElement(), 
                    sourceElements.push(sourceElement), sourceElement.expression.type === Syntax.Literal); ) "use strict" === source.slice(token.range[0] + 1, token.range[1] - 1) ? (strict = !0, 
                    firstRestricted && throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral)) : !firstRestricted && token.octal && (firstRestricted = token);
                    for (;index < length && void 0 !== (sourceElement = parseProgramElement()); ) sourceElements.push(sourceElement);
                    return sourceElements;
                }(), markerApply(marker, delegate.createProgram(body));
            }
            // 16 JSX
                        function getQualifiedJSXName(object) {
                return object.type === Syntax.JSXIdentifier ? object.name : object.type === Syntax.JSXNamespacedName ? object.namespace.name + ":" + object.name.name : 
                /* istanbul ignore else */
                object.type === Syntax.JSXMemberExpression ? getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property) : 
                /* istanbul ignore next */
                void throwUnexpected(object);
            }
            function isJSXIdentifierPart(ch) {
                // exclude backslash (\) and add hyphen (-)
                return 92 !== ch && (45 === ch || isIdentifierPart(ch));
            }
            function scanJSXEntity() {
                var ch, code, str = "", start = index, count = 0;
                for (assert("&" === (ch = source[index]), "Entity must start with an ampersand"), 
                index++; index < length && count++ < 10 && ";" !== (ch = source[index++]); ) str += ch;
                // Well-formed entity (ending was found).
                                if (";" === ch) 
                // Numeric entity.
                if ("#" === str[0]) {
                    if (code = "x" === str[1] ? +("0" + str.substr(1)) : +str.substr(1).replace(Regex.LeadingZeros, ""), 
                    !isNaN(code)) return String.fromCharCode(code);
                    /* istanbul ignore else */                } else if (XHTMLEntities[str]) return XHTMLEntities[str];
                // Treat non-entity sequences as regular text.
                                return index = start + 1, "&";
            }
            function scanJSXText(stopChars) {
                var ch, start, str = "";
                for (start = index; index < length && (ch = source[index], -1 === stopChars.indexOf(ch)); ) "&" === ch ? str += scanJSXEntity() : (index++, 
                "\r" === ch && "\n" === source[index] && (str += ch, ch = source[index], index++), 
                isLineTerminator(ch.charCodeAt(0)) && (++lineNumber, lineStart = index), str += ch);
                return {
                    type: Token.JSXText,
                    value: str,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [ start, index ]
                };
            }
            function parseJSXIdentifier() {
                var token, marker = markerCreate();
                return lookahead.type !== Token.JSXIdentifier && throwUnexpected(lookahead), token = lex(), 
                markerApply(marker, delegate.createJSXIdentifier(token.value));
            }
            function parseJSXNamespacedName() {
                var namespace, name, marker = markerCreate();
                return namespace = parseJSXIdentifier(), expect(":"), name = parseJSXIdentifier(), 
                markerApply(marker, delegate.createJSXNamespacedName(namespace, name));
            }
            function parseJSXElementName() {
                return ":" === lookahead2().value ? parseJSXNamespacedName() : "." === lookahead2().value ? function parseJSXMemberExpression() {
                    var marker = markerCreate(), expr = parseJSXIdentifier();
                    for (;match("."); ) lex(), expr = markerApply(marker, delegate.createJSXMemberExpression(expr, parseJSXIdentifier()));
                    return expr;
                }() : parseJSXIdentifier();
            }
            function parseJSXExpressionContainer() {
                var expression, origInJSXChild, origInJSXTag, marker = markerCreate();
                return origInJSXChild = state.inJSXChild, origInJSXTag = state.inJSXTag, state.inJSXChild = !1, 
                state.inJSXTag = !1, expect("{"), expression = match("}") ? function parseJSXEmptyExpression() {
                    var ch, marker = markerCreatePreserveWhitespace();
                    for (;index < length && 125 !== (ch = source.charCodeAt(index)); ) isLineTerminator(ch) && (13 === ch && 10 === source.charCodeAt(index + 1) && ++index, 
                    ++lineNumber, lineStart = index), ++index;
                    return markerApply(marker, delegate.createJSXEmptyExpression());
                }() : parseExpression(), state.inJSXChild = origInJSXChild, state.inJSXTag = origInJSXTag, 
                expect("}"), markerApply(marker, delegate.createJSXExpressionContainer(expression));
            }
            function parseJSXAttribute() {
                var name, marker;
                return match("{") ? function parseJSXSpreadAttribute() {
                    var expression, origInJSXChild, origInJSXTag, marker = markerCreate();
                    return origInJSXChild = state.inJSXChild, origInJSXTag = state.inJSXTag, state.inJSXChild = !1, 
                    state.inJSXTag = !1, expect("{"), expect("..."), expression = parseAssignmentExpression(), 
                    state.inJSXChild = origInJSXChild, state.inJSXTag = origInJSXTag, expect("}"), markerApply(marker, delegate.createJSXSpreadAttribute(expression));
                }() : (marker = markerCreate(), name = function parseJSXAttributeName() {
                    return ":" !== lookahead2().value ? parseJSXIdentifier() : parseJSXNamespacedName();
                }(), 
                // HTML empty attribute
                match("=") ? (lex(), markerApply(marker, delegate.createJSXAttribute(name, function parseJSXAttributeValue() {
                    var value, marker;
                    match("{") ? (value = parseJSXExpressionContainer()).expression.type === Syntax.JSXEmptyExpression && throwError(value, "JSX attributes must only be assigned a non-empty expression") : match("<") ? value = parseJSXElement() : lookahead.type === Token.JSXText ? (marker = markerCreate(), 
                    value = markerApply(marker, delegate.createLiteral(lex()))) : throwError({}, Messages.InvalidJSXAttributeValue);
                    return value;
                }()))) : markerApply(marker, delegate.createJSXAttribute(name)));
            }
            function parseJSXChild() {
                var token, marker;
                return match("{") ? token = parseJSXExpressionContainer() : lookahead.type === Token.JSXText ? (marker = markerCreatePreserveWhitespace(), 
                token = markerApply(marker, delegate.createLiteral(lex()))) : match("<") ? token = parseJSXElement() : throwUnexpected(lookahead), 
                token;
            }
            function parseJSXElement() {
                var openingElement, origInJSXChild, origInJSXTag, closingElement = null, children = [], marker = markerCreate();
                if (origInJSXChild = state.inJSXChild, origInJSXTag = state.inJSXTag, !(openingElement = function parseJSXOpeningElement() {
                    var name, origInJSXChild, origInJSXTag, attributes = [], selfClosing = !1, marker = markerCreate();
                    origInJSXChild = state.inJSXChild, origInJSXTag = state.inJSXTag, state.inJSXChild = !1, 
                    state.inJSXTag = !0, expect("<"), name = parseJSXElementName();
                    for (;index < length && "/" !== lookahead.value && ">" !== lookahead.value; ) attributes.push(parseJSXAttribute());
                    state.inJSXTag = origInJSXTag, "/" === lookahead.value ? (expect("/"), 
                    // Because advance() (called by lex() called by expect()) expects
                    // there to be a valid token after >, it needs to know whether to
                    // look for a standard JS token or an JSX text node
                    state.inJSXChild = origInJSXChild, expect(">"), selfClosing = !0) : (state.inJSXChild = !0, 
                    expect(">"));
                    return markerApply(marker, delegate.createJSXOpeningElement(name, attributes, selfClosing));
                }()).selfClosing) {
                    for (;index < length && (state.inJSXChild = !1, "<" !== lookahead.value || "/" !== lookahead2().value); ) state.inJSXChild = !0, 
                    children.push(parseJSXChild());
                    state.inJSXChild = origInJSXChild, state.inJSXTag = origInJSXTag, getQualifiedJSXName((closingElement = function parseJSXClosingElement() {
                        var name, origInJSXChild, origInJSXTag, marker = markerCreate();
                        return origInJSXChild = state.inJSXChild, origInJSXTag = state.inJSXTag, state.inJSXChild = !1, 
                        state.inJSXTag = !0, expect("<"), expect("/"), name = parseJSXElementName(), 
                        // Because advance() (called by lex() called by expect()) expects there
                        // to be a valid token after >, it needs to know whether to look for a
                        // standard JS token or an JSX text node
                        state.inJSXChild = origInJSXChild, state.inJSXTag = origInJSXTag, expect(">"), markerApply(marker, delegate.createJSXClosingElement(name));
                    }()).name) !== getQualifiedJSXName(openingElement.name) && throwError({}, Messages.ExpectedJSXClosingTag, getQualifiedJSXName(openingElement.name));
                }
                // When (erroneously) writing two adjacent tags like
                //
                //     var x = <div>one</div><div>two</div>;
                //
                // the default error message is a bit incomprehensible. Since it's
                // rarely (never?) useful to write a less-than sign after an JSX
                // element, we disallow it here in the parser in order to provide a
                // better error message. (In the rare case that the less-than operator
                // was intended, the left tag can be wrapped in parentheses.)
                                return !origInJSXChild && match("<") && throwError(lookahead, Messages.AdjacentJSXElements), 
                markerApply(marker, delegate.createJSXElement(openingElement, closingElement, children));
            }
            function parseInterfaceExtends() {
                var id, marker = markerCreate(), typeParameters = null;
                return id = parseVariableIdentifier(), match("<") && (typeParameters = parseTypeParameterInstantiation()), 
                markerApply(marker, delegate.createInterfaceExtends(id, typeParameters));
            }
            function parseInterfaceish(marker, allowStatic) {
                var body, bodyMarker, id, extended = [], typeParameters = null;
                if (id = parseVariableIdentifier(), match("<") && (typeParameters = parseTypeParameterDeclaration()), 
                matchKeyword("extends")) for (expectKeyword("extends"); index < length && (extended.push(parseInterfaceExtends()), 
                match(",")); ) expect(",");
                return bodyMarker = markerCreate(), body = markerApply(bodyMarker, parseObjectType(allowStatic)), 
                markerApply(marker, delegate.createInterface(id, typeParameters, body, extended));
            }
            function parseInterface() {
                var marker = markerCreate();
                return strict ? expectKeyword("interface") : expectContextualKeyword("interface"), 
                parseInterfaceish(marker, /* allowStatic */ !1);
            }
            function parseDeclareClass() {
                var ret, marker = markerCreate();
                return expectContextualKeyword("declare"), expectKeyword("class"), (ret = parseInterfaceish(marker, /* allowStatic */ !0)).type = Syntax.DeclareClass, 
                ret;
            }
            function parseDeclareFunction() {
                var id, idMarker, params, returnType, rest, tmp, value, valueMarker, marker = markerCreate(), typeParameters = null;
                return expectContextualKeyword("declare"), expectKeyword("function"), idMarker = markerCreate(), 
                id = parseVariableIdentifier(), valueMarker = markerCreate(), match("<") && (typeParameters = parseTypeParameterDeclaration()), 
                expect("("), tmp = parseFunctionTypeParams(), params = tmp.params, rest = tmp.rest, 
                expect(")"), expect(":"), returnType = parseType(), value = markerApply(valueMarker, delegate.createFunctionTypeAnnotation(params, returnType, rest, typeParameters)), 
                id.typeAnnotation = markerApply(valueMarker, delegate.createTypeAnnotation(value)), 
                markerApply(idMarker, id), consumeSemicolon(), markerApply(marker, delegate.createDeclareFunction(id));
            }
            function parseDeclareVariable() {
                var id, marker = markerCreate();
                return expectContextualKeyword("declare"), expectKeyword("var"), id = parseTypeAnnotatableIdentifier(), 
                consumeSemicolon(), markerApply(marker, delegate.createDeclareVariable(id));
            }
            function collectToken() {
                var loc, token, range, value, entry;
                /* istanbul ignore else */                return state.inJSXChild || skipComment(), 
                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                }, token = extra.advance(), loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                }, token.type !== Token.EOF && (range = [ token.range[0], token.range[1] ], value = source.slice(token.range[0], token.range[1]), 
                entry = {
                    type: TokenName[token.type],
                    value: value,
                    range: range,
                    loc: loc
                }, token.regex && (entry.regex = {
                    pattern: token.regex.pattern,
                    flags: token.regex.flags
                }), extra.tokens.push(entry)), token;
            }
            function collectRegex() {
                var pos, loc, regex, token;
                return skipComment(), loc = {
                    start: {
                        line: lineNumber,
                        column: (pos = index) - lineStart
                    }
                }, regex = extra.scanRegExp(), loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                }, extra.tokenize || (
                /* istanbul ignore next */
                // Pop the previous token, which is likely '/' or '/='
                0 < extra.tokens.length && (token = extra.tokens[extra.tokens.length - 1]).range[0] === pos && "Punctuator" === token.type && ("/" !== token.value && "/=" !== token.value || extra.tokens.pop()), 
                extra.tokens.push({
                    type: "RegularExpression",
                    value: regex.literal,
                    regex: regex.regex,
                    range: [ pos, index ],
                    loc: loc
                })), regex;
            }
            function filterTokenLocation() {
                var i, entry, token, tokens = [];
                for (i = 0; i < extra.tokens.length; ++i) entry = extra.tokens[i], token = {
                    type: entry.type,
                    value: entry.value
                }, entry.regex && (token.regex = {
                    pattern: entry.regex.pattern,
                    flags: entry.regex.flags
                }), extra.range && (token.range = entry.range), extra.loc && (token.loc = entry.loc), 
                tokens.push(token);
                extra.tokens = tokens;
            }
            function patch() {
                "undefined" != typeof extra.tokens && (extra.advance = advance, extra.scanRegExp = scanRegExp, 
                advance = collectToken, scanRegExp = collectRegex);
            }
            function unpatch() {
                "function" == typeof extra.scanRegExp && (advance = extra.advance, scanRegExp = extra.scanRegExp);
            }
            // This is used to modify the delegate.
                        function extend(object, properties) {
                var entry, result = {};
                for (entry in object) 
                /* istanbul ignore else */
                object.hasOwnProperty(entry) && (result[entry] = object[entry]);
                for (entry in properties) 
                /* istanbul ignore else */
                properties.hasOwnProperty(entry) && (result[entry] = properties[entry]);
                return result;
            }
            (TokenName = {})[(Token = {
                BooleanLiteral: 1,
                EOF: 2,
                Identifier: 3,
                Keyword: 4,
                NullLiteral: 5,
                NumericLiteral: 6,
                Punctuator: 7,
                StringLiteral: 8,
                RegularExpression: 9,
                Template: 10,
                JSXIdentifier: 11,
                JSXText: 12
            }).BooleanLiteral] = "Boolean", TokenName[Token.EOF] = "<end>", TokenName[Token.Identifier] = "Identifier", 
            TokenName[Token.Keyword] = "Keyword", TokenName[Token.NullLiteral] = "Null", TokenName[Token.NumericLiteral] = "Numeric", 
            TokenName[Token.Punctuator] = "Punctuator", TokenName[Token.StringLiteral] = "String", 
            TokenName[Token.JSXIdentifier] = "JSXIdentifier", TokenName[Token.JSXText] = "JSXText", 
            TokenName[Token.RegularExpression] = "RegularExpression", TokenName[Token.Template] = "Template", 
            // A function following one of those tokens is an expression.
            FnExprTokens = [ "(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", 
            // assignment operators
            "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", 
            // binary/unary operators
            "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!==" ], 
            Syntax = {
                AnyTypeAnnotation: "AnyTypeAnnotation",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrayTypeAnnotation: "ArrayTypeAnnotation",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AssignmentExpression: "AssignmentExpression",
                BinaryExpression: "BinaryExpression",
                BlockStatement: "BlockStatement",
                BooleanTypeAnnotation: "BooleanTypeAnnotation",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ClassImplements: "ClassImplements",
                ClassProperty: "ClassProperty",
                ComprehensionBlock: "ComprehensionBlock",
                ComprehensionExpression: "ComprehensionExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DebuggerStatement: "DebuggerStatement",
                DeclareClass: "DeclareClass",
                DeclareFunction: "DeclareFunction",
                DeclareModule: "DeclareModule",
                DeclareVariable: "DeclareVariable",
                DoWhileStatement: "DoWhileStatement",
                EmptyStatement: "EmptyStatement",
                ExportDeclaration: "ExportDeclaration",
                ExportBatchSpecifier: "ExportBatchSpecifier",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForInStatement: "ForInStatement",
                ForOfStatement: "ForOfStatement",
                ForStatement: "ForStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                FunctionTypeAnnotation: "FunctionTypeAnnotation",
                FunctionTypeParam: "FunctionTypeParam",
                GenericTypeAnnotation: "GenericTypeAnnotation",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                InterfaceDeclaration: "InterfaceDeclaration",
                InterfaceExtends: "InterfaceExtends",
                IntersectionTypeAnnotation: "IntersectionTypeAnnotation",
                LabeledStatement: "LabeledStatement",
                Literal: "Literal",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                NullableTypeAnnotation: "NullableTypeAnnotation",
                NumberTypeAnnotation: "NumberTypeAnnotation",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                ObjectTypeAnnotation: "ObjectTypeAnnotation",
                ObjectTypeCallProperty: "ObjectTypeCallProperty",
                ObjectTypeIndexer: "ObjectTypeIndexer",
                ObjectTypeProperty: "ObjectTypeProperty",
                Program: "Program",
                Property: "Property",
                QualifiedTypeIdentifier: "QualifiedTypeIdentifier",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                SpreadProperty: "SpreadProperty",
                StringLiteralTypeAnnotation: "StringLiteralTypeAnnotation",
                StringTypeAnnotation: "StringTypeAnnotation",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TupleTypeAnnotation: "TupleTypeAnnotation",
                TryStatement: "TryStatement",
                TypeAlias: "TypeAlias",
                TypeAnnotation: "TypeAnnotation",
                TypeCastExpression: "TypeCastExpression",
                TypeofTypeAnnotation: "TypeofTypeAnnotation",
                TypeParameterDeclaration: "TypeParameterDeclaration",
                TypeParameterInstantiation: "TypeParameterInstantiation",
                UnaryExpression: "UnaryExpression",
                UnionTypeAnnotation: "UnionTypeAnnotation",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                VoidTypeAnnotation: "VoidTypeAnnotation",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                JSXIdentifier: "JSXIdentifier",
                JSXNamespacedName: "JSXNamespacedName",
                JSXMemberExpression: "JSXMemberExpression",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXElement: "JSXElement",
                JSXClosingElement: "JSXClosingElement",
                JSXOpeningElement: "JSXOpeningElement",
                JSXAttribute: "JSXAttribute",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText",
                YieldExpression: "YieldExpression",
                AwaitExpression: "AwaitExpression"
            }, PropertyKind = {
                Data: 1,
                Get: 2,
                Set: 4
            }, ClassPropertyType = {
                "static": "static",
                prototype: "prototype"
            }, 
            // Error messages should be identical to V8.
            Messages = {
                UnexpectedToken: "Unexpected token %0",
                UnexpectedNumber: "Unexpected number",
                UnexpectedString: "Unexpected string",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedEOS: "Unexpected end of input",
                NewlineAfterThrow: "Illegal newline after throw",
                InvalidRegExp: "Invalid regular expression",
                UnterminatedRegExp: "Invalid regular expression: missing /",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInFormalsList: "Invalid left-hand side in formals list",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                NoCatchOrFinally: "Missing catch or finally after try",
                UnknownLabel: "Undefined label '%0'",
                Redeclaration: "%0 '%1' has already been declared",
                IllegalContinue: "Illegal continue statement",
                IllegalBreak: "Illegal break statement",
                IllegalDuplicateClassProperty: "Illegal duplicate property in class definition",
                IllegalClassConstructorProperty: "Illegal constructor property in class definition",
                IllegalReturn: "Illegal return statement",
                IllegalSpread: "Illegal spread element",
                StrictModeWith: "Strict mode code may not include a with statement",
                StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                StrictVarName: "Variable name may not be eval or arguments in strict mode",
                StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                ParameterAfterRestParameter: "Rest parameter must be final parameter of an argument list",
                DefaultRestParameter: "Rest parameter can not have a default value",
                ElementAfterSpreadElement: "Spread must be the final element of an element list",
                PropertyAfterSpreadProperty: "A rest property must be the final property of an object literal",
                ObjectPatternAsRestParameter: "Invalid rest parameter",
                ObjectPatternAsSpread: "Invalid spread argument",
                StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                StrictDelete: "Delete of an unqualified identifier in strict mode.",
                StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
                AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
                AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
                StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictReservedWord: "Use of future reserved word in strict mode",
                MissingFromClause: "Missing from clause",
                NoAsAfterImportNamespace: "Missing as after import *",
                InvalidModuleSpecifier: "Invalid module specifier",
                IllegalImportDeclaration: "Illegal import declaration",
                IllegalExportDeclaration: "Illegal export declaration",
                NoUninitializedConst: "Const must be initialized",
                ComprehensionRequiresBlock: "Comprehension must have at least one block",
                ComprehensionError: "Comprehension Error",
                EachNotAllowed: "Each is not supported",
                InvalidJSXAttributeValue: "JSX value should be either an expression or a quoted JSX text",
                ExpectedJSXClosingTag: "Expected corresponding JSX closing tag for %0",
                AdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag",
                ConfusedAboutFunctionType: "Unexpected token =>. It looks like you are trying to write a function type, but you ended up writing a grouped type followed by an =>, which is a syntax error. Remember, function type parameters are named so function types look like (name1: type1, name2: type2) => returnType. You probably wrote (type1) => returnType"
            }, 
            // See also tools/generate-unicode-regex.py.
            Regex = {
                NonAsciiIdentifierStart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
                NonAsciiIdentifierPart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
                LeadingZeros: new RegExp("^0+(?!$)")
            }, StringMap.prototype.get = function(key) {
                return key = "$" + key, this.$data[key];
            }, StringMap.prototype.set = function(key, value) {
                return key = "$" + key, this.$data[key] = value, this;
            }, StringMap.prototype.has = function(key) {
                return key = "$" + key, Object.prototype.hasOwnProperty.call(this.$data, key);
            }, StringMap.prototype["delete"] = function(key) {
                return key = "$" + key, delete this.$data[key];
            }, SyntaxTreeDelegate = {
                name: "SyntaxTree",
                postProcess: function(node) {
                    return node;
                },
                createArrayExpression: function(elements) {
                    return {
                        type: Syntax.ArrayExpression,
                        elements: elements
                    };
                },
                createAssignmentExpression: function(operator, left, right) {
                    return {
                        type: Syntax.AssignmentExpression,
                        operator: operator,
                        left: left,
                        right: right
                    };
                },
                createBinaryExpression: function(operator, left, right) {
                    var type = "||" === operator || "&&" === operator ? Syntax.LogicalExpression : Syntax.BinaryExpression;
                    return {
                        type: type,
                        operator: operator,
                        left: left,
                        right: right
                    };
                },
                createBlockStatement: function(body) {
                    return {
                        type: Syntax.BlockStatement,
                        body: body
                    };
                },
                createBreakStatement: function(label) {
                    return {
                        type: Syntax.BreakStatement,
                        label: label
                    };
                },
                createCallExpression: function(callee, args) {
                    return {
                        type: Syntax.CallExpression,
                        callee: callee,
                        arguments: args
                    };
                },
                createCatchClause: function(param, body) {
                    return {
                        type: Syntax.CatchClause,
                        param: param,
                        body: body
                    };
                },
                createConditionalExpression: function(test, consequent, alternate) {
                    return {
                        type: Syntax.ConditionalExpression,
                        test: test,
                        consequent: consequent,
                        alternate: alternate
                    };
                },
                createContinueStatement: function(label) {
                    return {
                        type: Syntax.ContinueStatement,
                        label: label
                    };
                },
                createDebuggerStatement: function() {
                    return {
                        type: Syntax.DebuggerStatement
                    };
                },
                createDoWhileStatement: function(body, test) {
                    return {
                        type: Syntax.DoWhileStatement,
                        body: body,
                        test: test
                    };
                },
                createEmptyStatement: function() {
                    return {
                        type: Syntax.EmptyStatement
                    };
                },
                createExpressionStatement: function(expression) {
                    return {
                        type: Syntax.ExpressionStatement,
                        expression: expression
                    };
                },
                createForStatement: function(init, test, update, body) {
                    return {
                        type: Syntax.ForStatement,
                        init: init,
                        test: test,
                        update: update,
                        body: body
                    };
                },
                createForInStatement: function(left, right, body) {
                    return {
                        type: Syntax.ForInStatement,
                        left: left,
                        right: right,
                        body: body,
                        each: !1
                    };
                },
                createForOfStatement: function(left, right, body) {
                    return {
                        type: Syntax.ForOfStatement,
                        left: left,
                        right: right,
                        body: body
                    };
                },
                createFunctionDeclaration: function(id, params, defaults, body, rest, generator, expression, isAsync, returnType, typeParameters) {
                    var funDecl = {
                        type: Syntax.FunctionDeclaration,
                        id: id,
                        params: params,
                        defaults: defaults,
                        body: body,
                        rest: rest,
                        generator: generator,
                        expression: expression,
                        returnType: returnType,
                        typeParameters: typeParameters
                    };
                    return isAsync && (funDecl.async = !0), funDecl;
                },
                createFunctionExpression: function(id, params, defaults, body, rest, generator, expression, isAsync, returnType, typeParameters) {
                    var funExpr = {
                        type: Syntax.FunctionExpression,
                        id: id,
                        params: params,
                        defaults: defaults,
                        body: body,
                        rest: rest,
                        generator: generator,
                        expression: expression,
                        returnType: returnType,
                        typeParameters: typeParameters
                    };
                    return isAsync && (funExpr.async = !0), funExpr;
                },
                createIdentifier: function(name) {
                    return {
                        type: Syntax.Identifier,
                        name: name,
                        // Only here to initialize the shape of the object to ensure
                        // that the 'typeAnnotation' key is ordered before others that
                        // are added later (like 'loc' and 'range'). This just helps
                        // keep the shape of Identifier nodes consistent with everything
                        // else.
                        typeAnnotation: undefined,
                        optional: undefined
                    };
                },
                createTypeAnnotation: function(typeAnnotation) {
                    return {
                        type: Syntax.TypeAnnotation,
                        typeAnnotation: typeAnnotation
                    };
                },
                createTypeCast: function(expression, typeAnnotation) {
                    return {
                        type: Syntax.TypeCastExpression,
                        expression: expression,
                        typeAnnotation: typeAnnotation
                    };
                },
                createFunctionTypeAnnotation: function(params, returnType, rest, typeParameters) {
                    return {
                        type: Syntax.FunctionTypeAnnotation,
                        params: params,
                        returnType: returnType,
                        rest: rest,
                        typeParameters: typeParameters
                    };
                },
                createFunctionTypeParam: function(name, typeAnnotation, optional) {
                    return {
                        type: Syntax.FunctionTypeParam,
                        name: name,
                        typeAnnotation: typeAnnotation,
                        optional: optional
                    };
                },
                createNullableTypeAnnotation: function(typeAnnotation) {
                    return {
                        type: Syntax.NullableTypeAnnotation,
                        typeAnnotation: typeAnnotation
                    };
                },
                createArrayTypeAnnotation: function(elementType) {
                    return {
                        type: Syntax.ArrayTypeAnnotation,
                        elementType: elementType
                    };
                },
                createGenericTypeAnnotation: function(id, typeParameters) {
                    return {
                        type: Syntax.GenericTypeAnnotation,
                        id: id,
                        typeParameters: typeParameters
                    };
                },
                createQualifiedTypeIdentifier: function(qualification, id) {
                    return {
                        type: Syntax.QualifiedTypeIdentifier,
                        qualification: qualification,
                        id: id
                    };
                },
                createTypeParameterDeclaration: function(params) {
                    return {
                        type: Syntax.TypeParameterDeclaration,
                        params: params
                    };
                },
                createTypeParameterInstantiation: function(params) {
                    return {
                        type: Syntax.TypeParameterInstantiation,
                        params: params
                    };
                },
                createAnyTypeAnnotation: function() {
                    return {
                        type: Syntax.AnyTypeAnnotation
                    };
                },
                createBooleanTypeAnnotation: function() {
                    return {
                        type: Syntax.BooleanTypeAnnotation
                    };
                },
                createNumberTypeAnnotation: function() {
                    return {
                        type: Syntax.NumberTypeAnnotation
                    };
                },
                createStringTypeAnnotation: function() {
                    return {
                        type: Syntax.StringTypeAnnotation
                    };
                },
                createStringLiteralTypeAnnotation: function(token) {
                    return {
                        type: Syntax.StringLiteralTypeAnnotation,
                        value: token.value,
                        raw: source.slice(token.range[0], token.range[1])
                    };
                },
                createVoidTypeAnnotation: function() {
                    return {
                        type: Syntax.VoidTypeAnnotation
                    };
                },
                createTypeofTypeAnnotation: function(argument) {
                    return {
                        type: Syntax.TypeofTypeAnnotation,
                        argument: argument
                    };
                },
                createTupleTypeAnnotation: function(types) {
                    return {
                        type: Syntax.TupleTypeAnnotation,
                        types: types
                    };
                },
                createObjectTypeAnnotation: function(properties, indexers, callProperties) {
                    return {
                        type: Syntax.ObjectTypeAnnotation,
                        properties: properties,
                        indexers: indexers,
                        callProperties: callProperties
                    };
                },
                createObjectTypeIndexer: function(id, key, value, isStatic) {
                    return {
                        type: Syntax.ObjectTypeIndexer,
                        id: id,
                        key: key,
                        value: value,
                        "static": isStatic
                    };
                },
                createObjectTypeCallProperty: function(value, isStatic) {
                    return {
                        type: Syntax.ObjectTypeCallProperty,
                        value: value,
                        "static": isStatic
                    };
                },
                createObjectTypeProperty: function(key, value, optional, isStatic) {
                    return {
                        type: Syntax.ObjectTypeProperty,
                        key: key,
                        value: value,
                        optional: optional,
                        "static": isStatic
                    };
                },
                createUnionTypeAnnotation: function(types) {
                    return {
                        type: Syntax.UnionTypeAnnotation,
                        types: types
                    };
                },
                createIntersectionTypeAnnotation: function(types) {
                    return {
                        type: Syntax.IntersectionTypeAnnotation,
                        types: types
                    };
                },
                createTypeAlias: function(id, typeParameters, right) {
                    return {
                        type: Syntax.TypeAlias,
                        id: id,
                        typeParameters: typeParameters,
                        right: right
                    };
                },
                createInterface: function(id, typeParameters, body, extended) {
                    return {
                        type: Syntax.InterfaceDeclaration,
                        id: id,
                        typeParameters: typeParameters,
                        body: body,
                        "extends": extended
                    };
                },
                createInterfaceExtends: function(id, typeParameters) {
                    return {
                        type: Syntax.InterfaceExtends,
                        id: id,
                        typeParameters: typeParameters
                    };
                },
                createDeclareFunction: function(id) {
                    return {
                        type: Syntax.DeclareFunction,
                        id: id
                    };
                },
                createDeclareVariable: function(id) {
                    return {
                        type: Syntax.DeclareVariable,
                        id: id
                    };
                },
                createDeclareModule: function(id, body) {
                    return {
                        type: Syntax.DeclareModule,
                        id: id,
                        body: body
                    };
                },
                createJSXAttribute: function(name, value) {
                    return {
                        type: Syntax.JSXAttribute,
                        name: name,
                        value: value || null
                    };
                },
                createJSXSpreadAttribute: function(argument) {
                    return {
                        type: Syntax.JSXSpreadAttribute,
                        argument: argument
                    };
                },
                createJSXIdentifier: function(name) {
                    return {
                        type: Syntax.JSXIdentifier,
                        name: name
                    };
                },
                createJSXNamespacedName: function(namespace, name) {
                    return {
                        type: Syntax.JSXNamespacedName,
                        namespace: namespace,
                        name: name
                    };
                },
                createJSXMemberExpression: function(object, property) {
                    return {
                        type: Syntax.JSXMemberExpression,
                        object: object,
                        property: property
                    };
                },
                createJSXElement: function(openingElement, closingElement, children) {
                    return {
                        type: Syntax.JSXElement,
                        openingElement: openingElement,
                        closingElement: closingElement,
                        children: children
                    };
                },
                createJSXEmptyExpression: function() {
                    return {
                        type: Syntax.JSXEmptyExpression
                    };
                },
                createJSXExpressionContainer: function(expression) {
                    return {
                        type: Syntax.JSXExpressionContainer,
                        expression: expression
                    };
                },
                createJSXOpeningElement: function(name, attributes, selfClosing) {
                    return {
                        type: Syntax.JSXOpeningElement,
                        name: name,
                        selfClosing: selfClosing,
                        attributes: attributes
                    };
                },
                createJSXClosingElement: function(name) {
                    return {
                        type: Syntax.JSXClosingElement,
                        name: name
                    };
                },
                createIfStatement: function(test, consequent, alternate) {
                    return {
                        type: Syntax.IfStatement,
                        test: test,
                        consequent: consequent,
                        alternate: alternate
                    };
                },
                createLabeledStatement: function(label, body) {
                    return {
                        type: Syntax.LabeledStatement,
                        label: label,
                        body: body
                    };
                },
                createLiteral: function(token) {
                    var object = {
                        type: Syntax.Literal,
                        value: token.value,
                        raw: source.slice(token.range[0], token.range[1])
                    };
                    return token.regex && (object.regex = token.regex), object;
                },
                createMemberExpression: function(accessor, object, property) {
                    return {
                        type: Syntax.MemberExpression,
                        computed: "[" === accessor,
                        object: object,
                        property: property
                    };
                },
                createNewExpression: function(callee, args) {
                    return {
                        type: Syntax.NewExpression,
                        callee: callee,
                        arguments: args
                    };
                },
                createObjectExpression: function(properties) {
                    return {
                        type: Syntax.ObjectExpression,
                        properties: properties
                    };
                },
                createPostfixExpression: function(operator, argument) {
                    return {
                        type: Syntax.UpdateExpression,
                        operator: operator,
                        argument: argument,
                        prefix: !1
                    };
                },
                createProgram: function(body) {
                    return {
                        type: Syntax.Program,
                        body: body
                    };
                },
                createProperty: function(kind, key, value, method, shorthand, computed) {
                    return {
                        type: Syntax.Property,
                        key: key,
                        value: value,
                        kind: kind,
                        method: method,
                        shorthand: shorthand,
                        computed: computed
                    };
                },
                createReturnStatement: function(argument) {
                    return {
                        type: Syntax.ReturnStatement,
                        argument: argument
                    };
                },
                createSequenceExpression: function(expressions) {
                    return {
                        type: Syntax.SequenceExpression,
                        expressions: expressions
                    };
                },
                createSwitchCase: function(test, consequent) {
                    return {
                        type: Syntax.SwitchCase,
                        test: test,
                        consequent: consequent
                    };
                },
                createSwitchStatement: function(discriminant, cases) {
                    return {
                        type: Syntax.SwitchStatement,
                        discriminant: discriminant,
                        cases: cases
                    };
                },
                createThisExpression: function() {
                    return {
                        type: Syntax.ThisExpression
                    };
                },
                createThrowStatement: function(argument) {
                    return {
                        type: Syntax.ThrowStatement,
                        argument: argument
                    };
                },
                createTryStatement: function(block, guardedHandlers, handlers, finalizer) {
                    return {
                        type: Syntax.TryStatement,
                        block: block,
                        guardedHandlers: guardedHandlers,
                        handlers: handlers,
                        finalizer: finalizer
                    };
                },
                createUnaryExpression: function(operator, argument) {
                    return "++" === operator || "--" === operator ? {
                        type: Syntax.UpdateExpression,
                        operator: operator,
                        argument: argument,
                        prefix: !0
                    } : {
                        type: Syntax.UnaryExpression,
                        operator: operator,
                        argument: argument,
                        prefix: !0
                    };
                },
                createVariableDeclaration: function(declarations, kind) {
                    return {
                        type: Syntax.VariableDeclaration,
                        declarations: declarations,
                        kind: kind
                    };
                },
                createVariableDeclarator: function(id, init) {
                    return {
                        type: Syntax.VariableDeclarator,
                        id: id,
                        init: init
                    };
                },
                createWhileStatement: function(test, body) {
                    return {
                        type: Syntax.WhileStatement,
                        test: test,
                        body: body
                    };
                },
                createWithStatement: function(object, body) {
                    return {
                        type: Syntax.WithStatement,
                        object: object,
                        body: body
                    };
                },
                createTemplateElement: function(value, tail) {
                    return {
                        type: Syntax.TemplateElement,
                        value: value,
                        tail: tail
                    };
                },
                createTemplateLiteral: function(quasis, expressions) {
                    return {
                        type: Syntax.TemplateLiteral,
                        quasis: quasis,
                        expressions: expressions
                    };
                },
                createSpreadElement: function(argument) {
                    return {
                        type: Syntax.SpreadElement,
                        argument: argument
                    };
                },
                createSpreadProperty: function(argument) {
                    return {
                        type: Syntax.SpreadProperty,
                        argument: argument
                    };
                },
                createTaggedTemplateExpression: function(tag, quasi) {
                    return {
                        type: Syntax.TaggedTemplateExpression,
                        tag: tag,
                        quasi: quasi
                    };
                },
                createArrowFunctionExpression: function(params, defaults, body, rest, expression, isAsync) {
                    var arrowExpr = {
                        type: Syntax.ArrowFunctionExpression,
                        id: null,
                        params: params,
                        defaults: defaults,
                        body: body,
                        rest: rest,
                        generator: !1,
                        expression: expression
                    };
                    return isAsync && (arrowExpr.async = !0), arrowExpr;
                },
                createMethodDefinition: function(propertyType, kind, key, value, computed) {
                    return {
                        type: Syntax.MethodDefinition,
                        key: key,
                        value: value,
                        kind: kind,
                        "static": propertyType === ClassPropertyType["static"],
                        computed: computed
                    };
                },
                createClassProperty: function(key, typeAnnotation, computed, isStatic) {
                    return {
                        type: Syntax.ClassProperty,
                        key: key,
                        typeAnnotation: typeAnnotation,
                        computed: computed,
                        "static": isStatic
                    };
                },
                createClassBody: function(body) {
                    return {
                        type: Syntax.ClassBody,
                        body: body
                    };
                },
                createClassImplements: function(id, typeParameters) {
                    return {
                        type: Syntax.ClassImplements,
                        id: id,
                        typeParameters: typeParameters
                    };
                },
                createClassExpression: function(id, superClass, body, typeParameters, superTypeParameters, implemented) {
                    return {
                        type: Syntax.ClassExpression,
                        id: id,
                        superClass: superClass,
                        body: body,
                        typeParameters: typeParameters,
                        superTypeParameters: superTypeParameters,
                        "implements": implemented
                    };
                },
                createClassDeclaration: function(id, superClass, body, typeParameters, superTypeParameters, implemented) {
                    return {
                        type: Syntax.ClassDeclaration,
                        id: id,
                        superClass: superClass,
                        body: body,
                        typeParameters: typeParameters,
                        superTypeParameters: superTypeParameters,
                        "implements": implemented
                    };
                },
                createExportSpecifier: function(id, name) {
                    return {
                        type: Syntax.ExportSpecifier,
                        id: id,
                        name: name
                    };
                },
                createExportBatchSpecifier: function() {
                    return {
                        type: Syntax.ExportBatchSpecifier
                    };
                },
                createImportDefaultSpecifier: function(id) {
                    return {
                        type: Syntax.ImportDefaultSpecifier,
                        id: id
                    };
                },
                createImportNamespaceSpecifier: function(id) {
                    return {
                        type: Syntax.ImportNamespaceSpecifier,
                        id: id
                    };
                },
                createExportDeclaration: function(isDefault, declaration, specifiers, src) {
                    return {
                        type: Syntax.ExportDeclaration,
                        "default": !!isDefault,
                        declaration: declaration,
                        specifiers: specifiers,
                        source: src
                    };
                },
                createImportSpecifier: function(id, name) {
                    return {
                        type: Syntax.ImportSpecifier,
                        id: id,
                        name: name
                    };
                },
                createImportDeclaration: function(specifiers, src, importKind) {
                    return {
                        type: Syntax.ImportDeclaration,
                        specifiers: specifiers,
                        source: src,
                        importKind: importKind
                    };
                },
                createYieldExpression: function(argument, dlg) {
                    return {
                        type: Syntax.YieldExpression,
                        argument: argument,
                        delegate: dlg
                    };
                },
                createAwaitExpression: function(argument) {
                    return {
                        type: Syntax.AwaitExpression,
                        argument: argument
                    };
                },
                createComprehensionExpression: function(filter, blocks, body) {
                    return {
                        type: Syntax.ComprehensionExpression,
                        filter: filter,
                        blocks: blocks,
                        body: body
                    };
                }
            }, XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                lt: "<",
                gt: ">",
                nbsp: " ",
                iexcl: "¡",
                cent: "¢",
                pound: "£",
                curren: "¤",
                yen: "¥",
                brvbar: "¦",
                sect: "§",
                uml: "¨",
                copy: "©",
                ordf: "ª",
                laquo: "«",
                not: "¬",
                shy: "­",
                reg: "®",
                macr: "¯",
                deg: "°",
                plusmn: "±",
                sup2: "²",
                sup3: "³",
                acute: "´",
                micro: "µ",
                para: "¶",
                middot: "·",
                cedil: "¸",
                sup1: "¹",
                ordm: "º",
                raquo: "»",
                frac14: "¼",
                frac12: "½",
                frac34: "¾",
                iquest: "¿",
                Agrave: "À",
                Aacute: "Á",
                Acirc: "Â",
                Atilde: "Ã",
                Auml: "Ä",
                Aring: "Å",
                AElig: "Æ",
                Ccedil: "Ç",
                Egrave: "È",
                Eacute: "É",
                Ecirc: "Ê",
                Euml: "Ë",
                Igrave: "Ì",
                Iacute: "Í",
                Icirc: "Î",
                Iuml: "Ï",
                ETH: "Ð",
                Ntilde: "Ñ",
                Ograve: "Ò",
                Oacute: "Ó",
                Ocirc: "Ô",
                Otilde: "Õ",
                Ouml: "Ö",
                times: "×",
                Oslash: "Ø",
                Ugrave: "Ù",
                Uacute: "Ú",
                Ucirc: "Û",
                Uuml: "Ü",
                Yacute: "Ý",
                THORN: "Þ",
                szlig: "ß",
                agrave: "à",
                aacute: "á",
                acirc: "â",
                atilde: "ã",
                auml: "ä",
                aring: "å",
                aelig: "æ",
                ccedil: "ç",
                egrave: "è",
                eacute: "é",
                ecirc: "ê",
                euml: "ë",
                igrave: "ì",
                iacute: "í",
                icirc: "î",
                iuml: "ï",
                eth: "ð",
                ntilde: "ñ",
                ograve: "ò",
                oacute: "ó",
                ocirc: "ô",
                otilde: "õ",
                ouml: "ö",
                divide: "÷",
                oslash: "ø",
                ugrave: "ù",
                uacute: "ú",
                ucirc: "û",
                uuml: "ü",
                yacute: "ý",
                thorn: "þ",
                yuml: "ÿ",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                "int": "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                lang: "〈",
                rang: "〉",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦"
            }, 
            // Sync with *.json manifests.
            exports.version = "15001.1.0-dev-harmony-fb", exports.tokenize = function tokenize(code, options) {
                var toString, tokens;
                toString = String, "string" == typeof code || code instanceof String || (code = toString(code));
                delegate = SyntaxTreeDelegate, lineNumber = (index = 0) < (source = code).length ? 1 : 0, 
                lineStart = 0, length = source.length, state = {
                    allowKeyword: !(lookahead = null),
                    allowIn: !0,
                    labelSet: new StringMap(),
                    inFunctionBody: !1,
                    inIteration: !1,
                    inSwitch: !1,
                    lastCommentStart: -1,
                    curlyStack: [],
                    curlyLastIndex: 0
                }, extra = {}, 
                // Of course we collect tokens here.
                (
                // Options matching.
                options = options || {}).tokens = !0, extra.tokens = [], extra.tokenize = !0, 
                // The following two fields are necessary to compute the Regex tokens.
                extra.openParenToken = -1, extra.openCurlyToken = -1, extra.range = "boolean" == typeof options.range && options.range, 
                extra.loc = "boolean" == typeof options.loc && options.loc, "boolean" == typeof options.comment && options.comment && (extra.comments = []);
                "boolean" == typeof options.tolerant && options.tolerant && (extra.errors = []);
                patch();
                try {
                    if (peek(), lookahead.type === Token.EOF) return extra.tokens;
                    for (lex(); lookahead.type !== Token.EOF; ) try {
                        lex();
                    } catch (lexError) {
                        if (lookahead, extra.errors) {
                            extra.errors.push(lexError);
                            // We have to break on the first error
                            // to avoid infinite loops.
                            break;
                        }
                        throw lexError;
                    }
                    filterTokenLocation(), tokens = extra.tokens, "undefined" != typeof extra.comments && (tokens.comments = extra.comments), 
                    "undefined" != typeof extra.errors && (tokens.errors = extra.errors);
                } catch (e) {
                    throw e;
                } finally {
                    unpatch(), extra = {};
                }
                return tokens;
            }, exports.parse = function parse(code, options) {
                var program, toString;
                toString = String, "string" == typeof code || code instanceof String || (code = toString(code));
                delegate = SyntaxTreeDelegate, lineNumber = (index = 0) < (source = code).length ? 1 : 0, 
                lineStart = 0, length = source.length, state = {
                    allowKeyword: !1,
                    allowIn: !(lookahead = null),
                    labelSet: new StringMap(),
                    parenthesizedCount: 0,
                    inFunctionBody: !1,
                    inIteration: !1,
                    inSwitch: !1,
                    inJSXChild: !1,
                    inJSXTag: !1,
                    inType: !1,
                    lastCommentStart: -1,
                    yieldAllowed: !1,
                    awaitAllowed: !1,
                    curlyPosition: 0,
                    curlyStack: [],
                    curlyLastIndex: 0
                }, extra = {}, void 0 !== options && (extra.range = "boolean" == typeof options.range && options.range, 
                extra.loc = "boolean" == typeof options.loc && options.loc, extra.attachComment = "boolean" == typeof options.attachComment && options.attachComment, 
                extra.loc && null !== options.source && options.source !== undefined && (delegate = extend(delegate, {
                    postProcess: function(node) {
                        return node.loc.source = toString(options.source), node;
                    }
                })), extra.sourceType = options.sourceType, "boolean" == typeof options.tokens && options.tokens && (extra.tokens = []), 
                "boolean" == typeof options.comment && options.comment && (extra.comments = []), 
                "boolean" == typeof options.tolerant && options.tolerant && (extra.errors = []), 
                extra.attachComment && (extra.range = !0, extra.comments = [], extra.bottomRightStack = [], 
                extra.trailingComments = [], extra.leadingComments = []));
                patch();
                try {
                    program = parseProgram(), "undefined" != typeof extra.comments && (program.comments = extra.comments), 
                    "undefined" != typeof extra.tokens && (filterTokenLocation(), program.tokens = extra.tokens), 
                    "undefined" != typeof extra.errors && (program.errors = extra.errors);
                } catch (e) {
                    throw e;
                } finally {
                    unpatch(), extra = {};
                }
                return program;
            }, 
            // Deep copy.
            /* istanbul ignore next */
            exports.Syntax = function() {
                var name, types = {};
                for (name in "function" == typeof Object.create && (types = Object.create(null)), 
                Syntax) Syntax.hasOwnProperty(name) && (types[name] = Syntax[name]);
                return "function" == typeof Object.freeze && Object.freeze(types), types;
            }();
        }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }();
}, 
/* 107 */
/***/ function(module, exports, __webpack_require__) {
    /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
    /*jslint node: true*/
    var Syntax = __webpack_require__(106).Syntax, leadingIndentRegexp = /(^|\n)( {2}|\t)/g, nonWhiteRegexp = /(\S)/g;
    /**
 * Given a state fill the resulting buffer from the original source up to
 * the end
 *
 * @param {number} end
 * @param {object} state
 * @param {?function} contentTransformer Optional callback to transform newly
 *                                       added content.
 */
    function catchup(end, state, contentTransformer) {
        if (!(end < state.g.position)) {
            var source = state.g.source.substring(state.g.position, end), transformed = updateIndent(source, state);
            if (state.g.sourceMap && transformed) {
                // record where we are
                state.g.sourceMap.addMapping({
                    generated: {
                        line: state.g.bufferLine,
                        column: state.g.bufferColumn
                    },
                    original: {
                        line: state.g.sourceLine,
                        column: state.g.sourceColumn
                    },
                    source: state.g.sourceMapFilename
                });
                // Add line break mappings between last known mapping and the end of the
                // added piece. So for the code piece
                //  (foo, bar);
                // > var x = 2;
                // > var b = 3;
                //   var c =
                // only add lines marked with ">": 2, 3.
                for (
                // record line breaks in transformed source
                var sourceLines = source.split("\n"), transformedLines = transformed.split("\n"), i = 1; i < sourceLines.length - 1; i++) state.g.sourceMap.addMapping({
                    generated: {
                        line: state.g.bufferLine,
                        column: 0
                    },
                    original: {
                        line: state.g.sourceLine,
                        column: 0
                    },
                    source: state.g.sourceMapFilename
                }), state.g.sourceLine++, state.g.bufferLine++;
                // offset for the last piece
                                1 < sourceLines.length && (state.g.sourceLine++, state.g.bufferLine++, 
                state.g.sourceColumn = 0, state.g.bufferColumn = 0), state.g.sourceColumn += sourceLines[sourceLines.length - 1].length, 
                state.g.bufferColumn += transformedLines[transformedLines.length - 1].length;
            }
            state.g.buffer += contentTransformer ? contentTransformer(transformed) : transformed, 
            state.g.position = end;
        }
    }
    /**
 * Returns original source for an AST node.
 * @param {object} node
 * @param {object} state
 * @return {string}
 */    function _replaceNonWhite(value) {
        return value.replace(nonWhiteRegexp, " ");
    }
    /**
 * Removes all non-whitespace characters
 */    function _stripNonWhite(value) {
        return value.replace(nonWhiteRegexp, "");
    }
    /**
 * Finds the position of the next instance of the specified syntactic char in
 * the pending source.
 *
 * NOTE: This will skip instances of the specified char if they sit inside a
 *       comment body.
 *
 * NOTE: This function also assumes that the buffer's current position is not
 *       already within a comment or a string. This is rarely the case since all
 *       of the buffer-advancement utility methods tend to be used on syntactic
 *       nodes' range values -- but it's a small gotcha that's worth mentioning.
 */    
    /**
 * Removes all non-newline characters
 */
    var reNonNewline = /[^\n]/g;
    function stripNonNewline(value) {
        return value.replace(reNonNewline, function() {
            return "";
        });
    }
    /**
 * Catches up as `catchup` but removes all non-newline characters.
 *
 * Equivalent to appending as many newlines as there are in the original source
 * between the current position and `end`.
 */    
    /**
 * Update indent using state.indentBy property. Indent is measured in
 * double spaces. Updates a single line only.
 *
 * @param {string} str
 * @param {object} state
 * @return {string}
 */
    function updateIndent(str, state) {
        /*jshint -W004*/
        var indentBy = state.indentBy;
        if (indentBy < 0) for (var i = 0; i < -indentBy; i++) str = str.replace(leadingIndentRegexp, "$1"); else for (i = 0; i < indentBy; i++) str = str.replace(leadingIndentRegexp, "$1$2$2");
        return str;
    }
    /**
 * Calculates indent from the beginning of the line until "start" or the first
 * character before start.
 * @example
 *   "  foo.bar()"
 *         ^
 *       start
 *   indent will be "  "
 *
 * @param  {number} start
 * @param  {object} state
 * @return {string}
 */    
    /**
 * Apply the given analyzer function to the current node. If the analyzer
 * doesn't return false, traverse each child of the current node using the given
 * traverser function.
 *
 * @param {function} analyzer
 * @param {function} traverser
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
    function analyzeAndTraverse(analyzer, traverser, node, path, state) {
        if (node.type) {
            if (!1 === analyzer(node, path, state)) return;
            path.unshift(node);
        }
        getOrderedChildren(node).forEach(function(child) {
            traverser(child, path, state);
        }), node.type && path.shift();
    }
    /**
 * It is crucial that we traverse in order, or else catchup() on a later
 * node that is processed out of order can move the buffer past a node
 * that we haven't handled yet, preventing us from modifying that node.
 *
 * This can happen when a node has multiple properties containing children.
 * For example, XJSElement nodes have `openingElement`, `closingElement` and
 * `children`. If we traverse `openingElement`, then `closingElement`, then
 * when we get to `children`, the buffer has already caught up to the end of
 * the closing element, after the children.
 *
 * This is basically a Schwartzian transform. Collects an array of children,
 * each one represented as [child, startIndex]; sorts the array by start
 * index; then traverses the children in that order.
 */    function getOrderedChildren(node) {
        var queue = [];
        for (var key in node) node.hasOwnProperty(key) && enqueueNodeWithStartIndex(queue, node[key]);
        return queue.sort(function(a, b) {
            return a[1] - b[1];
        }), queue.map(function(pair) {
            return pair[0];
        });
    }
    /**
 * Helper function for analyzeAndTraverse which queues up all of the children
 * of the given node.
 *
 * Children can also be found in arrays, so we basically want to merge all of
 * those arrays together so we can sort them and then traverse the children
 * in order.
 *
 * One example is the Program node. It contains `body` and `comments`, both
 * arrays. Lexographically, comments are interspersed throughout the body
 * nodes, but esprima's AST groups them together.
 */    function enqueueNodeWithStartIndex(queue, node) {
        if ("object" == typeof node && null !== node) if (node.range) queue.push([ node, node.range[0] ]); else if (Array.isArray(node)) for (var ii = 0; ii < node.length; ii++) enqueueNodeWithStartIndex(queue, node[ii]);
    }
    /**
 * Checks whether a node or any of its sub-nodes contains
 * a syntactic construct of the passed type.
 * @param {object} node - AST node to test.
 * @param {string} type - node type to lookup.
 */    function containsChildMatching(node, matcher) {
        var foundMatchingChild = !1;
        return analyzeAndTraverse(function nodeTypeAnalyzer(node) {
            if (!0 === matcher(node)) return !(foundMatchingChild = !0);
        }, function nodeTypeTraverser(child, path, state) {
            foundMatchingChild || (foundMatchingChild = containsChildMatching(child, matcher));
        }, node, []), foundMatchingChild;
    }
    var scopeTypes = {};
    scopeTypes[Syntax.ArrowFunctionExpression] = !0, scopeTypes[Syntax.FunctionExpression] = !0, 
    scopeTypes[Syntax.FunctionDeclaration] = !0, scopeTypes[Syntax.Program] = !0, exports.analyzeAndTraverse = analyzeAndTraverse, 
    exports.append = 
    /**
 * Appends a string of text to the buffer
 *
 * @param {string} str
 * @param {object} state
 */
    function append(str, state) {
        if (state.g.sourceMap && str) {
            state.g.sourceMap.addMapping({
                generated: {
                    line: state.g.bufferLine,
                    column: state.g.bufferColumn
                },
                original: {
                    line: state.g.sourceLine,
                    column: state.g.sourceColumn
                },
                source: state.g.sourceMapFilename
            });
            var transformedLines = str.split("\n");
            1 < transformedLines.length && (state.g.bufferLine += transformedLines.length - 1, 
            state.g.bufferColumn = 0), state.g.bufferColumn += transformedLines[transformedLines.length - 1].length;
        }
        state.g.buffer += str;
    }, exports.catchup = catchup, exports.catchupNewlines = function catchupNewlines(end, state) {
        catchup(end, state, stripNonNewline);
    }
    /**
 * Same as catchup but does not touch the buffer
 *
 * @param  {number} end
 * @param  {object} state
 */ , exports.catchupWhiteOut = 
    /**
 * Catches up as `catchup` but replaces non-whitespace chars with spaces.
 */
    function catchupWhiteOut(end, state) {
        catchup(end, state, _replaceNonWhite);
    }
    /**
 * Catches up as `catchup` but removes all non-whitespace characters.
 */ , exports.catchupWhiteSpace = function catchupWhiteSpace(end, state) {
        catchup(end, state, _stripNonWhite);
    }, exports.containsChildMatching = containsChildMatching, exports.containsChildOfType = function containsChildOfType(node, type) {
        return containsChildMatching(node, function(node) {
            return node.type === type;
        });
    }, exports.createState = 
    /**
 * A `state` object represents the state of the parser. It has "local" and
 * "global" parts. Global contains parser position, source, etc. Local contains
 * scope based properties like current class name. State should contain all the
 * info required for transformation. It's the only mandatory object that is
 * being passed to every function in transform chain.
 *
 * @param  {string} source
 * @param  {object} transformOptions
 * @return {object}
 */
    function createState(source, rootNode, transformOptions) {
        return {
            /**
     * A tree representing the current local scope (and its lexical scope chain)
     * Useful for tracking identifiers from parent scopes, etc.
     * @type {Object}
     */
            localScope: {
                parentNode: rootNode,
                parentScope: null,
                identifiers: {},
                tempVarIndex: 0,
                tempVars: []
            },
            /**
     * The name (and, if applicable, expression) of the super class
     * @type {Object}
     */
            superClass: null,
            /**
     * The namespace to use when munging identifiers
     * @type {String}
     */
            mungeNamespace: "",
            /**
     * Ref to the node for the current MethodDefinition
     * @type {Object}
     */
            methodNode: null,
            /**
     * Ref to the node for the FunctionExpression of the enclosing
     * MethodDefinition
     * @type {Object}
     */
            methodFuncNode: null,
            /**
     * Name of the enclosing class
     * @type {String}
     */
            className: null,
            /**
     * Whether we're currently within a `strict` scope
     * @type {Bool}
     */
            scopeIsStrict: null,
            /**
     * Indentation offset
     * @type {Number}
     */
            indentBy: 0,
            /**
     * Global state (not affected by updateState)
     * @type {Object}
     */
            g: {
                /**
       * A set of general options that transformations can consider while doing
       * a transformation:
       *
       * - minify
       *   Specifies that transformation steps should do their best to minify
       *   the output source when possible. This is useful for places where
       *   minification optimizations are possible with higher-level context
       *   info than what jsxmin can provide.
       *
       *   For example, the ES6 class transform will minify munged private
       *   variables if this flag is set.
       */
                opts: transformOptions,
                /**
       * Current position in the source code
       * @type {Number}
       */
                position: 0,
                /**
       * Auxiliary data to be returned by transforms
       * @type {Object}
       */
                extra: {},
                /**
       * Buffer containing the result
       * @type {String}
       */
                buffer: "",
                /**
       * Source that is being transformed
       * @type {String}
       */
                source: source,
                /**
       * Cached parsed docblock (see getDocblock)
       * @type {object}
       */
                docblock: null,
                /**
       * Whether the thing was used
       * @type {Boolean}
       */
                tagNamespaceUsed: !1,
                /**
       * If using bolt xjs transformation
       * @type {Boolean}
       */
                isBolt: undefined,
                /**
       * Whether to record source map (expensive) or not
       * @type {SourceMapGenerator|null}
       */
                sourceMap: null,
                /**
       * Filename of the file being processed. Will be returned as a source
       * attribute in the source map
       */
                sourceMapFilename: "source.js",
                /**
       * Only when source map is used: last line in the source for which
       * source map was generated
       * @type {Number}
       */
                sourceLine: 1,
                /**
       * Only when source map is used: last line in the buffer for which
       * source map was generated
       * @type {Number}
       */
                bufferLine: 1,
                /**
       * The top-level Program AST for the original file.
       */
                originalProgramAST: null,
                sourceColumn: 0,
                bufferColumn: 0
            }
        };
    }
    /**
 * Updates a copy of a given state with "update" and returns an updated state.
 *
 * @param  {object} state
 * @param  {object} update
 * @return {object}
 */ , exports.declareIdentInLocalScope = function declareIdentInLocalScope(identName, metaData, state) {
        state.localScope.identifiers[identName] = {
            boundaryNode: metaData.boundaryNode,
            path: metaData.bindingPath,
            node: metaData.bindingNode,
            state: Object.create(state)
        };
    }, exports.getBoundaryNode = function getBoundaryNode(path) {
        for (var ii = 0; ii < path.length; ++ii) if (scopeTypes[path[ii].type]) return path[ii];
        throw new Error("Expected to find a node with one of the following types in path:\n" + JSON.stringify(Object.keys(scopeTypes)));
    }, exports.getDocblock = function getDocblock(state) {
        if (!state.g.docblock) {
            var docblock = __webpack_require__(154);
            state.g.docblock = docblock.parseAsObject(docblock.extract(state.g.source));
        }
        return state.g.docblock;
    }, exports.getLexicalBindingMetadata = function getLexicalBindingMetadata(identName, state) {
        for (var currScope = state.localScope; currScope; ) {
            if (currScope.identifiers[identName] !== undefined) return currScope.identifiers[identName];
            currScope = currScope.parentScope;
        }
    }, exports.getLocalBindingMetadata = function getLocalBindingMetadata(identName, state) {
        return state.localScope.identifiers[identName];
    }, exports.getNextSyntacticCharOffset = function getNextSyntacticCharOffset(char, state) {
        var line, pendingSource = state.g.source.substring(state.g.position), pendingSourceLines = pendingSource.split("\n"), charOffset = 0, withinBlockComment = !1, withinString = !1;
        lineLoop: for (;(line = pendingSourceLines.shift()) !== undefined; ) {
            var lineEndPos = charOffset + line.length;
            charLoop: for (;charOffset < lineEndPos; charOffset++) {
                var currChar = pendingSource[charOffset];
                if ('"' !== currChar && "'" !== currChar) {
                    if (!withinString) {
                        if (charOffset + 1 < lineEndPos) {
                            var nextTwoChars = currChar + line[charOffset + 1];
                            if ("//" === nextTwoChars) {
                                charOffset = lineEndPos + 1;
                                continue lineLoop;
                            }
                            if ("/*" === nextTwoChars) {
                                withinBlockComment = !0, charOffset += 1;
                                continue charLoop;
                            }
                            if ("*/" === nextTwoChars) {
                                withinBlockComment = !1, charOffset += 1;
                                continue charLoop;
                            }
                        }
                        if (!withinBlockComment && currChar === char) return charOffset + state.g.position;
                    }
                } else withinString = !withinString;
            }
            // Account for '\n'
                        charOffset++, withinString = !1;
        }
        throw new Error("`" + char + "` not found!");
    }, exports.getNodeSourceText = function getNodeSourceText(node, state) {
        return state.g.source.substring(node.range[0], node.range[1]);
    }, exports.getOrderedChildren = getOrderedChildren, exports.getTempVar = function getTempVar(tempVarIndex) {
        return "$__" + tempVarIndex;
    }, exports.identInLocalScope = function identInLocalScope(identName, state) {
        return state.localScope.identifiers[identName] !== undefined;
    }
    /**
 * @param {object} boundaryNode
 * @param {?array} path
 * @return {?object} node
 */ , exports.identWithinLexicalScope = function identWithinLexicalScope(identName, state, stopBeforeNode) {
        for (var currScope = state.localScope; currScope; ) {
            if (currScope.identifiers[identName] !== undefined) return !0;
            if (stopBeforeNode && currScope.parentNode === stopBeforeNode) break;
            currScope = currScope.parentScope;
        }
        return !1;
    }, exports.indentBefore = function indentBefore(start, state) {
        var end = start;
        for (start -= 1; 0 < start && "\n" != state.g.source[start]; ) state.g.source[start].match(/[ \t]/) || (end = start), 
        start--;
        return state.g.source.substring(start + 1, end);
    }, exports.initScopeMetadata = function initScopeMetadata(boundaryNode, path, node) {
        return {
            boundaryNode: boundaryNode,
            bindingPath: path,
            bindingNode: node
        };
    }, exports.injectTempVar = function injectTempVar(state) {
        var tempVar = "$__" + state.localScope.tempVarIndex++;
        return state.localScope.tempVars.push(tempVar), tempVar;
    }, exports.injectTempVarDeclarations = function injectTempVarDeclarations(state, index) {
        state.localScope.tempVars.length && (state.g.buffer = state.g.buffer.slice(0, index) + "var " + state.localScope.tempVars.join(", ") + ";" + state.g.buffer.slice(index), 
        state.localScope.tempVars = []);
    }, exports.move = function move(end, state) {
        // move the internal cursors
        if (state.g.sourceMap) {
            end < state.g.position && (state.g.position = 0, state.g.sourceLine = 1, state.g.sourceColumn = 0);
            var sourceLines = state.g.source.substring(state.g.position, end).split("\n");
            1 < sourceLines.length && (state.g.sourceLine += sourceLines.length - 1, state.g.sourceColumn = 0), 
            state.g.sourceColumn += sourceLines[sourceLines.length - 1].length;
        }
        state.g.position = end;
    }, exports.scopeTypes = scopeTypes, exports.updateIndent = updateIndent, exports.updateState = function updateState(state, update) {
        var ret = Object.create(state);
        return Object.keys(update).forEach(function(updatedKey) {
            ret[updatedKey] = update[updatedKey];
        }), ret;
    };
}, 
/* 108 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */ (function(global, process) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        /*<replacement>*/
        var pna = __webpack_require__(57);
        /*</replacement>*/        module.exports = Readable;
        /*<replacement>*/
        var Duplex, isArray = __webpack_require__(109);
        /*</replacement>*/
        /*<replacement>*/        
        /*</replacement>*/
        Readable.ReadableState = ReadableState;
        /*<replacement>*/
        __webpack_require__(76).EventEmitter;
        var EElistenerCount = function(emitter, type) {
            return emitter.listeners(type).length;
        }, Stream = __webpack_require__(110), Buffer = __webpack_require__(58).Buffer, OurUint8Array = global.Uint8Array || function() {};
        /*</replacement>*/
        /*<replacement>*/
        var util = __webpack_require__(51);
        util.inherits = __webpack_require__(44);
        /*</replacement>*/
        /*<replacement>*/
        var debugUtil = __webpack_require__(163), debug = void 0;
        debug = debugUtil && debugUtil.debuglog ? debugUtil.debuglog("stream") : function() {}
        /*</replacement>*/;
        var StringDecoder, BufferList = __webpack_require__(164), destroyImpl = __webpack_require__(112);
        util.inherits(Readable, Stream);
        var kProxyEvents = [ "error", "close", "destroy", "pause", "resume" ];
        function ReadableState(options, stream) {
            options = options || {};
            // Duplex streams are both readable and writable, but share
            // the same options object.
            // However, some cases require setting options to different
            // values for the readable and the writable sides of the duplex stream.
            // These options can be provided separately as readableXXX and writableXXX.
            var isDuplex = stream instanceof (Duplex = Duplex || __webpack_require__(33));
            // object stream flag. Used to make read(n) ignore n and to
            // make all the buffer merging and length checks go away
                        this.objectMode = !!options.objectMode, isDuplex && (this.objectMode = this.objectMode || !!options.readableObjectMode);
            // the point at which it stops calling _read() to fill the buffer
            // Note: 0 is a valid value, means "don't call _read preemptively ever"
            var hwm = options.highWaterMark, readableHwm = options.readableHighWaterMark, defaultHwm = this.objectMode ? 16 : 16384;
            this.highWaterMark = hwm || 0 === hwm ? hwm : isDuplex && (readableHwm || 0 === readableHwm) ? readableHwm : defaultHwm, 
            // cast to ints.
            this.highWaterMark = Math.floor(this.highWaterMark), 
            // A linked list is used to store data chunks instead of an array because the
            // linked list can remove elements from the beginning faster than
            // array.shift()
            this.buffer = new BufferList(), this.length = 0, this.pipes = null, this.pipesCount = 0, 
            this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, 
            // a flag to be able to tell if the event 'readable'/'data' is emitted
            // immediately, or on a later tick.  We set this to true at first, because
            // any actions that shouldn't happen until "later" should generally also
            // not happen before the first read call.
            this.sync = !0, 
            // whenever we return null, then we set a flag to say
            // that we're awaiting a 'readable' event emission.
            this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, 
            this.resumeScheduled = !1, 
            // has it been destroyed
            this.destroyed = !1, 
            // Crypto is kind of old and crusty.  Historically, its default string
            // encoding is 'binary' so we have to make this configurable.
            // Everything else in the universe uses 'utf8', though.
            this.defaultEncoding = options.defaultEncoding || "utf8", 
            // the number of writers that are awaiting a drain event in .pipe()s
            this.awaitDrain = 0, 
            // if true, a maybeReadMore has been scheduled
            this.readingMore = !1, this.decoder = null, this.encoding = null, options.encoding && (StringDecoder || (StringDecoder = __webpack_require__(113).StringDecoder), 
            this.decoder = new StringDecoder(options.encoding), this.encoding = options.encoding);
        }
        function Readable(options) {
            if (Duplex = Duplex || __webpack_require__(33), !(this instanceof Readable)) return new Readable(options);
            this._readableState = new ReadableState(options, this), 
            // legacy
            this.readable = !0, options && ("function" == typeof options.read && (this._read = options.read), 
            "function" == typeof options.destroy && (this._destroy = options.destroy)), Stream.call(this);
        }
        function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
            var er, state = stream._readableState;
            null === chunk ? (state.reading = !1, function onEofChunk(stream, state) {
                if (state.ended) return;
                if (state.decoder) {
                    var chunk = state.decoder.end();
                    chunk && chunk.length && (state.buffer.push(chunk), state.length += state.objectMode ? 1 : chunk.length);
                }
                state.ended = !0, 
                // emit 'readable' now to make sure it gets picked up.
                emitReadable(stream);
            }
            // Don't emit readable right away in sync mode, because this can trigger
            // another read() call => stack overflow.  This way, it might trigger
            // a nextTick recursion warning, but that's not so bad.
            (stream, state)) : (skipChunkCheck || (er = function chunkInvalid(state, chunk) {
                var er;
                (function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                })(chunk) || "string" == typeof chunk || chunk === undefined || state.objectMode || (er = new TypeError("Invalid non-string/buffer chunk"));
                return er;
            }
            // if it's past the high water mark, we can push in some more.
            // Also, if we have no data yet, we can stand some
            // more bytes.  This is to work around cases where hwm=0,
            // such as the repl.  Also, if the push() triggered a
            // readable event, and the user called read(largeNumber) such that
            // needReadable was set, then we ought to push more, so that another
            // 'readable' event will be triggered.
            (state, chunk)), er ? stream.emit("error", er) : state.objectMode || chunk && 0 < chunk.length ? ("string" == typeof chunk || state.objectMode || Object.getPrototypeOf(chunk) === Buffer.prototype || (chunk = function _uint8ArrayToBuffer(chunk) {
                return Buffer.from(chunk);
            }(chunk)), addToFront ? state.endEmitted ? stream.emit("error", new Error("stream.unshift() after end event")) : addChunk(stream, state, chunk, !0) : state.ended ? stream.emit("error", new Error("stream.push() after EOF")) : (state.reading = !1, 
            state.decoder && !encoding ? (chunk = state.decoder.write(chunk), state.objectMode || 0 !== chunk.length ? addChunk(stream, state, chunk, !1) : maybeReadMore(stream, state)) : addChunk(stream, state, chunk, !1))) : addToFront || (state.reading = !1));
            return function needMoreData(state) {
                return !state.ended && (state.needReadable || state.length < state.highWaterMark || 0 === state.length);
            }(state);
        }
        function addChunk(stream, state, chunk, addToFront) {
            state.flowing && 0 === state.length && !state.sync ? (stream.emit("data", chunk), 
            stream.read(0)) : (
            // update the buffer info.
            state.length += state.objectMode ? 1 : chunk.length, addToFront ? state.buffer.unshift(chunk) : state.buffer.push(chunk), 
            state.needReadable && emitReadable(stream)), maybeReadMore(stream, state);
        }
        Object.defineProperty(Readable.prototype, "destroyed", {
            get: function() {
                return this._readableState !== undefined && this._readableState.destroyed;
            },
            set: function(value) {
                // we ignore the value if the stream
                // has not been initialized yet
                this._readableState && (
                // backward compatibility, the user is explicitly
                // managing destroyed
                this._readableState.destroyed = value);
            }
        }), Readable.prototype.destroy = destroyImpl.destroy, Readable.prototype._undestroy = destroyImpl.undestroy, 
        Readable.prototype._destroy = function(err, cb) {
            this.push(null), cb(err);
        }, 
        // Manually shove something into the read() buffer.
        // This returns true if the highWaterMark has not been hit yet,
        // similar to how Writable.write() returns true if you should
        // write() some more.
        Readable.prototype.push = function(chunk, encoding) {
            var skipChunkCheck, state = this._readableState;
            return state.objectMode ? skipChunkCheck = !0 : "string" == typeof chunk && ((encoding = encoding || state.defaultEncoding) !== state.encoding && (chunk = Buffer.from(chunk, encoding), 
            encoding = ""), skipChunkCheck = !0), readableAddChunk(this, chunk, encoding, !1, skipChunkCheck);
        }, 
        // Unshift should *always* be something directly out of read()
        Readable.prototype.unshift = function(chunk) {
            return readableAddChunk(this, chunk, null, !0, !1);
        }, Readable.prototype.isPaused = function() {
            return !1 === this._readableState.flowing;
        }, 
        // backwards compatibility.
        Readable.prototype.setEncoding = function(enc) {
            return StringDecoder || (StringDecoder = __webpack_require__(113).StringDecoder), 
            this._readableState.decoder = new StringDecoder(enc), this._readableState.encoding = enc, 
            this;
        };
        // Don't raise the hwm > 8MB
        var MAX_HWM = 8388608;
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function howMuchToRead(n, state) {
            return n <= 0 || 0 === state.length && state.ended ? 0 : state.objectMode ? 1 : n != n ? 
            // Only flow one buffer at a time
            state.flowing && state.length ? state.buffer.head.data.length : state.length : (
            // If we're asking for more than the current hwm, then raise the hwm.
            n > state.highWaterMark && (state.highWaterMark = function computeNewHighWaterMark(n) {
                return MAX_HWM <= n ? n = MAX_HWM : (
                // Get the next highest power of 2 to prevent increasing hwm excessively in
                // tiny amounts
                n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), 
                n;
            }(n)), n <= state.length ? n : 
            // Don't have enough
            state.ended ? state.length : (state.needReadable = !0, 0));
        }
        // you can override either this method, or the async _read(n) below.
                function emitReadable(stream) {
            var state = stream._readableState;
            state.needReadable = !1, state.emittedReadable || (debug("emitReadable", state.flowing), 
            state.emittedReadable = !0, state.sync ? pna.nextTick(emitReadable_, stream) : emitReadable_(stream));
        }
        function emitReadable_(stream) {
            debug("emit readable"), stream.emit("readable"), flow(stream);
        }
        // at this point, the user has presumably seen the 'readable' event,
        // and called read() to consume some data.  that may have triggered
        // in turn another _read(n) call, in which case reading = true if
        // it's in progress.
        // However, if we're not ended, or reading, and the length < hwm,
        // then go ahead and try to read some more preemptively.
                function maybeReadMore(stream, state) {
            state.readingMore || (state.readingMore = !0, pna.nextTick(maybeReadMore_, stream, state));
        }
        function maybeReadMore_(stream, state) {
            for (var len = state.length; !state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark && (debug("maybeReadMore read 0"), 
            stream.read(0), len !== state.length); ) len = state.length;
            state.readingMore = !1;
        }
        // abstract method.  to be overridden in specific implementation classes.
        // call cb(er, data) where data is <= n in length.
        // for virtual (non-string, non-buffer) streams, "length" is somewhat
        // arbitrary, and perhaps not very meaningful.
                function nReadingNextTick(self) {
            debug("readable nexttick read 0"), self.read(0);
        }
        // pause() and resume() are remnants of the legacy readable stream API
        // If the user uses them, then switch into old mode.
                function resume_(stream, state) {
            state.reading || (debug("resume read 0"), stream.read(0)), state.resumeScheduled = !1, 
            state.awaitDrain = 0, stream.emit("resume"), flow(stream), state.flowing && !state.reading && stream.read(0);
        }
        function flow(stream) {
            var state = stream._readableState;
            for (debug("flow", state.flowing); state.flowing && null !== stream.read(); ) ;
        }
        // wrap an old-style stream as the async data source.
        // This is *not* part of the readable stream interface.
        // It is an ugly unfortunate mess of history.
                // Pluck off n bytes from an array of buffers.
        // Length is the combined lengths of all the buffers in the list.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function fromList(n, state) {
            // nothing buffered
            return 0 === state.length ? null : (state.objectMode ? ret = state.buffer.shift() : !n || n >= state.length ? (
            // read it all, truncate the list
            ret = state.decoder ? state.buffer.join("") : 1 === state.buffer.length ? state.buffer.head.data : state.buffer.concat(state.length), 
            state.buffer.clear()) : 
            // read part of list
            ret = 
            // Extracts only enough buffered data to satisfy the amount requested.
            // This function is designed to be inlinable, so please take care when making
            // changes to the function body.
            function fromListPartial(n, list, hasStrings) {
                var ret;
                n < list.head.data.length ? (
                // slice is the same for buffers and strings
                ret = list.head.data.slice(0, n), list.head.data = list.head.data.slice(n)) : 
                // first chunk is a perfect match
                ret = n === list.head.data.length ? list.shift() : hasStrings ? 
                // Copies a specified amount of characters from the list of buffered data
                // chunks.
                // This function is designed to be inlinable, so please take care when making
                // changes to the function body.
                function copyFromBufferString(n, list) {
                    var p = list.head, c = 1, ret = p.data;
                    n -= ret.length;
                    for (;p = p.next; ) {
                        var str = p.data, nb = n > str.length ? str.length : n;
                        if (nb === str.length ? ret += str : ret += str.slice(0, n), 0 === (n -= nb)) {
                            nb === str.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p).data = str.slice(nb);
                            break;
                        }
                        ++c;
                    }
                    return list.length -= c, ret;
                }
                // Copies a specified amount of bytes from the list of buffered data chunks.
                // This function is designed to be inlinable, so please take care when making
                // changes to the function body.
                (n, list) : function copyFromBuffer(n, list) {
                    var ret = Buffer.allocUnsafe(n), p = list.head, c = 1;
                    p.data.copy(ret), n -= p.data.length;
                    for (;p = p.next; ) {
                        var buf = p.data, nb = n > buf.length ? buf.length : n;
                        if (buf.copy(ret, ret.length - n, 0, nb), 0 === (n -= nb)) {
                            nb === buf.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p).data = buf.slice(nb);
                            break;
                        }
                        ++c;
                    }
                    return list.length -= c, ret;
                }(n, list);
                return ret;
            }(n, state.buffer, state.decoder), ret);
            var ret;
        }
        function endReadable(stream) {
            var state = stream._readableState;
            // If we get here before consuming all the bytes, then that is a
            // bug in node.  Should never happen.
                        if (0 < state.length) throw new Error('"endReadable()" called on non-empty stream');
            state.endEmitted || (state.ended = !0, pna.nextTick(endReadableNT, state, stream));
        }
        function endReadableNT(state, stream) {
            // Check that we didn't get one last unshift.
            state.endEmitted || 0 !== state.length || (state.endEmitted = !0, stream.readable = !1, 
            stream.emit("end"));
        }
        function indexOf(xs, x) {
            for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
            return -1;
        }
        /* WEBPACK VAR INJECTION */        Readable.prototype.read = function(n) {
            debug("read", n), n = parseInt(n, 10);
            var state = this._readableState, nOrig = n;
            // if we're doing read(0) to trigger a readable event, but we
            // already have a bunch of data in the buffer, then just trigger
            // the 'readable' event and move on.
            if (0 !== n && (state.emittedReadable = !1), 0 === n && state.needReadable && (state.length >= state.highWaterMark || state.ended)) return debug("read: emitReadable", state.length, state.ended), 
            0 === state.length && state.ended ? endReadable(this) : emitReadable(this), null;
            // if we've ended, and we're now clear, then finish it up.
            if (0 === (n = howMuchToRead(n, state)) && state.ended) return 0 === state.length && endReadable(this), 
            null;
            // All the actual chunk generation logic needs to be
            // *below* the call to _read.  The reason is that in certain
            // synthetic stream cases, such as passthrough streams, _read
            // may be a completely synchronous operation which may change
            // the state of the read buffer, providing enough data when
            // before there was *not* enough.
            //
            // So, the steps are:
            // 1. Figure out what the state of things will be after we do
            // a read from the buffer.
            //
            // 2. If that resulting state will trigger a _read, then call _read.
            // Note that this may be asynchronous, or synchronous.  Yes, it is
            // deeply ugly to write APIs this way, but that still doesn't mean
            // that the Readable class should behave improperly, as streams are
            // designed to be sync/async agnostic.
            // Take note if the _read call is sync or async (ie, if the read call
            // has returned yet), so that we know whether or not it's safe to emit
            // 'readable' etc.
            //
            // 3. Actually pull the requested chunks out of the buffer and return.
            // if we need a readable event, then we need to do some reading.
                        var ret, doRead = state.needReadable;
            return debug("need readable", doRead), 
            // if we currently have less than the highWaterMark, then also read some
            (0 === state.length || state.length - n < state.highWaterMark) && debug("length less than watermark", doRead = !0), 
            // however, if we've ended, then there's no point, and if we're already
            // reading, then it's unnecessary.
            state.ended || state.reading ? debug("reading or ended", doRead = !1) : doRead && (debug("do read"), 
            state.reading = !0, state.sync = !0, 
            // if the length is currently zero, then we *need* a readable event.
            0 === state.length && (state.needReadable = !0), 
            // call internal read method
            this._read(state.highWaterMark), state.sync = !1, 
            // If _read pushed data synchronously, then `reading` will be false,
            // and we need to re-evaluate how much data we can return to the user.
            state.reading || (n = howMuchToRead(nOrig, state))), null === (ret = 0 < n ? fromList(n, state) : null) ? (state.needReadable = !0, 
            n = 0) : state.length -= n, 0 === state.length && (
            // If we have nothing in the buffer, then we want to know
            // as soon as we *do* get something into the buffer.
            state.ended || (state.needReadable = !0), 
            // If we tried to read() past the EOF, then emit end on the next tick.
            nOrig !== n && state.ended && endReadable(this)), null !== ret && this.emit("data", ret), 
            ret;
        }, Readable.prototype._read = function(n) {
            this.emit("error", new Error("_read() is not implemented"));
        }, Readable.prototype.pipe = function(dest, pipeOpts) {
            var src = this, state = this._readableState;
            switch (state.pipesCount) {
              case 0:
                state.pipes = dest;
                break;

              case 1:
                state.pipes = [ state.pipes, dest ];
                break;

              default:
                state.pipes.push(dest);
            }
            state.pipesCount += 1, debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
            var endFn = (!pipeOpts || !1 !== pipeOpts.end) && dest !== process.stdout && dest !== process.stderr ? onend : unpipe;
            function onunpipe(readable, unpipeInfo) {
                debug("onunpipe"), readable === src && unpipeInfo && !1 === unpipeInfo.hasUnpiped && (unpipeInfo.hasUnpiped = !0, 
                function cleanup() {
                    // if the reader is waiting for a drain event from this
                    // specific writer, then it would cause it to never start
                    // flowing again.
                    // So, if this is awaiting a drain, then we just call it now.
                    // If we don't know, then assume that we are waiting for one.
                    debug("cleanup"), 
                    // cleanup event handlers once the pipe is broken
                    dest.removeListener("close", onclose), dest.removeListener("finish", onfinish), 
                    dest.removeListener("drain", ondrain), dest.removeListener("error", onerror), dest.removeListener("unpipe", onunpipe), 
                    src.removeListener("end", onend), src.removeListener("end", unpipe), src.removeListener("data", ondata), 
                    cleanedUp = !0, !state.awaitDrain || dest._writableState && !dest._writableState.needDrain || ondrain();
                }
                // If the user pushes more data while we're writing to dest then we'll end up
                // in ondata again. However, we only want to increase awaitDrain once because
                // dest will only emit one 'drain' event for the multiple writes.
                // => Introduce a guard on increasing awaitDrain.
                ());
            }
            function onend() {
                debug("onend"), dest.end();
            }
            // when the dest drains, it reduces the awaitDrain counter
            // on the source.  This would be more elegant with a .once()
            // handler in flow(), but adding and removing repeatedly is
            // too slow.
                        state.endEmitted ? pna.nextTick(endFn) : src.once("end", endFn), dest.on("unpipe", onunpipe);
            var ondrain = function pipeOnDrain(src) {
                return function() {
                    var state = src._readableState;
                    debug("pipeOnDrain", state.awaitDrain), state.awaitDrain && state.awaitDrain--, 
                    0 === state.awaitDrain && EElistenerCount(src, "data") && (state.flowing = !0, flow(src));
                };
            }(src);
            dest.on("drain", ondrain);
            var cleanedUp = !1;
            var increasedAwaitDrain = !1;
            function ondata(chunk) {
                debug("ondata"), (increasedAwaitDrain = !1) !== dest.write(chunk) || increasedAwaitDrain || (
                // If the user unpiped during `dest.write()`, it is possible
                // to get stuck in a permanently paused state if that write
                // also returned false.
                // => Check whether `dest` is still a piping destination.
                (1 === state.pipesCount && state.pipes === dest || 1 < state.pipesCount && -1 !== indexOf(state.pipes, dest)) && !cleanedUp && (debug("false write response, pause", src._readableState.awaitDrain), 
                src._readableState.awaitDrain++, increasedAwaitDrain = !0), src.pause());
            }
            // if the dest has an error, then stop piping into it.
            // however, don't suppress the throwing behavior for this.
                        function onerror(er) {
                debug("onerror", er), unpipe(), dest.removeListener("error", onerror), 0 === EElistenerCount(dest, "error") && dest.emit("error", er);
            }
            // Make sure our error handler is attached before userland ones.
                        // Both close and finish should trigger unpipe, but only once.
            function onclose() {
                dest.removeListener("finish", onfinish), unpipe();
            }
            function onfinish() {
                debug("onfinish"), dest.removeListener("close", onclose), unpipe();
            }
            function unpipe() {
                debug("unpipe"), src.unpipe(dest);
            }
            // tell the dest that it's being piped to
                        return src.on("data", ondata), function prependListener(emitter, event, fn) {
                // Sadly this is not cacheable as some libraries bundle their own
                // event emitter implementation with them.
                if ("function" == typeof emitter.prependListener) return emitter.prependListener(event, fn);
                // This is a hack to make sure that our error handler is attached before any
                // userland ones.  NEVER DO THIS. This is here only because this code needs
                // to continue to work with older versions of Node.js that do not include
                // the prependListener() method. The goal is to eventually remove this hack.
                                emitter._events && emitter._events[event] ? isArray(emitter._events[event]) ? emitter._events[event].unshift(fn) : emitter._events[event] = [ fn, emitter._events[event] ] : emitter.on(event, fn);
            }(dest, "error", onerror), dest.once("close", onclose), dest.once("finish", onfinish), 
            dest.emit("pipe", src), 
            // start the flow if it hasn't been started already.
            state.flowing || (debug("pipe resume"), src.resume()), dest;
        }, Readable.prototype.unpipe = function(dest) {
            var state = this._readableState, unpipeInfo = {
                hasUnpiped: !1
            };
            // if we're not piping anywhere, then do nothing.
            if (0 === state.pipesCount) return this;
            // just one destination.  most common case.
                        if (1 === state.pipesCount) 
            // passed in one, but it's not the right one.
            return dest && dest !== state.pipes || (dest || (dest = state.pipes), 
            // got a match.
            state.pipes = null, state.pipesCount = 0, state.flowing = !1, dest && dest.emit("unpipe", this, unpipeInfo)), 
            this;
            // slow case. multiple pipe destinations.
                        if (!dest) {
                // remove all.
                var dests = state.pipes, len = state.pipesCount;
                state.pipes = null, state.pipesCount = 0, state.flowing = !1;
                for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, unpipeInfo);
                return this;
            }
            // try to find the right one.
                        var index = indexOf(state.pipes, dest);
            return -1 === index || (state.pipes.splice(index, 1), state.pipesCount -= 1, 1 === state.pipesCount && (state.pipes = state.pipes[0]), 
            dest.emit("unpipe", this, unpipeInfo)), this;
        }, Readable.prototype.addListener = 
        // set up data events if they are asked for
        // Ensure readable listeners eventually get something
        Readable.prototype.on = function(ev, fn) {
            var res = Stream.prototype.on.call(this, ev, fn);
            if ("data" === ev) 
            // Start flowing on next tick if stream isn't explicitly paused
            !1 !== this._readableState.flowing && this.resume(); else if ("readable" === ev) {
                var state = this._readableState;
                state.endEmitted || state.readableListening || (state.readableListening = state.needReadable = !0, 
                state.emittedReadable = !1, state.reading ? state.length && emitReadable(this) : pna.nextTick(nReadingNextTick, this));
            }
            return res;
        }, Readable.prototype.resume = function() {
            var state = this._readableState;
            return state.flowing || (debug("resume"), state.flowing = !0, function resume(stream, state) {
                state.resumeScheduled || (state.resumeScheduled = !0, pna.nextTick(resume_, stream, state));
            }(this, state)), this;
        }, Readable.prototype.pause = function() {
            return debug("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (debug("pause"), 
            this._readableState.flowing = !1, this.emit("pause")), this;
        }, Readable.prototype.wrap = function(stream) {
            var _this = this, state = this._readableState, paused = !1;
            // proxy all the other methods.
            // important when wrapping filters and duplexes.
            for (var i in stream.on("end", function() {
                if (debug("wrapped end"), state.decoder && !state.ended) {
                    var chunk = state.decoder.end();
                    chunk && chunk.length && _this.push(chunk);
                }
                _this.push(null);
            }), stream.on("data", function(chunk) {
                // don't skip over falsy values in objectMode
                (debug("wrapped data"), state.decoder && (chunk = state.decoder.write(chunk)), !state.objectMode || null !== chunk && chunk !== undefined) && ((state.objectMode || chunk && chunk.length) && (_this.push(chunk) || (paused = !0, 
                stream.pause())));
            }), stream) this[i] === undefined && "function" == typeof stream[i] && (this[i] = function(method) {
                return function() {
                    return stream[method].apply(stream, arguments);
                };
            }(i));
            // proxy certain important events.
                        for (var n = 0; n < kProxyEvents.length; n++) stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
            // when we try to consume some more bytes, simply unpause the
            // underlying stream.
                        return this._read = function(n) {
                debug("wrapped _read", n), paused && (paused = !1, stream.resume());
            }, this;
        }, Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
            // making it explicit this property is not enumerable
            // because otherwise some prototype manipulation in
            // userland will fail
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark;
            }
        }), 
        // exposed for testing purposes only.
        Readable._fromList = fromList;
    }).call(this, __webpack_require__(27), __webpack_require__(50))
    /***/;
}, 
/* 109 */
/***/ function(module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
        return "[object Array]" == toString.call(arr);
    };
}, 
/* 110 */
/***/ function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(76).EventEmitter;
    /***/}, 
/* 111 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */ (function(global) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        /* eslint-disable no-proto */
        var base64 = __webpack_require__(161), ieee754 = __webpack_require__(162), isArray = __webpack_require__(109);
        function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function createBuffer(that, length) {
            if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
            return Buffer.TYPED_ARRAY_SUPPORT ? (
            // Return an augmented `Uint8Array` instance, for best performance
            that = new Uint8Array(length)).__proto__ = Buffer.prototype : (
            // Fallback: Return an object instance of the Buffer class
            null === that && (that = new Buffer(length)), that.length = length), that;
        }
        /**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */        function Buffer(arg, encodingOrOffset, length) {
            if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
            // Common case.
                        if ("number" != typeof arg) return from(this, arg, encodingOrOffset, length);
            if ("string" == typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
            return allocUnsafe(this, arg);
        }
        function from(that, value, encodingOrOffset, length) {
            if ("number" == typeof value) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && value instanceof ArrayBuffer ? function fromArrayBuffer(that, array, byteOffset, length) {
                // this throws if `array` is not a valid ArrayBuffer
                if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
                if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
                array = byteOffset === undefined && length === undefined ? new Uint8Array(array) : length === undefined ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
                Buffer.TYPED_ARRAY_SUPPORT ? (
                // Return an augmented `Uint8Array` instance, for best performance
                that = array).__proto__ = Buffer.prototype : 
                // Fallback: Return an object instance of the Buffer class
                that = fromArrayLike(that, array);
                return that;
            }(that, value, encodingOrOffset, length) : "string" == typeof value ? function fromString(that, string, encoding) {
                "string" == typeof encoding && "" !== encoding || (encoding = "utf8");
                if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
                var length = 0 | byteLength(string, encoding), actual = (that = createBuffer(that, length)).write(string, encoding);
                actual !== length && (
                // Writing a hex string, for example, that contains invalid characters will
                // cause everything after the first invalid character to be ignored. (e.g.
                // 'abxxcd' will be treated as 'ab')
                that = that.slice(0, actual));
                return that;
            }(that, value, encodingOrOffset) : function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = 0 | checked(obj.length);
                    return 0 === (that = createBuffer(that, len)).length || obj.copy(that, 0, 0, len), 
                    that;
                }
                if (obj) {
                    if ("undefined" != typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) return "number" != typeof obj.length || function isnan(val) {
                        return val != val;
 // eslint-disable-line no-self-compare
                                        }
                    /* WEBPACK VAR INJECTION */ (obj.length) ? createBuffer(that, 0) : fromArrayLike(that, obj);
                    if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(that, value);
        }
        /**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/        function assertSize(size) {
            if ("number" != typeof size) throw new TypeError('"size" argument must be a number');
            if (size < 0) throw new RangeError('"size" argument must not be negative');
        }
        function allocUnsafe(that, size) {
            if (assertSize(size), that = createBuffer(that, size < 0 ? 0 : 0 | checked(size)), 
            !Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
            return that;
        }
        /**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */        function fromArrayLike(that, array) {
            var length = array.length < 0 ? 0 : 0 | checked(array.length);
            that = createBuffer(that, length);
            for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
            return that;
        }
        function checked(length) {
            // Note: cannot use `length < kMaxLength()` here because that fails when
            // length is NaN (which is otherwise coerced to zero.)
            if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            return 0 | length;
        }
        function byteLength(string, encoding) {
            if (Buffer.isBuffer(string)) return string.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
            "string" != typeof string && (string = "" + string);
            var len = string.length;
            if (0 === len) return 0;
            // Use a for loop to avoid recursion
                        for (var loweredCase = !1; ;) switch (encoding) {
              case "ascii":
              case "latin1":
              case "binary":
                return len;

              case "utf8":
              case "utf-8":
              case undefined:
                return utf8ToBytes(string).length;

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * len;

              case "hex":
                return len >>> 1;

              case "base64":
                return base64ToBytes(string).length;

              default:
                if (loweredCase) return utf8ToBytes(string).length;
 // assume utf8
                                encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
            }
        }
        function swap(b, n, m) {
            var i = b[n];
            b[n] = b[m], b[m] = i;
        }
        // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
        // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
        //
        // Arguments:
        // - buffer - a Buffer to search
        // - val - a string, Buffer, or number
        // - byteOffset - an index into `buffer`; will be clamped to an int32
        // - encoding - an optional encoding, relevant is val is a string
        // - dir - true for indexOf, false for lastIndexOf
        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
            // Empty buffer means no match
            if (0 === buffer.length) return -1;
            // Normalize byteOffset
                        if ("string" == typeof byteOffset ? (encoding = byteOffset, byteOffset = 0) : 2147483647 < byteOffset ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), 
            byteOffset = +byteOffset, // Coerce to Number.
            isNaN(byteOffset) && (
            // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
            byteOffset = dir ? 0 : buffer.length - 1), 
            // Normalize byteOffset: negative offsets start from the end of the buffer
            byteOffset < 0 && (byteOffset = buffer.length + byteOffset), byteOffset >= buffer.length) {
                if (dir) return -1;
                byteOffset = buffer.length - 1;
            } else if (byteOffset < 0) {
                if (!dir) return -1;
                byteOffset = 0;
            }
            // Normalize val
                        // Finally, search either indexOf (if dir is true) or lastIndexOf
            if ("string" == typeof val && (val = Buffer.from(val, encoding)), Buffer.isBuffer(val)) 
            // Special case: looking for empty string/buffer always fails
            return 0 === val.length ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
            if ("number" == typeof val) // Search for a byte value [0-255]
            return val &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
            throw new TypeError("val must be string, number or Buffer");
        }
        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
            var i, indexSize = 1, arrLength = arr.length, valLength = val.length;
            if (encoding !== undefined && ("ucs2" === (encoding = String(encoding).toLowerCase()) || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding)) {
                if (arr.length < 2 || val.length < 2) return -1;
                arrLength /= indexSize = 2, valLength /= 2, byteOffset /= 2;
            }
            function read(buf, i) {
                return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
            }
            if (dir) {
                var foundIndex = -1;
                for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
                    if (-1 === foundIndex && (foundIndex = i), i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                } else -1 !== foundIndex && (i -= i - foundIndex), foundIndex = -1;
            } else for (arrLength < byteOffset + valLength && (byteOffset = arrLength - valLength), 
            i = byteOffset; 0 <= i; i--) {
                for (var found = !0, j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                    found = !1;
                    break;
                }
                if (found) return i;
            }
            return -1;
        }
        function hexWrite(buf, string, offset, length) {
            offset = Number(offset) || 0;
            var remaining = buf.length - offset;
            length ? remaining < (length = Number(length)) && (length = remaining) : length = remaining;
            // must be an even number of digits
                        var strLen = string.length;
            if (strLen % 2 != 0) throw new TypeError("Invalid hex string");
            strLen / 2 < length && (length = strLen / 2);
            for (var i = 0; i < length; ++i) {
                var parsed = parseInt(string.substr(2 * i, 2), 16);
                if (isNaN(parsed)) return i;
                buf[offset + i] = parsed;
            }
            return i;
        }
        function utf8Write(buf, string, offset, length) {
            return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }
        function asciiWrite(buf, string, offset, length) {
            return blitBuffer(function asciiToBytes(str) {
                for (var byteArray = [], i = 0; i < str.length; ++i) 
                // Node's code seems to be doing this and not & 0x7F..
                byteArray.push(255 & str.charCodeAt(i));
                return byteArray;
            }(string), buf, offset, length);
        }
        function latin1Write(buf, string, offset, length) {
            return asciiWrite(buf, string, offset, length);
        }
        function base64Write(buf, string, offset, length) {
            return blitBuffer(base64ToBytes(string), buf, offset, length);
        }
        function ucs2Write(buf, string, offset, length) {
            return blitBuffer(function utf16leToBytes(str, units) {
                for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i) c = str.charCodeAt(i), 
                hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
                return byteArray;
            }(string, buf.length - offset), buf, offset, length);
        }
        function base64Slice(buf, start, end) {
            return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
        }
        function utf8Slice(buf, start, end) {
            end = Math.min(buf.length, end);
            for (var res = [], i = start; i < end; ) {
                var secondByte, thirdByte, fourthByte, tempCodePoint, firstByte = buf[i], codePoint = null, bytesPerSequence = 239 < firstByte ? 4 : 223 < firstByte ? 3 : 191 < firstByte ? 2 : 1;
                if (i + bytesPerSequence <= end) switch (bytesPerSequence) {
                  case 1:
                    firstByte < 128 && (codePoint = firstByte);
                    break;

                  case 2:
                    128 == (192 & (secondByte = buf[i + 1])) && 127 < (tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte) && (codePoint = tempCodePoint);
                    break;

                  case 3:
                    secondByte = buf[i + 1], thirdByte = buf[i + 2], 128 == (192 & secondByte) && 128 == (192 & thirdByte) && 2047 < (tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte) && (tempCodePoint < 55296 || 57343 < tempCodePoint) && (codePoint = tempCodePoint);
                    break;

                  case 4:
                    secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], 128 == (192 & secondByte) && 128 == (192 & thirdByte) && 128 == (192 & fourthByte) && 65535 < (tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte) && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
                }
                null === codePoint ? (
                // we did not generate a valid codePoint so insert a
                // replacement char (U+FFFD) and advance only 1 byte
                codePoint = 65533, bytesPerSequence = 1) : 65535 < codePoint && (
                // encode to utf16 (surrogate pair dance)
                codePoint -= 65536, res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | 1023 & codePoint), 
                res.push(codePoint), i += bytesPerSequence;
            }
            return function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
                // Decode in chunks to avoid "call stack size exceeded".
                                var res = "", i = 0;
                for (;i < len; ) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                return res;
            }(res);
        }
        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
                exports.Buffer = Buffer, exports.SlowBuffer = function SlowBuffer(length) {
            +length != length && (// eslint-disable-line eqeqeq
            length = 0);
            return Buffer.alloc(+length);
        }, exports.INSPECT_MAX_BYTES = 50
        /**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */ , Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
            try {
                var arr = new Uint8Array(1);
                return arr.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42;
                    }
                }, 42 === arr.foo() && // typed array instances can be augmented
                "function" == typeof arr.subarray && // chrome 9-10 lack `subarray`
                0 === arr.subarray(1, 1).byteLength;
 // ie10 has broken `subarray`
                        } catch (e) {
                return !1;
            }
        }()
        /*
 * Export kMaxLength after typed array support is determined.
 */ , exports.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, // not used by this implementation
        // TODO: Legacy, not needed anymore. Remove in next major version.
        Buffer._augment = function(arr) {
            return arr.__proto__ = Buffer.prototype, arr;
        }, Buffer.from = function(value, encodingOrOffset, length) {
            return from(null, value, encodingOrOffset, length);
        }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, 
        Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && 
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: !0
        })), 
        /**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
        Buffer.alloc = function(size, fill, encoding) {
            return function alloc(that, size, fill, encoding) {
                return assertSize(size), size <= 0 ? createBuffer(that, size) : fill !== undefined ? "string" == typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill) : createBuffer(that, size);
            }(null, size, fill, encoding);
        }, Buffer.allocUnsafe = function(size) {
            return allocUnsafe(null, size);
        }
        /**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ , Buffer.allocUnsafeSlow = function(size) {
            return allocUnsafe(null, size);
        }, Buffer.isBuffer = function(b) {
            return !(null == b || !b._isBuffer);
        }, Buffer.compare = function(a, b) {
            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
            if (a === b) return 0;
            for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                x = a[i], y = b[i];
                break;
            }
            return x < y ? -1 : y < x ? 1 : 0;
        }, Buffer.isEncoding = function(encoding) {
            switch (String(encoding).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;

              default:
                return !1;
            }
        }, Buffer.concat = function(list, length) {
            if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === list.length) return Buffer.alloc(0);
            var i;
            if (length === undefined) for (i = length = 0; i < list.length; ++i) length += list[i].length;
            var buffer = Buffer.allocUnsafe(length), pos = 0;
            for (i = 0; i < list.length; ++i) {
                var buf = list[i];
                if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
                buf.copy(buffer, pos), pos += buf.length;
            }
            return buffer;
        }, Buffer.byteLength = byteLength, 
        // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
        // Buffer instances.
        Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function() {
            var len = this.length;
            if (len % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
            return this;
        }, Buffer.prototype.swap32 = function() {
            var len = this.length;
            if (len % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var i = 0; i < len; i += 4) swap(this, i, i + 3), swap(this, i + 1, i + 2);
            return this;
        }, Buffer.prototype.swap64 = function() {
            var len = this.length;
            if (len % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var i = 0; i < len; i += 8) swap(this, i, i + 7), swap(this, i + 1, i + 6), 
            swap(this, i + 2, i + 5), swap(this, i + 3, i + 4);
            return this;
        }, Buffer.prototype.toString = function() {
            var length = 0 | this.length;
            return 0 === length ? "" : 0 === arguments.length ? utf8Slice(this, 0, length) : function slowToString(encoding, start, end) {
                var loweredCase = !1;
                // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                // property of a typed array.
                // This behaves neither like String nor Uint8Array in that we set start/end
                // to their upper/lower bounds if the value passed is out of range.
                // undefined is handled specially as per ECMA-262 6th Edition,
                // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                                // Return early if start > this.length. Done here to prevent potential uint32
                // coercion fail below.
                if ((start === undefined || start < 0) && (start = 0), start > this.length) return "";
                if ((end === undefined || end > this.length) && (end = this.length), end <= 0) return "";
                // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
                                if ((end >>>= 0) <= (start >>>= 0)) return "";
                for (encoding || (encoding = "utf8"); ;) switch (encoding) {
                  case "hex":
                    return hexSlice(this, start, end);

                  case "utf8":
                  case "utf-8":
                    return utf8Slice(this, start, end);

                  case "ascii":
                    return asciiSlice(this, start, end);

                  case "latin1":
                  case "binary":
                    return latin1Slice(this, start, end);

                  case "base64":
                    return base64Slice(this, start, end);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return utf16leSlice(this, start, end);

                  default:
                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                    encoding = (encoding + "").toLowerCase(), loweredCase = !0;
                }
            }.apply(this, arguments);
        }, Buffer.prototype.equals = function(b) {
            if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
            return this === b || 0 === Buffer.compare(this, b);
        }, Buffer.prototype.inspect = function() {
            var str = "", max = exports.INSPECT_MAX_BYTES;
            return 0 < this.length && (str = this.toString("hex", 0, max).match(/.{2}/g).join(" "), 
            this.length > max && (str += " ... ")), "<Buffer " + str + ">";
        }, Buffer.prototype.compare = function(target, start, end, thisStart, thisEnd) {
            if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
            if (start === undefined && (start = 0), end === undefined && (end = target ? target.length : 0), 
            thisStart === undefined && (thisStart = 0), thisEnd === undefined && (thisEnd = this.length), 
            start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
            if (thisEnd <= thisStart && end <= start) return 0;
            if (thisEnd <= thisStart) return -1;
            if (end <= start) return 1;
            if (this === target) return 0;
            for (var x = (thisEnd >>>= 0) - (thisStart >>>= 0), y = (end >>>= 0) - (start >>>= 0), len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                x = thisCopy[i], y = targetCopy[i];
                break;
            }
            return x < y ? -1 : y < x ? 1 : 0;
        }, Buffer.prototype.includes = function(val, byteOffset, encoding) {
            return -1 !== this.indexOf(val, byteOffset, encoding);
        }, Buffer.prototype.indexOf = function(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, !0);
        }, Buffer.prototype.lastIndexOf = function(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, !1);
        }, Buffer.prototype.write = function(string, offset, length, encoding) {
            // Buffer#write(string)
            if (offset === undefined) encoding = "utf8", length = this.length, offset = 0; else if (length === undefined && "string" == typeof offset) encoding = offset, 
            length = this.length, offset = 0; else {
                if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                offset |= 0, isFinite(length) ? (length |= 0, encoding === undefined && (encoding = "utf8")) : (encoding = length, 
                length = undefined);
            }
            var remaining = this.length - offset;
            if ((length === undefined || remaining < length) && (length = remaining), 0 < string.length && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            encoding || (encoding = "utf8");
            for (var loweredCase = !1; ;) switch (encoding) {
              case "hex":
                return hexWrite(this, string, offset, length);

              case "utf8":
              case "utf-8":
                return utf8Write(this, string, offset, length);

              case "ascii":
                return asciiWrite(this, string, offset, length);

              case "latin1":
              case "binary":
                return latin1Write(this, string, offset, length);

              case "base64":
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return ucs2Write(this, string, offset, length);

              default:
                if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
            }
        }, Buffer.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        };
        var MAX_ARGUMENTS_LENGTH = 4096;
        function asciiSlice(buf, start, end) {
            var ret = "";
            end = Math.min(buf.length, end);
            for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
            return ret;
        }
        function latin1Slice(buf, start, end) {
            var ret = "";
            end = Math.min(buf.length, end);
            for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
            return ret;
        }
        function hexSlice(buf, start, end) {
            var len = buf.length;
            (!start || start < 0) && (start = 0), (!end || end < 0 || len < end) && (end = len);
            for (var out = "", i = start; i < end; ++i) out += toHex(buf[i]);
            return out;
        }
        function utf16leSlice(buf, start, end) {
            for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
            return res;
        }
        /*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
        function checkOffset(offset, ext, length) {
            if (offset % 1 != 0 || offset < 0) throw new RangeError("offset is not uint");
            if (length < offset + ext) throw new RangeError("Trying to access beyond buffer length");
        }
        function checkInt(buf, value, offset, ext, max, min) {
            if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (max < value || value < min) throw new RangeError('"value" argument is out of bounds');
            if (offset + ext > buf.length) throw new RangeError("Index out of range");
        }
        function objectWriteUInt16(buf, value, offset, littleEndian) {
            value < 0 && (value = 65535 + value + 1);
            for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
        }
        function objectWriteUInt32(buf, value, offset, littleEndian) {
            value < 0 && (value = 4294967295 + value + 1);
            for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
        }
        function checkIEEE754(buf, value, offset, ext, max, min) {
            if (offset + ext > buf.length) throw new RangeError("Index out of range");
            if (offset < 0) throw new RangeError("Index out of range");
        }
        function writeFloat(buf, value, offset, littleEndian, noAssert) {
            return noAssert || checkIEEE754(buf, 0, offset, 4), ieee754.write(buf, value, offset, littleEndian, 23, 4), 
            offset + 4;
        }
        function writeDouble(buf, value, offset, littleEndian, noAssert) {
            return noAssert || checkIEEE754(buf, 0, offset, 8), ieee754.write(buf, value, offset, littleEndian, 52, 8), 
            offset + 8;
        }
        Buffer.prototype.slice = function(start, end) {
            var newBuf, len = this.length;
            if ((start = ~~start) < 0 ? (start += len) < 0 && (start = 0) : len < start && (start = len), 
            (end = end === undefined ? len : ~~end) < 0 ? (end += len) < 0 && (end = 0) : len < end && (end = len), 
            end < start && (end = start), Buffer.TYPED_ARRAY_SUPPORT) (newBuf = this.subarray(start, end)).__proto__ = Buffer.prototype; else {
                var sliceLen = end - start;
                newBuf = new Buffer(sliceLen, undefined);
                for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
            }
            return newBuf;
        }, Buffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256); ) val += this[offset + i] * mul;
            return val;
        }, Buffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset + --byteLength], mul = 1; 0 < byteLength && (mul *= 256); ) val += this[offset + --byteLength] * mul;
            return val;
        }, Buffer.prototype.readUInt8 = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 1, this.length), this[offset];
        }, Buffer.prototype.readUInt16LE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 2, this.length), this[offset] | this[offset + 1] << 8;
        }, Buffer.prototype.readUInt16BE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 2, this.length), this[offset] << 8 | this[offset + 1];
        }, Buffer.prototype.readUInt32LE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
        }, Buffer.prototype.readUInt32BE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        }, Buffer.prototype.readIntLE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256); ) val += this[offset + i] * mul;
            return (mul *= 128) <= val && (val -= Math.pow(2, 8 * byteLength)), val;
        }, Buffer.prototype.readIntBE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var i = byteLength, mul = 1, val = this[offset + --i]; 0 < i && (mul *= 256); ) val += this[offset + --i] * mul;
            return (mul *= 128) <= val && (val -= Math.pow(2, 8 * byteLength)), val;
        }, Buffer.prototype.readInt8 = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 1, this.length), 128 & this[offset] ? -1 * (255 - this[offset] + 1) : this[offset];
        }, Buffer.prototype.readInt16LE = function(offset, noAssert) {
            noAssert || checkOffset(offset, 2, this.length);
            var val = this[offset] | this[offset + 1] << 8;
            return 32768 & val ? 4294901760 | val : val;
        }, Buffer.prototype.readInt16BE = function(offset, noAssert) {
            noAssert || checkOffset(offset, 2, this.length);
            var val = this[offset + 1] | this[offset] << 8;
            return 32768 & val ? 4294901760 | val : val;
        }, Buffer.prototype.readInt32LE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        }, Buffer.prototype.readInt32BE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        }, Buffer.prototype.readFloatLE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !0, 23, 4);
        }, Buffer.prototype.readFloatBE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !1, 23, 4);
        }, Buffer.prototype.readDoubleLE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !0, 52, 8);
        }, Buffer.prototype.readDoubleBE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !1, 52, 8);
        }, Buffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {
            (value = +value, offset |= 0, byteLength |= 0, noAssert) || checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength) - 1, 0);
            var mul = 1, i = 0;
            for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256); ) this[offset + i] = value / mul & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {
            (value = +value, offset |= 0, byteLength |= 0, noAssert) || checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength) - 1, 0);
            var i = byteLength - 1, mul = 1;
            for (this[offset + i] = 255 & value; 0 <= --i && (mul *= 256); ) this[offset + i] = value / mul & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 255, 0), 
            Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = 255 & value, 
            offset + 1;
        }, Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), 
            offset + 2;
        }, Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), 
            offset + 2;
        }, Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, 
            this[offset + 1] = value >>> 8, this[offset] = 255 & value) : objectWriteUInt32(this, value, offset, !0), 
            offset + 4;
        }, Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, 
            this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), 
            offset + 4;
        }, Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, !noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
            }
            var i = 0, mul = 1, sub = 0;
            for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256); ) value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1), 
            this[offset + i] = (value / mul >> 0) - sub & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, !noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
            }
            var i = byteLength - 1, mul = 1, sub = 0;
            for (this[offset + i] = 255 & value; 0 <= --i && (mul *= 256); ) value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1), 
            this[offset + i] = (value / mul >> 0) - sub & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 127, -128), 
            Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), 
            this[offset] = 255 & value, offset + 1;
        }, Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), 
            offset + 2;
        }, Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), 
            offset + 2;
        }, Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8, 
            this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt32(this, value, offset, !0), 
            offset + 4;
        }, Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), 
            value < 0 && (value = 4294967295 + value + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, 
            this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), 
            offset + 4;
        }, Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
            return writeFloat(this, value, offset, !0, noAssert);
        }, Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
            return writeFloat(this, value, offset, !1, noAssert);
        }, Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
            return writeDouble(this, value, offset, !0, noAssert);
        }, Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
            return writeDouble(this, value, offset, !1, noAssert);
        }
        // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
        , Buffer.prototype.copy = function(target, targetStart, start, end) {
            // Copy 0 bytes; we're done
            if (start || (start = 0), end || 0 === end || (end = this.length), targetStart >= target.length && (targetStart = target.length), 
            targetStart || (targetStart = 0), 0 < end && end < start && (end = start), end === start) return 0;
            if (0 === target.length || 0 === this.length) return 0;
            // Fatal error conditions
                        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
            if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
            if (end < 0) throw new RangeError("sourceEnd out of bounds");
            // Are we oob?
                        end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
            var i, len = end - start;
            if (this === target && start < targetStart && targetStart < end) 
            // descending copy from end
            for (i = len - 1; 0 <= i; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) 
            // ascending copy from start
            for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
            return len;
        }
        // Usage:
        //    buffer.fill(number[, offset[, end]])
        //    buffer.fill(buffer[, offset[, end]])
        //    buffer.fill(string[, offset[, end]][, encoding])
        , Buffer.prototype.fill = function(val, start, end, encoding) {
            // Handle string cases:
            if ("string" == typeof val) {
                if ("string" == typeof start ? (encoding = start, start = 0, end = this.length) : "string" == typeof end && (encoding = end, 
                end = this.length), 1 === val.length) {
                    var code = val.charCodeAt(0);
                    code < 256 && (val = code);
                }
                if (encoding !== undefined && "string" != typeof encoding) throw new TypeError("encoding must be a string");
                if ("string" == typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
            } else "number" == typeof val && (val &= 255);
            // Invalid ranges are not set to a default, so can range check early.
                        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
            if (end <= start) return this;
            var i;
            if (start >>>= 0, end = end === undefined ? this.length : end >>> 0, val || (val = 0), 
            "number" == typeof val) for (i = start; i < end; ++i) this[i] = val; else {
                var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString()), len = bytes.length;
                for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
            }
            return this;
        }
        // HELPER FUNCTIONS
        // ================
        ;
        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
        function toHex(n) {
            return n < 16 ? "0" + n.toString(16) : n.toString(16);
        }
        function utf8ToBytes(string, units) {
            var codePoint;
            units = units || Infinity;
            for (var length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
                // is surrogate component
                if (55295 < (codePoint = string.charCodeAt(i)) && codePoint < 57344) {
                    // last char was a lead
                    if (!leadSurrogate) {
                        // no lead yet
                        if (56319 < codePoint) {
                            // unexpected trail
                            -1 < (units -= 3) && bytes.push(239, 191, 189);
                            continue;
                        }
                        // valid lead
                                                if (i + 1 === length) {
                            // unpaired lead
                            -1 < (units -= 3) && bytes.push(239, 191, 189);
                            continue;
                        }
                        leadSurrogate = codePoint;
                        continue;
                    }
                    // 2 leads in a row
                                        if (codePoint < 56320) {
                        -1 < (units -= 3) && bytes.push(239, 191, 189), leadSurrogate = codePoint;
                        continue;
                    }
                    // valid surrogate pair
                                        codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
                } else leadSurrogate && -1 < (units -= 3) && bytes.push(239, 191, 189);
                // encode utf8
                if (leadSurrogate = null, codePoint < 128) {
                    if ((units -= 1) < 0) break;
                    bytes.push(codePoint);
                } else if (codePoint < 2048) {
                    if ((units -= 2) < 0) break;
                    bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
                } else if (codePoint < 65536) {
                    if ((units -= 3) < 0) break;
                    bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
                } else {
                    if (!(codePoint < 1114112)) throw new Error("Invalid code point");
                    if ((units -= 4) < 0) break;
                    bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
                }
            }
            return bytes;
        }
        function base64ToBytes(str) {
            return base64.toByteArray(function base64clean(str) {
                // Node converts strings with length < 2 to ''
                if ((
                // Node strips out invalid characters like \n and \t from the string, base64-js does not
                str = function stringtrim(str) {
                    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
                }(str).replace(INVALID_BASE64_RE, "")).length < 2) return "";
                // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
                                for (;str.length % 4 != 0; ) str += "=";
                return str;
            }(str));
        }
        function blitBuffer(src, dst, offset, length) {
            for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i) dst[i + offset] = src[i];
            return i;
        }
    }).call(this, __webpack_require__(27))
    /***/;
}, 
/* 112 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /*<replacement>*/    var pna = __webpack_require__(57);
    /*</replacement>*/
    // undocumented cb() API, needed for core, not for public API
        function emitErrorNT(self, err) {
        self.emit("error", err);
    }
    module.exports = {
        destroy: function destroy(err, cb) {
            var _this = this, readableDestroyed = this._readableState && this._readableState.destroyed, writableDestroyed = this._writableState && this._writableState.destroyed;
            return readableDestroyed || writableDestroyed ? cb ? cb(err) : !err || this._writableState && this._writableState.errorEmitted || pna.nextTick(emitErrorNT, this, err) : (
            // we set destroyed to true before firing error callbacks in order
            // to make it re-entrance safe in case destroy() is called within callbacks
            this._readableState && (this._readableState.destroyed = !0), 
            // if this is a duplex stream mark the writable part as destroyed as well
            this._writableState && (this._writableState.destroyed = !0), this._destroy(err || null, function(err) {
                !cb && err ? (pna.nextTick(emitErrorNT, _this, err), _this._writableState && (_this._writableState.errorEmitted = !0)) : cb && cb(err);
            })), this;
        },
        undestroy: function undestroy() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, 
            this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, 
            this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, 
            this._writableState.errorEmitted = !1);
        }
    };
}, 
/* 113 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    /*<replacement>*/    var Buffer = __webpack_require__(58).Buffer, isEncoding = Buffer.isEncoding || function(encoding) {
        switch ((encoding = "" + encoding) && encoding.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;

          default:
            return !1;
        }
    };
    /*</replacement>*/    function StringDecoder(encoding) {
        var nb;
        switch (this.encoding = 
        // Do not cache `Buffer.isEncoding` when checking encoding names as some
        // modules monkey-patch it to support additional encodings
        function normalizeEncoding(enc) {
            var nenc = function _normalizeEncoding(enc) {
                if (!enc) return "utf8";
                for (var retried; ;) switch (enc) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";

                  case "latin1":
                  case "binary":
                    return "latin1";

                  case "base64":
                  case "ascii":
                  case "hex":
                    return enc;

                  default:
                    if (retried) return;
 // undefined
                                        enc = ("" + enc).toLowerCase(), retried = !0;
                }
            }(enc);
            if ("string" != typeof nenc && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
            return nenc || enc;
        }
        // StringDecoder provides an interface for efficiently splitting a series of
        // buffers into a series of JS strings without breaking apart multi-byte
        // characters.
        (encoding), this.encoding) {
          case "utf16le":
            this.text = utf16Text, this.end = utf16End, nb = 4;
            break;

          case "utf8":
            this.fillLast = utf8FillLast, nb = 4;
            break;

          case "base64":
            this.text = base64Text, this.end = base64End, nb = 3;
            break;

          default:
            return this.write = simpleWrite, void (this.end = simpleEnd);
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Buffer.allocUnsafe(nb);
    }
    // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
    // continuation byte. If an invalid byte is detected, -2 is returned.
    function utf8CheckByte(byte) {
        return byte <= 127 ? 0 : byte >> 5 == 6 ? 2 : byte >> 4 == 14 ? 3 : byte >> 3 == 30 ? 4 : byte >> 6 == 2 ? -1 : -2;
    }
    // Checks at most 3 bytes at the end of a Buffer in order to detect an
    // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
    // needed to complete the UTF-8 character (if applicable) are returned.
        // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
    function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed, r = 
        // Validates as many continuation bytes for a multi-byte UTF-8 character as
        // needed or are available. If we see a non-continuation byte where we expect
        // one, we "replace" the validated continuation bytes we've seen so far with
        // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
        // behavior. The continuation byte check is included three times in the case
        // where all of the continuation bytes for a character exist in the same buffer.
        // It is also done this way as a slight performance increase instead of using a
        // loop.
        function utf8CheckExtraBytes(self, buf, p) {
            if (128 != (192 & buf[0])) return self.lastNeed = 0, "�";
            if (1 < self.lastNeed && 1 < buf.length) {
                if (128 != (192 & buf[1])) return self.lastNeed = 1, "�";
                if (2 < self.lastNeed && 2 < buf.length && 128 != (192 & buf[2])) return self.lastNeed = 2, 
                "�";
            }
        }(this, buf);
        return r !== undefined ? r : this.lastNeed <= buf.length ? (buf.copy(this.lastChar, p, 0, this.lastNeed), 
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (buf.copy(this.lastChar, p, 0, buf.length), 
        void (this.lastNeed -= buf.length));
    }
    // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
    // partial character, the character's bytes are buffered until the required
    // number of bytes are available.
        // UTF-16LE typically needs two bytes per character, but even if we have an even
    // number of bytes available, we need to check if we end on a leading/high
    // surrogate. In that case, we need to wait for the next two bytes in order to
    // decode the last character properly.
    function utf16Text(buf, i) {
        if ((buf.length - i) % 2 != 0) return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = buf[buf.length - 1], 
        buf.toString("utf16le", i, buf.length - 1);
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (55296 <= c && c <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = buf[buf.length - 2], 
            this.lastChar[1] = buf[buf.length - 1], r.slice(0, -1);
        }
        return r;
    }
    // For UTF-16LE we do not explicitly append special replacement characters if we
    // end on a partial character, we simply let v8 handle that.
        function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
            var end = this.lastTotal - this.lastNeed;
            return r + this.lastChar.toString("utf16le", 0, end);
        }
        return r;
    }
    function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        return 0 === n ? buf.toString("base64", i) : (this.lastNeed = 3 - n, this.lastTotal = 3, 
        1 === n ? this.lastChar[0] = buf[buf.length - 1] : (this.lastChar[0] = buf[buf.length - 2], 
        this.lastChar[1] = buf[buf.length - 1]), buf.toString("base64", i, buf.length - n));
    }
    function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        return this.lastNeed ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : r;
    }
    // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
        function simpleWrite(buf) {
        return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
    }
    /***/    (exports.StringDecoder = StringDecoder).prototype.write = function(buf) {
        if (0 === buf.length) return "";
        var r, i;
        if (this.lastNeed) {
            if ((r = this.fillLast(buf)) === undefined) return "";
            i = this.lastNeed, this.lastNeed = 0;
        } else i = 0;
        return i < buf.length ? r ? r + this.text(buf, i) : this.text(buf, i) : r || "";
    }, StringDecoder.prototype.end = 
    // For UTF-8, a replacement character is added when ending on a partial
    // character.
    function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        return this.lastNeed ? r + "�" : r;
    }, 
    // Returns only complete characters in a Buffer
    StringDecoder.prototype.text = function utf8Text(buf, i) {
        var total = function utf8CheckIncomplete(self, buf, i) {
            var j = buf.length - 1;
            if (j < i) return 0;
            var nb = utf8CheckByte(buf[j]);
            if (0 <= nb) return 0 < nb && (self.lastNeed = nb - 1), nb;
            if (--j < i || -2 === nb) return 0;
            if (0 <= (nb = utf8CheckByte(buf[j]))) return 0 < nb && (self.lastNeed = nb - 2), 
            nb;
            if (--j < i || -2 === nb) return 0;
            if (0 <= (nb = utf8CheckByte(buf[j]))) return 0 < nb && (2 === nb ? nb = 0 : self.lastNeed = nb - 3), 
            nb;
            return 0;
        }(this, buf, i);
        if (!this.lastNeed) return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        return buf.copy(this.lastChar, 0, end), buf.toString("utf8", i, end);
    }, 
    // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
    StringDecoder.prototype.fillLast = function(buf) {
        if (this.lastNeed <= buf.length) return buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), 
        this.lastChar.toString(this.encoding, 0, this.lastTotal);
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length), this.lastNeed -= buf.length;
    };
}, 
/* 114 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    // a transform stream is a readable/writable stream where you do
    // something with the data.  Sometimes it's called a "filter",
    // but that's not a great name for it, since that implies a thing where
    // some bits pass through, and others are simply ignored.  (That would
    // be a valid example of a transform, of course.)
    //
    // While the output is causally related to the input, it's not a
    // necessarily symmetric or synchronous transformation.  For example,
    // a zlib stream might take multiple plain-text writes(), and then
    // emit a single compressed chunk some time in the future.
    //
    // Here's how this works:
    //
    // The Transform stream has all the aspects of the readable and writable
    // stream classes.  When you write(chunk), that calls _write(chunk,cb)
    // internally, and returns false if there's a lot of pending writes
    // buffered up.  When you call read(), that calls _read(n) until
    // there's enough pending readable data buffered up.
    //
    // In a transform stream, the written data is placed in a buffer.  When
    // _read(n) is called, it transforms the queued up data, calling the
    // buffered _write cb's as it consumes chunks.  If consuming a single
    // written chunk would result in multiple output chunks, then the first
    // outputted bit calls the readcb, and subsequent chunks just go into
    // the read buffer, and will cause it to emit 'readable' if necessary.
    //
    // This way, back-pressure is actually determined by the reading side,
    // since _read has to be called to start processing a new chunk.  However,
    // a pathological inflate type of transform can cause excessive buffering
    // here.  For example, imagine a stream where every byte of input is
    // interpreted as an integer from 0-255, and then results in that many
    // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
    // 1kb of data being output.  In this case, you could write a very small
    // amount of input, and end up with a very large amount of output.  In
    // such a pathological inflating mechanism, there'd be no way to tell
    // the system to stop doing the transform.  A single 4MB write could
    // cause the system to run out of memory.
    //
    // However, even in such a pathological case, only a single written chunk
    // would be consumed, and then the rest would wait (un-transformed) until
    // the results of the previous transformed chunk were consumed.
        module.exports = Transform;
    var Duplex = __webpack_require__(33), util = __webpack_require__(51);
    /*<replacement>*/    function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
        Duplex.call(this, options), this._transformState = {
            afterTransform: function afterTransform(er, data) {
                var ts = this._transformState;
                ts.transforming = !1;
                var cb = ts.writecb;
                if (!cb) return this.emit("error", new Error("write callback called multiple times"));
                ts.writechunk = null, (ts.writecb = null) != data && // single equals check for both `null` and `undefined`
                this.push(data), cb(er);
                var rs = this._readableState;
                rs.reading = !1, (rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark);
            }.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, 
        // start out asking for a readable event once data is transformed.
        this._readableState.needReadable = !0, 
        // we have implemented the _read method, and done the other things
        // that Readable wants before the first _read call, so unset the
        // sync guard flag.
        this._readableState.sync = !1, options && ("function" == typeof options.transform && (this._transform = options.transform), 
        "function" == typeof options.flush && (this._flush = options.flush)), 
        // When the writable side finishes, then flush out anything remaining.
        this.on("prefinish", prefinish);
    }
    function prefinish() {
        var _this = this;
        "function" == typeof this._flush ? this._flush(function(er, data) {
            done(_this, er, data);
        }) : done(this, null, null);
    }
    function done(stream, er, data) {
        if (er) return stream.emit("error", er);
        // if there's nothing in the write buffer, then that means
        // that nothing more will ever be provided
        if (null != data && // single equals check for both `null` and `undefined`
        stream.push(data), stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return stream.push(null);
    }
    /***/    util.inherits = __webpack_require__(44), 
    /*</replacement>*/
    util.inherits(Transform, Duplex), Transform.prototype.push = function(chunk, encoding) {
        return this._transformState.needTransform = !1, Duplex.prototype.push.call(this, chunk, encoding);
    }, 
    // This is the part where you do stuff!
    // override this function in implementation classes.
    // 'chunk' is an input chunk.
    //
    // Call `push(newChunk)` to pass along transformed output
    // to the readable side.  You may call 'push' zero or more times.
    //
    // Call `cb(err)` when you are done with this chunk.  If you pass
    // an error, then that'll put the hurt on the whole operation.  If you
    // never call cb(), then you'll never get another chunk.
    Transform.prototype._transform = function(chunk, encoding, cb) {
        throw new Error("_transform() is not implemented");
    }, Transform.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        if (ts.writecb = cb, ts.writechunk = chunk, ts.writeencoding = encoding, !ts.transforming) {
            var rs = this._readableState;
            (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark);
        }
    }, 
    // Doesn't matter what the args are here.
    // _transform does all the work.
    // That we got here means that the readable side wants more data.
    Transform.prototype._read = function(n) {
        var ts = this._transformState;
        null !== ts.writechunk && ts.writecb && !ts.transforming ? (ts.transforming = !0, 
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform)) : 
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = !0;
    }, Transform.prototype._destroy = function(err, cb) {
        var _this2 = this;
        Duplex.prototype._destroy.call(this, err, function(err2) {
            cb(err2), _this2.emit("close");
        });
    };
}, 
/* 115 */
/***/ function(module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(7) && !__webpack_require__(3)(function() {
        return 7 != Object.defineProperty(__webpack_require__(79)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
    /***/}, 
/* 116 */
/***/ function(module, exports, __webpack_require__) {
    exports.f = __webpack_require__(5);
    /***/}, 
/* 117 */
/***/ function(module, exports, __webpack_require__) {
    var has = __webpack_require__(14), toIObject = __webpack_require__(15), arrayIndexOf = __webpack_require__(60)(!1), IE_PROTO = __webpack_require__(81)("IE_PROTO");
    module.exports = function(object, names) {
        var key, O = toIObject(object), i = 0, result = [];
        for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
                for (;names.length > i; ) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
        return result;
    };
}, 
/* 118 */
/***/ function(module, exports, __webpack_require__) {
    var dP = __webpack_require__(8), anObject = __webpack_require__(1), getKeys = __webpack_require__(36);
    module.exports = __webpack_require__(7) ? Object.defineProperties : function(O, Properties) {
        anObject(O);
        for (var P, keys = getKeys(Properties), length = keys.length, i = 0; i < length; ) dP.f(O, P = keys[i++], Properties[P]);
        return O;
    };
}, 
/* 119 */
/***/ function(module, exports, __webpack_require__) {
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = __webpack_require__(15), gOPN = __webpack_require__(39).f, toString = {}.toString, windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    module.exports.f = function(it) {
        return windowNames && "[object Window]" == toString.call(it) ? function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        }(it) : gOPN(toIObject(it));
    };
}, 
/* 120 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 19.1.2.1 Object.assign(target, source, ...)
        var getKeys = __webpack_require__(36), gOPS = __webpack_require__(61), pIE = __webpack_require__(53), toObject = __webpack_require__(9), IObject = __webpack_require__(52), $assign = Object.assign;
    // should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || __webpack_require__(3)(function() {
        var A = {}, B = {}, S = Symbol(), K = "abcdefghijklmnopqrst";
        return A[S] = 7, K.split("").forEach(function(k) {
            B[k] = k;
        }), 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K;
    }) ? function(target, source) {
        for (// eslint-disable-line no-unused-vars
        var T = toObject(target), aLen = arguments.length, index = 1, getSymbols = gOPS.f, isEnum = pIE.f; index < aLen; ) for (var key, S = IObject(arguments[index++]), keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S), length = keys.length, j = 0; j < length; ) isEnum.call(S, key = keys[j++]) && (T[key] = S[key]);
        return T;
    } : $assign;
}, 
/* 121 */
/***/ function(module, exports) {
    // 7.2.9 SameValue(x, y)
    module.exports = Object.is || function(x, y) {
        // eslint-disable-next-line no-self-compare
        return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y;
    };
    /***/}, 
/* 122 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var aFunction = __webpack_require__(10), isObject = __webpack_require__(4), invoke = __webpack_require__(123), arraySlice = [].slice, factories = {};
    module.exports = Function.bind || function(that /* , ...args */) {
        var fn = aFunction(this), partArgs = arraySlice.call(arguments, 1), bound = function() {
            var args = partArgs.concat(arraySlice.call(arguments));
            return this instanceof bound ? function(F, len, args) {
                if (!(len in factories)) {
                    for (var n = [], i = 0; i < len; i++) n[i] = "a[" + i + "]";
                    // eslint-disable-next-line no-new-func
                                        factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
                }
                return factories[len](F, args);
            }(fn, args.length, args) : invoke(fn, args, that);
        };
        return isObject(fn.prototype) && (bound.prototype = fn.prototype), bound;
    };
}, 
/* 123 */
/***/ function(module, exports) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function(fn, args, that) {
        var un = that === undefined;
        switch (args.length) {
          case 0:
            return un ? fn() : fn.call(that);

          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);

          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
        }
        return fn.apply(that, args);
    };
    /***/}, 
/* 124 */
/***/ function(module, exports, __webpack_require__) {
    var $parseInt = __webpack_require__(2).parseInt, $trim = __webpack_require__(47).trim, ws = __webpack_require__(85), hex = /^[-+]?0[xX]/;
    module.exports = 8 !== $parseInt(ws + "08") || 22 !== $parseInt(ws + "0x16") ? function parseInt(str, radix) {
        var string = $trim(String(str), 3);
        return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
    } : $parseInt;
}, 
/* 125 */
/***/ function(module, exports, __webpack_require__) {
    var $parseFloat = __webpack_require__(2).parseFloat, $trim = __webpack_require__(47).trim;
    module.exports = 1 / $parseFloat(__webpack_require__(85) + "-0") != -Infinity ? function parseFloat(str) {
        var string = $trim(String(str), 3), result = $parseFloat(string);
        return 0 === result && "-" == string.charAt(0) ? -0 : result;
    } : $parseFloat;
}, 
/* 126 */
/***/ function(module, exports, __webpack_require__) {
    var cof = __webpack_require__(20);
    module.exports = function(it, msg) {
        if ("number" != typeof it && "Number" != cof(it)) throw TypeError(msg);
        return +it;
    };
}, 
/* 127 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.3 Number.isInteger(number)
    var isObject = __webpack_require__(4), floor = Math.floor;
    module.exports = function(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
    };
}, 
/* 128 */
/***/ function(module, exports) {
    // 20.2.2.20 Math.log1p(x)
    module.exports = Math.log1p || function(x) {
        return -1e-8 < (x = +x) && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };
    /***/}, 
/* 129 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.16 Math.fround(x)
    var sign = __webpack_require__(88), pow = Math.pow, EPSILON = pow(2, -52), EPSILON32 = pow(2, -23), MAX32 = pow(2, 127) * (2 - EPSILON32), MIN32 = pow(2, -126);
    module.exports = Math.fround || function(x) {
        var a, result, $abs = Math.abs(x), $sign = sign(x);
        return $abs < MIN32 ? $sign * ($abs / MIN32 / EPSILON32 + 1 / EPSILON - 1 / EPSILON) * MIN32 * EPSILON32 : 
        // eslint-disable-next-line no-self-compare
        MAX32 < (result = (a = (1 + EPSILON32 / EPSILON) * $abs) - (a - $abs)) || result != result ? $sign * Infinity : $sign * result;
    };
}, 
/* 130 */
/***/ function(module, exports, __webpack_require__) {
    // call something on iterator step with safe closing on error
    var anObject = __webpack_require__(1);
    module.exports = function(iterator, fn, value, entries) {
        try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
                } catch (e) {
            var ret = iterator["return"];
            throw ret !== undefined && anObject(ret.call(iterator)), e;
        }
    };
}, 
/* 131 */
/***/ function(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(10), toObject = __webpack_require__(9), IObject = __webpack_require__(52), toLength = __webpack_require__(6);
    module.exports = function(that, callbackfn, aLen, memo, isRight) {
        aFunction(callbackfn);
        var O = toObject(that), self = IObject(O), length = toLength(O.length), index = isRight ? length - 1 : 0, i = isRight ? -1 : 1;
        if (aLen < 2) for (;;) {
            if (index in self) {
                memo = self[index], index += i;
                break;
            }
            if (index += i, isRight ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
        }
        for (;isRight ? 0 <= index : index < length; index += i) index in self && (memo = callbackfn(memo, self[index], index, O));
        return memo;
    };
}, 
/* 132 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
        var toObject = __webpack_require__(9), toAbsoluteIndex = __webpack_require__(37), toLength = __webpack_require__(6);
    module.exports = [].copyWithin || function(target /* = 0 */ , start /* = 0, end = @length */) {
        var O = toObject(this), len = toLength(O.length), to = toAbsoluteIndex(target, len), from = toAbsoluteIndex(start, len), end = 2 < arguments.length ? arguments[2] : undefined, count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to), inc = 1;
        for (from < to && to < from + count && (inc = -1, from += count - 1, to += count - 1); 0 < count--; ) from in O ? O[to] = O[from] : delete O[to], 
        to += inc, from += inc;
        return O;
    };
}, 
/* 133 */
/***/ function(module, exports) {
    module.exports = function(done, value) {
        return {
            value: value,
            done: !!done
        };
    };
    /***/}, 
/* 134 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var regexpExec = __webpack_require__(100);
    __webpack_require__(0)({
        target: "RegExp",
        proto: !0,
        forced: regexpExec !== /./.exec
    }, {
        exec: regexpExec
    });
}, 
/* 135 */
/***/ function(module, exports, __webpack_require__) {
    // 21.2.5.3 get RegExp.prototype.flags()
    __webpack_require__(7) && "g" != /./g.flags && __webpack_require__(8).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: __webpack_require__(54)
    })
    /***/;
}, 
/* 136 */
/***/ function(module, exports) {
    module.exports = function(exec) {
        try {
            return {
                e: !1,
                v: exec()
            };
        } catch (e) {
            return {
                e: !0,
                v: e
            };
        }
    };
    /***/}, 
/* 137 */
/***/ function(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(1), isObject = __webpack_require__(4), newPromiseCapability = __webpack_require__(104);
    module.exports = function(C, x) {
        if (anObject(C), isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        return (0, promiseCapability.resolve)(x), promiseCapability.promise;
    };
}, 
/* 138 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var strong = __webpack_require__(139), validate = __webpack_require__(49);
    // 23.1 Map Objects
    module.exports = __webpack_require__(69)("Map", function(get) {
        return function() {
            return get(this, 0 < arguments.length ? arguments[0] : undefined);
        };
    }, {
        // 23.1.3.6 Map.prototype.get(key)
        get: function(key) {
            var entry = strong.getEntry(validate(this, "Map"), key);
            return entry && entry.v;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function(key, value) {
            return strong.def(validate(this, "Map"), 0 === key ? 0 : key, value);
        }
    }, strong, !0);
}, 
/* 139 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var dP = __webpack_require__(8).f, create = __webpack_require__(38), redefineAll = __webpack_require__(43), ctx = __webpack_require__(19), anInstance = __webpack_require__(41), forOf = __webpack_require__(42), $iterDefine = __webpack_require__(90), step = __webpack_require__(133), setSpecies = __webpack_require__(40), DESCRIPTORS = __webpack_require__(7), fastKey = __webpack_require__(30).fastKey, validate = __webpack_require__(49), SIZE = DESCRIPTORS ? "_s" : "size", getEntry = function(that, key) {
        // fast case
        var entry, index = fastKey(key);
        if ("F" !== index) return that._i[index];
        // frozen object case
                for (entry = that._f; entry; entry = entry.n) if (entry.k == key) return entry;
    };
    module.exports = {
        getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
                anInstance(that, C, NAME, "_i"), that._t = NAME, // collection type
                that._i = create(null), // index
                that._f = undefined, // first entry
                that._l = undefined, // last entry
                that[SIZE] = 0, // size
                iterable != undefined && forOf(iterable, IS_MAP, that[ADDER], that);
            });
            return redefineAll(C.prototype, {
                // 23.1.3.1 Map.prototype.clear()
                // 23.2.3.2 Set.prototype.clear()
                clear: function() {
                    for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) entry.r = !0, 
                    entry.p && (entry.p = entry.p.n = undefined), delete data[entry.i];
                    that._f = that._l = undefined, that[SIZE] = 0;
                },
                // 23.1.3.3 Map.prototype.delete(key)
                // 23.2.3.4 Set.prototype.delete(value)
                "delete": function(key) {
                    var that = validate(this, NAME), entry = getEntry(that, key);
                    if (entry) {
                        var next = entry.n, prev = entry.p;
                        delete that._i[entry.i], entry.r = !0, prev && (prev.n = next), next && (next.p = prev), 
                        that._f == entry && (that._f = next), that._l == entry && (that._l = prev), that[SIZE]--;
                    }
                    return !!entry;
                },
                // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                forEach: function(callbackfn /* , that = undefined */) {
                    validate(this, NAME);
                    for (var entry, f = ctx(callbackfn, 1 < arguments.length ? arguments[1] : undefined, 3); entry = entry ? entry.n : this._f; ) 
                    // revert to the last existing entry
                    for (f(entry.v, entry.k, this); entry && entry.r; ) entry = entry.p;
                },
                // 23.1.3.7 Map.prototype.has(key)
                // 23.2.3.7 Set.prototype.has(value)
                has: function(key) {
                    return !!getEntry(validate(this, NAME), key);
                }
            }), DESCRIPTORS && dP(C.prototype, "size", {
                get: function() {
                    return validate(this, NAME)[SIZE];
                }
            }), C;
        },
        def: function(that, key, value) {
            var prev, index, entry = getEntry(that, key);
            // change existing entry
            return entry ? entry.v = value : (that._l = entry = {
                i: index = fastKey(key, !0),
                // <- index
                k: key,
                // <- key
                v: value,
                // <- value
                p: prev = that._l,
                // <- previous entry
                n: undefined,
                // <- next entry
                r: !1
            }, that._f || (that._f = entry), prev && (prev.n = entry), that[SIZE]++, 
            // add to index
            "F" !== index && (that._i[index] = entry)), that;
        },
        getEntry: getEntry,
        setStrong: function(C, NAME, IS_MAP) {
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            $iterDefine(C, NAME, function(iterated, kind) {
                this._t = validate(iterated, NAME), // target
                this._k = kind, // kind
                this._l = undefined;
            }, function() {
                // revert to the last existing entry
                for (var kind = this._k, entry = this._l; entry && entry.r; ) entry = entry.p;
                // get next entry
                                return this._t && (this._l = entry = entry ? entry.n : this._t._f) ? step(0, 
                // return step by kind
                "keys" == kind ? entry.k : "values" == kind ? entry.v : [ entry.k, entry.v ]) : (
                // or finish the iteration
                this._t = undefined, step(1));
            }, IS_MAP ? "entries" : "values", !IS_MAP, !0), 
            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(NAME);
        }
    };
}, 
/* 140 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var strong = __webpack_require__(139), validate = __webpack_require__(49);
    // 23.2 Set Objects
    module.exports = __webpack_require__(69)("Set", function(get) {
        return function Set() {
            return get(this, 0 < arguments.length ? arguments[0] : undefined);
        };
    }, {
        // 23.2.3.1 Set.prototype.add(value)
        add: function(value) {
            return strong.def(validate(this, "Set"), value = 0 === value ? 0 : value, value);
        }
    }, strong);
}, 
/* 141 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var InternalMap, each = __webpack_require__(26)(0), redefine = __webpack_require__(12), meta = __webpack_require__(30), assign = __webpack_require__(120), weak = __webpack_require__(142), isObject = __webpack_require__(4), fails = __webpack_require__(3), validate = __webpack_require__(49), getWeak = meta.getWeak, isExtensible = Object.isExtensible, uncaughtFrozenStore = weak.ufstore, tmp = {}, wrapper = function(get) {
        return function() {
            return get(this, 0 < arguments.length ? arguments[0] : undefined);
        };
    }, methods = {
        // 23.3.3.3 WeakMap.prototype.get(key)
        get: function(key) {
            if (isObject(key)) {
                var data = getWeak(key);
                return !0 === data ? uncaughtFrozenStore(validate(this, "WeakMap")).get(key) : data ? data[this._i] : undefined;
            }
        },
        // 23.3.3.5 WeakMap.prototype.set(key, value)
        set: function(key, value) {
            return weak.def(validate(this, "WeakMap"), key, value);
        }
    }, $WeakMap = module.exports = __webpack_require__(69)("WeakMap", wrapper, methods, weak, !0, !0);
    // IE11 WeakMap frozen keys fix
    fails(function() {
        return 7 != new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp);
    }) && (assign((InternalMap = weak.getConstructor(wrapper, "WeakMap")).prototype, methods), 
    meta.NEED = !0, each([ "delete", "has", "get", "set" ], function(key) {
        var proto = $WeakMap.prototype, method = proto[key];
        redefine(proto, key, function(a, b) {
            // store frozen objects on internal weakmap shim
            if (!isObject(a) || isExtensible(a)) return method.call(this, a, b);
            this._f || (this._f = new InternalMap());
            var result = this._f[key](a, b);
            return "set" == key ? this : result;
            // store all the rest on native weakmap
                });
    }))
    /***/;
}, 
/* 142 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var redefineAll = __webpack_require__(43), getWeak = __webpack_require__(30).getWeak, anObject = __webpack_require__(1), isObject = __webpack_require__(4), anInstance = __webpack_require__(41), forOf = __webpack_require__(42), createArrayMethod = __webpack_require__(26), $has = __webpack_require__(14), validate = __webpack_require__(49), arrayFind = createArrayMethod(5), arrayFindIndex = createArrayMethod(6), id = 0, uncaughtFrozenStore = function(that) {
        return that._l || (that._l = new UncaughtFrozenStore());
    }, UncaughtFrozenStore = function() {
        this.a = [];
    }, findUncaughtFrozen = function(store, key) {
        return arrayFind(store.a, function(it) {
            return it[0] === key;
        });
    };
    UncaughtFrozenStore.prototype = {
        get: function(key) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) return entry[1];
        },
        has: function(key) {
            return !!findUncaughtFrozen(this, key);
        },
        set: function(key, value) {
            var entry = findUncaughtFrozen(this, key);
            entry ? entry[1] = value : this.a.push([ key, value ]);
        },
        "delete": function(key) {
            var index = arrayFindIndex(this.a, function(it) {
                return it[0] === key;
            });
            return ~index && this.a.splice(index, 1), !!~index;
        }
    }, module.exports = {
        getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
                anInstance(that, C, NAME, "_i"), that._t = NAME, // collection type
                that._i = id++, // collection id
                that._l = undefined, // leak store for uncaught frozen objects
                iterable != undefined && forOf(iterable, IS_MAP, that[ADDER], that);
            });
            return redefineAll(C.prototype, {
                // 23.3.3.2 WeakMap.prototype.delete(key)
                // 23.4.3.3 WeakSet.prototype.delete(value)
                "delete": function(key) {
                    if (!isObject(key)) return !1;
                    var data = getWeak(key);
                    return !0 === data ? uncaughtFrozenStore(validate(this, NAME))["delete"](key) : data && $has(data, this._i) && delete data[this._i];
                },
                // 23.3.3.4 WeakMap.prototype.has(key)
                // 23.4.3.4 WeakSet.prototype.has(value)
                has: function(key) {
                    if (!isObject(key)) return !1;
                    var data = getWeak(key);
                    return !0 === data ? uncaughtFrozenStore(validate(this, NAME)).has(key) : data && $has(data, this._i);
                }
            }), C;
        },
        def: function(that, key, value) {
            var data = getWeak(anObject(key), !0);
            return !0 === data ? uncaughtFrozenStore(that).set(key, value) : data[that._i] = value, 
            that;
        },
        ufstore: uncaughtFrozenStore
    };
}, 
/* 143 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/ecma262/#sec-toindex
    var toInteger = __webpack_require__(21), toLength = __webpack_require__(6);
    module.exports = function(it) {
        if (it === undefined) return 0;
        var number = toInteger(it), length = toLength(number);
        if (number !== length) throw RangeError("Wrong length!");
        return length;
    };
}, 
/* 144 */
/***/ function(module, exports, __webpack_require__) {
    // all object keys, includes non-enumerable and symbols
    var gOPN = __webpack_require__(39), gOPS = __webpack_require__(61), anObject = __webpack_require__(1), Reflect = __webpack_require__(2).Reflect;
    module.exports = Reflect && Reflect.ownKeys || function(it) {
        var keys = gOPN.f(anObject(it)), getSymbols = gOPS.f;
        return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
}, 
/* 145 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
        var isArray = __webpack_require__(62), isObject = __webpack_require__(4), toLength = __webpack_require__(6), ctx = __webpack_require__(19), IS_CONCAT_SPREADABLE = __webpack_require__(5)("isConcatSpreadable");
    module.exports = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        for (var element, spreadable, targetIndex = start, sourceIndex = 0, mapFn = !!mapper && ctx(mapper, thisArg, 3); sourceIndex < sourceLen; ) {
            if (sourceIndex in source) {
                if (element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex], 
                spreadable = !1, isObject(element) && (spreadable = (spreadable = element[IS_CONCAT_SPREADABLE]) !== undefined ? !!spreadable : isArray(element)), 
                spreadable && 0 < depth) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1; else {
                    if (9007199254740991 <= targetIndex) throw TypeError();
                    target[targetIndex] = element;
                }
                targetIndex++;
            }
            sourceIndex++;
        }
        return targetIndex;
    };
}, 
/* 146 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-string-pad-start-end
    var toLength = __webpack_require__(6), repeat = __webpack_require__(87), defined = __webpack_require__(24);
    module.exports = function(that, maxLength, fillString, left) {
        var S = String(defined(that)), stringLength = S.length, fillStr = fillString === undefined ? " " : String(fillString), intMaxLength = toLength(maxLength);
        if (intMaxLength <= stringLength || "" == fillStr) return S;
        var fillLen = intMaxLength - stringLength, stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        return stringFiller.length > fillLen && (stringFiller = stringFiller.slice(0, fillLen)), 
        left ? stringFiller + S : S + stringFiller;
    };
}, 
/* 147 */
/***/ function(module, exports, __webpack_require__) {
    var getKeys = __webpack_require__(36), toIObject = __webpack_require__(15), isEnum = __webpack_require__(53).f;
    module.exports = function(isEntries) {
        return function(it) {
            for (var key, O = toIObject(it), keys = getKeys(O), length = keys.length, i = 0, result = []; i < length; ) isEnum.call(O, key = keys[i++]) && result.push(isEntries ? [ key, O[key] ] : O[key]);
            return result;
        };
    };
}, 
/* 148 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var classof = __webpack_require__(46), from = __webpack_require__(149);
    module.exports = function(NAME) {
        return function() {
            if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
            return from(this);
        };
    };
}, 
/* 149 */
/***/ function(module, exports, __webpack_require__) {
    var forOf = __webpack_require__(42);
    module.exports = function(iter, ITERATOR) {
        var result = [];
        return forOf(iter, !1, result.push, result, ITERATOR), result;
    };
}, 
/* 150 */
/***/ function(module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    module.exports = Math.scale || function(x, inLow, inHigh, outLow, outHigh) {
        return 0 === arguments.length || x != x || inLow != inLow || inHigh != inHigh || outLow != outLow || outHigh != outHigh ? NaN : x === Infinity || x === -Infinity ? x : (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
    };
    /***/}, 
/* 151 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(152), __webpack_require__(174), __webpack_require__(175), __webpack_require__(376), 
    __webpack_require__(377), module.exports = __webpack_require__(378);
}, 
/* 152 */
/***/ function(module, exports, __webpack_require__) {
    var jstransform = __webpack_require__(153), through = __webpack_require__(159), utils = __webpack_require__(107), Syntax = jstransform.Syntax;
    function visitorExportsDefinePropertyGet(traverse, node, path, state) {
        var exportsStr = [ node.expression.arguments[0].name, ".", node.expression.arguments[1].value, " = ", node.expression.arguments[2].properties[1].value.body.body[0].argument.object.name, ".", node.expression.arguments[2].properties[1].value.body.body[0].argument.property.name ].join("");
        utils.append(exportsStr, state), utils.catchup(node.expression.range[1], state, function(text) {
            return "";
        });
    }
    visitorExportsDefinePropertyGet.test = function(node, path, state) {
        try {
            if (node.type === Syntax.ExpressionStatement && node.expression.type === Syntax.CallExpression && node.expression.callee.type === Syntax.MemberExpression && "Object" === node.expression.callee.object.name && "defineProperty" === node.expression.callee.property.name && "exports" === node.expression.arguments[0].name && "__esModule" !== node.expression.arguments[1].value && 2 === node.expression.arguments[2].properties.length && "enumerable" === node.expression.arguments[2].properties[0].key.name && "get" === node.expression.arguments[2].properties[1].key.name) return !0;
        } catch (error) {
            // catch error;
        }
        return !1;
    };
    var visitorList = [ visitorExportsDefinePropertyGet ];
    function transform(originalCode) {
        return jstransform.transform(visitorList, originalCode).code;
    }
    module.exports = function process(file) {
        if (/\.json$/.test(file)) return through();
        var data = "";
        return through(function write(chunk) {
            data += chunk;
        }, function compile() {
            var source;
            try {
                source = transform(data);
            } catch (e) {
                return this.emit("error", e);
            }
            this.queue(source), this.queue(null);
        });
    }, module.exports.transform = transform, module.exports.visitorList = visitorList;
}, 
/* 153 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
    /*jslint node: true*/    var esprima = __webpack_require__(106), utils = __webpack_require__(107), getBoundaryNode = utils.getBoundaryNode, declareIdentInScope = utils.declareIdentInLocalScope, initScopeMetadata = utils.initScopeMetadata, Syntax = esprima.Syntax;
    /**
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
    function traverse(node, path, state) {
        /*jshint -W004*/
        // Create a scope stack entry if this is the first node we've encountered in
        // its local scope
        var startIndex = null, parentNode = path[0];
        if (!Array.isArray(node) && state.localScope.parentNode !== parentNode) {
            if (
            /**
 * @param {object} node
 * @param {object} parentNode
 * @return {boolean}
 */
            function _nodeIsClosureScopeBoundary(node, parentNode) {
                if (node.type === Syntax.Program) return !0;
                var parentIsFunction = parentNode.type === Syntax.FunctionDeclaration || parentNode.type === Syntax.FunctionExpression || parentNode.type === Syntax.ArrowFunctionExpression, parentIsCurlylessArrowFunc = parentNode.type === Syntax.ArrowFunctionExpression && node === parentNode.body;
                return parentIsFunction && (node.type === Syntax.BlockStatement || parentIsCurlylessArrowFunc);
            }(node, parentNode)) {
                var scopeIsStrict = state.scopeIsStrict;
                if (scopeIsStrict || node.type !== Syntax.BlockStatement && node.type !== Syntax.Program || (scopeIsStrict = 0 < node.body.length && node.body[0].type === Syntax.ExpressionStatement && node.body[0].expression.type === Syntax.Literal && "use strict" === node.body[0].expression.value), 
                node.type === Syntax.Program) startIndex = state.g.buffer.length, state = utils.updateState(state, {
                    scopeIsStrict: scopeIsStrict
                }); else {
                    // Include function arg identifiers in the scope boundaries of the
                    // function
                    if (startIndex = state.g.buffer.length + 1, state = utils.updateState(state, {
                        localScope: {
                            parentNode: parentNode,
                            parentScope: state.localScope,
                            identifiers: {},
                            tempVarIndex: 0,
                            tempVars: []
                        },
                        scopeIsStrict: scopeIsStrict
                    }), 
                    // All functions have an implicit 'arguments' object in scope
                    declareIdentInScope("arguments", initScopeMetadata(node), state), 0 < parentNode.params.length) for (var param, metadata = initScopeMetadata(parentNode, path.slice(1), path[0]), i = 0; i < parentNode.params.length; i++) (param = parentNode.params[i]).type === Syntax.Identifier && declareIdentInScope(param.name, metadata, state);
                    // Include rest arg identifiers in the scope boundaries of their
                    // functions
                                        if (parentNode.rest) {
                        metadata = initScopeMetadata(parentNode, path.slice(1), path[0]);
                        declareIdentInScope(parentNode.rest.name, metadata, state);
                    }
                    // Named FunctionExpressions scope their name within the body block of
                    // themselves only
                                        if (parentNode.type === Syntax.FunctionExpression && parentNode.id) {
                        var metaData = initScopeMetadata(parentNode, path.parentNodeslice, parentNode);
                        declareIdentInScope(parentNode.id.name, metaData, state);
                    }
                }
                // Traverse and find all local identifiers in this closure first to
                // account for function/variable declaration hoisting
                                collectClosureIdentsAndTraverse(node, path, state);
            }
            if (function _nodeIsBlockScopeBoundary(node, parentNode) {
                return node.type !== Syntax.Program && node.type === Syntax.BlockStatement && parentNode.type === Syntax.CatchClause;
            }(node, parentNode)) {
                if (startIndex = state.g.buffer.length, state = utils.updateState(state, {
                    localScope: {
                        parentNode: parentNode,
                        parentScope: state.localScope,
                        identifiers: {},
                        tempVarIndex: 0,
                        tempVars: []
                    }
                }), parentNode.type === Syntax.CatchClause) {
                    metadata = initScopeMetadata(parentNode, path.slice(1), parentNode);
                    declareIdentInScope(parentNode.param.name, metadata, state);
                }
                collectBlockIdentsAndTraverse(node, path, state);
            }
        }
        // Only catchup() before and after traversing a child node
                utils.analyzeAndTraverse(walker, function traverser(node, path, state) {
            node.range && utils.catchup(node.range[0], state), traverse(node, path, state), 
            node.range && utils.catchup(node.range[1], state);
        }, node, path, state), 
        // Inject temp variables into the scope.
        null !== startIndex && utils.injectTempVarDeclarations(state, startIndex);
    }
    function collectClosureIdentsAndTraverse(node, path, state) {
        utils.analyzeAndTraverse(visitLocalClosureIdentifiers, collectClosureIdentsAndTraverse, node, path, state);
    }
    function collectBlockIdentsAndTraverse(node, path, state) {
        utils.analyzeAndTraverse(visitLocalBlockIdentifiers, collectBlockIdentsAndTraverse, node, path, state);
    }
    function visitLocalClosureIdentifiers(node, path, state) {
        var metaData;
        switch (node.type) {
          case Syntax.ArrowFunctionExpression:
          case Syntax.FunctionExpression:
            // Function expressions don't get their names (if there is one) added to
            // the closure scope they're defined in
            return !1;

          case Syntax.ClassDeclaration:
          case Syntax.ClassExpression:
          case Syntax.FunctionDeclaration:
            return node.id && (metaData = initScopeMetadata(getBoundaryNode(path), path.slice(), node), 
            declareIdentInScope(node.id.name, metaData, state)), !1;

          case Syntax.VariableDeclarator:
            // Variables have function-local scope
            "var" === path[0].kind && (metaData = initScopeMetadata(getBoundaryNode(path), path.slice(), node), 
            declareIdentInScope(node.id.name, metaData, state));
        }
    }
    function visitLocalBlockIdentifiers(node, path, state) {
        // TODO: Support 'let' here...maybe...one day...or something...
        if (node.type === Syntax.CatchClause) return !1;
    }
    function walker(node, path, state) {
        for (var visitors = state.g.visitors, i = 0; i < visitors.length; i++) if (visitors[i].test(node, path, state)) return visitors[i](traverse, node, path, state);
    }
    var _astCache = {};
    exports.transform = 
    /**
 * Applies all available transformations to the source
 * @param {array} visitors
 * @param {string} source
 * @param {?object} options
 * @return {object}
 */
    function transform(visitors, source, options) {
        var ast;
        options = options || {};
        try {
            ast = function getAstForSource(source, options) {
                if (_astCache[source] && !options.disableAstCache) return _astCache[source];
                var ast = esprima.parse(source, {
                    comment: !0,
                    loc: !0,
                    range: !0,
                    sourceType: options.sourceType
                });
                return options.disableAstCache || (_astCache[source] = ast), ast;
            }(source, options);
        } catch (e) {
            throw e.message = "Parse Error: " + e.message, e;
        }
        var state = utils.createState(source, ast, options);
        if (state.g.visitors = visitors, options.sourceMap) {
            var SourceMapGenerator = __webpack_require__(155).SourceMapGenerator;
            state.g.sourceMap = new SourceMapGenerator({
                file: options.filename || "transformed.js"
            });
        }
        traverse(ast, [], state), utils.catchup(source.length, state);
        var ret = {
            code: state.g.buffer,
            extra: state.g.extra
        };
        return options.sourceMap && (ret.sourceMap = state.g.sourceMap, ret.sourceMapFilename = options.filename || "source.js"), 
        ret;
    }, exports.Syntax = Syntax;
}, 
/* 154 */
/***/ function(module, exports) {
    /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
    var docblockRe = /^\s*(\/\*\*(.|\r?\n)*?\*\/)/, ltrimRe = /^\s*/;
    var commentStartRe = /^\/\*\*?/, commentEndRe = /\*+\/$/, wsRe = /[\t ]+/g, stringStartRe = /(\r?\n|^) *\*/g, multilineRe = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *([^@\r\n\s][^@\r\n]+?) *\r?\n/g, propertyRe = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
    /**
 * @param {String} contents
 * @return {Array}
 */
    function parse(docblock) {
        docblock = docblock.replace(commentStartRe, "").replace(commentEndRe, "").replace(wsRe, " ").replace(stringStartRe, "$1");
        for (
        // Normalize multi-line directives
        var prev = ""; prev != docblock; ) docblock = (prev = docblock).replace(multilineRe, "\n$1 $2\n");
        docblock = docblock.trim();
        for (var match, result = []; match = propertyRe.exec(docblock); ) result.push([ match[1], match[2] ]);
        return result;
    }
    /**
 * Same as parse but returns an object of prop: value instead of array of paris
 * If a property appers more than once the last one will be returned
 *
 * @param {String} contents
 * @return {Object}
 */    exports.extract = 
    /**
 * @param {String} contents
 * @return {String}
 */
    function extract(contents) {
        var match = contents.match(docblockRe);
        return match && match[0].replace(ltrimRe, "") || "";
    }, exports.parse = parse, exports.parseAsObject = function parseAsObject(docblock) {
        for (var pairs = parse(docblock), result = {}, i = 0; i < pairs.length; i++) result[pairs[i][0]] = pairs[i][1];
        return result;
    };
}, 
/* 155 */
/***/ function(module, exports, __webpack_require__) {
    /*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
    exports.SourceMapGenerator = __webpack_require__(156).SourceMapGenerator, exports.SourceMapConsumer = __webpack_require__(157).SourceMapConsumer, 
    exports.SourceNode = __webpack_require__(158).SourceNode;
}, 
/* 156 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(module) {
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if ("function" != typeof define) var define = __webpack_require__(74)(module, __webpack_require__(75));
        define(function(require, exports, module) {
            var base64VLQ = require("./base64-vlq"), util = require("./util"), ArraySet = require("./array-set").ArraySet, MappingList = require("./mapping-list").MappingList;
            /**
   * An instance of the SourceMapGenerator represents a source map which is
   * being built incrementally. You may pass an object with the following
   * properties:
   *
   *   - file: The filename of the generated source.
   *   - sourceRoot: A root for all relative URLs in this source map.
   */
            function SourceMapGenerator(aArgs) {
                aArgs || (aArgs = {}), this._file = util.getArg(aArgs, "file", null), this._sourceRoot = util.getArg(aArgs, "sourceRoot", null), 
                this._skipValidation = util.getArg(aArgs, "skipValidation", !1), this._sources = new ArraySet(), 
                this._names = new ArraySet(), this._mappings = new MappingList(), this._sourcesContents = null;
            }
            SourceMapGenerator.prototype._version = 3, 
            /**
   * Creates a new SourceMapGenerator based on a SourceMapConsumer
   *
   * @param aSourceMapConsumer The SourceMap.
   */
            SourceMapGenerator.fromSourceMap = function(aSourceMapConsumer) {
                var sourceRoot = aSourceMapConsumer.sourceRoot, generator = new SourceMapGenerator({
                    file: aSourceMapConsumer.file,
                    sourceRoot: sourceRoot
                });
                return aSourceMapConsumer.eachMapping(function(mapping) {
                    var newMapping = {
                        generated: {
                            line: mapping.generatedLine,
                            column: mapping.generatedColumn
                        }
                    };
                    null != mapping.source && (newMapping.source = mapping.source, null != sourceRoot && (newMapping.source = util.relative(sourceRoot, newMapping.source)), 
                    newMapping.original = {
                        line: mapping.originalLine,
                        column: mapping.originalColumn
                    }, null != mapping.name && (newMapping.name = mapping.name)), generator.addMapping(newMapping);
                }), aSourceMapConsumer.sources.forEach(function(sourceFile) {
                    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                    null != content && generator.setSourceContent(sourceFile, content);
                }), generator;
            }, 
            /**
   * Add a single mapping from original source line and column to the generated
   * source's line and column for this source map being created. The mapping
   * object should have the following properties:
   *
   *   - generated: An object with the generated line and column positions.
   *   - original: An object with the original line and column positions.
   *   - source: The original source file (relative to the sourceRoot).
   *   - name: An optional original token name for this mapping.
   */
            SourceMapGenerator.prototype.addMapping = function(aArgs) {
                var generated = util.getArg(aArgs, "generated"), original = util.getArg(aArgs, "original", null), source = util.getArg(aArgs, "source", null), name = util.getArg(aArgs, "name", null);
                this._skipValidation || this._validateMapping(generated, original, source, name), 
                null == source || this._sources.has(source) || this._sources.add(source), null == name || this._names.has(name) || this._names.add(name), 
                this._mappings.add({
                    generatedLine: generated.line,
                    generatedColumn: generated.column,
                    originalLine: null != original && original.line,
                    originalColumn: null != original && original.column,
                    source: source,
                    name: name
                });
            }, 
            /**
   * Set the source content for a source file.
   */
            SourceMapGenerator.prototype.setSourceContent = function(aSourceFile, aSourceContent) {
                var source = aSourceFile;
                null != this._sourceRoot && (source = util.relative(this._sourceRoot, source)), 
                null != aSourceContent ? (
                // Add the source content to the _sourcesContents map.
                // Create a new _sourcesContents map if the property is null.
                this._sourcesContents || (this._sourcesContents = {}), this._sourcesContents[util.toSetString(source)] = aSourceContent) : this._sourcesContents && (
                // Remove the source file from the _sourcesContents map.
                // If the _sourcesContents map is empty, set the property to null.
                delete this._sourcesContents[util.toSetString(source)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
            }, 
            /**
   * Applies the mappings of a sub-source-map for a specific source file to the
   * source map being generated. Each mapping to the supplied source file is
   * rewritten using the supplied source map. Note: The resolution for the
   * resulting mappings is the minimium of this map and the supplied map.
   *
   * @param aSourceMapConsumer The source map to be applied.
   * @param aSourceFile Optional. The filename of the source file.
   *        If omitted, SourceMapConsumer's file property will be used.
   * @param aSourceMapPath Optional. The dirname of the path to the source map
   *        to be applied. If relative, it is relative to the SourceMapConsumer.
   *        This parameter is needed when the two source maps aren't in the same
   *        directory, and the source map to be applied contains relative source
   *        paths. If so, those relative source paths need to be rewritten
   *        relative to the SourceMapGenerator.
   */
            SourceMapGenerator.prototype.applySourceMap = function(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
                var sourceFile = aSourceFile;
                // If aSourceFile is omitted, we will use the file property of the SourceMap
                                if (null == aSourceFile) {
                    if (null == aSourceMapConsumer.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    sourceFile = aSourceMapConsumer.file;
                }
                var sourceRoot = this._sourceRoot;
                // Make "sourceFile" relative if an absolute Url is passed.
                                null != sourceRoot && (sourceFile = util.relative(sourceRoot, sourceFile));
                // Applying the SourceMap can add and remove items from the sources and
                // the names array.
                                var newSources = new ArraySet(), newNames = new ArraySet();
                // Find mappings for the "sourceFile"
                this._mappings.unsortedForEach(function(mapping) {
                    if (mapping.source === sourceFile && null != mapping.originalLine) {
                        // Check if it can be mapped by the source map, then update the mapping.
                        var original = aSourceMapConsumer.originalPositionFor({
                            line: mapping.originalLine,
                            column: mapping.originalColumn
                        });
                        null != original.source && (
                        // Copy mapping
                        mapping.source = original.source, null != aSourceMapPath && (mapping.source = util.join(aSourceMapPath, mapping.source)), 
                        null != sourceRoot && (mapping.source = util.relative(sourceRoot, mapping.source)), 
                        mapping.originalLine = original.line, mapping.originalColumn = original.column, 
                        null != original.name && (mapping.name = original.name));
                    }
                    var source = mapping.source;
                    null == source || newSources.has(source) || newSources.add(source);
                    var name = mapping.name;
                    null == name || newNames.has(name) || newNames.add(name);
                }, this), this._sources = newSources, this._names = newNames, 
                // Copy sourcesContents of applied map.
                aSourceMapConsumer.sources.forEach(function(sourceFile) {
                    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                    null != content && (null != aSourceMapPath && (sourceFile = util.join(aSourceMapPath, sourceFile)), 
                    null != sourceRoot && (sourceFile = util.relative(sourceRoot, sourceFile)), this.setSourceContent(sourceFile, content));
                }, this);
            }, 
            /**
   * A mapping can have one of the three levels of data:
   *
   *   1. Just the generated position.
   *   2. The Generated position, original position, and original source.
   *   3. Generated and original position, original source, as well as a name
   *      token.
   *
   * To maintain consistency, we validate that any new mapping being added falls
   * in to one of these categories.
   */
            SourceMapGenerator.prototype._validateMapping = function(aGenerated, aOriginal, aSource, aName) {
                if ((!(aGenerated && "line" in aGenerated && "column" in aGenerated && 0 < aGenerated.line && 0 <= aGenerated.column) || aOriginal || aSource || aName) && !(aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && 0 < aGenerated.line && 0 <= aGenerated.column && 0 < aOriginal.line && 0 <= aOriginal.column && aSource)) throw new Error("Invalid mapping: " + JSON.stringify({
                    generated: aGenerated,
                    source: aSource,
                    original: aOriginal,
                    name: aName
                }));
            }, 
            /**
   * Serialize the accumulated mappings in to the stream of base 64 VLQs
   * specified by the source map format.
   */
            SourceMapGenerator.prototype._serializeMappings = function() {
                for (var mapping, previousGeneratedColumn = 0, previousGeneratedLine = 1, previousOriginalColumn = 0, previousOriginalLine = 0, previousName = 0, previousSource = 0, result = "", mappings = this._mappings.toArray(), i = 0, len = mappings.length; i < len; i++) {
                    if ((mapping = mappings[i]).generatedLine !== previousGeneratedLine) for (previousGeneratedColumn = 0; mapping.generatedLine !== previousGeneratedLine; ) result += ";", 
                    previousGeneratedLine++; else if (0 < i) {
                        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
                        result += ",";
                    }
                    result += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn), previousGeneratedColumn = mapping.generatedColumn, 
                    null != mapping.source && (result += base64VLQ.encode(this._sources.indexOf(mapping.source) - previousSource), 
                    previousSource = this._sources.indexOf(mapping.source), 
                    // lines are stored 0-based in SourceMap spec version 3
                    result += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine), previousOriginalLine = mapping.originalLine - 1, 
                    result += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn), previousOriginalColumn = mapping.originalColumn, 
                    null != mapping.name && (result += base64VLQ.encode(this._names.indexOf(mapping.name) - previousName), 
                    previousName = this._names.indexOf(mapping.name)));
                }
                return result;
            }, SourceMapGenerator.prototype._generateSourcesContent = function(aSources, aSourceRoot) {
                return aSources.map(function(source) {
                    if (!this._sourcesContents) return null;
                    null != aSourceRoot && (source = util.relative(aSourceRoot, source));
                    var key = util.toSetString(source);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
                }, this);
            }, 
            /**
   * Externalize the source map.
   */
            SourceMapGenerator.prototype.toJSON = function() {
                var map = {
                    version: this._version,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return null != this._file && (map.file = this._file), null != this._sourceRoot && (map.sourceRoot = this._sourceRoot), 
                this._sourcesContents && (map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot)), 
                map;
            }, 
            /**
   * Render the source map being generated to a string.
   */
            SourceMapGenerator.prototype.toString = function() {
                return JSON.stringify(this.toJSON());
            }, exports.SourceMapGenerator = SourceMapGenerator;
        });
    }).call(this, __webpack_require__(56)(module))
    /***/;
}, 
/* 157 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(module) {
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if ("function" != typeof define) var define = __webpack_require__(74)(module, __webpack_require__(75));
        define(function(require, exports, module) {
            var util = require("./util"), binarySearch = require("./binary-search"), ArraySet = require("./array-set").ArraySet, base64VLQ = require("./base64-vlq"), quickSort = require("./quick-sort").quickSort;
            function SourceMapConsumer(aSourceMap) {
                var sourceMap = aSourceMap;
                return "string" == typeof aSourceMap && (sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""))), 
                null != sourceMap.sections ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
            }
            /**
   * A BasicSourceMapConsumer instance represents a parsed source map which we can
   * query for information about the original file positions by giving it a file
   * position in the generated source.
   *
   * The only parameter is the raw source map (either as a JSON string, or
   * already parsed to an object). According to the spec, source maps have the
   * following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - sources: An array of URLs to the original source files.
   *   - names: An array of identifiers which can be referrenced by individual mappings.
   *   - sourceRoot: Optional. The URL root from which all sources are relative.
   *   - sourcesContent: Optional. An array of contents of the original source files.
   *   - mappings: A string of base64 VLQs which contain the actual mappings.
   *   - file: Optional. The generated file this source map is associated with.
   *
   * Here is an example source map, taken from the source map spec[0]:
   *
   *     {
   *       version : 3,
   *       file: "out.js",
   *       sourceRoot : "",
   *       sources: ["foo.js", "bar.js"],
   *       names: ["src", "maps", "are", "fun"],
   *       mappings: "AA,AB;;ABCDE;"
   *     }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
   */
            function BasicSourceMapConsumer(aSourceMap) {
                var sourceMap = aSourceMap;
                "string" == typeof aSourceMap && (sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, "")));
                var version = util.getArg(sourceMap, "version"), sources = util.getArg(sourceMap, "sources"), names = util.getArg(sourceMap, "names", []), sourceRoot = util.getArg(sourceMap, "sourceRoot", null), sourcesContent = util.getArg(sourceMap, "sourcesContent", null), mappings = util.getArg(sourceMap, "mappings"), file = util.getArg(sourceMap, "file", null);
                // Once again, Sass deviates from the spec and supplies the version as a
                // string rather than a number, so we use loose equality checking here.
                if (version != this._version) throw new Error("Unsupported version: " + version);
                // Some source maps produce relative source paths like "./foo.js" instead of
                // "foo.js".  Normalize these first so that future comparisons will succeed.
                // See bugzil.la/1090768.
                                sources = sources.map(util.normalize), 
                // Pass `true` below to allow duplicate names and sources. While source maps
                // are intended to be compressed and deduplicated, the TypeScript compiler
                // sometimes generates source maps with duplicates in them. See Github issue
                // #72 and bugzil.la/889492.
                this._names = ArraySet.fromArray(names, !0), this._sources = ArraySet.fromArray(sources, !0), 
                this.sourceRoot = sourceRoot, this.sourcesContent = sourcesContent, this._mappings = mappings, 
                this.file = file;
            }
            /**
   * Provide the JIT with a nice shape / hidden class.
   */
            function Mapping() {
                this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, 
                this.originalColumn = null, this.name = null;
            }
            /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */            
            /**
   * An IndexedSourceMapConsumer instance represents a parsed source map which
   * we can query for information. It differs from BasicSourceMapConsumer in
   * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
   * input.
   *
   * The only parameter is a raw source map (either as a JSON string, or already
   * parsed to an object). According to the spec for indexed source maps, they
   * have the following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - file: Optional. The generated file this source map is associated with.
   *   - sections: A list of section definitions.
   *
   * Each value under the "sections" field has two fields:
   *   - offset: The offset into the original specified at which this section
   *       begins to apply, defined as an object with a "line" and "column"
   *       field.
   *   - map: A source map definition. This source map could also be indexed,
   *       but doesn't have to be.
   *
   * Instead of the "map" field, it's also possible to have a "url" field
   * specifying a URL to retrieve a source map from, but that's currently
   * unsupported.
   *
   * Here's an example source map, taken from the source map spec[0], but
   * modified to omit a section which uses the "url" field.
   *
   *  {
   *    version : 3,
   *    file: "app.js",
   *    sections: [{
   *      offset: {line:100, column:10},
   *      map: {
   *        version : 3,
   *        file: "section.js",
   *        sources: ["foo.js", "bar.js"],
   *        names: ["src", "maps", "are", "fun"],
   *        mappings: "AAAA,E;;ABCDE;"
   *      }
   *    }],
   *  }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
   */
            function IndexedSourceMapConsumer(aSourceMap) {
                var sourceMap = aSourceMap;
                "string" == typeof aSourceMap && (sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, "")));
                var version = util.getArg(sourceMap, "version"), sections = util.getArg(sourceMap, "sections");
                if (version != this._version) throw new Error("Unsupported version: " + version);
                this._sources = new ArraySet(), this._names = new ArraySet();
                var lastOffset = {
                    line: -1,
                    column: 0
                };
                this._sections = sections.map(function(s) {
                    if (s.url) 
                    // The url field will require support for asynchronicity.
                    // See https://github.com/mozilla/source-map/issues/16
                    throw new Error("Support for url field in sections not implemented.");
                    var offset = util.getArg(s, "offset"), offsetLine = util.getArg(offset, "line"), offsetColumn = util.getArg(offset, "column");
                    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                    return lastOffset = offset, {
                        generatedOffset: {
                            // The offset fields are 0-based, but we use 1-based indices when
                            // encoding/decoding from VLQ.
                            generatedLine: offsetLine + 1,
                            generatedColumn: offsetColumn + 1
                        },
                        consumer: new SourceMapConsumer(util.getArg(s, "map"))
                    };
                });
            }
            SourceMapConsumer.fromSourceMap = function(aSourceMap) {
                return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
            }
            /**
   * The version of the source mapping spec that we are consuming.
   */ , SourceMapConsumer.prototype._version = 3, 
            // `__generatedMappings` and `__originalMappings` are arrays that hold the
            // parsed mapping coordinates from the source map's "mappings" attribute. They
            // are lazily instantiated, accessed via the `_generatedMappings` and
            // `_originalMappings` getters respectively, and we only parse the mappings
            // and create these arrays once queried for a source location. We jump through
            // these hoops because there can be many thousands of mappings, and parsing
            // them is expensive, so we only want to do it if we must.
            //
            // Each object in the arrays is of the form:
            //
            //     {
            //       generatedLine: The line number in the generated code,
            //       generatedColumn: The column number in the generated code,
            //       source: The path to the original source file that generated this
            //               chunk of code,
            //       originalLine: The line number in the original source that
            //                     corresponds to this chunk of generated code,
            //       originalColumn: The column number in the original source that
            //                       corresponds to this chunk of generated code,
            //       name: The name of the original symbol which generated this chunk of
            //             code.
            //     }
            //
            // All properties except for `generatedLine` and `generatedColumn` can be
            // `null`.
            //
            // `_generatedMappings` is ordered by the generated positions.
            //
            // `_originalMappings` is ordered by the original positions.
            SourceMapConsumer.prototype.__generatedMappings = null, Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
                get: function() {
                    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), 
                    this.__generatedMappings;
                }
            }), SourceMapConsumer.prototype.__originalMappings = null, Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
                get: function() {
                    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), 
                    this.__originalMappings;
                }
            }), SourceMapConsumer.prototype._charIsMappingSeparator = function(aStr, index) {
                var c = aStr.charAt(index);
                return ";" === c || "," === c;
            }, 
            /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
            SourceMapConsumer.prototype._parseMappings = function(aStr, aSourceRoot) {
                throw new Error("Subclasses must implement _parseMappings");
            }, SourceMapConsumer.GENERATED_ORDER = 1, SourceMapConsumer.ORIGINAL_ORDER = 2, 
            SourceMapConsumer.GREATEST_LOWER_BOUND = 1, SourceMapConsumer.LEAST_UPPER_BOUND = 2, 
            /**
   * Iterate over each mapping between an original source/line/column and a
   * generated line/column in this source map.
   *
   * @param Function aCallback
   *        The function that is called with each mapping.
   * @param Object aContext
   *        Optional. If specified, this object will be the value of `this` every
   *        time that `aCallback` is called.
   * @param aOrder
   *        Either `SourceMapConsumer.GENERATED_ORDER` or
   *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
   *        iterate over the mappings sorted by the generated file's line/column
   *        order or the original's source/line/column order, respectively. Defaults to
   *        `SourceMapConsumer.GENERATED_ORDER`.
   */
            SourceMapConsumer.prototype.eachMapping = function(aCallback, aContext, aOrder) {
                var mappings, context = aContext || null;
                switch (aOrder || SourceMapConsumer.GENERATED_ORDER) {
                  case SourceMapConsumer.GENERATED_ORDER:
                    mappings = this._generatedMappings;
                    break;

                  case SourceMapConsumer.ORIGINAL_ORDER:
                    mappings = this._originalMappings;
                    break;

                  default:
                    throw new Error("Unknown order of iteration.");
                }
                var sourceRoot = this.sourceRoot;
                mappings.map(function(mapping) {
                    var source = null === mapping.source ? null : this._sources.at(mapping.source);
                    return null != source && null != sourceRoot && (source = util.join(sourceRoot, source)), 
                    {
                        source: source,
                        generatedLine: mapping.generatedLine,
                        generatedColumn: mapping.generatedColumn,
                        originalLine: mapping.originalLine,
                        originalColumn: mapping.originalColumn,
                        name: null === mapping.name ? null : this._names.at(mapping.name)
                    };
                }, this).forEach(aCallback, context);
            }, 
            /**
   * Returns all generated line and column information for the original source,
   * line, and column provided. If no column is provided, returns all mappings
   * corresponding to a either the line we are searching for or the next
   * closest line that has any mappings. Otherwise, returns all mappings
   * corresponding to the given line and either the column we are searching for
   * or the next closest column that has any offsets.
   *
   * The only argument is an object with the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: Optional. the column number in the original source.
   *
   * and an array of objects is returned, each with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
            SourceMapConsumer.prototype.allGeneratedPositionsFor = function(aArgs) {
                var line = util.getArg(aArgs, "line"), needle = {
                    source: util.getArg(aArgs, "source"),
                    originalLine: line,
                    originalColumn: util.getArg(aArgs, "column", 0)
                };
                // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
                // returns the index of the closest mapping less than the needle. By
                // setting needle.originalColumn to 0, we thus find the last mapping for
                // the given line, provided such a mapping exists.
                                if (null != this.sourceRoot && (needle.source = util.relative(this.sourceRoot, needle.source)), 
                !this._sources.has(needle.source)) return [];
                needle.source = this._sources.indexOf(needle.source);
                var mappings = [], index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
                if (0 <= index) {
                    var mapping = this._originalMappings[index];
                    if (aArgs.column === undefined) 
                    // Iterate until either we run out of mappings, or we run into
                    // a mapping for a different line than the one we found. Since
                    // mappings are sorted, this is guaranteed to find all mappings for
                    // the line we found.
                    for (var originalLine = mapping.originalLine; mapping && mapping.originalLine === originalLine; ) mappings.push({
                        line: util.getArg(mapping, "generatedLine", null),
                        column: util.getArg(mapping, "generatedColumn", null),
                        lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                    }), mapping = this._originalMappings[++index]; else 
                    // Iterate until either we run out of mappings, or we run into
                    // a mapping for a different line than the one we were searching for.
                    // Since mappings are sorted, this is guaranteed to find all mappings for
                    // the line we are searching for.
                    for (var originalColumn = mapping.originalColumn; mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn; ) mappings.push({
                        line: util.getArg(mapping, "generatedLine", null),
                        column: util.getArg(mapping, "generatedColumn", null),
                        lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                    }), mapping = this._originalMappings[++index];
                }
                return mappings;
            }, exports.SourceMapConsumer = SourceMapConsumer, (BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype)).consumer = SourceMapConsumer, 
            /**
   * Create a BasicSourceMapConsumer from a SourceMapGenerator.
   *
   * @param SourceMapGenerator aSourceMap
   *        The source map that will be consumed.
   * @returns BasicSourceMapConsumer
   */
            BasicSourceMapConsumer.fromSourceMap = function(aSourceMap) {
                var smc = Object.create(BasicSourceMapConsumer.prototype), names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), !0), sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), !0);
                smc.sourceRoot = aSourceMap._sourceRoot, smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot), 
                smc.file = aSourceMap._file;
                for (
                // Because we are modifying the entries (by converting string sources and
                // names to indices into the sources and names ArraySets), we have to make
                // a copy of the entry or else bad things happen. Shared mutable state
                // strikes again! See github issue #191.
                var generatedMappings = aSourceMap._mappings.toArray().slice(), destGeneratedMappings = smc.__generatedMappings = [], destOriginalMappings = smc.__originalMappings = [], i = 0, length = generatedMappings.length; i < length; i++) {
                    var srcMapping = generatedMappings[i], destMapping = new Mapping();
                    destMapping.generatedLine = srcMapping.generatedLine, destMapping.generatedColumn = srcMapping.generatedColumn, 
                    srcMapping.source && (destMapping.source = sources.indexOf(srcMapping.source), destMapping.originalLine = srcMapping.originalLine, 
                    destMapping.originalColumn = srcMapping.originalColumn, srcMapping.name && (destMapping.name = names.indexOf(srcMapping.name)), 
                    destOriginalMappings.push(destMapping)), destGeneratedMappings.push(destMapping);
                }
                return quickSort(smc.__originalMappings, util.compareByOriginalPositions), smc;
            }, 
            /**
   * The version of the source mapping spec that we are consuming.
   */
            BasicSourceMapConsumer.prototype._version = 3, 
            /**
   * The list of original sources.
   */
            Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
                get: function() {
                    return this._sources.toArray().map(function(s) {
                        return null != this.sourceRoot ? util.join(this.sourceRoot, s) : s;
                    }, this);
                }
            }), BasicSourceMapConsumer.prototype._parseMappings = function(aStr, aSourceRoot) {
                for (var mapping, str, segment, end, value, generatedLine = 1, previousGeneratedColumn = 0, previousOriginalLine = 0, previousOriginalColumn = 0, previousSource = 0, previousName = 0, length = aStr.length, index = 0, cachedSegments = {}, temp = {}, originalMappings = [], generatedMappings = []; index < length; ) if (";" === aStr.charAt(index)) generatedLine++, 
                index++, previousGeneratedColumn = 0; else if ("," === aStr.charAt(index)) index++; else {
                    // Because each offset is encoded relative to the previous one,
                    // many segments often have the same encoding. We can exploit this
                    // fact by caching the parsed variable length fields of each segment,
                    // allowing us to avoid a second parse if we encounter the same
                    // segment again.
                    for ((mapping = new Mapping()).generatedLine = generatedLine, end = index; end < length && !this._charIsMappingSeparator(aStr, end); end++) ;
                    if (segment = cachedSegments[str = aStr.slice(index, end)]) index += str.length; else {
                        for (segment = []; index < end; ) base64VLQ.decode(aStr, index, temp), value = temp.value, 
                        index = temp.rest, segment.push(value);
                        if (2 === segment.length) throw new Error("Found a source, but no line and column");
                        if (3 === segment.length) throw new Error("Found a source and line, but no column");
                        cachedSegments[str] = segment;
                    }
                    // Generated column.
                                        mapping.generatedColumn = previousGeneratedColumn + segment[0], 
                    previousGeneratedColumn = mapping.generatedColumn, 1 < segment.length && (
                    // Original source.
                    mapping.source = previousSource + segment[1], previousSource += segment[1], 
                    // Original line.
                    mapping.originalLine = previousOriginalLine + segment[2], previousOriginalLine = mapping.originalLine, 
                    // Lines are stored 0-based
                    mapping.originalLine += 1, 
                    // Original column.
                    mapping.originalColumn = previousOriginalColumn + segment[3], previousOriginalColumn = mapping.originalColumn, 
                    4 < segment.length && (
                    // Original name.
                    mapping.name = previousName + segment[4], previousName += segment[4])), generatedMappings.push(mapping), 
                    "number" == typeof mapping.originalLine && originalMappings.push(mapping);
                }
                quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated), this.__generatedMappings = generatedMappings, 
                quickSort(originalMappings, util.compareByOriginalPositions), this.__originalMappings = originalMappings;
            }, 
            /**
   * Find the mapping that best matches the hypothetical "needle" mapping that
   * we are searching for in the given "haystack" of mappings.
   */
            BasicSourceMapConsumer.prototype._findMapping = function(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
                // To return the position we are searching for, we must first find the
                // mapping for the given position and then return the opposite position it
                // points to. Because the mappings are sorted, we can use binary search to
                // find the best mapping.
                if (aNeedle[aLineName] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
                if (aNeedle[aColumnName] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
                return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
            }, 
            /**
   * Compute the last column for each generated mapping. The last column is
   * inclusive.
   */
            BasicSourceMapConsumer.prototype.computeColumnSpans = function() {
                for (var index = 0; index < this._generatedMappings.length; ++index) {
                    var mapping = this._generatedMappings[index];
                    // Mappings do not contain a field for the last generated columnt. We
                    // can come up with an optimistic estimate, however, by assuming that
                    // mappings are contiguous (i.e. given two consecutive mappings, the
                    // first mapping ends where the second one starts).
                                        if (index + 1 < this._generatedMappings.length) {
                        var nextMapping = this._generatedMappings[index + 1];
                        if (mapping.generatedLine === nextMapping.generatedLine) {
                            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                            continue;
                        }
                    }
                    // The last mapping for each line spans the entire line.
                                        mapping.lastGeneratedColumn = Infinity;
                }
            }, 
            /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
   *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
            BasicSourceMapConsumer.prototype.originalPositionFor = function(aArgs) {
                var needle = {
                    generatedLine: util.getArg(aArgs, "line"),
                    generatedColumn: util.getArg(aArgs, "column")
                }, index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
                if (0 <= index) {
                    var mapping = this._generatedMappings[index];
                    if (mapping.generatedLine === needle.generatedLine) {
                        var source = util.getArg(mapping, "source", null);
                        null !== source && (source = this._sources.at(source), null != this.sourceRoot && (source = util.join(this.sourceRoot, source)));
                        var name = util.getArg(mapping, "name", null);
                        return null !== name && (name = this._names.at(name)), {
                            source: source,
                            line: util.getArg(mapping, "originalLine", null),
                            column: util.getArg(mapping, "originalColumn", null),
                            name: name
                        };
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, 
            /**
   * Return true if we have the source content for every source in the source
   * map, false otherwise.
   */
            BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function() {
                return !!this.sourcesContent && (this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
                    return null == sc;
                }));
            }, 
            /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * availible.
   */
            BasicSourceMapConsumer.prototype.sourceContentFor = function(aSource, nullOnMissing) {
                if (!this.sourcesContent) return null;
                if (null != this.sourceRoot && (aSource = util.relative(this.sourceRoot, aSource)), 
                this._sources.has(aSource)) return this.sourcesContent[this._sources.indexOf(aSource)];
                var url;
                if (null != this.sourceRoot && (url = util.urlParse(this.sourceRoot))) {
                    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
                    // many users. We can help them out when they expect file:// URIs to
                    // behave like it would if they were running a local HTTP server. See
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
                    var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
                    if ("file" == url.scheme && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
                    if ((!url.path || "/" == url.path) && this._sources.has("/" + aSource)) return this.sourcesContent[this._sources.indexOf("/" + aSource)];
                }
                // This function is used recursively from
                // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
                // don't want to throw if we can't find the source - we just want to
                // return null, so we provide a flag to exit gracefully.
                                if (nullOnMissing) return null;
                throw new Error('"' + aSource + '" is not in the SourceMap.');
            }, 
            /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
   *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
            BasicSourceMapConsumer.prototype.generatedPositionFor = function(aArgs) {
                var source = util.getArg(aArgs, "source");
                if (null != this.sourceRoot && (source = util.relative(this.sourceRoot, source)), 
                !this._sources.has(source)) return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
                var needle = {
                    source: source = this._sources.indexOf(source),
                    originalLine: util.getArg(aArgs, "line"),
                    originalColumn: util.getArg(aArgs, "column")
                }, index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
                if (0 <= index) {
                    var mapping = this._originalMappings[index];
                    if (mapping.source === needle.source) return {
                        line: util.getArg(mapping, "generatedLine", null),
                        column: util.getArg(mapping, "generatedColumn", null),
                        lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                    };
                }
                return {
                    line: null,
                    column: null,
                    lastColumn: null
                };
            }, exports.BasicSourceMapConsumer = BasicSourceMapConsumer, (IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype)).constructor = SourceMapConsumer, 
            /**
   * The version of the source mapping spec that we are consuming.
   */
            IndexedSourceMapConsumer.prototype._version = 3, 
            /**
   * The list of original sources.
   */
            Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
                get: function() {
                    for (var sources = [], i = 0; i < this._sections.length; i++) for (var j = 0; j < this._sections[i].consumer.sources.length; j++) sources.push(this._sections[i].consumer.sources[j]);
                    return sources;
                }
            }), 
            /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
            IndexedSourceMapConsumer.prototype.originalPositionFor = function(aArgs) {
                var needle = {
                    generatedLine: util.getArg(aArgs, "line"),
                    generatedColumn: util.getArg(aArgs, "column")
                }, sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
                    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
                    return cmp || needle.generatedColumn - section.generatedOffset.generatedColumn;
                }), section = this._sections[sectionIndex];
                // Find the section containing the generated position we're trying to map
                // to an original position.
                                return section ? section.consumer.originalPositionFor({
                    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
                    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                    bias: aArgs.bias
                }) : {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                };
            }, 
            /**
   * Return true if we have the source content for every source in the source
   * map, false otherwise.
   */
            IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function() {
                return this._sections.every(function(s) {
                    return s.consumer.hasContentsOfAllSources();
                });
            }, 
            /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * available.
   */
            IndexedSourceMapConsumer.prototype.sourceContentFor = function(aSource, nullOnMissing) {
                for (var i = 0; i < this._sections.length; i++) {
                    var content = this._sections[i].consumer.sourceContentFor(aSource, !0);
                    if (content) return content;
                }
                if (nullOnMissing) return null;
                throw new Error('"' + aSource + '" is not in the SourceMap.');
            }, 
            /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
            IndexedSourceMapConsumer.prototype.generatedPositionFor = function(aArgs) {
                for (var i = 0; i < this._sections.length; i++) {
                    var section = this._sections[i];
                    // Only consider this section if the requested source is in the list of
                    // sources of the consumer.
                                        if (-1 !== section.consumer.sources.indexOf(util.getArg(aArgs, "source"))) {
                        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
                        if (generatedPosition) return {
                            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
                        };
                    }
                }
                return {
                    line: null,
                    column: null
                };
            }, 
            /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
            IndexedSourceMapConsumer.prototype._parseMappings = function(aStr, aSourceRoot) {
                this.__generatedMappings = [], this.__originalMappings = [];
                for (var i = 0; i < this._sections.length; i++) for (var section = this._sections[i], sectionMappings = section.consumer._generatedMappings, j = 0; j < sectionMappings.length; j++) {
                    var mapping = sectionMappings[i], source = section.consumer._sources.at(mapping.source);
                    null !== section.consumer.sourceRoot && (source = util.join(section.consumer.sourceRoot, source)), 
                    this._sources.add(source), source = this._sources.indexOf(source);
                    var name = section.consumer._names.at(mapping.name);
                    this._names.add(name), name = this._names.indexOf(name);
                    // The mappings coming from the consumer for the section have
                    // generated positions relative to the start of the section, so we
                    // need to offset them to be relative to the start of the concatenated
                    // generated file.
                    var adjustedMapping = {
                        source: source,
                        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                        generatedColumn: mapping.column + (section.generatedOffset.generatedLine === mapping.generatedLine) ? section.generatedOffset.generatedColumn - 1 : 0,
                        originalLine: mapping.originalLine,
                        originalColumn: mapping.originalColumn,
                        name: name
                    };
                    this.__generatedMappings.push(adjustedMapping), "number" == typeof adjustedMapping.originalLine && this.__originalMappings.push(adjustedMapping);
                }
                quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated), quickSort(this.__originalMappings, util.compareByOriginalPositions);
            }, exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
        });
    }).call(this, __webpack_require__(56)(module))
    /***/;
}, 
/* 158 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(module) {
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if ("function" != typeof define) var define = __webpack_require__(74)(module, __webpack_require__(75));
        define(function(require, exports, module) {
            var SourceMapGenerator = require("./source-map-generator").SourceMapGenerator, util = require("./util"), REGEX_NEWLINE = /(\r?\n)/, isSourceNode = "$$$isSourceNode$$$";
            /**
   * SourceNodes provide a way to abstract over interpolating/concatenating
   * snippets of generated JavaScript source code while maintaining the line and
   * column information associated with the original source code.
   *
   * @param aLine The original line number.
   * @param aColumn The original column number.
   * @param aSource The original source's filename.
   * @param aChunks Optional. An array of strings which are snippets of
   *        generated JS, or other SourceNodes.
   * @param aName The original identifier.
   */
            function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
                this.children = [], this.sourceContents = {}, this.line = null == aLine ? null : aLine, 
                this.column = null == aColumn ? null : aColumn, this.source = null == aSource ? null : aSource, 
                this.name = null == aName ? null : aName, this[isSourceNode] = !0, null != aChunks && this.add(aChunks);
            }
            /**
   * Creates a SourceNode from generated code and a SourceMapConsumer.
   *
   * @param aGeneratedCode The generated code
   * @param aSourceMapConsumer The SourceMap for the generated code
   * @param aRelativePath Optional. The path that relative sources in the
   *        SourceMapConsumer should be relative to.
   */            SourceNode.fromStringWithSourceMap = function(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
                // The SourceNode we want to fill with the generated code
                // and the SourceMap
                var node = new SourceNode(), remainingLines = aGeneratedCode.split(REGEX_NEWLINE), shiftNextLine = function() {
                    return remainingLines.shift() + (remainingLines.shift() || "");
                }, lastGeneratedLine = 1, lastGeneratedColumn = 0, lastMapping = null;
                // All even indices of this array are one line of the generated code,
                // while all odd indices are the newlines between two adjacent lines
                // (since `REGEX_NEWLINE` captures its match).
                // Processed fragments are removed from this array, by calling `shiftNextLine`.
                                return aSourceMapConsumer.eachMapping(function(mapping) {
                    if (null !== lastMapping) {
                        // We add the code from "lastMapping" to "mapping":
                        // First check if there is a new line in between.
                        if (!(lastGeneratedLine < mapping.generatedLine)) {
                            // There is no new line in between.
                            // Associate the code between "lastGeneratedColumn" and
                            // "mapping.generatedColumn" with "lastMapping"
                            code = (nextLine = remainingLines[0]).substr(0, mapping.generatedColumn - lastGeneratedColumn);
                            return remainingLines[0] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn), 
                            lastGeneratedColumn = mapping.generatedColumn, addMappingWithCode(lastMapping, code), 
                            void (
                            // No more remaining code, continue
                            lastMapping = mapping);
                        }
                        var code = "";
                        // Associate first line with "lastMapping"
                                                addMappingWithCode(lastMapping, shiftNextLine()), lastGeneratedLine++, 
                        lastGeneratedColumn = 0;
                    }
                    // We add the generated code until the first mapping
                    // to the SourceNode without any mapping.
                    // Each line is added as separate string.
                                        for (;lastGeneratedLine < mapping.generatedLine; ) node.add(shiftNextLine()), 
                    lastGeneratedLine++;
                    if (lastGeneratedColumn < mapping.generatedColumn) {
                        var nextLine = remainingLines[0];
                        node.add(nextLine.substr(0, mapping.generatedColumn)), remainingLines[0] = nextLine.substr(mapping.generatedColumn), 
                        lastGeneratedColumn = mapping.generatedColumn;
                    }
                    lastMapping = mapping;
                }, this), 
                // We have processed all mappings.
                0 < remainingLines.length && (lastMapping && 
                // Associate the remaining code in the current line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine()), 
                // and add the remaining lines without any mapping
                node.add(remainingLines.join(""))), 
                // Copy sourcesContent into SourceNode
                aSourceMapConsumer.sources.forEach(function(sourceFile) {
                    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                    null != content && (null != aRelativePath && (sourceFile = util.join(aRelativePath, sourceFile)), 
                    node.setSourceContent(sourceFile, content));
                }), node;
                function addMappingWithCode(mapping, code) {
                    if (null === mapping || mapping.source === undefined) node.add(code); else {
                        var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
                        node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
                    }
                }
            }, 
            /**
   * Add a chunk of generated JS to this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
            SourceNode.prototype.add = function(aChunk) {
                if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
                    this.add(chunk);
                }, this); else {
                    if (!aChunk[isSourceNode] && "string" != typeof aChunk) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
                    aChunk && this.children.push(aChunk);
                }
                return this;
            }, 
            /**
   * Add a chunk of generated JS to the beginning of this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
            SourceNode.prototype.prepend = function(aChunk) {
                if (Array.isArray(aChunk)) for (var i = aChunk.length - 1; 0 <= i; i--) this.prepend(aChunk[i]); else {
                    if (!aChunk[isSourceNode] && "string" != typeof aChunk) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
                    this.children.unshift(aChunk);
                }
                return this;
            }, 
            /**
   * Walk over the tree of JS snippets in this node and its children. The
   * walking function is called once for each snippet of JS and is passed that
   * snippet and the its original associated source's line/column location.
   *
   * @param aFn The traversal function.
   */
            SourceNode.prototype.walk = function(aFn) {
                for (var chunk, i = 0, len = this.children.length; i < len; i++) (chunk = this.children[i])[isSourceNode] ? chunk.walk(aFn) : "" !== chunk && aFn(chunk, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                });
            }, 
            /**
   * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
   * each of `this.children`.
   *
   * @param aSep The separator.
   */
            SourceNode.prototype.join = function(aSep) {
                var newChildren, i, len = this.children.length;
                if (0 < len) {
                    for (newChildren = [], i = 0; i < len - 1; i++) newChildren.push(this.children[i]), 
                    newChildren.push(aSep);
                    newChildren.push(this.children[i]), this.children = newChildren;
                }
                return this;
            }, 
            /**
   * Call String.prototype.replace on the very right-most source snippet. Useful
   * for trimming whitespace from the end of a source node, etc.
   *
   * @param aPattern The pattern to replace.
   * @param aReplacement The thing to replace the pattern with.
   */
            SourceNode.prototype.replaceRight = function(aPattern, aReplacement) {
                var lastChild = this.children[this.children.length - 1];
                return lastChild[isSourceNode] ? lastChild.replaceRight(aPattern, aReplacement) : "string" == typeof lastChild ? this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement) : this.children.push("".replace(aPattern, aReplacement)), 
                this;
            }, 
            /**
   * Set the source content for a source file. This will be added to the SourceMapGenerator
   * in the sourcesContent field.
   *
   * @param aSourceFile The filename of the source file
   * @param aSourceContent The content of the source file
   */
            SourceNode.prototype.setSourceContent = function(aSourceFile, aSourceContent) {
                this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
            }, 
            /**
   * Walk over the tree of SourceNodes. The walking function is called for each
   * source file content and is passed the filename and source content.
   *
   * @param aFn The traversal function.
   */
            SourceNode.prototype.walkSourceContents = function(aFn) {
                for (var i = 0, len = this.children.length; i < len; i++) this.children[i][isSourceNode] && this.children[i].walkSourceContents(aFn);
                var sources = Object.keys(this.sourceContents);
                for (i = 0, len = sources.length; i < len; i++) aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
            }, 
            /**
   * Return the string representation of this source node. Walks over the tree
   * and concatenates all the various snippets together to one string.
   */
            SourceNode.prototype.toString = function() {
                var str = "";
                return this.walk(function(chunk) {
                    str += chunk;
                }), str;
            }, 
            /**
   * Returns the string representation of this source node along with a source
   * map.
   */
            SourceNode.prototype.toStringWithSourceMap = function(aArgs) {
                var generated = {
                    code: "",
                    line: 1,
                    column: 0
                }, map = new SourceMapGenerator(aArgs), sourceMappingActive = !1, lastOriginalSource = null, lastOriginalLine = null, lastOriginalColumn = null, lastOriginalName = null;
                return this.walk(function(chunk, original) {
                    generated.code += chunk, null !== original.source && null !== original.line && null !== original.column ? (lastOriginalSource === original.source && lastOriginalLine === original.line && lastOriginalColumn === original.column && lastOriginalName === original.name || map.addMapping({
                        source: original.source,
                        original: {
                            line: original.line,
                            column: original.column
                        },
                        generated: {
                            line: generated.line,
                            column: generated.column
                        },
                        name: original.name
                    }), lastOriginalSource = original.source, lastOriginalLine = original.line, lastOriginalColumn = original.column, 
                    lastOriginalName = original.name, sourceMappingActive = !0) : sourceMappingActive && (map.addMapping({
                        generated: {
                            line: generated.line,
                            column: generated.column
                        }
                    }), lastOriginalSource = null, sourceMappingActive = !1);
                    for (var idx = 0, length = chunk.length; idx < length; idx++) 10 === chunk.charCodeAt(idx) ? (generated.line++, 
                    generated.column = 0, 
                    // Mappings end at eol
                    idx + 1 === length ? (lastOriginalSource = null, sourceMappingActive = !1) : sourceMappingActive && map.addMapping({
                        source: original.source,
                        original: {
                            line: original.line,
                            column: original.column
                        },
                        generated: {
                            line: generated.line,
                            column: generated.column
                        },
                        name: original.name
                    })) : generated.column++;
                }), this.walkSourceContents(function(sourceFile, sourceContent) {
                    map.setSourceContent(sourceFile, sourceContent);
                }), {
                    code: generated.code,
                    map: map
                };
            }, exports.SourceNode = SourceNode;
        });
    }).call(this, __webpack_require__(56)(module))
    /***/;
}, 
/* 159 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(process) {
        var Stream = __webpack_require__(160);
        // through
        //
        // a stream that does nothing but re-emit the input.
        // useful for aggregating a series of changing but not ending streams into one stream)
                //create a readable writable stream.
        function through(write, end, opts) {
            write = write || function(data) {
                this.queue(data);
            }, end = end || function() {
                this.queue(null);
            };
            var ended = !1, destroyed = !1, buffer = [], _ended = !1, stream = new Stream();
            function drain() {
                for (;buffer.length && !stream.paused; ) {
                    var data = buffer.shift();
                    if (null === data) return stream.emit("end");
                    stream.emit("data", data);
                }
            }
            return stream.readable = stream.writable = !0, stream.paused = !1, 
            //  stream.autoPause   = !(opts && opts.autoPause   === false)
            stream.autoDestroy = !(opts && !1 === opts.autoDestroy), stream.write = function(data) {
                return write.call(this, data), !stream.paused;
            }, stream.queue = stream.push = function(data) {
                //    console.error(ended)
                return _ended || (null === data && (_ended = !0), buffer.push(data), drain()), stream;
            }
            //this will be registered as the first 'end' listener
            //must call destroy next tick, to make sure we're after any
            //stream piped from here.
            //this is only a problem if end is not emitted synchronously.
            //a nicer way to do this is to make sure this is the last listener for 'end'
            , stream.on("end", function() {
                stream.readable = !1, !stream.writable && stream.autoDestroy && process.nextTick(function() {
                    stream.destroy();
                });
            }), stream.end = function(data) {
                if (!ended) // will emit or queue
                return ended = !0, arguments.length && stream.write(data), function _end() {
                    stream.writable = !1, end.call(stream), !stream.readable && stream.autoDestroy && stream.destroy();
                }(), stream;
            }, stream.destroy = function() {
                if (!destroyed) return ended = destroyed = !0, buffer.length = 0, stream.writable = stream.readable = !1, 
                stream.emit("close"), stream;
            }, stream.pause = function() {
                if (!stream.paused) return stream.paused = !0, stream;
            }, stream.resume = function() {
                return stream.paused && (stream.paused = !1, stream.emit("resume")), drain(), 
                //may have become paused again,
                //as drain emits 'data'.
                stream.paused || stream.emit("drain"), stream;
            }, stream;
        }
        /* WEBPACK VAR INJECTION */        module.exports = through, through.through = through;
    }).call(this, __webpack_require__(50))
    /***/;
}, 
/* 160 */
/***/ function(module, exports, __webpack_require__) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    module.exports = Stream;
    var EE = __webpack_require__(76).EventEmitter;
    // old-style streams.  Note that the pipe method (the only relevant
    // part of this class) is overridden in the Readable class.
    function Stream() {
        EE.call(this);
    }
    __webpack_require__(44)(Stream, EE), Stream.Readable = __webpack_require__(77), 
    Stream.Writable = __webpack_require__(170), Stream.Duplex = __webpack_require__(171), 
    Stream.Transform = __webpack_require__(172), Stream.PassThrough = __webpack_require__(173), 
    (
    // Backwards-compat with node 0.4.x
    Stream.Stream = Stream).prototype.pipe = function(dest, options) {
        var source = this;
        function ondata(chunk) {
            dest.writable && !1 === dest.write(chunk) && source.pause && source.pause();
        }
        function ondrain() {
            source.readable && source.resume && source.resume();
        }
        source.on("data", ondata), dest.on("drain", ondrain), 
        // If the 'end' option is not supplied, dest.end() will be called when
        // source gets the 'end' or 'close' events.  Only dest.end() once.
        dest._isStdio || options && !1 === options.end || (source.on("end", onend), source.on("close", onclose));
        var didOnEnd = !1;
        function onend() {
            didOnEnd || (didOnEnd = !0, dest.end());
        }
        function onclose() {
            didOnEnd || (didOnEnd = !0, "function" == typeof dest.destroy && dest.destroy());
        }
        // don't leave dangling pipes when there are errors.
                function onerror(er) {
            if (cleanup(), 0 === EE.listenerCount(this, "error")) throw er;
 // Unhandled stream error in pipe.
                }
        // remove all the event listeners that were added.
        function cleanup() {
            source.removeListener("data", ondata), dest.removeListener("drain", ondrain), source.removeListener("end", onend), 
            source.removeListener("close", onclose), source.removeListener("error", onerror), 
            dest.removeListener("error", onerror), source.removeListener("end", cleanup), source.removeListener("close", cleanup), 
            dest.removeListener("close", cleanup);
        }
        // Allow for unix-like usage: A.pipe(B).pipe(C)
        return source.on("error", onerror), dest.on("error", onerror), source.on("end", cleanup), 
        source.on("close", cleanup), dest.on("close", cleanup), dest.emit("pipe", source), 
        dest;
    };
}, 
/* 161 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    exports.byteLength = 
    // base64 is 4/3 + up to two characters of the original data
    function byteLength(b64) {
        var lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1];
        return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }, exports.toByteArray = function toByteArray(b64) {
        for (var tmp, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr = new Arr(function _byteLength(b64, validLen, placeHoldersLen) {
            return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
        }(0, validLen, placeHoldersLen)), curByte = 0, len = 0 < placeHoldersLen ? validLen - 4 : validLen, i = 0; i < len; i += 4) tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)], 
        arr[curByte++] = tmp >> 16 & 255, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = 255 & tmp;
        2 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4, 
        arr[curByte++] = 255 & tmp);
        1 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2, 
        arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = 255 & tmp);
        return arr;
    }, exports.fromByteArray = function fromByteArray(uint8) {
        // must be multiple of 3
        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var tmp, len = uint8.length, extraBytes = len % 3, parts = [], i = 0, len2 = len - extraBytes; i < len2; i += 16383) parts.push(encodeChunk(uint8, i, len2 < i + 16383 ? len2 : i + 16383));
        // pad the end with zeros, but make sure to not forget the extra bytes
                1 === extraBytes ? (tmp = uint8[len - 1], parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")) : 2 === extraBytes && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], 
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="));
        return parts.join("");
    }
    /***/;
    for (var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) lookup[i] = code[i], 
    revLookup[code.charCodeAt(i)] = i;
    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
        function getLens(b64) {
        var len = b64.length;
        if (0 < len % 4) throw new Error("Invalid string. Length must be a multiple of 4");
        // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42
                var validLen = b64.indexOf("=");
        return -1 === validLen && (validLen = len), [ validLen, validLen === len ? 0 : 4 - validLen % 4 ];
    }
    function encodeChunk(uint8, start, end) {
        for (var tmp, num, output = [], i = start; i < end; i += 3) tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]), 
        output.push(lookup[(num = tmp) >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num]);
        return output.join("");
    }
    revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
}, 
/* 162 */
/***/ function(module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
        for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; 0 < nBits; e = 256 * e + buffer[offset + i], 
        i += d, nBits -= 8) ;
        for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; 0 < nBits; m = 256 * m + buffer[offset + i], 
        i += d, nBits -= 8) ;
        if (0 === e) e = 1 - eBias; else {
            if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
            m += Math.pow(2, mLen), e -= eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    }, exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
        for (value = Math.abs(value), isNaN(value) || value === Infinity ? (m = isNaN(value) ? 1 : 0, 
        e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, 
        c *= 2), 2 <= (value += 1 <= e + eBias ? rt / c : rt * Math.pow(2, 1 - eBias)) * c && (e++, 
        c /= 2), eMax <= e + eBias ? (m = 0, e = eMax) : 1 <= e + eBias ? (m = (value * c - 1) * Math.pow(2, mLen), 
        e += eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); 8 <= mLen; buffer[offset + i] = 255 & m, 
        i += d, m /= 256, mLen -= 8) ;
        for (e = e << mLen | m, eLen += mLen; 0 < eLen; buffer[offset + i] = 255 & e, i += d, 
        e /= 256, eLen -= 8) ;
        buffer[offset + i - d] |= 128 * s;
    }
    /***/;
}, 
/* 163 */
/***/ function(module, exports) {
    /* (ignored) */
    /***/}, 
/* 164 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var Buffer = __webpack_require__(58).Buffer, util = __webpack_require__(165);
    module.exports = function() {
        function BufferList() {
            !function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }(this, BufferList), this.head = null, this.tail = null, this.length = 0;
        }
        return BufferList.prototype.push = function(v) {
            var entry = {
                data: v,
                next: null
            };
            0 < this.length ? this.tail.next = entry : this.head = entry, this.tail = entry, 
            ++this.length;
        }, BufferList.prototype.unshift = function(v) {
            var entry = {
                data: v,
                next: this.head
            };
            0 === this.length && (this.tail = entry), this.head = entry, ++this.length;
        }, BufferList.prototype.shift = function() {
            if (0 !== this.length) {
                var ret = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, 
                --this.length, ret;
            }
        }, BufferList.prototype.clear = function() {
            this.head = this.tail = null, this.length = 0;
        }, BufferList.prototype.join = function(s) {
            if (0 === this.length) return "";
            for (var p = this.head, ret = "" + p.data; p = p.next; ) ret += s + p.data;
            return ret;
        }, BufferList.prototype.concat = function(n) {
            if (0 === this.length) return Buffer.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var src, target, offset, ret = Buffer.allocUnsafe(n >>> 0), p = this.head, i = 0; p; ) src = p.data, 
            target = ret, offset = i, src.copy(target, offset), i += p.data.length, p = p.next;
            return ret;
        }, BufferList;
    }(), util && util.inspect && util.inspect.custom && (module.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({
            length: this.length
        });
        return this.constructor.name + " " + obj;
    })
    /***/;
}, 
/* 165 */
/***/ function(module, exports) {
    /* (ignored) */
    /***/}, 
/* 166 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(global) {
        var scope = void 0 !== global && global || "undefined" != typeof self && self || window, apply = Function.prototype.apply;
        function Timeout(id, clearFn) {
            this._id = id, this._clearFn = clearFn;
        }
        // DOM APIs, for completeness
        exports.setTimeout = function() {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
        }, exports.setInterval = function() {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
        }, exports.clearTimeout = exports.clearInterval = function(timeout) {
            timeout && timeout.close();
        }, Timeout.prototype.unref = Timeout.prototype.ref = function() {}, Timeout.prototype.close = function() {
            this._clearFn.call(scope, this._id);
        }, 
        // Does not start the time, just sets up the members needed.
        exports.enroll = function(item, msecs) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs;
        }, exports.unenroll = function(item) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = -1;
        }, exports._unrefActive = exports.active = function(item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;
            0 <= msecs && (item._idleTimeoutId = setTimeout(function() {
                item._onTimeout && item._onTimeout();
            }, msecs));
        }, 
        // setimmediate attaches itself to the global object
        __webpack_require__(167), 
        // On some exotic environments, it's not clear which object `setimmediate` was
        // able to install onto.  Search each possibility in the same order as the
        // `setimmediate` library.
        exports.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== global && global.setImmediate || this && this.setImmediate, 
        exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== global && global.clearImmediate || this && this.clearImmediate;
    }).call(this, __webpack_require__(27))
    /***/;
}, 
/* 167 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(global, process) {
        !function(global, undefined) {
            "use strict";
            if (!global.setImmediate) {
                var registerImmediate, nextHandle = 1, tasksByHandle = {}, currentlyRunningATask = !1, doc = global.document, attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
 // Spec says greater than zero
                                attachTo = attachTo && attachTo.setTimeout ? attachTo : global, 
                // Don't get fooled by e.g. browserify environments.
                "[object process]" === {}.toString.call(global.process) ? 
                // For Node.js before 0.9
                function installNextTickImplementation() {
                    registerImmediate = function(handle) {
                        process.nextTick(function() {
                            runIfPresent(handle);
                        });
                    };
                }() : !function canUsePostMessage() {
                    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                    // where `global.postMessage` means something completely different and can't be used for this purpose.
                    if (global.postMessage && !global.importScripts) {
                        var postMessageIsAsynchronous = !0, oldOnMessage = global.onmessage;
                        return global.onmessage = function() {
                            postMessageIsAsynchronous = !1;
                        }, global.postMessage("", "*"), global.onmessage = oldOnMessage, postMessageIsAsynchronous;
                    }
                }() ? global.MessageChannel ? 
                // For web workers, where supported
                function installMessageChannelImplementation() {
                    var channel = new MessageChannel();
                    channel.port1.onmessage = function(event) {
                        runIfPresent(event.data);
                    }, registerImmediate = function(handle) {
                        channel.port2.postMessage(handle);
                    };
                }() : doc && "onreadystatechange" in doc.createElement("script") ? 
                // For IE 6–8
                function installReadyStateChangeImplementation() {
                    var html = doc.documentElement;
                    registerImmediate = function(handle) {
                        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                        var script = doc.createElement("script");
                        script.onreadystatechange = function() {
                            runIfPresent(handle), script.onreadystatechange = null, html.removeChild(script), 
                            script = null;
                        }, html.appendChild(script);
                    };
                }() : 
                // For older browsers
                function installSetTimeoutImplementation() {
                    registerImmediate = function(handle) {
                        setTimeout(runIfPresent, 0, handle);
                    };
                }
                // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
                () : 
                // For non-IE10 modern browsers
                function installPostMessageImplementation() {
                    // Installs an event handler on `global` for the `message` event: see
                    // * https://developer.mozilla.org/en/DOM/window.postMessage
                    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
                    var messagePrefix = "setImmediate$" + Math.random() + "$", onGlobalMessage = function(event) {
                        event.source === global && "string" == typeof event.data && 0 === event.data.indexOf(messagePrefix) && runIfPresent(+event.data.slice(messagePrefix.length));
                    };
                    global.addEventListener ? global.addEventListener("message", onGlobalMessage, !1) : global.attachEvent("onmessage", onGlobalMessage), 
                    registerImmediate = function(handle) {
                        global.postMessage(messagePrefix + handle, "*");
                    };
                }(), attachTo.setImmediate = function setImmediate(callback) {
                    // Callback can either be a function or a string
                    "function" != typeof callback && (callback = new Function("" + callback));
                    // Copy function arguments
                                        for (var args = new Array(arguments.length - 1), i = 0; i < args.length; i++) args[i] = arguments[i + 1];
                    // Store and register the task
                                        var task = {
                        callback: callback,
                        args: args
                    };
                    return tasksByHandle[nextHandle] = task, registerImmediate(nextHandle), nextHandle++;
                }, attachTo.clearImmediate = clearImmediate;
            }
            function clearImmediate(handle) {
                delete tasksByHandle[handle];
            }
            function runIfPresent(handle) {
                // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                // So if we're currently running a task, we'll need to delay this invocation.
                if (currentlyRunningATask) 
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle); else {
                    var task = tasksByHandle[handle];
                    if (task) {
                        currentlyRunningATask = !0;
                        try {
                            !function run(task) {
                                var callback = task.callback, args = task.args;
                                switch (args.length) {
                                  case 0:
                                    callback();
                                    break;

                                  case 1:
                                    callback(args[0]);
                                    break;

                                  case 2:
                                    callback(args[0], args[1]);
                                    break;

                                  case 3:
                                    callback(args[0], args[1], args[2]);
                                    break;

                                  default:
                                    callback.apply(undefined, args);
                                }
                            }(task);
                        } finally {
                            clearImmediate(handle), currentlyRunningATask = !1;
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === global ? this : global : self);
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(27), __webpack_require__(50))
    /***/;
}, 
/* 168 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(global) {
        /**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */
        function config(name) {
            // accessing global.localStorage can trigger a DOMException in sandboxed iframes
            try {
                if (!global.localStorage) return !1;
            } catch (_) {
                return !1;
            }
            var val = global.localStorage[name];
            return null != val && "true" === String(val).toLowerCase();
        }
        /* WEBPACK VAR INJECTION */        
        /**
 * Module exports.
 */
        module.exports = 
        /**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */
        function deprecate(fn, msg) {
            if (config("noDeprecation")) return fn;
            var warned = !1;
            return function deprecated() {
                if (!warned) {
                    if (config("throwDeprecation")) throw new Error(msg);
                    config("traceDeprecation") ? console.trace(msg) : console.warn(msg), warned = !0;
                }
                return fn.apply(this, arguments);
            };
        };
    }).call(this, __webpack_require__(27))
    /***/;
}, 
/* 169 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    // a passthrough stream.
    // basically just the most minimal sort of Transform stream.
    // Every written chunk gets output as-is.
        module.exports = PassThrough;
    var Transform = __webpack_require__(114), util = __webpack_require__(51);
    /*<replacement>*/    function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
        Transform.call(this, options);
    }
    util.inherits = __webpack_require__(44), 
    /*</replacement>*/
    util.inherits(PassThrough, Transform), PassThrough.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
    };
}, 
/* 170 */
/***/ function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(78);
    /***/}, 
/* 171 */
/***/ function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(33);
    /***/}, 
/* 172 */
/***/ function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(77).Transform
    /***/;
}, 
/* 173 */
/***/ function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(77).PassThrough
    /***/;
}, 
/* 174 */
/***/ function(module, exports) {
    // Console-polyfill. MIT license.
    // https://github.com/paulmillr/console-polyfill
    // Make it safe to do console.log() always.
    !function(global) {
        "use strict";
        global.console || (global.console = {});
        for (var prop, method, con = global.console, dummy = function() {}, properties = [ "memory" ], methods = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); prop = properties.pop(); ) con[prop] || (con[prop] = {});
        for (;method = methods.pop(); ) con[method] || (con[method] = dummy);
        // Using `this` for web workers & supports Browserify / Webpack.
        }("undefined" == typeof window ? this : window);
    /***/}, 
/* 175 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */ (function(global) {
        if (__webpack_require__(176), __webpack_require__(372), __webpack_require__(373), 
        global._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        global._babelPolyfill = !0;
        function define(O, key, value) {
            O[key] || Object["defineProperty"](O, key, {
                writable: !0,
                configurable: !0,
                value: value
            });
        }
        define(String.prototype, "padLeft", "".padStart), define(String.prototype, "padRight", "".padEnd), 
        "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
            [][key] && define(Array, key, Function.call.bind([][key]));
        });
    }).call(this, __webpack_require__(27))
    /***/;
}, 
/* 176 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(177), __webpack_require__(179), __webpack_require__(180), __webpack_require__(181), 
    __webpack_require__(182), __webpack_require__(183), __webpack_require__(184), __webpack_require__(185), 
    __webpack_require__(186), __webpack_require__(187), __webpack_require__(188), __webpack_require__(189), 
    __webpack_require__(190), __webpack_require__(191), __webpack_require__(192), __webpack_require__(193), 
    __webpack_require__(194), __webpack_require__(195), __webpack_require__(196), __webpack_require__(197), 
    __webpack_require__(198), __webpack_require__(199), __webpack_require__(200), __webpack_require__(201), 
    __webpack_require__(202), __webpack_require__(203), __webpack_require__(204), __webpack_require__(205), 
    __webpack_require__(206), __webpack_require__(207), __webpack_require__(208), __webpack_require__(209), 
    __webpack_require__(210), __webpack_require__(211), __webpack_require__(212), __webpack_require__(213), 
    __webpack_require__(214), __webpack_require__(215), __webpack_require__(216), __webpack_require__(217), 
    __webpack_require__(218), __webpack_require__(219), __webpack_require__(220), __webpack_require__(221), 
    __webpack_require__(222), __webpack_require__(223), __webpack_require__(224), __webpack_require__(225), 
    __webpack_require__(226), __webpack_require__(227), __webpack_require__(228), __webpack_require__(229), 
    __webpack_require__(230), __webpack_require__(231), __webpack_require__(232), __webpack_require__(233), 
    __webpack_require__(234), __webpack_require__(235), __webpack_require__(236), __webpack_require__(237), 
    __webpack_require__(238), __webpack_require__(239), __webpack_require__(240), __webpack_require__(241), 
    __webpack_require__(242), __webpack_require__(243), __webpack_require__(244), __webpack_require__(245), 
    __webpack_require__(246), __webpack_require__(247), __webpack_require__(248), __webpack_require__(249), 
    __webpack_require__(250), __webpack_require__(251), __webpack_require__(252), __webpack_require__(253), 
    __webpack_require__(254), __webpack_require__(256), __webpack_require__(257), __webpack_require__(259), 
    __webpack_require__(260), __webpack_require__(261), __webpack_require__(262), __webpack_require__(263), 
    __webpack_require__(264), __webpack_require__(265), __webpack_require__(267), __webpack_require__(268), 
    __webpack_require__(269), __webpack_require__(270), __webpack_require__(271), __webpack_require__(272), 
    __webpack_require__(273), __webpack_require__(274), __webpack_require__(275), __webpack_require__(276), 
    __webpack_require__(277), __webpack_require__(278), __webpack_require__(279), __webpack_require__(99), 
    __webpack_require__(280), __webpack_require__(134), __webpack_require__(281), __webpack_require__(135), 
    __webpack_require__(282), __webpack_require__(283), __webpack_require__(284), __webpack_require__(285), 
    __webpack_require__(286), __webpack_require__(138), __webpack_require__(140), __webpack_require__(141), 
    __webpack_require__(287), __webpack_require__(288), __webpack_require__(289), __webpack_require__(290), 
    __webpack_require__(291), __webpack_require__(292), __webpack_require__(293), __webpack_require__(294), 
    __webpack_require__(295), __webpack_require__(296), __webpack_require__(297), __webpack_require__(298), 
    __webpack_require__(299), __webpack_require__(300), __webpack_require__(301), __webpack_require__(302), 
    __webpack_require__(303), __webpack_require__(304), __webpack_require__(305), __webpack_require__(306), 
    __webpack_require__(307), __webpack_require__(308), __webpack_require__(309), __webpack_require__(310), 
    __webpack_require__(311), __webpack_require__(312), __webpack_require__(313), __webpack_require__(314), 
    __webpack_require__(315), __webpack_require__(316), __webpack_require__(317), __webpack_require__(318), 
    __webpack_require__(319), __webpack_require__(320), __webpack_require__(321), __webpack_require__(322), 
    __webpack_require__(323), __webpack_require__(324), __webpack_require__(325), __webpack_require__(326), 
    __webpack_require__(327), __webpack_require__(328), __webpack_require__(329), __webpack_require__(330), 
    __webpack_require__(331), __webpack_require__(332), __webpack_require__(333), __webpack_require__(334), 
    __webpack_require__(335), __webpack_require__(336), __webpack_require__(337), __webpack_require__(338), 
    __webpack_require__(339), __webpack_require__(340), __webpack_require__(341), __webpack_require__(342), 
    __webpack_require__(343), __webpack_require__(344), __webpack_require__(345), __webpack_require__(346), 
    __webpack_require__(347), __webpack_require__(348), __webpack_require__(349), __webpack_require__(350), 
    __webpack_require__(351), __webpack_require__(352), __webpack_require__(353), __webpack_require__(354), 
    __webpack_require__(355), __webpack_require__(356), __webpack_require__(357), __webpack_require__(358), 
    __webpack_require__(359), __webpack_require__(360), __webpack_require__(361), __webpack_require__(362), 
    __webpack_require__(363), __webpack_require__(364), __webpack_require__(365), __webpack_require__(366), 
    __webpack_require__(367), __webpack_require__(368), __webpack_require__(369), __webpack_require__(370), 
    __webpack_require__(371), module.exports = __webpack_require__(18);
}, 
/* 177 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // ECMAScript 6 symbols shim
        var global = __webpack_require__(2), has = __webpack_require__(14), DESCRIPTORS = __webpack_require__(7), $export = __webpack_require__(0), redefine = __webpack_require__(12), META = __webpack_require__(30).KEY, $fails = __webpack_require__(3), shared = __webpack_require__(59), setToStringTag = __webpack_require__(45), uid = __webpack_require__(35), wks = __webpack_require__(5), wksExt = __webpack_require__(116), wksDefine = __webpack_require__(80), enumKeys = __webpack_require__(178), isArray = __webpack_require__(62), anObject = __webpack_require__(1), isObject = __webpack_require__(4), toIObject = __webpack_require__(15), toPrimitive = __webpack_require__(23), createDesc = __webpack_require__(34), _create = __webpack_require__(38), gOPNExt = __webpack_require__(119), $GOPD = __webpack_require__(16), $DP = __webpack_require__(8), $keys = __webpack_require__(36), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object["prototype"], USE_NATIVE = "function" == typeof $Symbol, QObject = global.QObject, setter = !QObject || !QObject["prototype"] || !QObject["prototype"].findChild, setSymbolDesc = DESCRIPTORS && $fails(function() {
        return 7 != _create(dP({}, "a", {
            get: function() {
                return dP(this, "a", {
                    value: 7
                }).a;
            }
        })).a;
    }) ? function(it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        protoDesc && delete ObjectProto[key], dP(it, key, D), protoDesc && it !== ObjectProto && dP(ObjectProto, key, protoDesc);
    } : dP, wrap = function(tag) {
        var sym = AllSymbols[tag] = _create($Symbol["prototype"]);
        return sym._k = tag, sym;
    }, isSymbol = USE_NATIVE && "symbol" == typeof $Symbol.iterator ? function(it) {
        return "symbol" == typeof it;
    } : function(it) {
        return it instanceof $Symbol;
    }, $defineProperty = function(it, key, D) {
        return it === ObjectProto && $defineProperty(OPSymbols, key, D), anObject(it), key = toPrimitive(key, !0), 
        anObject(D), has(AllSymbols, key) ? (D.enumerable ? (has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = !1), 
        D = _create(D, {
            enumerable: createDesc(0, !1)
        })) : (has(it, HIDDEN) || dP(it, HIDDEN, createDesc(1, {})), it[HIDDEN][key] = !0), 
        setSymbolDesc(it, key, D)) : dP(it, key, D);
    }, $defineProperties = function(it, P) {
        anObject(it);
        for (var key, keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length; i < l; ) $defineProperty(it, key = keys[i++], P[key]);
        return it;
    }, $propertyIsEnumerable = function(key) {
        var E = isEnum.call(this, key = toPrimitive(key, !0));
        return !(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) && (!(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E);
    }, $getOwnPropertyDescriptor = function(it, key) {
        if (it = toIObject(it), key = toPrimitive(key, !0), it !== ObjectProto || !has(AllSymbols, key) || has(OPSymbols, key)) {
            var D = gOPD(it, key);
            return !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = !0), 
            D;
        }
    }, $getOwnPropertyNames = function(it) {
        for (var key, names = gOPN(toIObject(it)), result = [], i = 0; names.length > i; ) has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META || result.push(key);
        return result;
    }, $getOwnPropertySymbols = function(it) {
        for (var key, IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0; names.length > i; ) !has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key) || result.push(AllSymbols[key]);
        return result;
    };
    // 19.4.1.1 Symbol([description])
    USE_NATIVE || (redefine(($Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(0 < arguments.length ? arguments[0] : undefined), $set = function(value) {
            this === ObjectProto && $set.call(OPSymbols, value), has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = !1), 
            setSymbolDesc(this, tag, createDesc(1, value));
        };
        return DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
            configurable: !0,
            set: $set
        }), wrap(tag);
    })["prototype"], "toString", function() {
        return this._k;
    }), $GOPD.f = $getOwnPropertyDescriptor, $DP.f = $defineProperty, __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames, 
    __webpack_require__(53).f = $propertyIsEnumerable, __webpack_require__(61).f = $getOwnPropertySymbols, 
    DESCRIPTORS && !__webpack_require__(31) && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0), 
    wksExt.f = function(name) {
        return wrap(wks(name));
    }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol
    });
    for (var es6Symbols = 
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; ) wks(es6Symbols[j++]);
    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        // 19.4.2.1 Symbol.for(key)
        "for": function(key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
        },
        useSetter: function() {
            setter = !0;
        },
        useSimple: function() {
            setter = !1;
        }
    }), $export($export.S + $export.F * !USE_NATIVE, "Object", {
        // 19.1.2.2 Object.create(O [, Properties])
        create: function(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        },
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
    }), 
    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
        var S = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols
                return "[null]" != _stringify([ S ]) || "{}" != _stringify({
            a: S
        }) || "{}" != _stringify(Object(S));
    })), "JSON", {
        stringify: function(it) {
            for (var replacer, $replacer, args = [ it ], i = 1; arguments.length > i; ) args.push(arguments[i++]);
            if ($replacer = replacer = args[1], (isObject(replacer) || it !== undefined) && !isSymbol(it)) // IE8 returns string on undefined
            return isArray(replacer) || (replacer = function(key, value) {
                if ("function" == typeof $replacer && (value = $replacer.call(this, key, value)), 
                !isSymbol(value)) return value;
            }), args[1] = replacer, _stringify.apply($JSON, args);
        }
    }), 
    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol["prototype"][TO_PRIMITIVE] || __webpack_require__(11)($Symbol["prototype"], TO_PRIMITIVE, $Symbol["prototype"].valueOf), 
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, "Symbol"), 
    // 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, "Math", !0), 
    // 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, "JSON", !0);
}, 
/* 178 */
/***/ function(module, exports, __webpack_require__) {
    // all enumerable object keys, includes symbols
    var getKeys = __webpack_require__(36), gOPS = __webpack_require__(61), pIE = __webpack_require__(53);
    module.exports = function(it) {
        var result = getKeys(it), getSymbols = gOPS.f;
        if (getSymbols) for (var key, symbols = getSymbols(it), isEnum = pIE.f, i = 0; symbols.length > i; ) isEnum.call(it, key = symbols[i++]) && result.push(key);
        return result;
    };
}, 
/* 179 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0);
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, "Object", {
        create: __webpack_require__(38)
    });
}, 
/* 180 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0);
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export($export.S + $export.F * !__webpack_require__(7), "Object", {
        defineProperty: __webpack_require__(8).f
    });
}, 
/* 181 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0);
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
        $export($export.S + $export.F * !__webpack_require__(7), "Object", {
        defineProperties: __webpack_require__(118)
    });
}, 
/* 182 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    var toIObject = __webpack_require__(15), $getOwnPropertyDescriptor = __webpack_require__(16).f;
    __webpack_require__(25)("getOwnPropertyDescriptor", function() {
        return function(it, key) {
            return $getOwnPropertyDescriptor(toIObject(it), key);
        };
    });
}, 
/* 183 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.9 Object.getPrototypeOf(O)
    var toObject = __webpack_require__(9), $getPrototypeOf = __webpack_require__(17);
    __webpack_require__(25)("getPrototypeOf", function() {
        return function(it) {
            return $getPrototypeOf(toObject(it));
        };
    });
}, 
/* 184 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.14 Object.keys(O)
    var toObject = __webpack_require__(9), $keys = __webpack_require__(36);
    __webpack_require__(25)("keys", function() {
        return function(it) {
            return $keys(toObject(it));
        };
    });
}, 
/* 185 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    __webpack_require__(25)("getOwnPropertyNames", function() {
        return __webpack_require__(119).f;
    });
    /***/}, 
/* 186 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.5 Object.freeze(O)
    var isObject = __webpack_require__(4), meta = __webpack_require__(30).onFreeze;
    __webpack_require__(25)("freeze", function($freeze) {
        return function(it) {
            return $freeze && isObject(it) ? $freeze(meta(it)) : it;
        };
    });
}, 
/* 187 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.17 Object.seal(O)
    var isObject = __webpack_require__(4), meta = __webpack_require__(30).onFreeze;
    __webpack_require__(25)("seal", function($seal) {
        return function(it) {
            return $seal && isObject(it) ? $seal(meta(it)) : it;
        };
    });
}, 
/* 188 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.15 Object.preventExtensions(O)
    var isObject = __webpack_require__(4), meta = __webpack_require__(30).onFreeze;
    __webpack_require__(25)("preventExtensions", function($preventExtensions) {
        return function(it) {
            return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
        };
    });
}, 
/* 189 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.12 Object.isFrozen(O)
    var isObject = __webpack_require__(4);
    __webpack_require__(25)("isFrozen", function($isFrozen) {
        return function(it) {
            return !isObject(it) || !!$isFrozen && $isFrozen(it);
        };
    });
}, 
/* 190 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.13 Object.isSealed(O)
    var isObject = __webpack_require__(4);
    __webpack_require__(25)("isSealed", function($isSealed) {
        return function(it) {
            return !isObject(it) || !!$isSealed && $isSealed(it);
        };
    });
}, 
/* 191 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.2.11 Object.isExtensible(O)
    var isObject = __webpack_require__(4);
    __webpack_require__(25)("isExtensible", function($isExtensible) {
        return function(it) {
            return !!isObject(it) && (!$isExtensible || $isExtensible(it));
        };
    });
}, 
/* 192 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.3.1 Object.assign(target, source)
    var $export = __webpack_require__(0);
    $export($export.S + $export.F, "Object", {
        assign: __webpack_require__(120)
    });
}, 
/* 193 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.3.10 Object.is(value1, value2)
    var $export = __webpack_require__(0);
    $export($export.S, "Object", {
        is: __webpack_require__(121)
    });
}, 
/* 194 */
/***/ function(module, exports, __webpack_require__) {
    // 19.1.3.19 Object.setPrototypeOf(O, proto)
    var $export = __webpack_require__(0);
    $export($export.S, "Object", {
        setPrototypeOf: __webpack_require__(84).set
    });
}, 
/* 195 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 19.1.3.6 Object.prototype.toString()
        var classof = __webpack_require__(46), test = {};
    test[__webpack_require__(5)("toStringTag")] = "z", test + "" != "[object z]" && __webpack_require__(12)(Object.prototype, "toString", function() {
        return "[object " + classof(this) + "]";
    }, !0)
    /***/;
}, 
/* 196 */
/***/ function(module, exports, __webpack_require__) {
    // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
    var $export = __webpack_require__(0);
    $export($export.P, "Function", {
        bind: __webpack_require__(122)
    });
}, 
/* 197 */
/***/ function(module, exports, __webpack_require__) {
    var dP = __webpack_require__(8).f, FProto = Function.prototype, nameRE = /^\s*function ([^ (]*)/;
    // 19.2.4.2 name
    "name" in FProto || __webpack_require__(7) && dP(FProto, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(nameRE)[1];
            } catch (e) {
                return "";
            }
        }
    });
}, 
/* 198 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var isObject = __webpack_require__(4), getPrototypeOf = __webpack_require__(17), HAS_INSTANCE = __webpack_require__(5)("hasInstance"), FunctionProto = Function.prototype;
    // 19.2.3.6 Function.prototype[@@hasInstance](V)
    HAS_INSTANCE in FunctionProto || __webpack_require__(8).f(FunctionProto, HAS_INSTANCE, {
        value: function(O) {
            if ("function" != typeof this || !isObject(O)) return !1;
            if (!isObject(this.prototype)) return O instanceof this;
            // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
                        for (;O = getPrototypeOf(O); ) if (this.prototype === O) return !0;
            return !1;
        }
    })
    /***/;
}, 
/* 199 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), $parseInt = __webpack_require__(124);
    // 18.2.5 parseInt(string, radix)
    $export($export.G + $export.F * (parseInt != $parseInt), {
        parseInt: $parseInt
    });
}, 
/* 200 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), $parseFloat = __webpack_require__(125);
    // 18.2.4 parseFloat(string)
    $export($export.G + $export.F * (parseFloat != $parseFloat), {
        parseFloat: $parseFloat
    });
}, 
/* 201 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(2), has = __webpack_require__(14), cof = __webpack_require__(20), inheritIfRequired = __webpack_require__(86), toPrimitive = __webpack_require__(23), fails = __webpack_require__(3), gOPN = __webpack_require__(39).f, gOPD = __webpack_require__(16).f, dP = __webpack_require__(8).f, $trim = __webpack_require__(47).trim, $Number = global["Number"], Base = $Number, proto = $Number.prototype, BROKEN_COF = "Number" == cof(__webpack_require__(38)(proto)), TRIM = "trim" in String.prototype, toNumber = function(argument) {
        var it = toPrimitive(argument, !1);
        if ("string" == typeof it && 2 < it.length) {
            var third, radix, maxCode, first = (it = TRIM ? it.trim() : $trim(it, 3)).charCodeAt(0);
            if (43 === first || 45 === first) {
                if (88 === (third = it.charCodeAt(2)) || 120 === third) return NaN;
 // Number('+0x1') should be NaN, old V8 fix
                        } else if (48 === first) {
                switch (it.charCodeAt(1)) {
                  case 66:
                  case 98:
                    radix = 2, maxCode = 49;
                    break;

 // fast equal /^0b[01]+$/i
                                      case 79:
                  case 111:
                    radix = 8, maxCode = 55;
                    break;

 // fast equal /^0o[0-7]+$/i
                                      default:
                    return +it;
                }
                for (var code, digits = it.slice(2), i = 0, l = digits.length; i < l; i++) 
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if ((code = digits.charCodeAt(i)) < 48 || maxCode < code) return NaN;
                return parseInt(digits, radix);
            }
        }
        return +it;
    };
    if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
        $Number = function Number(value) {
            var it = arguments.length < 1 ? 0 : value, that = this;
            return that instanceof $Number && (BROKEN_COF ? fails(function() {
                proto.valueOf.call(that);
            }) : "Number" != cof(that)) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
        };
        for (var key, keys = __webpack_require__(7) ? gOPN(Base) : 
        // ES3:
        "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0; keys.length > j; j++) has(Base, key = keys[j]) && !has($Number, key) && dP($Number, key, gOPD(Base, key));
        ($Number.prototype = proto).constructor = $Number, __webpack_require__(12)(global, "Number", $Number);
    }
    /***/}, 
/* 202 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toInteger = __webpack_require__(21), aNumberValue = __webpack_require__(126), repeat = __webpack_require__(87), $toFixed = 1..toFixed, floor = Math.floor, data = [ 0, 0, 0, 0, 0, 0 ], ERROR = "Number.toFixed: incorrect invocation!", multiply = function(n, c) {
        for (var i = -1, c2 = c; ++i < 6; ) c2 += n * data[i], data[i] = c2 % 1e7, c2 = floor(c2 / 1e7);
    }, divide = function(n) {
        for (var i = 6, c = 0; 0 <= --i; ) c += data[i], data[i] = floor(c / n), c = c % n * 1e7;
    }, numToString = function() {
        for (var i = 6, s = ""; 0 <= --i; ) if ("" !== s || 0 === i || 0 !== data[i]) {
            var t = String(data[i]);
            s = "" === s ? t : s + repeat.call("0", 7 - t.length) + t;
        }
        return s;
    }, pow = function(x, n, acc) {
        return 0 === n ? acc : n % 2 == 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    $export($export.P + $export.F * (!!$toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !__webpack_require__(3)(function() {
        // V8 ~ Android 4.3-
        $toFixed.call({});
    })), "Number", {
        toFixed: function(fractionDigits) {
            var e, z, j, k, x = aNumberValue(this, ERROR), f = toInteger(fractionDigits), s = "", m = "0";
            if (f < 0 || 20 < f) throw RangeError(ERROR);
            // eslint-disable-next-line no-self-compare
                        if (x != x) return "NaN";
            if (x <= -1e21 || 1e21 <= x) return String(x);
            if (x < 0 && (s = "-", x = -x), 1e-21 < x) if (z = (e = function(x) {
                for (var n = 0, x2 = x; 4096 <= x2; ) n += 12, x2 /= 4096;
                for (;2 <= x2; ) n += 1, x2 /= 2;
                return n;
            }(x * pow(2, 69, 1)) - 69) < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1), z *= 4503599627370496, 
            0 < (e = 52 - e)) {
                for (multiply(0, z), j = f; 7 <= j; ) multiply(1e7, 0), j -= 7;
                for (multiply(pow(10, j, 1), 0), j = e - 1; 23 <= j; ) divide(1 << 23), j -= 23;
                divide(1 << j), multiply(1, 1), divide(2), m = numToString();
            } else multiply(0, z), multiply(1 << -e, 0), m = numToString() + repeat.call("0", f);
            return m = 0 < f ? s + ((k = m.length) <= f ? "0." + repeat.call("0", f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f)) : s + m;
        }
    });
}, 
/* 203 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $fails = __webpack_require__(3), aNumberValue = __webpack_require__(126), $toPrecision = 1..toPrecision;
    $export($export.P + $export.F * ($fails(function() {
        // IE7-
        return "1" !== $toPrecision.call(1, undefined);
    }) || !$fails(function() {
        // V8 ~ Android 4.3-
        $toPrecision.call({});
    })), "Number", {
        toPrecision: function(precision) {
            var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
            return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
        }
    });
}, 
/* 204 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.1 Number.EPSILON
    var $export = __webpack_require__(0);
    $export($export.S, "Number", {
        EPSILON: Math.pow(2, -52)
    });
}, 
/* 205 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.2 Number.isFinite(number)
    var $export = __webpack_require__(0), _isFinite = __webpack_require__(2).isFinite;
    $export($export.S, "Number", {
        isFinite: function isFinite(it) {
            return "number" == typeof it && _isFinite(it);
        }
    });
}, 
/* 206 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.3 Number.isInteger(number)
    var $export = __webpack_require__(0);
    $export($export.S, "Number", {
        isInteger: __webpack_require__(127)
    });
}, 
/* 207 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.4 Number.isNaN(number)
    var $export = __webpack_require__(0);
    $export($export.S, "Number", {
        isNaN: function isNaN(number) {
            // eslint-disable-next-line no-self-compare
            return number != number;
        }
    });
}, 
/* 208 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.5 Number.isSafeInteger(number)
    var $export = __webpack_require__(0), isInteger = __webpack_require__(127), abs = Math.abs;
    $export($export.S, "Number", {
        isSafeInteger: function(number) {
            return isInteger(number) && abs(number) <= 9007199254740991;
        }
    });
}, 
/* 209 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.6 Number.MAX_SAFE_INTEGER
    var $export = __webpack_require__(0);
    $export($export.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    });
}, 
/* 210 */
/***/ function(module, exports, __webpack_require__) {
    // 20.1.2.10 Number.MIN_SAFE_INTEGER
    var $export = __webpack_require__(0);
    $export($export.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    });
}, 
/* 211 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), $parseFloat = __webpack_require__(125);
    // 20.1.2.12 Number.parseFloat(string)
    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), "Number", {
        parseFloat: $parseFloat
    });
}, 
/* 212 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), $parseInt = __webpack_require__(124);
    // 20.1.2.13 Number.parseInt(string, radix)
    $export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", {
        parseInt: $parseInt
    });
}, 
/* 213 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.3 Math.acosh(x)
    var $export = __webpack_require__(0), log1p = __webpack_require__(128), sqrt = Math.sqrt, $acosh = Math.acosh;
    $export($export.S + $export.F * !($acosh && 710 == Math.floor($acosh(Number.MAX_VALUE)) && $acosh(Infinity) == Infinity), "Math", {
        acosh: function(x) {
            return (x = +x) < 1 ? NaN : 94906265.62425156 < x ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        }
    });
}, 
/* 214 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.5 Math.asinh(x)
    var $export = __webpack_require__(0), $asinh = Math.asinh;
    // Tor Browser bug: Math.asinh(0) -> -0
    $export($export.S + $export.F * !($asinh && 0 < 1 / $asinh(0)), "Math", {
        asinh: function asinh(x) {
            return isFinite(x = +x) && 0 != x ? x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1)) : x;
        }
    });
}, 
/* 215 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.7 Math.atanh(x)
    var $export = __webpack_require__(0), $atanh = Math.atanh;
    // Tor Browser bug: Math.atanh(-0) -> 0
    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
        atanh: function(x) {
            return 0 == (x = +x) ? x : Math.log((1 + x) / (1 - x)) / 2;
        }
    });
}, 
/* 216 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.9 Math.cbrt(x)
    var $export = __webpack_require__(0), sign = __webpack_require__(88);
    $export($export.S, "Math", {
        cbrt: function(x) {
            return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
        }
    });
}, 
/* 217 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.11 Math.clz32(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        clz32: function(x) {
            return (x >>>= 0) ? 31 - Math.floor(Math.log(x + .5) * Math.LOG2E) : 32;
        }
    });
}, 
/* 218 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.12 Math.cosh(x)
    var $export = __webpack_require__(0), exp = Math.exp;
    $export($export.S, "Math", {
        cosh: function(x) {
            return (exp(x = +x) + exp(-x)) / 2;
        }
    });
}, 
/* 219 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.14 Math.expm1(x)
    var $export = __webpack_require__(0), $expm1 = __webpack_require__(89);
    $export($export.S + $export.F * ($expm1 != Math.expm1), "Math", {
        expm1: $expm1
    });
}, 
/* 220 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.16 Math.fround(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        fround: __webpack_require__(129)
    });
}, 
/* 221 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    var $export = __webpack_require__(0), abs = Math.abs;
    $export($export.S, "Math", {
        hypot: function(value1, value2) {
            for (// eslint-disable-line no-unused-vars
            var arg, div, sum = 0, i = 0, aLen = arguments.length, larg = 0; i < aLen; ) larg < (arg = abs(arguments[i++])) ? (sum = sum * (div = larg / arg) * div + 1, 
            larg = arg) : sum += 0 < arg ? (div = arg / larg) * div : arg;
            return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
        }
    });
}, 
/* 222 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.18 Math.imul(x, y)
    var $export = __webpack_require__(0), $imul = Math.imul;
    // some WebKit versions fails with big numbers, some has wrong arity
    $export($export.S + $export.F * __webpack_require__(3)(function() {
        return -5 != $imul(4294967295, 5) || 2 != $imul.length;
    }), "Math", {
        imul: function(x, y) {
            var xn = +x, yn = +y, xl = 65535 & xn, yl = 65535 & yn;
            return 0 | xl * yl + ((65535 & xn >>> 16) * yl + xl * (65535 & yn >>> 16) << 16 >>> 0);
        }
    });
}, 
/* 223 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.21 Math.log10(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        log10: function(x) {
            return Math.log(x) * Math.LOG10E;
        }
    });
}, 
/* 224 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.20 Math.log1p(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        log1p: __webpack_require__(128)
    });
}, 
/* 225 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.22 Math.log2(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        log2: function(x) {
            return Math.log(x) / Math.LN2;
        }
    });
}, 
/* 226 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.28 Math.sign(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        sign: __webpack_require__(88)
    });
}, 
/* 227 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.30 Math.sinh(x)
    var $export = __webpack_require__(0), expm1 = __webpack_require__(89), exp = Math.exp;
    // V8 near Chromium 38 has a problem with very small numbers
    $export($export.S + $export.F * __webpack_require__(3)(function() {
        return -2e-17 != !Math.sinh(-2e-17);
    }), "Math", {
        sinh: function(x) {
            return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
        }
    });
}, 
/* 228 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.33 Math.tanh(x)
    var $export = __webpack_require__(0), expm1 = __webpack_require__(89), exp = Math.exp;
    $export($export.S, "Math", {
        tanh: function(x) {
            var a = expm1(x = +x), b = expm1(-x);
            return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        }
    });
}, 
/* 229 */
/***/ function(module, exports, __webpack_require__) {
    // 20.2.2.34 Math.trunc(x)
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        trunc: function(it) {
            return (0 < it ? Math.floor : Math.ceil)(it);
        }
    });
}, 
/* 230 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), toAbsoluteIndex = __webpack_require__(37), fromCharCode = String.fromCharCode, $fromCodePoint = String.fromCodePoint;
    // length should be 1, old FF problem
    $export($export.S + $export.F * (!!$fromCodePoint && 1 != $fromCodePoint.length), "String", {
        // 21.1.2.2 String.fromCodePoint(...codePoints)
        fromCodePoint: function(x) {
            for (// eslint-disable-line no-unused-vars
            var code, res = [], aLen = arguments.length, i = 0; i < aLen; ) {
                if (code = +arguments[i++], toAbsoluteIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
                res.push(code < 65536 ? fromCharCode(code) : fromCharCode(55296 + ((code -= 65536) >> 10), code % 1024 + 56320));
            }
            return res.join("");
        }
    });
}, 
/* 231 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), toIObject = __webpack_require__(15), toLength = __webpack_require__(6);
    $export($export.S, "String", {
        // 21.1.2.4 String.raw(callSite, ...substitutions)
        raw: function(callSite) {
            for (var tpl = toIObject(callSite.raw), len = toLength(tpl.length), aLen = arguments.length, res = [], i = 0; i < len; ) res.push(String(tpl[i++])), 
            i < aLen && res.push(String(arguments[i]));
            return res.join("");
        }
    });
}, 
/* 232 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 21.1.3.25 String.prototype.trim()
        __webpack_require__(47)("trim", function($trim) {
        return function() {
            return $trim(this, 3);
        };
    });
}, 
/* 233 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $at = __webpack_require__(63)(!0);
    // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(90)(String, "String", function(iterated) {
        this._t = String(iterated), // target
        this._i = 0;
    }, function() {
        var point, O = this._t, index = this._i;
        return index >= O.length ? {
            value: undefined,
            done: !0
        } : (point = $at(O, index), this._i += point.length, {
            value: point,
            done: !1
        });
    });
}, 
/* 234 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $at = __webpack_require__(63)(!1);
    $export($export.P, "String", {
        // 21.1.3.3 String.prototype.codePointAt(pos)
        codePointAt: function(pos) {
            return $at(this, pos);
        }
    });
}, 
/* 235 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
        var $export = __webpack_require__(0), toLength = __webpack_require__(6), context = __webpack_require__(92), $endsWith = ""["endsWith"];
    $export($export.P + $export.F * __webpack_require__(93)("endsWith"), "String", {
        endsWith: function(searchString /* , endPosition = @length */) {
            var that = context(this, searchString, "endsWith"), endPosition = 1 < arguments.length ? arguments[1] : undefined, len = toLength(that.length), end = endPosition === undefined ? len : Math.min(toLength(endPosition), len), search = String(searchString);
            return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
        }
    });
}, 
/* 236 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
        var $export = __webpack_require__(0), context = __webpack_require__(92);
    $export($export.P + $export.F * __webpack_require__(93)("includes"), "String", {
        includes: function(searchString /* , position = 0 */) {
            return !!~context(this, searchString, "includes").indexOf(searchString, 1 < arguments.length ? arguments[1] : undefined);
        }
    });
}, 
/* 237 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0);
    $export($export.P, "String", {
        // 21.1.3.13 String.prototype.repeat(count)
        repeat: __webpack_require__(87)
    });
}, 
/* 238 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
        var $export = __webpack_require__(0), toLength = __webpack_require__(6), context = __webpack_require__(92), $startsWith = ""["startsWith"];
    $export($export.P + $export.F * __webpack_require__(93)("startsWith"), "String", {
        startsWith: function(searchString /* , position = 0 */) {
            var that = context(this, searchString, "startsWith"), index = toLength(Math.min(1 < arguments.length ? arguments[1] : undefined, that.length)), search = String(searchString);
            return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        }
    });
}, 
/* 239 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.2 String.prototype.anchor(name)
        __webpack_require__(13)("anchor", function(createHTML) {
        return function(name) {
            return createHTML(this, "a", "name", name);
        };
    });
}, 
/* 240 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.3 String.prototype.big()
        __webpack_require__(13)("big", function(createHTML) {
        return function() {
            return createHTML(this, "big", "", "");
        };
    });
}, 
/* 241 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.4 String.prototype.blink()
        __webpack_require__(13)("blink", function(createHTML) {
        return function() {
            return createHTML(this, "blink", "", "");
        };
    });
}, 
/* 242 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.5 String.prototype.bold()
        __webpack_require__(13)("bold", function(createHTML) {
        return function() {
            return createHTML(this, "b", "", "");
        };
    });
}, 
/* 243 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.6 String.prototype.fixed()
        __webpack_require__(13)("fixed", function(createHTML) {
        return function() {
            return createHTML(this, "tt", "", "");
        };
    });
}, 
/* 244 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.7 String.prototype.fontcolor(color)
        __webpack_require__(13)("fontcolor", function(createHTML) {
        return function(color) {
            return createHTML(this, "font", "color", color);
        };
    });
}, 
/* 245 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.8 String.prototype.fontsize(size)
        __webpack_require__(13)("fontsize", function(createHTML) {
        return function(size) {
            return createHTML(this, "font", "size", size);
        };
    });
}, 
/* 246 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.9 String.prototype.italics()
        __webpack_require__(13)("italics", function(createHTML) {
        return function() {
            return createHTML(this, "i", "", "");
        };
    });
}, 
/* 247 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.10 String.prototype.link(url)
        __webpack_require__(13)("link", function(createHTML) {
        return function(url) {
            return createHTML(this, "a", "href", url);
        };
    });
}, 
/* 248 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.11 String.prototype.small()
        __webpack_require__(13)("small", function(createHTML) {
        return function() {
            return createHTML(this, "small", "", "");
        };
    });
}, 
/* 249 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.12 String.prototype.strike()
        __webpack_require__(13)("strike", function(createHTML) {
        return function() {
            return createHTML(this, "strike", "", "");
        };
    });
}, 
/* 250 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.13 String.prototype.sub()
        __webpack_require__(13)("sub", function(createHTML) {
        return function() {
            return createHTML(this, "sub", "", "");
        };
    });
}, 
/* 251 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // B.2.3.14 String.prototype.sup()
        __webpack_require__(13)("sup", function(createHTML) {
        return function() {
            return createHTML(this, "sup", "", "");
        };
    });
}, 
/* 252 */
/***/ function(module, exports, __webpack_require__) {
    // 20.3.3.1 / 15.9.4.4 Date.now()
    var $export = __webpack_require__(0);
    $export($export.S, "Date", {
        now: function() {
            return new Date().getTime();
        }
    });
}, 
/* 253 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toObject = __webpack_require__(9), toPrimitive = __webpack_require__(23);
    $export($export.P + $export.F * __webpack_require__(3)(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1;
            }
        });
    }), "Date", {
        // eslint-disable-next-line no-unused-vars
        toJSON: function(key) {
            var O = toObject(this), pv = toPrimitive(O);
            return "number" != typeof pv || isFinite(pv) ? O.toISOString() : null;
        }
    });
}, 
/* 254 */
/***/ function(module, exports, __webpack_require__) {
    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
    var $export = __webpack_require__(0), toISOString = __webpack_require__(255);
    // PhantomJS / old WebKit has a broken implementations
    $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), "Date", {
        toISOString: toISOString
    });
}, 
/* 255 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var fails = __webpack_require__(3), getTime = Date.prototype.getTime, $toISOString = Date.prototype.toISOString, lz = function(num) {
        return 9 < num ? num : "0" + num;
    };
    // PhantomJS / old WebKit has a broken implementations
    module.exports = fails(function() {
        return "0385-07-25T07:06:39.999Z" != $toISOString.call(new Date(-5e13 - 1));
    }) || !fails(function() {
        $toISOString.call(new Date(NaN));
    }) ? function() {
        if (!isFinite(getTime.call(this))) throw RangeError("Invalid time value");
        var d = this, y = d.getUTCFullYear(), m = d.getUTCMilliseconds(), s = y < 0 ? "-" : 9999 < y ? "+" : "";
        return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (99 < m ? m : "0" + lz(m)) + "Z";
    } : $toISOString;
}, 
/* 256 */
/***/ function(module, exports, __webpack_require__) {
    var DateProto = Date.prototype, $toString = DateProto["toString"], getTime = DateProto.getTime;
    new Date(NaN) + "" != "Invalid Date" && __webpack_require__(12)(DateProto, "toString", function() {
        var value = getTime.call(this);
        // eslint-disable-next-line no-self-compare
                return value == value ? $toString.call(this) : "Invalid Date";
    })
    /***/;
}, 
/* 257 */
/***/ function(module, exports, __webpack_require__) {
    var TO_PRIMITIVE = __webpack_require__(5)("toPrimitive"), proto = Date.prototype;
    TO_PRIMITIVE in proto || __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(258))
    /***/;
}, 
/* 258 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var anObject = __webpack_require__(1), toPrimitive = __webpack_require__(23);
    module.exports = function(hint) {
        if ("string" !== hint && "number" !== hint && "default" !== hint) throw TypeError("Incorrect hint");
        return toPrimitive(anObject(this), "number" != hint);
    };
}, 
/* 259 */
/***/ function(module, exports, __webpack_require__) {
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    var $export = __webpack_require__(0);
    $export($export.S, "Array", {
        isArray: __webpack_require__(62)
    });
}, 
/* 260 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var ctx = __webpack_require__(19), $export = __webpack_require__(0), toObject = __webpack_require__(9), call = __webpack_require__(130), isArrayIter = __webpack_require__(94), toLength = __webpack_require__(6), createProperty = __webpack_require__(95), getIterFn = __webpack_require__(96);
    $export($export.S + $export.F * !__webpack_require__(65)(function(iter) {
        Array.from(iter);
    }), "Array", {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
            var length, result, step, iterator, O = toObject(arrayLike), C = "function" == typeof this ? this : Array, aLen = arguments.length, mapfn = 1 < aLen ? arguments[1] : undefined, mapping = mapfn !== undefined, index = 0, iterFn = getIterFn(O);
            // if object isn't iterable or it's array with default iterator - use simple case
            if (mapping && (mapfn = ctx(mapfn, 2 < aLen ? arguments[2] : undefined, 2)), iterFn == undefined || C == Array && isArrayIter(iterFn)) for (result = new C(length = toLength(O.length)); index < length; index++) createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]); else for (iterator = iterFn.call(O), 
            result = new C(); !(step = iterator.next()).done; index++) createProperty(result, index, mapping ? call(iterator, mapfn, [ step.value, index ], !0) : step.value);
            return result.length = index, result;
        }
    });
}, 
/* 261 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), createProperty = __webpack_require__(95);
    // WebKit Array.of isn't generic
    $export($export.S + $export.F * __webpack_require__(3)(function() {
        function F() {/* empty */}
        return !(Array.of.call(F) instanceof F);
    }), "Array", {
        // 22.1.2.3 Array.of( ...items)
        of: function() {
            for (var index = 0, aLen = arguments.length, result = new ("function" == typeof this ? this : Array)(aLen); index < aLen; ) createProperty(result, index, arguments[index++]);
            return result.length = aLen, result;
        }
    });
}, 
/* 262 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 22.1.3.13 Array.prototype.join(separator)
        var $export = __webpack_require__(0), toIObject = __webpack_require__(15), arrayJoin = [].join;
    // fallback for not array-like strings
    $export($export.P + $export.F * (__webpack_require__(52) != Object || !__webpack_require__(22)(arrayJoin)), "Array", {
        join: function(separator) {
            return arrayJoin.call(toIObject(this), separator === undefined ? "," : separator);
        }
    });
}, 
/* 263 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), html = __webpack_require__(83), cof = __webpack_require__(20), toAbsoluteIndex = __webpack_require__(37), toLength = __webpack_require__(6), arraySlice = [].slice;
    // fallback for not array-like ES3 strings and DOM objects
    $export($export.P + $export.F * __webpack_require__(3)(function() {
        html && arraySlice.call(html);
    }), "Array", {
        slice: function(begin, end) {
            var len = toLength(this.length), klass = cof(this);
            if (end = end === undefined ? len : end, "Array" == klass) return arraySlice.call(this, begin, end);
            for (var start = toAbsoluteIndex(begin, len), upTo = toAbsoluteIndex(end, len), size = toLength(upTo - start), cloned = new Array(size), i = 0; i < size; i++) cloned[i] = "String" == klass ? this.charAt(start + i) : this[start + i];
            return cloned;
        }
    });
}, 
/* 264 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), aFunction = __webpack_require__(10), toObject = __webpack_require__(9), fails = __webpack_require__(3), $sort = [].sort, test = [ 1, 2, 3 ];
    $export($export.P + $export.F * (fails(function() {
        // IE8-
        test.sort(undefined);
    }) || !fails(function() {
        // V8 bug
        test.sort(null);
        // Old WebKit
        }) || !__webpack_require__(22)($sort)), "Array", {
        // 22.1.3.25 Array.prototype.sort(comparefn)
        sort: function(comparefn) {
            return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
        }
    });
}, 
/* 265 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $forEach = __webpack_require__(26)(0), STRICT = __webpack_require__(22)([].forEach, !0);
    $export($export.P + $export.F * !STRICT, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function(callbackfn /* , thisArg */) {
            return $forEach(this, callbackfn, arguments[1]);
        }
    });
}, 
/* 266 */
/***/ function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4), isArray = __webpack_require__(62), SPECIES = __webpack_require__(5)("species");
    module.exports = function(original) {
        var C;
        return isArray(original) && (
        // cross-realm fallback
        "function" != typeof (C = original.constructor) || C !== Array && !isArray(C.prototype) || (C = undefined), 
        isObject(C) && null === (C = C[SPECIES]) && (C = undefined)), C === undefined ? Array : C;
    };
}, 
/* 267 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $map = __webpack_require__(26)(1);
    $export($export.P + $export.F * !__webpack_require__(22)([].map, !0), "Array", {
        // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
        map: function(callbackfn /* , thisArg */) {
            return $map(this, callbackfn, arguments[1]);
        }
    });
}, 
/* 268 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $filter = __webpack_require__(26)(2);
    $export($export.P + $export.F * !__webpack_require__(22)([].filter, !0), "Array", {
        // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
        filter: function(callbackfn /* , thisArg */) {
            return $filter(this, callbackfn, arguments[1]);
        }
    });
}, 
/* 269 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $some = __webpack_require__(26)(3);
    $export($export.P + $export.F * !__webpack_require__(22)([].some, !0), "Array", {
        // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
        some: function(callbackfn /* , thisArg */) {
            return $some(this, callbackfn, arguments[1]);
        }
    });
}, 
/* 270 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $every = __webpack_require__(26)(4);
    $export($export.P + $export.F * !__webpack_require__(22)([].every, !0), "Array", {
        // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
        every: function(callbackfn /* , thisArg */) {
            return $every(this, callbackfn, arguments[1]);
        }
    });
}, 
/* 271 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $reduce = __webpack_require__(131);
    $export($export.P + $export.F * !__webpack_require__(22)([].reduce, !0), "Array", {
        // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
        reduce: function(callbackfn /* , initialValue */) {
            return $reduce(this, callbackfn, arguments.length, arguments[1], !1);
        }
    });
}, 
/* 272 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $reduce = __webpack_require__(131);
    $export($export.P + $export.F * !__webpack_require__(22)([].reduceRight, !0), "Array", {
        // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
        reduceRight: function(callbackfn /* , initialValue */) {
            return $reduce(this, callbackfn, arguments.length, arguments[1], !0);
        }
    });
}, 
/* 273 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $indexOf = __webpack_require__(60)(!1), $native = [].indexOf, NEGATIVE_ZERO = !!$native && 1 / [ 1 ].indexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), "Array", {
        // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
        indexOf: function(searchElement /* , fromIndex = 0 */) {
            return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
        }
    });
}, 
/* 274 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toIObject = __webpack_require__(15), toInteger = __webpack_require__(21), toLength = __webpack_require__(6), $native = [].lastIndexOf, NEGATIVE_ZERO = !!$native && 1 / [ 1 ].lastIndexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), "Array", {
        // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
        lastIndexOf: function(searchElement /* , fromIndex = @[*-1] */) {
            // convert -0 to +0
            if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
            var O = toIObject(this), length = toLength(O.length), index = length - 1;
            for (1 < arguments.length && (index = Math.min(index, toInteger(arguments[1]))), 
            index < 0 && (index = length + index); 0 <= index; index--) if (index in O && O[index] === searchElement) return index || 0;
            return -1;
        }
    });
}, 
/* 275 */
/***/ function(module, exports, __webpack_require__) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    var $export = __webpack_require__(0);
    $export($export.P, "Array", {
        copyWithin: __webpack_require__(132)
    }), __webpack_require__(32)("copyWithin");
}, 
/* 276 */
/***/ function(module, exports, __webpack_require__) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    var $export = __webpack_require__(0);
    $export($export.P, "Array", {
        fill: __webpack_require__(98)
    }), __webpack_require__(32)("fill");
}, 
/* 277 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
        var $export = __webpack_require__(0), $find = __webpack_require__(26)(5), forced = !0;
    // Shouldn't skip holes
    "find" in [] && Array(1)["find"](function() {
        forced = !1;
    }), $export($export.P + $export.F * forced, "Array", {
        find: function(callbackfn /* , that = undefined */) {
            return $find(this, callbackfn, 1 < arguments.length ? arguments[1] : undefined);
        }
    }), __webpack_require__(32)("find");
}, 
/* 278 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
        var $export = __webpack_require__(0), $find = __webpack_require__(26)(6), KEY = "findIndex", forced = !0;
    // Shouldn't skip holes
    KEY in [] && Array(1)[KEY](function() {
        forced = !1;
    }), $export($export.P + $export.F * forced, "Array", {
        findIndex: function(callbackfn /* , that = undefined */) {
            return $find(this, callbackfn, 1 < arguments.length ? arguments[1] : undefined);
        }
    }), __webpack_require__(32)(KEY);
}, 
/* 279 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(40)("Array");
    /***/}, 
/* 280 */
/***/ function(module, exports, __webpack_require__) {
    var global = __webpack_require__(2), inheritIfRequired = __webpack_require__(86), dP = __webpack_require__(8).f, gOPN = __webpack_require__(39).f, isRegExp = __webpack_require__(64), $flags = __webpack_require__(54), $RegExp = global.RegExp, Base = $RegExp, proto = $RegExp.prototype, re1 = /a/g, re2 = /a/g, CORRECT_NEW = new $RegExp(re1) !== re1;
    if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(3)(function() {
        // RegExp constructor can alter flags and IsRegExp works correct with @@match
        return re2[__webpack_require__(5)("match")] = !1, $RegExp(re1) != re1 || $RegExp(re2) == re2 || "/a/i" != $RegExp(re1, "i");
    }))) {
        $RegExp = function RegExp(p, f) {
            var tiRE = this instanceof $RegExp, piRE = isRegExp(p), fiU = f === undefined;
            return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
        };
        for (var proxy = function(key) {
            key in $RegExp || dP($RegExp, key, {
                configurable: !0,
                get: function() {
                    return Base[key];
                },
                set: function(it) {
                    Base[key] = it;
                }
            });
        }, keys = gOPN(Base), i = 0; keys.length > i; ) proxy(keys[i++]);
        (proto.constructor = $RegExp).prototype = proto, __webpack_require__(12)(global, "RegExp", $RegExp);
    }
    __webpack_require__(40)("RegExp");
}, 
/* 281 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(135);
    var anObject = __webpack_require__(1), $flags = __webpack_require__(54), DESCRIPTORS = __webpack_require__(7), $toString = /./["toString"], define = function(fn) {
        __webpack_require__(12)(RegExp.prototype, "toString", fn, !0);
    };
    // 21.2.5.14 RegExp.prototype.toString()
    __webpack_require__(3)(function() {
        return "/a/b" != $toString.call({
            source: "a",
            flags: "b"
        });
    }) ? define(function() {
        var R = anObject(this);
        return "/".concat(R.source, "/", "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    }) : "toString" != $toString.name && define(function() {
        return $toString.call(this);
    })
    /***/;
}, 
/* 282 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var anObject = __webpack_require__(1), toLength = __webpack_require__(6), advanceStringIndex = __webpack_require__(101), regExpExec = __webpack_require__(66);
    // @@match logic
    __webpack_require__(67)("match", 1, function(defined, MATCH, $match, maybeCallNative) {
        return [ 
        // `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function(regexp) {
            var O = defined(this), fn = regexp == undefined ? undefined : regexp[MATCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        }, 
        // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function(regexp) {
            var res = maybeCallNative($match, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp), S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            for (var result, fullUnicode = rx.unicode, A = [], n = rx.lastIndex = 0; null !== (result = regExpExec(rx, S)); ) {
                var matchStr = String(result[0]);
                "" === (A[n] = matchStr) && (rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)), 
                n++;
            }
            return 0 === n ? null : A;
        } ];
    });
}, 
/* 283 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var anObject = __webpack_require__(1), toObject = __webpack_require__(9), toLength = __webpack_require__(6), toInteger = __webpack_require__(21), advanceStringIndex = __webpack_require__(101), regExpExec = __webpack_require__(66), max = Math.max, min = Math.min, floor = Math.floor, SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g, SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
    // @@replace logic
    __webpack_require__(67)("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
        return [ 
        // `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function(searchValue, replaceValue) {
            var O = defined(this), fn = searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
        }, 
        // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function(regexp, replaceValue) {
            var res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done) return res.value;
            var rx = anObject(regexp), S = String(this), functionalReplace = "function" == typeof replaceValue;
            functionalReplace || (replaceValue = String(replaceValue));
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            for (var results = []; ;) {
                var result = regExpExec(rx, S);
                if (null === result) break;
                if (results.push(result), !global) break;
                "" === String(result[0]) && (rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode));
            }
            for (var it, accumulatedResult = "", nextSourcePosition = 0, i = 0; i < results.length; i++) {
                result = results[i];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for (var matched = String(result[0]), position = max(min(toInteger(result.index), S.length), 0), captures = [], j = 1; j < result.length; j++) captures.push((it = result[j]) === undefined ? it : String(it));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = [ matched ].concat(captures, position, S);
                    namedCaptures !== undefined && replacerArgs.push(namedCaptures);
                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                nextSourcePosition <= position && (accumulatedResult += S.slice(nextSourcePosition, position) + replacement, 
                nextSourcePosition = position + matched.length);
            }
            return accumulatedResult + S.slice(nextSourcePosition);
        } ];
        // https://tc39.github.io/ecma262/#sec-getsubstitution
                function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length, m = captures.length, symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
            return namedCaptures !== undefined && (namedCaptures = toObject(namedCaptures), 
            symbols = SUBSTITUTION_SYMBOLS), $replace.call(replacement, symbols, function(match, ch) {
                var capture;
                switch (ch.charAt(0)) {
                  case "$":
                    return "$";

                  case "&":
                    return matched;

                  case "`":
                    return str.slice(0, position);

                  case "'":
                    return str.slice(tailPos);

                  case "<":
                    capture = namedCaptures[ch.slice(1, -1)];
                    break;

                  default:
                    // \d\d?
                    var n = +ch;
                    if (0 === n) return match;
                    if (m < n) {
                        var f = floor(n / 10);
                        return 0 === f ? match : f <= m ? captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1) : match;
                    }
                    capture = captures[n - 1];
                }
                return capture === undefined ? "" : capture;
            });
        }
    });
}, 
/* 284 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var anObject = __webpack_require__(1), sameValue = __webpack_require__(121), regExpExec = __webpack_require__(66);
    // @@search logic
    __webpack_require__(67)("search", 1, function(defined, SEARCH, $search, maybeCallNative) {
        return [ 
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function(regexp) {
            var O = defined(this), fn = regexp == undefined ? undefined : regexp[SEARCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        }, 
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function(regexp) {
            var res = maybeCallNative($search, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp), S = String(this), previousLastIndex = rx.lastIndex;
            sameValue(previousLastIndex, 0) || (rx.lastIndex = 0);
            var result = regExpExec(rx, S);
            return sameValue(rx.lastIndex, previousLastIndex) || (rx.lastIndex = previousLastIndex), 
            null === result ? -1 : result.index;
        } ];
    });
}, 
/* 285 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var isRegExp = __webpack_require__(64), anObject = __webpack_require__(1), speciesConstructor = __webpack_require__(55), advanceStringIndex = __webpack_require__(101), toLength = __webpack_require__(6), callRegExpExec = __webpack_require__(66), regexpExec = __webpack_require__(100), $min = Math.min, $push = [].push, LENGTH = "length", SUPPORTS_Y = !!function() {
        try {
            return new RegExp("x", "y");
        } catch (e) {}
    }();
    // @@split logic
    __webpack_require__(67)("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
        var internalSplit;
        // based on es5-shim implementation, need to rework it
        return internalSplit = "c" == "abbc"["split"](/(b)*/)[1] || 4 != "test"["split"](/(?:)/, -1)[LENGTH] || 2 != "ab"["split"](/(?:ab)*/)[LENGTH] || 4 != "."["split"](/(.?)(.?)/)[LENGTH] || 1 < "."["split"](/()()/)[LENGTH] || ""["split"](/.?/)[LENGTH] ? function(separator, limit) {
            var string = String(this);
            if (separator === undefined && 0 === limit) return [];
            // If `separator` is not a regex, use native split
                        if (!isRegExp(separator)) return $split.call(string, separator, limit);
            for (var match, lastIndex, lastLength, output = [], flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : ""), lastLastIndex = 0, splitLimit = limit === undefined ? 4294967295 : limit >>> 0, separatorCopy = new RegExp(separator.source, flags + "g"); (match = regexpExec.call(separatorCopy, string)) && !(lastLastIndex < (lastIndex = separatorCopy["lastIndex"]) && (output.push(string.slice(lastLastIndex, match.index)), 
            1 < match[LENGTH] && match.index < string[LENGTH] && $push.apply(output, match.slice(1)), 
            lastLength = match[0][LENGTH], lastLastIndex = lastIndex, output[LENGTH] >= splitLimit)); ) separatorCopy["lastIndex"] === match.index && separatorCopy["lastIndex"]++;
 // Avoid an infinite loop
                        return lastLastIndex === string[LENGTH] ? !lastLength && separatorCopy.test("") || output.push("") : output.push(string.slice(lastLastIndex)), 
            output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
        } : "0"["split"](undefined, 0)[LENGTH] ? function(separator, limit) {
            return separator === undefined && 0 === limit ? [] : $split.call(this, separator, limit);
        } : $split, [ 
        // `String.prototype.split` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.split
        function(separator, limit) {
            var O = defined(this), splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        }, 
        // `RegExp.prototype[@@split]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done) return res.value;
            var rx = anObject(regexp), S = String(this), C = speciesConstructor(rx, RegExp), unicodeMatching = rx.unicode, flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g"), splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags), lim = limit === undefined ? 4294967295 : limit >>> 0;
            if (0 === lim) return [];
            if (0 === S.length) return null === callRegExpExec(splitter, S) ? [ S ] : [];
            for (var p = 0, q = 0, A = []; q < S.length; ) {
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var e, z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                if (null === z || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching); else {
                    if (A.push(S.slice(p, q)), A.length === lim) return A;
                    for (var i = 1; i <= z.length - 1; i++) if (A.push(z[i]), A.length === lim) return A;
                    q = p = e;
                }
            }
            return A.push(S.slice(p)), A;
        } ];
    });
}, 
/* 286 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper, LIBRARY = __webpack_require__(31), global = __webpack_require__(2), ctx = __webpack_require__(19), classof = __webpack_require__(46), $export = __webpack_require__(0), isObject = __webpack_require__(4), aFunction = __webpack_require__(10), anInstance = __webpack_require__(41), forOf = __webpack_require__(42), speciesConstructor = __webpack_require__(55), task = __webpack_require__(102).set, microtask = __webpack_require__(103)(), newPromiseCapabilityModule = __webpack_require__(104), perform = __webpack_require__(136), userAgent = __webpack_require__(68), promiseResolve = __webpack_require__(137), TypeError = global.TypeError, process = global.process, versions = process && process.versions, v8 = versions && versions.v8 || "", $Promise = global["Promise"], isNode = "process" == classof(process), empty = function() {/* empty */}, newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f, USE_NATIVE = !!function() {
        try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1), FakePromise = (promise.constructor = {})[__webpack_require__(5)("species")] = function(exec) {
                exec(empty, empty);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (isNode || "function" == typeof PromiseRejectionEvent) && promise.then(empty) instanceof FakePromise && 0 !== v8.indexOf("6.6") && -1 === userAgent.indexOf("Chrome/66");
        } catch (e) {/* empty */}
    }(), isThenable = function(it) {
        var then;
        return !(!isObject(it) || "function" != typeof (then = it.then)) && then;
    }, notify = function(promise, isReject) {
        if (!promise._n) {
            promise._n = !0;
            var chain = promise._c;
            microtask(function() {
                for (var value = promise._v, ok = 1 == promise._s, i = 0, run = function(reaction) {
                    var result, then, exited, handler = ok ? reaction.ok : reaction.fail, resolve = reaction.resolve, reject = reaction.reject, domain = reaction.domain;
                    try {
                        handler ? (ok || (2 == promise._h && onHandleUnhandled(promise), promise._h = 1), 
                        !0 === handler ? result = value : (domain && domain.enter(), result = handler(value), 
                        // may throw
                        domain && (domain.exit(), exited = !0)), result === reaction.promise ? reject(TypeError("Promise-chain cycle")) : (then = isThenable(result)) ? then.call(result, resolve, reject) : resolve(result)) : reject(value);
                    } catch (e) {
                        domain && !exited && domain.exit(), reject(e);
                    }
                }; chain.length > i; ) run(chain[i++]);
 // variable length - can't use forEach
                                promise._c = [], promise._n = !1, isReject && !promise._h && onUnhandled(promise);
            });
        }
    }, onUnhandled = function(promise) {
        task.call(global, function() {
            var result, handler, console, value = promise._v, unhandled = isUnhandled(promise);
            if (unhandled && (result = perform(function() {
                isNode ? process.emit("unhandledRejection", value, promise) : (handler = global.onunhandledrejection) ? handler({
                    promise: promise,
                    reason: value
                }) : (console = global.console) && console.error && console.error("Unhandled promise rejection", value);
            }), 
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1), promise._a = undefined, unhandled && result.e) throw result.v;
        });
    }, isUnhandled = function(promise) {
        return 1 !== promise._h && 0 === (promise._a || promise._c).length;
    }, onHandleUnhandled = function(promise) {
        task.call(global, function() {
            var handler;
            isNode ? process.emit("rejectionHandled", promise) : (handler = global.onrejectionhandled) && handler({
                promise: promise,
                reason: promise._v
            });
        });
    }, $reject = function(value) {
        var promise = this;
        promise._d || (promise._d = !0, // unwrap
        (promise = promise._w || promise)._v = value, promise._s = 2, promise._a || (promise._a = promise._c.slice()), 
        notify(promise, !0));
    }, $resolve = function(value) {
        var then, promise = this;
        if (!promise._d) {
            promise._d = !0, promise = promise._w || promise;
            // unwrap
            try {
                if (promise === value) throw TypeError("Promise can't be resolved itself");
                (then = isThenable(value)) ? microtask(function() {
                    var wrapper = {
                        _w: promise,
                        _d: !1
                    };
 // wrap
                                        try {
                        then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                    } catch (e) {
                        $reject.call(wrapper, e);
                    }
                }) : (promise._v = value, promise._s = 1, notify(promise, !1));
            } catch (e) {
                $reject.call({
                    _w: promise,
                    _d: !1
                }, e);
 // wrap
                        }
        }
    };
    // constructor polyfill
    USE_NATIVE || (
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
        anInstance(this, $Promise, "Promise", "_h"), aFunction(executor), Internal.call(this);
        try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
            $reject.call(this, err);
        }
    }, (
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
        this._c = [], // <- awaiting reactions
        this._a = undefined, // <- checked in isUnhandled reactions
        this._s = 0, // <- state
        this._d = !1, // <- done
        this._v = undefined, // <- value
        this._h = 0, // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = !1;
    }).prototype = __webpack_require__(43)($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            return reaction.ok = "function" != typeof onFulfilled || onFulfilled, reaction.fail = "function" == typeof onRejected && onRejected, 
            reaction.domain = isNode ? process.domain : undefined, this._c.push(reaction), this._a && this._a.push(reaction), 
            this._s && notify(this, !1), reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        "catch": function(onRejected) {
            return this.then(undefined, onRejected);
        }
    }), OwnPromiseCapability = function() {
        var promise = new Internal();
        this.promise = promise, this.resolve = ctx($resolve, promise, 1), this.reject = ctx($reject, promise, 1);
    }, newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Promise: $Promise
    }), __webpack_require__(45)($Promise, "Promise"), __webpack_require__(40)("Promise"), 
    Wrapper = __webpack_require__(18)["Promise"], 
    // statics
    $export($export.S + $export.F * !USE_NATIVE, "Promise", {
        // 25.4.4.5 Promise.reject(r)
        reject: function(r) {
            var capability = newPromiseCapability(this);
            return (0, capability.reject)(r), capability.promise;
        }
    }), $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), "Promise", {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function(x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
        }
    }), $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(65)(function(iter) {
        $Promise.all(iter)["catch"](empty);
    })), "Promise", {
        // 25.4.4.1 Promise.all(iterable)
        all: function(iterable) {
            var C = this, capability = newPromiseCapability(C), resolve = capability.resolve, reject = capability.reject, result = perform(function() {
                var values = [], index = 0, remaining = 1;
                forOf(iterable, !1, function(promise) {
                    var $index = index++, alreadyCalled = !1;
                    values.push(undefined), remaining++, C.resolve(promise).then(function(value) {
                        alreadyCalled || (alreadyCalled = !0, values[$index] = value, --remaining || resolve(values));
                    }, reject);
                }), --remaining || resolve(values);
            });
            return result.e && reject(result.v), capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function(iterable) {
            var C = this, capability = newPromiseCapability(C), reject = capability.reject, result = perform(function() {
                forOf(iterable, !1, function(promise) {
                    C.resolve(promise).then(capability.resolve, reject);
                });
            });
            return result.e && reject(result.v), capability.promise;
        }
    });
}, 
/* 287 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var weak = __webpack_require__(142), validate = __webpack_require__(49);
    // 23.4 WeakSet Objects
    __webpack_require__(69)("WeakSet", function(get) {
        return function() {
            return get(this, 0 < arguments.length ? arguments[0] : undefined);
        };
    }, {
        // 23.4.3.1 WeakSet.prototype.add(value)
        add: function(value) {
            return weak.def(validate(this, "WeakSet"), value, !0);
        }
    }, weak, !1, !0);
}, 
/* 288 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), $typed = __webpack_require__(70), buffer = __webpack_require__(105), anObject = __webpack_require__(1), toAbsoluteIndex = __webpack_require__(37), toLength = __webpack_require__(6), isObject = __webpack_require__(4), ArrayBuffer = __webpack_require__(2).ArrayBuffer, speciesConstructor = __webpack_require__(55), $ArrayBuffer = buffer.ArrayBuffer, $DataView = buffer.DataView, $isView = $typed.ABV && ArrayBuffer.isView, $slice = $ArrayBuffer.prototype.slice, VIEW = $typed.VIEW;
    $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
        ArrayBuffer: $ArrayBuffer
    }), $export($export.S + $export.F * !$typed.CONSTR, "ArrayBuffer", {
        // 24.1.3.1 ArrayBuffer.isView(arg)
        isView: function(it) {
            return $isView && $isView(it) || isObject(it) && VIEW in it;
        }
    }), $export($export.P + $export.U + $export.F * __webpack_require__(3)(function() {
        return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
    }), "ArrayBuffer", {
        // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
        slice: function(start, end) {
            if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start);
 // FF fix
                        for (var len = anObject(this).byteLength, first = toAbsoluteIndex(start, len), fin = toAbsoluteIndex(end === undefined ? len : end, len), result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first)), viewS = new $DataView(this), viewT = new $DataView(result), index = 0; first < fin; ) viewT.setUint8(index++, viewS.getUint8(first++));
            return result;
        }
    }), __webpack_require__(40)("ArrayBuffer");
}, 
/* 289 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0);
    $export($export.G + $export.W + $export.F * !__webpack_require__(70).ABV, {
        DataView: __webpack_require__(105).DataView
    });
}, 
/* 290 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Int8", 1, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 291 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Uint8", 1, function(init) {
        return function Uint8Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 292 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Uint8", 1, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    }, !0);
    /***/}, 
/* 293 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Int16", 2, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 294 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Uint16", 2, function(init) {
        return function Uint16Array(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 295 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Int32", 4, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 296 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Uint32", 4, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 297 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Float32", 4, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 298 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(28)("Float64", 8, function(init) {
        return function(data, byteOffset, length) {
            return init(this, data, byteOffset, length);
        };
    });
    /***/}, 
/* 299 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    var $export = __webpack_require__(0), aFunction = __webpack_require__(10), anObject = __webpack_require__(1), rApply = (__webpack_require__(2).Reflect || {}).apply, fApply = Function.apply;
    // MS Edge argumentsList argument is optional
    $export($export.S + $export.F * !__webpack_require__(3)(function() {
        rApply(function() {/* empty */});
    }), "Reflect", {
        apply: function(target, thisArgument, argumentsList) {
            var T = aFunction(target), L = anObject(argumentsList);
            return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
        }
    });
}, 
/* 300 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    var $export = __webpack_require__(0), create = __webpack_require__(38), aFunction = __webpack_require__(10), anObject = __webpack_require__(1), isObject = __webpack_require__(4), fails = __webpack_require__(3), bind = __webpack_require__(122), rConstruct = (__webpack_require__(2).Reflect || {}).construct, NEW_TARGET_BUG = fails(function() {
        function F() {/* empty */}
        return !(rConstruct(function() {/* empty */}, [], F) instanceof F);
    }), ARGS_BUG = !fails(function() {
        rConstruct(function() {/* empty */});
    });
    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
        construct: function(Target, args /* , newTarget */) {
            aFunction(Target), anObject(args);
            var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
            if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
            if (Target == newTarget) {
                // w/o altered newTarget, optimization for 0-4 arguments
                switch (args.length) {
                  case 0:
                    return new Target();

                  case 1:
                    return new Target(args[0]);

                  case 2:
                    return new Target(args[0], args[1]);

                  case 3:
                    return new Target(args[0], args[1], args[2]);

                  case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
                }
                // w/o altered newTarget, lot of arguments case
                                var $args = [ null ];
                return $args.push.apply($args, args), new (bind.apply(Target, $args))();
            }
            // with altered newTarget, not support built-in constructors
                        var proto = newTarget.prototype, instance = create(isObject(proto) ? proto : Object.prototype), result = Function.apply.call(Target, instance, args);
            return isObject(result) ? result : instance;
        }
    });
}, 
/* 301 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    var dP = __webpack_require__(8), $export = __webpack_require__(0), anObject = __webpack_require__(1), toPrimitive = __webpack_require__(23);
    // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
    $export($export.S + $export.F * __webpack_require__(3)(function() {
        // eslint-disable-next-line no-undef
        Reflect.defineProperty(dP.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        });
    }), "Reflect", {
        defineProperty: function(target, propertyKey, attributes) {
            anObject(target), propertyKey = toPrimitive(propertyKey, !0), anObject(attributes);
            try {
                return dP.f(target, propertyKey, attributes), !0;
            } catch (e) {
                return !1;
            }
        }
    });
}, 
/* 302 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    var $export = __webpack_require__(0), gOPD = __webpack_require__(16).f, anObject = __webpack_require__(1);
    $export($export.S, "Reflect", {
        deleteProperty: function(target, propertyKey) {
            var desc = gOPD(anObject(target), propertyKey);
            return !(desc && !desc.configurable) && delete target[propertyKey];
        }
    });
}, 
/* 303 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // 26.1.5 Reflect.enumerate(target)
        var $export = __webpack_require__(0), anObject = __webpack_require__(1), Enumerate = function(iterated) {
        this._t = anObject(iterated), // target
        this._i = 0;
        // next index
        var key, keys = this._k = [];
 // keys
                for (key in iterated) keys.push(key);
    };
    __webpack_require__(91)(Enumerate, "Object", function() {
        var key, keys = this._k;
        do {
            if (this._i >= keys.length) return {
                value: undefined,
                done: !0
            };
        } while (!((key = keys[this._i++]) in this._t));
        return {
            value: key,
            done: !1
        };
    }), $export($export.S, "Reflect", {
        enumerate: function(target) {
            return new Enumerate(target);
        }
    });
}, 
/* 304 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    var gOPD = __webpack_require__(16), getPrototypeOf = __webpack_require__(17), has = __webpack_require__(14), $export = __webpack_require__(0), isObject = __webpack_require__(4), anObject = __webpack_require__(1);
    $export($export.S, "Reflect", {
        get: function get(target, propertyKey /* , receiver */) {
            var desc, proto, receiver = arguments.length < 3 ? target : arguments[2];
            return anObject(target) === receiver ? target[propertyKey] : (desc = gOPD.f(target, propertyKey)) ? has(desc, "value") ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined : isObject(proto = getPrototypeOf(target)) ? get(proto, propertyKey, receiver) : void 0;
        }
    });
}, 
/* 305 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    var gOPD = __webpack_require__(16), $export = __webpack_require__(0), anObject = __webpack_require__(1);
    $export($export.S, "Reflect", {
        getOwnPropertyDescriptor: function(target, propertyKey) {
            return gOPD.f(anObject(target), propertyKey);
        }
    });
}, 
/* 306 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.8 Reflect.getPrototypeOf(target)
    var $export = __webpack_require__(0), getProto = __webpack_require__(17), anObject = __webpack_require__(1);
    $export($export.S, "Reflect", {
        getPrototypeOf: function(target) {
            return getProto(anObject(target));
        }
    });
}, 
/* 307 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.9 Reflect.has(target, propertyKey)
    var $export = __webpack_require__(0);
    $export($export.S, "Reflect", {
        has: function(target, propertyKey) {
            return propertyKey in target;
        }
    });
}, 
/* 308 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.10 Reflect.isExtensible(target)
    var $export = __webpack_require__(0), anObject = __webpack_require__(1), $isExtensible = Object.isExtensible;
    $export($export.S, "Reflect", {
        isExtensible: function(target) {
            return anObject(target), !$isExtensible || $isExtensible(target);
        }
    });
}, 
/* 309 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.11 Reflect.ownKeys(target)
    var $export = __webpack_require__(0);
    $export($export.S, "Reflect", {
        ownKeys: __webpack_require__(144)
    });
}, 
/* 310 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.12 Reflect.preventExtensions(target)
    var $export = __webpack_require__(0), anObject = __webpack_require__(1), $preventExtensions = Object.preventExtensions;
    $export($export.S, "Reflect", {
        preventExtensions: function(target) {
            anObject(target);
            try {
                return $preventExtensions && $preventExtensions(target), !0;
            } catch (e) {
                return !1;
            }
        }
    });
}, 
/* 311 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    var dP = __webpack_require__(8), gOPD = __webpack_require__(16), getPrototypeOf = __webpack_require__(17), has = __webpack_require__(14), $export = __webpack_require__(0), createDesc = __webpack_require__(34), anObject = __webpack_require__(1), isObject = __webpack_require__(4);
    $export($export.S, "Reflect", {
        set: function set(target, propertyKey, V /* , receiver */) {
            var existingDescriptor, proto, receiver = arguments.length < 4 ? target : arguments[3], ownDesc = gOPD.f(anObject(target), propertyKey);
            if (!ownDesc) {
                if (isObject(proto = getPrototypeOf(target))) return set(proto, propertyKey, V, receiver);
                ownDesc = createDesc(0);
            }
            if (has(ownDesc, "value")) {
                if (!1 === ownDesc.writable || !isObject(receiver)) return !1;
                if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
                    if (existingDescriptor.get || existingDescriptor.set || !1 === existingDescriptor.writable) return !1;
                    existingDescriptor.value = V, dP.f(receiver, propertyKey, existingDescriptor);
                } else dP.f(receiver, propertyKey, createDesc(0, V));
                return !0;
            }
            return ownDesc.set !== undefined && (ownDesc.set.call(receiver, V), !0);
        }
    });
}, 
/* 312 */
/***/ function(module, exports, __webpack_require__) {
    // 26.1.14 Reflect.setPrototypeOf(target, proto)
    var $export = __webpack_require__(0), setProto = __webpack_require__(84);
    setProto && $export($export.S, "Reflect", {
        setPrototypeOf: function(target, proto) {
            setProto.check(target, proto);
            try {
                return setProto.set(target, proto), !0;
            } catch (e) {
                return !1;
            }
        }
    })
    /***/;
}, 
/* 313 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/tc39/Array.prototype.includes
        var $export = __webpack_require__(0), $includes = __webpack_require__(60)(!0);
    $export($export.P, "Array", {
        includes: function(el /* , fromIndex = 0 */) {
            return $includes(this, el, 1 < arguments.length ? arguments[1] : undefined);
        }
    }), __webpack_require__(32)("includes");
}, 
/* 314 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
        var $export = __webpack_require__(0), flattenIntoArray = __webpack_require__(145), toObject = __webpack_require__(9), toLength = __webpack_require__(6), aFunction = __webpack_require__(10), arraySpeciesCreate = __webpack_require__(97);
    $export($export.P, "Array", {
        flatMap: function(callbackfn /* , thisArg */) {
            var sourceLen, A, O = toObject(this);
            return aFunction(callbackfn), sourceLen = toLength(O.length), A = arraySpeciesCreate(O, 0), 
            flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]), A;
        }
    }), __webpack_require__(32)("flatMap");
}, 
/* 315 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
        var $export = __webpack_require__(0), flattenIntoArray = __webpack_require__(145), toObject = __webpack_require__(9), toLength = __webpack_require__(6), toInteger = __webpack_require__(21), arraySpeciesCreate = __webpack_require__(97);
    $export($export.P, "Array", {
        flatten: function() {
            var depthArg = arguments[0], O = toObject(this), sourceLen = toLength(O.length), A = arraySpeciesCreate(O, 0);
            return flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg)), 
            A;
        }
    }), __webpack_require__(32)("flatten");
}, 
/* 316 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/mathiasbynens/String.prototype.at
        var $export = __webpack_require__(0), $at = __webpack_require__(63)(!0);
    $export($export.P, "String", {
        at: function(pos) {
            return $at(this, pos);
        }
    });
}, 
/* 317 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/tc39/proposal-string-pad-start-end
        var $export = __webpack_require__(0), $pad = __webpack_require__(146), userAgent = __webpack_require__(68);
    // https://github.com/zloirock/core-js/issues/280
    $export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), "String", {
        padStart: function(maxLength /* , fillString = ' ' */) {
            return $pad(this, maxLength, 1 < arguments.length ? arguments[1] : undefined, !0);
        }
    });
}, 
/* 318 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/tc39/proposal-string-pad-start-end
        var $export = __webpack_require__(0), $pad = __webpack_require__(146), userAgent = __webpack_require__(68);
    // https://github.com/zloirock/core-js/issues/280
    $export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), "String", {
        padEnd: function(maxLength /* , fillString = ' ' */) {
            return $pad(this, maxLength, 1 < arguments.length ? arguments[1] : undefined, !1);
        }
    });
}, 
/* 319 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        __webpack_require__(47)("trimLeft", function($trim) {
        return function() {
            return $trim(this, 1);
        };
    }, "trimStart");
}, 
/* 320 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        __webpack_require__(47)("trimRight", function($trim) {
        return function() {
            return $trim(this, 2);
        };
    }, "trimEnd");
}, 
/* 321 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://tc39.github.io/String.prototype.matchAll/
        var $export = __webpack_require__(0), defined = __webpack_require__(24), toLength = __webpack_require__(6), isRegExp = __webpack_require__(64), getFlags = __webpack_require__(54), RegExpProto = RegExp.prototype, $RegExpStringIterator = function(regexp, string) {
        this._r = regexp, this._s = string;
    };
    __webpack_require__(91)($RegExpStringIterator, "RegExp String", function() {
        var match = this._r.exec(this._s);
        return {
            value: match,
            done: null === match
        };
    }), $export($export.P, "String", {
        matchAll: function(regexp) {
            if (defined(this), !isRegExp(regexp)) throw TypeError(regexp + " is not a regexp!");
            var S = String(this), flags = "flags" in RegExpProto ? String(regexp.flags) : getFlags.call(regexp), rx = new RegExp(regexp.source, ~flags.indexOf("g") ? flags : "g" + flags);
            return rx.lastIndex = toLength(regexp.lastIndex), new $RegExpStringIterator(rx, S);
        }
    });
}, 
/* 322 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(80)("asyncIterator");
    /***/}, 
/* 323 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(80)("observable");
    /***/}, 
/* 324 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-object-getownpropertydescriptors
    var $export = __webpack_require__(0), ownKeys = __webpack_require__(144), toIObject = __webpack_require__(15), gOPD = __webpack_require__(16), createProperty = __webpack_require__(95);
    $export($export.S, "Object", {
        getOwnPropertyDescriptors: function(object) {
            for (var key, desc, O = toIObject(object), getDesc = gOPD.f, keys = ownKeys(O), result = {}, i = 0; keys.length > i; ) (desc = getDesc(O, key = keys[i++])) !== undefined && createProperty(result, key, desc);
            return result;
        }
    });
}, 
/* 325 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = __webpack_require__(0), $values = __webpack_require__(147)(!1);
    $export($export.S, "Object", {
        values: function(it) {
            return $values(it);
        }
    });
}, 
/* 326 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = __webpack_require__(0), $entries = __webpack_require__(147)(!0);
    $export($export.S, "Object", {
        entries: function(it) {
            return $entries(it);
        }
    });
}, 
/* 327 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toObject = __webpack_require__(9), aFunction = __webpack_require__(10), $defineProperty = __webpack_require__(8);
    // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
    __webpack_require__(7) && $export($export.P + __webpack_require__(71), "Object", {
        __defineGetter__: function(P, getter) {
            $defineProperty.f(toObject(this), P, {
                get: aFunction(getter),
                enumerable: !0,
                configurable: !0
            });
        }
    });
}, 
/* 328 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toObject = __webpack_require__(9), aFunction = __webpack_require__(10), $defineProperty = __webpack_require__(8);
    // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
    __webpack_require__(7) && $export($export.P + __webpack_require__(71), "Object", {
        __defineSetter__: function __defineSetter__(P, setter) {
            $defineProperty.f(toObject(this), P, {
                set: aFunction(setter),
                enumerable: !0,
                configurable: !0
            });
        }
    });
}, 
/* 329 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toObject = __webpack_require__(9), toPrimitive = __webpack_require__(23), getPrototypeOf = __webpack_require__(17), getOwnPropertyDescriptor = __webpack_require__(16).f;
    // B.2.2.4 Object.prototype.__lookupGetter__(P)
    __webpack_require__(7) && $export($export.P + __webpack_require__(71), "Object", {
        __lookupGetter__: function(P) {
            var D, O = toObject(this), K = toPrimitive(P, !0);
            do {
                if (D = getOwnPropertyDescriptor(O, K)) return D.get;
            } while (O = getPrototypeOf(O));
        }
    });
}, 
/* 330 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    var $export = __webpack_require__(0), toObject = __webpack_require__(9), toPrimitive = __webpack_require__(23), getPrototypeOf = __webpack_require__(17), getOwnPropertyDescriptor = __webpack_require__(16).f;
    // B.2.2.5 Object.prototype.__lookupSetter__(P)
    __webpack_require__(7) && $export($export.P + __webpack_require__(71), "Object", {
        __lookupSetter__: function(P) {
            var D, O = toObject(this), K = toPrimitive(P, !0);
            do {
                if (D = getOwnPropertyDescriptor(O, K)) return D.set;
            } while (O = getPrototypeOf(O));
        }
    });
}, 
/* 331 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var $export = __webpack_require__(0);
    $export($export.P + $export.R, "Map", {
        toJSON: __webpack_require__(148)("Map")
    });
}, 
/* 332 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var $export = __webpack_require__(0);
    $export($export.P + $export.R, "Set", {
        toJSON: __webpack_require__(148)("Set")
    });
}, 
/* 333 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
    __webpack_require__(72)("Map");
    /***/}, 
/* 334 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
    __webpack_require__(72)("Set");
    /***/}, 
/* 335 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
    __webpack_require__(72)("WeakMap");
    /***/}, 
/* 336 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
    __webpack_require__(72)("WeakSet");
    /***/}, 
/* 337 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
    __webpack_require__(73)("Map");
    /***/}, 
/* 338 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
    __webpack_require__(73)("Set");
    /***/}, 
/* 339 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
    __webpack_require__(73)("WeakMap");
    /***/}, 
/* 340 */
/***/ function(module, exports, __webpack_require__) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
    __webpack_require__(73)("WeakSet");
    /***/}, 
/* 341 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-global
    var $export = __webpack_require__(0);
    $export($export.G, {
        global: __webpack_require__(2)
    });
}, 
/* 342 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-global
    var $export = __webpack_require__(0);
    $export($export.S, "System", {
        global: __webpack_require__(2)
    });
}, 
/* 343 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/ljharb/proposal-is-error
    var $export = __webpack_require__(0), cof = __webpack_require__(20);
    $export($export.S, "Error", {
        isError: function(it) {
            return "Error" === cof(it);
        }
    });
}, 
/* 344 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        clamp: function(x, lower, upper) {
            return Math.min(upper, Math.max(lower, x));
        }
    });
}, 
/* 345 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        DEG_PER_RAD: Math.PI / 180
    });
}, 
/* 346 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0), RAD_PER_DEG = 180 / Math.PI;
    $export($export.S, "Math", {
        degrees: function(radians) {
            return radians * RAD_PER_DEG;
        }
    });
}, 
/* 347 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0), scale = __webpack_require__(150), fround = __webpack_require__(129);
    $export($export.S, "Math", {
        fscale: function(x, inLow, inHigh, outLow, outHigh) {
            return fround(scale(x, inLow, inHigh, outLow, outHigh));
        }
    });
}, 
/* 348 */
/***/ function(module, exports, __webpack_require__) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        iaddh: function(x0, x1, y0, y1) {
            var $x0 = x0 >>> 0, $y0 = y0 >>> 0;
            return (x1 >>> 0) + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
        }
    });
}, 
/* 349 */
/***/ function(module, exports, __webpack_require__) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        isubh: function(x0, x1, y0, y1) {
            var $x0 = x0 >>> 0, $y0 = y0 >>> 0;
            return (x1 >>> 0) - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
        }
    });
}, 
/* 350 */
/***/ function(module, exports, __webpack_require__) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        imulh: function(u, v) {
            var $u = +u, $v = +v, u0 = 65535 & $u, v0 = 65535 & $v, u1 = $u >> 16, v1 = $v >> 16, t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
            return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (65535 & t) >> 16);
        }
    });
}, 
/* 351 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        RAD_PER_DEG: 180 / Math.PI
    });
}, 
/* 352 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0), DEG_PER_RAD = Math.PI / 180;
    $export($export.S, "Math", {
        radians: function(degrees) {
            return degrees * DEG_PER_RAD;
        }
    });
}, 
/* 353 */
/***/ function(module, exports, __webpack_require__) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        scale: __webpack_require__(150)
    });
}, 
/* 354 */
/***/ function(module, exports, __webpack_require__) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        umulh: function(u, v) {
            var $u = +u, $v = +v, u0 = 65535 & $u, v0 = 65535 & $v, u1 = $u >>> 16, v1 = $v >>> 16, t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
            return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (65535 & t) >>> 16);
        }
    });
}, 
/* 355 */
/***/ function(module, exports, __webpack_require__) {
    // http://jfbastien.github.io/papers/Math.signbit.html
    var $export = __webpack_require__(0);
    $export($export.S, "Math", {
        signbit: function(x) {
            // eslint-disable-next-line no-self-compare
            return (x = +x) != x ? x : 0 == x ? 1 / x == Infinity : 0 < x;
        }
    });
}, 
/* 356 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/tc39/proposal-promise-finally
        var $export = __webpack_require__(0), core = __webpack_require__(18), global = __webpack_require__(2), speciesConstructor = __webpack_require__(55), promiseResolve = __webpack_require__(137);
    $export($export.P + $export.R, "Promise", {
        "finally": function(onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise), isFunction = "function" == typeof onFinally;
            return this.then(isFunction ? function(x) {
                return promiseResolve(C, onFinally()).then(function() {
                    return x;
                });
            } : onFinally, isFunction ? function(e) {
                return promiseResolve(C, onFinally()).then(function() {
                    throw e;
                });
            } : onFinally);
        }
    });
}, 
/* 357 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/tc39/proposal-promise-try
        var $export = __webpack_require__(0), newPromiseCapability = __webpack_require__(104), perform = __webpack_require__(136);
    $export($export.S, "Promise", {
        "try": function(callbackfn) {
            var promiseCapability = newPromiseCapability.f(this), result = perform(callbackfn);
            return (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v), 
            promiseCapability.promise;
        }
    });
}, 
/* 358 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), toMetaKey = metadata.key, ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({
        defineMetadata: function(metadataKey, metadataValue, target, targetKey) {
            ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
        }
    });
}, 
/* 359 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), toMetaKey = metadata.key, getOrCreateMetadataMap = metadata.map, store = metadata.store;
    metadata.exp({
        deleteMetadata: function(metadataKey, target /* , targetKey */) {
            var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]), metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, !1);
            if (metadataMap === undefined || !metadataMap["delete"](metadataKey)) return !1;
            if (metadataMap.size) return !0;
            var targetMetadata = store.get(target);
            return targetMetadata["delete"](targetKey), !!targetMetadata.size || store["delete"](target);
        }
    });
}, 
/* 360 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), getPrototypeOf = __webpack_require__(17), ordinaryHasOwnMetadata = metadata.has, ordinaryGetOwnMetadata = metadata.get, toMetaKey = metadata.key, ordinaryGetMetadata = function(MetadataKey, O, P) {
        if (ordinaryHasOwnMetadata(MetadataKey, O, P)) return ordinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = getPrototypeOf(O);
        return null !== parent ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
    };
    metadata.exp({
        getMetadata: function(metadataKey, target /* , targetKey */) {
            return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
        }
    });
}, 
/* 361 */
/***/ function(module, exports, __webpack_require__) {
    var Set = __webpack_require__(140), from = __webpack_require__(149), metadata = __webpack_require__(29), anObject = __webpack_require__(1), getPrototypeOf = __webpack_require__(17), ordinaryOwnMetadataKeys = metadata.keys, toMetaKey = metadata.key, ordinaryMetadataKeys = function(O, P) {
        var oKeys = ordinaryOwnMetadataKeys(O, P), parent = getPrototypeOf(O);
        if (null === parent) return oKeys;
        var pKeys = ordinaryMetadataKeys(parent, P);
        return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };
    metadata.exp({
        getMetadataKeys: function(target /* , targetKey */) {
            return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
        }
    });
}, 
/* 362 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), ordinaryGetOwnMetadata = metadata.get, toMetaKey = metadata.key;
    metadata.exp({
        getOwnMetadata: function(metadataKey, target /* , targetKey */) {
            return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
        }
    });
}, 
/* 363 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), ordinaryOwnMetadataKeys = metadata.keys, toMetaKey = metadata.key;
    metadata.exp({
        getOwnMetadataKeys: function(target /* , targetKey */) {
            return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
        }
    });
}, 
/* 364 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), getPrototypeOf = __webpack_require__(17), ordinaryHasOwnMetadata = metadata.has, toMetaKey = metadata.key, ordinaryHasMetadata = function(MetadataKey, O, P) {
        if (ordinaryHasOwnMetadata(MetadataKey, O, P)) return !0;
        var parent = getPrototypeOf(O);
        return null !== parent && ordinaryHasMetadata(MetadataKey, parent, P);
    };
    metadata.exp({
        hasMetadata: function(metadataKey, target /* , targetKey */) {
            return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
        }
    });
}, 
/* 365 */
/***/ function(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(29), anObject = __webpack_require__(1), ordinaryHasOwnMetadata = metadata.has, toMetaKey = metadata.key;
    metadata.exp({
        hasOwnMetadata: function(metadataKey, target /* , targetKey */) {
            return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
        }
    });
}, 
/* 366 */
/***/ function(module, exports, __webpack_require__) {
    var $metadata = __webpack_require__(29), anObject = __webpack_require__(1), aFunction = __webpack_require__(10), toMetaKey = $metadata.key, ordinaryDefineOwnMetadata = $metadata.set;
    $metadata.exp({
        metadata: function(metadataKey, metadataValue) {
            return function(target, targetKey) {
                ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
            };
        }
    });
}, 
/* 367 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
    var $export = __webpack_require__(0), microtask = __webpack_require__(103)(), process = __webpack_require__(2).process, isNode = "process" == __webpack_require__(20)(process);
    $export($export.G, {
        asap: function(fn) {
            var domain = isNode && process.domain;
            microtask(domain ? domain.bind(fn) : fn);
        }
    });
}, 
/* 368 */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    // https://github.com/zenparsing/es-observable
        var $export = __webpack_require__(0), global = __webpack_require__(2), core = __webpack_require__(18), microtask = __webpack_require__(103)(), OBSERVABLE = __webpack_require__(5)("observable"), aFunction = __webpack_require__(10), anObject = __webpack_require__(1), anInstance = __webpack_require__(41), redefineAll = __webpack_require__(43), hide = __webpack_require__(11), forOf = __webpack_require__(42), RETURN = forOf.RETURN, getMethod = function(fn) {
        return null == fn ? undefined : aFunction(fn);
    }, cleanupSubscription = function(subscription) {
        var cleanup = subscription._c;
        cleanup && (subscription._c = undefined, cleanup());
    }, subscriptionClosed = function(subscription) {
        return subscription._o === undefined;
    }, closeSubscription = function(subscription) {
        subscriptionClosed(subscription) || (subscription._o = undefined, cleanupSubscription(subscription));
    }, Subscription = function(observer, subscriber) {
        anObject(observer), this._c = undefined, this._o = observer, observer = new SubscriptionObserver(this);
        try {
            var cleanup = subscriber(observer), subscription = cleanup;
            null != cleanup && ("function" == typeof cleanup.unsubscribe ? cleanup = function() {
                subscription.unsubscribe();
            } : aFunction(cleanup), this._c = cleanup);
        } catch (e) {
            return void observer.error(e);
        }
        subscriptionClosed(this) && cleanupSubscription(this);
    };
    Subscription.prototype = redefineAll({}, {
        unsubscribe: function() {
            closeSubscription(this);
        }
    });
    var SubscriptionObserver = function(subscription) {
        this._s = subscription;
    };
    SubscriptionObserver.prototype = redefineAll({}, {
        next: function(value) {
            var subscription = this._s;
            if (!subscriptionClosed(subscription)) {
                var observer = subscription._o;
                try {
                    var m = getMethod(observer.next);
                    if (m) return m.call(observer, value);
                } catch (e) {
                    try {
                        closeSubscription(subscription);
                    } finally {
                        throw e;
                    }
                }
            }
        },
        error: function(value) {
            var subscription = this._s;
            if (subscriptionClosed(subscription)) throw value;
            var observer = subscription._o;
            subscription._o = undefined;
            try {
                var m = getMethod(observer.error);
                if (!m) throw value;
                value = m.call(observer, value);
            } catch (e) {
                try {
                    cleanupSubscription(subscription);
                } finally {
                    throw e;
                }
            }
            return cleanupSubscription(subscription), value;
        },
        complete: function(value) {
            var subscription = this._s;
            if (!subscriptionClosed(subscription)) {
                var observer = subscription._o;
                subscription._o = undefined;
                try {
                    var m = getMethod(observer.complete);
                    value = m ? m.call(observer, value) : undefined;
                } catch (e) {
                    try {
                        cleanupSubscription(subscription);
                    } finally {
                        throw e;
                    }
                }
                return cleanupSubscription(subscription), value;
            }
        }
    });
    var $Observable = function(subscriber) {
        anInstance(this, $Observable, "Observable", "_f")._f = aFunction(subscriber);
    };
    redefineAll($Observable.prototype, {
        subscribe: function(observer) {
            return new Subscription(observer, this._f);
        },
        forEach: function(fn) {
            var that = this;
            return new (core.Promise || global.Promise)(function(resolve, reject) {
                aFunction(fn);
                var subscription = that.subscribe({
                    next: function(value) {
                        try {
                            return fn(value);
                        } catch (e) {
                            reject(e), subscription.unsubscribe();
                        }
                    },
                    error: reject,
                    complete: resolve
                });
            });
        }
    }), redefineAll($Observable, {
        from: function(x) {
            var C = "function" == typeof this ? this : $Observable, method = getMethod(anObject(x)[OBSERVABLE]);
            if (method) {
                var observable = anObject(method.call(x));
                return observable.constructor === C ? observable : new C(function(observer) {
                    return observable.subscribe(observer);
                });
            }
            return new C(function(observer) {
                var done = !1;
                return microtask(function() {
                    if (!done) {
                        try {
                            if (forOf(x, !1, function(it) {
                                if (observer.next(it), done) return RETURN;
                            }) === RETURN) return;
                        } catch (e) {
                            if (done) throw e;
                            return void observer.error(e);
                        }
                        observer.complete();
                    }
                }), function() {
                    done = !0;
                };
            });
        },
        of: function() {
            for (var i = 0, l = arguments.length, items = new Array(l); i < l; ) items[i] = arguments[i++];
            return new ("function" == typeof this ? this : $Observable)(function(observer) {
                var done = !1;
                return microtask(function() {
                    if (!done) {
                        for (var j = 0; j < items.length; ++j) if (observer.next(items[j]), done) return;
                        observer.complete();
                    }
                }), function() {
                    done = !0;
                };
            });
        }
    }), hide($Observable.prototype, OBSERVABLE, function() {
        return this;
    }), $export($export.G, {
        Observable: $Observable
    }), __webpack_require__(40)("Observable");
}, 
/* 369 */
/***/ function(module, exports, __webpack_require__) {
    // ie9- setTimeout & setInterval additional parameters fix
    var global = __webpack_require__(2), $export = __webpack_require__(0), userAgent = __webpack_require__(68), slice = [].slice, MSIE = /MSIE .\./.test(userAgent), wrap = function(set) {
        return function(fn, time /* , ...args */) {
            var boundArgs = 2 < arguments.length, args = !!boundArgs && slice.call(arguments, 2);
            return set(boundArgs ? function() {
                // eslint-disable-next-line no-new-func
                ("function" == typeof fn ? fn : Function(fn)).apply(this, args);
            } : fn, time);
        };
    };
    $export($export.G + $export.B + $export.F * MSIE, {
        setTimeout: wrap(global.setTimeout),
        setInterval: wrap(global.setInterval)
    });
}, 
/* 370 */
/***/ function(module, exports, __webpack_require__) {
    var $export = __webpack_require__(0), $task = __webpack_require__(102);
    $export($export.G + $export.B, {
        setImmediate: $task.set,
        clearImmediate: $task.clear
    });
}, 
/* 371 */
/***/ function(module, exports, __webpack_require__) {
    for (var $iterators = __webpack_require__(99), getKeys = __webpack_require__(36), redefine = __webpack_require__(12), global = __webpack_require__(2), hide = __webpack_require__(11), Iterators = __webpack_require__(48), wks = __webpack_require__(5), ITERATOR = wks("iterator"), TO_STRING_TAG = wks("toStringTag"), ArrayValues = Iterators.Array, DOMIterables = {
        CSSRuleList: !0,
        // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        // TODO: Not spec compliant, should be false.
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        // TODO: Not spec compliant, should be false.
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var key, NAME = collections[i], explicit = DOMIterables[NAME], Collection = global[NAME], proto = Collection && Collection.prototype;
        if (proto && (proto[ITERATOR] || hide(proto, ITERATOR, ArrayValues), proto[TO_STRING_TAG] || hide(proto, TO_STRING_TAG, NAME), 
        Iterators[NAME] = ArrayValues, explicit)) for (key in $iterators) proto[key] || redefine(proto, key, $iterators[key], !0);
    }
    /***/}, 
/* 372 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(global) {
        /**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
        !function(global) {
            "use strict";
            var undefined, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag", inModule = "object" == typeof module, runtime = global.regeneratorRuntime;
            if (runtime) inModule && (
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime);
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
             else {
                (
                // Define the runtime globally (as expected by generated code) as either
                // module.exports (if we're in a module) or a new, empty object.
                runtime = global.regeneratorRuntime = inModule ? module.exports : {}).wrap = wrap;
                var GenStateSuspendedStart = "suspendedStart", GenStateSuspendedYield = "suspendedYield", GenStateExecuting = "executing", GenStateCompleted = "completed", ContinueSentinel = {}, IteratorPrototype = {};
                IteratorPrototype[iteratorSymbol] = function() {
                    return this;
                };
                var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (
                // This environment has a native %IteratorPrototype%; use it instead
                // of the polyfill.
                IteratorPrototype = NativeIteratorPrototype);
                var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, 
                GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction", 
                runtime.isGeneratorFunction = function(genFun) {
                    var ctor = "function" == typeof genFun && genFun.constructor;
                    return !!ctor && (ctor === GeneratorFunction || 
                    // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    "GeneratorFunction" === (ctor.displayName || ctor.name));
                }, runtime.mark = function(genFun) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, 
                    toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction")), 
                    genFun.prototype = Object.create(Gp), genFun;
                }, 
                // Within the body of any async function, `await x` is transformed to
                // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                // `hasOwn.call(value, "__await")` to determine if the yielded value is
                // meant to be awaited.
                runtime.awrap = function(arg) {
                    return {
                        __await: arg
                    };
                }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                    return this;
                }, runtime.AsyncIterator = AsyncIterator, 
                // Note that simple async functions are implemented on top of
                // AsyncIterator objects; they just return a Promise for the value of
                // the final result produced by the iterator.
                runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
                    return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                        return result.done ? result.value : iter.next();
                    });
                }, 
                // Define Generator.prototype.{next,throw,return} in terms of the
                // unified ._invoke helper method.
                defineIteratorMethods(Gp), Gp[toStringTagSymbol] = "Generator", 
                // A Generator should always return itself as the iterator object when the
                // @@iterator function is called on it. Some browsers' implementations of the
                // iterator prototype chain incorrectly implement this, causing the Generator
                // object to not be returned from this call. This ensures that doesn't happen.
                // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function() {
                    return this;
                }, Gp.toString = function() {
                    return "[object Generator]";
                }, runtime.keys = function(object) {
                    var keys = [];
                    for (var key in object) keys.push(key);
                    // Rather than returning an object with a next method, we keep
                    // things simple and return the next function itself.
                    return keys.reverse(), function next() {
                        for (;keys.length; ) {
                            var key = keys.pop();
                            if (key in object) return next.value = key, next.done = !1, next;
                        }
                        // To avoid creating an additional object, we just hang the .value
                        // and .done properties off the next function object itself. This
                        // also ensures that the minifier will not anonymize the function.
                                                return next.done = !0, next;
                    };
                }, runtime.values = values, Context.prototype = {
                    constructor: Context,
                    reset: function(skipTempReset) {
                        if (this.prev = 0, this.next = 0, 
                        // Resetting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", 
                        this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) 
                        // Not sure about the optimal order of these conditions:
                        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
                    },
                    stop: function() {
                        this.done = !0;
                        var rootRecord = this.tryEntries[0].completion;
                        if ("throw" === rootRecord.type) throw rootRecord.arg;
                        return this.rval;
                    },
                    dispatchException: function(exception) {
                        if (this.done) throw exception;
                        var context = this;
                        function handle(loc, caught) {
                            return record.type = "throw", record.arg = exception, context.next = loc, caught && (
                            // If the dispatched exception was caught by a catch block,
                            // then let that catch block handle the exception normally.
                            context.method = "next", context.arg = undefined), !!caught;
                        }
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var entry = this.tryEntries[i], record = entry.completion;
                            if ("root" === entry.tryLoc) 
                            // Exception thrown outside of any try block that could handle
                            // it, so set the completion value of the entire function to
                            // throw the exception.
                            return handle("end");
                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                                } else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                } else {
                                    if (!hasFinally) throw new Error("try statement without catch or finally");
                                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(type, arg) {
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }
                        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (
                        // Ignore the finally entry if control is not jumping to a
                        // location outside the try/catch block.
                        finallyEntry = null);
                        var record = finallyEntry ? finallyEntry.completion : {};
                        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", 
                        this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
                    },
                    complete: function(record, afterLoc) {
                        if ("throw" === record.type) throw record.arg;
                        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, 
                        this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), 
                        ContinueSentinel;
                    },
                    finish: function(finallyLoc) {
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), 
                            resetTryEntry(entry), ContinueSentinel;
                        }
                    },
                    "catch": function(tryLoc) {
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if ("throw" === record.type) {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }
                        // The context.catch method must only be called with a location
                        // argument that corresponds to a known catch block.
                                                throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(iterable, resultName, nextLoc) {
                        return this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        }, "next" === this.method && (
                        // Deliberately forget the last sent value so that we don't
                        // accidentally pass it on to the delegate.
                        this.arg = undefined), ContinueSentinel;
                    }
                };
            }
            function wrap(innerFn, outerFn, self, tryLocsList) {
                // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
                // The ._invoke method unifies the implementations of the .next,
                // .throw, and .return methods.
                return generator._invoke = function makeInvokeMethod(innerFn, self, context) {
                    var state = GenStateSuspendedStart;
                    return function(method, arg) {
                        if (state === GenStateExecuting) throw new Error("Generator is already running");
                        if (state === GenStateCompleted) {
                            if ("throw" === method) throw arg;
                            // Be forgiving, per 25.3.3.3.3 of the spec:
                            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                                                        return doneResult();
                        }
                        for (context.method = method, context.arg = arg; ;) {
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel) continue;
                                    return delegateResult;
                                }
                            }
                            if ("next" === context.method) 
                            // Setting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            context.sent = context._sent = context.arg; else if ("throw" === context.method) {
                                if (state === GenStateSuspendedStart) throw state = GenStateCompleted, context.arg;
                                context.dispatchException(context.arg);
                            } else "return" === context.method && context.abrupt("return", context.arg);
                            state = GenStateExecuting;
                            var record = tryCatch(innerFn, self, context);
                            if ("normal" === record.type) {
                                if (
                                // If an exception is thrown from innerFn, we leave state ===
                                // GenStateExecuting and loop back for another invocation.
                                state = context.done ? GenStateCompleted : GenStateSuspendedYield, record.arg === ContinueSentinel) continue;
                                return {
                                    value: record.arg,
                                    done: context.done
                                };
                            }
                            "throw" === record.type && (state = GenStateCompleted, 
                            // Dispatch the exception by looping back around to the
                            // context.dispatchException(context.arg) call above.
                            context.method = "throw", context.arg = record.arg);
                        }
                    };
                }
                // Call delegate.iterator[context.method](context.arg) and handle the
                // result, either by returning a { value, done } result from the
                // delegate iterator, or by modifying context.method and context.arg,
                // setting context.delegate to null, and returning the ContinueSentinel.
                (innerFn, self, context), generator;
            }
            // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.
            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    };
                } catch (err) {
                    return {
                        type: "throw",
                        arg: err
                    };
                }
            }
            // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.
                        // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.
            function defineIteratorMethods(prototype) {
                [ "next", "throw", "return" ].forEach(function(method) {
                    prototype[method] = function(arg) {
                        return this._invoke(method, arg);
                    };
                });
            }
            function AsyncIterator(generator) {
                function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);
                    if ("throw" !== record.type) {
                        var result = record.arg, value = result.value;
                        return value && "object" == typeof value && hasOwn.call(value, "__await") ? Promise.resolve(value.__await).then(function(value) {
                            invoke("next", value, resolve, reject);
                        }, function(err) {
                            invoke("throw", err, resolve, reject);
                        }) : Promise.resolve(value).then(function(unwrapped) {
                            // When a yielded Promise is resolved, its final value becomes
                            // the .value of the Promise<{value,done}> result for the
                            // current iteration. If the Promise is rejected, however, the
                            // result for this iteration will be rejected with the same
                            // reason. Note that rejections of yielded Promises are not
                            // thrown back into the generator function, as is the case
                            // when an awaited Promise is rejected. This difference in
                            // behavior between yield and await is important, because it
                            // allows the consumer to decide what to do with the yielded
                            // rejection (swallow it and continue, manually .throw it back
                            // into the generator, abandon iteration, whatever). With
                            // await, by contrast, there is no opportunity to examine the
                            // rejection reason outside the generator function, so the
                            // only option is to throw it from the await expression, and
                            // let the generator function handle the exception.
                            result.value = unwrapped, resolve(result);
                        }, reject);
                    }
                    reject(record.arg);
                }
                var previousPromise;
                "object" == typeof global.process && global.process.domain && (invoke = global.process.domain.bind(invoke)), 
                // Define the unified helper method that is used to implement .next,
                // .throw, and .return (see defineIteratorMethods).
                this._invoke = function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new Promise(function(resolve, reject) {
                            invoke(method, arg, resolve, reject);
                        });
                    }
                    return previousPromise = 
                    // If enqueue has been called before, then we want to wait until
                    // all previous Promises have been resolved before calling invoke,
                    // so that results are always delivered in the correct order. If
                    // enqueue has not been called before, then it is important to
                    // call invoke immediately, without waiting on a callback to fire,
                    // so that the async generator function has the opportunity to do
                    // any necessary setup in a predictable way. This predictability
                    // is why the Promise constructor synchronously invokes its
                    // executor callback, and why async functions synchronously
                    // execute code before the first await. Since we implement simple
                    // async functions in terms of async generators, it is especially
                    // important to get this right, even though it requires care.
                    previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, 
                    // Avoid propagating failures to Promises returned by later
                    // invocations of the iterator.
                    callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                };
            }
            function maybeInvokeDelegate(delegate, context) {
                var method = delegate.iterator[context.method];
                if (method === undefined) {
                    if (
                    // A .throw or .return when the delegate iterator has no .throw
                    // method always terminates the yield* loop.
                    context.delegate = null, "throw" === context.method) {
                        if (delegate.iterator["return"] && (
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), 
                        "throw" === context.method)) 
                        // If maybeInvokeDelegate(context) changed context.method from
                        // "return" to "throw", let that override the TypeError below.
                        return ContinueSentinel;
                        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return ContinueSentinel;
                }
                var record = tryCatch(method, delegate.iterator, context.arg);
                if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, 
                context.delegate = null, ContinueSentinel;
                var info = record.arg;
                return info ? info.done ? (
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value, 
                // Resume execution at the desired location (see delegateYield).
                context.next = delegate.nextLoc, 
                // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                "return" !== context.method && (context.method = "next", context.arg = undefined), 
                // The delegate iterator is finished, so forget it and continue with
                // the outer generator.
                context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), 
                context.delegate = null, ContinueSentinel);
            }
            function pushTryEntry(locs) {
                var entry = {
                    tryLoc: locs[0]
                };
                1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], 
                entry.afterLoc = locs[3]), this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal", delete record.arg, entry.completion = record;
            }
            function Context(tryLocsList) {
                // The root entry object (effectively a try statement without a catch
                // or a finally block) gives us a place to store values thrown from
                // locations where there is no enclosing try statement.
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
            }
            function values(iterable) {
                if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];
                    if (iteratorMethod) return iteratorMethod.call(iterable);
                    if ("function" == typeof iterable.next) return iterable;
                    if (!isNaN(iterable.length)) {
                        var i = -1, next = function next() {
                            for (;++i < iterable.length; ) if (hasOwn.call(iterable, i)) return next.value = iterable[i], 
                            next.done = !1, next;
                            return next.value = undefined, next.done = !0, next;
                        };
                        return next.next = next;
                    }
                }
                // Return an iterator with no values.
                                return {
                    next: doneResult
                };
            }
            function doneResult() {
                return {
                    value: undefined,
                    done: !0
                };
            }
        }(
        // Among the various tricks for obtaining a reference to the global
        // object, this seems to be the most reliable technique that does not
        // use indirect eval (which violates Content Security Policy).
        "object" == typeof global ? global : "object" == typeof window ? window : "object" == typeof self ? self : this);
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(27))
    /***/;
}, 
/* 373 */
/***/ function(module, exports, __webpack_require__) {
    __webpack_require__(374), module.exports = __webpack_require__(18).RegExp.escape;
}, 
/* 374 */
/***/ function(module, exports, __webpack_require__) {
    // https://github.com/benjamingr/RexExp.escape
    var $export = __webpack_require__(0), $re = __webpack_require__(375)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    $export($export.S, "RegExp", {
        escape: function(it) {
            return $re(it);
        }
    });
}, 
/* 375 */
/***/ function(module, exports) {
    module.exports = function(regExp, replace) {
        var replacer = replace === Object(replace) ? function(part) {
            return replace[part];
        } : replace;
        return function(it) {
            return String(it).replace(regExp, replacer);
        };
    };
    /***/}, 
/* 376 */
/***/ function(module, exports) {
    var origDefineProperty = Object.defineProperty;
    origDefineProperty && function() {
        var obj = {};
        try {
            for (var _ in origDefineProperty(obj, "x", {
                enumerable: !1,
                value: obj
            }), obj) return !1;
            return obj.x === obj;
        } catch (e) {
            /* this is IE 8. */
            return !1;
        }
    }() || (Object.defineProperty = function(a, b, c) {
        //IE8支持修改元素节点的属性
        if (origDefineProperty && 1 == a.nodeType) return origDefineProperty(a, b, c);
        a[b] = c.value || c.get && c.get();
    })
    /***/;
}, 
/* 377 */
/***/ function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
    // vim: ts=4 sts=4 sw=4 expandtab
    // Add semicolon to prevent IIFE from being passed as argument to concatenated code.
        // UMD (Universal Module Definition)
    // see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
    !function(root, factory) {
        "use strict";
        /* global define, exports, module */        (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function() {
            /**
     * Brings an environment as close to ECMAScript 5 compliance
     * as is possible with the facilities of erstwhile engines.
     *
     * Annotated ES5: http://es5.github.com/ (specific links below)
     * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
     * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
     */
            // Shortcut to an often accessed properties, in order to avoid multiple
            // dereference that costs universally. This also holds a reference to known-good
            // functions.
            var isRegex, isString, $Array = Array, ArrayPrototype = $Array.prototype, $Object = Object, ObjectPrototype = $Object.prototype, $Function = Function, FunctionPrototype = $Function.prototype, $String = String, StringPrototype = $String.prototype, $Number = Number, NumberPrototype = $Number.prototype, array_slice = ArrayPrototype.slice, array_splice = ArrayPrototype.splice, array_push = ArrayPrototype.push, array_unshift = ArrayPrototype.unshift, array_concat = ArrayPrototype.concat, array_join = ArrayPrototype.join, call = FunctionPrototype.call, apply = FunctionPrototype.apply, max = Math.max, min = Math.min, to_string = ObjectPrototype.toString, hasToStringTag = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) {
                try {
                    var fnStr = fnToStr.call(value), singleStripped = fnStr.replace(/\/\/.*\n/g, ""), multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, ""), spaceStripped = multiStripped.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return constructorRegex.test(spaceStripped);
                } catch (e) {
                    return !1;
 /* not a function */                }
            }, tryFunctionObject = function tryFunctionObject(value) {
                try {
                    return !isES6ClassFn(value) && (fnToStr.call(value), !0);
                } catch (e) {
                    return !1;
                }
            }, isCallable = function isCallable(value) {
                if (!value) return !1;
                if ("function" != typeof value && "object" != typeof value) return !1;
                if (hasToStringTag) return tryFunctionObject(value);
                if (isES6ClassFn(value)) return !1;
                var strClass = to_string.call(value);
                return "[object Function]" === strClass || "[object GeneratorFunction]" === strClass;
            }, regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) {
                try {
                    return regexExec.call(value), !0;
                } catch (e) {
                    return !1;
                }
            };
            isRegex = function isRegex(value) {
                return "object" == typeof value && (hasToStringTag ? tryRegexExec(value) : "[object RegExp]" === to_string.call(value));
            };
            /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) {
                try {
                    return strValue.call(value), !0;
                } catch (e) {
                    return !1;
                }
            };
            isString = function isString(value) {
                return "string" == typeof value || "object" == typeof value && (hasToStringTag ? tryStringObject(value) : "[object String]" === to_string.call(value));
            };
            /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
            /* inlined from http://npmjs.com/define-properties */
            var supportsDescriptors = $Object.defineProperty && function() {
                try {
                    var obj = {};
                    for (var _ in $Object.defineProperty(obj, "x", {
                        enumerable: !1,
                        value: obj
                    }), obj) // jscs:ignore disallowUnusedVariables
                    return !1;
                    return obj.x === obj;
                } catch (e) {
                    /* this is ES3 */
                    return !1;
                }
            }(), defineProperties = (has = ObjectPrototype.hasOwnProperty, defineProperty = supportsDescriptors ? function(object, name, method, forceAssign) {
                !forceAssign && name in object || $Object.defineProperty(object, name, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: method
                });
            } : function(object, name, method, forceAssign) {
                !forceAssign && name in object || (object[name] = method);
            }, function defineProperties(object, map, forceAssign) {
                for (var name in map) has.call(map, name) && defineProperty(object, name, map[name], forceAssign);
            }), isPrimitive = function isPrimitive(input) {
                var type = typeof input;
                return null === input || "object" !== type && "function" !== type;
            }, isActualNaN = $Number.isNaN || function isActualNaN(x) {
                return x != x;
            }, ES = {
                // ES5 9.4
                // http://es5.github.com/#x9.4
                // http://jsperf.com/to-integer
                /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
                ToInteger: function(num) {
                    var n = +num;
                    return isActualNaN(n) ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -1 / 0 && (n = (0 < n || -1) * Math.floor(Math.abs(n))), 
                    n;
                },
                /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
                ToPrimitive: function(input) {
                    var val, valueOf, toStr;
                    if (isPrimitive(input)) return input;
                    if (valueOf = input.valueOf, isCallable(valueOf) && (val = valueOf.call(input), 
                    isPrimitive(val))) return val;
                    if (toStr = input.toString, isCallable(toStr) && (val = toStr.call(input), isPrimitive(val))) return val;
                    throw new TypeError();
                },
                // ES5 9.9
                // http://es5.github.com/#x9.9
                /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
                ToObject: function(o) {
                    if (null == o) // this matches both null and undefined
                    throw new TypeError("can't convert " + o + " to object");
                    return $Object(o);
                },
                /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
                ToUint32: function(x) {
                    return x >>> 0;
                }
            }, Empty = function Empty() {};
            var has, defineProperty;
            defineProperties(FunctionPrototype, {
                bind: function(that) {
                    // .length is 1
                    // 1. Let Target be the this value.
                    var target = this;
                    // 2. If IsCallable(Target) is false, throw a TypeError exception.
                                        if (!isCallable(target)) throw new TypeError("Function.prototype.bind called on incompatible " + target);
                    // 3. Let A be a new (possibly empty) internal list of all of the
                    //   argument values provided after thisArg (arg1, arg2 etc), in order.
                    // XXX slicedArgs will stand in for "A" if used
                                        for (var bound, args = array_slice.call(arguments, 1), boundLength = max(0, target.length - args.length), boundArgs = [], i = 0 // for normal call
                    // 4. Let F be a new native ECMAScript object.
                    // 11. Set the [[Prototype]] internal property of F to the standard
                    //   built-in Function prototype object as specified in 15.3.3.1.
                    // 12. Set the [[Call]] internal property of F as described in
                    //   15.3.4.5.1.
                    // 13. Set the [[Construct]] internal property of F as described in
                    //   15.3.4.5.2.
                    // 14. Set the [[HasInstance]] internal property of F as described in
                    //   15.3.4.5.3.
                    ; i < boundLength; i++) array_push.call(boundArgs, "$" + i);
                    // XXX Build a dynamic function with desired amount of arguments is the only
                    // way to set the length property of a function.
                    // In environments where Content Security Policies enabled (Chrome extensions,
                    // for ex.) all use of eval or Function costructor throws an exception.
                    // However in all of these environments Function.prototype.bind exists
                    // and so this code will never be executed.
                                        // TODO
                    // 18. Set the [[Extensible]] internal property of F to true.
                    // TODO
                    // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
                    // 20. Call the [[DefineOwnProperty]] internal method of F with
                    //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
                    //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
                    //   false.
                    // 21. Call the [[DefineOwnProperty]] internal method of F with
                    //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
                    //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
                    //   and false.
                    // TODO
                    // NOTE Function objects created using Function.prototype.bind do not
                    // have a prototype property or the [[Code]], [[FormalParameters]], and
                    // [[Scope]] internal properties.
                    // XXX can't delete prototype in pure-js.
                    // 22. Return F.
                    return bound = $Function("binder", "return function (" + array_join.call(boundArgs, ",") + "){ return binder.apply(this, arguments); }")(function() {
                        {
                            if (this instanceof bound) {
                                // 15.3.4.5.2 [[Construct]]
                                // When the [[Construct]] internal method of a function object,
                                // F that was created using the bind function is called with a
                                // list of arguments ExtraArgs, the following steps are taken:
                                // 1. Let target be the value of F's [[TargetFunction]]
                                //   internal property.
                                // 2. If target has no [[Construct]] internal method, a
                                //   TypeError exception is thrown.
                                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                                //   property.
                                // 4. Let args be a new list containing the same values as the
                                //   list boundArgs in the same order followed by the same
                                //   values as the list ExtraArgs in the same order.
                                // 5. Return the result of calling the [[Construct]] internal
                                //   method of target providing args as the arguments.
                                var result = apply.call(target, this, array_concat.call(args, array_slice.call(arguments)));
                                return $Object(result) === result ? result : this;
                            }
                            // 15.3.4.5.1 [[Call]]
                            // When the [[Call]] internal method of a function object, F,
                            // which was created using the bind function is called with a
                            // this value and a list of arguments ExtraArgs, the following
                            // steps are taken:
                            // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                            //   property.
                            // 2. Let boundThis be the value of F's [[BoundThis]] internal
                            //   property.
                            // 3. Let target be the value of F's [[TargetFunction]] internal
                            //   property.
                            // 4. Let args be a new list containing the same values as the
                            //   list boundArgs in the same order followed by the same
                            //   values as the list ExtraArgs in the same order.
                            // 5. Return the result of calling the [[Call]] internal method
                            //   of target providing boundThis as the this value and
                            //   providing args as the arguments.
                            // equiv: target.call(this, ...boundArgs, ...args)
                            return apply.call(target, that, array_concat.call(args, array_slice.call(arguments)));
                        }
                    }), target.prototype && (Empty.prototype = target.prototype, bound.prototype = new Empty(), 
                    // Clean up dangling references.
                    Empty.prototype = null), bound;
                }
            });
            // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
            // use it in defining shortcuts.
            var owns = call.bind(ObjectPrototype.hasOwnProperty), toStr = call.bind(ObjectPrototype.toString), arraySlice = call.bind(array_slice), arraySliceApply = apply.bind(array_slice);
            /* globals document */
            if ("object" == typeof document && document && document.documentElement) try {
                arraySlice(document.documentElement.childNodes);
            } catch (e) {
                var origArraySlice = arraySlice, origArraySliceApply = arraySliceApply;
                arraySlice = function arraySliceIE(arr) {
                    for (var r = [], i = arr.length; 0 < i--; ) r[i] = arr[i];
                    return origArraySliceApply(r, origArraySlice(arguments, 1));
                }, arraySliceApply = function arraySliceApplyIE(arr, args) {
                    return origArraySliceApply(arraySlice(arr), args);
                };
            }
            var strSlice = call.bind(StringPrototype.slice), strSplit = call.bind(StringPrototype.split), strIndexOf = call.bind(StringPrototype.indexOf), pushCall = call.bind(array_push), isEnum = call.bind(ObjectPrototype.propertyIsEnumerable), arraySort = call.bind(ArrayPrototype.sort), isArray = $Array.isArray || function isArray(obj) {
                return "[object Array]" === toStr(obj);
            }, hasUnshiftReturnValueBug = 1 !== [].unshift(0);
            defineProperties(ArrayPrototype, {
                unshift: function() {
                    return array_unshift.apply(this, arguments), this.length;
                }
            }, hasUnshiftReturnValueBug), 
            // ES5 15.4.3.2
            // http://es5.github.com/#x15.4.3.2
            // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
            defineProperties($Array, {
                isArray: isArray
            });
            // The IsCallable() check in the Array functions
            // has been replaced with a strict check on the
            // internal class of the object to trap cases where
            // the provided function was actually a regular
            // expression literal, which in V8 and
            // JavaScriptCore is a typeof "function".  Only in
            // V8 are regular expression literals permitted as
            // reduce parameters, so it is desirable in the
            // general case for the shim to match the more
            // strict and common behavior of rejecting regular
            // expressions.
            // ES5 15.4.4.18
            // http://es5.github.com/#x15.4.4.18
            // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach
            // Check failure of by-index access of string characters (IE < 9)
            // and failure of `0 in boxedString` (Rhino)
            var boxedString = $Object("a"), splitString = "a" !== boxedString[0] || !(0 in boxedString), properlyBoxesContext = function(method) {
                // Check node 0.6.21 bug where third parameter is not boxed
                var properlyBoxesNonStrict = !0, properlyBoxesStrict = !0, threwException = !1;
                if (method) try {
                    method.call("foo", function(_, __, context) {
                        "object" != typeof context && (properlyBoxesNonStrict = !1);
                    }), method.call([ 1 ], function() {
                        properlyBoxesStrict = "string" == typeof this;
                    }, "x");
                } catch (e) {
                    threwException = !0;
                }
                return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
            };
            defineProperties(ArrayPrototype, {
                forEach: function(callbackfn /*, thisArg*/) {
                    var T, object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, i = -1, length = ES.ToUint32(self.length);
                    // If no callback function or if callback is not a callable function
                    if (1 < arguments.length && (T = arguments[1]), !isCallable(callbackfn)) throw new TypeError("Array.prototype.forEach callback must be a function");
                    for (;++i < length; ) i in self && (
                    // Invoke the callback function with call, passing arguments:
                    // context, property value, property key, thisArg object
                    void 0 === T ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object));
                }
            }, !properlyBoxesContext(ArrayPrototype.forEach)), 
            // ES5 15.4.4.19
            // http://es5.github.com/#x15.4.4.19
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
            defineProperties(ArrayPrototype, {
                map: function(callbackfn /*, thisArg*/) {
                    var T, object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, length = ES.ToUint32(self.length), result = $Array(length);
                    // If no callback function or if callback is not a callable function
                    if (1 < arguments.length && (T = arguments[1]), !isCallable(callbackfn)) throw new TypeError("Array.prototype.map callback must be a function");
                    for (var i = 0; i < length; i++) i in self && (result[i] = void 0 === T ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object));
                    return result;
                }
            }, !properlyBoxesContext(ArrayPrototype.map)), 
            // ES5 15.4.4.20
            // http://es5.github.com/#x15.4.4.20
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
            defineProperties(ArrayPrototype, {
                filter: function(callbackfn /*, thisArg*/) {
                    var value, T, object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, length = ES.ToUint32(self.length), result = [];
                    // If no callback function or if callback is not a callable function
                    if (1 < arguments.length && (T = arguments[1]), !isCallable(callbackfn)) throw new TypeError("Array.prototype.filter callback must be a function");
                    for (var i = 0; i < length; i++) i in self && (value = self[i], (void 0 === T ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) && pushCall(result, value));
                    return result;
                }
            }, !properlyBoxesContext(ArrayPrototype.filter)), 
            // ES5 15.4.4.16
            // http://es5.github.com/#x15.4.4.16
            // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
            defineProperties(ArrayPrototype, {
                every: function(callbackfn /*, thisArg*/) {
                    var T, object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, length = ES.ToUint32(self.length);
                    // If no callback function or if callback is not a callable function
                    if (1 < arguments.length && (T = arguments[1]), !isCallable(callbackfn)) throw new TypeError("Array.prototype.every callback must be a function");
                    for (var i = 0; i < length; i++) if (i in self && !(void 0 === T ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) return !1;
                    return !0;
                }
            }, !properlyBoxesContext(ArrayPrototype.every)), 
            // ES5 15.4.4.17
            // http://es5.github.com/#x15.4.4.17
            // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
            defineProperties(ArrayPrototype, {
                some: function(callbackfn /*, thisArg */) {
                    var T, object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, length = ES.ToUint32(self.length);
                    // If no callback function or if callback is not a callable function
                    if (1 < arguments.length && (T = arguments[1]), !isCallable(callbackfn)) throw new TypeError("Array.prototype.some callback must be a function");
                    for (var i = 0; i < length; i++) if (i in self && (void 0 === T ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) return !0;
                    return !1;
                }
            }, !properlyBoxesContext(ArrayPrototype.some));
            // ES5 15.4.4.21
            // http://es5.github.com/#x15.4.4.21
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
            var reduceCoercesToObject = !1;
            ArrayPrototype.reduce && (reduceCoercesToObject = "object" == typeof ArrayPrototype.reduce.call("es5", function(_, __, ___, list) {
                return list;
            }));
            defineProperties(ArrayPrototype, {
                reduce: function(callbackfn /*, initialValue*/) {
                    var object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, length = ES.ToUint32(self.length);
                    // If no callback function or if callback is not a callable function
                    if (!isCallable(callbackfn)) throw new TypeError("Array.prototype.reduce callback must be a function");
                    // no value to return if no initial value and an empty array
                                        if (0 === length && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var result, i = 0;
                    if (2 <= arguments.length) result = arguments[1]; else for (;;) {
                        if (i in self) {
                            result = self[i++];
                            break;
                        }
                        // if array contains no values, no initial value to return
                                                if (++i >= length) throw new TypeError("reduce of empty array with no initial value");
                    }
                    for (;i < length; i++) i in self && (result = callbackfn(result, self[i], i, object));
                    return result;
                }
            }, !reduceCoercesToObject);
            // ES5 15.4.4.22
            // http://es5.github.com/#x15.4.4.22
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
            var reduceRightCoercesToObject = !1;
            ArrayPrototype.reduceRight && (reduceRightCoercesToObject = "object" == typeof ArrayPrototype.reduceRight.call("es5", function(_, __, ___, list) {
                return list;
            }));
            defineProperties(ArrayPrototype, {
                reduceRight: function(callbackfn /*, initial*/) {
                    var result, object = ES.ToObject(this), self = splitString && isString(this) ? strSplit(this, "") : object, length = ES.ToUint32(self.length);
                    // If no callback function or if callback is not a callable function
                    if (!isCallable(callbackfn)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                    // no value to return if no initial value, empty array
                                        if (0 === length && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                    var i = length - 1;
                    if (2 <= arguments.length) result = arguments[1]; else for (;;) {
                        if (i in self) {
                            result = self[i--];
                            break;
                        }
                        // if array contains no values, no initial value to return
                                                if (--i < 0) throw new TypeError("reduceRight of empty array with no initial value");
                    }
                    if (i < 0) return result;
                    for (;i in self && (result = callbackfn(result, self[i], i, object)), i--; ) ;
                    return result;
                }
            }, !reduceRightCoercesToObject);
            // ES5 15.4.4.14
            // http://es5.github.com/#x15.4.4.14
            // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
            var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && -1 !== [ 0, 1 ].indexOf(1, 2);
            defineProperties(ArrayPrototype, {
                indexOf: function(searchElement /*, fromIndex */) {
                    var self = splitString && isString(this) ? strSplit(this, "") : ES.ToObject(this), length = ES.ToUint32(self.length);
                    if (0 === length) return -1;
                    var i = 0;
                    for (1 < arguments.length && (i = ES.ToInteger(arguments[1])), 
                    // handle negative indices
                    i = 0 <= i ? i : max(0, length + i); i < length; i++) if (i in self && self[i] === searchElement) return i;
                    return -1;
                }
            }, hasFirefox2IndexOfBug);
            // ES5 15.4.4.15
            // http://es5.github.com/#x15.4.4.15
            // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
            var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && -1 !== [ 0, 1 ].lastIndexOf(0, -3);
            defineProperties(ArrayPrototype, {
                lastIndexOf: function(searchElement /*, fromIndex */) {
                    var self = splitString && isString(this) ? strSplit(this, "") : ES.ToObject(this), length = ES.ToUint32(self.length);
                    if (0 === length) return -1;
                    var i = length - 1;
                    for (1 < arguments.length && (i = min(i, ES.ToInteger(arguments[1]))), 
                    // handle negative indices
                    i = 0 <= i ? i : length - Math.abs(i); 0 <= i; i--) if (i in self && searchElement === self[i]) return i;
                    return -1;
                }
            }, hasFirefox2LastIndexOfBug);
            // ES5 15.4.4.12
            // http://es5.github.com/#x15.4.4.12
            var spliceNoopReturnsEmptyArray = (a = [ 1, 2 ], result = a.splice(), 2 === a.length && isArray(result) && 0 === result.length);
            var a, result;
            defineProperties(ArrayPrototype, {
                // Safari 5.0 bug where .splice() returns undefined
                splice: function(start, deleteCount) {
                    return 0 === arguments.length ? [] : array_splice.apply(this, arguments);
                }
            }, !spliceNoopReturnsEmptyArray);
            var spliceWorksWithEmptyObject = (obj = {}, ArrayPrototype.splice.call(obj, 0, 0, 1), 
            1 === obj.length);
            var obj;
            defineProperties(ArrayPrototype, {
                splice: function(start, deleteCount) {
                    if (0 === arguments.length) return [];
                    var args = arguments;
                    return this.length = max(ES.ToInteger(this.length), 0), 0 < arguments.length && "number" != typeof deleteCount && ((args = arraySlice(arguments)).length < 2 ? pushCall(args, this.length - start) : args[1] = ES.ToInteger(deleteCount)), 
                    array_splice.apply(this, args);
                }
            }, !spliceWorksWithEmptyObject);
            var spliceWorksWithLargeSparseArrays = (arr = new $Array(1e5), 
            // note: the index MUST be 8 or larger or the test will false pass
            arr[8] = "x", arr.splice(1, 1), 7 === arr.indexOf("x")), spliceWorksWithSmallSparseArrays = function() {
                // Per https://github.com/es-shims/es5-shim/issues/295
                // Opera 12.15 breaks on this, no idea why.
                var arr = [];
                return arr[256] = "a", arr.splice(257, 0, "b"), "a" === arr[256];
            }();
            var arr;
            defineProperties(ArrayPrototype, {
                splice: function(start, deleteCount) {
                    for (var from, O = ES.ToObject(this), A = [], len = ES.ToUint32(O.length), relativeStart = ES.ToInteger(start), actualStart = relativeStart < 0 ? max(len + relativeStart, 0) : min(relativeStart, len), actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart), k = 0; k < actualDeleteCount; ) from = $String(actualStart + k), 
                    owns(O, from) && (A[k] = O[from]), k += 1;
                    var to, items = arraySlice(arguments, 2), itemCount = items.length;
                    if (itemCount < actualDeleteCount) {
                        k = actualStart;
                        for (var maxK = len - actualDeleteCount; k < maxK; ) from = $String(k + actualDeleteCount), 
                        to = $String(k + itemCount), owns(O, from) ? O[to] = O[from] : delete O[to], k += 1;
                        for (var minK = (k = len) - actualDeleteCount + itemCount; minK < k; ) delete O[k - 1], 
                        k -= 1;
                    } else if (actualDeleteCount < itemCount) for (k = len - actualDeleteCount; actualStart < k; ) from = $String(k + actualDeleteCount - 1), 
                    to = $String(k + itemCount - 1), owns(O, from) ? O[to] = O[from] : delete O[to], 
                    k -= 1;
                    k = actualStart;
                    for (var i = 0; i < items.length; ++i) O[k] = items[i], k += 1;
                    return O.length = len - actualDeleteCount + itemCount, A;
                }
            }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);
            var hasStringJoinBug, originalJoin = ArrayPrototype.join;
            try {
                hasStringJoinBug = "1,2,3" !== Array.prototype.join.call("123", ",");
            } catch (e) {
                hasStringJoinBug = !0;
            }
            hasStringJoinBug && defineProperties(ArrayPrototype, {
                join: function(separator) {
                    var sep = void 0 === separator ? "," : separator;
                    return originalJoin.call(isString(this) ? strSplit(this, "") : this, sep);
                }
            }, hasStringJoinBug);
            var hasJoinUndefinedBug = "1,2" !== [ 1, 2 ].join(undefined);
            hasJoinUndefinedBug && defineProperties(ArrayPrototype, {
                join: function(separator) {
                    var sep = void 0 === separator ? "," : separator;
                    return originalJoin.call(this, sep);
                }
            }, hasJoinUndefinedBug);
            var pushShim = function(item) {
                for (var O = ES.ToObject(this), n = ES.ToUint32(O.length), i = 0; i < arguments.length; ) O[n + i] = arguments[i], 
                i += 1;
                return O.length = n + i, n + i;
            }, pushIsNotGeneric = function() {
                var obj = {}, result = Array.prototype.push.call(obj, undefined);
                return 1 !== result || 1 !== obj.length || "undefined" != typeof obj[0] || !owns(obj, 0);
            }();
            defineProperties(ArrayPrototype, {
                push: function(item) {
                    return isArray(this) ? array_push.apply(this, arguments) : pushShim.apply(this, arguments);
                }
            }, pushIsNotGeneric);
            // This fixes a very weird bug in Opera 10.6 when pushing `undefined
            var pushUndefinedIsWeird = function() {
                var arr = [], result = arr.push(undefined);
                return 1 !== result || 1 !== arr.length || "undefined" != typeof arr[0] || !owns(arr, 0);
            }();
            defineProperties(ArrayPrototype, {
                push: pushShim
            }, pushUndefinedIsWeird), 
            // ES5 15.2.3.14
            // http://es5.github.io/#x15.4.4.10
            // Fix boxed string bug
            defineProperties(ArrayPrototype, {
                slice: function(start, end) {
                    var arr = isString(this) ? strSplit(this, "") : this;
                    return arraySliceApply(arr, arguments);
                }
            }, splitString);
            var sortIgnoresNonFunctions = function() {
                try {
                    [ 1, 2 ].sort(null);
                } catch (e) {
                    try {
                        [ 1, 2 ].sort({});
                    } catch (e2) {
                        return !1;
                    }
                }
                return !0;
            }(), sortThrowsOnRegex = function() {
                // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
                try {
                    return [ 1, 2 ].sort(/a/), !1;
                } catch (e) {}
                return !0;
            }(), sortIgnoresUndefined = function() {
                // applies in IE 8, for one.
                try {
                    return [ 1, 2 ].sort(undefined), !0;
                } catch (e) {}
                return !1;
            }();
            defineProperties(ArrayPrototype, {
                sort: function(compareFn) {
                    if (void 0 === compareFn) return arraySort(this);
                    if (!isCallable(compareFn)) throw new TypeError("Array.prototype.sort callback must be a function");
                    return arraySort(this, compareFn);
                }
            }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);
            //
            // Object
            // ======
            //
            // ES5 15.2.3.14
            // http://es5.github.com/#x15.2.3.14
            // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
            var hasDontEnumBug = !isEnum({
                toString: null
            }, "toString"), hasProtoEnumBug = isEnum(function() {}, "prototype"), hasStringEnumBug = !owns("x", "0"), equalsConstructorPrototype = function(o) {
                var ctor = o.constructor;
                return ctor && ctor.prototype === o;
            }, excludedKeys = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0,
                $width: !0,
                $height: !0,
                $top: !0,
                $localStorage: !0
            }, hasAutomationEqualityBug = function() {
                /* globals window */
                if ("undefined" == typeof window) return !1;
                for (var k in window) try {
                    !excludedKeys["$" + k] && owns(window, k) && null !== window[k] && "object" == typeof window[k] && equalsConstructorPrototype(window[k]);
                } catch (e) {
                    return !0;
                }
                return !1;
            }(), dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], dontEnumsLength = dontEnums.length, isStandardArguments = function isArguments(value) {
                return "[object Arguments]" === toStr(value);
            }, isArguments = (function isArguments(value) {
                return null !== value && "object" == typeof value && "number" == typeof value.length && 0 <= value.length && !isArray(value) && isCallable(value.callee);
            }, isStandardArguments(arguments) ? isStandardArguments : function isArguments(value) {
                return null !== value && "object" == typeof value && "number" == typeof value.length && 0 <= value.length && !isArray(value) && isCallable(value.callee);
            });
 // jscs:ignore disallowQuotedKeysInObjects
                        defineProperties($Object, {
                keys: function(object) {
                    var isFn = isCallable(object), isArgs = isArguments(object), isObject = null !== object && "object" == typeof object, isStr = isObject && isString(object);
                    if (!isObject && !isFn && !isArgs) throw new TypeError("Object.keys called on a non-object");
                    var theKeys = [], skipProto = hasProtoEnumBug && isFn;
                    if (isStr && hasStringEnumBug || isArgs) for (var i = 0; i < object.length; ++i) pushCall(theKeys, $String(i));
                    if (!isArgs) for (var name in object) skipProto && "prototype" === name || !owns(object, name) || pushCall(theKeys, $String(name));
                    if (hasDontEnumBug) for (var skipConstructor = function(object) {
                        if ("undefined" == typeof window || !hasAutomationEqualityBug) return equalsConstructorPrototype(object);
                        try {
                            return equalsConstructorPrototype(object);
                        } catch (e) {
                            return !1;
                        }
                    }(object), j = 0; j < dontEnumsLength; j++) {
                        var dontEnum = dontEnums[j];
                        skipConstructor && "constructor" === dontEnum || !owns(object, dontEnum) || pushCall(theKeys, dontEnum);
                    }
                    return theKeys;
                }
            });
            var keysWorksWithArguments = $Object.keys && function() {
                // Safari 5.0 bug
                return 2 === $Object.keys(arguments).length;
            }(1, 2), keysHasArgumentsLengthBug = $Object.keys && function() {
                var argKeys = $Object.keys(arguments);
                return 1 !== arguments.length || 1 !== argKeys.length || 1 !== argKeys[0];
            }(1), originalKeys = $Object.keys;
            defineProperties($Object, {
                keys: function(object) {
                    return isArguments(object) ? originalKeys(arraySlice(object)) : originalKeys(object);
                }
            }, !keysWorksWithArguments || keysHasArgumentsLengthBug);
            //
            // Date
            // ====
            //
            var hasToDateStringFormatBug, hasToStringFormatBug, hasNegativeMonthYearBug = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(), aNegativeTestDate = new Date(-0x55d318d56a724), aPositiveTestDate = new Date(14496624e5), hasToUTCStringFormatBug = "Mon, 01 Jan -45875 11:59:59 GMT" !== aNegativeTestDate.toUTCString();
            hasToStringFormatBug = aNegativeTestDate.getTimezoneOffset() < -720 ? (hasToDateStringFormatBug = "Tue Jan 02 -45875" !== aNegativeTestDate.toDateString(), 
            !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(aPositiveTestDate))) : (hasToDateStringFormatBug = "Mon Jan 01 -45875" !== aNegativeTestDate.toDateString(), 
            !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(aPositiveTestDate)));
            var originalGetFullYear = call.bind(Date.prototype.getFullYear), originalGetMonth = call.bind(Date.prototype.getMonth), originalGetDate = call.bind(Date.prototype.getDate), originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear), originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth), originalGetUTCDate = call.bind(Date.prototype.getUTCDate), originalGetUTCDay = call.bind(Date.prototype.getUTCDay), originalGetUTCHours = call.bind(Date.prototype.getUTCHours), originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes), originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds), originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds), dayName = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], monthName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], daysInMonth = function daysInMonth(month, year) {
                return originalGetDate(new Date(year, month, 0));
            };
            // can't use defineProperties here because of toString enumeration issue in IE <= 8
            defineProperties(Date.prototype, {
                getFullYear: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var year = originalGetFullYear(this);
                    return year < 0 && 11 < originalGetMonth(this) ? year + 1 : year;
                },
                getMonth: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var year = originalGetFullYear(this), month = originalGetMonth(this);
                    return year < 0 && 11 < month ? 0 : month;
                },
                getDate: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var year = originalGetFullYear(this), month = originalGetMonth(this), date = originalGetDate(this);
                    return year < 0 && 11 < month ? 12 === month ? date : daysInMonth(0, year + 1) - date + 1 : date;
                },
                getUTCFullYear: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var year = originalGetUTCFullYear(this);
                    return year < 0 && 11 < originalGetUTCMonth(this) ? year + 1 : year;
                },
                getUTCMonth: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var year = originalGetUTCFullYear(this), month = originalGetUTCMonth(this);
                    return year < 0 && 11 < month ? 0 : month;
                },
                getUTCDate: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var year = originalGetUTCFullYear(this), month = originalGetUTCMonth(this), date = originalGetUTCDate(this);
                    return year < 0 && 11 < month ? 12 === month ? date : daysInMonth(0, year + 1) - date + 1 : date;
                }
            }, hasNegativeMonthYearBug), defineProperties(Date.prototype, {
                toUTCString: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var day = originalGetUTCDay(this), date = originalGetUTCDate(this), month = originalGetUTCMonth(this), year = originalGetUTCFullYear(this), hour = originalGetUTCHours(this), minute = originalGetUTCMinutes(this), second = originalGetUTCSeconds(this);
                    return dayName[day] + ", " + (date < 10 ? "0" + date : date) + " " + monthName[month] + " " + year + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + " GMT";
                }
            }, hasNegativeMonthYearBug || hasToUTCStringFormatBug), 
            // Opera 12 has `,`
            defineProperties(Date.prototype, {
                toDateString: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var day = this.getDay(), date = this.getDate(), month = this.getMonth(), year = this.getFullYear();
                    return dayName[day] + " " + monthName[month] + " " + (date < 10 ? "0" + date : date) + " " + year;
                }
            }, hasNegativeMonthYearBug || hasToDateStringFormatBug), (hasNegativeMonthYearBug || hasToStringFormatBug) && (Date.prototype.toString = function() {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var day = this.getDay(), date = this.getDate(), month = this.getMonth(), year = this.getFullYear(), hour = this.getHours(), minute = this.getMinutes(), second = this.getSeconds(), timezoneOffset = this.getTimezoneOffset(), hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60), minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
                return dayName[day] + " " + monthName[month] + " " + (date < 10 ? "0" + date : date) + " " + year + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + " GMT" + (0 < timezoneOffset ? "-" : "+") + (hoursOffset < 10 ? "0" + hoursOffset : hoursOffset) + (minutesOffset < 10 ? "0" + minutesOffset : minutesOffset);
            }, supportsDescriptors && $Object.defineProperty(Date.prototype, "toString", {
                configurable: !0,
                enumerable: !1,
                writable: !0
            }));
            // ES5 15.9.5.43
            // http://es5.github.com/#x15.9.5.43
            // This function returns a String value represent the instance in time
            // represented by this Date object. The format of the String is the Date Time
            // string format defined in 15.9.1.15. All fields are present in the String.
            // The time zone is always UTC, denoted by the suffix Z. If the time value of
            // this object is not a finite Number a RangeError exception is thrown.
                        var hasNegativeDateBug = Date.prototype.toISOString && -1 === new Date(-621987552e5).toISOString().indexOf("-000001"), hasSafari51DateBug = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(), getTime = call.bind(Date.prototype.getTime);
            defineProperties(Date.prototype, {
                toISOString: function() {
                    if (!isFinite(this) || !isFinite(getTime(this))) 
                    // Adope Photoshop requires the second check.
                    throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                    var year = originalGetUTCFullYear(this), month = originalGetUTCMonth(this);
                    // see https://github.com/es-shims/es5-shim/issues/111
                    year += Math.floor(month / 12);
                    // the date time string format is specified in 15.9.1.15.
                    var result = [ 1 + (month = (month % 12 + 12) % 12), originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this) ];
                    year = (year < 0 ? "-" : 9999 < year ? "+" : "") + strSlice("00000" + Math.abs(year), 0 <= year && year <= 9999 ? -4 : -6);
                    for (var i = 0; i < result.length; ++i) 
                    // pad months, days, hours, minutes, and seconds to have two digits.
                    result[i] = strSlice("00" + result[i], -2);
                    // pad milliseconds to have three digits.
                                        return year + "-" + arraySlice(result, 0, 2).join("-") + "T" + arraySlice(result, 2).join(":") + "." + strSlice("000" + originalGetUTCMilliseconds(this), -3) + "Z";
                }
            }, hasNegativeDateBug || hasSafari51DateBug), function() {
                try {
                    return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(-621987552e5).toJSON().indexOf("-000001") && Date.prototype.toJSON.call({
                        // generic
                        toISOString: function() {
                            return !0;
                        }
                    });
                } catch (e) {
                    return !1;
                }
            }() || (Date.prototype.toJSON = function(key) {
                // When the toJSON method is called with argument key, the following
                // steps are taken:
                // 1.  Let O be the result of calling ToObject, giving it the this
                // value as its argument.
                // 2. Let tv be ES.ToPrimitive(O, hint Number).
                var O = $Object(this), tv = ES.ToPrimitive(O);
                // 3. If tv is a Number and is not finite, return null.
                if ("number" == typeof tv && !isFinite(tv)) return null;
                // 4. Let toISO be the result of calling the [[Get]] internal method of
                // O with argument "toISOString".
                                var toISO = O.toISOString;
                // 5. If IsCallable(toISO) is false, throw a TypeError exception.
                                if (!isCallable(toISO)) throw new TypeError("toISOString property is not callable");
                // 6. Return the result of calling the [[Call]] internal method of
                //  toISO with O as the this value and an empty argument list.
                                return toISO.call(O);
                // NOTE 1 The argument is ignored.
                // NOTE 2 The toJSON function is intentionally generic; it does not
                // require that its this value be a Date object. Therefore, it can be
                // transferred to other kinds of objects for use as a method. However,
                // it does require that any such object have a toISOString method. An
                // object is free to use the argument key to filter its
                // stringification.
                        });
            // ES5 15.9.4.2
            // http://es5.github.com/#x15.9.4.2
            // based on work shared by Daniel Friesen (dantman)
            // http://gist.github.com/303249
                        var supportsExtendedYears = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"), acceptsInvalidDates = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
            if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || acceptsInvalidDates || !supportsExtendedYears) {
                // XXX global assignment won't work in embeddings that use
                // an alternate object for the context.
                /* global Date: true */
                var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1, hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
                // eslint-disable-next-line no-implicit-globals, no-global-assign
                Date = function(NativeDate) {
                    // Date.length === 7
                    var DateShim = function Date(Y, M, D, h, m, s, ms) {
                        var date, length = arguments.length;
                        if (this instanceof NativeDate) {
                            var seconds = s, millis = ms;
                            if (hasSafariSignedIntBug && 7 <= length && maxSafeUnsigned32Bit < ms) {
                                // work around a Safari 8/9 bug where it treats the seconds as signed
                                var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit, sToShift = Math.floor(msToShift / 1e3);
                                seconds += sToShift, millis -= 1e3 * sToShift;
                            }
                            date = 1 === length && $String(Y) === Y ? new NativeDate(DateShim.parse(Y)) : 7 <= length ? new NativeDate(Y, M, D, h, m, seconds, millis) : 6 <= length ? new NativeDate(Y, M, D, h, m, seconds) : 5 <= length ? new NativeDate(Y, M, D, h, m) : 4 <= length ? new NativeDate(Y, M, D, h) : 3 <= length ? new NativeDate(Y, M, D) : 2 <= length ? new NativeDate(Y, M) : 1 <= length ? new NativeDate(Y instanceof NativeDate ? +Y : Y) : new NativeDate();
                        } else date = NativeDate.apply(this, arguments);
                        return isPrimitive(date) || 
                        // Prevent mixups with unfixed Date object
                        defineProperties(date, {
                            constructor: DateShim
                        }, !0), date;
                    }, isoDateExpression = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), months = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 ], dayFromMonth = function dayFromMonth(year, month) {
                        var t = 1 < month ? 1 : 0;
                        return months[month] + Math.floor((year - 1969 + t) / 4) - Math.floor((year - 1901 + t) / 100) + Math.floor((year - 1601 + t) / 400) + 365 * (year - 1970);
                    }, toUTC = function toUTC(t) {
                        var s = 0, ms = t;
                        if (hasSafariSignedIntBug && maxSafeUnsigned32Bit < ms) {
                            // work around a Safari 8/9 bug where it treats the seconds as signed
                            var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit, sToShift = Math.floor(msToShift / 1e3);
                            s += sToShift, ms -= 1e3 * sToShift;
                        }
                        return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
                    };
                    // 15.9.1.15 Date Time String Format.
                                        // Copy any custom methods a 3rd party library may have added
                    for (var key in NativeDate) owns(NativeDate, key) && (DateShim[key] = NativeDate[key]);
                    // Copy "native" methods explicitly; they may be non-enumerable
                                        defineProperties(DateShim, {
                        now: NativeDate.now,
                        UTC: NativeDate.UTC
                    }, !0), DateShim.prototype = NativeDate.prototype, defineProperties(DateShim.prototype, {
                        constructor: DateShim
                    }, !0);
                    return defineProperties(DateShim, {
                        parse: function(string) {
                            var match = isoDateExpression.exec(string);
                            if (match) {
                                // parse months, days, hours, minutes, seconds, and milliseconds
                                // provide default values if necessary
                                // parse the UTC offset component
                                var result, year = $Number(match[1]), month = $Number(match[2] || 1) - 1, day = $Number(match[3] || 1) - 1, hour = $Number(match[4] || 0), minute = $Number(match[5] || 0), second = $Number(match[6] || 0), millisecond = Math.floor(1e3 * $Number(match[7] || 0)), 
                                // When time zone is missed, local offset should be used
                                // (ES 5.1 bug)
                                // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                                isLocalTime = Boolean(match[4] && !match[8]), signOffset = "-" === match[9] ? 1 : -1, hourOffset = $Number(match[10] || 0), minuteOffset = $Number(match[11] || 0), hasMinutesOrSecondsOrMilliseconds = 0 < minute || 0 < second || 0 < millisecond;
                                return hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) && minute < 60 && second < 60 && millisecond < 1e3 && -1 < month && month < 12 && hourOffset < 24 && minuteOffset < 60 && -1 < day && day < dayFromMonth(year, month + 1) - dayFromMonth(year, month) && (result = 1e3 * (60 * ((result = 60 * (24 * (dayFromMonth(year, month) + day) + hour + hourOffset * signOffset)) + minute + minuteOffset * signOffset) + second) + millisecond, 
                                isLocalTime && (result = toUTC(result)), -864e13 <= result && result <= 864e13) ? result : NaN;
                            }
                            return NativeDate.parse.apply(this, arguments);
                        }
                    }), DateShim;
                }(Date);
            }
            // ES5 15.9.4.4
            // http://es5.github.com/#x15.9.4.4
                        Date.now || (Date.now = function() {
                return new Date().getTime();
            });
            //
            // Number
            // ======
            //
            // ES5.1 15.7.4.5
            // http://es5.github.com/#x15.7.4.5
                        var hasToFixedBugs = NumberPrototype.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)), toFixedHelpers = {
                base: 1e7,
                size: 6,
                data: [ 0, 0, 0, 0, 0, 0 ],
                multiply: function(n, c) {
                    for (var i = -1, c2 = c; ++i < toFixedHelpers.size; ) c2 += n * toFixedHelpers.data[i], 
                    toFixedHelpers.data[i] = c2 % toFixedHelpers.base, c2 = Math.floor(c2 / toFixedHelpers.base);
                },
                divide: function(n) {
                    for (var i = toFixedHelpers.size, c = 0; 0 <= --i; ) c += toFixedHelpers.data[i], 
                    toFixedHelpers.data[i] = Math.floor(c / n), c = c % n * toFixedHelpers.base;
                },
                numToString: function() {
                    for (var i = toFixedHelpers.size, s = ""; 0 <= --i; ) if ("" !== s || 0 === i || 0 !== toFixedHelpers.data[i]) {
                        var t = $String(toFixedHelpers.data[i]);
                        "" === s ? s = t : s += strSlice("0000000", 0, 7 - t.length) + t;
                    }
                    return s;
                },
                pow: function pow(x, n, acc) {
                    return 0 === n ? acc : n % 2 == 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
                },
                log: function(x) {
                    for (var n = 0, x2 = x; 4096 <= x2; ) n += 12, x2 /= 4096;
                    for (;2 <= x2; ) n += 1, x2 /= 2;
                    return n;
                }
            };
            defineProperties(NumberPrototype, {
                toFixed: function(fractionDigits) {
                    var f, x, s, m, e, z, j, k;
                    // Test for NaN and round fractionDigits down
                                        if (f = $Number(fractionDigits), (f = isActualNaN(f) ? 0 : Math.floor(f)) < 0 || 20 < f) throw new RangeError("Number.toFixed called with invalid number of decimals");
                    if (x = $Number(this), isActualNaN(x)) return "NaN";
                    // If it is too big or small, return the string value of the number
                                        if (x <= -1e21 || 1e21 <= x) return $String(x);
                    if (s = "", x < 0 && (s = "-", x = -x), m = "0", 1e-21 < x) 
                    // -18 < e < 122
                    // x = z / 2 ^ e
                    if (
                    // 1e-21 < x < 1e21
                    // -70 < log2(x) < 70
                    e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69, z = e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1), 
                    z *= 4503599627370496, 0 < (// Math.pow(2, 52);
                    e = 52 - e)) {
                        for (toFixedHelpers.multiply(0, z), j = f; 7 <= j; ) toFixedHelpers.multiply(1e7, 0), 
                        j -= 7;
                        for (toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0), j = e - 1; 23 <= j; ) toFixedHelpers.divide(1 << 23), 
                        j -= 23;
                        toFixedHelpers.divide(1 << j), toFixedHelpers.multiply(1, 1), toFixedHelpers.divide(2), 
                        m = toFixedHelpers.numToString();
                    } else toFixedHelpers.multiply(0, z), toFixedHelpers.multiply(1 << -e, 0), m = toFixedHelpers.numToString() + strSlice("0.00000000000000000000", 2, 2 + f);
                    return m = 0 < f ? (k = m.length) <= f ? s + strSlice("0.0000000000000000000", 0, f - k + 2) + m : s + strSlice(m, 0, k - f) + "." + strSlice(m, k - f) : s + m;
                }
            }, hasToFixedBugs);
            var hasToPrecisionUndefinedBug = function() {
                try {
                    return "1" === 1..toPrecision(undefined);
                } catch (e) {
                    return !0;
                }
            }(), originalToPrecision = NumberPrototype.toPrecision;
            //
            // String
            // ======
            //
            // ES5 15.5.4.14
            // http://es5.github.com/#x15.5.4.14
            // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
            // Many browsers do not split properly with regular expressions or they
            // do not perform the split correctly under obscure conditions.
            // See http://blog.stevenlevithan.com/archives/cross-browser-split
            // I've tested in many browsers and this seems to cover the deviant ones:
            //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
            //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
            //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
            //       [undefined, "t", undefined, "e", ...]
            //    ''.split(/.?/) should be [], not [""]
            //    '.'.split(/()()/) should be ["."], not ["", "", "."]
            defineProperties(NumberPrototype, {
                toPrecision: function(precision) {
                    return void 0 === precision ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
                }
            }, hasToPrecisionUndefinedBug), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || 1 < ".".split(/()()/).length ? (compliantExecNpcg = "undefined" == typeof /()??/.exec("")[1], 
            maxSafe32BitInt = Math.pow(2, 32) - 1, StringPrototype.split = function(separator, limit) {
                var string = String(this);
                if (void 0 === separator && 0 === limit) return [];
                // If `separator` is not a regex, use native split
                                if (!isRegex(separator)) return strSplit(this, separator, limit);
                var 
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength, output = [], flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : ""), // Firefox 3+ and ES6
                lastLastIndex = 0, separatorCopy = new RegExp(separator.source, flags + "g");
                compliantExecNpcg || (
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separatorCopy.source + "$(?!\\s)", flags))
                /* Values for `limit`, per the spec:
                 * If undefined: 4294967295 // maxSafe32BitInt
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
                 * If other: Type-convert, then use the above rules
                 */;
                var splitLimit = void 0 === limit ? maxSafe32BitInt : ES.ToUint32(limit);
                for (match = separatorCopy.exec(string); match && (
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length, !(lastLastIndex < lastIndex && (pushCall(output, strSlice(string, lastLastIndex, match.index)), 
                // Fix browsers whose `exec` methods don't consistently return `undefined` for
                // nonparticipating capturing groups
                !compliantExecNpcg && 1 < match.length && 
                /* eslint-disable no-loop-func */
                match[0].replace(separator2, function() {
                    for (var i = 1; i < arguments.length - 2; i++) "undefined" == typeof arguments[i] && (match[i] = void 0);
                }), 1 < match.length && match.index < string.length && array_push.apply(output, arraySlice(match, 1)), 
                lastLength = match[0].length, lastLastIndex = lastIndex, splitLimit <= output.length))); ) separatorCopy.lastIndex === match.index && separatorCopy.lastIndex++, 
                match = separatorCopy.exec(string);
                return lastLastIndex === string.length ? !lastLength && separatorCopy.test("") || pushCall(output, "") : pushCall(output, strSlice(string, lastLastIndex)), 
                splitLimit < output.length ? arraySlice(output, 0, splitLimit) : output;
            }) : "0".split(void 0, 0).length && (StringPrototype.split = function(separator, limit) {
                return void 0 === separator && 0 === limit ? [] : strSplit(this, separator, limit);
            });
            var compliantExecNpcg, maxSafe32BitInt;
            var str_replace = StringPrototype.replace;
            groups = [], "x".replace(/x(.)?/g, function(match, group) {
                pushCall(groups, group);
            }), (1 !== groups.length || "undefined" != typeof groups[0]) && (StringPrototype.replace = function(searchValue, replaceValue) {
                var isFn = isCallable(replaceValue), hasCapturingGroups = isRegex(searchValue) && /\)[*?]/.test(searchValue.source);
                if (isFn && hasCapturingGroups) {
                    return str_replace.call(this, searchValue, function(match) {
                        var length = arguments.length, originalLastIndex = searchValue.lastIndex;
                        searchValue.lastIndex = 0;
                        var args = searchValue.exec(match) || [];
                        return searchValue.lastIndex = originalLastIndex, pushCall(args, arguments[length - 2], arguments[length - 1]), 
                        replaceValue.apply(this, args);
                    });
                }
                return str_replace.call(this, searchValue, replaceValue);
            });
            // ECMA-262, 3rd B.2.3
            // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
            // non-normative section suggesting uniform semantics and it should be
            // normalized across all browsers
            // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
                        var groups;
            var string_substr = StringPrototype.substr, hasNegativeSubstrBug = "".substr && "b" !== "0b".substr(-1);
            defineProperties(StringPrototype, {
                substr: function(start, length) {
                    var normalizedStart = start;
                    return start < 0 && (normalizedStart = max(this.length + start, 0)), string_substr.call(this, normalizedStart, length);
                }
            }, hasNegativeSubstrBug);
            // ES5 15.5.4.20
            // whitespace from: http://es5.github.io/#x15.5.4.20
            var ws = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", wsRegexChars = "[" + ws + "]", trimBeginRegexp = new RegExp("^" + wsRegexChars + wsRegexChars + "*"), trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + "*$"), hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !"​".trim());
            defineProperties(StringPrototype, {
                // http://blog.stevenlevithan.com/archives/faster-trim-javascript
                // http://perfectionkills.com/whitespace-deviations/
                trim: function trim() {
                    if (null == this) throw new TypeError("can't convert " + this + " to object");
                    return $String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
                }
            }, hasTrimWhitespaceBug);
            var trim = call.bind(String.prototype.trim), hasLastIndexBug = StringPrototype.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
            defineProperties(StringPrototype, {
                lastIndexOf: function(searchString) {
                    if (null == this) throw new TypeError("can't convert " + this + " to object");
                    for (var S = $String(this), searchStr = $String(searchString), numPos = 1 < arguments.length ? $Number(arguments[1]) : NaN, pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos), start = min(max(pos, 0), S.length), searchLen = searchStr.length, k = start + searchLen; 0 < k; ) {
                        k = max(0, k - searchLen);
                        var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
                        if (-1 !== index) return k + index;
                    }
                    return -1;
                }
            }, hasLastIndexBug);
            var originalLastIndexOf = StringPrototype.lastIndexOf;
            // ES-5 15.1.2.2
            // eslint-disable-next-line radix
            defineProperties(StringPrototype, {
                lastIndexOf: function(searchString) {
                    return originalLastIndexOf.apply(this, arguments);
                }
            }, 1 !== StringPrototype.lastIndexOf.length), (8 !== parseInt(ws + "08") || 22 !== parseInt(ws + "0x16")) && (
            /* global parseInt: true */
            parseInt = (origParseInt = parseInt, hexRegex = /^[-+]?0[xX]/, function parseInt(str, radix) {
                var string = trim(String(str)), defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
                return origParseInt(string, defaultedRadix);
            }));
            // https://es5.github.io/#x15.1.2.3
                        var origParseInt, hexRegex;
            1 / parseFloat("-0") != -Infinity && (
            /* global parseFloat: true */
            parseFloat = (origParseFloat = parseFloat, function parseFloat(string) {
                var inputString = trim(String(string)), result = origParseFloat(inputString);
                return 0 === result && "-" === strSlice(inputString, 0, 1) ? -0 : result;
            }));
            var origParseFloat;
            if ("RangeError: test" !== String(new RangeError("test"))) {
                // can't use defineProperties here because of toString enumeration issue in IE <= 8
                Error.prototype.toString = function() {
                    if (null == this) throw new TypeError("can't convert " + this + " to object");
                    var name = this.name;
                    void 0 === name ? name = "Error" : "string" != typeof name && (name = $String(name));
                    var msg = this.message;
                    void 0 === msg ? msg = "" : "string" != typeof msg && (msg = $String(msg));
                    return name ? msg ? name + ": " + msg : name : msg;
                };
            }
            if (supportsDescriptors) {
                var ensureNonEnumerable = function(obj, prop) {
                    if (isEnum(obj, prop)) {
                        var desc = Object.getOwnPropertyDescriptor(obj, prop);
                        desc.configurable && (desc.enumerable = !1, Object.defineProperty(obj, prop, desc));
                    }
                };
                ensureNonEnumerable(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), 
                ensureNonEnumerable(Error.prototype, "name");
            }
            if ("/a/gim" !== String(/a/gim)) {
                // can't use defineProperties here because of toString enumeration issue in IE <= 8
                RegExp.prototype.toString = function() {
                    var str = "/" + this.source + "/";
                    this.global && (str += "g");
                    this.ignoreCase && (str += "i");
                    this.multiline && (str += "m");
                    return str;
                };
            }
        }) ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }();
}, 
/* 378 */
/***/ function(module, exports, __webpack_require__) {
    var arrayExtend = __webpack_require__(379);
    __webpack_require__(380);
    arrayExtend.init();
}, 
/* 379 */
/***/ function(module, exports) {
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    var arrayExtend = new (
    /* */
    function() {
        function ArrayExtend() {
            !function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }(this, ArrayExtend);
        }
        return function _createClass(Constructor, protoProps, staticProps) {
            return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), 
            Constructor;
        }(ArrayExtend, [ {
            key: "chunk",
            value: function() {
                Array.prototype.chunk = function(n) {
                    for (var result = [], i = 0, len = this.length; i < len; i += n) result.push(this.slice(i, i + n));
                    return result;
                };
            }
        }, {
            key: "removalRepeat",
            value: function() {
                Array.prototype.removalRepeat = function() {
                    var key = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "";
                    if (isValueList(this)) return Array.from(new Set(this));
                    var _result = [], array_ = this, _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = undefined;
                    try {
                        for (var _step, _loop = function _loop() {
                            var source = _step.value;
                            0 === _result.filter(function(target) {
                                return target[key] === source[key];
                            }).length && _result.push(source);
                        }, _iterator = array_[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) _loop();
                    } catch (err) {
                        _didIteratorError = !0, _iteratorError = err;
                    } finally {
                        try {
                            _iteratorNormalCompletion || null == _iterator["return"] || _iterator["return"]();
                        } finally {
                            if (_didIteratorError) throw _iteratorError;
                        }
                    }
                    return _result;
                };
            }
        }, {
            key: "init",
            value: function() {
                for (var keyList = [ "chunk", "removalRepeat" ], _i = 0; _i < keyList.length; _i++) {
                    var key = keyList[_i];
                    null == Array.prototype[key] && this[key]();
                }
            }
        } ]), ArrayExtend;
    }())();
    module.exports = arrayExtend;
}, 
/* 380 */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(module, global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
 /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */        (function() {
            // Detect the `define` function exposed by asynchronous module loaders. The
            // strict `define` check is necessary for compatibility with `r.js`.
            var isLoader = __webpack_require__(381), objectTypes = {
                "function": !0,
                object: !0
            }, freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports, root = objectTypes[typeof window] && window || this, freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && "object" == typeof global && global;
            // A set of types used to distinguish objects from primitives.
                        // Public: Initializes JSON 3 using the given `context` object, attaching the
            // `stringify` and `parse` functions to the specified `exports` object.
            function runInContext(context, exports) {
                context || (context = root["Object"]()), exports || (exports = root["Object"]());
                // Native constructor aliases.
                var Number = context["Number"] || root["Number"], String = context["String"] || root["String"], Object = context["Object"] || root["Object"], Date = context["Date"] || root["Date"], SyntaxError = context["SyntaxError"] || root["SyntaxError"], TypeError = context["TypeError"] || root["TypeError"], Math = context["Math"] || root["Math"], nativeJSON = context["JSON"] || root["JSON"];
                // Delegate to the native `stringify` and `parse` implementations.
                                "object" == typeof nativeJSON && nativeJSON && (exports.stringify = nativeJSON.stringify, 
                exports.parse = nativeJSON.parse);
                // Convenience aliases.
                                var isProperty, forEach, undef, objectProto = Object.prototype, getClass = objectProto.toString, isExtended = new Date(-0xc782b5b800cec);
                // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
                                try {
                    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
                    // results for certain dates in Opera >= 10.53.
                    isExtended = -109252 == isExtended.getUTCFullYear() && 0 === isExtended.getUTCMonth() && 1 === isExtended.getUTCDate() && 
                    // Safari < 2.0.2 stores the internal millisecond time value correctly,
                    // but clips the values returned by the date methods to the range of
                    // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
                    10 == isExtended.getUTCHours() && 37 == isExtended.getUTCMinutes() && 6 == isExtended.getUTCSeconds() && 708 == isExtended.getUTCMilliseconds();
                } catch (exception) {}
                // Internal: Determines whether the native `JSON.stringify` and `parse`
                // implementations are spec-compliant. Based on work by Ken Snyder.
                                function has(name) {
                    if (has[name] !== undef) 
                    // Return cached feature test result.
                    return has[name];
                    var isSupported;
                    if ("bug-string-char-index" == name) 
                    // IE <= 7 doesn't support accessing string characters using square
                    // bracket notation. IE 8 only supports this for primitives.
                    isSupported = "a" != "a"[0]; else if ("json" == name) 
                    // Indicates whether both `JSON.stringify` and `JSON.parse` are
                    // supported.
                    isSupported = has("json-stringify") && has("json-parse"); else {
                        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        // Test `JSON.stringify`.
                                                if ("json-stringify" == name) {
                            var stringify = exports.stringify, stringifySupported = "function" == typeof stringify && isExtended;
                            if (stringifySupported) {
                                // A test function object with a custom `toJSON` method.
                                (value = function() {
                                    return 1;
                                }).toJSON = value;
                                try {
                                    stringifySupported = 
                                    // Firefox 3.1b1 and b2 serialize string, number, and boolean
                                    // primitives as object literals.
                                    "0" === stringify(0) && 
                                    // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                                    // literals.
                                    "0" === stringify(new Number()) && '""' == stringify(new String()) && 
                                    // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                                    // does not define a canonical JSON representation (this applies to
                                    // objects with `toJSON` properties as well, *unless* they are nested
                                    // within an object or array).
                                    stringify(getClass) === undef && 
                                    // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                                    // FF 3.1b3 pass this test.
                                    stringify(undef) === undef && 
                                    // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                                    // respectively, if the value is omitted entirely.
                                    stringify() === undef && 
                                    // FF 3.1b1, 2 throw an error if the given value is not a number,
                                    // string, array, object, Boolean, or `null` literal. This applies to
                                    // objects with custom `toJSON` methods as well, unless they are nested
                                    // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                                    // methods entirely.
                                    "1" === stringify(value) && "[1]" == stringify([ value ]) && 
                                    // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                                    // `"[null]"`.
                                    "[null]" == stringify([ undef ]) && 
                                    // YUI 3.0.0b1 fails to serialize `null` literals.
                                    "null" == stringify(null) && 
                                    // FF 3.1b1, 2 halts serialization if an array contains a function:
                                    // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                                    // elides non-JSON values from objects and arrays, unless they
                                    // define custom `toJSON` methods.
                                    "[null,null,null]" == stringify([ undef, getClass, null ]) && 
                                    // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                                    // where character escape codes are expected (e.g., `\b` => `\u0008`).
                                    stringify({
                                        a: [ value, !0, !1, null, "\0\b\n\f\r\t" ]
                                    }) == serialized && 
                                    // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                                    "1" === stringify(null, value) && "[\n 1,\n 2\n]" == stringify([ 1, 2 ], null, 1) && 
                                    // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                                    // serialize extended years.
                                    '"-271821-04-20T00:00:00.000Z"' == stringify(new Date(-864e13)) && 
                                    // The milliseconds are optional in ES 5, but required in 5.1.
                                    '"+275760-09-13T00:00:00.000Z"' == stringify(new Date(864e13)) && 
                                    // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                                    // four-digit years instead of six-digit years. Credits: @Yaffle.
                                    '"-000001-01-01T00:00:00.000Z"' == stringify(new Date(-621987552e5)) && 
                                    // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                                    // values less than 1000. Credits: @Yaffle.
                                    '"1969-12-31T23:59:59.999Z"' == stringify(new Date(-1));
                                } catch (exception) {
                                    stringifySupported = !1;
                                }
                            }
                            isSupported = stringifySupported;
                        }
                        // Test `JSON.parse`.
                                                if ("json-parse" == name) {
                            var parse = exports.parse;
                            if ("function" == typeof parse) try {
                                // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                                // Conforming implementations should also coerce the initial argument to
                                // a string prior to parsing.
                                if (0 === parse("0") && !parse(!1)) {
                                    var parseSupported = 5 == (
                                    // Simple parsing test.
                                    value = parse(serialized))["a"].length && 1 === value["a"][0];
                                    if (parseSupported) {
                                        try {
                                            // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                                            parseSupported = !parse('"\t"');
                                        } catch (exception) {}
                                        if (parseSupported) try {
                                            // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                                            // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                                            // certain octal literals.
                                            parseSupported = 1 !== parse("01");
                                        } catch (exception) {}
                                        if (parseSupported) try {
                                            // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                                            // points. These environments, along with FF 3.1b1 and 2,
                                            // also allow trailing commas in JSON objects and arrays.
                                            parseSupported = 1 !== parse("1.");
                                        } catch (exception) {}
                                    }
                                }
                            } catch (exception) {
                                parseSupported = !1;
                            }
                            isSupported = parseSupported;
                        }
                    }
                    return has[name] = !!isSupported;
                }
                if (!has("json")) {
                    // Common `[[Class]]` name aliases.
                    var charIndexBuggy = has("bug-string-char-index");
                    // Detect incomplete support for accessing string characters by index.
                                        // Define additional utility methods if the `Date` methods are buggy.
                    if (!isExtended) var floor = Math.floor, Months = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], getDay = function(year, month) {
                        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(1 < month))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                    };
                    // A mapping between the months of the year and the number of days between
                    // January 1st and the first of the respective month.
                    // Internal: Determines if a property is a direct property of the given
                    // object. Delegates to the native `Object#hasOwnProperty` method.
                                        // Public: Serializes a JavaScript `value` as a JSON string. The optional
                    // `filter` argument may specify either a function that alters how object and
                    // array members are serialized, or an array of strings and numbers that
                    // indicates which properties should be serialized. The optional `width`
                    // argument may be either a string or number that specifies the indentation
                    // level of the output.
                    if ((isProperty = objectProto.hasOwnProperty) || (isProperty = function(property) {
                        var constructor, members = {};
                        // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
                        // supports the mutable *proto* property.
                        return isProperty = (members.__proto__ = null, members.__proto__ = {
                            // The *proto* property cannot be set multiple times in recent
                            // versions of Firefox and SeaMonkey.
                            toString: 1
                        }, members).toString != getClass ? function(property) {
                            // Capture and break the object's prototype chain (see section 8.6.2
                            // of the ES 5.1 spec). The parenthesized expression prevents an
                            // unsafe transformation by the Closure Compiler.
                            var original = this.__proto__, result = property in (this.__proto__ = null, this);
                            // Restore the original prototype chain.
                                                        return this.__proto__ = original, result;
                        } : (
                        // Capture a reference to the top-level `Object` constructor.
                        constructor = members.constructor, function(property) {
                            var parent = (this.constructor || constructor).prototype;
                            return property in this && !(property in parent && this[property] === parent[property]);
                        }), members = null, isProperty.call(this, property);
                    }), 
                    // Internal: Normalizes the `for...in` iteration algorithm across
                    // environments. Each enumerated key is yielded to a `callback` function.
                    forEach = function(object, callback) {
                        var Properties, members, property, size = 0;
                        // Tests for bugs in the current environment's `for...in` algorithm. The
                        // `valueOf` property inherits the non-enumerable flag from
                        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
                                                for (property in 
                        // Tests for bugs in the current environment's `for...in` algorithm. The
                        // `valueOf` property inherits the non-enumerable flag from
                        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
                        (Properties = function() {
                            this.valueOf = 0;
                        }).prototype.valueOf = 0, 
                        // Iterate over a new instance of the `Properties` class.
                        members = new Properties()) 
                        // Ignore all properties inherited from `Object.prototype`.
                        isProperty.call(members, property) && size++;
                        return Properties = members = null, (
                        // Normalize the iteration algorithm.
                        // Safari <= 2.0.4 enumerates shadowed properties twice.
                        forEach = size ? 2 == size ? function(object, callback) {
                            // Create a set of iterated properties.
                            var property, members = {}, isFunction = "[object Function]" == getClass.call(object);
                            for (property in object) 
                            // Store each property name to prevent double enumeration. The
                            // `prototype` property of functions is not enumerated due to cross-
                            // environment inconsistencies.
                            isFunction && "prototype" == property || isProperty.call(members, property) || !(members[property] = 1) || !isProperty.call(object, property) || callback(property);
                        } : function(object, callback) {
                            var property, isConstructor, isFunction = "[object Function]" == getClass.call(object);
                            for (property in object) isFunction && "prototype" == property || !isProperty.call(object, property) || (isConstructor = "constructor" === property) || callback(property);
                            // Manually invoke the callback for the `constructor` property due to
                            // cross-environment inconsistencies.
                                                        (isConstructor || isProperty.call(object, property = "constructor")) && callback(property);
                        } : (
                        // A list of non-enumerable properties inherited from `Object.prototype`.
                        members = [ "valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor" ], 
                        function(object, callback) {
                            var property, length, isFunction = "[object Function]" == getClass.call(object), hasProperty = !isFunction && "function" != typeof object.constructor && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                            for (property in object) 
                            // Gecko <= 1.0 enumerates the `prototype` property of functions under
                            // certain conditions; IE does not.
                            isFunction && "prototype" == property || !hasProperty.call(object, property) || callback(property);
                            // Manually invoke the callback for each non-enumerable property.
                                                        for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) ;
                        }))(object, callback);
                    }, !has("json-stringify")) {
                        // Internal: A map of control characters and their escaped equivalents.
                        var Escapes = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }, toPaddedString = function(width, value) {
                            // The `|| 0` expression is necessary to work around a bug in
                            // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                            return ("000000" + (value || 0)).slice(-width);
                        }, quote = function(value) {
                            for (var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || 10 < length, symbols = useCharIndex && (charIndexBuggy ? value.split("") : value); index < length; index++) {
                                var charCode = value.charCodeAt(index);
                                // If the character is a control character, append its Unicode or
                                // shorthand escape sequence; otherwise, append the character as-is.
                                                                switch (charCode) {
                                  case 8:
                                  case 9:
                                  case 10:
                                  case 12:
                                  case 13:
                                  case 34:
                                  case 92:
                                    result += Escapes[charCode];
                                    break;

                                  default:
                                    if (charCode < 32) {
                                        result += "\\u00" + toPaddedString(2, charCode.toString(16));
                                        break;
                                    }
                                    result += useCharIndex ? symbols[index] : value.charAt(index);
                                }
                            }
                            return result + '"';
                        }, serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                            try {
                                // Necessary for host object support.
                                value = object[property];
                            } catch (exception) {}
                            if ("object" == typeof value && value) if ("[object Date]" != (className = getClass.call(value)) || isProperty.call(value, "toJSON")) "function" == typeof value.toJSON && ("[object Number]" != className && "[object String]" != className && "[object Array]" != className || isProperty.call(value, "toJSON")) && (
                            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                            // ignores all `toJSON` methods on these objects unless they are
                            // defined directly on an instance.
                            value = value.toJSON(property)); else if (-1 / 0 < value && value < 1 / 0) {
                                // Dates are serialized according to the `Date#toJSON` method
                                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                                // for the ISO 8601 date time string format.
                                if (getDay) {
                                    for (
                                    // Manually compute the year, month, date, hours, minutes,
                                    // seconds, and milliseconds if the `getUTC*` methods are
                                    // buggy. Adapted from @Yaffle's `date-shim` project.
                                    date = floor(value / 864e5), year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) ;
                                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) ;
                                    date = 1 + date - getDay(year, month), 
                                    // The hours, minutes, seconds, and milliseconds are obtained by
                                    // decomposing the time within the day. See section 15.9.1.10.
                                    hours = floor((
                                    // The `time` value specifies the time within the day (see ES
                                    // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                                    // to compute `A modulo B`, as the `%` operator does not
                                    // correspond to the `modulo` operation for negative numbers.
                                    time = (value % 864e5 + 864e5) % 864e5) / 36e5) % 24, minutes = floor(time / 6e4) % 60, 
                                    seconds = floor(time / 1e3) % 60, milliseconds = time % 1e3;
                                } else year = value.getUTCFullYear(), month = value.getUTCMonth(), date = value.getUTCDate(), 
                                hours = value.getUTCHours(), minutes = value.getUTCMinutes(), seconds = value.getUTCSeconds(), 
                                milliseconds = value.getUTCMilliseconds();
                                // Serialize extended years correctly.
                                                                value = (year <= 0 || 1e4 <= year ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + 
                                // Months, dates, hours, minutes, and seconds should have two
                                // digits; milliseconds should have three.
                                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + 
                                // Milliseconds are optional in ES 5.0, but required in 5.1.
                                "." + toPaddedString(3, milliseconds) + "Z";
                            } else value = null;
                            if (callback && (
                            // If a replacement function was provided, call it to obtain the value
                            // for serialization.
                            value = callback.call(object, property, value)), null === value) return "null";
                            if ("[object Boolean]" == (className = getClass.call(value))) 
                            // Booleans are represented literally.
                            return "" + value;
                            // Recursively serialize objects and arrays.
                                                        if ("[object Number]" == className) 
                            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                            // `"null"`.
                            return -1 / 0 < value && value < 1 / 0 ? "" + value : "null";
                            if ("[object String]" == className) 
                            // Strings are double-quoted and escaped.
                            return quote("" + value);
                            if ("object" == typeof value) {
                                // Check for cyclic structures. This is a linear search; performance
                                // is inversely proportional to the number of unique nested objects.
                                for (length = stack.length; length--; ) if (stack[length] === value) 
                                // Cyclic structures cannot be serialized by `JSON.stringify`.
                                throw TypeError();
                                // Add the object to the stack of traversed objects.
                                                                if (stack.push(value), results = [], 
                                // Save the current indentation level and indent one additional level.
                                prefix = indentation, indentation += whitespace, "[object Array]" == className) {
                                    // Recursively serialize array elements.
                                    for (index = 0, length = value.length; index < length; index++) element = serialize(index, value, callback, properties, whitespace, indentation, stack), 
                                    results.push(element === undef ? "null" : element);
                                    result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                                } else 
                                // Recursively serialize object members. Members are selected from
                                // either a user-specified list of property names, or the object
                                // itself.
                                forEach(properties || value, function(property) {
                                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                    element !== undef && 
                                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                                    // is not the empty string, let `member` {quote(property) + ":"}
                                    // be the concatenation of `member` and the `space` character."
                                    // The "`space` character" refers to the literal space
                                    // character, not the `space` {width} argument provided to
                                    // `JSON.stringify`.
                                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                                }), result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                                // Remove the object from the traversed object stack.
                                                                return stack.pop(), result;
                            }
                        };
                        // Internal: Converts `value` into a zero-padded string such that its
                        // length is at least equal to `width`. The `width` must be <= 6.
                                                // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
                        exports.stringify = function(source, filter, width) {
                            var whitespace, callback, properties, className;
                            if (objectTypes[typeof filter] && filter) if ("[object Function]" == (className = getClass.call(filter))) callback = filter; else if ("[object Array]" == className) {
                                // Convert the property names array into a makeshift set.
                                properties = {};
                                for (var value, index = 0, length = filter.length; index < length; value = filter[index++], 
                                ("[object String]" == (className = getClass.call(value)) || "[object Number]" == className) && (properties[value] = 1)) ;
                            }
                            if (width) if ("[object Number]" == (className = getClass.call(width))) {
                                // Convert the `width` to an integer and create a string containing
                                // `width` number of space characters.
                                if (0 < (width -= width % 1)) for (whitespace = "", 10 < width && (width = 10); whitespace.length < width; whitespace += " ") ;
                            } else "[object String]" == className && (whitespace = width.length <= 10 ? width : width.slice(0, 10));
                            // Opera <= 7.54u2 discards the values associated with empty string keys
                            // (`""`) only if they are used directly within an object member list
                            // (e.g., `!("" in { "": 1})`).
                                                        return serialize("", ((value = {})[""] = source, value), callback, properties, whitespace, "", []);
                        };
                    }
                    // Public: Parses a JSON source string.
                                        if (!has("json-parse")) {
                        var Index, Source, fromCharCode = String.fromCharCode, Unescapes = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        }, abort = function() {
                            throw Index = Source = null, SyntaxError();
                        }, lex = function() {
                            for (var value, begin, position, isSigned, charCode, source = Source, length = source.length; Index < length; ) switch (charCode = source.charCodeAt(Index)) {
                              case 9:
                              case 10:
                              case 13:
                              case 32:
                                // Skip whitespace tokens, including tabs, carriage returns, line
                                // feeds, and space characters.
                                Index++;
                                break;

                              case 123:
                              case 125:
                              case 91:
                              case 93:
                              case 58:
                              case 44:
                                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                                // the current position.
                                return value = charIndexBuggy ? source.charAt(Index) : source[Index], Index++, value;

                              case 34:
                                // `"` delimits a JSON string; advance to the next character and
                                // begin parsing the string. String tokens are prefixed with the
                                // sentinel `@` character to distinguish them from punctuators and
                                // end-of-string tokens.
                                for (value = "@", Index++; Index < length; ) if ((charCode = source.charCodeAt(Index)) < 32) 
                                // Unescaped ASCII control characters (those with a code unit
                                // less than the space character) are not permitted.
                                abort(); else if (92 == charCode) switch (
                                // A reverse solidus (`\`) marks the beginning of an escaped
                                // control character (including `"`, `\`, and `/`) or Unicode
                                // escape sequence.
                                charCode = source.charCodeAt(++Index)) {
                                  case 92:
                                  case 34:
                                  case 47:
                                  case 98:
                                  case 116:
                                  case 110:
                                  case 102:
                                  case 114:
                                    // Revive escaped control characters.
                                    value += Unescapes[charCode], Index++;
                                    break;

                                  case 117:
                                    for (
                                    // `\u` marks the beginning of a Unicode escape sequence.
                                    // Advance to the first character and validate the
                                    // four-digit code point.
                                    begin = ++Index, position = Index + 4; Index < position; Index++) 
                                    // A valid sequence comprises four hexdigits (case-
                                    // insensitive) that form a single hexadecimal value.
                                    48 <= (charCode = source.charCodeAt(Index)) && charCode <= 57 || 97 <= charCode && charCode <= 102 || 65 <= charCode && charCode <= 70 || 
                                    // Invalid Unicode escape sequence.
                                    abort();
                                    // Revive the escaped character.
                                                                        value += fromCharCode("0x" + source.slice(begin, Index));
                                    break;

                                  default:
                                    // Invalid escape sequence.
                                    abort();
                                } else {
                                    if (34 == charCode) 
                                    // An unescaped double-quote character marks the end of the
                                    // string.
                                    break;
                                    // Optimize for the common case where a string is valid.
                                    for (charCode = source.charCodeAt(Index), begin = Index; 32 <= charCode && 92 != charCode && 34 != charCode; ) charCode = source.charCodeAt(++Index);
                                    // Append the string as-is.
                                                                        value += source.slice(begin, Index);
                                }
                                if (34 == source.charCodeAt(Index)) 
                                // Advance to the next character and return the revived string.
                                return Index++, value;
                                // Unterminated string.
                                                                abort();

                              default:
                                // Parse an integer or floating-point value.
                                if (
                                // Parse numbers and literals.
                                begin = Index, 
                                // Advance past the negative sign, if one is specified.
                                45 == charCode && (isSigned = !0, charCode = source.charCodeAt(++Index)), 48 <= charCode && charCode <= 57) {
                                    // Parse the integer component.
                                    for (
                                    // Leading zeroes are interpreted as octal literals.
                                    48 == charCode && (48 <= (charCode = source.charCodeAt(Index + 1)) && charCode <= 57) && 
                                    // Illegal octal literal.
                                    abort(), isSigned = !1; Index < length && (48 <= (charCode = source.charCodeAt(Index)) && charCode <= 57); Index++) ;
                                    // Floats cannot contain a leading decimal point; however, this
                                    // case is already accounted for by the parser.
                                                                        if (46 == source.charCodeAt(Index)) {
                                        // Parse the decimal component.
                                        for (position = ++Index; position < length && (48 <= (charCode = source.charCodeAt(position)) && charCode <= 57); position++) ;
                                        position == Index && 
                                        // Illegal trailing decimal.
                                        abort(), Index = position;
                                    }
                                    // Parse exponents. The `e` denoting the exponent is
                                    // case-insensitive.
                                                                        if (101 == (charCode = source.charCodeAt(Index)) || 69 == charCode) {
                                        // Parse the exponential component.
                                        for (
                                        // Skip past the sign following the exponent, if one is
                                        // specified.
                                        43 != (charCode = source.charCodeAt(++Index)) && 45 != charCode || Index++, position = Index; position < length && (48 <= (charCode = source.charCodeAt(position)) && charCode <= 57); position++) ;
                                        position == Index && 
                                        // Illegal empty exponent.
                                        abort(), Index = position;
                                    }
                                    // Coerce the parsed value to a JavaScript number.
                                                                        return +source.slice(begin, Index);
                                }
                                // A negative sign may only precede numbers.
                                                                // `true`, `false`, and `null` literals.
                                if (isSigned && abort(), "true" == source.slice(Index, Index + 4)) return Index += 4, 
                                !0;
                                // Unrecognized token.
                                                                if ("false" == source.slice(Index, Index + 5)) return Index += 5, 
                                !1;
                                if ("null" == source.slice(Index, Index + 4)) return Index += 4, null;
                                abort();
                            }
                            // Return the sentinel `$` character if the parser has reached the end
                            // of the source string.
                                                        return "$";
                        }, get = function(value) {
                            var results, hasMembers;
                            if ("$" == value && 
                            // Unexpected end of input.
                            abort(), "string" == typeof value) {
                                if ("@" == (charIndexBuggy ? value.charAt(0) : value[0])) 
                                // Remove the sentinel `@` character.
                                return value.slice(1);
                                // Parse object and array literals.
                                                                if ("[" == value) {
                                    for (
                                    // Parses a JSON array, returning a new JavaScript array.
                                    results = []; "]" != (value = lex()); hasMembers || (hasMembers = !0)) 
                                    // If the array literal contains elements, the current token
                                    // should be a comma separating the previous element from the
                                    // next.
                                    hasMembers && ("," == value ? "]" == (value = lex()) && 
                                    // Unexpected trailing `,` in array literal.
                                    abort() : 
                                    // A `,` must separate each array element.
                                    abort()), 
                                    // Elisions and leading commas are not permitted.
                                    "," == value && abort(), results.push(get(value));
                                    return results;
                                }
                                // Unexpected token encountered.
                                                                if ("{" == value) {
                                    for (
                                    // Parses a JSON object, returning a new JavaScript object.
                                    results = {}; "}" != (value = lex()); hasMembers || (hasMembers = !0)) 
                                    // If the object literal contains members, the current token
                                    // should be a comma separator.
                                    hasMembers && ("," == value ? "}" == (value = lex()) && 
                                    // Unexpected trailing `,` in object literal.
                                    abort() : 
                                    // A `,` must separate each object member.
                                    abort()), 
                                    // Leading commas are not permitted, object property names must be
                                    // double-quoted strings, and a `:` must separate each property
                                    // name and value.
                                    "," != value && "string" == typeof value && "@" == (charIndexBuggy ? value.charAt(0) : value[0]) && ":" == lex() || abort(), 
                                    results[value.slice(1)] = get(lex());
                                    return results;
                                }
                                abort();
                            }
                            return value;
                        }, update = function(source, property, callback) {
                            var element = walk(source, property, callback);
                            element === undef ? delete source[property] : source[property] = element;
                        }, walk = function(source, property, callback) {
                            var length, value = source[property];
                            if ("object" == typeof value && value) 
                            // `forEach` can't be used to traverse an array in Opera <= 8.54
                            // because its `Object#hasOwnProperty` implementation returns `false`
                            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                            if ("[object Array]" == getClass.call(value)) for (length = value.length; length--; ) update(value, length, callback); else forEach(value, function(property) {
                                update(value, property, callback);
                            });
                            return callback.call(source, property, value);
                        };
                        // Internal: A map of escaped control characters and their unescaped
                        // equivalents.
                                                // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
                        exports.parse = function(source, callback) {
                            var result, value;
                            return Index = 0, Source = "" + source, result = get(lex()), 
                            // If a JSON string contains multiple tokens, it is invalid.
                            "$" != lex() && abort(), 
                            // Reset the parser state.
                            Index = Source = null, callback && "[object Function]" == getClass.call(callback) ? walk(((value = {})[""] = result, 
                            value), "", callback) : result;
                        };
                    }
                }
                return exports["runInContext"] = runInContext, exports;
            }
            if (!freeGlobal || freeGlobal["global"] !== freeGlobal && freeGlobal["window"] !== freeGlobal && freeGlobal["self"] !== freeGlobal || (root = freeGlobal), 
            freeExports && !isLoader) 
            // Export for CommonJS environments.
            runInContext(root, freeExports); else {
                // Export for web browsers and JavaScript engines.
                var nativeJSON = root.JSON, previousJSON = root["JSON3"], isRestored = !1, JSON3 = runInContext(root, root["JSON3"] = {
                    // Public: Restores the original value of the global `JSON` object and
                    // returns a reference to the `JSON3` object.
                    noConflict: function() {
                        return isRestored || (isRestored = !0, root.JSON = nativeJSON, root["JSON3"] = previousJSON, 
                        nativeJSON = previousJSON = null), JSON3;
                    }
                });
                root.JSON = {
                    parse: JSON3.parse,
                    stringify: JSON3.stringify
                };
            }
            // Export for asynchronous module loaders.
                        isLoader && ((__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return JSON3;
            }.call(exports, __webpack_require__, exports, module)) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }).call(this);
    }).call(this, __webpack_require__(56)(module), __webpack_require__(27))
    /***/;
}, 
/* 381 */
/***/ function(module, exports) {
    /* WEBPACK VAR INJECTION */ (function(__webpack_amd_options__) {
        /* globals __webpack_amd_options__ */
        module.exports = __webpack_amd_options__;
        /* WEBPACK VAR INJECTION */    }).call(this, {})
    /***/;
}
/******/ ]);