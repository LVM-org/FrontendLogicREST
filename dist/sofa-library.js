/*! SOFA Frontend Library v0.0.2 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('form-data'), require('http'), require('https'), require('util'), require('stream'), require('assert'), require('tty'), require('os'), require('zlib'), require('events'), require('vue'), require('fs'), require('child_process'), require('net'), require('tls'), require('crypto')) :
  typeof define === 'function' && define.amd ? define(['exports', 'form-data', 'http', 'https', 'util', 'stream', 'assert', 'tty', 'os', 'zlib', 'events', 'vue', 'fs', 'child_process', 'net', 'tls', 'crypto'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["Sofa-library"] = {}, global.FormData$1, global.require$$1$1, global.require$$2, global.require$$1, global.stream, global.require$$4, global.require$$0$1, global.require$$0, global.zlib$1, global.require$$0$2, global.Vue, global.require$$0$3, global.require$$2$1, global.require$$3, global.require$$4$1, global.require$$5));
})(this, (function (exports, FormData$1, require$$1$1, require$$2, require$$1, stream, require$$4, require$$0$1, require$$0, zlib$1, require$$0$2, vue, require$$0$3, require$$2$1, require$$3, require$$4$1, require$$5) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
      e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
        if (k !== 'default' && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    });
    return Object.freeze(n);
  }

  var FormData__default = /*#__PURE__*/_interopDefaultLegacy(FormData$1);
  var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);
  var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
  var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
  var stream__default = /*#__PURE__*/_interopDefaultLegacy(stream);
  var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
  var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
  var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib$1);
  var require$$0__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
  var require$$0__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$0$3);
  var require$$2__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$2$1);
  var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
  var require$$4__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$4$1);
  var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);

  const API_URL = '';

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // utils is a library of generic helper functions non-specific to axios

  const {
    toString: toString$1
  } = Object.prototype;
  const {
    getPrototypeOf
  } = Object;
  const kindOf = (cache => thing => {
    const str = toString$1.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(Object.create(null));
  const kindOfTest = type => {
    type = type.toLowerCase();
    return thing => kindOf(thing) === type;
  };
  const typeOfTest = type => thing => typeof thing === type;

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   *
   * @returns {boolean} True if value is an Array, otherwise false
   */
  const {
    isArray
  } = Array;

  /**
   * Determine if a value is undefined
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  const isUndefined = typeOfTest('undefined');

  /**
   * Determine if a value is a Buffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer$1(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  const isArrayBuffer = kindOfTest('ArrayBuffer');

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a String, otherwise false
   */
  const isString$1 = typeOfTest('string');

  /**
   * Determine if a value is a Function
   *
   * @param {*} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  const isFunction$1 = typeOfTest('function');

  /**
   * Determine if a value is a Number
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Number, otherwise false
   */
  const isNumber = typeOfTest('number');

  /**
   * Determine if a value is an Object
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an Object, otherwise false
   */
  const isObject = thing => thing !== null && typeof thing === 'object';

  /**
   * Determine if a value is a Boolean
   *
   * @param {*} thing The value to test
   * @returns {boolean} True if value is a Boolean, otherwise false
   */
  const isBoolean = thing => thing === true || thing === false;

  /**
   * Determine if a value is a plain Object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a plain Object, otherwise false
   */
  const isPlainObject = val => {
    if (kindOf(val) !== 'object') {
      return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };

  /**
   * Determine if a value is a Date
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Date, otherwise false
   */
  const isDate = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  const isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  const isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  const isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Stream
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  const isStream = val => isObject(val) && isFunction$1(val.pipe);

  /**
   * Determine if a value is a FormData
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  const isFormData = thing => {
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
    // detect form-data instance
    kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]'));
  };

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  const isURLSearchParams = kindOfTest('URLSearchParams');

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   *
   * @returns {String} The String freed of excess whitespace
   */
  const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

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
   *
   * @param {Boolean} [allOwnKeys = false]
   * @returns {any}
   */
  function forEach(obj, fn, {
    allOwnKeys = false
  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    let i;
    let l;

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
    if (isArray(obj)) {
      // Iterate over array values
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global = (() => {
    /*eslint no-undef:0*/
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
  })();
  const isContextDefined = context => !isUndefined(context) && context !== _global;

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
   *
   * @returns {Object} Result of all merge properties
   */
  function merge( /* obj1, obj2, obj3, ... */
  ) {
    const {
      caseless
    } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   *
   * @param {Boolean} [allOwnKeys]
   * @returns {Object} The resulting value of object a
   */
  const extend = (a, b, thisArg, {
    allOwnKeys
  } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction$1(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, {
      allOwnKeys
    });
    return a;
  };

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   *
   * @returns {string} content value without BOM
   */
  const stripBOM = content => {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  };

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   *
   * @returns {void}
   */
  const inherits = (constructor, superConstructor, props, descriptors) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function|Boolean} [filter]
   * @param {Function} [propFilter]
   *
   * @returns {Object}
   */
  const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };

  /**
   * Determines whether a string ends with the characters of a specified string
   *
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   *
   * @returns {boolean}
   */
  const endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };

  /**
   * Returns new array from array like object or null if failed
   *
   * @param {*} [thing]
   *
   * @returns {?Array}
   */
  const toArray = thing => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };

  /**
   * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
   * thing passed in is an instance of Uint8Array
   *
   * @param {TypedArray}
   *
   * @returns {Array}
   */
  // eslint-disable-next-line func-names
  const isTypedArray = (TypedArray => {
    // eslint-disable-next-line func-names
    return thing => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

  /**
   * For each entry in the object, call the function with the key and value.
   *
   * @param {Object<any, any>} obj - The object to iterate over.
   * @param {Function} fn - The function to call for each entry.
   *
   * @returns {void}
   */
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };

  /**
   * It takes a regular expression and a string, and returns an array of all the matches
   *
   * @param {string} regExp - The regular expression to match against.
   * @param {string} str - The string to search.
   *
   * @returns {Array<boolean>}
   */
  const matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };

  /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
  const isHTMLForm = kindOfTest('HTMLFormElement');
  const toCamelCase = str => {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    });
  };

  /* Creating a function that will check if an object has a property. */
  const hasOwnProperty$1 = (({
    hasOwnProperty
  }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

  /**
   * Determine if a value is a RegExp object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a RegExp object, otherwise false
   */
  const isRegExp = kindOfTest('RegExp');
  const reduceDescriptors = (obj, reducer) => {
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name) => {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };

  /**
   * Makes all methods read-only
   * @param {Object} obj
   */

  const freezeMethods = obj => {
    reduceDescriptors(obj, (descriptor, name) => {
      // skip restricted props in strict mode
      if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction$1(value)) return;
      descriptor.enumerable = false;
      if ('writable' in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = arr => {
      arr.forEach(value => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop$1 = () => {};
  const toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  const DIGIT = '0123456789';
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = '';
    const {
      length
    } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };

  /**
   * If the thing is a FormData object, return true, otherwise return false.
   *
   * @param {unknown} thing - The thing to check.
   *
   * @returns {boolean}
   */
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
  }
  const toJSONObject = obj => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!('toJSON' in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = undefined;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var utils = {
    isArray,
    isArrayBuffer,
    isBuffer: isBuffer$1,
    isFormData,
    isArrayBufferView,
    isString: isString$1,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction: isFunction$1,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty: hasOwnProperty$1,
    hasOwnProp: hasOwnProperty$1,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop: noop$1,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$1 = AxiosError.prototype;
  const descriptors = {};
  ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
  // eslint-disable-next-line func-names
  ].forEach(code => {
    descriptors[code] = {
      value: code
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, 'isAxiosError', {
    value: true
  });

  // eslint-disable-next-line func-names
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$1);
    utils.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, prop => {
      return prop !== 'isAxiosError';
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };

  /**
   * Determines if the given thing is a array or js object.
   *
   * @param {string} thing - The object or array to be visited.
   *
   * @returns {boolean}
   */
  function isVisitable(thing) {
    return utils.isPlainObject(thing) || utils.isArray(thing);
  }

  /**
   * It removes the brackets from the end of a string
   *
   * @param {string} key - The key of the parameter.
   *
   * @returns {string} the key without the brackets.
   */
  function removeBrackets(key) {
    return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
  }

  /**
   * It takes a path, a key, and a boolean, and returns a string
   *
   * @param {string} path - The path to the current key.
   * @param {string} key - The key of the current object being iterated over.
   * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
   *
   * @returns {string} The path to the current key.
   */
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
  }

  /**
   * If the array is an array and none of its elements are visitable, then it's a flat array.
   *
   * @param {Array<any>} arr - The array to check
   *
   * @returns {boolean}
   */
  function isFlatArray(arr) {
    return utils.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });

  /**
   * Convert a data object to FormData
   *
   * @param {Object} obj
   * @param {?Object} [formData]
   * @param {?Object} [options]
   * @param {Function} [options.visitor]
   * @param {Boolean} [options.metaTokens = true]
   * @param {Boolean} [options.dots = false]
   * @param {?Boolean} [options.indexes = false]
   *
   * @returns {Object}
   **/

  /**
   * It converts an object into a FormData object
   *
   * @param {Object<any, any>} obj - The object to convert to form data.
   * @param {string} formData - The FormData object to append to.
   * @param {Object<string, any>} options
   *
   * @returns
   */
  function toFormData(obj, formData, options) {
    if (!utils.isObject(obj)) {
      throw new TypeError('target must be an object');
    }

    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData__default["default"] || FormData)();

    // eslint-disable-next-line no-param-reassign
    options = utils.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && utils.isSpecCompliantForm(formData);
    if (!utils.isFunction(visitor)) {
      throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
      if (value === null) return '';
      if (utils.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils.isBlob(value)) {
        throw new AxiosError('Blob is not supported. Use a Buffer instead.');
      }
      if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
        return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }

    /**
     * Default visitor.
     *
     * @param {*} value
     * @param {String|Number} key
     * @param {Array<String|Number>} path
     * @this {FormData}
     *
     * @returns {boolean} return true to visit the each prop of the value recursively
     */
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === 'object') {
        if (utils.endsWith(key, '{}')) {
          // eslint-disable-next-line no-param-reassign
          key = metaTokens ? key : key.slice(0, -2);
          // eslint-disable-next-line no-param-reassign
          value = JSON.stringify(value);
        } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))) {
          // eslint-disable-next-line no-param-reassign
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error('Circular reference detected in ' + path.join('.'));
      }
      stack.push(value);
      utils.forEach(value, function each(el, key) {
        const result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils.isObject(obj)) {
      throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
  }

  /**
   * It encodes a string by replacing all characters that are not in the unreserved set with
   * their percent-encoded equivalents
   *
   * @param {string} str - The string to encode.
   *
   * @returns {string} The encoded string.
   */
  function encode$4(str) {
    const charMap = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }

  /**
   * It takes a params object and converts it to a FormData object
   *
   * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
   * @param {Object<string, any>} options - The options object passed to the Axios constructor.
   *
   * @returns {void}
   */
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  const prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString(encoder) {
    const _encode = encoder ? function (value) {
      return encoder.call(this, value, encode$4);
    } : encode$4;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
  };

  /**
   * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
   * URI encoded counterparts
   *
   * @param {string} val The value to be encoded.
   *
   * @returns {string} The encoded value.
   */
  function encode$3(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @param {?object} options
   *
   * @returns {string} The formatted url
   */
  function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode$3;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  }

  class InterceptorManager {
    constructor() {
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
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }

    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }

  var transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var url$2 = {};

  var punycode$1 = {exports: {}};

  /*! https://mths.be/punycode v1.3.2 by @mathias */

  (function (module, exports) {
  	(function (root) {
  	  /** Detect free variables */
  	  var freeExports = exports && !exports.nodeType && exports;
  	  var freeModule = module && !module.nodeType && module;
  	  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
  	  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
  	    root = freeGlobal;
  	  }

  	  /**
  	   * The `punycode` object.
  	   * @name punycode
  	   * @type Object
  	   */
  	  var punycode,
  	    /** Highest positive signed 32-bit float value */
  	    maxInt = 2147483647,
  	    // aka. 0x7FFFFFFF or 2^31-1

  	    /** Bootstring parameters */
  	    base = 36,
  	    tMin = 1,
  	    tMax = 26,
  	    skew = 38,
  	    damp = 700,
  	    initialBias = 72,
  	    initialN = 128,
  	    // 0x80
  	    delimiter = '-',
  	    // '\x2D'

  	    /** Regular expressions */
  	    regexPunycode = /^xn--/,
  	    regexNonASCII = /[^\x20-\x7E]/,
  	    // unprintable ASCII chars + non-ASCII chars
  	    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
  	    // RFC 3490 separators

  	    /** Error messages */
  	    errors = {
  	      'overflow': 'Overflow: input needs wider integers to process',
  	      'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  	      'invalid-input': 'Invalid input'
  	    },
  	    /** Convenience shortcuts */
  	    baseMinusTMin = base - tMin,
  	    floor = Math.floor,
  	    stringFromCharCode = String.fromCharCode,
  	    /** Temporary variable */
  	    key;

  	  /*--------------------------------------------------------------------------*/

  	  /**
  	   * A generic error utility function.
  	   * @private
  	   * @param {String} type The error type.
  	   * @returns {Error} Throws a `RangeError` with the applicable error message.
  	   */
  	  function error(type) {
  	    throw RangeError(errors[type]);
  	  }

  	  /**
  	   * A generic `Array#map` utility function.
  	   * @private
  	   * @param {Array} array The array to iterate over.
  	   * @param {Function} callback The function that gets called for every array
  	   * item.
  	   * @returns {Array} A new array of values returned by the callback function.
  	   */
  	  function map(array, fn) {
  	    var length = array.length;
  	    var result = [];
  	    while (length--) {
  	      result[length] = fn(array[length]);
  	    }
  	    return result;
  	  }

  	  /**
  	   * A simple `Array#map`-like wrapper to work with domain name strings or email
  	   * addresses.
  	   * @private
  	   * @param {String} domain The domain name or email address.
  	   * @param {Function} callback The function that gets called for every
  	   * character.
  	   * @returns {Array} A new string of characters returned by the callback
  	   * function.
  	   */
  	  function mapDomain(string, fn) {
  	    var parts = string.split('@');
  	    var result = '';
  	    if (parts.length > 1) {
  	      // In email addresses, only the domain name should be punycoded. Leave
  	      // the local part (i.e. everything up to `@`) intact.
  	      result = parts[0] + '@';
  	      string = parts[1];
  	    }
  	    // Avoid `split(regex)` for IE8 compatibility. See #17.
  	    string = string.replace(regexSeparators, '\x2E');
  	    var labels = string.split('.');
  	    var encoded = map(labels, fn).join('.');
  	    return result + encoded;
  	  }

  	  /**
  	   * Creates an array containing the numeric code points of each Unicode
  	   * character in the string. While JavaScript uses UCS-2 internally,
  	   * this function will convert a pair of surrogate halves (each of which
  	   * UCS-2 exposes as separate characters) into a single code point,
  	   * matching UTF-16.
  	   * @see `punycode.ucs2.encode`
  	   * @see <https://mathiasbynens.be/notes/javascript-encoding>
  	   * @memberOf punycode.ucs2
  	   * @name decode
  	   * @param {String} string The Unicode input string (UCS-2).
  	   * @returns {Array} The new array of code points.
  	   */
  	  function ucs2decode(string) {
  	    var output = [],
  	      counter = 0,
  	      length = string.length,
  	      value,
  	      extra;
  	    while (counter < length) {
  	      value = string.charCodeAt(counter++);
  	      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
  	        // high surrogate, and there is a next character
  	        extra = string.charCodeAt(counter++);
  	        if ((extra & 0xFC00) == 0xDC00) {
  	          // low surrogate
  	          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
  	        } else {
  	          // unmatched surrogate; only append this code unit, in case the next
  	          // code unit is the high surrogate of a surrogate pair
  	          output.push(value);
  	          counter--;
  	        }
  	      } else {
  	        output.push(value);
  	      }
  	    }
  	    return output;
  	  }

  	  /**
  	   * Creates a string based on an array of numeric code points.
  	   * @see `punycode.ucs2.decode`
  	   * @memberOf punycode.ucs2
  	   * @name encode
  	   * @param {Array} codePoints The array of numeric code points.
  	   * @returns {String} The new Unicode string (UCS-2).
  	   */
  	  function ucs2encode(array) {
  	    return map(array, function (value) {
  	      var output = '';
  	      if (value > 0xFFFF) {
  	        value -= 0x10000;
  	        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
  	        value = 0xDC00 | value & 0x3FF;
  	      }
  	      output += stringFromCharCode(value);
  	      return output;
  	    }).join('');
  	  }

  	  /**
  	   * Converts a basic code point into a digit/integer.
  	   * @see `digitToBasic()`
  	   * @private
  	   * @param {Number} codePoint The basic numeric code point value.
  	   * @returns {Number} The numeric value of a basic code point (for use in
  	   * representing integers) in the range `0` to `base - 1`, or `base` if
  	   * the code point does not represent a value.
  	   */
  	  function basicToDigit(codePoint) {
  	    if (codePoint - 48 < 10) {
  	      return codePoint - 22;
  	    }
  	    if (codePoint - 65 < 26) {
  	      return codePoint - 65;
  	    }
  	    if (codePoint - 97 < 26) {
  	      return codePoint - 97;
  	    }
  	    return base;
  	  }

  	  /**
  	   * Converts a digit/integer into a basic code point.
  	   * @see `basicToDigit()`
  	   * @private
  	   * @param {Number} digit The numeric value of a basic code point.
  	   * @returns {Number} The basic code point whose value (when used for
  	   * representing integers) is `digit`, which needs to be in the range
  	   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
  	   * used; else, the lowercase form is used. The behavior is undefined
  	   * if `flag` is non-zero and `digit` has no uppercase form.
  	   */
  	  function digitToBasic(digit, flag) {
  	    //  0..25 map to ASCII a..z or A..Z
  	    // 26..35 map to ASCII 0..9
  	    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  	  }

  	  /**
  	   * Bias adaptation function as per section 3.4 of RFC 3492.
  	   * http://tools.ietf.org/html/rfc3492#section-3.4
  	   * @private
  	   */
  	  function adapt(delta, numPoints, firstTime) {
  	    var k = 0;
  	    delta = firstTime ? floor(delta / damp) : delta >> 1;
  	    delta += floor(delta / numPoints);
  	    for /* no initialization */
  	    (; delta > baseMinusTMin * tMax >> 1; k += base) {
  	      delta = floor(delta / baseMinusTMin);
  	    }
  	    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  	  }

  	  /**
  	   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
  	   * symbols.
  	   * @memberOf punycode
  	   * @param {String} input The Punycode string of ASCII-only symbols.
  	   * @returns {String} The resulting string of Unicode symbols.
  	   */
  	  function decode(input) {
  	    // Don't use UCS-2
  	    var output = [],
  	      inputLength = input.length,
  	      out,
  	      i = 0,
  	      n = initialN,
  	      bias = initialBias,
  	      basic,
  	      j,
  	      index,
  	      oldi,
  	      w,
  	      k,
  	      digit,
  	      t,
  	      /** Cached calculation results */
  	      baseMinusT;

  	    // Handle the basic code points: let `basic` be the number of input code
  	    // points before the last delimiter, or `0` if there is none, then copy
  	    // the first basic code points to the output.

  	    basic = input.lastIndexOf(delimiter);
  	    if (basic < 0) {
  	      basic = 0;
  	    }
  	    for (j = 0; j < basic; ++j) {
  	      // if it's not a basic code point
  	      if (input.charCodeAt(j) >= 0x80) {
  	        error('not-basic');
  	      }
  	      output.push(input.charCodeAt(j));
  	    }

  	    // Main decoding loop: start just after the last delimiter if any basic code
  	    // points were copied; start at the beginning otherwise.

  	    for /* no final expression */
  	    (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
  	      // `index` is the index of the next character to be consumed.
  	      // Decode a generalized variable-length integer into `delta`,
  	      // which gets added to `i`. The overflow checking is easier
  	      // if we increase `i` as we go, then subtract off its starting
  	      // value at the end to obtain `delta`.
  	      for /* no condition */
  	      (oldi = i, w = 1, k = base;; k += base) {
  	        if (index >= inputLength) {
  	          error('invalid-input');
  	        }
  	        digit = basicToDigit(input.charCodeAt(index++));
  	        if (digit >= base || digit > floor((maxInt - i) / w)) {
  	          error('overflow');
  	        }
  	        i += digit * w;
  	        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
  	        if (digit < t) {
  	          break;
  	        }
  	        baseMinusT = base - t;
  	        if (w > floor(maxInt / baseMinusT)) {
  	          error('overflow');
  	        }
  	        w *= baseMinusT;
  	      }
  	      out = output.length + 1;
  	      bias = adapt(i - oldi, out, oldi == 0);

  	      // `i` was supposed to wrap around from `out` to `0`,
  	      // incrementing `n` each time, so we'll fix that now:
  	      if (floor(i / out) > maxInt - n) {
  	        error('overflow');
  	      }
  	      n += floor(i / out);
  	      i %= out;

  	      // Insert `n` at position `i` of the output
  	      output.splice(i++, 0, n);
  	    }
  	    return ucs2encode(output);
  	  }

  	  /**
  	   * Converts a string of Unicode symbols (e.g. a domain name label) to a
  	   * Punycode string of ASCII-only symbols.
  	   * @memberOf punycode
  	   * @param {String} input The string of Unicode symbols.
  	   * @returns {String} The resulting Punycode string of ASCII-only symbols.
  	   */
  	  function encode(input) {
  	    var n,
  	      delta,
  	      handledCPCount,
  	      basicLength,
  	      bias,
  	      j,
  	      m,
  	      q,
  	      k,
  	      t,
  	      currentValue,
  	      output = [],
  	      /** `inputLength` will hold the number of code points in `input`. */
  	      inputLength,
  	      /** Cached calculation results */
  	      handledCPCountPlusOne,
  	      baseMinusT,
  	      qMinusT;

  	    // Convert the input in UCS-2 to Unicode
  	    input = ucs2decode(input);

  	    // Cache the length
  	    inputLength = input.length;

  	    // Initialize the state
  	    n = initialN;
  	    delta = 0;
  	    bias = initialBias;

  	    // Handle the basic code points
  	    for (j = 0; j < inputLength; ++j) {
  	      currentValue = input[j];
  	      if (currentValue < 0x80) {
  	        output.push(stringFromCharCode(currentValue));
  	      }
  	    }
  	    handledCPCount = basicLength = output.length;

  	    // `handledCPCount` is the number of code points that have been handled;
  	    // `basicLength` is the number of basic code points.

  	    // Finish the basic string - if it is not empty - with a delimiter
  	    if (basicLength) {
  	      output.push(delimiter);
  	    }

  	    // Main encoding loop:
  	    while (handledCPCount < inputLength) {
  	      // All non-basic code points < n have been handled already. Find the next
  	      // larger one:
  	      for (m = maxInt, j = 0; j < inputLength; ++j) {
  	        currentValue = input[j];
  	        if (currentValue >= n && currentValue < m) {
  	          m = currentValue;
  	        }
  	      }

  	      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
  	      // but guard against overflow
  	      handledCPCountPlusOne = handledCPCount + 1;
  	      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
  	        error('overflow');
  	      }
  	      delta += (m - n) * handledCPCountPlusOne;
  	      n = m;
  	      for (j = 0; j < inputLength; ++j) {
  	        currentValue = input[j];
  	        if (currentValue < n && ++delta > maxInt) {
  	          error('overflow');
  	        }
  	        if (currentValue == n) {
  	          // Represent delta as a generalized variable-length integer
  	          for /* no condition */
  	          (q = delta, k = base;; k += base) {
  	            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
  	            if (q < t) {
  	              break;
  	            }
  	            qMinusT = q - t;
  	            baseMinusT = base - t;
  	            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
  	            q = floor(qMinusT / baseMinusT);
  	          }
  	          output.push(stringFromCharCode(digitToBasic(q, 0)));
  	          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
  	          delta = 0;
  	          ++handledCPCount;
  	        }
  	      }
  	      ++delta;
  	      ++n;
  	    }
  	    return output.join('');
  	  }

  	  /**
  	   * Converts a Punycode string representing a domain name or an email address
  	   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
  	   * it doesn't matter if you call it on a string that has already been
  	   * converted to Unicode.
  	   * @memberOf punycode
  	   * @param {String} input The Punycoded domain name or email address to
  	   * convert to Unicode.
  	   * @returns {String} The Unicode representation of the given Punycode
  	   * string.
  	   */
  	  function toUnicode(input) {
  	    return mapDomain(input, function (string) {
  	      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
  	    });
  	  }

  	  /**
  	   * Converts a Unicode string representing a domain name or an email address to
  	   * Punycode. Only the non-ASCII parts of the domain name will be converted,
  	   * i.e. it doesn't matter if you call it with a domain that's already in
  	   * ASCII.
  	   * @memberOf punycode
  	   * @param {String} input The domain name or email address to convert, as a
  	   * Unicode string.
  	   * @returns {String} The Punycode representation of the given domain name or
  	   * email address.
  	   */
  	  function toASCII(input) {
  	    return mapDomain(input, function (string) {
  	      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
  	    });
  	  }

  	  /*--------------------------------------------------------------------------*/

  	  /** Define the public API */
  	  punycode = {
  	    /**
  	     * A string representing the current Punycode.js version number.
  	     * @memberOf punycode
  	     * @type String
  	     */
  	    'version': '1.3.2',
  	    /**
  	     * An object of methods to convert from JavaScript's internal character
  	     * representation (UCS-2) to Unicode code points, and back.
  	     * @see <https://mathiasbynens.be/notes/javascript-encoding>
  	     * @memberOf punycode
  	     * @type Object
  	     */
  	    'ucs2': {
  	      'decode': ucs2decode,
  	      'encode': ucs2encode
  	    },
  	    'decode': decode,
  	    'encode': encode,
  	    'toASCII': toASCII,
  	    'toUnicode': toUnicode
  	  };

  	  /** Expose `punycode` */
  	  // Some AMD build optimizers, like r.js, check for specific condition patterns
  	  // like the following:
  	  if (freeExports && freeModule) {
  	    if (module.exports == freeExports) {
  	      // in Node.js or RingoJS v0.8.0+
  	      freeModule.exports = punycode;
  	    } else {
  	      // in Narwhal or RingoJS v0.7.0-
  	      for (key in punycode) {
  	        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
  	      }
  	    }
  	  } else {
  	    // in Rhino or a web browser
  	    root.punycode = punycode;
  	  }
  	})(commonjsGlobal);
  } (punycode$1, punycode$1.exports));

  var util$1 = {
    isString: function (arg) {
      return typeof arg === 'string';
    },
    isObject: function (arg) {
      return typeof arg === 'object' && arg !== null;
    },
    isNull: function (arg) {
      return arg === null;
    },
    isNullOrUndefined: function (arg) {
      return arg == null;
    }
  };

  var querystring$1 = {};

  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var decode$1 = function (qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  };

  var stringifyPrimitive = function (v) {
    switch (typeof v) {
      case 'string':
        return v;
      case 'boolean':
        return v ? 'true' : 'false';
      case 'number':
        return isFinite(v) ? v : '';
      default:
        return '';
    }
  };
  var encode$2 = function (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
    if (typeof obj === 'object') {
      return Object.keys(obj).map(function (k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function (v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };

  querystring$1.decode = querystring$1.parse = decode$1;
  querystring$1.encode = querystring$1.stringify = encode$2;

  var punycode = punycode$1.exports;
  var util = util$1;
  url$2.parse = urlParse;
  url$2.resolve = urlResolve;
  url$2.resolveObject = urlResolveObject;
  url$2.format = urlFormat;
  url$2.Url = Url$1;
  function Url$1() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = querystring$1;
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url$1) return url;
    var u = new Url$1();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url$1.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);
    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();
    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) hostEnd = rest.length;
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost();

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
      }
      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {
      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };

  // format a parsed object into a url string
  function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url$1)) return Url$1.prototype.format.call(obj);
    return obj.format();
  }
  Url$1.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }
    var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }
    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }
    var search = this.search || query && '?' + query || '';
    if (protocol && protocol.substr(-1) !== ':') protocol += ':';

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }
    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url$1.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url$1.prototype.resolveObject = function (relative) {
    if (util.isString(relative)) {
      var rel = new Url$1();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url$1();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') result[rkey] = relative[rkey];
      }

      //urlParse appends trailing / to urls like http://www.example.com
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()));
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    if (isRelAbs) {
      // it's absolute.
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
      // fall through to the dot-handling below.
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      //to support http.request
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      //to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }
    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }
    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url$1.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };

  var URLSearchParams = url$2.URLSearchParams;

  var platform = {
    isNode: true,
    classes: {
      URLSearchParams,
      FormData: FormData__default["default"],
      Blob: typeof Blob !== 'undefined' && Blob || null
    },
    protocols: ['http', 'https', 'file', 'data']
  };

  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function (value, key, path, helpers) {
        if (utils.isBuffer(value)) {
          this.append(key, value.toString('base64'));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  /**
   * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
   *
   * @param {string} name - The name of the property to get.
   *
   * @returns An array of strings.
   */
  function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }

  /**
   * Convert an array to an object.
   *
   * @param {Array<any>} arr - The array to convert to an object.
   *
   * @returns An object with the same keys and values as the array.
   */
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }

  /**
   * It takes a FormData object and returns a JavaScript object
   *
   * @param {string} formData The FormData object to convert to JSON.
   *
   * @returns {Object<string, any> | null} The converted object.
   */
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
      const obj = {};
      utils.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }

  const DEFAULT_CONTENT_TYPE = {
    'Content-Type': undefined
  };

  /**
   * It takes a string, tries to parse it, and if it fails, it returns the stringified version
   * of the input
   *
   * @param {any} rawValue - The value to be stringified.
   * @param {Function} parser - A function that parses a string into a JavaScript object.
   * @param {Function} encoder - A function that takes a value and returns a string.
   *
   * @returns {string} A stringified version of the rawValue.
   */
  function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults$1 = {
    transitional: transitionalDefaults,
    adapter: ['xhr', 'http'],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || '';
      const hasJSONContentType = contentType.indexOf('application/json') > -1;
      const isObjectPayload = utils.isObject(data);
      if (isObjectPayload && utils.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData = utils.isFormData(data);
      if (isFormData) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }
      let isFileList;
      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? {
            'files[]': data
          } : data, _FormData && new _FormData(), this.formSerializer);
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional = this.transitional || defaults$1.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === 'json';
      if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  };
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults$1.headers[method] = {};
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults$1.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });

  // RawAxiosHeaders whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  const ignoreDuplicateOf = utils.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

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
   * @param {String} rawHeaders Headers needing to be parsed
   *
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders = (rawHeaders => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
    return parsed;
  });

  const $internals = Symbol('internals');
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils.isString(value)) return;
    if (utils.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils.toCamelCase(' ' + header);
    ['get', 'set', 'has'].forEach(methodName => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function (arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error('header name must be a non-empty string');
        }
        const key = utils.findKey(self, lHeader);
        if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
          self[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils.findKey(this, header);
        return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils.findKey(self, _header);
          if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
            delete self[key];
            deleted = true;
          }
        }
      }
      if (utils.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self = this;
      const headers = {};
      utils.forEach(this, (value, header) => {
        const key = utils.findKey(headers, header);
        if (key) {
          self[key] = normalizeValue(value);
          delete self[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self[header];
        }
        self[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = Object.create(null);
      utils.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach(target => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype, _header);
          accessors[lHeader] = true;
        }
      }
      utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
  utils.freezeMethods(AxiosHeaders.prototype);
  utils.freezeMethods(AxiosHeaders);

  /**
   * Transform the data for a request or a response
   *
   * @param {Array|Function} fns A single function or Array of functions
   * @param {?Object} response The response object
   *
   * @returns {*} The resulting transformed data
   */
  function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders.from(context.headers);
    let data = context.data;
    utils.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
  }

  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
  }
  utils.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   *
   * @returns {object} The response.
   */
  function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  }

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   *
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   *
   * @returns {string} The combined URL
   */
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  }

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   *
   * @returns {string} The combined full path
   */
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  var parseUrl = url$2.parse;
  var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };
  var stringEndsWith = String.prototype.endsWith || function (s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
  };

  /**
   * @param {string|object} url - The URL, or the result from url.parse.
   * @return {string} The URL of the proxy that should handle the request to the
   *  given URL. If no proxy is set, this will be an empty string.
   */
  function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
      return ''; // Don't proxy URLs without a valid scheme or host.
    }

    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
      return ''; // Don't proxy URLs that match NO_PROXY.
    }

    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
      // Missing scheme in proxy, default to the requested URL's scheme.
      proxy = proto + '://' + proxy;
    }
    return proxy;
  }

  /**
   * Determines whether a given URL should be proxied.
   *
   * @param {string} hostname - The host name of the URL.
   * @param {number} port - The effective port of the URL.
   * @returns {boolean} Whether the given URL should be proxied.
   * @private
   */
  function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
      return true; // Always proxy if NO_PROXY is not set.
    }

    if (NO_PROXY === '*') {
      return false; // Never proxy if wildcard is set.
    }

    return NO_PROXY.split(/[,\s]/).every(function (proxy) {
      if (!proxy) {
        return true; // Skip zero-length hosts.
      }

      var parsedProxy = proxy.match(/^(.+):(\d+)$/);
      var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
      var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
      if (parsedProxyPort && parsedProxyPort !== port) {
        return true; // Skip if ports don't match.
      }

      if (!/^[.*]/.test(parsedProxyHostname)) {
        // No wildcards, so stop proxying if there is an exact match.
        return hostname !== parsedProxyHostname;
      }
      if (parsedProxyHostname.charAt(0) === '*') {
        // Remove leading wildcard.
        parsedProxyHostname = parsedProxyHostname.slice(1);
      }
      // Stop proxying if the hostname ends with the no_proxy host.
      return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
  }

  /**
   * Get the value for an environment variable.
   *
   * @param {string} key - The name of the environment variable.
   * @return {string} The value of the environment variable.
   * @private
   */
  function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
  }
  var getProxyForUrl_1 = getProxyForUrl;

  var followRedirects = {exports: {}};

  var src = {exports: {}};

  var browser = {exports: {}};

  /**
   * Helpers.
   */

  var ms;
  var hasRequiredMs;

  function requireMs () {
  	if (hasRequiredMs) return ms;
  	hasRequiredMs = 1;
  	var s = 1000;
  	var m = s * 60;
  	var h = m * 60;
  	var d = h * 24;
  	var w = d * 7;
  	var y = d * 365.25;

  	/**
  	 * Parse or format the given `val`.
  	 *
  	 * Options:
  	 *
  	 *  - `long` verbose formatting [false]
  	 *
  	 * @param {String|Number} val
  	 * @param {Object} [options]
  	 * @throws {Error} throw an error if val is not a non-empty string or a number
  	 * @return {String|Number}
  	 * @api public
  	 */

  	ms = function (val, options) {
  	  options = options || {};
  	  var type = typeof val;
  	  if (type === 'string' && val.length > 0) {
  	    return parse(val);
  	  } else if (type === 'number' && isFinite(val)) {
  	    return options.long ? fmtLong(val) : fmtShort(val);
  	  }
  	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  	};

  	/**
  	 * Parse the given `str` and return milliseconds.
  	 *
  	 * @param {String} str
  	 * @return {Number}
  	 * @api private
  	 */

  	function parse(str) {
  	  str = String(str);
  	  if (str.length > 100) {
  	    return;
  	  }
  	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
  	  if (!match) {
  	    return;
  	  }
  	  var n = parseFloat(match[1]);
  	  var type = (match[2] || 'ms').toLowerCase();
  	  switch (type) {
  	    case 'years':
  	    case 'year':
  	    case 'yrs':
  	    case 'yr':
  	    case 'y':
  	      return n * y;
  	    case 'weeks':
  	    case 'week':
  	    case 'w':
  	      return n * w;
  	    case 'days':
  	    case 'day':
  	    case 'd':
  	      return n * d;
  	    case 'hours':
  	    case 'hour':
  	    case 'hrs':
  	    case 'hr':
  	    case 'h':
  	      return n * h;
  	    case 'minutes':
  	    case 'minute':
  	    case 'mins':
  	    case 'min':
  	    case 'm':
  	      return n * m;
  	    case 'seconds':
  	    case 'second':
  	    case 'secs':
  	    case 'sec':
  	    case 's':
  	      return n * s;
  	    case 'milliseconds':
  	    case 'millisecond':
  	    case 'msecs':
  	    case 'msec':
  	    case 'ms':
  	      return n;
  	    default:
  	      return undefined;
  	  }
  	}

  	/**
  	 * Short format for `ms`.
  	 *
  	 * @param {Number} ms
  	 * @return {String}
  	 * @api private
  	 */

  	function fmtShort(ms) {
  	  var msAbs = Math.abs(ms);
  	  if (msAbs >= d) {
  	    return Math.round(ms / d) + 'd';
  	  }
  	  if (msAbs >= h) {
  	    return Math.round(ms / h) + 'h';
  	  }
  	  if (msAbs >= m) {
  	    return Math.round(ms / m) + 'm';
  	  }
  	  if (msAbs >= s) {
  	    return Math.round(ms / s) + 's';
  	  }
  	  return ms + 'ms';
  	}

  	/**
  	 * Long format for `ms`.
  	 *
  	 * @param {Number} ms
  	 * @return {String}
  	 * @api private
  	 */

  	function fmtLong(ms) {
  	  var msAbs = Math.abs(ms);
  	  if (msAbs >= d) {
  	    return plural(ms, msAbs, d, 'day');
  	  }
  	  if (msAbs >= h) {
  	    return plural(ms, msAbs, h, 'hour');
  	  }
  	  if (msAbs >= m) {
  	    return plural(ms, msAbs, m, 'minute');
  	  }
  	  if (msAbs >= s) {
  	    return plural(ms, msAbs, s, 'second');
  	  }
  	  return ms + ' ms';
  	}

  	/**
  	 * Pluralization helper.
  	 */

  	function plural(ms, msAbs, n, name) {
  	  var isPlural = msAbs >= n * 1.5;
  	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
  	}
  	return ms;
  }

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   */

  var common;
  var hasRequiredCommon;

  function requireCommon () {
  	if (hasRequiredCommon) return common;
  	hasRequiredCommon = 1;
  	function setup(env) {
  	  createDebug.debug = createDebug;
  	  createDebug.default = createDebug;
  	  createDebug.coerce = coerce;
  	  createDebug.disable = disable;
  	  createDebug.enable = enable;
  	  createDebug.enabled = enabled;
  	  createDebug.humanize = requireMs();
  	  createDebug.destroy = destroy;
  	  Object.keys(env).forEach(key => {
  	    createDebug[key] = env[key];
  	  });

  	  /**
  	  * The currently active debug mode names, and names to skip.
  	  */

  	  createDebug.names = [];
  	  createDebug.skips = [];

  	  /**
  	  * Map of special "%n" handling functions, for the debug "format" argument.
  	  *
  	  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  	  */
  	  createDebug.formatters = {};

  	  /**
  	  * Selects a color for a debug namespace
  	  * @param {String} namespace The namespace string for the debug instance to be colored
  	  * @return {Number|String} An ANSI color code for the given namespace
  	  * @api private
  	  */
  	  function selectColor(namespace) {
  	    let hash = 0;
  	    for (let i = 0; i < namespace.length; i++) {
  	      hash = (hash << 5) - hash + namespace.charCodeAt(i);
  	      hash |= 0; // Convert to 32bit integer
  	    }

  	    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  	  }
  	  createDebug.selectColor = selectColor;

  	  /**
  	  * Create a debugger with the given `namespace`.
  	  *
  	  * @param {String} namespace
  	  * @return {Function}
  	  * @api public
  	  */
  	  function createDebug(namespace) {
  	    let prevTime;
  	    let enableOverride = null;
  	    let namespacesCache;
  	    let enabledCache;
  	    function debug(...args) {
  	      // Disabled?
  	      if (!debug.enabled) {
  	        return;
  	      }
  	      const self = debug;

  	      // Set `diff` timestamp
  	      const curr = Number(new Date());
  	      const ms = curr - (prevTime || curr);
  	      self.diff = ms;
  	      self.prev = prevTime;
  	      self.curr = curr;
  	      prevTime = curr;
  	      args[0] = createDebug.coerce(args[0]);
  	      if (typeof args[0] !== 'string') {
  	        // Anything else let's inspect with %O
  	        args.unshift('%O');
  	      }

  	      // Apply any `formatters` transformations
  	      let index = 0;
  	      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
  	        // If we encounter an escaped % then don't increase the array index
  	        if (match === '%%') {
  	          return '%';
  	        }
  	        index++;
  	        const formatter = createDebug.formatters[format];
  	        if (typeof formatter === 'function') {
  	          const val = args[index];
  	          match = formatter.call(self, val);

  	          // Now we need to remove `args[index]` since it's inlined in the `format`
  	          args.splice(index, 1);
  	          index--;
  	        }
  	        return match;
  	      });

  	      // Apply env-specific formatting (colors, etc.)
  	      createDebug.formatArgs.call(self, args);
  	      const logFn = self.log || createDebug.log;
  	      logFn.apply(self, args);
  	    }
  	    debug.namespace = namespace;
  	    debug.useColors = createDebug.useColors();
  	    debug.color = createDebug.selectColor(namespace);
  	    debug.extend = extend;
  	    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

  	    Object.defineProperty(debug, 'enabled', {
  	      enumerable: true,
  	      configurable: false,
  	      get: () => {
  	        if (enableOverride !== null) {
  	          return enableOverride;
  	        }
  	        if (namespacesCache !== createDebug.namespaces) {
  	          namespacesCache = createDebug.namespaces;
  	          enabledCache = createDebug.enabled(namespace);
  	        }
  	        return enabledCache;
  	      },
  	      set: v => {
  	        enableOverride = v;
  	      }
  	    });

  	    // Env-specific initialization logic for debug instances
  	    if (typeof createDebug.init === 'function') {
  	      createDebug.init(debug);
  	    }
  	    return debug;
  	  }
  	  function extend(namespace, delimiter) {
  	    const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  	    newDebug.log = this.log;
  	    return newDebug;
  	  }

  	  /**
  	  * Enables a debug mode by namespaces. This can include modes
  	  * separated by a colon and wildcards.
  	  *
  	  * @param {String} namespaces
  	  * @api public
  	  */
  	  function enable(namespaces) {
  	    createDebug.save(namespaces);
  	    createDebug.namespaces = namespaces;
  	    createDebug.names = [];
  	    createDebug.skips = [];
  	    let i;
  	    const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  	    const len = split.length;
  	    for (i = 0; i < len; i++) {
  	      if (!split[i]) {
  	        // ignore empty strings
  	        continue;
  	      }
  	      namespaces = split[i].replace(/\*/g, '.*?');
  	      if (namespaces[0] === '-') {
  	        createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
  	      } else {
  	        createDebug.names.push(new RegExp('^' + namespaces + '$'));
  	      }
  	    }
  	  }

  	  /**
  	  * Disable debug output.
  	  *
  	  * @return {String} namespaces
  	  * @api public
  	  */
  	  function disable() {
  	    const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)].join(',');
  	    createDebug.enable('');
  	    return namespaces;
  	  }

  	  /**
  	  * Returns true if the given mode name is enabled, false otherwise.
  	  *
  	  * @param {String} name
  	  * @return {Boolean}
  	  * @api public
  	  */
  	  function enabled(name) {
  	    if (name[name.length - 1] === '*') {
  	      return true;
  	    }
  	    let i;
  	    let len;
  	    for (i = 0, len = createDebug.skips.length; i < len; i++) {
  	      if (createDebug.skips[i].test(name)) {
  	        return false;
  	      }
  	    }
  	    for (i = 0, len = createDebug.names.length; i < len; i++) {
  	      if (createDebug.names[i].test(name)) {
  	        return true;
  	      }
  	    }
  	    return false;
  	  }

  	  /**
  	  * Convert regexp to namespace
  	  *
  	  * @param {RegExp} regxep
  	  * @return {String} namespace
  	  * @api private
  	  */
  	  function toNamespace(regexp) {
  	    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  	  }

  	  /**
  	  * Coerce `val`.
  	  *
  	  * @param {Mixed} val
  	  * @return {Mixed}
  	  * @api private
  	  */
  	  function coerce(val) {
  	    if (val instanceof Error) {
  	      return val.stack || val.message;
  	    }
  	    return val;
  	  }

  	  /**
  	  * XXX DO NOT USE. This is a temporary stub function.
  	  * XXX It WILL be removed in the next major release.
  	  */
  	  function destroy() {
  	    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  	  }
  	  createDebug.enable(createDebug.load());
  	  return createDebug;
  	}
  	common = setup;
  	return common;
  }

  /* eslint-env browser */

  var hasRequiredBrowser;

  function requireBrowser () {
  	if (hasRequiredBrowser) return browser.exports;
  	hasRequiredBrowser = 1;
  	(function (module, exports) {
  		/**
  		 * This is the web browser implementation of `debug()`.
  		 */

  		exports.formatArgs = formatArgs;
  		exports.save = save;
  		exports.load = load;
  		exports.useColors = useColors;
  		exports.storage = localstorage();
  		exports.destroy = (() => {
  		  let warned = false;
  		  return () => {
  		    if (!warned) {
  		      warned = true;
  		      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  		    }
  		  };
  		})();

  		/**
  		 * Colors.
  		 */

  		exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

  		/**
  		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
  		 * and the Firebug extension (any Firefox version) are known
  		 * to support "%c" CSS customizations.
  		 *
  		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
  		 */

  		// eslint-disable-next-line complexity
  		function useColors() {
  		  // NB: In an Electron preload script, document will be defined but not fully
  		  // initialized. Since we know we're in Chrome, we'll just detect this case
  		  // explicitly
  		  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
  		    return true;
  		  }

  		  // Internet Explorer and Edge do not support colors.
  		  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
  		    return false;
  		  }

  		  // Is webkit? http://stackoverflow.com/a/16459606/376773
  		  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  		  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  		  // Is firebug? http://stackoverflow.com/a/398120/376773
  		  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  		  // Is firefox >= v31?
  		  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  		  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  		  // Double check webkit in userAgent just in case we are in a worker
  		  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  		}

  		/**
  		 * Colorize log arguments if enabled.
  		 *
  		 * @api public
  		 */

  		function formatArgs(args) {
  		  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
  		  if (!this.useColors) {
  		    return;
  		  }
  		  const c = 'color: ' + this.color;
  		  args.splice(1, 0, c, 'color: inherit');

  		  // The final "%c" is somewhat tricky, because there could be other
  		  // arguments passed either before or after the %c, so we need to
  		  // figure out the correct index to insert the CSS into
  		  let index = 0;
  		  let lastC = 0;
  		  args[0].replace(/%[a-zA-Z%]/g, match => {
  		    if (match === '%%') {
  		      return;
  		    }
  		    index++;
  		    if (match === '%c') {
  		      // We only are interested in the *last* %c
  		      // (the user may have provided their own)
  		      lastC = index;
  		    }
  		  });
  		  args.splice(lastC, 0, c);
  		}

  		/**
  		 * Invokes `console.debug()` when available.
  		 * No-op when `console.debug` is not a "function".
  		 * If `console.debug` is not available, falls back
  		 * to `console.log`.
  		 *
  		 * @api public
  		 */
  		exports.log = console.debug || console.log || (() => {});

  		/**
  		 * Save `namespaces`.
  		 *
  		 * @param {String} namespaces
  		 * @api private
  		 */
  		function save(namespaces) {
  		  try {
  		    if (namespaces) {
  		      exports.storage.setItem('debug', namespaces);
  		    } else {
  		      exports.storage.removeItem('debug');
  		    }
  		  } catch (error) {
  		    // Swallow
  		    // XXX (@Qix-) should we be logging these?
  		  }
  		}

  		/**
  		 * Load `namespaces`.
  		 *
  		 * @return {String} returns the previously persisted debug modes
  		 * @api private
  		 */
  		function load() {
  		  let r;
  		  try {
  		    r = exports.storage.getItem('debug');
  		  } catch (error) {
  		    // Swallow
  		    // XXX (@Qix-) should we be logging these?
  		  }

  		  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  		  if (!r && typeof process !== 'undefined' && 'env' in process) {
  		    r = process.env.DEBUG;
  		  }
  		  return r;
  		}

  		/**
  		 * Localstorage attempts to return the localstorage.
  		 *
  		 * This is necessary because safari throws
  		 * when a user disables cookies/localstorage
  		 * and you attempt to access it.
  		 *
  		 * @return {LocalStorage}
  		 * @api private
  		 */

  		function localstorage() {
  		  try {
  		    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
  		    // The Browser also has localStorage in the global context.
  		    return localStorage;
  		  } catch (error) {
  		    // Swallow
  		    // XXX (@Qix-) should we be logging these?
  		  }
  		}
  		module.exports = requireCommon()(exports);
  		const {
  		  formatters
  		} = module.exports;

  		/**
  		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
  		 */

  		formatters.j = function (v) {
  		  try {
  		    return JSON.stringify(v);
  		  } catch (error) {
  		    return '[UnexpectedJSONParseError]: ' + error.message;
  		  }
  		};
  } (browser, browser.exports));
  	return browser.exports;
  }

  var node = {exports: {}};

  var hasFlag;
  var hasRequiredHasFlag;

  function requireHasFlag () {
  	if (hasRequiredHasFlag) return hasFlag;
  	hasRequiredHasFlag = 1;

  	hasFlag = (flag, argv) => {
  	  argv = argv || process.argv;
  	  const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
  	  const pos = argv.indexOf(prefix + flag);
  	  const terminatorPos = argv.indexOf('--');
  	  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  	};
  	return hasFlag;
  }

  var supportsColor_1;
  var hasRequiredSupportsColor;

  function requireSupportsColor () {
  	if (hasRequiredSupportsColor) return supportsColor_1;
  	hasRequiredSupportsColor = 1;

  	const os = require$$0__default["default"];
  	const hasFlag = requireHasFlag();
  	const env = process.env;
  	let forceColor;
  	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  	  forceColor = false;
  	} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
  	  forceColor = true;
  	}
  	if ('FORCE_COLOR' in env) {
  	  forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  	}
  	function translateLevel(level) {
  	  if (level === 0) {
  	    return false;
  	  }
  	  return {
  	    level,
  	    hasBasic: true,
  	    has256: level >= 2,
  	    has16m: level >= 3
  	  };
  	}
  	function supportsColor(stream) {
  	  if (forceColor === false) {
  	    return 0;
  	  }
  	  if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
  	    return 3;
  	  }
  	  if (hasFlag('color=256')) {
  	    return 2;
  	  }
  	  if (stream && !stream.isTTY && forceColor !== true) {
  	    return 0;
  	  }
  	  const min = forceColor ? 1 : 0;
  	  if (process.platform === 'win32') {
  	    // Node.js 7.5.0 is the first version of Node.js to include a patch to
  	    // libuv that enables 256 color output on Windows. Anything earlier and it
  	    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
  	    // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
  	    // release that supports 256 colors. Windows 10 build 14931 is the first release
  	    // that supports 16m/TrueColor.
  	    const osRelease = os.release().split('.');
  	    if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
  	      return Number(osRelease[2]) >= 14931 ? 3 : 2;
  	    }
  	    return 1;
  	  }
  	  if ('CI' in env) {
  	    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
  	      return 1;
  	    }
  	    return min;
  	  }
  	  if ('TEAMCITY_VERSION' in env) {
  	    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  	  }
  	  if (env.COLORTERM === 'truecolor') {
  	    return 3;
  	  }
  	  if ('TERM_PROGRAM' in env) {
  	    const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
  	    switch (env.TERM_PROGRAM) {
  	      case 'iTerm.app':
  	        return version >= 3 ? 3 : 2;
  	      case 'Apple_Terminal':
  	        return 2;
  	      // No default
  	    }
  	  }

  	  if (/-256(color)?$/i.test(env.TERM)) {
  	    return 2;
  	  }
  	  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
  	    return 1;
  	  }
  	  if ('COLORTERM' in env) {
  	    return 1;
  	  }
  	  if (env.TERM === 'dumb') {
  	    return min;
  	  }
  	  return min;
  	}
  	function getSupportLevel(stream) {
  	  const level = supportsColor(stream);
  	  return translateLevel(level);
  	}
  	supportsColor_1 = {
  	  supportsColor: getSupportLevel,
  	  stdout: getSupportLevel(process.stdout),
  	  stderr: getSupportLevel(process.stderr)
  	};
  	return supportsColor_1;
  }

  /**
   * Module dependencies.
   */

  var hasRequiredNode;

  function requireNode () {
  	if (hasRequiredNode) return node.exports;
  	hasRequiredNode = 1;
  	(function (module, exports) {
  		const tty = require$$0__default$1["default"];
  		const util = require$$1__default["default"];

  		/**
  		 * This is the Node.js implementation of `debug()`.
  		 */

  		exports.init = init;
  		exports.log = log;
  		exports.formatArgs = formatArgs;
  		exports.save = save;
  		exports.load = load;
  		exports.useColors = useColors;
  		exports.destroy = util.deprecate(() => {}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');

  		/**
  		 * Colors.
  		 */

  		exports.colors = [6, 2, 3, 4, 5, 1];
  		try {
  		  // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
  		  // eslint-disable-next-line import/no-extraneous-dependencies
  		  const supportsColor = requireSupportsColor();
  		  if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
  		    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  		  }
  		} catch (error) {
  		  // Swallow - we only care if `supports-color` is available; it doesn't have to be.
  		}

  		/**
  		 * Build up the default `inspectOpts` object from the environment variables.
  		 *
  		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
  		 */

  		exports.inspectOpts = Object.keys(process.env).filter(key => {
  		  return /^debug_/i.test(key);
  		}).reduce((obj, key) => {
  		  // Camel-case
  		  const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
  		    return k.toUpperCase();
  		  });

  		  // Coerce string value into JS value
  		  let val = process.env[key];
  		  if (/^(yes|on|true|enabled)$/i.test(val)) {
  		    val = true;
  		  } else if (/^(no|off|false|disabled)$/i.test(val)) {
  		    val = false;
  		  } else if (val === 'null') {
  		    val = null;
  		  } else {
  		    val = Number(val);
  		  }
  		  obj[prop] = val;
  		  return obj;
  		}, {});

  		/**
  		 * Is stdout a TTY? Colored output is enabled when `true`.
  		 */

  		function useColors() {
  		  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
  		}

  		/**
  		 * Adds ANSI color escape codes if enabled.
  		 *
  		 * @api public
  		 */

  		function formatArgs(args) {
  		  const {
  		    namespace: name,
  		    useColors
  		  } = this;
  		  if (useColors) {
  		    const c = this.color;
  		    const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
  		    const prefix = `  ${colorCode};1m${name} \u001B[0m`;
  		    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
  		    args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
  		  } else {
  		    args[0] = getDate() + name + ' ' + args[0];
  		  }
  		}
  		function getDate() {
  		  if (exports.inspectOpts.hideDate) {
  		    return '';
  		  }
  		  return new Date().toISOString() + ' ';
  		}

  		/**
  		 * Invokes `util.format()` with the specified arguments and writes to stderr.
  		 */

  		function log(...args) {
  		  return process.stderr.write(util.format(...args) + '\n');
  		}

  		/**
  		 * Save `namespaces`.
  		 *
  		 * @param {String} namespaces
  		 * @api private
  		 */
  		function save(namespaces) {
  		  if (namespaces) {
  		    process.env.DEBUG = namespaces;
  		  } else {
  		    // If you set a process.env field to null or undefined, it gets cast to the
  		    // string 'null' or 'undefined'. Just delete instead.
  		    delete process.env.DEBUG;
  		  }
  		}

  		/**
  		 * Load `namespaces`.
  		 *
  		 * @return {String} returns the previously persisted debug modes
  		 * @api private
  		 */

  		function load() {
  		  return process.env.DEBUG;
  		}

  		/**
  		 * Init logic for `debug` instances.
  		 *
  		 * Create a new `inspectOpts` object in case `useColors` is set
  		 * differently for a particular `debug` instance.
  		 */

  		function init(debug) {
  		  debug.inspectOpts = {};
  		  const keys = Object.keys(exports.inspectOpts);
  		  for (let i = 0; i < keys.length; i++) {
  		    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  		  }
  		}
  		module.exports = requireCommon()(exports);
  		const {
  		  formatters
  		} = module.exports;

  		/**
  		 * Map %o to `util.inspect()`, all on a single line.
  		 */

  		formatters.o = function (v) {
  		  this.inspectOpts.colors = this.useColors;
  		  return util.inspect(v, this.inspectOpts).split('\n').map(str => str.trim()).join(' ');
  		};

  		/**
  		 * Map %O to `util.inspect()`, allowing multiple lines if needed.
  		 */

  		formatters.O = function (v) {
  		  this.inspectOpts.colors = this.useColors;
  		  return util.inspect(v, this.inspectOpts);
  		};
  } (node, node.exports));
  	return node.exports;
  }

  /**
   * Detect Electron renderer / nwjs process, which is node, but we should
   * treat as a browser.
   */

  var hasRequiredSrc;

  function requireSrc () {
  	if (hasRequiredSrc) return src.exports;
  	hasRequiredSrc = 1;
  	(function (module) {
  		if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
  		  module.exports = requireBrowser();
  		} else {
  		  module.exports = requireNode();
  		}
  } (src));
  	return src.exports;
  }

  var debug$1;
  var debug_1 = function () {
    if (!debug$1) {
      try {
        /* eslint global-require: off */
        debug$1 = requireSrc()("follow-redirects");
      } catch (error) {/* */}
      if (typeof debug$1 !== "function") {
        debug$1 = function () {/* */};
      }
    }
    debug$1.apply(null, arguments);
  };

  var url$1 = url$2;
  var URL$2 = url$1.URL;
  var http$1 = require$$1__default$1["default"];
  var https$1 = require$$2__default["default"];
  var Writable$1 = stream__default["default"].Writable;
  var assert = require$$4__default["default"];
  var debug = debug_1;

  // Create handlers that pass events from native requests
  var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
  var eventHandlers = Object.create(null);
  events.forEach(function (event) {
    eventHandlers[event] = function (arg1, arg2, arg3) {
      this._redirectable.emit(event, arg1, arg2, arg3);
    };
  });
  var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
  // Error types with codes
  var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
  var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
  var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
  var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");

  // An HTTP(S) request that can be redirected
  function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable$1.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];

    // Attach a callback if passed
    if (responseCallback) {
      this.on("response", responseCallback);
    }

    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function (response) {
      self._processResponse(response);
    };

    // Perform the first request
    this._performRequest();
  }
  RedirectableRequest.prototype = Object.create(Writable$1.prototype);
  RedirectableRequest.prototype.abort = function () {
    abortRequest(this._currentRequest);
    this.emit("abort");
  };

  // Writes buffered data to the current native request
  RedirectableRequest.prototype.write = function (data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
      throw new WriteAfterEndError();
    }

    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
      throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
      callback = encoding;
      encoding = null;
    }

    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
      this._requestBodyLength += data.length;
      this._requestBodyBuffers.push({
        data: data,
        encoding: encoding
      });
      this._currentRequest.write(data, encoding, callback);
    }
    // Error when we exceed the maximum body length
    else {
      this.emit("error", new MaxBodyLengthExceededError());
      this.abort();
    }
  };

  // Ends the current native request
  RedirectableRequest.prototype.end = function (data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
      callback = data;
      data = encoding = null;
    } else if (isFunction(encoding)) {
      callback = encoding;
      encoding = null;
    }

    // Write data if needed and end
    if (!data) {
      this._ended = this._ending = true;
      this._currentRequest.end(null, null, callback);
    } else {
      var self = this;
      var currentRequest = this._currentRequest;
      this.write(data, encoding, function () {
        self._ended = true;
        currentRequest.end(null, null, callback);
      });
      this._ending = true;
    }
  };

  // Sets a header value on the current native request
  RedirectableRequest.prototype.setHeader = function (name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
  };

  // Clears a header value on the current native request
  RedirectableRequest.prototype.removeHeader = function (name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
  };

  // Global timeout for all underlying requests
  RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
    var self = this;

    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
      socket.setTimeout(msecs);
      socket.removeListener("timeout", socket.destroy);
      socket.addListener("timeout", socket.destroy);
    }

    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
      if (self._timeout) {
        clearTimeout(self._timeout);
      }
      self._timeout = setTimeout(function () {
        self.emit("timeout");
        clearTimer();
      }, msecs);
      destroyOnTimeout(socket);
    }

    // Stops a timeout from triggering
    function clearTimer() {
      // Clear the timeout
      if (self._timeout) {
        clearTimeout(self._timeout);
        self._timeout = null;
      }

      // Clean up all attached listeners
      self.removeListener("abort", clearTimer);
      self.removeListener("error", clearTimer);
      self.removeListener("response", clearTimer);
      if (callback) {
        self.removeListener("timeout", callback);
      }
      if (!self.socket) {
        self._currentRequest.removeListener("socket", startTimer);
      }
    }

    // Attach callback if passed
    if (callback) {
      this.on("timeout", callback);
    }

    // Start the timer if or when the socket is opened
    if (this.socket) {
      startTimer(this.socket);
    } else {
      this._currentRequest.once("socket", startTimer);
    }

    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    return this;
  };

  // Proxy all other public ClientRequest methods
  ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (method) {
    RedirectableRequest.prototype[method] = function (a, b) {
      return this._currentRequest[method](a, b);
    };
  });

  // Proxy all public ClientRequest properties
  ["aborted", "connection", "socket"].forEach(function (property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
      get: function () {
        return this._currentRequest[property];
      }
    });
  });
  RedirectableRequest.prototype._sanitizeOptions = function (options) {
    // Ensure headers are always present
    if (!options.headers) {
      options.headers = {};
    }

    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
      // Use hostname if set, because it has precedence
      if (!options.hostname) {
        options.hostname = options.host;
      }
      delete options.host;
    }

    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
      var searchPos = options.path.indexOf("?");
      if (searchPos < 0) {
        options.pathname = options.path;
      } else {
        options.pathname = options.path.substring(0, searchPos);
        options.search = options.path.substring(searchPos);
      }
    }
  };

  // Executes the next native request (initial or redirect)
  RedirectableRequest.prototype._performRequest = function () {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
      this.emit("error", new TypeError("Unsupported protocol " + protocol));
      return;
    }

    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
      var scheme = protocol.slice(0, -1);
      this._options.agent = this._options.agents[scheme];
    }

    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events) {
      request.on(event, eventHandlers[event]);
    }

    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url$1.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
      // Write the request entity and end
      var i = 0;
      var self = this;
      var buffers = this._requestBodyBuffers;
      (function writeNext(error) {
        // Only write if this request has not been redirected yet
        /* istanbul ignore else */
        if (request === self._currentRequest) {
          // Report any write errors
          /* istanbul ignore if */
          if (error) {
            self.emit("error", error);
          }
          // Write the next buffer if there are still left
          else if (i < buffers.length) {
            var buffer = buffers[i++];
            /* istanbul ignore else */
            if (!request.finished) {
              request.write(buffer.data, buffer.encoding, writeNext);
            }
          }
          // End the request if `end` has been called on us
          else if (self._ended) {
            request.end();
          }
        }
      })();
    }
  };

  // Processes a response from the current native request
  RedirectableRequest.prototype._processResponse = function (response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
      this._redirects.push({
        url: this._currentUrl,
        headers: response.headers,
        statusCode: statusCode
      });
    }

    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.

    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
      response.responseUrl = this._currentUrl;
      response.redirects = this._redirects;
      this.emit("response", response);

      // Clean up
      this._requestBodyBuffers = [];
      return;
    }

    // The response is a redirect, so abort the current request
    abortRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
      requestHeaders = Object.assign({
        // The Host header was set by nativeProtocol.request
        Host: response.req.getHeader("host")
      }, this._options.headers);
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
    // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = url$1.parse(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url$1.format(Object.assign(currentUrlParts, {
      host: currentHost
    }));

    // Determine the URL of the redirection
    var redirectUrl;
    try {
      redirectUrl = url$1.resolve(currentUrl, location);
    } catch (cause) {
      this.emit("error", new RedirectionError({
        cause: cause
      }));
      return;
    }

    // Create the redirected request
    debug("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url$1.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
      removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
      var responseDetails = {
        headers: response.headers,
        statusCode: statusCode
      };
      var requestDetails = {
        url: currentUrl,
        method: method,
        headers: requestHeaders
      };
      try {
        beforeRedirect(this._options, responseDetails, requestDetails);
      } catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    } catch (cause) {
      this.emit("error", new RedirectionError({
        cause: cause
      }));
    }
  };

  // Wraps the key/value object of protocols with redirect functionality
  function wrap(protocols) {
    // Default settings
    var exports = {
      maxRedirects: 21,
      maxBodyLength: 10 * 1024 * 1024
    };

    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function (scheme) {
      var protocol = scheme + ":";
      var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
      var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

      // Executes a request, following redirects
      function request(input, options, callback) {
        // Parse parameters
        if (isString(input)) {
          var parsed;
          try {
            parsed = urlToOptions(new URL$2(input));
          } catch (err) {
            /* istanbul ignore next */
            parsed = url$1.parse(input);
          }
          if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
              input
            });
          }
          input = parsed;
        } else if (URL$2 && input instanceof URL$2) {
          input = urlToOptions(input);
        } else {
          callback = options;
          options = input;
          input = {
            protocol: protocol
          };
        }
        if (isFunction(options)) {
          callback = options;
          options = null;
        }

        // Set defaults
        options = Object.assign({
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength
        }, input, options);
        options.nativeProtocols = nativeProtocols;
        if (!isString(options.host) && !isString(options.hostname)) {
          options.hostname = "::1";
        }
        assert.equal(options.protocol, protocol, "protocol mismatch");
        debug("options", options);
        return new RedirectableRequest(options, callback);
      }

      // Executes a GET request, following redirects
      function get(input, options, callback) {
        var wrappedRequest = wrappedProtocol.request(input, options, callback);
        wrappedRequest.end();
        return wrappedRequest;
      }

      // Expose the properties on the wrapped protocol
      Object.defineProperties(wrappedProtocol, {
        request: {
          value: request,
          configurable: true,
          enumerable: true,
          writable: true
        },
        get: {
          value: get,
          configurable: true,
          enumerable: true,
          writable: true
        }
      });
    });
    return exports;
  }

  /* istanbul ignore next */
  function noop() {/* empty */}

  // from https://github.com/nodejs/node/blob/master/lib/internal/url.js
  function urlToOptions(urlObject) {
    var options = {
      protocol: urlObject.protocol,
      hostname: urlObject.hostname.startsWith("[") ? /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) : urlObject.hostname,
      hash: urlObject.hash,
      search: urlObject.search,
      pathname: urlObject.pathname,
      path: urlObject.pathname + urlObject.search,
      href: urlObject.href
    };
    if (urlObject.port !== "") {
      options.port = Number(urlObject.port);
    }
    return options;
  }
  function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for (var header in headers) {
      if (regex.test(header)) {
        lastValue = headers[header];
        delete headers[header];
      }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
  }
  function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
      Error.captureStackTrace(this, this.constructor);
      Object.assign(this, properties || {});
      this.code = code;
      this.message = this.cause ? message + ": " + this.cause.message : message;
    }

    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    CustomError.prototype.constructor = CustomError;
    CustomError.prototype.name = "Error [" + code + "]";
    return CustomError;
  }
  function abortRequest(request) {
    for (var event of events) {
      request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.abort();
  }
  function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
  }
  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isBuffer(value) {
    return typeof value === "object" && "length" in value;
  }

  // Exports
  followRedirects.exports = wrap({
    http: http$1,
    https: https$1
  });
  followRedirects.exports.wrap = wrap;

  const VERSION = "1.3.6";

  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

  /**
   * Parse data uri to a Buffer or Blob
   *
   * @param {String} uri
   * @param {?Boolean} asBlob
   * @param {?Object} options
   * @param {?Function} options.Blob
   *
   * @returns {Buffer|Blob}
   */
  function fromDataURI(uri, asBlob, options) {
    const _Blob = options && options.Blob || platform.classes.Blob;
    const protocol = parseProtocol(uri);
    if (asBlob === undefined && _Blob) {
      asBlob = true;
    }
    if (protocol === 'data') {
      uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
      const match = DATA_URL_PATTERN.exec(uri);
      if (!match) {
        throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
      }
      const mime = match[1];
      const isBase64 = match[2];
      const body = match[3];
      const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');
      if (asBlob) {
        if (!_Blob) {
          throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
        }
        return new _Blob([buffer], {
          type: mime
        });
      }
      return buffer;
    }
    throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
  }

  /**
   * Throttle decorator
   * @param {Function} fn
   * @param {Number} freq
   * @return {Function}
   */
  function throttle(fn, freq) {
    let timestamp = 0;
    const threshold = 1000 / freq;
    let timer = null;
    return function throttled(force, args) {
      const now = Date.now();
      if (force || now - timestamp > threshold) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timestamp = now;
        return fn.apply(null, args);
      }
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          timestamp = Date.now();
          return fn.apply(null, args);
        }, threshold - (now - timestamp));
      }
    };
  }

  /**
   * Calculate data maxRate
   * @param {Number} [samplesCount= 10]
   * @param {Number} [min= 1000]
   * @returns {Function}
   */
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
  }

  const kInternals = Symbol('internals');
  class AxiosTransformStream extends stream__default["default"].Transform {
    constructor(options) {
      options = utils.toFlatObject(options, {
        maxRate: 0,
        chunkSize: 64 * 1024,
        minChunkSize: 100,
        timeWindow: 500,
        ticksRate: 2,
        samplesCount: 15
      }, null, (prop, source) => {
        return !utils.isUndefined(source[prop]);
      });
      super({
        readableHighWaterMark: options.chunkSize
      });
      const self = this;
      const internals = this[kInternals] = {
        length: options.length,
        timeWindow: options.timeWindow,
        ticksRate: options.ticksRate,
        chunkSize: options.chunkSize,
        maxRate: options.maxRate,
        minChunkSize: options.minChunkSize,
        bytesSeen: 0,
        isCaptured: false,
        notifiedBytesLoaded: 0,
        ts: Date.now(),
        bytes: 0,
        onReadCallback: null
      };
      const _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);
      this.on('newListener', event => {
        if (event === 'progress') {
          if (!internals.isCaptured) {
            internals.isCaptured = true;
          }
        }
      });
      let bytesNotified = 0;
      internals.updateProgress = throttle(function throttledHandler() {
        const totalBytes = internals.length;
        const bytesTransferred = internals.bytesSeen;
        const progressBytes = bytesTransferred - bytesNotified;
        if (!progressBytes || self.destroyed) return;
        const rate = _speedometer(progressBytes);
        bytesNotified = bytesTransferred;
        process.nextTick(() => {
          self.emit('progress', {
            'loaded': bytesTransferred,
            'total': totalBytes,
            'progress': totalBytes ? bytesTransferred / totalBytes : undefined,
            'bytes': progressBytes,
            'rate': rate ? rate : undefined,
            'estimated': rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : undefined
          });
        });
      }, internals.ticksRate);
      const onFinish = () => {
        internals.updateProgress(true);
      };
      this.once('end', onFinish);
      this.once('error', onFinish);
    }
    _read(size) {
      const internals = this[kInternals];
      if (internals.onReadCallback) {
        internals.onReadCallback();
      }
      return super._read(size);
    }
    _transform(chunk, encoding, callback) {
      const self = this;
      const internals = this[kInternals];
      const maxRate = internals.maxRate;
      const readableHighWaterMark = this.readableHighWaterMark;
      const timeWindow = internals.timeWindow;
      const divider = 1000 / timeWindow;
      const bytesThreshold = maxRate / divider;
      const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
      function pushChunk(_chunk, _callback) {
        const bytes = Buffer.byteLength(_chunk);
        internals.bytesSeen += bytes;
        internals.bytes += bytes;
        if (internals.isCaptured) {
          internals.updateProgress();
        }
        if (self.push(_chunk)) {
          process.nextTick(_callback);
        } else {
          internals.onReadCallback = () => {
            internals.onReadCallback = null;
            process.nextTick(_callback);
          };
        }
      }
      const transformChunk = (_chunk, _callback) => {
        const chunkSize = Buffer.byteLength(_chunk);
        let chunkRemainder = null;
        let maxChunkSize = readableHighWaterMark;
        let bytesLeft;
        let passed = 0;
        if (maxRate) {
          const now = Date.now();
          if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
            internals.ts = now;
            bytesLeft = bytesThreshold - internals.bytes;
            internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
            passed = 0;
          }
          bytesLeft = bytesThreshold - internals.bytes;
        }
        if (maxRate) {
          if (bytesLeft <= 0) {
            // next time window
            return setTimeout(() => {
              _callback(null, _chunk);
            }, timeWindow - passed);
          }
          if (bytesLeft < maxChunkSize) {
            maxChunkSize = bytesLeft;
          }
        }
        if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
          chunkRemainder = _chunk.subarray(maxChunkSize);
          _chunk = _chunk.subarray(0, maxChunkSize);
        }
        pushChunk(_chunk, chunkRemainder ? () => {
          process.nextTick(_callback, null, chunkRemainder);
        } : _callback);
      };
      transformChunk(chunk, function transformNextChunk(err, _chunk) {
        if (err) {
          return callback(err);
        }
        if (_chunk) {
          transformChunk(_chunk, transformNextChunk);
        } else {
          callback(null);
        }
      });
    }
    setLength(length) {
      this[kInternals].length = +length;
      return this;
    }
  }

  const {
    asyncIterator
  } = Symbol;
  const readBlob = async function* (blob) {
    if (blob.stream) {
      yield* blob.stream();
    } else if (blob.arrayBuffer) {
      yield await blob.arrayBuffer();
    } else if (blob[asyncIterator]) {
      yield* blob[asyncIterator]();
    } else {
      yield blob;
    }
  };

  const BOUNDARY_ALPHABET = utils.ALPHABET.ALPHA_DIGIT + '-_';
  const textEncoder = new require$$1.TextEncoder();
  const CRLF = '\r\n';
  const CRLF_BYTES = textEncoder.encode(CRLF);
  const CRLF_BYTES_COUNT = 2;
  class FormDataPart {
    constructor(name, value) {
      const {
        escapeName
      } = this.constructor;
      const isStringValue = utils.isString(value);
      let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''}${CRLF}`;
      if (isStringValue) {
        value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
      } else {
        headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
      }
      this.headers = textEncoder.encode(headers + CRLF);
      this.contentLength = isStringValue ? value.byteLength : value.size;
      this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
      this.name = name;
      this.value = value;
    }
    async *encode() {
      yield this.headers;
      const {
        value
      } = this;
      if (utils.isTypedArray(value)) {
        yield value;
      } else {
        yield* readBlob(value);
      }
      yield CRLF_BYTES;
    }
    static escapeName(name) {
      return String(name).replace(/[\r\n"]/g, match => ({
        '\r': '%0D',
        '\n': '%0A',
        '"': '%22'
      })[match]);
    }
  }
  const formDataToStream = (form, headersHandler, options) => {
    const {
      tag = 'form-data-boundary',
      size = 25,
      boundary = tag + '-' + utils.generateString(size, BOUNDARY_ALPHABET)
    } = options || {};
    if (!utils.isFormData(form)) {
      throw TypeError('FormData instance required');
    }
    if (boundary.length < 1 || boundary.length > 70) {
      throw Error('boundary must be 10-70 characters long');
    }
    const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
    const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF + CRLF);
    let contentLength = footerBytes.byteLength;
    const parts = Array.from(form.entries()).map(([name, value]) => {
      const part = new FormDataPart(name, value);
      contentLength += part.size;
      return part;
    });
    contentLength += boundaryBytes.byteLength * parts.length;
    contentLength = utils.toFiniteNumber(contentLength);
    const computedHeaders = {
      'Content-Type': `multipart/form-data; boundary=${boundary}`
    };
    if (Number.isFinite(contentLength)) {
      computedHeaders['Content-Length'] = contentLength;
    }
    headersHandler && headersHandler(computedHeaders);
    return stream.Readable.from(async function* () {
      for (const part of parts) {
        yield boundaryBytes;
        yield* part.encode();
      }
      yield footerBytes;
    }());
  };

  class ZlibHeaderTransformStream extends stream__default["default"].Transform {
    __transform(chunk, encoding, callback) {
      this.push(chunk);
      callback();
    }
    _transform(chunk, encoding, callback) {
      if (chunk.length !== 0) {
        this._transform = this.__transform;

        // Add Default Compression headers if no zlib headers are present
        if (chunk[0] !== 120) {
          // Hex: 78
          const header = Buffer.alloc(2);
          header[0] = 120; // Hex: 78
          header[1] = 156; // Hex: 9C 
          this.push(header, encoding);
        }
      }
      this.__transform(chunk, encoding, callback);
    }
  }

  const zlibOptions = {
    flush: zlib__default["default"].constants.Z_SYNC_FLUSH,
    finishFlush: zlib__default["default"].constants.Z_SYNC_FLUSH
  };
  const brotliOptions = {
    flush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH,
    finishFlush: zlib__default["default"].constants.BROTLI_OPERATION_FLUSH
  };
  const isBrotliSupported = utils.isFunction(zlib__default["default"].createBrotliDecompress);
  const {
    http: httpFollow,
    https: httpsFollow
  } = followRedirects.exports;
  const isHttps = /https:?/;
  const supportedProtocols = platform.protocols.map(protocol => {
    return protocol + ':';
  });

  /**
   * If the proxy or config beforeRedirects functions are defined, call them with the options
   * object.
   *
   * @param {Object<string, any>} options - The options object that was passed to the request.
   *
   * @returns {Object<string, any>}
   */
  function dispatchBeforeRedirect(options) {
    if (options.beforeRedirects.proxy) {
      options.beforeRedirects.proxy(options);
    }
    if (options.beforeRedirects.config) {
      options.beforeRedirects.config(options);
    }
  }

  /**
   * If the proxy or config afterRedirects functions are defined, call them with the options
   *
   * @param {http.ClientRequestArgs} options
   * @param {AxiosProxyConfig} configProxy configuration from Axios options object
   * @param {string} location
   *
   * @returns {http.ClientRequestArgs}
   */
  function setProxy(options, configProxy, location) {
    let proxy = configProxy;
    if (!proxy && proxy !== false) {
      const proxyUrl = getProxyForUrl_1(location);
      if (proxyUrl) {
        proxy = new URL(proxyUrl);
      }
    }
    if (proxy) {
      // Basic proxy authorization
      if (proxy.username) {
        proxy.auth = (proxy.username || '') + ':' + (proxy.password || '');
      }
      if (proxy.auth) {
        // Support proxy auth object form
        if (proxy.auth.username || proxy.auth.password) {
          proxy.auth = (proxy.auth.username || '') + ':' + (proxy.auth.password || '');
        }
        const base64 = Buffer.from(proxy.auth, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
      options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
      const proxyHost = proxy.hostname || proxy.host;
      options.hostname = proxyHost;
      // Replace 'host' since options is not a URL object
      options.host = proxyHost;
      options.port = proxy.port;
      options.path = location;
      if (proxy.protocol) {
        options.protocol = proxy.protocol.includes(':') ? proxy.protocol : `${proxy.protocol}:`;
      }
    }
    options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
      // Configure proxy for redirected request, passing the original config proxy to apply
      // the exact same logic as if the redirected request was performed by axios directly.
      setProxy(redirectOptions, configProxy, redirectOptions.href);
    };
  }
  const isHttpAdapterSupported = typeof process !== 'undefined' && utils.kindOf(process) === 'process';

  // temporary hotfix

  const wrapAsync = asyncExecutor => {
    return new Promise((resolve, reject) => {
      let onDone;
      let isDone;
      const done = (value, isRejected) => {
        if (isDone) return;
        isDone = true;
        onDone && onDone(value, isRejected);
      };
      const _resolve = value => {
        done(value);
        resolve(value);
      };
      const _reject = reason => {
        done(reason, true);
        reject(reason);
      };
      asyncExecutor(_resolve, _reject, onDoneHandler => onDone = onDoneHandler).catch(_reject);
    });
  };

  /*eslint consistent-return:0*/
  var httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
    return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
      let {
        data
      } = config;
      const {
        responseType,
        responseEncoding
      } = config;
      const method = config.method.toUpperCase();
      let isDone;
      let rejected = false;
      let req;

      // temporary internal emitter until the AxiosRequest class will be implemented
      const emitter = new require$$0__default$2["default"]();
      const onFinished = () => {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(abort);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', abort);
        }
        emitter.removeAllListeners();
      };
      onDone((value, isRejected) => {
        isDone = true;
        if (isRejected) {
          rejected = true;
          onFinished();
        }
      });
      function abort(reason) {
        emitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
      }
      emitter.once('abort', reject);
      if (config.cancelToken || config.signal) {
        config.cancelToken && config.cancelToken.subscribe(abort);
        if (config.signal) {
          config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
        }
      }

      // Parse url
      const fullPath = buildFullPath(config.baseURL, config.url);
      const parsed = new URL(fullPath, 'http://localhost');
      const protocol = parsed.protocol || supportedProtocols[0];
      if (protocol === 'data:') {
        let convertedData;
        if (method !== 'GET') {
          return settle(resolve, reject, {
            status: 405,
            statusText: 'method not allowed',
            headers: {},
            config
          });
        }
        try {
          convertedData = fromDataURI(config.url, responseType === 'blob', {
            Blob: config.env && config.env.Blob
          });
        } catch (err) {
          throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
        }
        if (responseType === 'text') {
          convertedData = convertedData.toString(responseEncoding);
          if (!responseEncoding || responseEncoding === 'utf8') {
            convertedData = utils.stripBOM(convertedData);
          }
        } else if (responseType === 'stream') {
          convertedData = stream__default["default"].Readable.from(convertedData);
        }
        return settle(resolve, reject, {
          data: convertedData,
          status: 200,
          statusText: 'OK',
          headers: new AxiosHeaders(),
          config
        });
      }
      if (supportedProtocols.indexOf(protocol) === -1) {
        return reject(new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_BAD_REQUEST, config));
      }
      const headers = AxiosHeaders.from(config.headers).normalize();

      // Set User-Agent (required by some servers)
      // See https://github.com/axios/axios/issues/69
      // User-Agent is specified; handle case where no UA header is desired
      // Only set header if it hasn't been set in config
      headers.set('User-Agent', 'axios/' + VERSION, false);
      const onDownloadProgress = config.onDownloadProgress;
      const onUploadProgress = config.onUploadProgress;
      const maxRate = config.maxRate;
      let maxUploadRate = undefined;
      let maxDownloadRate = undefined;

      // support for spec compliant FormData objects
      if (utils.isSpecCompliantForm(data)) {
        const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
        data = formDataToStream(data, formHeaders => {
          headers.set(formHeaders);
        }, {
          tag: `axios-${VERSION}-boundary`,
          boundary: userBoundary && userBoundary[1] || undefined
        });
        // support for https://www.npmjs.com/package/form-data api
      } else if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
        headers.set(data.getHeaders());
        if (!headers.hasContentLength()) {
          try {
            const knownLength = await require$$1__default["default"].promisify(data.getLength).call(data);
            Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
            /*eslint no-empty:0*/
          } catch (e) {}
        }
      } else if (utils.isBlob(data)) {
        data.size && headers.setContentType(data.type || 'application/octet-stream');
        headers.setContentLength(data.size || 0);
        data = stream__default["default"].Readable.from(readBlob(data));
      } else if (data && !utils.isStream(data)) {
        if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
          data = Buffer.from(new Uint8Array(data));
        } else if (utils.isString(data)) {
          data = Buffer.from(data, 'utf-8');
        } else {
          return reject(new AxiosError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', AxiosError.ERR_BAD_REQUEST, config));
        }

        // Add Content-Length header if data exists
        headers.setContentLength(data.length, false);
        if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
          return reject(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config));
        }
      }
      const contentLength = utils.toFiniteNumber(headers.getContentLength());
      if (utils.isArray(maxRate)) {
        maxUploadRate = maxRate[0];
        maxDownloadRate = maxRate[1];
      } else {
        maxUploadRate = maxDownloadRate = maxRate;
      }
      if (data && (onUploadProgress || maxUploadRate)) {
        if (!utils.isStream(data)) {
          data = stream__default["default"].Readable.from(data, {
            objectMode: false
          });
        }
        data = stream__default["default"].pipeline([data, new AxiosTransformStream({
          length: contentLength,
          maxRate: utils.toFiniteNumber(maxUploadRate)
        })], utils.noop);
        onUploadProgress && data.on('progress', progress => {
          onUploadProgress(Object.assign(progress, {
            upload: true
          }));
        });
      }

      // HTTP basic authentication
      let auth = undefined;
      if (config.auth) {
        const username = config.auth.username || '';
        const password = config.auth.password || '';
        auth = username + ':' + password;
      }
      if (!auth && parsed.username) {
        const urlUsername = parsed.username;
        const urlPassword = parsed.password;
        auth = urlUsername + ':' + urlPassword;
      }
      auth && headers.delete('authorization');
      let path;
      try {
        path = buildURL(parsed.pathname + parsed.search, config.params, config.paramsSerializer).replace(/^\?/, '');
      } catch (err) {
        const customErr = new Error(err.message);
        customErr.config = config;
        customErr.url = config.url;
        customErr.exists = true;
        return reject(customErr);
      }
      headers.set('Accept-Encoding', 'gzip, compress, deflate' + (isBrotliSupported ? ', br' : ''), false);
      const options = {
        path,
        method: method,
        headers: headers.toJSON(),
        agents: {
          http: config.httpAgent,
          https: config.httpsAgent
        },
        auth,
        protocol,
        beforeRedirect: dispatchBeforeRedirect,
        beforeRedirects: {}
      };
      if (config.socketPath) {
        options.socketPath = config.socketPath;
      } else {
        options.hostname = parsed.hostname;
        options.port = parsed.port;
        setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
      }
      let transport;
      const isHttpsRequest = isHttps.test(options.protocol);
      options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
      if (config.transport) {
        transport = config.transport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsRequest ? require$$2__default["default"] : require$$1__default$1["default"];
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        if (config.beforeRedirect) {
          options.beforeRedirects.config = config.beforeRedirect;
        }
        transport = isHttpsRequest ? httpsFollow : httpFollow;
      }
      if (config.maxBodyLength > -1) {
        options.maxBodyLength = config.maxBodyLength;
      } else {
        // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
        options.maxBodyLength = Infinity;
      }
      if (config.insecureHTTPParser) {
        options.insecureHTTPParser = config.insecureHTTPParser;
      }

      // Create the request
      req = transport.request(options, function handleResponse(res) {
        if (req.destroyed) return;
        const streams = [res];
        const responseLength = +res.headers['content-length'];
        if (onDownloadProgress) {
          const transformStream = new AxiosTransformStream({
            length: utils.toFiniteNumber(responseLength),
            maxRate: utils.toFiniteNumber(maxDownloadRate)
          });
          onDownloadProgress && transformStream.on('progress', progress => {
            onDownloadProgress(Object.assign(progress, {
              download: true
            }));
          });
          streams.push(transformStream);
        }

        // decompress the response body transparently if required
        let responseStream = res;

        // return the last request in case of redirects
        const lastRequest = res.req || req;

        // if decompress disabled we should not decompress
        if (config.decompress !== false && res.headers['content-encoding']) {
          // if no content, but headers still say that it is encoded,
          // remove the header not confuse downstream operations
          if (method === 'HEAD' || res.statusCode === 204) {
            delete res.headers['content-encoding'];
          }
          switch (res.headers['content-encoding']) {
            /*eslint default-case:0*/
            case 'gzip':
            case 'x-gzip':
            case 'compress':
            case 'x-compress':
              // add the unzipper to the body stream processing pipeline
              streams.push(zlib__default["default"].createUnzip(zlibOptions));

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            case 'deflate':
              streams.push(new ZlibHeaderTransformStream());

              // add the unzipper to the body stream processing pipeline
              streams.push(zlib__default["default"].createUnzip(zlibOptions));

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            case 'br':
              if (isBrotliSupported) {
                streams.push(zlib__default["default"].createBrotliDecompress(brotliOptions));
                delete res.headers['content-encoding'];
              }
          }
        }
        responseStream = streams.length > 1 ? stream__default["default"].pipeline(streams, utils.noop) : streams[0];
        const offListeners = stream__default["default"].finished(responseStream, () => {
          offListeners();
          onFinished();
        });
        const response = {
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: new AxiosHeaders(res.headers),
          config,
          request: lastRequest
        };
        if (responseType === 'stream') {
          response.data = responseStream;
          settle(resolve, reject, response);
        } else {
          const responseBuffer = [];
          let totalResponseBytes = 0;
          responseStream.on('data', function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            totalResponseBytes += chunk.length;

            // make sure the content length is not over the maxContentLength if specified
            if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
              // stream.destroy() emit aborted event before calling reject() on Node.js v16
              rejected = true;
              responseStream.destroy();
              reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
            }
          });
          responseStream.on('aborted', function handlerStreamAborted() {
            if (rejected) {
              return;
            }
            const err = new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
            responseStream.destroy(err);
            reject(err);
          });
          responseStream.on('error', function handleStreamError(err) {
            if (req.destroyed) return;
            reject(AxiosError.from(err, null, config, lastRequest));
          });
          responseStream.on('end', function handleStreamEnd() {
            try {
              let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
              if (responseType !== 'arraybuffer') {
                responseData = responseData.toString(responseEncoding);
                if (!responseEncoding || responseEncoding === 'utf8') {
                  responseData = utils.stripBOM(responseData);
                }
              }
              response.data = responseData;
            } catch (err) {
              reject(AxiosError.from(err, null, config, response.request, response));
            }
            settle(resolve, reject, response);
          });
        }
        emitter.once('abort', err => {
          if (!responseStream.destroyed) {
            responseStream.emit('error', err);
            responseStream.destroy();
          }
        });
      });
      emitter.once('abort', err => {
        reject(err);
        req.destroy(err);
      });

      // Handle errors
      req.on('error', function handleRequestError(err) {
        // @todo remove
        // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
        reject(AxiosError.from(err, null, config, req));
      });

      // set tcp keep alive to prevent drop connection by peer
      req.on('socket', function handleRequestSocket(socket) {
        // default interval of sending ack packet is 1 minute
        socket.setKeepAlive(true, 1000 * 60);
      });

      // Handle request timeout
      if (config.timeout) {
        // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
        const timeout = parseInt(config.timeout, 10);
        if (isNaN(timeout)) {
          reject(new AxiosError('error trying to parse `config.timeout` to int', AxiosError.ERR_BAD_OPTION_VALUE, config, req));
          return;
        }

        // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
        // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
        // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
        // And then these socket which be hang up will devouring CPU little by little.
        // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
        req.setTimeout(timeout, function handleRequestTimeout() {
          if (isDone) return;
          let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
          const transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req));
          abort();
        });
      }

      // Send the request
      if (utils.isStream(data)) {
        let ended = false;
        let errored = false;
        data.on('end', () => {
          ended = true;
        });
        data.once('error', err => {
          errored = true;
          req.destroy(err);
        });
        data.on('close', () => {
          if (!ended && !errored) {
            abort(new CanceledError('Request stream has been aborted', config, req));
          }
        });
        data.pipe(req);
      } else {
        req.end(data);
      }
    });
  };

  var cookies = platform.isStandardBrowserEnv ?
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
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
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  }() :
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }();

  var isURLSameOrigin = platform.isStandardBrowserEnv ?
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;
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
        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
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
      const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() :
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();

  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return e => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : undefined;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : undefined,
        bytes: progressBytes,
        rate: rate ? rate : undefined,
        estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
        event: e
      };
      data[isDownloadStream ? 'download' : 'upload'] = true;
      listener(data);
    };
  }
  const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
  var xhrAdapter = isXHRAdapterSupported && function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener('abort', onCanceled);
        }
      }
      if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
        requestHeaders.setContentType(false); // Let the browser set it
      }

      let request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        const username = config.auth.username || '';
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        const responseHeaders = AxiosHeaders.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
        const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);

        // Clean up request
        request = null;
      }
      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        const transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (platform.isStandardBrowserEnv) {
        // Add xsrf header
        const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = config.responseType;
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = cancel => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };

  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, 'name', {
          value
        });
      } catch (e) {
        // eslint-disable-next-line no-empty
      }
      Object.defineProperty(fn, 'adapterName', {
        value
      });
    }
  });
  var adapters = {
    getAdapter: adapters => {
      adapters = utils.isArray(adapters) ? adapters : [adapters];
      const {
        length
      } = adapters;
      let nameOrAdapter;
      let adapter;
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter) {
        if (adapter === false) {
          throw new AxiosError(`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
        }
        throw new Error(utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
      }
      if (!utils.isFunction(adapter)) {
        throw new TypeError('adapter is not a function');
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   *
   * @param {Object} config The config that is to be used for the request
   *
   * @returns {void}
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders.from(config.headers);

    // Transform request data
    config.data = transformData.call(config, config.transformRequest);
    if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
      config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(config, config.transformResponse, response);
      response.headers = AxiosHeaders.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
          reason.response.headers = AxiosHeaders.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  const headersToObject = thing => thing instanceof AxiosHeaders ? thing.toJSON() : thing;

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   *
   * @returns {Object} New object resulting from merging config2 to config1
   */
  function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge.call({
          caseless
        }, target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils.isUndefined(a)) {
        return getMergedValue(undefined, a, caseless);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(undefined, b);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(undefined, b);
      } else if (!utils.isUndefined(a)) {
        return getMergedValue(undefined, a);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(undefined, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      const merge = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge(config1[prop], config2[prop], prop);
      utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  const validators$1 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
    validators$1[type] = function validator(thing) {
      return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });
  const deprecatedWarnings = {};

  /**
   * Transitional option validator
   *
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   *
   * @returns {function}
   */
  validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };

  /**
   * Assert object's properties type
   *
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   *
   * @returns {object}
   */

  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  var validator = {
    assertOptions,
    validators: validators$1
  };

  const validators = validator.validators;

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   *
   * @return {Axios} A new instance of Axios
   */
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const {
        transitional,
        paramsSerializer,
        headers
      } = config;
      if (transitional !== undefined) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }

      // Set config.method
      config.method = (config.method || this.defaults.method || 'get').toLowerCase();
      let contextHeaders;

      // Flatten headers
      contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
      contextHeaders && utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
        delete headers[method];
      });
      config.headers = AxiosHeaders.concat(contextHeaders, headers);

      // filter out skipped interceptors
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), undefined];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }

  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  });

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @param {Function} executor The executor function.
   *
   * @returns {CancelToken}
   */
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;

      // eslint-disable-next-line func-names
      this.promise.then(cancel => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });

      // eslint-disable-next-line func-names
      this.promise.then = onfulfilled => {
        let _resolve;
        // eslint-disable-next-line func-names
        const promise = new Promise(resolve => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }

    /**
     * Subscribe to the cancel signal
     */

    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }

    /**
     * Unsubscribe from the cancel signal
     */

    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  }

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
   *
   * @returns {Function}
   */
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   *
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
  }

  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   *
   * @returns {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    const context = new Axios(defaultConfig);
    const instance = bind(Axios.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context, {
      allOwnKeys: true
    });

    // Copy context to instance
    utils.extend(instance, context, null, {
      allOwnKeys: true
    });

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }

  // Create the default instance to be exported
  const axios = createInstance(defaults$1);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;

  // Expose Cancel & CancelToken
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;

  // Expose AxiosError class
  axios.AxiosError = AxiosError;

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;

  // Expose isAxiosError
  axios.isAxiosError = isAxiosError;

  // Expose mergeConfig
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders;
  axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.HttpStatusCode = HttpStatusCode;
  axios.default = axios;

  // this module should only have a default export
  var axios$1 = axios;

  class BaseApiService {
      baseUrl = API_URL;
      axiosInstance;
      config;
      resource;
      constructor(resource) {
          if (!resource)
              throw new Error('Resource is not provided');
          this.resource = resource;
          this.config = {
              baseURL: this.baseUrl,
          };
          this.axiosInstance = axios$1.create(this.config);
      }
      getUrl(id = '') {
          // auth token
          const tokens = localStorage.getItem('AuthTokens')
              ? JSON.parse(localStorage.getItem('AuthTokens') || '{}')
              : undefined;
          this.axiosInstance.defaults.baseURL = Logic.Common.apiUrl;
          this.axiosInstance.defaults.headers.common['Access-Token'] = tokens
              ? tokens.accessToken
              : '';
          this.axiosInstance.defaults.headers.common['Refresh-Token'] = tokens
              ? tokens.refreshToken
              : '';
          return id ? `/${this.resource}/${id}` : `/${this.resource}`;
      }
      handleErrors(err) {
          // Note: here you may want to add your errors handling
          if (err.response?.status == 461) {
              Logic.Common.hideLoader();
              Logic.Auth.SignOut();
          }
          throw err;
      }
  }

  class ReadOnlyApiService extends BaseApiService {
      constructor(resource) {
          super(resource);
      }
      async fetch(filters = {}) {
          try {
              const response = await this.axiosInstance.get(this.getUrl(), {
                  params: filters,
              });
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              throw err;
          }
      }
      async get(id) {
          try {
              if (!id) {
                  id = 'empty';
              }
              const response = await this.axiosInstance.get(this.getUrl(id));
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              throw err;
          }
      }
      async search(query) {
          try {
              if (!query)
                  throw Error('query is not provided');
              const response = await this.axiosInstance.get(this.getUrl() + '?q=' + query);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              throw err;
          }
      }
  }

  class EmailApi extends ReadOnlyApiService {
      constructor() {
          super('auth/emails');
      }
      async sendVerificationMail() {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/verify/mail');
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async signUp(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/signup', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async signIn(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/signin', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async verifyEmail(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/verify', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class IdentitiesApi extends ReadOnlyApiService {
      constructor() {
          super('auth/identities');
      }
      async googleSignIn(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/google', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async appleSignIn(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/apple', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class PasswordsApi extends ReadOnlyApiService {
      constructor() {
          super('auth/passwords');
      }
      async sendResetPasswordMail(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/mail', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async resetPassword(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/reset', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updatePassword(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/update', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class PhoneApi extends ReadOnlyApiService {
      constructor() {
          super('auth/phone');
      }
      async sendVerifyPhone(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/verify/text', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async verifyPhone(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/verify', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class TokenApi extends ReadOnlyApiService {
      constructor() {
          super('auth/token');
      }
      async exchangeToken() {
          try {
              const response = await this.axiosInstance.post(this.getUrl());
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class ModelApiService extends ReadOnlyApiService {
      constructor(resource) {
          super(resource);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async post(url = null, data = {}, onUploadProgress = (progressEvent) => {
          // onprogress callback
      }, useFormdata = true) {
          try {
              // convert request data to formData
              const formData = Logic.Common.convertToFormData(data);
              let headers = {};
              if (useFormdata) {
                  headers = {
                      'content-type': 'multipart/form-data',
                  };
              }
              const response = await this.axiosInstance.post(url ? url : this.getUrl(), useFormdata ? formData : data, {
                  onUploadProgress: onUploadProgress,
                  headers,
              });
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              throw err;
          }
      }
      async put(url = null, id, data = {}, onUploadProgress = (progressEvent) => {
          // onprogress callback
      }, useFormdata = true) {
          // convert request data to formData
          const formData = Logic.Common.convertToFormData(data);
          try {
              const response = await this.axiosInstance.put(url ? url : this.getUrl(id), useFormdata ? formData : data, {
                  onUploadProgress: onUploadProgress,
                  headers: {
                      'content-type': 'multipart/form-data',
                  },
              });
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              throw err;
          }
      }
      async delete(id) {
          if (!id)
              throw Error('Id is not provided');
          try {
              const response = await this.axiosInstance.delete(this.getUrl(id));
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              throw err;
          }
      }
  }

  class UserApi$1 extends ModelApiService {
      constructor() {
          super('auth/user');
      }
      async getAuthUser() {
          try {
              const response = await this.axiosInstance.get(this.getUrl());
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async setSuperAdminRoles() {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + '/superAdmin');
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updateUserRoles(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/roles', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async signOut() {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/signout');
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updateUserProfile(data, onUploadProgress) {
          try {
              const response = await this.put(this.getUrl(), '', data, onUploadProgress, true);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async deleteUserAccount() {
          try {
              const response = await this.axiosInstance.delete(this.getUrl());
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  const AuthApi = {
      email: new EmailApi(),
      identities: new IdentitiesApi(),
      passwords: new PasswordsApi(),
      phone: new PhoneApi(),
      token: new TokenApi(),
      user: new UserApi$1(),
  };

  class ConversationsApi extends ModelApiService {
      constructor() {
          super('conversations/conversations');
      }
      async getMessages(conversationId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${conversationId}/messages`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async getMessage(conversationId, messageId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${conversationId}/messages/${messageId}`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async starMessage(conversationId, messageId, data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${conversationId}/messages/${messageId}/star`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async markMessagesAsRead(conversationId) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + `/${conversationId}/messages/read`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async createMessage(conversationId, data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${conversationId}/messages`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async addTutor(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${data.id}/tutor`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async deleteTutor(data) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + `/${data.id}/tutor`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class ReviewsApi extends ReadOnlyApiService {
      constructor() {
          super('conversations/reviews');
      }
  }

  const ConversationApi = {
      conversation: new ConversationsApi(),
      review: new ReviewsApi(),
  };

  class TagsApi extends ModelApiService {
      constructor() {
          super('interactions/tags');
      }
  }

  const InteractionApi = {
      tag: new TagsApi(),
  };

  class NotificationsApi extends ReadOnlyApiService {
      constructor() {
          super('notifications/notifications');
      }
      async toggleNotification(data) {
          try {
              const response = await this.axiosInstance.put(this.getUrl(), data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async toggleAllNotification(seen) {
          try {
              const response = await this.axiosInstance.put(this.getUrl(), { seen });
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class PushTokensApi extends ReadOnlyApiService {
      constructor() {
          super('tokens/devices');
      }
      async subscribeDevice(data) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + '/subscribe', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async unsubscribeDevice(data) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + '/unsubscribe', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  const NotificationApi = {
      notifications: new NotificationsApi(),
      pushTokens: new PushTokensApi(),
  };

  class PaymentMethodsApi extends ModelApiService {
      constructor() {
          super('payment/methods');
      }
      async makePrimaryPaymentMethod(methodId) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + `/${methodId}/primary`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class PurchasesApi extends ModelApiService {
      constructor() {
          super('payment/purchases');
      }
  }

  class TransactionsApi extends ModelApiService {
      constructor() {
          super('payment/transactions');
      }
      async fulfillTransaction(transactionId) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + `/${transactionId}/fulfill`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async getFlutterwaveKey() {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/flutterwave/secrets`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class WalletsApi extends ReadOnlyApiService {
      constructor() {
          super('payment/wallets');
      }
      async subscribeToPlan(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/subscriptions`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  const PaymentApi = {
      paymentMethod: new PaymentMethodsApi(),
      purchase: new PurchasesApi(),
      transaction: new TransactionsApi(),
      wallet: new WalletsApi(),
  };

  class GamesApi extends ModelApiService {
      constructor() {
          super('plays/games');
      }
      async getParticipantAnswer(gameId, participantId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${gameId}/answers/${participantId}`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async getGameAnswers(gameId, filters) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${gameId}/answers`, {
                  params: filters,
              });
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async getGameQuestions(gameId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${gameId}/questions`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async joinGame(gameId, data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${gameId}/join`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async startGame(gameId) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${gameId}/start`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async answerGameQuestion(gameId, data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${gameId}/answers`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  const PlayApi = {
      game: new GamesApi(),
  };

  class CoursesApi$1 extends ModelApiService {
      constructor() {
          super('school/courses');
      }
  }

  class DepartmentsApi extends ModelApiService {
      constructor() {
          super('school/departments');
      }
  }

  class FacultiesApi extends ModelApiService {
      constructor() {
          super('school/faculties');
      }
  }

  class InstitutionsApi extends ModelApiService {
      constructor() {
          super('school/institutions');
      }
  }

  const SchoolApi = {
      course: new CoursesApi$1(),
      department: new DepartmentsApi(),
      faculty: new FacultiesApi(),
      institution: new InstitutionsApi(),
  };

  class CoursesApi extends ModelApiService {
      constructor() {
          super('study/courses');
      }
      async moveItemIntoCourse(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${data.id}/move`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updateCourseSections(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${data.id}/sections`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async publishCourse(courseId) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${courseId}/publish`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async freezeCourse(courseId) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${courseId}/freeze`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class FilesApi extends ModelApiService {
      constructor() {
          super('study/files');
      }
      async getFileMedia(fileId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${fileId}/media`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class FoldersApi extends ModelApiService {
      constructor() {
          super('study/folders');
      }
      async saveItemToFolder(data) {
          try {
              const response = await this.axiosInstance.put(this.getUrl() + `/${data.id}/save`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class QuizzesApi extends ModelApiService {
      constructor() {
          super('study/quizzes');
      }
      async getQuestions(quizId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${quizId}/questions`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async getQuestion(quizId, questionId) {
          try {
              const response = await this.axiosInstance.get(this.getUrl() + `/${quizId}/questions/${questionId}`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async createQuestion(quizId, data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${quizId}/questions`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async publishQuiz(quizId) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${quizId}/publish`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async reorderQuiz(quizId, data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${quizId}/reorder`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updateQuestion(quizId, data) {
          try {
              const questionId = data.id;
              data.id = undefined;
              const response = await this.axiosInstance.put(this.getUrl() + `/${quizId}/questions/${questionId}`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async deleteQuestion(quizId, questionId) {
          try {
              const response = await this.axiosInstance.delete(this.getUrl() + `/${quizId}/questions/${questionId}`);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  const StudyApi = {
      course: new CoursesApi(),
      file: new FilesApi(),
      folder: new FoldersApi(),
      quiz: new QuizzesApi(),
  };

  class UsersApi extends ReadOnlyApiService {
      constructor() {
          super('users/users');
      }
      async customizeUserAI(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/ai', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updateUser(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + '/type', data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  class VerificationsApi extends ReadOnlyApiService {
      constructor() {
          super('users/verifications');
      }
      async createVerification(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl(), data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
      async updateUserVerification(data) {
          try {
              const response = await this.axiosInstance.post(this.getUrl() + `/${data.id}/accept`, data);
              return response;
          }
          catch (err) {
              this.handleErrors(err);
              if (err.response) ;
          }
      }
  }

  const UserApi = {
      users: new UsersApi(),
      verifications: new VerificationsApi(),
  };

  const $api = {
      auth: AuthApi,
      conversations: ConversationApi,
      interactions: InteractionApi,
      notifications: NotificationApi,
      payment: PaymentApi,
      plays: PlayApi,
      schools: SchoolApi,
      study: StudyApi,
      users: UserApi,
  };

  /*!
   * currency.js - v2.0.4
   * http://scurker.github.io/currency.js
   *
   * Copyright (c) 2021 Jason Wilson
   * Released under MIT license
   */

  var defaults = {
    symbol: '$',
    separator: ',',
    decimal: '.',
    errorOnInvalid: false,
    precision: 2,
    pattern: '!#',
    negativePattern: '-!#',
    format: format$2,
    fromCents: false
  };
  var round = function round(v) {
    return Math.round(v);
  };
  var pow = function pow(p) {
    return Math.pow(10, p);
  };
  var rounding = function rounding(value, increment) {
    return round(value / increment) * increment;
  };
  var groupRegex = /(\d)(?=(\d{3})+\b)/g;
  var vedicRegex = /(\d)(?=(\d\d)+\d\b)/g;
  /**
   * Create a new instance of currency.js
   * @param {number|string|currency} value
   * @param {object} [opts]
   */

  function currency(value, opts) {
    var that = this;
    if (!(that instanceof currency)) {
      return new currency(value, opts);
    }
    var settings = Object.assign({}, defaults, opts),
      precision = pow(settings.precision),
      v = parse$3(value, settings);
    that.intValue = v;
    that.value = v / precision; // Set default incremental value

    settings.increment = settings.increment || 1 / precision; // Support vedic numbering systems
    // see: https://en.wikipedia.org/wiki/Indian_numbering_system

    if (settings.useVedic) {
      settings.groups = vedicRegex;
    } else {
      settings.groups = groupRegex;
    } // Intended for internal usage only - subject to change

    this.s = settings;
    this.p = precision;
  }
  function parse$3(value, opts) {
    var useRounding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var v = 0,
      decimal = opts.decimal,
      errorOnInvalid = opts.errorOnInvalid,
      decimals = opts.precision,
      fromCents = opts.fromCents,
      precision = pow(decimals),
      isNumber = typeof value === 'number',
      isCurrency = value instanceof currency;
    if (isCurrency && fromCents) {
      return value.intValue;
    }
    if (isNumber || isCurrency) {
      v = isCurrency ? value.value : value;
    } else if (typeof value === 'string') {
      var regex = new RegExp('[^-\\d' + decimal + ']', 'g'),
        decimalString = new RegExp('\\' + decimal, 'g');
      v = value.replace(/\((.*)\)/, '-$1') // allow negative e.g. (1.99)
      .replace(regex, '') // replace any non numeric values
      .replace(decimalString, '.'); // convert any decimal values

      v = v || 0;
    } else {
      if (errorOnInvalid) {
        throw Error('Invalid Input');
      }
      v = 0;
    }
    if (!fromCents) {
      v *= precision; // scale number to integer value

      v = v.toFixed(4); // Handle additional decimal for proper rounding.
    }

    return useRounding ? round(v) : v;
  }
  /**
   * Formats a currency object
   * @param currency
   * @param {object} [opts]
   */

  function format$2(currency, settings) {
    var pattern = settings.pattern,
      negativePattern = settings.negativePattern,
      symbol = settings.symbol,
      separator = settings.separator,
      decimal = settings.decimal,
      groups = settings.groups,
      split = ('' + currency).replace(/^-/, '').split('.'),
      dollars = split[0],
      cents = split[1];
    return (currency.value >= 0 ? pattern : negativePattern).replace('!', symbol).replace('#', dollars.replace(groups, '$1' + separator) + (cents ? decimal + cents : ''));
  }
  currency.prototype = {
    /**
     * Adds values together.
     * @param {number} number
     * @returns {currency}
     */
    add: function add(number) {
      var intValue = this.intValue,
        _settings = this.s,
        _precision = this.p;
      return currency((intValue += parse$3(number, _settings)) / (_settings.fromCents ? 1 : _precision), _settings);
    },
    /**
     * Subtracts value.
     * @param {number} number
     * @returns {currency}
     */
    subtract: function subtract(number) {
      var intValue = this.intValue,
        _settings = this.s,
        _precision = this.p;
      return currency((intValue -= parse$3(number, _settings)) / (_settings.fromCents ? 1 : _precision), _settings);
    },
    /**
     * Multiplies values.
     * @param {number} number
     * @returns {currency}
     */
    multiply: function multiply(number) {
      var intValue = this.intValue,
        _settings = this.s;
      return currency((intValue *= number) / (_settings.fromCents ? 1 : pow(_settings.precision)), _settings);
    },
    /**
     * Divides value.
     * @param {number} number
     * @returns {currency}
     */
    divide: function divide(number) {
      var intValue = this.intValue,
        _settings = this.s;
      return currency(intValue /= parse$3(number, _settings, false), _settings);
    },
    /**
     * Takes the currency amount and distributes the values evenly. Any extra pennies
     * left over from the distribution will be stacked onto the first set of entries.
     * @param {number} count
     * @returns {array}
     */
    distribute: function distribute(count) {
      var intValue = this.intValue,
        _precision = this.p,
        _settings = this.s,
        distribution = [],
        split = Math[intValue >= 0 ? 'floor' : 'ceil'](intValue / count),
        pennies = Math.abs(intValue - split * count),
        precision = _settings.fromCents ? 1 : _precision;
      for (; count !== 0; count--) {
        var item = currency(split / precision, _settings); // Add any left over pennies

        pennies-- > 0 && (item = item[intValue >= 0 ? 'add' : 'subtract'](1 / precision));
        distribution.push(item);
      }
      return distribution;
    },
    /**
     * Returns the dollar value.
     * @returns {number}
     */
    dollars: function dollars() {
      return ~~this.value;
    },
    /**
     * Returns the cent value.
     * @returns {number}
     */
    cents: function cents() {
      var intValue = this.intValue,
        _precision = this.p;
      return ~~(intValue % _precision);
    },
    /**
     * Formats the value as a string according to the formatting settings.
     * @param {boolean} useSymbol - format with currency symbol
     * @returns {string}
     */
    format: function format(options) {
      var _settings = this.s;
      if (typeof options === 'function') {
        return options(this, _settings);
      }
      return _settings.format(this, Object.assign({}, _settings, options));
    },
    /**
     * Formats the value as a string according to the formatting settings.
     * @returns {string}
     */
    toString: function toString() {
      var intValue = this.intValue,
        _precision = this.p,
        _settings = this.s;
      return rounding(intValue / _precision, _settings.increment).toFixed(_settings.precision);
    },
    /**
     * Value for JSON serialization.
     * @returns {float}
     */
    toJSON: function toJSON() {
      return this.value;
    }
  };

  function commonjsRequire(path) {
  	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }

  var moment$1 = {exports: {}};

  (function (module, exports) {
  	(function (global, factory) {
  	  module.exports = factory() ;
  	})(commonjsGlobal, function () {

  	  var hookCallback;
  	  function hooks() {
  	    return hookCallback.apply(null, arguments);
  	  }

  	  // This is done to register the method called with moment()
  	  // without creating circular dependencies.
  	  function setHookCallback(callback) {
  	    hookCallback = callback;
  	  }
  	  function isArray(input) {
  	    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  	  }
  	  function isObject(input) {
  	    // IE8 will treat undefined and null as object if it wasn't for
  	    // input != null
  	    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  	  }
  	  function hasOwnProp(a, b) {
  	    return Object.prototype.hasOwnProperty.call(a, b);
  	  }
  	  function isObjectEmpty(obj) {
  	    if (Object.getOwnPropertyNames) {
  	      return Object.getOwnPropertyNames(obj).length === 0;
  	    } else {
  	      var k;
  	      for (k in obj) {
  	        if (hasOwnProp(obj, k)) {
  	          return false;
  	        }
  	      }
  	      return true;
  	    }
  	  }
  	  function isUndefined(input) {
  	    return input === void 0;
  	  }
  	  function isNumber(input) {
  	    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  	  }
  	  function isDate(input) {
  	    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  	  }
  	  function map(arr, fn) {
  	    var res = [],
  	      i,
  	      arrLen = arr.length;
  	    for (i = 0; i < arrLen; ++i) {
  	      res.push(fn(arr[i], i));
  	    }
  	    return res;
  	  }
  	  function extend(a, b) {
  	    for (var i in b) {
  	      if (hasOwnProp(b, i)) {
  	        a[i] = b[i];
  	      }
  	    }
  	    if (hasOwnProp(b, 'toString')) {
  	      a.toString = b.toString;
  	    }
  	    if (hasOwnProp(b, 'valueOf')) {
  	      a.valueOf = b.valueOf;
  	    }
  	    return a;
  	  }
  	  function createUTC(input, format, locale, strict) {
  	    return createLocalOrUTC(input, format, locale, strict, true).utc();
  	  }
  	  function defaultParsingFlags() {
  	    // We need to deep clone this object.
  	    return {
  	      empty: false,
  	      unusedTokens: [],
  	      unusedInput: [],
  	      overflow: -2,
  	      charsLeftOver: 0,
  	      nullInput: false,
  	      invalidEra: null,
  	      invalidMonth: null,
  	      invalidFormat: false,
  	      userInvalidated: false,
  	      iso: false,
  	      parsedDateParts: [],
  	      era: null,
  	      meridiem: null,
  	      rfc2822: false,
  	      weekdayMismatch: false
  	    };
  	  }
  	  function getParsingFlags(m) {
  	    if (m._pf == null) {
  	      m._pf = defaultParsingFlags();
  	    }
  	    return m._pf;
  	  }
  	  var some;
  	  if (Array.prototype.some) {
  	    some = Array.prototype.some;
  	  } else {
  	    some = function (fun) {
  	      var t = Object(this),
  	        len = t.length >>> 0,
  	        i;
  	      for (i = 0; i < len; i++) {
  	        if (i in t && fun.call(this, t[i], i, t)) {
  	          return true;
  	        }
  	      }
  	      return false;
  	    };
  	  }
  	  function isValid(m) {
  	    if (m._isValid == null) {
  	      var flags = getParsingFlags(m),
  	        parsedParts = some.call(flags.parsedDateParts, function (i) {
  	          return i != null;
  	        }),
  	        isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
  	      if (m._strict) {
  	        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
  	      }
  	      if (Object.isFrozen == null || !Object.isFrozen(m)) {
  	        m._isValid = isNowValid;
  	      } else {
  	        return isNowValid;
  	      }
  	    }
  	    return m._isValid;
  	  }
  	  function createInvalid(flags) {
  	    var m = createUTC(NaN);
  	    if (flags != null) {
  	      extend(getParsingFlags(m), flags);
  	    } else {
  	      getParsingFlags(m).userInvalidated = true;
  	    }
  	    return m;
  	  }

  	  // Plugins that add properties should also add the key here (null value),
  	  // so we can properly clone ourselves.
  	  var momentProperties = hooks.momentProperties = [],
  	    updateInProgress = false;
  	  function copyConfig(to, from) {
  	    var i,
  	      prop,
  	      val,
  	      momentPropertiesLen = momentProperties.length;
  	    if (!isUndefined(from._isAMomentObject)) {
  	      to._isAMomentObject = from._isAMomentObject;
  	    }
  	    if (!isUndefined(from._i)) {
  	      to._i = from._i;
  	    }
  	    if (!isUndefined(from._f)) {
  	      to._f = from._f;
  	    }
  	    if (!isUndefined(from._l)) {
  	      to._l = from._l;
  	    }
  	    if (!isUndefined(from._strict)) {
  	      to._strict = from._strict;
  	    }
  	    if (!isUndefined(from._tzm)) {
  	      to._tzm = from._tzm;
  	    }
  	    if (!isUndefined(from._isUTC)) {
  	      to._isUTC = from._isUTC;
  	    }
  	    if (!isUndefined(from._offset)) {
  	      to._offset = from._offset;
  	    }
  	    if (!isUndefined(from._pf)) {
  	      to._pf = getParsingFlags(from);
  	    }
  	    if (!isUndefined(from._locale)) {
  	      to._locale = from._locale;
  	    }
  	    if (momentPropertiesLen > 0) {
  	      for (i = 0; i < momentPropertiesLen; i++) {
  	        prop = momentProperties[i];
  	        val = from[prop];
  	        if (!isUndefined(val)) {
  	          to[prop] = val;
  	        }
  	      }
  	    }
  	    return to;
  	  }

  	  // Moment prototype object
  	  function Moment(config) {
  	    copyConfig(this, config);
  	    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  	    if (!this.isValid()) {
  	      this._d = new Date(NaN);
  	    }
  	    // Prevent infinite loop in case updateOffset creates new moment
  	    // objects.
  	    if (updateInProgress === false) {
  	      updateInProgress = true;
  	      hooks.updateOffset(this);
  	      updateInProgress = false;
  	    }
  	  }
  	  function isMoment(obj) {
  	    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  	  }
  	  function warn(msg) {
  	    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
  	      console.warn('Deprecation warning: ' + msg);
  	    }
  	  }
  	  function deprecate(msg, fn) {
  	    var firstTime = true;
  	    return extend(function () {
  	      if (hooks.deprecationHandler != null) {
  	        hooks.deprecationHandler(null, msg);
  	      }
  	      if (firstTime) {
  	        var args = [],
  	          arg,
  	          i,
  	          key,
  	          argLen = arguments.length;
  	        for (i = 0; i < argLen; i++) {
  	          arg = '';
  	          if (typeof arguments[i] === 'object') {
  	            arg += '\n[' + i + '] ';
  	            for (key in arguments[0]) {
  	              if (hasOwnProp(arguments[0], key)) {
  	                arg += key + ': ' + arguments[0][key] + ', ';
  	              }
  	            }
  	            arg = arg.slice(0, -2); // Remove trailing comma and space
  	          } else {
  	            arg = arguments[i];
  	          }
  	          args.push(arg);
  	        }
  	        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
  	        firstTime = false;
  	      }
  	      return fn.apply(this, arguments);
  	    }, fn);
  	  }
  	  var deprecations = {};
  	  function deprecateSimple(name, msg) {
  	    if (hooks.deprecationHandler != null) {
  	      hooks.deprecationHandler(name, msg);
  	    }
  	    if (!deprecations[name]) {
  	      warn(msg);
  	      deprecations[name] = true;
  	    }
  	  }
  	  hooks.suppressDeprecationWarnings = false;
  	  hooks.deprecationHandler = null;
  	  function isFunction(input) {
  	    return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  	  }
  	  function set(config) {
  	    var prop, i;
  	    for (i in config) {
  	      if (hasOwnProp(config, i)) {
  	        prop = config[i];
  	        if (isFunction(prop)) {
  	          this[i] = prop;
  	        } else {
  	          this['_' + i] = prop;
  	        }
  	      }
  	    }
  	    this._config = config;
  	    // Lenient ordinal parsing accepts just a number in addition to
  	    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
  	    // TODO: Remove "ordinalParse" fallback in next major release.
  	    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
  	  }
  	  function mergeConfigs(parentConfig, childConfig) {
  	    var res = extend({}, parentConfig),
  	      prop;
  	    for (prop in childConfig) {
  	      if (hasOwnProp(childConfig, prop)) {
  	        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
  	          res[prop] = {};
  	          extend(res[prop], parentConfig[prop]);
  	          extend(res[prop], childConfig[prop]);
  	        } else if (childConfig[prop] != null) {
  	          res[prop] = childConfig[prop];
  	        } else {
  	          delete res[prop];
  	        }
  	      }
  	    }
  	    for (prop in parentConfig) {
  	      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
  	        // make sure changes to properties don't modify parent config
  	        res[prop] = extend({}, res[prop]);
  	      }
  	    }
  	    return res;
  	  }
  	  function Locale(config) {
  	    if (config != null) {
  	      this.set(config);
  	    }
  	  }
  	  var keys;
  	  if (Object.keys) {
  	    keys = Object.keys;
  	  } else {
  	    keys = function (obj) {
  	      var i,
  	        res = [];
  	      for (i in obj) {
  	        if (hasOwnProp(obj, i)) {
  	          res.push(i);
  	        }
  	      }
  	      return res;
  	    };
  	  }
  	  var defaultCalendar = {
  	    sameDay: '[Today at] LT',
  	    nextDay: '[Tomorrow at] LT',
  	    nextWeek: 'dddd [at] LT',
  	    lastDay: '[Yesterday at] LT',
  	    lastWeek: '[Last] dddd [at] LT',
  	    sameElse: 'L'
  	  };
  	  function calendar(key, mom, now) {
  	    var output = this._calendar[key] || this._calendar['sameElse'];
  	    return isFunction(output) ? output.call(mom, now) : output;
  	  }
  	  function zeroFill(number, targetLength, forceSign) {
  	    var absNumber = '' + Math.abs(number),
  	      zerosToFill = targetLength - absNumber.length,
  	      sign = number >= 0;
  	    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  	  }
  	  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  	    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  	    formatFunctions = {},
  	    formatTokenFunctions = {};

  	  // token:    'M'
  	  // padded:   ['MM', 2]
  	  // ordinal:  'Mo'
  	  // callback: function () { this.month() + 1 }
  	  function addFormatToken(token, padded, ordinal, callback) {
  	    var func = callback;
  	    if (typeof callback === 'string') {
  	      func = function () {
  	        return this[callback]();
  	      };
  	    }
  	    if (token) {
  	      formatTokenFunctions[token] = func;
  	    }
  	    if (padded) {
  	      formatTokenFunctions[padded[0]] = function () {
  	        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
  	      };
  	    }
  	    if (ordinal) {
  	      formatTokenFunctions[ordinal] = function () {
  	        return this.localeData().ordinal(func.apply(this, arguments), token);
  	      };
  	    }
  	  }
  	  function removeFormattingTokens(input) {
  	    if (input.match(/\[[\s\S]/)) {
  	      return input.replace(/^\[|\]$/g, '');
  	    }
  	    return input.replace(/\\/g, '');
  	  }
  	  function makeFormatFunction(format) {
  	    var array = format.match(formattingTokens),
  	      i,
  	      length;
  	    for (i = 0, length = array.length; i < length; i++) {
  	      if (formatTokenFunctions[array[i]]) {
  	        array[i] = formatTokenFunctions[array[i]];
  	      } else {
  	        array[i] = removeFormattingTokens(array[i]);
  	      }
  	    }
  	    return function (mom) {
  	      var output = '',
  	        i;
  	      for (i = 0; i < length; i++) {
  	        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
  	      }
  	      return output;
  	    };
  	  }

  	  // format date using native date object
  	  function formatMoment(m, format) {
  	    if (!m.isValid()) {
  	      return m.localeData().invalidDate();
  	    }
  	    format = expandFormat(format, m.localeData());
  	    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
  	    return formatFunctions[format](m);
  	  }
  	  function expandFormat(format, locale) {
  	    var i = 5;
  	    function replaceLongDateFormatTokens(input) {
  	      return locale.longDateFormat(input) || input;
  	    }
  	    localFormattingTokens.lastIndex = 0;
  	    while (i >= 0 && localFormattingTokens.test(format)) {
  	      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
  	      localFormattingTokens.lastIndex = 0;
  	      i -= 1;
  	    }
  	    return format;
  	  }
  	  var defaultLongDateFormat = {
  	    LTS: 'h:mm:ss A',
  	    LT: 'h:mm A',
  	    L: 'MM/DD/YYYY',
  	    LL: 'MMMM D, YYYY',
  	    LLL: 'MMMM D, YYYY h:mm A',
  	    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  	  };
  	  function longDateFormat(key) {
  	    var format = this._longDateFormat[key],
  	      formatUpper = this._longDateFormat[key.toUpperCase()];
  	    if (format || !formatUpper) {
  	      return format;
  	    }
  	    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
  	      if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
  	        return tok.slice(1);
  	      }
  	      return tok;
  	    }).join('');
  	    return this._longDateFormat[key];
  	  }
  	  var defaultInvalidDate = 'Invalid date';
  	  function invalidDate() {
  	    return this._invalidDate;
  	  }
  	  var defaultOrdinal = '%d',
  	    defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  	  function ordinal(number) {
  	    return this._ordinal.replace('%d', number);
  	  }
  	  var defaultRelativeTime = {
  	    future: 'in %s',
  	    past: '%s ago',
  	    s: 'a few seconds',
  	    ss: '%d seconds',
  	    m: 'a minute',
  	    mm: '%d minutes',
  	    h: 'an hour',
  	    hh: '%d hours',
  	    d: 'a day',
  	    dd: '%d days',
  	    w: 'a week',
  	    ww: '%d weeks',
  	    M: 'a month',
  	    MM: '%d months',
  	    y: 'a year',
  	    yy: '%d years'
  	  };
  	  function relativeTime(number, withoutSuffix, string, isFuture) {
  	    var output = this._relativeTime[string];
  	    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  	  }
  	  function pastFuture(diff, output) {
  	    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
  	    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  	  }
  	  var aliases = {};
  	  function addUnitAlias(unit, shorthand) {
  	    var lowerCase = unit.toLowerCase();
  	    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  	  }
  	  function normalizeUnits(units) {
  	    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  	  }
  	  function normalizeObjectUnits(inputObject) {
  	    var normalizedInput = {},
  	      normalizedProp,
  	      prop;
  	    for (prop in inputObject) {
  	      if (hasOwnProp(inputObject, prop)) {
  	        normalizedProp = normalizeUnits(prop);
  	        if (normalizedProp) {
  	          normalizedInput[normalizedProp] = inputObject[prop];
  	        }
  	      }
  	    }
  	    return normalizedInput;
  	  }
  	  var priorities = {};
  	  function addUnitPriority(unit, priority) {
  	    priorities[unit] = priority;
  	  }
  	  function getPrioritizedUnits(unitsObj) {
  	    var units = [],
  	      u;
  	    for (u in unitsObj) {
  	      if (hasOwnProp(unitsObj, u)) {
  	        units.push({
  	          unit: u,
  	          priority: priorities[u]
  	        });
  	      }
  	    }
  	    units.sort(function (a, b) {
  	      return a.priority - b.priority;
  	    });
  	    return units;
  	  }
  	  function isLeapYear(year) {
  	    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  	  }
  	  function absFloor(number) {
  	    if (number < 0) {
  	      // -0 -> 0
  	      return Math.ceil(number) || 0;
  	    } else {
  	      return Math.floor(number);
  	    }
  	  }
  	  function toInt(argumentForCoercion) {
  	    var coercedNumber = +argumentForCoercion,
  	      value = 0;
  	    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
  	      value = absFloor(coercedNumber);
  	    }
  	    return value;
  	  }
  	  function makeGetSet(unit, keepTime) {
  	    return function (value) {
  	      if (value != null) {
  	        set$1(this, unit, value);
  	        hooks.updateOffset(this, keepTime);
  	        return this;
  	      } else {
  	        return get(this, unit);
  	      }
  	    };
  	  }
  	  function get(mom, unit) {
  	    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  	  }
  	  function set$1(mom, unit, value) {
  	    if (mom.isValid() && !isNaN(value)) {
  	      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
  	        value = toInt(value);
  	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
  	      } else {
  	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
  	      }
  	    }
  	  }

  	  // MOMENTS

  	  function stringGet(units) {
  	    units = normalizeUnits(units);
  	    if (isFunction(this[units])) {
  	      return this[units]();
  	    }
  	    return this;
  	  }
  	  function stringSet(units, value) {
  	    if (typeof units === 'object') {
  	      units = normalizeObjectUnits(units);
  	      var prioritized = getPrioritizedUnits(units),
  	        i,
  	        prioritizedLen = prioritized.length;
  	      for (i = 0; i < prioritizedLen; i++) {
  	        this[prioritized[i].unit](units[prioritized[i].unit]);
  	      }
  	    } else {
  	      units = normalizeUnits(units);
  	      if (isFunction(this[units])) {
  	        return this[units](value);
  	      }
  	    }
  	    return this;
  	  }
  	  var match1 = /\d/,
  	    //       0 - 9
  	    match2 = /\d\d/,
  	    //      00 - 99
  	    match3 = /\d{3}/,
  	    //     000 - 999
  	    match4 = /\d{4}/,
  	    //    0000 - 9999
  	    match6 = /[+-]?\d{6}/,
  	    // -999999 - 999999
  	    match1to2 = /\d\d?/,
  	    //       0 - 99
  	    match3to4 = /\d\d\d\d?/,
  	    //     999 - 9999
  	    match5to6 = /\d\d\d\d\d\d?/,
  	    //   99999 - 999999
  	    match1to3 = /\d{1,3}/,
  	    //       0 - 999
  	    match1to4 = /\d{1,4}/,
  	    //       0 - 9999
  	    match1to6 = /[+-]?\d{1,6}/,
  	    // -999999 - 999999
  	    matchUnsigned = /\d+/,
  	    //       0 - inf
  	    matchSigned = /[+-]?\d+/,
  	    //    -inf - inf
  	    matchOffset = /Z|[+-]\d\d:?\d\d/gi,
  	    // +00:00 -00:00 +0000 -0000 or Z
  	    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
  	    // +00 -00 +00:00 -00:00 +0000 -0000 or Z
  	    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
  	    // 123456789 123456789.123
  	    // any word (or two) characters or numbers including two/three word month in arabic.
  	    // includes scottish gaelic two word and hyphenated months
  	    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  	    regexes;
  	  regexes = {};
  	  function addRegexToken(token, regex, strictRegex) {
  	    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
  	      return isStrict && strictRegex ? strictRegex : regex;
  	    };
  	  }
  	  function getParseRegexForToken(token, config) {
  	    if (!hasOwnProp(regexes, token)) {
  	      return new RegExp(unescapeFormat(token));
  	    }
  	    return regexes[token](config._strict, config._locale);
  	  }

  	  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  	  function unescapeFormat(s) {
  	    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
  	      return p1 || p2 || p3 || p4;
  	    }));
  	  }
  	  function regexEscape(s) {
  	    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  	  }
  	  var tokens = {};
  	  function addParseToken(token, callback) {
  	    var i,
  	      func = callback,
  	      tokenLen;
  	    if (typeof token === 'string') {
  	      token = [token];
  	    }
  	    if (isNumber(callback)) {
  	      func = function (input, array) {
  	        array[callback] = toInt(input);
  	      };
  	    }
  	    tokenLen = token.length;
  	    for (i = 0; i < tokenLen; i++) {
  	      tokens[token[i]] = func;
  	    }
  	  }
  	  function addWeekParseToken(token, callback) {
  	    addParseToken(token, function (input, array, config, token) {
  	      config._w = config._w || {};
  	      callback(input, config._w, config, token);
  	    });
  	  }
  	  function addTimeToArrayFromToken(token, input, config) {
  	    if (input != null && hasOwnProp(tokens, token)) {
  	      tokens[token](input, config._a, config, token);
  	    }
  	  }
  	  var YEAR = 0,
  	    MONTH = 1,
  	    DATE = 2,
  	    HOUR = 3,
  	    MINUTE = 4,
  	    SECOND = 5,
  	    MILLISECOND = 6,
  	    WEEK = 7,
  	    WEEKDAY = 8;
  	  function mod(n, x) {
  	    return (n % x + x) % x;
  	  }
  	  var indexOf;
  	  if (Array.prototype.indexOf) {
  	    indexOf = Array.prototype.indexOf;
  	  } else {
  	    indexOf = function (o) {
  	      // I know
  	      var i;
  	      for (i = 0; i < this.length; ++i) {
  	        if (this[i] === o) {
  	          return i;
  	        }
  	      }
  	      return -1;
  	    };
  	  }
  	  function daysInMonth(year, month) {
  	    if (isNaN(year) || isNaN(month)) {
  	      return NaN;
  	    }
  	    var modMonth = mod(month, 12);
  	    year += (month - modMonth) / 12;
  	    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  	  }

  	  // FORMATTING

  	  addFormatToken('M', ['MM', 2], 'Mo', function () {
  	    return this.month() + 1;
  	  });
  	  addFormatToken('MMM', 0, 0, function (format) {
  	    return this.localeData().monthsShort(this, format);
  	  });
  	  addFormatToken('MMMM', 0, 0, function (format) {
  	    return this.localeData().months(this, format);
  	  });

  	  // ALIASES

  	  addUnitAlias('month', 'M');

  	  // PRIORITY

  	  addUnitPriority('month', 8);

  	  // PARSING

  	  addRegexToken('M', match1to2);
  	  addRegexToken('MM', match1to2, match2);
  	  addRegexToken('MMM', function (isStrict, locale) {
  	    return locale.monthsShortRegex(isStrict);
  	  });
  	  addRegexToken('MMMM', function (isStrict, locale) {
  	    return locale.monthsRegex(isStrict);
  	  });
  	  addParseToken(['M', 'MM'], function (input, array) {
  	    array[MONTH] = toInt(input) - 1;
  	  });
  	  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
  	    var month = config._locale.monthsParse(input, token, config._strict);
  	    // if we didn't find a month name, mark the date as invalid.
  	    if (month != null) {
  	      array[MONTH] = month;
  	    } else {
  	      getParsingFlags(config).invalidMonth = input;
  	    }
  	  });

  	  // LOCALES

  	  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  	    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  	    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  	    defaultMonthsShortRegex = matchWord,
  	    defaultMonthsRegex = matchWord;
  	  function localeMonths(m, format) {
  	    if (!m) {
  	      return isArray(this._months) ? this._months : this._months['standalone'];
  	    }
  	    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  	  }
  	  function localeMonthsShort(m, format) {
  	    if (!m) {
  	      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
  	    }
  	    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  	  }
  	  function handleStrictParse(monthName, format, strict) {
  	    var i,
  	      ii,
  	      mom,
  	      llc = monthName.toLocaleLowerCase();
  	    if (!this._monthsParse) {
  	      // this is not used
  	      this._monthsParse = [];
  	      this._longMonthsParse = [];
  	      this._shortMonthsParse = [];
  	      for (i = 0; i < 12; ++i) {
  	        mom = createUTC([2000, i]);
  	        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
  	        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
  	      }
  	    }
  	    if (strict) {
  	      if (format === 'MMM') {
  	        ii = indexOf.call(this._shortMonthsParse, llc);
  	        return ii !== -1 ? ii : null;
  	      } else {
  	        ii = indexOf.call(this._longMonthsParse, llc);
  	        return ii !== -1 ? ii : null;
  	      }
  	    } else {
  	      if (format === 'MMM') {
  	        ii = indexOf.call(this._shortMonthsParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._longMonthsParse, llc);
  	        return ii !== -1 ? ii : null;
  	      } else {
  	        ii = indexOf.call(this._longMonthsParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._shortMonthsParse, llc);
  	        return ii !== -1 ? ii : null;
  	      }
  	    }
  	  }
  	  function localeMonthsParse(monthName, format, strict) {
  	    var i, mom, regex;
  	    if (this._monthsParseExact) {
  	      return handleStrictParse.call(this, monthName, format, strict);
  	    }
  	    if (!this._monthsParse) {
  	      this._monthsParse = [];
  	      this._longMonthsParse = [];
  	      this._shortMonthsParse = [];
  	    }

  	    // TODO: add sorting
  	    // Sorting makes sure if one month (or abbr) is a prefix of another
  	    // see sorting in computeMonthsParse
  	    for (i = 0; i < 12; i++) {
  	      // make the regex if we don't have it already
  	      mom = createUTC([2000, i]);
  	      if (strict && !this._longMonthsParse[i]) {
  	        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
  	        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
  	      }
  	      if (!strict && !this._monthsParse[i]) {
  	        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
  	        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
  	      }
  	      // test the regex
  	      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
  	        return i;
  	      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
  	        return i;
  	      } else if (!strict && this._monthsParse[i].test(monthName)) {
  	        return i;
  	      }
  	    }
  	  }

  	  // MOMENTS

  	  function setMonth(mom, value) {
  	    var dayOfMonth;
  	    if (!mom.isValid()) {
  	      // No op
  	      return mom;
  	    }
  	    if (typeof value === 'string') {
  	      if (/^\d+$/.test(value)) {
  	        value = toInt(value);
  	      } else {
  	        value = mom.localeData().monthsParse(value);
  	        // TODO: Another silent failure?
  	        if (!isNumber(value)) {
  	          return mom;
  	        }
  	      }
  	    }
  	    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
  	    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
  	    return mom;
  	  }
  	  function getSetMonth(value) {
  	    if (value != null) {
  	      setMonth(this, value);
  	      hooks.updateOffset(this, true);
  	      return this;
  	    } else {
  	      return get(this, 'Month');
  	    }
  	  }
  	  function getDaysInMonth() {
  	    return daysInMonth(this.year(), this.month());
  	  }
  	  function monthsShortRegex(isStrict) {
  	    if (this._monthsParseExact) {
  	      if (!hasOwnProp(this, '_monthsRegex')) {
  	        computeMonthsParse.call(this);
  	      }
  	      if (isStrict) {
  	        return this._monthsShortStrictRegex;
  	      } else {
  	        return this._monthsShortRegex;
  	      }
  	    } else {
  	      if (!hasOwnProp(this, '_monthsShortRegex')) {
  	        this._monthsShortRegex = defaultMonthsShortRegex;
  	      }
  	      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  	    }
  	  }
  	  function monthsRegex(isStrict) {
  	    if (this._monthsParseExact) {
  	      if (!hasOwnProp(this, '_monthsRegex')) {
  	        computeMonthsParse.call(this);
  	      }
  	      if (isStrict) {
  	        return this._monthsStrictRegex;
  	      } else {
  	        return this._monthsRegex;
  	      }
  	    } else {
  	      if (!hasOwnProp(this, '_monthsRegex')) {
  	        this._monthsRegex = defaultMonthsRegex;
  	      }
  	      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  	    }
  	  }
  	  function computeMonthsParse() {
  	    function cmpLenRev(a, b) {
  	      return b.length - a.length;
  	    }
  	    var shortPieces = [],
  	      longPieces = [],
  	      mixedPieces = [],
  	      i,
  	      mom;
  	    for (i = 0; i < 12; i++) {
  	      // make the regex if we don't have it already
  	      mom = createUTC([2000, i]);
  	      shortPieces.push(this.monthsShort(mom, ''));
  	      longPieces.push(this.months(mom, ''));
  	      mixedPieces.push(this.months(mom, ''));
  	      mixedPieces.push(this.monthsShort(mom, ''));
  	    }
  	    // Sorting makes sure if one month (or abbr) is a prefix of another it
  	    // will match the longer piece.
  	    shortPieces.sort(cmpLenRev);
  	    longPieces.sort(cmpLenRev);
  	    mixedPieces.sort(cmpLenRev);
  	    for (i = 0; i < 12; i++) {
  	      shortPieces[i] = regexEscape(shortPieces[i]);
  	      longPieces[i] = regexEscape(longPieces[i]);
  	    }
  	    for (i = 0; i < 24; i++) {
  	      mixedPieces[i] = regexEscape(mixedPieces[i]);
  	    }
  	    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  	    this._monthsShortRegex = this._monthsRegex;
  	    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  	    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  	  }

  	  // FORMATTING

  	  addFormatToken('Y', 0, 0, function () {
  	    var y = this.year();
  	    return y <= 9999 ? zeroFill(y, 4) : '+' + y;
  	  });
  	  addFormatToken(0, ['YY', 2], 0, function () {
  	    return this.year() % 100;
  	  });
  	  addFormatToken(0, ['YYYY', 4], 0, 'year');
  	  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  	  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  	  // ALIASES

  	  addUnitAlias('year', 'y');

  	  // PRIORITIES

  	  addUnitPriority('year', 1);

  	  // PARSING

  	  addRegexToken('Y', matchSigned);
  	  addRegexToken('YY', match1to2, match2);
  	  addRegexToken('YYYY', match1to4, match4);
  	  addRegexToken('YYYYY', match1to6, match6);
  	  addRegexToken('YYYYYY', match1to6, match6);
  	  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  	  addParseToken('YYYY', function (input, array) {
  	    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  	  });
  	  addParseToken('YY', function (input, array) {
  	    array[YEAR] = hooks.parseTwoDigitYear(input);
  	  });
  	  addParseToken('Y', function (input, array) {
  	    array[YEAR] = parseInt(input, 10);
  	  });

  	  // HELPERS

  	  function daysInYear(year) {
  	    return isLeapYear(year) ? 366 : 365;
  	  }

  	  // HOOKS

  	  hooks.parseTwoDigitYear = function (input) {
  	    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  	  };

  	  // MOMENTS

  	  var getSetYear = makeGetSet('FullYear', true);
  	  function getIsLeapYear() {
  	    return isLeapYear(this.year());
  	  }
  	  function createDate(y, m, d, h, M, s, ms) {
  	    // can't just apply() to create a date:
  	    // https://stackoverflow.com/q/181348
  	    var date;
  	    // the date constructor remaps years 0-99 to 1900-1999
  	    if (y < 100 && y >= 0) {
  	      // preserve leap years using a full 400 year cycle, then reset
  	      date = new Date(y + 400, m, d, h, M, s, ms);
  	      if (isFinite(date.getFullYear())) {
  	        date.setFullYear(y);
  	      }
  	    } else {
  	      date = new Date(y, m, d, h, M, s, ms);
  	    }
  	    return date;
  	  }
  	  function createUTCDate(y) {
  	    var date, args;
  	    // the Date.UTC function remaps years 0-99 to 1900-1999
  	    if (y < 100 && y >= 0) {
  	      args = Array.prototype.slice.call(arguments);
  	      // preserve leap years using a full 400 year cycle, then reset
  	      args[0] = y + 400;
  	      date = new Date(Date.UTC.apply(null, args));
  	      if (isFinite(date.getUTCFullYear())) {
  	        date.setUTCFullYear(y);
  	      }
  	    } else {
  	      date = new Date(Date.UTC.apply(null, arguments));
  	    }
  	    return date;
  	  }

  	  // start-of-first-week - start-of-year
  	  function firstWeekOffset(year, dow, doy) {
  	    var
  	      // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  	      fwd = 7 + dow - doy,
  	      // first-week day local weekday -- which local weekday is fwd
  	      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  	    return -fwdlw + fwd - 1;
  	  }

  	  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  	  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  	    var localWeekday = (7 + weekday - dow) % 7,
  	      weekOffset = firstWeekOffset(year, dow, doy),
  	      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
  	      resYear,
  	      resDayOfYear;
  	    if (dayOfYear <= 0) {
  	      resYear = year - 1;
  	      resDayOfYear = daysInYear(resYear) + dayOfYear;
  	    } else if (dayOfYear > daysInYear(year)) {
  	      resYear = year + 1;
  	      resDayOfYear = dayOfYear - daysInYear(year);
  	    } else {
  	      resYear = year;
  	      resDayOfYear = dayOfYear;
  	    }
  	    return {
  	      year: resYear,
  	      dayOfYear: resDayOfYear
  	    };
  	  }
  	  function weekOfYear(mom, dow, doy) {
  	    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
  	      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
  	      resWeek,
  	      resYear;
  	    if (week < 1) {
  	      resYear = mom.year() - 1;
  	      resWeek = week + weeksInYear(resYear, dow, doy);
  	    } else if (week > weeksInYear(mom.year(), dow, doy)) {
  	      resWeek = week - weeksInYear(mom.year(), dow, doy);
  	      resYear = mom.year() + 1;
  	    } else {
  	      resYear = mom.year();
  	      resWeek = week;
  	    }
  	    return {
  	      week: resWeek,
  	      year: resYear
  	    };
  	  }
  	  function weeksInYear(year, dow, doy) {
  	    var weekOffset = firstWeekOffset(year, dow, doy),
  	      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  	    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  	  }

  	  // FORMATTING

  	  addFormatToken('w', ['ww', 2], 'wo', 'week');
  	  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  	  // ALIASES

  	  addUnitAlias('week', 'w');
  	  addUnitAlias('isoWeek', 'W');

  	  // PRIORITIES

  	  addUnitPriority('week', 5);
  	  addUnitPriority('isoWeek', 5);

  	  // PARSING

  	  addRegexToken('w', match1to2);
  	  addRegexToken('ww', match1to2, match2);
  	  addRegexToken('W', match1to2);
  	  addRegexToken('WW', match1to2, match2);
  	  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
  	    week[token.substr(0, 1)] = toInt(input);
  	  });

  	  // HELPERS

  	  // LOCALES

  	  function localeWeek(mom) {
  	    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  	  }
  	  var defaultLocaleWeek = {
  	    dow: 0,
  	    // Sunday is the first day of the week.
  	    doy: 6 // The week that contains Jan 6th is the first week of the year.
  	  };

  	  function localeFirstDayOfWeek() {
  	    return this._week.dow;
  	  }
  	  function localeFirstDayOfYear() {
  	    return this._week.doy;
  	  }

  	  // MOMENTS

  	  function getSetWeek(input) {
  	    var week = this.localeData().week(this);
  	    return input == null ? week : this.add((input - week) * 7, 'd');
  	  }
  	  function getSetISOWeek(input) {
  	    var week = weekOfYear(this, 1, 4).week;
  	    return input == null ? week : this.add((input - week) * 7, 'd');
  	  }

  	  // FORMATTING

  	  addFormatToken('d', 0, 'do', 'day');
  	  addFormatToken('dd', 0, 0, function (format) {
  	    return this.localeData().weekdaysMin(this, format);
  	  });
  	  addFormatToken('ddd', 0, 0, function (format) {
  	    return this.localeData().weekdaysShort(this, format);
  	  });
  	  addFormatToken('dddd', 0, 0, function (format) {
  	    return this.localeData().weekdays(this, format);
  	  });
  	  addFormatToken('e', 0, 0, 'weekday');
  	  addFormatToken('E', 0, 0, 'isoWeekday');

  	  // ALIASES

  	  addUnitAlias('day', 'd');
  	  addUnitAlias('weekday', 'e');
  	  addUnitAlias('isoWeekday', 'E');

  	  // PRIORITY
  	  addUnitPriority('day', 11);
  	  addUnitPriority('weekday', 11);
  	  addUnitPriority('isoWeekday', 11);

  	  // PARSING

  	  addRegexToken('d', match1to2);
  	  addRegexToken('e', match1to2);
  	  addRegexToken('E', match1to2);
  	  addRegexToken('dd', function (isStrict, locale) {
  	    return locale.weekdaysMinRegex(isStrict);
  	  });
  	  addRegexToken('ddd', function (isStrict, locale) {
  	    return locale.weekdaysShortRegex(isStrict);
  	  });
  	  addRegexToken('dddd', function (isStrict, locale) {
  	    return locale.weekdaysRegex(isStrict);
  	  });
  	  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
  	    var weekday = config._locale.weekdaysParse(input, token, config._strict);
  	    // if we didn't get a weekday name, mark the date as invalid
  	    if (weekday != null) {
  	      week.d = weekday;
  	    } else {
  	      getParsingFlags(config).invalidWeekday = input;
  	    }
  	  });
  	  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
  	    week[token] = toInt(input);
  	  });

  	  // HELPERS

  	  function parseWeekday(input, locale) {
  	    if (typeof input !== 'string') {
  	      return input;
  	    }
  	    if (!isNaN(input)) {
  	      return parseInt(input, 10);
  	    }
  	    input = locale.weekdaysParse(input);
  	    if (typeof input === 'number') {
  	      return input;
  	    }
  	    return null;
  	  }
  	  function parseIsoWeekday(input, locale) {
  	    if (typeof input === 'string') {
  	      return locale.weekdaysParse(input) % 7 || 7;
  	    }
  	    return isNaN(input) ? null : input;
  	  }

  	  // LOCALES
  	  function shiftWeekdays(ws, n) {
  	    return ws.slice(n, 7).concat(ws.slice(0, n));
  	  }
  	  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  	    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  	    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  	    defaultWeekdaysRegex = matchWord,
  	    defaultWeekdaysShortRegex = matchWord,
  	    defaultWeekdaysMinRegex = matchWord;
  	  function localeWeekdays(m, format) {
  	    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
  	    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  	  }
  	  function localeWeekdaysShort(m) {
  	    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  	  }
  	  function localeWeekdaysMin(m) {
  	    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  	  }
  	  function handleStrictParse$1(weekdayName, format, strict) {
  	    var i,
  	      ii,
  	      mom,
  	      llc = weekdayName.toLocaleLowerCase();
  	    if (!this._weekdaysParse) {
  	      this._weekdaysParse = [];
  	      this._shortWeekdaysParse = [];
  	      this._minWeekdaysParse = [];
  	      for (i = 0; i < 7; ++i) {
  	        mom = createUTC([2000, 1]).day(i);
  	        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
  	        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
  	        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
  	      }
  	    }
  	    if (strict) {
  	      if (format === 'dddd') {
  	        ii = indexOf.call(this._weekdaysParse, llc);
  	        return ii !== -1 ? ii : null;
  	      } else if (format === 'ddd') {
  	        ii = indexOf.call(this._shortWeekdaysParse, llc);
  	        return ii !== -1 ? ii : null;
  	      } else {
  	        ii = indexOf.call(this._minWeekdaysParse, llc);
  	        return ii !== -1 ? ii : null;
  	      }
  	    } else {
  	      if (format === 'dddd') {
  	        ii = indexOf.call(this._weekdaysParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._shortWeekdaysParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._minWeekdaysParse, llc);
  	        return ii !== -1 ? ii : null;
  	      } else if (format === 'ddd') {
  	        ii = indexOf.call(this._shortWeekdaysParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._weekdaysParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._minWeekdaysParse, llc);
  	        return ii !== -1 ? ii : null;
  	      } else {
  	        ii = indexOf.call(this._minWeekdaysParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._weekdaysParse, llc);
  	        if (ii !== -1) {
  	          return ii;
  	        }
  	        ii = indexOf.call(this._shortWeekdaysParse, llc);
  	        return ii !== -1 ? ii : null;
  	      }
  	    }
  	  }
  	  function localeWeekdaysParse(weekdayName, format, strict) {
  	    var i, mom, regex;
  	    if (this._weekdaysParseExact) {
  	      return handleStrictParse$1.call(this, weekdayName, format, strict);
  	    }
  	    if (!this._weekdaysParse) {
  	      this._weekdaysParse = [];
  	      this._minWeekdaysParse = [];
  	      this._shortWeekdaysParse = [];
  	      this._fullWeekdaysParse = [];
  	    }
  	    for (i = 0; i < 7; i++) {
  	      // make the regex if we don't have it already

  	      mom = createUTC([2000, 1]).day(i);
  	      if (strict && !this._fullWeekdaysParse[i]) {
  	        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
  	        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
  	        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
  	      }
  	      if (!this._weekdaysParse[i]) {
  	        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
  	        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
  	      }
  	      // test the regex
  	      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
  	        return i;
  	      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
  	        return i;
  	      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
  	        return i;
  	      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
  	        return i;
  	      }
  	    }
  	  }

  	  // MOMENTS

  	  function getSetDayOfWeek(input) {
  	    if (!this.isValid()) {
  	      return input != null ? this : NaN;
  	    }
  	    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  	    if (input != null) {
  	      input = parseWeekday(input, this.localeData());
  	      return this.add(input - day, 'd');
  	    } else {
  	      return day;
  	    }
  	  }
  	  function getSetLocaleDayOfWeek(input) {
  	    if (!this.isValid()) {
  	      return input != null ? this : NaN;
  	    }
  	    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  	    return input == null ? weekday : this.add(input - weekday, 'd');
  	  }
  	  function getSetISODayOfWeek(input) {
  	    if (!this.isValid()) {
  	      return input != null ? this : NaN;
  	    }

  	    // behaves the same as moment#day except
  	    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
  	    // as a setter, sunday should belong to the previous week.

  	    if (input != null) {
  	      var weekday = parseIsoWeekday(input, this.localeData());
  	      return this.day(this.day() % 7 ? weekday : weekday - 7);
  	    } else {
  	      return this.day() || 7;
  	    }
  	  }
  	  function weekdaysRegex(isStrict) {
  	    if (this._weekdaysParseExact) {
  	      if (!hasOwnProp(this, '_weekdaysRegex')) {
  	        computeWeekdaysParse.call(this);
  	      }
  	      if (isStrict) {
  	        return this._weekdaysStrictRegex;
  	      } else {
  	        return this._weekdaysRegex;
  	      }
  	    } else {
  	      if (!hasOwnProp(this, '_weekdaysRegex')) {
  	        this._weekdaysRegex = defaultWeekdaysRegex;
  	      }
  	      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  	    }
  	  }
  	  function weekdaysShortRegex(isStrict) {
  	    if (this._weekdaysParseExact) {
  	      if (!hasOwnProp(this, '_weekdaysRegex')) {
  	        computeWeekdaysParse.call(this);
  	      }
  	      if (isStrict) {
  	        return this._weekdaysShortStrictRegex;
  	      } else {
  	        return this._weekdaysShortRegex;
  	      }
  	    } else {
  	      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
  	        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
  	      }
  	      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  	    }
  	  }
  	  function weekdaysMinRegex(isStrict) {
  	    if (this._weekdaysParseExact) {
  	      if (!hasOwnProp(this, '_weekdaysRegex')) {
  	        computeWeekdaysParse.call(this);
  	      }
  	      if (isStrict) {
  	        return this._weekdaysMinStrictRegex;
  	      } else {
  	        return this._weekdaysMinRegex;
  	      }
  	    } else {
  	      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
  	        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
  	      }
  	      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  	    }
  	  }
  	  function computeWeekdaysParse() {
  	    function cmpLenRev(a, b) {
  	      return b.length - a.length;
  	    }
  	    var minPieces = [],
  	      shortPieces = [],
  	      longPieces = [],
  	      mixedPieces = [],
  	      i,
  	      mom,
  	      minp,
  	      shortp,
  	      longp;
  	    for (i = 0; i < 7; i++) {
  	      // make the regex if we don't have it already
  	      mom = createUTC([2000, 1]).day(i);
  	      minp = regexEscape(this.weekdaysMin(mom, ''));
  	      shortp = regexEscape(this.weekdaysShort(mom, ''));
  	      longp = regexEscape(this.weekdays(mom, ''));
  	      minPieces.push(minp);
  	      shortPieces.push(shortp);
  	      longPieces.push(longp);
  	      mixedPieces.push(minp);
  	      mixedPieces.push(shortp);
  	      mixedPieces.push(longp);
  	    }
  	    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
  	    // will match the longer piece.
  	    minPieces.sort(cmpLenRev);
  	    shortPieces.sort(cmpLenRev);
  	    longPieces.sort(cmpLenRev);
  	    mixedPieces.sort(cmpLenRev);
  	    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  	    this._weekdaysShortRegex = this._weekdaysRegex;
  	    this._weekdaysMinRegex = this._weekdaysRegex;
  	    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  	    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  	    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  	  }

  	  // FORMATTING

  	  function hFormat() {
  	    return this.hours() % 12 || 12;
  	  }
  	  function kFormat() {
  	    return this.hours() || 24;
  	  }
  	  addFormatToken('H', ['HH', 2], 0, 'hour');
  	  addFormatToken('h', ['hh', 2], 0, hFormat);
  	  addFormatToken('k', ['kk', 2], 0, kFormat);
  	  addFormatToken('hmm', 0, 0, function () {
  	    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  	  });
  	  addFormatToken('hmmss', 0, 0, function () {
  	    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  	  });
  	  addFormatToken('Hmm', 0, 0, function () {
  	    return '' + this.hours() + zeroFill(this.minutes(), 2);
  	  });
  	  addFormatToken('Hmmss', 0, 0, function () {
  	    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  	  });
  	  function meridiem(token, lowercase) {
  	    addFormatToken(token, 0, 0, function () {
  	      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  	    });
  	  }
  	  meridiem('a', true);
  	  meridiem('A', false);

  	  // ALIASES

  	  addUnitAlias('hour', 'h');

  	  // PRIORITY
  	  addUnitPriority('hour', 13);

  	  // PARSING

  	  function matchMeridiem(isStrict, locale) {
  	    return locale._meridiemParse;
  	  }
  	  addRegexToken('a', matchMeridiem);
  	  addRegexToken('A', matchMeridiem);
  	  addRegexToken('H', match1to2);
  	  addRegexToken('h', match1to2);
  	  addRegexToken('k', match1to2);
  	  addRegexToken('HH', match1to2, match2);
  	  addRegexToken('hh', match1to2, match2);
  	  addRegexToken('kk', match1to2, match2);
  	  addRegexToken('hmm', match3to4);
  	  addRegexToken('hmmss', match5to6);
  	  addRegexToken('Hmm', match3to4);
  	  addRegexToken('Hmmss', match5to6);
  	  addParseToken(['H', 'HH'], HOUR);
  	  addParseToken(['k', 'kk'], function (input, array, config) {
  	    var kInput = toInt(input);
  	    array[HOUR] = kInput === 24 ? 0 : kInput;
  	  });
  	  addParseToken(['a', 'A'], function (input, array, config) {
  	    config._isPm = config._locale.isPM(input);
  	    config._meridiem = input;
  	  });
  	  addParseToken(['h', 'hh'], function (input, array, config) {
  	    array[HOUR] = toInt(input);
  	    getParsingFlags(config).bigHour = true;
  	  });
  	  addParseToken('hmm', function (input, array, config) {
  	    var pos = input.length - 2;
  	    array[HOUR] = toInt(input.substr(0, pos));
  	    array[MINUTE] = toInt(input.substr(pos));
  	    getParsingFlags(config).bigHour = true;
  	  });
  	  addParseToken('hmmss', function (input, array, config) {
  	    var pos1 = input.length - 4,
  	      pos2 = input.length - 2;
  	    array[HOUR] = toInt(input.substr(0, pos1));
  	    array[MINUTE] = toInt(input.substr(pos1, 2));
  	    array[SECOND] = toInt(input.substr(pos2));
  	    getParsingFlags(config).bigHour = true;
  	  });
  	  addParseToken('Hmm', function (input, array, config) {
  	    var pos = input.length - 2;
  	    array[HOUR] = toInt(input.substr(0, pos));
  	    array[MINUTE] = toInt(input.substr(pos));
  	  });
  	  addParseToken('Hmmss', function (input, array, config) {
  	    var pos1 = input.length - 4,
  	      pos2 = input.length - 2;
  	    array[HOUR] = toInt(input.substr(0, pos1));
  	    array[MINUTE] = toInt(input.substr(pos1, 2));
  	    array[SECOND] = toInt(input.substr(pos2));
  	  });

  	  // LOCALES

  	  function localeIsPM(input) {
  	    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
  	    // Using charAt should be more compatible.
  	    return (input + '').toLowerCase().charAt(0) === 'p';
  	  }
  	  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
  	    // Setting the hour should keep the time, because the user explicitly
  	    // specified which hour they want. So trying to maintain the same hour (in
  	    // a new timezone) makes sense. Adding/subtracting hours does not follow
  	    // this rule.
  	    getSetHour = makeGetSet('Hours', true);
  	  function localeMeridiem(hours, minutes, isLower) {
  	    if (hours > 11) {
  	      return isLower ? 'pm' : 'PM';
  	    } else {
  	      return isLower ? 'am' : 'AM';
  	    }
  	  }
  	  var baseConfig = {
  	    calendar: defaultCalendar,
  	    longDateFormat: defaultLongDateFormat,
  	    invalidDate: defaultInvalidDate,
  	    ordinal: defaultOrdinal,
  	    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  	    relativeTime: defaultRelativeTime,
  	    months: defaultLocaleMonths,
  	    monthsShort: defaultLocaleMonthsShort,
  	    week: defaultLocaleWeek,
  	    weekdays: defaultLocaleWeekdays,
  	    weekdaysMin: defaultLocaleWeekdaysMin,
  	    weekdaysShort: defaultLocaleWeekdaysShort,
  	    meridiemParse: defaultLocaleMeridiemParse
  	  };

  	  // internal storage for locale config files
  	  var locales = {},
  	    localeFamilies = {},
  	    globalLocale;
  	  function commonPrefix(arr1, arr2) {
  	    var i,
  	      minl = Math.min(arr1.length, arr2.length);
  	    for (i = 0; i < minl; i += 1) {
  	      if (arr1[i] !== arr2[i]) {
  	        return i;
  	      }
  	    }
  	    return minl;
  	  }
  	  function normalizeLocale(key) {
  	    return key ? key.toLowerCase().replace('_', '-') : key;
  	  }

  	  // pick the locale from the array
  	  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  	  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  	  function chooseLocale(names) {
  	    var i = 0,
  	      j,
  	      next,
  	      locale,
  	      split;
  	    while (i < names.length) {
  	      split = normalizeLocale(names[i]).split('-');
  	      j = split.length;
  	      next = normalizeLocale(names[i + 1]);
  	      next = next ? next.split('-') : null;
  	      while (j > 0) {
  	        locale = loadLocale(split.slice(0, j).join('-'));
  	        if (locale) {
  	          return locale;
  	        }
  	        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
  	          //the next array item is better than a shallower substring of this one
  	          break;
  	        }
  	        j--;
  	      }
  	      i++;
  	    }
  	    return globalLocale;
  	  }
  	  function isLocaleNameSane(name) {
  	    // Prevent names that look like filesystem paths, i.e contain '/' or '\'
  	    return name.match('^[^/\\\\]*$') != null;
  	  }
  	  function loadLocale(name) {
  	    var oldLocale = null,
  	      aliasedRequire;
  	    // TODO: Find a better way to register and load all the locales in Node
  	    if (locales[name] === undefined && 'object' !== 'undefined' && module && module.exports && isLocaleNameSane(name)) {
  	      try {
  	        oldLocale = globalLocale._abbr;
  	        aliasedRequire = commonjsRequire;
  	        aliasedRequire('./locale/' + name);
  	        getSetGlobalLocale(oldLocale);
  	      } catch (e) {
  	        // mark as not found to avoid repeating expensive file require call causing high CPU
  	        // when trying to find en-US, en_US, en-us for every format call
  	        locales[name] = null; // null means not found
  	      }
  	    }

  	    return locales[name];
  	  }

  	  // This function will load locale and then set the global locale.  If
  	  // no arguments are passed in, it will simply return the current global
  	  // locale key.
  	  function getSetGlobalLocale(key, values) {
  	    var data;
  	    if (key) {
  	      if (isUndefined(values)) {
  	        data = getLocale(key);
  	      } else {
  	        data = defineLocale(key, values);
  	      }
  	      if (data) {
  	        // moment.duration._locale = moment._locale = data;
  	        globalLocale = data;
  	      } else {
  	        if (typeof console !== 'undefined' && console.warn) {
  	          //warn user if arguments are passed but the locale could not be set
  	          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
  	        }
  	      }
  	    }
  	    return globalLocale._abbr;
  	  }
  	  function defineLocale(name, config) {
  	    if (config !== null) {
  	      var locale,
  	        parentConfig = baseConfig;
  	      config.abbr = name;
  	      if (locales[name] != null) {
  	        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
  	        parentConfig = locales[name]._config;
  	      } else if (config.parentLocale != null) {
  	        if (locales[config.parentLocale] != null) {
  	          parentConfig = locales[config.parentLocale]._config;
  	        } else {
  	          locale = loadLocale(config.parentLocale);
  	          if (locale != null) {
  	            parentConfig = locale._config;
  	          } else {
  	            if (!localeFamilies[config.parentLocale]) {
  	              localeFamilies[config.parentLocale] = [];
  	            }
  	            localeFamilies[config.parentLocale].push({
  	              name: name,
  	              config: config
  	            });
  	            return null;
  	          }
  	        }
  	      }
  	      locales[name] = new Locale(mergeConfigs(parentConfig, config));
  	      if (localeFamilies[name]) {
  	        localeFamilies[name].forEach(function (x) {
  	          defineLocale(x.name, x.config);
  	        });
  	      }

  	      // backwards compat for now: also set the locale
  	      // make sure we set the locale AFTER all child locales have been
  	      // created, so we won't end up with the child locale set.
  	      getSetGlobalLocale(name);
  	      return locales[name];
  	    } else {
  	      // useful for testing
  	      delete locales[name];
  	      return null;
  	    }
  	  }
  	  function updateLocale(name, config) {
  	    if (config != null) {
  	      var locale,
  	        tmpLocale,
  	        parentConfig = baseConfig;
  	      if (locales[name] != null && locales[name].parentLocale != null) {
  	        // Update existing child locale in-place to avoid memory-leaks
  	        locales[name].set(mergeConfigs(locales[name]._config, config));
  	      } else {
  	        // MERGE
  	        tmpLocale = loadLocale(name);
  	        if (tmpLocale != null) {
  	          parentConfig = tmpLocale._config;
  	        }
  	        config = mergeConfigs(parentConfig, config);
  	        if (tmpLocale == null) {
  	          // updateLocale is called for creating a new locale
  	          // Set abbr so it will have a name (getters return
  	          // undefined otherwise).
  	          config.abbr = name;
  	        }
  	        locale = new Locale(config);
  	        locale.parentLocale = locales[name];
  	        locales[name] = locale;
  	      }

  	      // backwards compat for now: also set the locale
  	      getSetGlobalLocale(name);
  	    } else {
  	      // pass null for config to unupdate, useful for tests
  	      if (locales[name] != null) {
  	        if (locales[name].parentLocale != null) {
  	          locales[name] = locales[name].parentLocale;
  	          if (name === getSetGlobalLocale()) {
  	            getSetGlobalLocale(name);
  	          }
  	        } else if (locales[name] != null) {
  	          delete locales[name];
  	        }
  	      }
  	    }
  	    return locales[name];
  	  }

  	  // returns locale data
  	  function getLocale(key) {
  	    var locale;
  	    if (key && key._locale && key._locale._abbr) {
  	      key = key._locale._abbr;
  	    }
  	    if (!key) {
  	      return globalLocale;
  	    }
  	    if (!isArray(key)) {
  	      //short-circuit everything else
  	      locale = loadLocale(key);
  	      if (locale) {
  	        return locale;
  	      }
  	      key = [key];
  	    }
  	    return chooseLocale(key);
  	  }
  	  function listLocales() {
  	    return keys(locales);
  	  }
  	  function checkOverflow(m) {
  	    var overflow,
  	      a = m._a;
  	    if (a && getParsingFlags(m).overflow === -2) {
  	      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
  	      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
  	        overflow = DATE;
  	      }
  	      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
  	        overflow = WEEK;
  	      }
  	      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
  	        overflow = WEEKDAY;
  	      }
  	      getParsingFlags(m).overflow = overflow;
  	    }
  	    return m;
  	  }

  	  // iso 8601 regex
  	  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  	  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  	    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  	    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
  	    isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
  	    // iso time formats and regexes
  	    isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
  	    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
  	    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  	    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  	    obsOffsets = {
  	      UT: 0,
  	      GMT: 0,
  	      EDT: -4 * 60,
  	      EST: -5 * 60,
  	      CDT: -5 * 60,
  	      CST: -6 * 60,
  	      MDT: -6 * 60,
  	      MST: -7 * 60,
  	      PDT: -7 * 60,
  	      PST: -8 * 60
  	    };

  	  // date from iso format
  	  function configFromISO(config) {
  	    var i,
  	      l,
  	      string = config._i,
  	      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
  	      allowTime,
  	      dateFormat,
  	      timeFormat,
  	      tzFormat,
  	      isoDatesLen = isoDates.length,
  	      isoTimesLen = isoTimes.length;
  	    if (match) {
  	      getParsingFlags(config).iso = true;
  	      for (i = 0, l = isoDatesLen; i < l; i++) {
  	        if (isoDates[i][1].exec(match[1])) {
  	          dateFormat = isoDates[i][0];
  	          allowTime = isoDates[i][2] !== false;
  	          break;
  	        }
  	      }
  	      if (dateFormat == null) {
  	        config._isValid = false;
  	        return;
  	      }
  	      if (match[3]) {
  	        for (i = 0, l = isoTimesLen; i < l; i++) {
  	          if (isoTimes[i][1].exec(match[3])) {
  	            // match[2] should be 'T' or space
  	            timeFormat = (match[2] || ' ') + isoTimes[i][0];
  	            break;
  	          }
  	        }
  	        if (timeFormat == null) {
  	          config._isValid = false;
  	          return;
  	        }
  	      }
  	      if (!allowTime && timeFormat != null) {
  	        config._isValid = false;
  	        return;
  	      }
  	      if (match[4]) {
  	        if (tzRegex.exec(match[4])) {
  	          tzFormat = 'Z';
  	        } else {
  	          config._isValid = false;
  	          return;
  	        }
  	      }
  	      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
  	      configFromStringAndFormat(config);
  	    } else {
  	      config._isValid = false;
  	    }
  	  }
  	  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  	    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];
  	    if (secondStr) {
  	      result.push(parseInt(secondStr, 10));
  	    }
  	    return result;
  	  }
  	  function untruncateYear(yearStr) {
  	    var year = parseInt(yearStr, 10);
  	    if (year <= 49) {
  	      return 2000 + year;
  	    } else if (year <= 999) {
  	      return 1900 + year;
  	    }
  	    return year;
  	  }
  	  function preprocessRFC2822(s) {
  	    // Remove comments and folding whitespace and replace multiple-spaces with a single space
  	    return s.replace(/\([^()]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  	  }
  	  function checkWeekday(weekdayStr, parsedInput, config) {
  	    if (weekdayStr) {
  	      // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
  	      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
  	        weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
  	      if (weekdayProvided !== weekdayActual) {
  	        getParsingFlags(config).weekdayMismatch = true;
  	        config._isValid = false;
  	        return false;
  	      }
  	    }
  	    return true;
  	  }
  	  function calculateOffset(obsOffset, militaryOffset, numOffset) {
  	    if (obsOffset) {
  	      return obsOffsets[obsOffset];
  	    } else if (militaryOffset) {
  	      // the only allowed military tz is Z
  	      return 0;
  	    } else {
  	      var hm = parseInt(numOffset, 10),
  	        m = hm % 100,
  	        h = (hm - m) / 100;
  	      return h * 60 + m;
  	    }
  	  }

  	  // date and time from ref 2822 format
  	  function configFromRFC2822(config) {
  	    var match = rfc2822.exec(preprocessRFC2822(config._i)),
  	      parsedArray;
  	    if (match) {
  	      parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
  	      if (!checkWeekday(match[1], parsedArray, config)) {
  	        return;
  	      }
  	      config._a = parsedArray;
  	      config._tzm = calculateOffset(match[8], match[9], match[10]);
  	      config._d = createUTCDate.apply(null, config._a);
  	      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  	      getParsingFlags(config).rfc2822 = true;
  	    } else {
  	      config._isValid = false;
  	    }
  	  }

  	  // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
  	  function configFromString(config) {
  	    var matched = aspNetJsonRegex.exec(config._i);
  	    if (matched !== null) {
  	      config._d = new Date(+matched[1]);
  	      return;
  	    }
  	    configFromISO(config);
  	    if (config._isValid === false) {
  	      delete config._isValid;
  	    } else {
  	      return;
  	    }
  	    configFromRFC2822(config);
  	    if (config._isValid === false) {
  	      delete config._isValid;
  	    } else {
  	      return;
  	    }
  	    if (config._strict) {
  	      config._isValid = false;
  	    } else {
  	      // Final attempt, use Input Fallback
  	      hooks.createFromInputFallback(config);
  	    }
  	  }
  	  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
  	    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  	  });

  	  // Pick the first defined of two or three arguments.
  	  function defaults(a, b, c) {
  	    if (a != null) {
  	      return a;
  	    }
  	    if (b != null) {
  	      return b;
  	    }
  	    return c;
  	  }
  	  function currentDateArray(config) {
  	    // hooks is actually the exported moment object
  	    var nowValue = new Date(hooks.now());
  	    if (config._useUTC) {
  	      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
  	    }
  	    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  	  }

  	  // convert an array to a date.
  	  // the array should mirror the parameters below
  	  // note: all values past the year are optional and will default to the lowest possible value.
  	  // [year, month, day , hour, minute, second, millisecond]
  	  function configFromArray(config) {
  	    var i,
  	      date,
  	      input = [],
  	      currentDate,
  	      expectedWeekday,
  	      yearToUse;
  	    if (config._d) {
  	      return;
  	    }
  	    currentDate = currentDateArray(config);

  	    //compute day of the year from weeks and weekdays
  	    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
  	      dayOfYearFromWeekInfo(config);
  	    }

  	    //if the day of the year is set, figure out what it is
  	    if (config._dayOfYear != null) {
  	      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
  	      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
  	        getParsingFlags(config)._overflowDayOfYear = true;
  	      }
  	      date = createUTCDate(yearToUse, 0, config._dayOfYear);
  	      config._a[MONTH] = date.getUTCMonth();
  	      config._a[DATE] = date.getUTCDate();
  	    }

  	    // Default to current date.
  	    // * if no year, month, day of month are given, default to today
  	    // * if day of month is given, default month and year
  	    // * if month is given, default only year
  	    // * if year is given, don't default anything
  	    for (i = 0; i < 3 && config._a[i] == null; ++i) {
  	      config._a[i] = input[i] = currentDate[i];
  	    }

  	    // Zero out whatever was not defaulted, including time
  	    for (; i < 7; i++) {
  	      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  	    }

  	    // Check for 24:00:00.000
  	    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
  	      config._nextDay = true;
  	      config._a[HOUR] = 0;
  	    }
  	    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  	    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

  	    // Apply timezone offset from input. The actual utcOffset can be changed
  	    // with parseZone.
  	    if (config._tzm != null) {
  	      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  	    }
  	    if (config._nextDay) {
  	      config._a[HOUR] = 24;
  	    }

  	    // check for mismatching day of week
  	    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
  	      getParsingFlags(config).weekdayMismatch = true;
  	    }
  	  }
  	  function dayOfYearFromWeekInfo(config) {
  	    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  	    w = config._w;
  	    if (w.GG != null || w.W != null || w.E != null) {
  	      dow = 1;
  	      doy = 4;

  	      // TODO: We need to take the current isoWeekYear, but that depends on
  	      // how we interpret now (local, utc, fixed offset). So create
  	      // a now version of current config (take local/utc/offset flags, and
  	      // create now).
  	      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
  	      week = defaults(w.W, 1);
  	      weekday = defaults(w.E, 1);
  	      if (weekday < 1 || weekday > 7) {
  	        weekdayOverflow = true;
  	      }
  	    } else {
  	      dow = config._locale._week.dow;
  	      doy = config._locale._week.doy;
  	      curWeek = weekOfYear(createLocal(), dow, doy);
  	      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

  	      // Default to current week.
  	      week = defaults(w.w, curWeek.week);
  	      if (w.d != null) {
  	        // weekday -- low day numbers are considered next week
  	        weekday = w.d;
  	        if (weekday < 0 || weekday > 6) {
  	          weekdayOverflow = true;
  	        }
  	      } else if (w.e != null) {
  	        // local weekday -- counting starts from beginning of week
  	        weekday = w.e + dow;
  	        if (w.e < 0 || w.e > 6) {
  	          weekdayOverflow = true;
  	        }
  	      } else {
  	        // default to beginning of week
  	        weekday = dow;
  	      }
  	    }
  	    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
  	      getParsingFlags(config)._overflowWeeks = true;
  	    } else if (weekdayOverflow != null) {
  	      getParsingFlags(config)._overflowWeekday = true;
  	    } else {
  	      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
  	      config._a[YEAR] = temp.year;
  	      config._dayOfYear = temp.dayOfYear;
  	    }
  	  }

  	  // constant that refers to the ISO standard
  	  hooks.ISO_8601 = function () {};

  	  // constant that refers to the RFC 2822 form
  	  hooks.RFC_2822 = function () {};

  	  // date from string and format string
  	  function configFromStringAndFormat(config) {
  	    // TODO: Move this to another part of the creation flow to prevent circular deps
  	    if (config._f === hooks.ISO_8601) {
  	      configFromISO(config);
  	      return;
  	    }
  	    if (config._f === hooks.RFC_2822) {
  	      configFromRFC2822(config);
  	      return;
  	    }
  	    config._a = [];
  	    getParsingFlags(config).empty = true;

  	    // This array is used to make a Date, either with `new Date` or `Date.UTC`
  	    var string = '' + config._i,
  	      i,
  	      parsedInput,
  	      tokens,
  	      token,
  	      skipped,
  	      stringLength = string.length,
  	      totalParsedInputLength = 0,
  	      era,
  	      tokenLen;
  	    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  	    tokenLen = tokens.length;
  	    for (i = 0; i < tokenLen; i++) {
  	      token = tokens[i];
  	      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
  	      if (parsedInput) {
  	        skipped = string.substr(0, string.indexOf(parsedInput));
  	        if (skipped.length > 0) {
  	          getParsingFlags(config).unusedInput.push(skipped);
  	        }
  	        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
  	        totalParsedInputLength += parsedInput.length;
  	      }
  	      // don't parse if it's not a known token
  	      if (formatTokenFunctions[token]) {
  	        if (parsedInput) {
  	          getParsingFlags(config).empty = false;
  	        } else {
  	          getParsingFlags(config).unusedTokens.push(token);
  	        }
  	        addTimeToArrayFromToken(token, parsedInput, config);
  	      } else if (config._strict && !parsedInput) {
  	        getParsingFlags(config).unusedTokens.push(token);
  	      }
  	    }

  	    // add remaining unparsed input length to the string
  	    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  	    if (string.length > 0) {
  	      getParsingFlags(config).unusedInput.push(string);
  	    }

  	    // clear _12h flag if hour is <= 12
  	    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
  	      getParsingFlags(config).bigHour = undefined;
  	    }
  	    getParsingFlags(config).parsedDateParts = config._a.slice(0);
  	    getParsingFlags(config).meridiem = config._meridiem;
  	    // handle meridiem
  	    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

  	    // handle era
  	    era = getParsingFlags(config).era;
  	    if (era !== null) {
  	      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  	    }
  	    configFromArray(config);
  	    checkOverflow(config);
  	  }
  	  function meridiemFixWrap(locale, hour, meridiem) {
  	    var isPm;
  	    if (meridiem == null) {
  	      // nothing to do
  	      return hour;
  	    }
  	    if (locale.meridiemHour != null) {
  	      return locale.meridiemHour(hour, meridiem);
  	    } else if (locale.isPM != null) {
  	      // Fallback
  	      isPm = locale.isPM(meridiem);
  	      if (isPm && hour < 12) {
  	        hour += 12;
  	      }
  	      if (!isPm && hour === 12) {
  	        hour = 0;
  	      }
  	      return hour;
  	    } else {
  	      // this is not supposed to happen
  	      return hour;
  	    }
  	  }

  	  // date from string and array of format strings
  	  function configFromStringAndArray(config) {
  	    var tempConfig,
  	      bestMoment,
  	      scoreToBeat,
  	      i,
  	      currentScore,
  	      validFormatFound,
  	      bestFormatIsValid = false,
  	      configfLen = config._f.length;
  	    if (configfLen === 0) {
  	      getParsingFlags(config).invalidFormat = true;
  	      config._d = new Date(NaN);
  	      return;
  	    }
  	    for (i = 0; i < configfLen; i++) {
  	      currentScore = 0;
  	      validFormatFound = false;
  	      tempConfig = copyConfig({}, config);
  	      if (config._useUTC != null) {
  	        tempConfig._useUTC = config._useUTC;
  	      }
  	      tempConfig._f = config._f[i];
  	      configFromStringAndFormat(tempConfig);
  	      if (isValid(tempConfig)) {
  	        validFormatFound = true;
  	      }

  	      // if there is any input that was not parsed add a penalty for that format
  	      currentScore += getParsingFlags(tempConfig).charsLeftOver;

  	      //or tokens
  	      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
  	      getParsingFlags(tempConfig).score = currentScore;
  	      if (!bestFormatIsValid) {
  	        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
  	          scoreToBeat = currentScore;
  	          bestMoment = tempConfig;
  	          if (validFormatFound) {
  	            bestFormatIsValid = true;
  	          }
  	        }
  	      } else {
  	        if (currentScore < scoreToBeat) {
  	          scoreToBeat = currentScore;
  	          bestMoment = tempConfig;
  	        }
  	      }
  	    }
  	    extend(config, bestMoment || tempConfig);
  	  }
  	  function configFromObject(config) {
  	    if (config._d) {
  	      return;
  	    }
  	    var i = normalizeObjectUnits(config._i),
  	      dayOrDate = i.day === undefined ? i.date : i.day;
  	    config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
  	      return obj && parseInt(obj, 10);
  	    });
  	    configFromArray(config);
  	  }
  	  function createFromConfig(config) {
  	    var res = new Moment(checkOverflow(prepareConfig(config)));
  	    if (res._nextDay) {
  	      // Adding is smart enough around DST
  	      res.add(1, 'd');
  	      res._nextDay = undefined;
  	    }
  	    return res;
  	  }
  	  function prepareConfig(config) {
  	    var input = config._i,
  	      format = config._f;
  	    config._locale = config._locale || getLocale(config._l);
  	    if (input === null || format === undefined && input === '') {
  	      return createInvalid({
  	        nullInput: true
  	      });
  	    }
  	    if (typeof input === 'string') {
  	      config._i = input = config._locale.preparse(input);
  	    }
  	    if (isMoment(input)) {
  	      return new Moment(checkOverflow(input));
  	    } else if (isDate(input)) {
  	      config._d = input;
  	    } else if (isArray(format)) {
  	      configFromStringAndArray(config);
  	    } else if (format) {
  	      configFromStringAndFormat(config);
  	    } else {
  	      configFromInput(config);
  	    }
  	    if (!isValid(config)) {
  	      config._d = null;
  	    }
  	    return config;
  	  }
  	  function configFromInput(config) {
  	    var input = config._i;
  	    if (isUndefined(input)) {
  	      config._d = new Date(hooks.now());
  	    } else if (isDate(input)) {
  	      config._d = new Date(input.valueOf());
  	    } else if (typeof input === 'string') {
  	      configFromString(config);
  	    } else if (isArray(input)) {
  	      config._a = map(input.slice(0), function (obj) {
  	        return parseInt(obj, 10);
  	      });
  	      configFromArray(config);
  	    } else if (isObject(input)) {
  	      configFromObject(config);
  	    } else if (isNumber(input)) {
  	      // from milliseconds
  	      config._d = new Date(input);
  	    } else {
  	      hooks.createFromInputFallback(config);
  	    }
  	  }
  	  function createLocalOrUTC(input, format, locale, strict, isUTC) {
  	    var c = {};
  	    if (format === true || format === false) {
  	      strict = format;
  	      format = undefined;
  	    }
  	    if (locale === true || locale === false) {
  	      strict = locale;
  	      locale = undefined;
  	    }
  	    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
  	      input = undefined;
  	    }
  	    // object construction must be done this way.
  	    // https://github.com/moment/moment/issues/1423
  	    c._isAMomentObject = true;
  	    c._useUTC = c._isUTC = isUTC;
  	    c._l = locale;
  	    c._i = input;
  	    c._f = format;
  	    c._strict = strict;
  	    return createFromConfig(c);
  	  }
  	  function createLocal(input, format, locale, strict) {
  	    return createLocalOrUTC(input, format, locale, strict, false);
  	  }
  	  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
  	      var other = createLocal.apply(null, arguments);
  	      if (this.isValid() && other.isValid()) {
  	        return other < this ? this : other;
  	      } else {
  	        return createInvalid();
  	      }
  	    }),
  	    prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
  	      var other = createLocal.apply(null, arguments);
  	      if (this.isValid() && other.isValid()) {
  	        return other > this ? this : other;
  	      } else {
  	        return createInvalid();
  	      }
  	    });

  	  // Pick a moment m from moments so that m[fn](other) is true for all
  	  // other. This relies on the function fn to be transitive.
  	  //
  	  // moments should either be an array of moment objects or an array, whose
  	  // first element is an array of moment objects.
  	  function pickBy(fn, moments) {
  	    var res, i;
  	    if (moments.length === 1 && isArray(moments[0])) {
  	      moments = moments[0];
  	    }
  	    if (!moments.length) {
  	      return createLocal();
  	    }
  	    res = moments[0];
  	    for (i = 1; i < moments.length; ++i) {
  	      if (!moments[i].isValid() || moments[i][fn](res)) {
  	        res = moments[i];
  	      }
  	    }
  	    return res;
  	  }

  	  // TODO: Use [].sort instead?
  	  function min() {
  	    var args = [].slice.call(arguments, 0);
  	    return pickBy('isBefore', args);
  	  }
  	  function max() {
  	    var args = [].slice.call(arguments, 0);
  	    return pickBy('isAfter', args);
  	  }
  	  var now = function () {
  	    return Date.now ? Date.now() : +new Date();
  	  };
  	  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
  	  function isDurationValid(m) {
  	    var key,
  	      unitHasDecimal = false,
  	      i,
  	      orderLen = ordering.length;
  	    for (key in m) {
  	      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
  	        return false;
  	      }
  	    }
  	    for (i = 0; i < orderLen; ++i) {
  	      if (m[ordering[i]]) {
  	        if (unitHasDecimal) {
  	          return false; // only allow non-integers for smallest unit
  	        }

  	        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
  	          unitHasDecimal = true;
  	        }
  	      }
  	    }
  	    return true;
  	  }
  	  function isValid$1() {
  	    return this._isValid;
  	  }
  	  function createInvalid$1() {
  	    return createDuration(NaN);
  	  }
  	  function Duration(duration) {
  	    var normalizedInput = normalizeObjectUnits(duration),
  	      years = normalizedInput.year || 0,
  	      quarters = normalizedInput.quarter || 0,
  	      months = normalizedInput.month || 0,
  	      weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
  	      days = normalizedInput.day || 0,
  	      hours = normalizedInput.hour || 0,
  	      minutes = normalizedInput.minute || 0,
  	      seconds = normalizedInput.second || 0,
  	      milliseconds = normalizedInput.millisecond || 0;
  	    this._isValid = isDurationValid(normalizedInput);

  	    // representation for dateAddRemove
  	    this._milliseconds = +milliseconds + seconds * 1e3 +
  	    // 1000
  	    minutes * 6e4 +
  	    // 1000 * 60
  	    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
  	    // Because of dateAddRemove treats 24 hours as different from a
  	    // day when working around DST, we need to store them separately
  	    this._days = +days + weeks * 7;
  	    // It is impossible to translate months into days without knowing
  	    // which months you are are talking about, so we have to store
  	    // it separately.
  	    this._months = +months + quarters * 3 + years * 12;
  	    this._data = {};
  	    this._locale = getLocale();
  	    this._bubble();
  	  }
  	  function isDuration(obj) {
  	    return obj instanceof Duration;
  	  }
  	  function absRound(number) {
  	    if (number < 0) {
  	      return Math.round(-1 * number) * -1;
  	    } else {
  	      return Math.round(number);
  	    }
  	  }

  	  // compare two arrays, return the number of differences
  	  function compareArrays(array1, array2, dontConvert) {
  	    var len = Math.min(array1.length, array2.length),
  	      lengthDiff = Math.abs(array1.length - array2.length),
  	      diffs = 0,
  	      i;
  	    for (i = 0; i < len; i++) {
  	      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
  	        diffs++;
  	      }
  	    }
  	    return diffs + lengthDiff;
  	  }

  	  // FORMATTING

  	  function offset(token, separator) {
  	    addFormatToken(token, 0, 0, function () {
  	      var offset = this.utcOffset(),
  	        sign = '+';
  	      if (offset < 0) {
  	        offset = -offset;
  	        sign = '-';
  	      }
  	      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
  	    });
  	  }
  	  offset('Z', ':');
  	  offset('ZZ', '');

  	  // PARSING

  	  addRegexToken('Z', matchShortOffset);
  	  addRegexToken('ZZ', matchShortOffset);
  	  addParseToken(['Z', 'ZZ'], function (input, array, config) {
  	    config._useUTC = true;
  	    config._tzm = offsetFromString(matchShortOffset, input);
  	  });

  	  // HELPERS

  	  // timezone chunker
  	  // '+10:00' > ['10',  '00']
  	  // '-1530'  > ['-15', '30']
  	  var chunkOffset = /([\+\-]|\d\d)/gi;
  	  function offsetFromString(matcher, string) {
  	    var matches = (string || '').match(matcher),
  	      chunk,
  	      parts,
  	      minutes;
  	    if (matches === null) {
  	      return null;
  	    }
  	    chunk = matches[matches.length - 1] || [];
  	    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
  	    minutes = +(parts[1] * 60) + toInt(parts[2]);
  	    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  	  }

  	  // Return a moment from input, that is local/utc/zone equivalent to model.
  	  function cloneWithOffset(input, model) {
  	    var res, diff;
  	    if (model._isUTC) {
  	      res = model.clone();
  	      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
  	      // Use low-level api, because this fn is low-level api.
  	      res._d.setTime(res._d.valueOf() + diff);
  	      hooks.updateOffset(res, false);
  	      return res;
  	    } else {
  	      return createLocal(input).local();
  	    }
  	  }
  	  function getDateOffset(m) {
  	    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
  	    // https://github.com/moment/moment/pull/1871
  	    return -Math.round(m._d.getTimezoneOffset());
  	  }

  	  // HOOKS

  	  // This function will be called whenever a moment is mutated.
  	  // It is intended to keep the offset in sync with the timezone.
  	  hooks.updateOffset = function () {};

  	  // MOMENTS

  	  // keepLocalTime = true means only change the timezone, without
  	  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  	  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  	  // +0200, so we adjust the time as needed, to be valid.
  	  //
  	  // Keeping the time actually adds/subtracts (one hour)
  	  // from the actual represented time. That is why we call updateOffset
  	  // a second time. In case it wants us to change the offset again
  	  // _changeInProgress == true case, then we have to adjust, because
  	  // there is no such time in the given timezone.
  	  function getSetOffset(input, keepLocalTime, keepMinutes) {
  	    var offset = this._offset || 0,
  	      localAdjust;
  	    if (!this.isValid()) {
  	      return input != null ? this : NaN;
  	    }
  	    if (input != null) {
  	      if (typeof input === 'string') {
  	        input = offsetFromString(matchShortOffset, input);
  	        if (input === null) {
  	          return this;
  	        }
  	      } else if (Math.abs(input) < 16 && !keepMinutes) {
  	        input = input * 60;
  	      }
  	      if (!this._isUTC && keepLocalTime) {
  	        localAdjust = getDateOffset(this);
  	      }
  	      this._offset = input;
  	      this._isUTC = true;
  	      if (localAdjust != null) {
  	        this.add(localAdjust, 'm');
  	      }
  	      if (offset !== input) {
  	        if (!keepLocalTime || this._changeInProgress) {
  	          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
  	        } else if (!this._changeInProgress) {
  	          this._changeInProgress = true;
  	          hooks.updateOffset(this, true);
  	          this._changeInProgress = null;
  	        }
  	      }
  	      return this;
  	    } else {
  	      return this._isUTC ? offset : getDateOffset(this);
  	    }
  	  }
  	  function getSetZone(input, keepLocalTime) {
  	    if (input != null) {
  	      if (typeof input !== 'string') {
  	        input = -input;
  	      }
  	      this.utcOffset(input, keepLocalTime);
  	      return this;
  	    } else {
  	      return -this.utcOffset();
  	    }
  	  }
  	  function setOffsetToUTC(keepLocalTime) {
  	    return this.utcOffset(0, keepLocalTime);
  	  }
  	  function setOffsetToLocal(keepLocalTime) {
  	    if (this._isUTC) {
  	      this.utcOffset(0, keepLocalTime);
  	      this._isUTC = false;
  	      if (keepLocalTime) {
  	        this.subtract(getDateOffset(this), 'm');
  	      }
  	    }
  	    return this;
  	  }
  	  function setOffsetToParsedOffset() {
  	    if (this._tzm != null) {
  	      this.utcOffset(this._tzm, false, true);
  	    } else if (typeof this._i === 'string') {
  	      var tZone = offsetFromString(matchOffset, this._i);
  	      if (tZone != null) {
  	        this.utcOffset(tZone);
  	      } else {
  	        this.utcOffset(0, true);
  	      }
  	    }
  	    return this;
  	  }
  	  function hasAlignedHourOffset(input) {
  	    if (!this.isValid()) {
  	      return false;
  	    }
  	    input = input ? createLocal(input).utcOffset() : 0;
  	    return (this.utcOffset() - input) % 60 === 0;
  	  }
  	  function isDaylightSavingTime() {
  	    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  	  }
  	  function isDaylightSavingTimeShifted() {
  	    if (!isUndefined(this._isDSTShifted)) {
  	      return this._isDSTShifted;
  	    }
  	    var c = {},
  	      other;
  	    copyConfig(c, this);
  	    c = prepareConfig(c);
  	    if (c._a) {
  	      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
  	      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
  	    } else {
  	      this._isDSTShifted = false;
  	    }
  	    return this._isDSTShifted;
  	  }
  	  function isLocal() {
  	    return this.isValid() ? !this._isUTC : false;
  	  }
  	  function isUtcOffset() {
  	    return this.isValid() ? this._isUTC : false;
  	  }
  	  function isUtc() {
  	    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  	  }

  	  // ASP.NET json date format regex
  	  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  	    // and further modified to allow for strings containing both week and day
  	    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  	  function createDuration(input, key) {
  	    var duration = input,
  	      // matching against regexp is expensive, do it on demand
  	      match = null,
  	      sign,
  	      ret,
  	      diffRes;
  	    if (isDuration(input)) {
  	      duration = {
  	        ms: input._milliseconds,
  	        d: input._days,
  	        M: input._months
  	      };
  	    } else if (isNumber(input) || !isNaN(+input)) {
  	      duration = {};
  	      if (key) {
  	        duration[key] = +input;
  	      } else {
  	        duration.milliseconds = +input;
  	      }
  	    } else if (match = aspNetRegex.exec(input)) {
  	      sign = match[1] === '-' ? -1 : 1;
  	      duration = {
  	        y: 0,
  	        d: toInt(match[DATE]) * sign,
  	        h: toInt(match[HOUR]) * sign,
  	        m: toInt(match[MINUTE]) * sign,
  	        s: toInt(match[SECOND]) * sign,
  	        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
  	      };
  	    } else if (match = isoRegex.exec(input)) {
  	      sign = match[1] === '-' ? -1 : 1;
  	      duration = {
  	        y: parseIso(match[2], sign),
  	        M: parseIso(match[3], sign),
  	        w: parseIso(match[4], sign),
  	        d: parseIso(match[5], sign),
  	        h: parseIso(match[6], sign),
  	        m: parseIso(match[7], sign),
  	        s: parseIso(match[8], sign)
  	      };
  	    } else if (duration == null) {
  	      // checks for null or undefined
  	      duration = {};
  	    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
  	      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
  	      duration = {};
  	      duration.ms = diffRes.milliseconds;
  	      duration.M = diffRes.months;
  	    }
  	    ret = new Duration(duration);
  	    if (isDuration(input) && hasOwnProp(input, '_locale')) {
  	      ret._locale = input._locale;
  	    }
  	    if (isDuration(input) && hasOwnProp(input, '_isValid')) {
  	      ret._isValid = input._isValid;
  	    }
  	    return ret;
  	  }
  	  createDuration.fn = Duration.prototype;
  	  createDuration.invalid = createInvalid$1;
  	  function parseIso(inp, sign) {
  	    // We'd normally use ~~inp for this, but unfortunately it also
  	    // converts floats to ints.
  	    // inp may be undefined, so careful calling replace on it.
  	    var res = inp && parseFloat(inp.replace(',', '.'));
  	    // apply sign while we're at it
  	    return (isNaN(res) ? 0 : res) * sign;
  	  }
  	  function positiveMomentsDifference(base, other) {
  	    var res = {};
  	    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
  	    if (base.clone().add(res.months, 'M').isAfter(other)) {
  	      --res.months;
  	    }
  	    res.milliseconds = +other - +base.clone().add(res.months, 'M');
  	    return res;
  	  }
  	  function momentsDifference(base, other) {
  	    var res;
  	    if (!(base.isValid() && other.isValid())) {
  	      return {
  	        milliseconds: 0,
  	        months: 0
  	      };
  	    }
  	    other = cloneWithOffset(other, base);
  	    if (base.isBefore(other)) {
  	      res = positiveMomentsDifference(base, other);
  	    } else {
  	      res = positiveMomentsDifference(other, base);
  	      res.milliseconds = -res.milliseconds;
  	      res.months = -res.months;
  	    }
  	    return res;
  	  }

  	  // TODO: remove 'name' arg after deprecation is removed
  	  function createAdder(direction, name) {
  	    return function (val, period) {
  	      var dur, tmp;
  	      //invert the arguments, but complain about it
  	      if (period !== null && !isNaN(+period)) {
  	        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
  	        tmp = val;
  	        val = period;
  	        period = tmp;
  	      }
  	      dur = createDuration(val, period);
  	      addSubtract(this, dur, direction);
  	      return this;
  	    };
  	  }
  	  function addSubtract(mom, duration, isAdding, updateOffset) {
  	    var milliseconds = duration._milliseconds,
  	      days = absRound(duration._days),
  	      months = absRound(duration._months);
  	    if (!mom.isValid()) {
  	      // No op
  	      return;
  	    }
  	    updateOffset = updateOffset == null ? true : updateOffset;
  	    if (months) {
  	      setMonth(mom, get(mom, 'Month') + months * isAdding);
  	    }
  	    if (days) {
  	      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
  	    }
  	    if (milliseconds) {
  	      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
  	    }
  	    if (updateOffset) {
  	      hooks.updateOffset(mom, days || months);
  	    }
  	  }
  	  var add = createAdder(1, 'add'),
  	    subtract = createAdder(-1, 'subtract');
  	  function isString(input) {
  	    return typeof input === 'string' || input instanceof String;
  	  }

  	  // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
  	  function isMomentInput(input) {
  	    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
  	  }
  	  function isMomentInputObject(input) {
  	    var objectTest = isObject(input) && !isObjectEmpty(input),
  	      propertyTest = false,
  	      properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
  	      i,
  	      property,
  	      propertyLen = properties.length;
  	    for (i = 0; i < propertyLen; i += 1) {
  	      property = properties[i];
  	      propertyTest = propertyTest || hasOwnProp(input, property);
  	    }
  	    return objectTest && propertyTest;
  	  }
  	  function isNumberOrStringArray(input) {
  	    var arrayTest = isArray(input),
  	      dataTypeTest = false;
  	    if (arrayTest) {
  	      dataTypeTest = input.filter(function (item) {
  	        return !isNumber(item) && isString(input);
  	      }).length === 0;
  	    }
  	    return arrayTest && dataTypeTest;
  	  }
  	  function isCalendarSpec(input) {
  	    var objectTest = isObject(input) && !isObjectEmpty(input),
  	      propertyTest = false,
  	      properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
  	      i,
  	      property;
  	    for (i = 0; i < properties.length; i += 1) {
  	      property = properties[i];
  	      propertyTest = propertyTest || hasOwnProp(input, property);
  	    }
  	    return objectTest && propertyTest;
  	  }
  	  function getCalendarFormat(myMoment, now) {
  	    var diff = myMoment.diff(now, 'days', true);
  	    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
  	  }
  	  function calendar$1(time, formats) {
  	    // Support for single parameter, formats only overload to the calendar function
  	    if (arguments.length === 1) {
  	      if (!arguments[0]) {
  	        time = undefined;
  	        formats = undefined;
  	      } else if (isMomentInput(arguments[0])) {
  	        time = arguments[0];
  	        formats = undefined;
  	      } else if (isCalendarSpec(arguments[0])) {
  	        formats = arguments[0];
  	        time = undefined;
  	      }
  	    }
  	    // We want to compare the start of today, vs this.
  	    // Getting start-of-today depends on whether we're local/utc/offset or not.
  	    var now = time || createLocal(),
  	      sod = cloneWithOffset(now, this).startOf('day'),
  	      format = hooks.calendarFormat(this, sod) || 'sameElse',
  	      output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
  	    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  	  }
  	  function clone() {
  	    return new Moment(this);
  	  }
  	  function isAfter(input, units) {
  	    var localInput = isMoment(input) ? input : createLocal(input);
  	    if (!(this.isValid() && localInput.isValid())) {
  	      return false;
  	    }
  	    units = normalizeUnits(units) || 'millisecond';
  	    if (units === 'millisecond') {
  	      return this.valueOf() > localInput.valueOf();
  	    } else {
  	      return localInput.valueOf() < this.clone().startOf(units).valueOf();
  	    }
  	  }
  	  function isBefore(input, units) {
  	    var localInput = isMoment(input) ? input : createLocal(input);
  	    if (!(this.isValid() && localInput.isValid())) {
  	      return false;
  	    }
  	    units = normalizeUnits(units) || 'millisecond';
  	    if (units === 'millisecond') {
  	      return this.valueOf() < localInput.valueOf();
  	    } else {
  	      return this.clone().endOf(units).valueOf() < localInput.valueOf();
  	    }
  	  }
  	  function isBetween(from, to, units, inclusivity) {
  	    var localFrom = isMoment(from) ? from : createLocal(from),
  	      localTo = isMoment(to) ? to : createLocal(to);
  	    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
  	      return false;
  	    }
  	    inclusivity = inclusivity || '()';
  	    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  	  }
  	  function isSame(input, units) {
  	    var localInput = isMoment(input) ? input : createLocal(input),
  	      inputMs;
  	    if (!(this.isValid() && localInput.isValid())) {
  	      return false;
  	    }
  	    units = normalizeUnits(units) || 'millisecond';
  	    if (units === 'millisecond') {
  	      return this.valueOf() === localInput.valueOf();
  	    } else {
  	      inputMs = localInput.valueOf();
  	      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  	    }
  	  }
  	  function isSameOrAfter(input, units) {
  	    return this.isSame(input, units) || this.isAfter(input, units);
  	  }
  	  function isSameOrBefore(input, units) {
  	    return this.isSame(input, units) || this.isBefore(input, units);
  	  }
  	  function diff(input, units, asFloat) {
  	    var that, zoneDelta, output;
  	    if (!this.isValid()) {
  	      return NaN;
  	    }
  	    that = cloneWithOffset(input, this);
  	    if (!that.isValid()) {
  	      return NaN;
  	    }
  	    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  	    units = normalizeUnits(units);
  	    switch (units) {
  	      case 'year':
  	        output = monthDiff(this, that) / 12;
  	        break;
  	      case 'month':
  	        output = monthDiff(this, that);
  	        break;
  	      case 'quarter':
  	        output = monthDiff(this, that) / 3;
  	        break;
  	      case 'second':
  	        output = (this - that) / 1e3;
  	        break;
  	      // 1000
  	      case 'minute':
  	        output = (this - that) / 6e4;
  	        break;
  	      // 1000 * 60
  	      case 'hour':
  	        output = (this - that) / 36e5;
  	        break;
  	      // 1000 * 60 * 60
  	      case 'day':
  	        output = (this - that - zoneDelta) / 864e5;
  	        break;
  	      // 1000 * 60 * 60 * 24, negate dst
  	      case 'week':
  	        output = (this - that - zoneDelta) / 6048e5;
  	        break;
  	      // 1000 * 60 * 60 * 24 * 7, negate dst
  	      default:
  	        output = this - that;
  	    }
  	    return asFloat ? output : absFloor(output);
  	  }
  	  function monthDiff(a, b) {
  	    if (a.date() < b.date()) {
  	      // end-of-month calculations work correct when the start month has more
  	      // days than the end month.
  	      return -monthDiff(b, a);
  	    }
  	    // difference in months
  	    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
  	      // b is in (anchor - 1 month, anchor + 1 month)
  	      anchor = a.clone().add(wholeMonthDiff, 'months'),
  	      anchor2,
  	      adjust;
  	    if (b - anchor < 0) {
  	      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
  	      // linear across the month
  	      adjust = (b - anchor) / (anchor - anchor2);
  	    } else {
  	      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
  	      // linear across the month
  	      adjust = (b - anchor) / (anchor2 - anchor);
  	    }

  	    //check for negative zero, return zero if negative zero
  	    return -(wholeMonthDiff + adjust) || 0;
  	  }
  	  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  	  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
  	  function toString() {
  	    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  	  }
  	  function toISOString(keepOffset) {
  	    if (!this.isValid()) {
  	      return null;
  	    }
  	    var utc = keepOffset !== true,
  	      m = utc ? this.clone().utc() : this;
  	    if (m.year() < 0 || m.year() > 9999) {
  	      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
  	    }
  	    if (isFunction(Date.prototype.toISOString)) {
  	      // native implementation is ~50x faster, use it when we can
  	      if (utc) {
  	        return this.toDate().toISOString();
  	      } else {
  	        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
  	      }
  	    }
  	    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  	  }

  	  /**
  	   * Return a human readable representation of a moment that can
  	   * also be evaluated to get a new moment which is the same
  	   *
  	   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
  	   */
  	  function inspect() {
  	    if (!this.isValid()) {
  	      return 'moment.invalid(/* ' + this._i + ' */)';
  	    }
  	    var func = 'moment',
  	      zone = '',
  	      prefix,
  	      year,
  	      datetime,
  	      suffix;
  	    if (!this.isLocal()) {
  	      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
  	      zone = 'Z';
  	    }
  	    prefix = '[' + func + '("]';
  	    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
  	    datetime = '-MM-DD[T]HH:mm:ss.SSS';
  	    suffix = zone + '[")]';
  	    return this.format(prefix + year + datetime + suffix);
  	  }
  	  function format(inputString) {
  	    if (!inputString) {
  	      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  	    }
  	    var output = formatMoment(this, inputString);
  	    return this.localeData().postformat(output);
  	  }
  	  function from(time, withoutSuffix) {
  	    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
  	      return createDuration({
  	        to: this,
  	        from: time
  	      }).locale(this.locale()).humanize(!withoutSuffix);
  	    } else {
  	      return this.localeData().invalidDate();
  	    }
  	  }
  	  function fromNow(withoutSuffix) {
  	    return this.from(createLocal(), withoutSuffix);
  	  }
  	  function to(time, withoutSuffix) {
  	    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
  	      return createDuration({
  	        from: this,
  	        to: time
  	      }).locale(this.locale()).humanize(!withoutSuffix);
  	    } else {
  	      return this.localeData().invalidDate();
  	    }
  	  }
  	  function toNow(withoutSuffix) {
  	    return this.to(createLocal(), withoutSuffix);
  	  }

  	  // If passed a locale key, it will set the locale for this
  	  // instance.  Otherwise, it will return the locale configuration
  	  // variables for this instance.
  	  function locale(key) {
  	    var newLocaleData;
  	    if (key === undefined) {
  	      return this._locale._abbr;
  	    } else {
  	      newLocaleData = getLocale(key);
  	      if (newLocaleData != null) {
  	        this._locale = newLocaleData;
  	      }
  	      return this;
  	    }
  	  }
  	  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
  	    if (key === undefined) {
  	      return this.localeData();
  	    } else {
  	      return this.locale(key);
  	    }
  	  });
  	  function localeData() {
  	    return this._locale;
  	  }
  	  var MS_PER_SECOND = 1000,
  	    MS_PER_MINUTE = 60 * MS_PER_SECOND,
  	    MS_PER_HOUR = 60 * MS_PER_MINUTE,
  	    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

  	  // actual modulo - handles negative numbers (for dates before 1970):
  	  function mod$1(dividend, divisor) {
  	    return (dividend % divisor + divisor) % divisor;
  	  }
  	  function localStartOfDate(y, m, d) {
  	    // the date constructor remaps years 0-99 to 1900-1999
  	    if (y < 100 && y >= 0) {
  	      // preserve leap years using a full 400 year cycle, then reset
  	      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
  	    } else {
  	      return new Date(y, m, d).valueOf();
  	    }
  	  }
  	  function utcStartOfDate(y, m, d) {
  	    // Date.UTC remaps years 0-99 to 1900-1999
  	    if (y < 100 && y >= 0) {
  	      // preserve leap years using a full 400 year cycle, then reset
  	      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
  	    } else {
  	      return Date.UTC(y, m, d);
  	    }
  	  }
  	  function startOf(units) {
  	    var time, startOfDate;
  	    units = normalizeUnits(units);
  	    if (units === undefined || units === 'millisecond' || !this.isValid()) {
  	      return this;
  	    }
  	    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  	    switch (units) {
  	      case 'year':
  	        time = startOfDate(this.year(), 0, 1);
  	        break;
  	      case 'quarter':
  	        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
  	        break;
  	      case 'month':
  	        time = startOfDate(this.year(), this.month(), 1);
  	        break;
  	      case 'week':
  	        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
  	        break;
  	      case 'isoWeek':
  	        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
  	        break;
  	      case 'day':
  	      case 'date':
  	        time = startOfDate(this.year(), this.month(), this.date());
  	        break;
  	      case 'hour':
  	        time = this._d.valueOf();
  	        time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
  	        break;
  	      case 'minute':
  	        time = this._d.valueOf();
  	        time -= mod$1(time, MS_PER_MINUTE);
  	        break;
  	      case 'second':
  	        time = this._d.valueOf();
  	        time -= mod$1(time, MS_PER_SECOND);
  	        break;
  	    }
  	    this._d.setTime(time);
  	    hooks.updateOffset(this, true);
  	    return this;
  	  }
  	  function endOf(units) {
  	    var time, startOfDate;
  	    units = normalizeUnits(units);
  	    if (units === undefined || units === 'millisecond' || !this.isValid()) {
  	      return this;
  	    }
  	    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  	    switch (units) {
  	      case 'year':
  	        time = startOfDate(this.year() + 1, 0, 1) - 1;
  	        break;
  	      case 'quarter':
  	        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
  	        break;
  	      case 'month':
  	        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
  	        break;
  	      case 'week':
  	        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
  	        break;
  	      case 'isoWeek':
  	        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
  	        break;
  	      case 'day':
  	      case 'date':
  	        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
  	        break;
  	      case 'hour':
  	        time = this._d.valueOf();
  	        time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
  	        break;
  	      case 'minute':
  	        time = this._d.valueOf();
  	        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
  	        break;
  	      case 'second':
  	        time = this._d.valueOf();
  	        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
  	        break;
  	    }
  	    this._d.setTime(time);
  	    hooks.updateOffset(this, true);
  	    return this;
  	  }
  	  function valueOf() {
  	    return this._d.valueOf() - (this._offset || 0) * 60000;
  	  }
  	  function unix() {
  	    return Math.floor(this.valueOf() / 1000);
  	  }
  	  function toDate() {
  	    return new Date(this.valueOf());
  	  }
  	  function toArray() {
  	    var m = this;
  	    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  	  }
  	  function toObject() {
  	    var m = this;
  	    return {
  	      years: m.year(),
  	      months: m.month(),
  	      date: m.date(),
  	      hours: m.hours(),
  	      minutes: m.minutes(),
  	      seconds: m.seconds(),
  	      milliseconds: m.milliseconds()
  	    };
  	  }
  	  function toJSON() {
  	    // new Date(NaN).toJSON() === null
  	    return this.isValid() ? this.toISOString() : null;
  	  }
  	  function isValid$2() {
  	    return isValid(this);
  	  }
  	  function parsingFlags() {
  	    return extend({}, getParsingFlags(this));
  	  }
  	  function invalidAt() {
  	    return getParsingFlags(this).overflow;
  	  }
  	  function creationData() {
  	    return {
  	      input: this._i,
  	      format: this._f,
  	      locale: this._locale,
  	      isUTC: this._isUTC,
  	      strict: this._strict
  	    };
  	  }
  	  addFormatToken('N', 0, 0, 'eraAbbr');
  	  addFormatToken('NN', 0, 0, 'eraAbbr');
  	  addFormatToken('NNN', 0, 0, 'eraAbbr');
  	  addFormatToken('NNNN', 0, 0, 'eraName');
  	  addFormatToken('NNNNN', 0, 0, 'eraNarrow');
  	  addFormatToken('y', ['y', 1], 'yo', 'eraYear');
  	  addFormatToken('y', ['yy', 2], 0, 'eraYear');
  	  addFormatToken('y', ['yyy', 3], 0, 'eraYear');
  	  addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
  	  addRegexToken('N', matchEraAbbr);
  	  addRegexToken('NN', matchEraAbbr);
  	  addRegexToken('NNN', matchEraAbbr);
  	  addRegexToken('NNNN', matchEraName);
  	  addRegexToken('NNNNN', matchEraNarrow);
  	  addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
  	    var era = config._locale.erasParse(input, token, config._strict);
  	    if (era) {
  	      getParsingFlags(config).era = era;
  	    } else {
  	      getParsingFlags(config).invalidEra = input;
  	    }
  	  });
  	  addRegexToken('y', matchUnsigned);
  	  addRegexToken('yy', matchUnsigned);
  	  addRegexToken('yyy', matchUnsigned);
  	  addRegexToken('yyyy', matchUnsigned);
  	  addRegexToken('yo', matchEraYearOrdinal);
  	  addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
  	  addParseToken(['yo'], function (input, array, config, token) {
  	    var match;
  	    if (config._locale._eraYearOrdinalRegex) {
  	      match = input.match(config._locale._eraYearOrdinalRegex);
  	    }
  	    if (config._locale.eraYearOrdinalParse) {
  	      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
  	    } else {
  	      array[YEAR] = parseInt(input, 10);
  	    }
  	  });
  	  function localeEras(m, format) {
  	    var i,
  	      l,
  	      date,
  	      eras = this._eras || getLocale('en')._eras;
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      switch (typeof eras[i].since) {
  	        case 'string':
  	          // truncate time
  	          date = hooks(eras[i].since).startOf('day');
  	          eras[i].since = date.valueOf();
  	          break;
  	      }
  	      switch (typeof eras[i].until) {
  	        case 'undefined':
  	          eras[i].until = +Infinity;
  	          break;
  	        case 'string':
  	          // truncate time
  	          date = hooks(eras[i].until).startOf('day').valueOf();
  	          eras[i].until = date.valueOf();
  	          break;
  	      }
  	    }
  	    return eras;
  	  }
  	  function localeErasParse(eraName, format, strict) {
  	    var i,
  	      l,
  	      eras = this.eras(),
  	      name,
  	      abbr,
  	      narrow;
  	    eraName = eraName.toUpperCase();
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      name = eras[i].name.toUpperCase();
  	      abbr = eras[i].abbr.toUpperCase();
  	      narrow = eras[i].narrow.toUpperCase();
  	      if (strict) {
  	        switch (format) {
  	          case 'N':
  	          case 'NN':
  	          case 'NNN':
  	            if (abbr === eraName) {
  	              return eras[i];
  	            }
  	            break;
  	          case 'NNNN':
  	            if (name === eraName) {
  	              return eras[i];
  	            }
  	            break;
  	          case 'NNNNN':
  	            if (narrow === eraName) {
  	              return eras[i];
  	            }
  	            break;
  	        }
  	      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
  	        return eras[i];
  	      }
  	    }
  	  }
  	  function localeErasConvertYear(era, year) {
  	    var dir = era.since <= era.until ? +1 : -1;
  	    if (year === undefined) {
  	      return hooks(era.since).year();
  	    } else {
  	      return hooks(era.since).year() + (year - era.offset) * dir;
  	    }
  	  }
  	  function getEraName() {
  	    var i,
  	      l,
  	      val,
  	      eras = this.localeData().eras();
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      // truncate time
  	      val = this.clone().startOf('day').valueOf();
  	      if (eras[i].since <= val && val <= eras[i].until) {
  	        return eras[i].name;
  	      }
  	      if (eras[i].until <= val && val <= eras[i].since) {
  	        return eras[i].name;
  	      }
  	    }
  	    return '';
  	  }
  	  function getEraNarrow() {
  	    var i,
  	      l,
  	      val,
  	      eras = this.localeData().eras();
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      // truncate time
  	      val = this.clone().startOf('day').valueOf();
  	      if (eras[i].since <= val && val <= eras[i].until) {
  	        return eras[i].narrow;
  	      }
  	      if (eras[i].until <= val && val <= eras[i].since) {
  	        return eras[i].narrow;
  	      }
  	    }
  	    return '';
  	  }
  	  function getEraAbbr() {
  	    var i,
  	      l,
  	      val,
  	      eras = this.localeData().eras();
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      // truncate time
  	      val = this.clone().startOf('day').valueOf();
  	      if (eras[i].since <= val && val <= eras[i].until) {
  	        return eras[i].abbr;
  	      }
  	      if (eras[i].until <= val && val <= eras[i].since) {
  	        return eras[i].abbr;
  	      }
  	    }
  	    return '';
  	  }
  	  function getEraYear() {
  	    var i,
  	      l,
  	      dir,
  	      val,
  	      eras = this.localeData().eras();
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      dir = eras[i].since <= eras[i].until ? +1 : -1;

  	      // truncate time
  	      val = this.clone().startOf('day').valueOf();
  	      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
  	        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
  	      }
  	    }
  	    return this.year();
  	  }
  	  function erasNameRegex(isStrict) {
  	    if (!hasOwnProp(this, '_erasNameRegex')) {
  	      computeErasParse.call(this);
  	    }
  	    return isStrict ? this._erasNameRegex : this._erasRegex;
  	  }
  	  function erasAbbrRegex(isStrict) {
  	    if (!hasOwnProp(this, '_erasAbbrRegex')) {
  	      computeErasParse.call(this);
  	    }
  	    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  	  }
  	  function erasNarrowRegex(isStrict) {
  	    if (!hasOwnProp(this, '_erasNarrowRegex')) {
  	      computeErasParse.call(this);
  	    }
  	    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  	  }
  	  function matchEraAbbr(isStrict, locale) {
  	    return locale.erasAbbrRegex(isStrict);
  	  }
  	  function matchEraName(isStrict, locale) {
  	    return locale.erasNameRegex(isStrict);
  	  }
  	  function matchEraNarrow(isStrict, locale) {
  	    return locale.erasNarrowRegex(isStrict);
  	  }
  	  function matchEraYearOrdinal(isStrict, locale) {
  	    return locale._eraYearOrdinalRegex || matchUnsigned;
  	  }
  	  function computeErasParse() {
  	    var abbrPieces = [],
  	      namePieces = [],
  	      narrowPieces = [],
  	      mixedPieces = [],
  	      i,
  	      l,
  	      eras = this.eras();
  	    for (i = 0, l = eras.length; i < l; ++i) {
  	      namePieces.push(regexEscape(eras[i].name));
  	      abbrPieces.push(regexEscape(eras[i].abbr));
  	      narrowPieces.push(regexEscape(eras[i].narrow));
  	      mixedPieces.push(regexEscape(eras[i].name));
  	      mixedPieces.push(regexEscape(eras[i].abbr));
  	      mixedPieces.push(regexEscape(eras[i].narrow));
  	    }
  	    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  	    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
  	    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
  	    this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
  	  }

  	  // FORMATTING

  	  addFormatToken(0, ['gg', 2], 0, function () {
  	    return this.weekYear() % 100;
  	  });
  	  addFormatToken(0, ['GG', 2], 0, function () {
  	    return this.isoWeekYear() % 100;
  	  });
  	  function addWeekYearFormatToken(token, getter) {
  	    addFormatToken(0, [token, token.length], 0, getter);
  	  }
  	  addWeekYearFormatToken('gggg', 'weekYear');
  	  addWeekYearFormatToken('ggggg', 'weekYear');
  	  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  	  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  	  // ALIASES

  	  addUnitAlias('weekYear', 'gg');
  	  addUnitAlias('isoWeekYear', 'GG');

  	  // PRIORITY

  	  addUnitPriority('weekYear', 1);
  	  addUnitPriority('isoWeekYear', 1);

  	  // PARSING

  	  addRegexToken('G', matchSigned);
  	  addRegexToken('g', matchSigned);
  	  addRegexToken('GG', match1to2, match2);
  	  addRegexToken('gg', match1to2, match2);
  	  addRegexToken('GGGG', match1to4, match4);
  	  addRegexToken('gggg', match1to4, match4);
  	  addRegexToken('GGGGG', match1to6, match6);
  	  addRegexToken('ggggg', match1to6, match6);
  	  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
  	    week[token.substr(0, 2)] = toInt(input);
  	  });
  	  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
  	    week[token] = hooks.parseTwoDigitYear(input);
  	  });

  	  // MOMENTS

  	  function getSetWeekYear(input) {
  	    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  	  }
  	  function getSetISOWeekYear(input) {
  	    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  	  }
  	  function getISOWeeksInYear() {
  	    return weeksInYear(this.year(), 1, 4);
  	  }
  	  function getISOWeeksInISOWeekYear() {
  	    return weeksInYear(this.isoWeekYear(), 1, 4);
  	  }
  	  function getWeeksInYear() {
  	    var weekInfo = this.localeData()._week;
  	    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  	  }
  	  function getWeeksInWeekYear() {
  	    var weekInfo = this.localeData()._week;
  	    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  	  }
  	  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  	    var weeksTarget;
  	    if (input == null) {
  	      return weekOfYear(this, dow, doy).year;
  	    } else {
  	      weeksTarget = weeksInYear(input, dow, doy);
  	      if (week > weeksTarget) {
  	        week = weeksTarget;
  	      }
  	      return setWeekAll.call(this, input, week, weekday, dow, doy);
  	    }
  	  }
  	  function setWeekAll(weekYear, week, weekday, dow, doy) {
  	    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
  	      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  	    this.year(date.getUTCFullYear());
  	    this.month(date.getUTCMonth());
  	    this.date(date.getUTCDate());
  	    return this;
  	  }

  	  // FORMATTING

  	  addFormatToken('Q', 0, 'Qo', 'quarter');

  	  // ALIASES

  	  addUnitAlias('quarter', 'Q');

  	  // PRIORITY

  	  addUnitPriority('quarter', 7);

  	  // PARSING

  	  addRegexToken('Q', match1);
  	  addParseToken('Q', function (input, array) {
  	    array[MONTH] = (toInt(input) - 1) * 3;
  	  });

  	  // MOMENTS

  	  function getSetQuarter(input) {
  	    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  	  }

  	  // FORMATTING

  	  addFormatToken('D', ['DD', 2], 'Do', 'date');

  	  // ALIASES

  	  addUnitAlias('date', 'D');

  	  // PRIORITY
  	  addUnitPriority('date', 9);

  	  // PARSING

  	  addRegexToken('D', match1to2);
  	  addRegexToken('DD', match1to2, match2);
  	  addRegexToken('Do', function (isStrict, locale) {
  	    // TODO: Remove "ordinalParse" fallback in next major release.
  	    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
  	  });
  	  addParseToken(['D', 'DD'], DATE);
  	  addParseToken('Do', function (input, array) {
  	    array[DATE] = toInt(input.match(match1to2)[0]);
  	  });

  	  // MOMENTS

  	  var getSetDayOfMonth = makeGetSet('Date', true);

  	  // FORMATTING

  	  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  	  // ALIASES

  	  addUnitAlias('dayOfYear', 'DDD');

  	  // PRIORITY
  	  addUnitPriority('dayOfYear', 4);

  	  // PARSING

  	  addRegexToken('DDD', match1to3);
  	  addRegexToken('DDDD', match3);
  	  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
  	    config._dayOfYear = toInt(input);
  	  });

  	  // HELPERS

  	  // MOMENTS

  	  function getSetDayOfYear(input) {
  	    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
  	    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  	  }

  	  // FORMATTING

  	  addFormatToken('m', ['mm', 2], 0, 'minute');

  	  // ALIASES

  	  addUnitAlias('minute', 'm');

  	  // PRIORITY

  	  addUnitPriority('minute', 14);

  	  // PARSING

  	  addRegexToken('m', match1to2);
  	  addRegexToken('mm', match1to2, match2);
  	  addParseToken(['m', 'mm'], MINUTE);

  	  // MOMENTS

  	  var getSetMinute = makeGetSet('Minutes', false);

  	  // FORMATTING

  	  addFormatToken('s', ['ss', 2], 0, 'second');

  	  // ALIASES

  	  addUnitAlias('second', 's');

  	  // PRIORITY

  	  addUnitPriority('second', 15);

  	  // PARSING

  	  addRegexToken('s', match1to2);
  	  addRegexToken('ss', match1to2, match2);
  	  addParseToken(['s', 'ss'], SECOND);

  	  // MOMENTS

  	  var getSetSecond = makeGetSet('Seconds', false);

  	  // FORMATTING

  	  addFormatToken('S', 0, 0, function () {
  	    return ~~(this.millisecond() / 100);
  	  });
  	  addFormatToken(0, ['SS', 2], 0, function () {
  	    return ~~(this.millisecond() / 10);
  	  });
  	  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  	  addFormatToken(0, ['SSSS', 4], 0, function () {
  	    return this.millisecond() * 10;
  	  });
  	  addFormatToken(0, ['SSSSS', 5], 0, function () {
  	    return this.millisecond() * 100;
  	  });
  	  addFormatToken(0, ['SSSSSS', 6], 0, function () {
  	    return this.millisecond() * 1000;
  	  });
  	  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
  	    return this.millisecond() * 10000;
  	  });
  	  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
  	    return this.millisecond() * 100000;
  	  });
  	  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
  	    return this.millisecond() * 1000000;
  	  });

  	  // ALIASES

  	  addUnitAlias('millisecond', 'ms');

  	  // PRIORITY

  	  addUnitPriority('millisecond', 16);

  	  // PARSING

  	  addRegexToken('S', match1to3, match1);
  	  addRegexToken('SS', match1to3, match2);
  	  addRegexToken('SSS', match1to3, match3);
  	  var token, getSetMillisecond;
  	  for (token = 'SSSS'; token.length <= 9; token += 'S') {
  	    addRegexToken(token, matchUnsigned);
  	  }
  	  function parseMs(input, array) {
  	    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  	  }
  	  for (token = 'S'; token.length <= 9; token += 'S') {
  	    addParseToken(token, parseMs);
  	  }
  	  getSetMillisecond = makeGetSet('Milliseconds', false);

  	  // FORMATTING

  	  addFormatToken('z', 0, 0, 'zoneAbbr');
  	  addFormatToken('zz', 0, 0, 'zoneName');

  	  // MOMENTS

  	  function getZoneAbbr() {
  	    return this._isUTC ? 'UTC' : '';
  	  }
  	  function getZoneName() {
  	    return this._isUTC ? 'Coordinated Universal Time' : '';
  	  }
  	  var proto = Moment.prototype;
  	  proto.add = add;
  	  proto.calendar = calendar$1;
  	  proto.clone = clone;
  	  proto.diff = diff;
  	  proto.endOf = endOf;
  	  proto.format = format;
  	  proto.from = from;
  	  proto.fromNow = fromNow;
  	  proto.to = to;
  	  proto.toNow = toNow;
  	  proto.get = stringGet;
  	  proto.invalidAt = invalidAt;
  	  proto.isAfter = isAfter;
  	  proto.isBefore = isBefore;
  	  proto.isBetween = isBetween;
  	  proto.isSame = isSame;
  	  proto.isSameOrAfter = isSameOrAfter;
  	  proto.isSameOrBefore = isSameOrBefore;
  	  proto.isValid = isValid$2;
  	  proto.lang = lang;
  	  proto.locale = locale;
  	  proto.localeData = localeData;
  	  proto.max = prototypeMax;
  	  proto.min = prototypeMin;
  	  proto.parsingFlags = parsingFlags;
  	  proto.set = stringSet;
  	  proto.startOf = startOf;
  	  proto.subtract = subtract;
  	  proto.toArray = toArray;
  	  proto.toObject = toObject;
  	  proto.toDate = toDate;
  	  proto.toISOString = toISOString;
  	  proto.inspect = inspect;
  	  if (typeof Symbol !== 'undefined' && Symbol.for != null) {
  	    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
  	      return 'Moment<' + this.format() + '>';
  	    };
  	  }
  	  proto.toJSON = toJSON;
  	  proto.toString = toString;
  	  proto.unix = unix;
  	  proto.valueOf = valueOf;
  	  proto.creationData = creationData;
  	  proto.eraName = getEraName;
  	  proto.eraNarrow = getEraNarrow;
  	  proto.eraAbbr = getEraAbbr;
  	  proto.eraYear = getEraYear;
  	  proto.year = getSetYear;
  	  proto.isLeapYear = getIsLeapYear;
  	  proto.weekYear = getSetWeekYear;
  	  proto.isoWeekYear = getSetISOWeekYear;
  	  proto.quarter = proto.quarters = getSetQuarter;
  	  proto.month = getSetMonth;
  	  proto.daysInMonth = getDaysInMonth;
  	  proto.week = proto.weeks = getSetWeek;
  	  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  	  proto.weeksInYear = getWeeksInYear;
  	  proto.weeksInWeekYear = getWeeksInWeekYear;
  	  proto.isoWeeksInYear = getISOWeeksInYear;
  	  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  	  proto.date = getSetDayOfMonth;
  	  proto.day = proto.days = getSetDayOfWeek;
  	  proto.weekday = getSetLocaleDayOfWeek;
  	  proto.isoWeekday = getSetISODayOfWeek;
  	  proto.dayOfYear = getSetDayOfYear;
  	  proto.hour = proto.hours = getSetHour;
  	  proto.minute = proto.minutes = getSetMinute;
  	  proto.second = proto.seconds = getSetSecond;
  	  proto.millisecond = proto.milliseconds = getSetMillisecond;
  	  proto.utcOffset = getSetOffset;
  	  proto.utc = setOffsetToUTC;
  	  proto.local = setOffsetToLocal;
  	  proto.parseZone = setOffsetToParsedOffset;
  	  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  	  proto.isDST = isDaylightSavingTime;
  	  proto.isLocal = isLocal;
  	  proto.isUtcOffset = isUtcOffset;
  	  proto.isUtc = isUtc;
  	  proto.isUTC = isUtc;
  	  proto.zoneAbbr = getZoneAbbr;
  	  proto.zoneName = getZoneName;
  	  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  	  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  	  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  	  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  	  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
  	  function createUnix(input) {
  	    return createLocal(input * 1000);
  	  }
  	  function createInZone() {
  	    return createLocal.apply(null, arguments).parseZone();
  	  }
  	  function preParsePostFormat(string) {
  	    return string;
  	  }
  	  var proto$1 = Locale.prototype;
  	  proto$1.calendar = calendar;
  	  proto$1.longDateFormat = longDateFormat;
  	  proto$1.invalidDate = invalidDate;
  	  proto$1.ordinal = ordinal;
  	  proto$1.preparse = preParsePostFormat;
  	  proto$1.postformat = preParsePostFormat;
  	  proto$1.relativeTime = relativeTime;
  	  proto$1.pastFuture = pastFuture;
  	  proto$1.set = set;
  	  proto$1.eras = localeEras;
  	  proto$1.erasParse = localeErasParse;
  	  proto$1.erasConvertYear = localeErasConvertYear;
  	  proto$1.erasAbbrRegex = erasAbbrRegex;
  	  proto$1.erasNameRegex = erasNameRegex;
  	  proto$1.erasNarrowRegex = erasNarrowRegex;
  	  proto$1.months = localeMonths;
  	  proto$1.monthsShort = localeMonthsShort;
  	  proto$1.monthsParse = localeMonthsParse;
  	  proto$1.monthsRegex = monthsRegex;
  	  proto$1.monthsShortRegex = monthsShortRegex;
  	  proto$1.week = localeWeek;
  	  proto$1.firstDayOfYear = localeFirstDayOfYear;
  	  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  	  proto$1.weekdays = localeWeekdays;
  	  proto$1.weekdaysMin = localeWeekdaysMin;
  	  proto$1.weekdaysShort = localeWeekdaysShort;
  	  proto$1.weekdaysParse = localeWeekdaysParse;
  	  proto$1.weekdaysRegex = weekdaysRegex;
  	  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  	  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  	  proto$1.isPM = localeIsPM;
  	  proto$1.meridiem = localeMeridiem;
  	  function get$1(format, index, field, setter) {
  	    var locale = getLocale(),
  	      utc = createUTC().set(setter, index);
  	    return locale[field](utc, format);
  	  }
  	  function listMonthsImpl(format, index, field) {
  	    if (isNumber(format)) {
  	      index = format;
  	      format = undefined;
  	    }
  	    format = format || '';
  	    if (index != null) {
  	      return get$1(format, index, field, 'month');
  	    }
  	    var i,
  	      out = [];
  	    for (i = 0; i < 12; i++) {
  	      out[i] = get$1(format, i, field, 'month');
  	    }
  	    return out;
  	  }

  	  // ()
  	  // (5)
  	  // (fmt, 5)
  	  // (fmt)
  	  // (true)
  	  // (true, 5)
  	  // (true, fmt, 5)
  	  // (true, fmt)
  	  function listWeekdaysImpl(localeSorted, format, index, field) {
  	    if (typeof localeSorted === 'boolean') {
  	      if (isNumber(format)) {
  	        index = format;
  	        format = undefined;
  	      }
  	      format = format || '';
  	    } else {
  	      format = localeSorted;
  	      index = format;
  	      localeSorted = false;
  	      if (isNumber(format)) {
  	        index = format;
  	        format = undefined;
  	      }
  	      format = format || '';
  	    }
  	    var locale = getLocale(),
  	      shift = localeSorted ? locale._week.dow : 0,
  	      i,
  	      out = [];
  	    if (index != null) {
  	      return get$1(format, (index + shift) % 7, field, 'day');
  	    }
  	    for (i = 0; i < 7; i++) {
  	      out[i] = get$1(format, (i + shift) % 7, field, 'day');
  	    }
  	    return out;
  	  }
  	  function listMonths(format, index) {
  	    return listMonthsImpl(format, index, 'months');
  	  }
  	  function listMonthsShort(format, index) {
  	    return listMonthsImpl(format, index, 'monthsShort');
  	  }
  	  function listWeekdays(localeSorted, format, index) {
  	    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  	  }
  	  function listWeekdaysShort(localeSorted, format, index) {
  	    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  	  }
  	  function listWeekdaysMin(localeSorted, format, index) {
  	    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  	  }
  	  getSetGlobalLocale('en', {
  	    eras: [{
  	      since: '0001-01-01',
  	      until: +Infinity,
  	      offset: 1,
  	      name: 'Anno Domini',
  	      narrow: 'AD',
  	      abbr: 'AD'
  	    }, {
  	      since: '0000-12-31',
  	      until: -Infinity,
  	      offset: 1,
  	      name: 'Before Christ',
  	      narrow: 'BC',
  	      abbr: 'BC'
  	    }],
  	    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  	    ordinal: function (number) {
  	      var b = number % 10,
  	        output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
  	      return number + output;
  	    }
  	  });

  	  // Side effect imports

  	  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  	  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
  	  var mathAbs = Math.abs;
  	  function abs() {
  	    var data = this._data;
  	    this._milliseconds = mathAbs(this._milliseconds);
  	    this._days = mathAbs(this._days);
  	    this._months = mathAbs(this._months);
  	    data.milliseconds = mathAbs(data.milliseconds);
  	    data.seconds = mathAbs(data.seconds);
  	    data.minutes = mathAbs(data.minutes);
  	    data.hours = mathAbs(data.hours);
  	    data.months = mathAbs(data.months);
  	    data.years = mathAbs(data.years);
  	    return this;
  	  }
  	  function addSubtract$1(duration, input, value, direction) {
  	    var other = createDuration(input, value);
  	    duration._milliseconds += direction * other._milliseconds;
  	    duration._days += direction * other._days;
  	    duration._months += direction * other._months;
  	    return duration._bubble();
  	  }

  	  // supports only 2.0-style add(1, 's') or add(duration)
  	  function add$1(input, value) {
  	    return addSubtract$1(this, input, value, 1);
  	  }

  	  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  	  function subtract$1(input, value) {
  	    return addSubtract$1(this, input, value, -1);
  	  }
  	  function absCeil(number) {
  	    if (number < 0) {
  	      return Math.floor(number);
  	    } else {
  	      return Math.ceil(number);
  	    }
  	  }
  	  function bubble() {
  	    var milliseconds = this._milliseconds,
  	      days = this._days,
  	      months = this._months,
  	      data = this._data,
  	      seconds,
  	      minutes,
  	      hours,
  	      years,
  	      monthsFromDays;

  	    // if we have a mix of positive and negative values, bubble down first
  	    // check: https://github.com/moment/moment/issues/2166
  	    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
  	      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
  	      days = 0;
  	      months = 0;
  	    }

  	    // The following code bubbles up values, see the tests for
  	    // examples of what that means.
  	    data.milliseconds = milliseconds % 1000;
  	    seconds = absFloor(milliseconds / 1000);
  	    data.seconds = seconds % 60;
  	    minutes = absFloor(seconds / 60);
  	    data.minutes = minutes % 60;
  	    hours = absFloor(minutes / 60);
  	    data.hours = hours % 24;
  	    days += absFloor(hours / 24);

  	    // convert days to months
  	    monthsFromDays = absFloor(daysToMonths(days));
  	    months += monthsFromDays;
  	    days -= absCeil(monthsToDays(monthsFromDays));

  	    // 12 months -> 1 year
  	    years = absFloor(months / 12);
  	    months %= 12;
  	    data.days = days;
  	    data.months = months;
  	    data.years = years;
  	    return this;
  	  }
  	  function daysToMonths(days) {
  	    // 400 years have 146097 days (taking into account leap year rules)
  	    // 400 years have 12 months === 4800
  	    return days * 4800 / 146097;
  	  }
  	  function monthsToDays(months) {
  	    // the reverse of daysToMonths
  	    return months * 146097 / 4800;
  	  }
  	  function as(units) {
  	    if (!this.isValid()) {
  	      return NaN;
  	    }
  	    var days,
  	      months,
  	      milliseconds = this._milliseconds;
  	    units = normalizeUnits(units);
  	    if (units === 'month' || units === 'quarter' || units === 'year') {
  	      days = this._days + milliseconds / 864e5;
  	      months = this._months + daysToMonths(days);
  	      switch (units) {
  	        case 'month':
  	          return months;
  	        case 'quarter':
  	          return months / 3;
  	        case 'year':
  	          return months / 12;
  	      }
  	    } else {
  	      // handle milliseconds separately because of floating point math errors (issue #1867)
  	      days = this._days + Math.round(monthsToDays(this._months));
  	      switch (units) {
  	        case 'week':
  	          return days / 7 + milliseconds / 6048e5;
  	        case 'day':
  	          return days + milliseconds / 864e5;
  	        case 'hour':
  	          return days * 24 + milliseconds / 36e5;
  	        case 'minute':
  	          return days * 1440 + milliseconds / 6e4;
  	        case 'second':
  	          return days * 86400 + milliseconds / 1000;
  	        // Math.floor prevents floating point math errors here
  	        case 'millisecond':
  	          return Math.floor(days * 864e5) + milliseconds;
  	        default:
  	          throw new Error('Unknown unit ' + units);
  	      }
  	    }
  	  }

  	  // TODO: Use this.as('ms')?
  	  function valueOf$1() {
  	    if (!this.isValid()) {
  	      return NaN;
  	    }
  	    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  	  }
  	  function makeAs(alias) {
  	    return function () {
  	      return this.as(alias);
  	    };
  	  }
  	  var asMilliseconds = makeAs('ms'),
  	    asSeconds = makeAs('s'),
  	    asMinutes = makeAs('m'),
  	    asHours = makeAs('h'),
  	    asDays = makeAs('d'),
  	    asWeeks = makeAs('w'),
  	    asMonths = makeAs('M'),
  	    asQuarters = makeAs('Q'),
  	    asYears = makeAs('y');
  	  function clone$1() {
  	    return createDuration(this);
  	  }
  	  function get$2(units) {
  	    units = normalizeUnits(units);
  	    return this.isValid() ? this[units + 's']() : NaN;
  	  }
  	  function makeGetter(name) {
  	    return function () {
  	      return this.isValid() ? this._data[name] : NaN;
  	    };
  	  }
  	  var milliseconds = makeGetter('milliseconds'),
  	    seconds = makeGetter('seconds'),
  	    minutes = makeGetter('minutes'),
  	    hours = makeGetter('hours'),
  	    days = makeGetter('days'),
  	    months = makeGetter('months'),
  	    years = makeGetter('years');
  	  function weeks() {
  	    return absFloor(this.days() / 7);
  	  }
  	  var round = Math.round,
  	    thresholds = {
  	      ss: 44,
  	      // a few seconds to seconds
  	      s: 45,
  	      // seconds to minute
  	      m: 45,
  	      // minutes to hour
  	      h: 22,
  	      // hours to day
  	      d: 26,
  	      // days to month/week
  	      w: null,
  	      // weeks to month
  	      M: 11 // months to year
  	    };

  	  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  	  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
  	    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  	  }
  	  function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
  	    var duration = createDuration(posNegDuration).abs(),
  	      seconds = round(duration.as('s')),
  	      minutes = round(duration.as('m')),
  	      hours = round(duration.as('h')),
  	      days = round(duration.as('d')),
  	      months = round(duration.as('M')),
  	      weeks = round(duration.as('w')),
  	      years = round(duration.as('y')),
  	      a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];
  	    if (thresholds.w != null) {
  	      a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
  	    }
  	    a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
  	    a[2] = withoutSuffix;
  	    a[3] = +posNegDuration > 0;
  	    a[4] = locale;
  	    return substituteTimeAgo.apply(null, a);
  	  }

  	  // This function allows you to set the rounding function for relative time strings
  	  function getSetRelativeTimeRounding(roundingFunction) {
  	    if (roundingFunction === undefined) {
  	      return round;
  	    }
  	    if (typeof roundingFunction === 'function') {
  	      round = roundingFunction;
  	      return true;
  	    }
  	    return false;
  	  }

  	  // This function allows you to set a threshold for relative time strings
  	  function getSetRelativeTimeThreshold(threshold, limit) {
  	    if (thresholds[threshold] === undefined) {
  	      return false;
  	    }
  	    if (limit === undefined) {
  	      return thresholds[threshold];
  	    }
  	    thresholds[threshold] = limit;
  	    if (threshold === 's') {
  	      thresholds.ss = limit - 1;
  	    }
  	    return true;
  	  }
  	  function humanize(argWithSuffix, argThresholds) {
  	    if (!this.isValid()) {
  	      return this.localeData().invalidDate();
  	    }
  	    var withSuffix = false,
  	      th = thresholds,
  	      locale,
  	      output;
  	    if (typeof argWithSuffix === 'object') {
  	      argThresholds = argWithSuffix;
  	      argWithSuffix = false;
  	    }
  	    if (typeof argWithSuffix === 'boolean') {
  	      withSuffix = argWithSuffix;
  	    }
  	    if (typeof argThresholds === 'object') {
  	      th = Object.assign({}, thresholds, argThresholds);
  	      if (argThresholds.s != null && argThresholds.ss == null) {
  	        th.ss = argThresholds.s - 1;
  	      }
  	    }
  	    locale = this.localeData();
  	    output = relativeTime$1(this, !withSuffix, th, locale);
  	    if (withSuffix) {
  	      output = locale.pastFuture(+this, output);
  	    }
  	    return locale.postformat(output);
  	  }
  	  var abs$1 = Math.abs;
  	  function sign(x) {
  	    return (x > 0) - (x < 0) || +x;
  	  }
  	  function toISOString$1() {
  	    // for ISO strings we do not use the normal bubbling rules:
  	    //  * milliseconds bubble up until they become hours
  	    //  * days do not bubble at all
  	    //  * months bubble up until they become years
  	    // This is because there is no context-free conversion between hours and days
  	    // (think of clock changes)
  	    // and also not between days and months (28-31 days per month)
  	    if (!this.isValid()) {
  	      return this.localeData().invalidDate();
  	    }
  	    var seconds = abs$1(this._milliseconds) / 1000,
  	      days = abs$1(this._days),
  	      months = abs$1(this._months),
  	      minutes,
  	      hours,
  	      years,
  	      s,
  	      total = this.asSeconds(),
  	      totalSign,
  	      ymSign,
  	      daysSign,
  	      hmsSign;
  	    if (!total) {
  	      // this is the same as C#'s (Noda) and python (isodate)...
  	      // but not other JS (goog.date)
  	      return 'P0D';
  	    }

  	    // 3600 seconds -> 60 minutes -> 1 hour
  	    minutes = absFloor(seconds / 60);
  	    hours = absFloor(minutes / 60);
  	    seconds %= 60;
  	    minutes %= 60;

  	    // 12 months -> 1 year
  	    years = absFloor(months / 12);
  	    months %= 12;

  	    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
  	    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
  	    totalSign = total < 0 ? '-' : '';
  	    ymSign = sign(this._months) !== sign(total) ? '-' : '';
  	    daysSign = sign(this._days) !== sign(total) ? '-' : '';
  	    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
  	    return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
  	  }
  	  var proto$2 = Duration.prototype;
  	  proto$2.isValid = isValid$1;
  	  proto$2.abs = abs;
  	  proto$2.add = add$1;
  	  proto$2.subtract = subtract$1;
  	  proto$2.as = as;
  	  proto$2.asMilliseconds = asMilliseconds;
  	  proto$2.asSeconds = asSeconds;
  	  proto$2.asMinutes = asMinutes;
  	  proto$2.asHours = asHours;
  	  proto$2.asDays = asDays;
  	  proto$2.asWeeks = asWeeks;
  	  proto$2.asMonths = asMonths;
  	  proto$2.asQuarters = asQuarters;
  	  proto$2.asYears = asYears;
  	  proto$2.valueOf = valueOf$1;
  	  proto$2._bubble = bubble;
  	  proto$2.clone = clone$1;
  	  proto$2.get = get$2;
  	  proto$2.milliseconds = milliseconds;
  	  proto$2.seconds = seconds;
  	  proto$2.minutes = minutes;
  	  proto$2.hours = hours;
  	  proto$2.days = days;
  	  proto$2.weeks = weeks;
  	  proto$2.months = months;
  	  proto$2.years = years;
  	  proto$2.humanize = humanize;
  	  proto$2.toISOString = toISOString$1;
  	  proto$2.toString = toISOString$1;
  	  proto$2.toJSON = toISOString$1;
  	  proto$2.locale = locale;
  	  proto$2.localeData = localeData;
  	  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  	  proto$2.lang = lang;

  	  // FORMATTING

  	  addFormatToken('X', 0, 0, 'unix');
  	  addFormatToken('x', 0, 0, 'valueOf');

  	  // PARSING

  	  addRegexToken('x', matchSigned);
  	  addRegexToken('X', matchTimestamp);
  	  addParseToken('X', function (input, array, config) {
  	    config._d = new Date(parseFloat(input) * 1000);
  	  });
  	  addParseToken('x', function (input, array, config) {
  	    config._d = new Date(toInt(input));
  	  });

  	  //! moment.js

  	  hooks.version = '2.29.4';
  	  setHookCallback(createLocal);
  	  hooks.fn = proto;
  	  hooks.min = min;
  	  hooks.max = max;
  	  hooks.now = now;
  	  hooks.utc = createUTC;
  	  hooks.unix = createUnix;
  	  hooks.months = listMonths;
  	  hooks.isDate = isDate;
  	  hooks.locale = getSetGlobalLocale;
  	  hooks.invalid = createInvalid;
  	  hooks.duration = createDuration;
  	  hooks.isMoment = isMoment;
  	  hooks.weekdays = listWeekdays;
  	  hooks.parseZone = createInZone;
  	  hooks.localeData = getLocale;
  	  hooks.isDuration = isDuration;
  	  hooks.monthsShort = listMonthsShort;
  	  hooks.weekdaysMin = listWeekdaysMin;
  	  hooks.defineLocale = defineLocale;
  	  hooks.updateLocale = updateLocale;
  	  hooks.locales = listLocales;
  	  hooks.weekdaysShort = listWeekdaysShort;
  	  hooks.normalizeUnits = normalizeUnits;
  	  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  	  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  	  hooks.calendarFormat = getCalendarFormat;
  	  hooks.prototype = proto;

  	  // currently HTML5 input type only supports 24-hour formats
  	  hooks.HTML5_FMT = {
  	    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
  	    // <input type="datetime-local" />
  	    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
  	    // <input type="datetime-local" step="1" />
  	    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
  	    // <input type="datetime-local" step="0.001" />
  	    DATE: 'YYYY-MM-DD',
  	    // <input type="date" />
  	    TIME: 'HH:mm',
  	    // <input type="time" />
  	    TIME_SECONDS: 'HH:mm:ss',
  	    // <input type="time" step="1" />
  	    TIME_MS: 'HH:mm:ss.SSS',
  	    // <input type="time" step="0.001" />
  	    WEEK: 'GGGG-[W]WW',
  	    // <input type="week" />
  	    MONTH: 'YYYY-MM' // <input type="month" />
  	  };

  	  return hooks;
  	});
  } (moment$1));

  var moment = moment$1.exports;

  var QueryKeys;
  (function (QueryKeys) {
      QueryKeys["and"] = "and";
      QueryKeys["or"] = "or";
  })(QueryKeys || (QueryKeys = {}));
  var Conditions;
  (function (Conditions) {
      Conditions["lt"] = "lt";
      Conditions["lte"] = "lte";
      Conditions["gt"] = "gt";
      Conditions["gte"] = "gte";
      Conditions["eq"] = "eq";
      Conditions["ne"] = "ne";
      Conditions["in"] = "in";
      Conditions["nin"] = "nin";
      Conditions["exists"] = "exists";
  })(Conditions || (Conditions = {}));
  var StatusCodes;
  (function (StatusCodes) {
      StatusCodes["success"] = "200";
      StatusCodes["unuthenticated"] = "401";
      StatusCodes["unauthorized"] = "403";
      StatusCodes["badRequest"] = "400";
      StatusCodes["validationError"] = "422";
      StatusCodes["expiredAccessToken"] = "461";
  })(StatusCodes || (StatusCodes = {}));

  const PACKET_TYPES = Object.create(null); // no Map = no polyfill
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  const PACKET_TYPES_REVERSE = Object.create(null);
  Object.keys(PACKET_TYPES).forEach(key => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  const ERROR_PACKET = {
    type: "error",
    data: "parser error"
  };

  const encodePacket = ({
    type,
    data
  }, supportsBinary, callback) => {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      const buffer = toBuffer$3(data);
      return callback(encodeBuffer(buffer, supportsBinary));
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  const toBuffer$3 = data => {
    if (Buffer.isBuffer(data)) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return Buffer.from(data);
    } else {
      return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    }
  };
  // only 'message' packets can contain binary, so the type prefix is not needed
  const encodeBuffer = (data, supportsBinary) => {
    return supportsBinary ? data : "b" + data.toString("base64");
  };

  const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
      const buffer = Buffer.from(encodedPacket.substring(1), "base64");
      return {
        type: "message",
        data: mapBinary(buffer, binaryType)
      };
    }
    if (!PACKET_TYPES_REVERSE[type]) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  const mapBinary = (data, binaryType) => {
    const isBuffer = Buffer.isBuffer(data);
    switch (binaryType) {
      case "arraybuffer":
        return isBuffer ? toArrayBuffer$2(data) : data;
      case "nodebuffer":
      default:
        return data;
      // assuming the data is already a Buffer
    }
  };

  const toArrayBuffer$2 = buffer => {
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; i++) {
      view[i] = buffer[i];
    }
    return arrayBuffer;
  };

  const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
  const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
      // force base64 encoding for binary packets
      encodePacket(packet, false, encodedPacket => {
        encodedPackets[i] = encodedPacket;
        if (++count === length) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
      const decodedPacket = decodePacket(encodedPackets[i], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  const protocol$1 = 4;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  }

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }

    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }

    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }

    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }
    return this;
  };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
    return this;
  };

  // alias used for reserved events (protected method)
  Emitter.prototype.emitReserved = Emitter.prototype.emit;

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };

  const globalThisShim = global;

  function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  }
  // Keep a reference to the real timeout functions so they can be used when overridden
  const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
  const BASE64_OVERHEAD = 1.33;
  // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    let c = 0,
      length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) {
        length += 1;
      } else if (c < 0x800) {
        length += 2;
      } else if (c < 0xd800 || c >= 0xe000) {
        length += 3;
      } else {
        i++;
        length += 4;
      }
    }
    return length;
  }

  class TransportError extends Error {
    constructor(reason, description, context) {
      super(reason);
      this.description = description;
      this.context = context;
      this.type = "TransportError";
    }
  }
  class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
      super();
      this.writable = false;
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.query = opts.query;
      this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
      super.emitReserved("error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */
    open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */
    close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
      const packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
      super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
      this.readyState = "closed";
      super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) {}
  }

  // imported from https://github.com/unshiftio/yeast

  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {};
  let seed = 0,
    i = 0,
    prev;
  /**
   * Return a string representing the specified number.
   *
   * @param {Number} num The number to convert.
   * @returns {String} The string representation of the number.
   * @api public
   */
  function encode$1(num) {
    let encoded = '';
    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
  }
  /**
   * Yeast: A tiny growing id generator.
   *
   * @returns {String} A unique id.
   * @api public
   */
  function yeast() {
    const now = encode$1(+new Date());
    if (now !== prev) return seed = 0, prev = now;
    return now + '.' + encode$1(seed++);
  }
  //
  // Map each character to its index.
  //
  for (; i < length; i++) map[alphabet[i]] = i;

  // imported from https://github.com/galkn/querystring
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  function encode(obj) {
    let str = '';
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }
    return str;
  }
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */
  function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
      let pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }

  /**
   * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
   *
   * This can be used with JS designed for browsers to improve reuse of code and
   * allow the use of existing libraries.
   *
   * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
   *
   * @author Dan DeFelippi <dan@driverdan.com>
   * @contributor David Ellis <d.f.ellis@ieee.org>
   * @license MIT
   */

  var fs = require$$0__default$3["default"];
  var Url = url$2;
  var spawn = require$$2__default$1["default"].spawn;

  /**
   * Module exports.
   */

  var XMLHttpRequest_1 = XMLHttpRequest$1;

  // backwards-compat
  XMLHttpRequest$1.XMLHttpRequest = XMLHttpRequest$1;

  /**
   * `XMLHttpRequest` constructor.
   *
   * Supported options for the `opts` object are:
   *
   *  - `agent`: An http.Agent instance; http.globalAgent may be used; if 'undefined', agent usage is disabled
   *
   * @param {Object} opts optional "options" object
   */

  function XMLHttpRequest$1(opts) {

    opts = opts || {};

    /**
     * Private variables
     */
    var self = this;
    var http = require$$1__default$1["default"];
    var https = require$$2__default["default"];

    // Holds http.js objects
    var request;
    var response;

    // Request settings
    var settings = {};

    // Disable header blacklist.
    // Not part of XHR specs.
    var disableHeaderCheck = false;

    // Set some default headers
    var defaultHeaders = {
      "User-Agent": "node-XMLHttpRequest",
      "Accept": "*/*"
    };
    var headers = Object.assign({}, defaultHeaders);

    // These headers are not user setable.
    // The following are allowed but banned in the spec:
    // * user-agent
    var forbiddenRequestHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "content-transfer-encoding", "cookie", "cookie2", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];

    // These request methods are not allowed
    var forbiddenRequestMethods = ["TRACE", "TRACK", "CONNECT"];

    // Send flag
    var sendFlag = false;
    // Error flag, used when errors occur or abort is called
    var errorFlag = false;
    var abortedFlag = false;

    // Event listeners
    var listeners = {};

    /**
     * Constants
     */

    this.UNSENT = 0;
    this.OPENED = 1;
    this.HEADERS_RECEIVED = 2;
    this.LOADING = 3;
    this.DONE = 4;

    /**
     * Public vars
     */

    // Current state
    this.readyState = this.UNSENT;

    // default ready state change handler in case one is not set or is set late
    this.onreadystatechange = null;

    // Result & response
    this.responseText = "";
    this.responseXML = "";
    this.status = null;
    this.statusText = null;

    /**
     * Private methods
     */

    /**
     * Check if the specified header is allowed.
     *
     * @param string header Header to validate
     * @return boolean False if not allowed, otherwise true
     */
    var isAllowedHttpHeader = function (header) {
      return disableHeaderCheck || header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1;
    };

    /**
     * Check if the specified method is allowed.
     *
     * @param string method Request method to validate
     * @return boolean False if not allowed, otherwise true
     */
    var isAllowedHttpMethod = function (method) {
      return method && forbiddenRequestMethods.indexOf(method) === -1;
    };

    /**
     * Public methods
     */

    /**
     * Open the connection. Currently supports local server requests.
     *
     * @param string method Connection method (eg GET, POST)
     * @param string url URL for the connection.
     * @param boolean async Asynchronous connection. Default is true.
     * @param string user Username for basic authentication (optional)
     * @param string password Password for basic authentication (optional)
     */
    this.open = function (method, url, async, user, password) {
      this.abort();
      errorFlag = false;
      abortedFlag = false;

      // Check for valid request method
      if (!isAllowedHttpMethod(method)) {
        throw new Error("SecurityError: Request method not allowed");
      }
      settings = {
        "method": method,
        "url": url.toString(),
        "async": typeof async !== "boolean" ? true : async,
        "user": user || null,
        "password": password || null
      };
      setState(this.OPENED);
    };

    /**
     * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
     * This does not conform to the W3C spec.
     *
     * @param boolean state Enable or disable header checking.
     */
    this.setDisableHeaderCheck = function (state) {
      disableHeaderCheck = state;
    };

    /**
     * Sets a header for the request.
     *
     * @param string header Header name
     * @param string value Header value
     * @return boolean Header added
     */
    this.setRequestHeader = function (header, value) {
      if (this.readyState != this.OPENED) {
        throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
      }
      if (!isAllowedHttpHeader(header)) {
        console.warn('Refused to set unsafe header "' + header + '"');
        return false;
      }
      if (sendFlag) {
        throw new Error("INVALID_STATE_ERR: send flag is true");
      }
      headers[header] = value;
      return true;
    };

    /**
     * Gets a header from the server response.
     *
     * @param string header Name of header to get.
     * @return string Text of the header or null if it doesn't exist.
     */
    this.getResponseHeader = function (header) {
      if (typeof header === "string" && this.readyState > this.OPENED && response.headers[header.toLowerCase()] && !errorFlag) {
        return response.headers[header.toLowerCase()];
      }
      return null;
    };

    /**
     * Gets all the response headers.
     *
     * @return string A string with all response headers separated by CR+LF
     */
    this.getAllResponseHeaders = function () {
      if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
        return "";
      }
      var result = "";
      for (var i in response.headers) {
        // Cookie headers are excluded
        if (i !== "set-cookie" && i !== "set-cookie2") {
          result += i + ": " + response.headers[i] + "\r\n";
        }
      }
      return result.substr(0, result.length - 2);
    };

    /**
     * Gets a request header
     *
     * @param string name Name of header to get
     * @return string Returns the request header or empty string if not set
     */
    this.getRequestHeader = function (name) {
      // @TODO Make this case insensitive
      if (typeof name === "string" && headers[name]) {
        return headers[name];
      }
      return "";
    };

    /**
     * Sends the request to the server.
     *
     * @param string data Optional data to send as request body.
     */
    this.send = function (data) {
      if (this.readyState != this.OPENED) {
        throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
      }
      if (sendFlag) {
        throw new Error("INVALID_STATE_ERR: send has already been called");
      }
      var ssl = false,
        local = false;
      var url = Url.parse(settings.url);
      var host;
      // Determine the server
      switch (url.protocol) {
        case 'https:':
          ssl = true;
        // SSL & non-SSL both need host, no break here.
        case 'http:':
          host = url.hostname;
          break;
        case 'file:':
          local = true;
          break;
        case undefined:
        case '':
          host = "localhost";
          break;
        default:
          throw new Error("Protocol not supported.");
      }

      // Load files off the local filesystem (file://)
      if (local) {
        if (settings.method !== "GET") {
          throw new Error("XMLHttpRequest: Only GET method is supported");
        }
        if (settings.async) {
          fs.readFile(unescape(url.pathname), 'utf8', function (error, data) {
            if (error) {
              self.handleError(error, error.errno || -1);
            } else {
              self.status = 200;
              self.responseText = data;
              setState(self.DONE);
            }
          });
        } else {
          try {
            this.responseText = fs.readFileSync(unescape(url.pathname), 'utf8');
            this.status = 200;
            setState(self.DONE);
          } catch (e) {
            this.handleError(e, e.errno || -1);
          }
        }
        return;
      }

      // Default to port 80. If accessing localhost on another port be sure
      // to use http://localhost:port/path
      var port = url.port || (ssl ? 443 : 80);
      // Add query string if one is used
      var uri = url.pathname + (url.search ? url.search : '');

      // Set the Host header or the server may reject the request
      headers["Host"] = host;
      if (!(ssl && port === 443 || port === 80)) {
        headers["Host"] += ':' + url.port;
      }

      // Set Basic Auth if necessary
      if (settings.user) {
        if (typeof settings.password == "undefined") {
          settings.password = "";
        }
        var authBuf = new Buffer(settings.user + ":" + settings.password);
        headers["Authorization"] = "Basic " + authBuf.toString("base64");
      }

      // Set content length header
      if (settings.method === "GET" || settings.method === "HEAD") {
        data = null;
      } else if (data) {
        headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);
        if (!headers["Content-Type"]) {
          headers["Content-Type"] = "text/plain;charset=UTF-8";
        }
      } else if (settings.method === "POST") {
        // For a post with no data set Content-Length: 0.
        // This is required by buggy servers that don't meet the specs.
        headers["Content-Length"] = 0;
      }
      var agent = opts.agent || false;
      var options = {
        host: host,
        port: port,
        path: uri,
        method: settings.method,
        headers: headers,
        agent: agent
      };
      if (ssl) {
        options.pfx = opts.pfx;
        options.key = opts.key;
        options.passphrase = opts.passphrase;
        options.cert = opts.cert;
        options.ca = opts.ca;
        options.ciphers = opts.ciphers;
        options.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
      }

      // Reset error flag
      errorFlag = false;
      // Handle async requests
      if (settings.async) {
        // Use the proper protocol
        var doRequest = ssl ? https.request : http.request;

        // Request is being sent, set send flag
        sendFlag = true;

        // As per spec, this is called here for historical reasons.
        self.dispatchEvent("readystatechange");

        // Handler for the response
        var responseHandler = function (resp) {
          // Set response var to the response we got back
          // This is so it remains accessable outside this scope
          response = resp;
          // Check for redirect
          // @TODO Prevent looped redirects
          if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
            // Change URL to the redirect location
            settings.url = response.headers.location;
            var url = Url.parse(settings.url);
            // Set host var in case it's used later
            host = url.hostname;
            // Options for the new request
            var newOptions = {
              hostname: url.hostname,
              port: url.port,
              path: url.path,
              method: response.statusCode === 303 ? 'GET' : settings.method,
              headers: headers
            };
            if (ssl) {
              newOptions.pfx = opts.pfx;
              newOptions.key = opts.key;
              newOptions.passphrase = opts.passphrase;
              newOptions.cert = opts.cert;
              newOptions.ca = opts.ca;
              newOptions.ciphers = opts.ciphers;
              newOptions.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
            }

            // Issue the new request
            request = doRequest(newOptions, responseHandler).on('error', errorHandler);
            request.end();
            // @TODO Check if an XHR event needs to be fired here
            return;
          }
          if (response && response.setEncoding) {
            response.setEncoding("utf8");
          }
          setState(self.HEADERS_RECEIVED);
          self.status = response.statusCode;
          response.on('data', function (chunk) {
            // Make sure there's some data
            if (chunk) {
              self.responseText += chunk;
            }
            // Don't emit state changes if the connection has been aborted.
            if (sendFlag) {
              setState(self.LOADING);
            }
          });
          response.on('end', function () {
            if (sendFlag) {
              // The sendFlag needs to be set before setState is called.  Otherwise if we are chaining callbacks
              // there can be a timing issue (the callback is called and a new call is made before the flag is reset).
              sendFlag = false;
              // Discard the 'end' event if the connection has been aborted
              setState(self.DONE);
            }
          });
          response.on('error', function (error) {
            self.handleError(error);
          });
        };

        // Error handler for the request
        var errorHandler = function (error) {
          self.handleError(error);
        };

        // Create the request
        request = doRequest(options, responseHandler).on('error', errorHandler);
        if (opts.autoUnref) {
          request.on('socket', socket => {
            socket.unref();
          });
        }

        // Node 0.4 and later won't accept empty data. Make sure it's needed.
        if (data) {
          request.write(data);
        }
        request.end();
        self.dispatchEvent("loadstart");
      } else {
        // Synchronous
        // Create a temporary file for communication with the other Node process
        var contentFile = ".node-xmlhttprequest-content-" + process.pid;
        var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
        fs.writeFileSync(syncFile, "", "utf8");
        // The async request the other Node process executes
        var execString = "var http = require('http'), https = require('https'), fs = require('fs');" + "var doRequest = http" + (ssl ? "s" : "") + ".request;" + "var options = " + JSON.stringify(options) + ";" + "var responseText = '';" + "var req = doRequest(options, function(response) {" + "response.setEncoding('utf8');" + "response.on('data', function(chunk) {" + "  responseText += chunk;" + "});" + "response.on('end', function() {" + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');" + "fs.unlinkSync('" + syncFile + "');" + "});" + "response.on('error', function(error) {" + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');" + "fs.unlinkSync('" + syncFile + "');" + "});" + "}).on('error', function(error) {" + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');" + "fs.unlinkSync('" + syncFile + "');" + "});" + (data ? "req.write('" + JSON.stringify(data).slice(1, -1).replace(/'/g, "\\'") + "');" : "") + "req.end();";
        // Start the other Node Process, executing this string
        var syncProc = spawn(process.argv[0], ["-e", execString]);
        while (fs.existsSync(syncFile)) {
          // Wait while the sync file is empty
        }
        self.responseText = fs.readFileSync(contentFile, 'utf8');
        // Kill the child process once the file has data
        syncProc.stdin.end();
        // Remove the temporary file
        fs.unlinkSync(contentFile);
        if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
          // If the file returned an error, handle it
          var errorObj = self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, "");
          self.handleError(errorObj, 503);
        } else {
          // If the file returned okay, parse its data and move to the DONE state
          self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
          self.responseText = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1");
          setState(self.DONE);
        }
      }
    };

    /**
     * Called when an error is encountered to deal with it.
     * @param  status  {number}    HTTP status code to use rather than the default (0) for XHR errors.
     */
    this.handleError = function (error, status) {
      this.status = status || 0;
      this.statusText = error;
      this.responseText = error.stack;
      errorFlag = true;
      setState(this.DONE);
    };

    /**
     * Aborts a request.
     */
    this.abort = function () {
      if (request) {
        request.abort();
        request = null;
      }
      headers = Object.assign({}, defaultHeaders);
      this.responseText = "";
      this.responseXML = "";
      errorFlag = abortedFlag = true;
      if (this.readyState !== this.UNSENT && (this.readyState !== this.OPENED || sendFlag) && this.readyState !== this.DONE) {
        sendFlag = false;
        setState(this.DONE);
      }
      this.readyState = this.UNSENT;
    };

    /**
     * Adds an event listener. Preferred method of binding to events.
     */
    this.addEventListener = function (event, callback) {
      if (!(event in listeners)) {
        listeners[event] = [];
      }
      // Currently allows duplicate callbacks. Should it?
      listeners[event].push(callback);
    };

    /**
     * Remove an event callback that has already been bound.
     * Only works on the matching funciton, cannot be a copy.
     */
    this.removeEventListener = function (event, callback) {
      if (event in listeners) {
        // Filter will return a new array with the callback removed
        listeners[event] = listeners[event].filter(function (ev) {
          return ev !== callback;
        });
      }
    };

    /**
     * Dispatch any events, including both "on" methods and events attached using addEventListener.
     */
    this.dispatchEvent = function (event) {
      if (typeof self["on" + event] === "function") {
        if (this.readyState === this.DONE) setImmediate(function () {
          self["on" + event]();
        });else self["on" + event]();
      }
      if (event in listeners) {
        for (let i = 0, len = listeners[event].length; i < len; i++) {
          if (this.readyState === this.DONE) setImmediate(function () {
            listeners[event][i].call(self);
          });else listeners[event][i].call(self);
        }
      }
    };

    /**
     * Changes readyState and calls onreadystatechange.
     *
     * @param int state New state
     */
    var setState = function (state) {
      if (self.readyState === state || self.readyState === self.UNSENT && abortedFlag) return;
      self.readyState = state;
      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
        self.dispatchEvent("readystatechange");
      }
      if (self.readyState === self.DONE) {
        let fire;
        if (abortedFlag) fire = "abort";else if (errorFlag) fire = "error";else fire = "load";
        self.dispatchEvent(fire);

        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
        self.dispatchEvent("loadend");
      }
    };
  }

  var XMLHttpRequestModule = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': XMLHttpRequest_1
  }, [XMLHttpRequest_1]);

  const XHR = XMLHttpRequest_1 || XMLHttpRequestModule;

  function empty() {}
  const hasXHR2 = function () {
    const xhr = new XHR({
      xdomain: false
    });
    return null != xhr.responseType;
  }();
  class Polling extends Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
      super(opts);
      this.polling = false;
      if (typeof location !== "undefined") {
        const isSSL = "https:" === location.protocol;
        let port = location.port;
        // some user agents have empty `location.port`
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        this.xs = opts.secure !== isSSL;
      }
      /**
       * XHR supports binary
       */
      const forceBase64 = opts && opts.forceBase64;
      this.supportsBinary = hasXHR2 && !forceBase64;
    }
    get name() {
      return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
      this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
      this.readyState = "pausing";
      const pause = () => {
        this.readyState = "paused";
        onPause();
      };
      if (this.polling || !this.writable) {
        let total = 0;
        if (this.polling) {
          total++;
          this.once("pollComplete", function () {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function () {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    poll() {
      this.polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
      const callback = packet => {
        // if its the first message we consider the transport open
        if ("opening" === this.readyState && packet.type === "open") {
          this.onOpen();
        }
        // if its a close packet, we close the ongoing requests
        if ("close" === packet.type) {
          this.onClose({
            description: "transport closed by the server"
          });
          return false;
        }
        // otherwise bypass onData and handle the message
        this.onPacket(packet);
      };
      // decode payload
      decodePayload(data, this.socket.binaryType).forEach(callback);
      // if an event did not trigger closing
      if ("closed" !== this.readyState) {
        // if we got data we're not polling
        this.polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this.poll();
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
      const close = () => {
        this.write([{
          type: "close"
        }]);
      };
      if ("open" === this.readyState) {
        close();
      } else {
        // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
      this.writable = false;
      encodePayload(packets, data => {
        this.doWrite(data, () => {
          this.writable = true;
          this.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      let query = this.query || {};
      const schema = this.opts.secure ? "https" : "http";
      let port = "";
      // cache busting is forced
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      // avoid port if default for schema
      if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      }
      const encodedQuery = encode(query);
      const ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */
    request(opts = {}) {
      Object.assign(opts, {
        xd: this.xd,
        xs: this.xs
      }, this.opts);
      return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
      const req = this.request({
        method: "POST",
        data: data
      });
      req.on("success", fn);
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
      const req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  }
  class Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(uri, opts) {
      super();
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.method = opts.method || "GET";
      this.uri = uri;
      this.async = false !== opts.async;
      this.data = undefined !== opts.data ? opts.data : null;
      this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    create() {
      const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this.opts.xd;
      opts.xscheme = !!this.opts.xs;
      const xhr = this.xhr = new XHR(opts);
      try {
        xhr.open(this.method, this.uri, this.async);
        try {
          if (this.opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (let i in this.opts.extraHeaders) {
              if (this.opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {}
        if ("POST" === this.method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {}
        // ie6 check
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.opts.withCredentials;
        }
        if (this.opts.requestTimeout) {
          xhr.timeout = this.opts.requestTimeout;
        }
        xhr.onreadystatechange = () => {
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            this.onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            this.setTimeoutFn(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this.data);
      } catch (e) {
        // Need to defer since .create() is called directly from the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        this.setTimeoutFn(() => {
          this.onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    onError(err) {
      this.emitReserved("error", err, this.xhr);
      this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    cleanup(fromError) {
      if ("undefined" === typeof this.xhr || null === this.xhr) {
        return;
      }
      this.xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this.xhr.abort();
        } catch (e) {}
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this.index];
      }
      this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    onLoad() {
      const data = this.xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this.cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
      this.cleanup();
    }
  }
  Request.requestsCount = 0;
  Request.requests = {};
  /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */
  if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
      // @ts-ignore
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (let i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }

  var bufferUtil$1 = {exports: {}};

  var constants = {
    BINARY_TYPES: ['nodebuffer', 'arraybuffer', 'fragments'],
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
    kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
    kListener: Symbol('kListener'),
    kStatusCode: Symbol('status-code'),
    kWebSocket: Symbol('websocket'),
    NOOP: () => {}
  };

  var unmask$1;
  var mask;

  const {
    EMPTY_BUFFER: EMPTY_BUFFER$3
  } = constants;

  /**
   * Merges an array of buffers into a new buffer.
   *
   * @param {Buffer[]} list The array of buffers to concat
   * @param {Number} totalLength The total length of buffers in the list
   * @return {Buffer} The resulting buffer
   * @public
   */
  function concat$1(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER$3;
    if (list.length === 1) return list[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for (let i = 0; i < list.length; i++) {
      const buf = list[i];
      target.set(buf, offset);
      offset += buf.length;
    }
    if (offset < totalLength) return target.slice(0, offset);
    return target;
  }

  /**
   * Masks a buffer using the given mask.
   *
   * @param {Buffer} source The buffer to mask
   * @param {Buffer} mask The mask to use
   * @param {Buffer} output The buffer where to store the result
   * @param {Number} offset The offset at which to start writing
   * @param {Number} length The number of bytes to mask.
   * @public
   */
  function _mask(source, mask, output, offset, length) {
    for (let i = 0; i < length; i++) {
      output[offset + i] = source[i] ^ mask[i & 3];
    }
  }

  /**
   * Unmasks a buffer using the given mask.
   *
   * @param {Buffer} buffer The buffer to unmask
   * @param {Buffer} mask The mask to use
   * @public
   */
  function _unmask(buffer, mask) {
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] ^= mask[i & 3];
    }
  }

  /**
   * Converts a buffer to an `ArrayBuffer`.
   *
   * @param {Buffer} buf The buffer to convert
   * @return {ArrayBuffer} Converted buffer
   * @public
   */
  function toArrayBuffer$1(buf) {
    if (buf.byteLength === buf.buffer.byteLength) {
      return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }

  /**
   * Converts `data` to a `Buffer`.
   *
   * @param {*} data The data to convert
   * @return {Buffer} The buffer
   * @throws {TypeError}
   * @public
   */
  function toBuffer$2(data) {
    toBuffer$2.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
      buf = Buffer.from(data);
    } else if (ArrayBuffer.isView(data)) {
      buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    } else {
      buf = Buffer.from(data);
      toBuffer$2.readOnly = false;
    }
    return buf;
  }
  bufferUtil$1.exports = {
    concat: concat$1,
    mask: _mask,
    toArrayBuffer: toArrayBuffer$1,
    toBuffer: toBuffer$2,
    unmask: _unmask
  };

  /* istanbul ignore else  */
  if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
      const bufferUtil = require('bufferutil');
      mask = bufferUtil$1.exports.mask = function (source, mask, output, offset, length) {
        if (length < 48) _mask(source, mask, output, offset, length);else bufferUtil.mask(source, mask, output, offset, length);
      };
      unmask$1 = bufferUtil$1.exports.unmask = function (buffer, mask) {
        if (buffer.length < 32) _unmask(buffer, mask);else bufferUtil.unmask(buffer, mask);
      };
    } catch (e) {
      // Continue regardless of the error.
    }
  }

  const kDone = Symbol('kDone');
  const kRun = Symbol('kRun');

  /**
   * A very simple job queue with adjustable concurrency. Adapted from
   * https://github.com/STRML/async-limiter
   */
  class Limiter$1 {
    /**
     * Creates a new `Limiter`.
     *
     * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
     *     to run concurrently
     */
    constructor(concurrency) {
      this[kDone] = () => {
        this.pending--;
        this[kRun]();
      };
      this.concurrency = concurrency || Infinity;
      this.jobs = [];
      this.pending = 0;
    }

    /**
     * Adds a job to the queue.
     *
     * @param {Function} job The job to run
     * @public
     */
    add(job) {
      this.jobs.push(job);
      this[kRun]();
    }

    /**
     * Removes a job from the queue and runs it if possible.
     *
     * @private
     */
    [kRun]() {
      if (this.pending === this.concurrency) return;
      if (this.jobs.length) {
        const job = this.jobs.shift();
        this.pending++;
        job(this[kDone]);
      }
    }
  }
  var limiter = Limiter$1;

  const zlib = zlib__default["default"];
  const bufferUtil = bufferUtil$1.exports;
  const Limiter = limiter;
  const {
    kStatusCode: kStatusCode$2
  } = constants;
  const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
  const kPerMessageDeflate = Symbol('permessage-deflate');
  const kTotalLength = Symbol('total-length');
  const kCallback = Symbol('callback');
  const kBuffers = Symbol('buffers');
  const kError$1 = Symbol('error');

  //
  // We limit zlib concurrency, which prevents severe memory fragmentation
  // as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
  // and https://github.com/websockets/ws/issues/1202
  //
  // Intentionally global; it's the global thread pool that's an issue.
  //
  let zlibLimiter;

  /**
   * permessage-deflate implementation.
   */
  class PerMessageDeflate$3 {
    /**
     * Creates a PerMessageDeflate instance.
     *
     * @param {Object} [options] Configuration options
     * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
     *     for, or request, a custom client window size
     * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
     *     acknowledge disabling of client context takeover
     * @param {Number} [options.concurrencyLimit=10] The number of concurrent
     *     calls to zlib
     * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
     *     use of a custom server window size
     * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
     *     disabling of server context takeover
     * @param {Number} [options.threshold=1024] Size (in bytes) below which
     *     messages should not be compressed if context takeover is disabled
     * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
     *     deflate
     * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
     *     inflate
     * @param {Boolean} [isServer=false] Create the instance in either server or
     *     client mode
     * @param {Number} [maxPayload=0] The maximum allowed message length
     */
    constructor(options, isServer, maxPayload) {
      this._maxPayload = maxPayload | 0;
      this._options = options || {};
      this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
      this._isServer = !!isServer;
      this._deflate = null;
      this._inflate = null;
      this.params = null;
      if (!zlibLimiter) {
        const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
        zlibLimiter = new Limiter(concurrency);
      }
    }

    /**
     * @type {String}
     */
    static get extensionName() {
      return 'permessage-deflate';
    }

    /**
     * Create an extension negotiation offer.
     *
     * @return {Object} Extension parameters
     * @public
     */
    offer() {
      const params = {};
      if (this._options.serverNoContextTakeover) {
        params.server_no_context_takeover = true;
      }
      if (this._options.clientNoContextTakeover) {
        params.client_no_context_takeover = true;
      }
      if (this._options.serverMaxWindowBits) {
        params.server_max_window_bits = this._options.serverMaxWindowBits;
      }
      if (this._options.clientMaxWindowBits) {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits == null) {
        params.client_max_window_bits = true;
      }
      return params;
    }

    /**
     * Accept an extension negotiation offer/response.
     *
     * @param {Array} configurations The extension negotiation offers/reponse
     * @return {Object} Accepted configuration
     * @public
     */
    accept(configurations) {
      configurations = this.normalizeParams(configurations);
      this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
      return this.params;
    }

    /**
     * Releases all resources used by the extension.
     *
     * @public
     */
    cleanup() {
      if (this._inflate) {
        this._inflate.close();
        this._inflate = null;
      }
      if (this._deflate) {
        const callback = this._deflate[kCallback];
        this._deflate.close();
        this._deflate = null;
        if (callback) {
          callback(new Error('The deflate stream was closed while data was being processed'));
        }
      }
    }

    /**
     *  Accept an extension negotiation offer.
     *
     * @param {Array} offers The extension negotiation offers
     * @return {Object} Accepted configuration
     * @private
     */
    acceptAsServer(offers) {
      const opts = this._options;
      const accepted = offers.find(params => {
        if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
          return false;
        }
        return true;
      });
      if (!accepted) {
        throw new Error('None of the extension offers can be accepted');
      }
      if (opts.serverNoContextTakeover) {
        accepted.server_no_context_takeover = true;
      }
      if (opts.clientNoContextTakeover) {
        accepted.client_no_context_takeover = true;
      }
      if (typeof opts.serverMaxWindowBits === 'number') {
        accepted.server_max_window_bits = opts.serverMaxWindowBits;
      }
      if (typeof opts.clientMaxWindowBits === 'number') {
        accepted.client_max_window_bits = opts.clientMaxWindowBits;
      } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
        delete accepted.client_max_window_bits;
      }
      return accepted;
    }

    /**
     * Accept the extension negotiation response.
     *
     * @param {Array} response The extension negotiation response
     * @return {Object} Accepted configuration
     * @private
     */
    acceptAsClient(response) {
      const params = response[0];
      if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
        throw new Error('Unexpected parameter "client_no_context_takeover"');
      }
      if (!params.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === 'number') {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        }
      } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
        throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      }
      return params;
    }

    /**
     * Normalize parameters.
     *
     * @param {Array} configurations The extension negotiation offers/reponse
     * @return {Array} The offers/response with normalized parameters
     * @private
     */
    normalizeParams(configurations) {
      configurations.forEach(params => {
        Object.keys(params).forEach(key => {
          let value = params[key];
          if (value.length > 1) {
            throw new Error(`Parameter "${key}" must have only a single value`);
          }
          value = value[0];
          if (key === 'client_max_window_bits') {
            if (value !== true) {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
              value = num;
            } else if (!this._isServer) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
            }
          } else if (key === 'server_max_window_bits') {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
            }
            value = num;
          } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
            if (value !== true) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
            }
          } else {
            throw new Error(`Unknown parameter "${key}"`);
          }
          params[key] = value;
        });
      });
      return configurations;
    }

    /**
     * Decompress data. Concurrency limited.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */
    decompress(data, fin, callback) {
      zlibLimiter.add(done => {
        this._decompress(data, fin, (err, result) => {
          done();
          callback(err, result);
        });
      });
    }

    /**
     * Compress data. Concurrency limited.
     *
     * @param {(Buffer|String)} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */
    compress(data, fin, callback) {
      zlibLimiter.add(done => {
        this._compress(data, fin, (err, result) => {
          done();
          callback(err, result);
        });
      });
    }

    /**
     * Decompress data.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */
    _decompress(data, fin, callback) {
      const endpoint = this._isServer ? 'client' : 'server';
      if (!this._inflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._inflate = zlib.createInflateRaw({
          ...this._options.zlibInflateOptions,
          windowBits
        });
        this._inflate[kPerMessageDeflate] = this;
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];
        this._inflate.on('error', inflateOnError);
        this._inflate.on('data', inflateOnData);
      }
      this._inflate[kCallback] = callback;
      this._inflate.write(data);
      if (fin) this._inflate.write(TRAILER);
      this._inflate.flush(() => {
        const err = this._inflate[kError$1];
        if (err) {
          this._inflate.close();
          this._inflate = null;
          callback(err);
          return;
        }
        const data = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
        if (this._inflate._readableState.endEmitted) {
          this._inflate.close();
          this._inflate = null;
        } else {
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._inflate.reset();
          }
        }
        callback(null, data);
      });
    }

    /**
     * Compress data.
     *
     * @param {(Buffer|String)} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */
    _compress(data, fin, callback) {
      const endpoint = this._isServer ? 'server' : 'client';
      if (!this._deflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._deflate = zlib.createDeflateRaw({
          ...this._options.zlibDeflateOptions,
          windowBits
        });
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        this._deflate.on('data', deflateOnData);
      }
      this._deflate[kCallback] = callback;
      this._deflate.write(data);
      this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
        if (!this._deflate) {
          //
          // The deflate stream was closed while data was being processed.
          //
          return;
        }
        let data = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
        if (fin) data = data.slice(0, data.length - 4);

        //
        // Ensure that the callback will not be called again in
        // `PerMessageDeflate#cleanup()`.
        //
        this._deflate[kCallback] = null;
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._deflate.reset();
        }
        callback(null, data);
      });
    }
  }
  var permessageDeflate = PerMessageDeflate$3;

  /**
   * The listener of the `zlib.DeflateRaw` stream `'data'` event.
   *
   * @param {Buffer} chunk A chunk of data
   * @private
   */
  function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
  }

  /**
   * The listener of the `zlib.InflateRaw` stream `'data'` event.
   *
   * @param {Buffer} chunk A chunk of data
   * @private
   */
  function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
      this[kBuffers].push(chunk);
      return;
    }
    this[kError$1] = new RangeError('Max payload size exceeded');
    this[kError$1].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
    this[kError$1][kStatusCode$2] = 1009;
    this.removeListener('data', inflateOnData);
    this.reset();
  }

  /**
   * The listener of the `zlib.InflateRaw` stream `'error'` event.
   *
   * @param {Error} err The emitted error
   * @private
   */
  function inflateOnError(err) {
    //
    // There is no need to call `Zlib#close()` as the handle is automatically
    // closed when an error is emitted.
    //
    this[kPerMessageDeflate]._inflate = null;
    err[kStatusCode$2] = 1007;
    this[kCallback](err);
  }

  var validation = {exports: {}};

  var isValidUTF8_1;

  //
  // Allowed token characters:
  //
  // '!', '#', '$', '%', '&', ''', '*', '+', '-',
  // '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
  //
  // tokenChars[32] === 0 // ' '
  // tokenChars[33] === 1 // '!'
  // tokenChars[34] === 0 // '"'
  // ...
  //
  // prettier-ignore
  const tokenChars$1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  // 0 - 15
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  // 16 - 31
  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
  // 32 - 47
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
  // 48 - 63
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  // 64 - 79
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
  // 80 - 95
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  // 96 - 111
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
  ];

  /**
   * Checks if a status code is allowed in a close frame.
   *
   * @param {Number} code The status code
   * @return {Boolean} `true` if the status code is valid, else `false`
   * @public
   */
  function isValidStatusCode$2(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
  }

  /**
   * Checks if a given buffer contains only correct UTF-8.
   * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
   * Markus Kuhn.
   *
   * @param {Buffer} buf The buffer to check
   * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
   * @public
   */
  function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while (i < len) {
      if ((buf[i] & 0x80) === 0) {
        // 0xxxxxxx
        i++;
      } else if ((buf[i] & 0xe0) === 0xc0) {
        // 110xxxxx 10xxxxxx
        if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // Overlong
        ) {
          return false;
        }
        i += 2;
      } else if ((buf[i] & 0xf0) === 0xe0) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 ||
        // Overlong
        buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // Surrogate (U+D800 - U+DFFF)
        ) {
          return false;
        }
        i += 3;
      } else if ((buf[i] & 0xf8) === 0xf0) {
        // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
        if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 ||
        // Overlong
        buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
        ) {
          return false;
        }
        i += 4;
      } else {
        return false;
      }
    }
    return true;
  }
  validation.exports = {
    isValidStatusCode: isValidStatusCode$2,
    isValidUTF8: _isValidUTF8,
    tokenChars: tokenChars$1
  };

  /* istanbul ignore else  */
  if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
      const isValidUTF8 = require('utf-8-validate');
      isValidUTF8_1 = validation.exports.isValidUTF8 = function (buf) {
        return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
      };
    } catch (e) {
      // Continue regardless of the error.
    }
  }

  const {
    Writable
  } = stream__default["default"];
  const PerMessageDeflate$2 = permessageDeflate;
  const {
    BINARY_TYPES: BINARY_TYPES$1,
    EMPTY_BUFFER: EMPTY_BUFFER$2,
    kStatusCode: kStatusCode$1,
    kWebSocket: kWebSocket$1
  } = constants;
  const {
    concat,
    toArrayBuffer,
    unmask
  } = bufferUtil$1.exports;
  const {
    isValidStatusCode: isValidStatusCode$1,
    isValidUTF8
  } = validation.exports;
  const GET_INFO = 0;
  const GET_PAYLOAD_LENGTH_16 = 1;
  const GET_PAYLOAD_LENGTH_64 = 2;
  const GET_MASK = 3;
  const GET_DATA = 4;
  const INFLATING = 5;

  /**
   * HyBi Receiver implementation.
   *
   * @extends Writable
   */
  class Receiver$1 extends Writable {
    /**
     * Creates a Receiver instance.
     *
     * @param {Object} [options] Options object
     * @param {String} [options.binaryType=nodebuffer] The type for binary data
     * @param {Object} [options.extensions] An object containing the negotiated
     *     extensions
     * @param {Boolean} [options.isServer=false] Specifies whether to operate in
     *     client or server mode
     * @param {Number} [options.maxPayload=0] The maximum allowed message length
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     */
    constructor(options = {}) {
      super();
      this._binaryType = options.binaryType || BINARY_TYPES$1[0];
      this._extensions = options.extensions || {};
      this._isServer = !!options.isServer;
      this._maxPayload = options.maxPayload | 0;
      this._skipUTF8Validation = !!options.skipUTF8Validation;
      this[kWebSocket$1] = undefined;
      this._bufferedBytes = 0;
      this._buffers = [];
      this._compressed = false;
      this._payloadLength = 0;
      this._mask = undefined;
      this._fragmented = 0;
      this._masked = false;
      this._fin = false;
      this._opcode = 0;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragments = [];
      this._state = GET_INFO;
      this._loop = false;
    }

    /**
     * Implements `Writable.prototype._write()`.
     *
     * @param {Buffer} chunk The chunk of data to write
     * @param {String} encoding The character encoding of `chunk`
     * @param {Function} cb Callback
     * @private
     */
    _write(chunk, encoding, cb) {
      if (this._opcode === 0x08 && this._state == GET_INFO) return cb();
      this._bufferedBytes += chunk.length;
      this._buffers.push(chunk);
      this.startLoop(cb);
    }

    /**
     * Consumes `n` bytes from the buffered data.
     *
     * @param {Number} n The number of bytes to consume
     * @return {Buffer} The consumed bytes
     * @private
     */
    consume(n) {
      this._bufferedBytes -= n;
      if (n === this._buffers[0].length) return this._buffers.shift();
      if (n < this._buffers[0].length) {
        const buf = this._buffers[0];
        this._buffers[0] = buf.slice(n);
        return buf.slice(0, n);
      }
      const dst = Buffer.allocUnsafe(n);
      do {
        const buf = this._buffers[0];
        const offset = dst.length - n;
        if (n >= buf.length) {
          dst.set(this._buffers.shift(), offset);
        } else {
          dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
          this._buffers[0] = buf.slice(n);
        }
        n -= buf.length;
      } while (n > 0);
      return dst;
    }

    /**
     * Starts the parsing loop.
     *
     * @param {Function} cb Callback
     * @private
     */
    startLoop(cb) {
      let err;
      this._loop = true;
      do {
        switch (this._state) {
          case GET_INFO:
            err = this.getInfo();
            break;
          case GET_PAYLOAD_LENGTH_16:
            err = this.getPayloadLength16();
            break;
          case GET_PAYLOAD_LENGTH_64:
            err = this.getPayloadLength64();
            break;
          case GET_MASK:
            this.getMask();
            break;
          case GET_DATA:
            err = this.getData(cb);
            break;
          default:
            // `INFLATING`
            this._loop = false;
            return;
        }
      } while (this._loop);
      cb(err);
    }

    /**
     * Reads the first two bytes of a frame.
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */
    getInfo() {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      const buf = this.consume(2);
      if ((buf[0] & 0x30) !== 0x00) {
        this._loop = false;
        return error(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
      }
      const compressed = (buf[0] & 0x40) === 0x40;
      if (compressed && !this._extensions[PerMessageDeflate$2.extensionName]) {
        this._loop = false;
        return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
      }
      this._fin = (buf[0] & 0x80) === 0x80;
      this._opcode = buf[0] & 0x0f;
      this._payloadLength = buf[1] & 0x7f;
      if (this._opcode === 0x00) {
        if (compressed) {
          this._loop = false;
          return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
        }
        if (!this._fragmented) {
          this._loop = false;
          return error(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 0x01 || this._opcode === 0x02) {
        if (this._fragmented) {
          this._loop = false;
          return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
        }
        this._compressed = compressed;
      } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
        if (!this._fin) {
          this._loop = false;
          return error(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
        }
        if (compressed) {
          this._loop = false;
          return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
        }
        if (this._payloadLength > 0x7d) {
          this._loop = false;
          return error(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
        }
      } else {
        this._loop = false;
        return error(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
      }
      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
      this._masked = (buf[1] & 0x80) === 0x80;
      if (this._isServer) {
        if (!this._masked) {
          this._loop = false;
          return error(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
        }
      } else if (this._masked) {
        this._loop = false;
        return error(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
      }
      if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;else return this.haveLength();
    }

    /**
     * Gets extended payload length (7+16).
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */
    getPayloadLength16() {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0);
      return this.haveLength();
    }

    /**
     * Gets extended payload length (7+64).
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */
    getPayloadLength64() {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }
      const buf = this.consume(8);
      const num = buf.readUInt32BE(0);

      //
      // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
      // if payload length is greater than this number.
      //
      if (num > Math.pow(2, 53 - 32) - 1) {
        this._loop = false;
        return error(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
      }
      this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
      return this.haveLength();
    }

    /**
     * Payload length has been read.
     *
     * @return {(RangeError|undefined)} A possible error
     * @private
     */
    haveLength() {
      if (this._payloadLength && this._opcode < 0x08) {
        this._totalPayloadLength += this._payloadLength;
        if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
          this._loop = false;
          return error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
        }
      }
      if (this._masked) this._state = GET_MASK;else this._state = GET_DATA;
    }

    /**
     * Reads mask bytes.
     *
     * @private
     */
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }
      this._mask = this.consume(4);
      this._state = GET_DATA;
    }

    /**
     * Reads data bytes.
     *
     * @param {Function} cb Callback
     * @return {(Error|RangeError|undefined)} A possible error
     * @private
     */
    getData(cb) {
      let data = EMPTY_BUFFER$2;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }
        data = this.consume(this._payloadLength);
        if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
          unmask(data, this._mask);
        }
      }
      if (this._opcode > 0x07) return this.controlMessage(data);
      if (this._compressed) {
        this._state = INFLATING;
        this.decompress(data, cb);
        return;
      }
      if (data.length) {
        //
        // This message is not compressed so its length is the sum of the payload
        // length of all fragments.
        //
        this._messageLength = this._totalPayloadLength;
        this._fragments.push(data);
      }
      return this.dataMessage();
    }

    /**
     * Decompresses data.
     *
     * @param {Buffer} data Compressed data
     * @param {Function} cb Callback
     * @private
     */
    decompress(data, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];
      perMessageDeflate.decompress(data, this._fin, (err, buf) => {
        if (err) return cb(err);
        if (buf.length) {
          this._messageLength += buf.length;
          if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
            return cb(error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'));
          }
          this._fragments.push(buf);
        }
        const er = this.dataMessage();
        if (er) return cb(er);
        this.startLoop(cb);
      });
    }

    /**
     * Handles a data message.
     *
     * @return {(Error|undefined)} A possible error
     * @private
     */
    dataMessage() {
      if (this._fin) {
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === 'nodebuffer') {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === 'arraybuffer') {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else {
            data = fragments;
          }
          this.emit('message', data, true);
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            this._loop = false;
            return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
          }
          this.emit('message', buf, false);
        }
      }
      this._state = GET_INFO;
    }

    /**
     * Handles a control message.
     *
     * @param {Buffer} data Data to handle
     * @return {(Error|RangeError|undefined)} A possible error
     * @private
     */
    controlMessage(data) {
      if (this._opcode === 0x08) {
        this._loop = false;
        if (data.length === 0) {
          this.emit('conclude', 1005, EMPTY_BUFFER$2);
          this.end();
        } else if (data.length === 1) {
          return error(RangeError, 'invalid payload length 1', true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
        } else {
          const code = data.readUInt16BE(0);
          if (!isValidStatusCode$1(code)) {
            return error(RangeError, `invalid status code ${code}`, true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
          }
          const buf = data.slice(2);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
          }
          this.emit('conclude', code, buf);
          this.end();
        }
      } else if (this._opcode === 0x09) {
        this.emit('ping', data);
      } else {
        this.emit('pong', data);
      }
      this._state = GET_INFO;
    }
  }
  var receiver = Receiver$1;

  /**
   * Builds an error object.
   *
   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
   * @param {String} message The error message
   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
   *     `message`
   * @param {Number} statusCode The status code
   * @param {String} errorCode The exposed error code
   * @return {(Error|RangeError)} The error
   * @private
   */
  function error(ErrorCtor, message, prefix, statusCode, errorCode) {
    const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
    Error.captureStackTrace(err, error);
    err.code = errorCode;
    err[kStatusCode$1] = statusCode;
    return err;
  }

  /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */
  const {
    randomFillSync
  } = require$$5__default["default"];
  const PerMessageDeflate$1 = permessageDeflate;
  const {
    EMPTY_BUFFER: EMPTY_BUFFER$1
  } = constants;
  const {
    isValidStatusCode
  } = validation.exports;
  const {
    mask: applyMask,
    toBuffer: toBuffer$1
  } = bufferUtil$1.exports;
  const kByteLength = Symbol('kByteLength');
  const maskBuffer = Buffer.alloc(4);

  /**
   * HyBi Sender implementation.
   */
  class Sender$1 {
    /**
     * Creates a Sender instance.
     *
     * @param {(net.Socket|tls.Socket)} socket The connection socket
     * @param {Object} [extensions] An object containing the negotiated extensions
     * @param {Function} [generateMask] The function used to generate the masking
     *     key
     */
    constructor(socket, extensions, generateMask) {
      this._extensions = extensions || {};
      if (generateMask) {
        this._generateMask = generateMask;
        this._maskBuffer = Buffer.alloc(4);
      }
      this._socket = socket;
      this._firstFragment = true;
      this._compress = false;
      this._bufferedBytes = 0;
      this._deflating = false;
      this._queue = [];
    }

    /**
     * Frames a piece of data according to the HyBi WebSocket protocol.
     *
     * @param {(Buffer|String)} data The data to frame
     * @param {Object} options Options object
     * @param {Boolean} [options.fin=false] Specifies whether or not to set the
     *     FIN bit
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
     *     key
     * @param {Number} options.opcode The opcode
     * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
     *     modified
     * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
     *     RSV1 bit
     * @return {(Buffer|String)[]} The framed data
     * @public
     */
    static frame(data, options) {
      let mask;
      let merge = false;
      let offset = 2;
      let skipMasking = false;
      if (options.mask) {
        mask = options.maskBuffer || maskBuffer;
        if (options.generateMask) {
          options.generateMask(mask);
        } else {
          randomFillSync(mask, 0, 4);
        }
        skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
        offset = 6;
      }
      let dataLength;
      if (typeof data === 'string') {
        if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
          dataLength = options[kByteLength];
        } else {
          data = Buffer.from(data);
          dataLength = data.length;
        }
      } else {
        dataLength = data.length;
        merge = options.mask && options.readOnly && !skipMasking;
      }
      let payloadLength = dataLength;
      if (dataLength >= 65536) {
        offset += 8;
        payloadLength = 127;
      } else if (dataLength > 125) {
        offset += 2;
        payloadLength = 126;
      }
      const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
      target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
      if (options.rsv1) target[0] |= 0x40;
      target[1] = payloadLength;
      if (payloadLength === 126) {
        target.writeUInt16BE(dataLength, 2);
      } else if (payloadLength === 127) {
        target[2] = target[3] = 0;
        target.writeUIntBE(dataLength, 4, 6);
      }
      if (!options.mask) return [target, data];
      target[1] |= 0x80;
      target[offset - 4] = mask[0];
      target[offset - 3] = mask[1];
      target[offset - 2] = mask[2];
      target[offset - 1] = mask[3];
      if (skipMasking) return [target, data];
      if (merge) {
        applyMask(data, mask, target, offset, dataLength);
        return [target];
      }
      applyMask(data, mask, data, 0, dataLength);
      return [target, data];
    }

    /**
     * Sends a close message to the other peer.
     *
     * @param {Number} [code] The status code component of the body
     * @param {(String|Buffer)} [data] The message component of the body
     * @param {Boolean} [mask=false] Specifies whether or not to mask the message
     * @param {Function} [cb] Callback
     * @public
     */
    close(code, data, mask, cb) {
      let buf;
      if (code === undefined) {
        buf = EMPTY_BUFFER$1;
      } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
        throw new TypeError('First argument must be a valid error code number');
      } else if (data === undefined || !data.length) {
        buf = Buffer.allocUnsafe(2);
        buf.writeUInt16BE(code, 0);
      } else {
        const length = Buffer.byteLength(data);
        if (length > 123) {
          throw new RangeError('The message must not be greater than 123 bytes');
        }
        buf = Buffer.allocUnsafe(2 + length);
        buf.writeUInt16BE(code, 0);
        if (typeof data === 'string') {
          buf.write(data, 2);
        } else {
          buf.set(data, 2);
        }
      }
      const options = {
        [kByteLength]: buf.length,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 0x08,
        readOnly: false,
        rsv1: false
      };
      if (this._deflating) {
        this.enqueue([this.dispatch, buf, false, options, cb]);
      } else {
        this.sendFrame(Sender$1.frame(buf, options), cb);
      }
    }

    /**
     * Sends a ping message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback
     * @public
     */
    ping(data, mask, cb) {
      let byteLength;
      let readOnly;
      if (typeof data === 'string') {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer$1(data);
        byteLength = data.length;
        readOnly = toBuffer$1.readOnly;
      }
      if (byteLength > 125) {
        throw new RangeError('The data size must not be greater than 125 bytes');
      }
      const options = {
        [kByteLength]: byteLength,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 0x09,
        readOnly,
        rsv1: false
      };
      if (this._deflating) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender$1.frame(data, options), cb);
      }
    }

    /**
     * Sends a pong message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback
     * @public
     */
    pong(data, mask, cb) {
      let byteLength;
      let readOnly;
      if (typeof data === 'string') {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer$1(data);
        byteLength = data.length;
        readOnly = toBuffer$1.readOnly;
      }
      if (byteLength > 125) {
        throw new RangeError('The data size must not be greater than 125 bytes');
      }
      const options = {
        [kByteLength]: byteLength,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 0x0a,
        readOnly,
        rsv1: false
      };
      if (this._deflating) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender$1.frame(data, options), cb);
      }
    }

    /**
     * Sends a data message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Object} options Options object
     * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
     *     or text
     * @param {Boolean} [options.compress=false] Specifies whether or not to
     *     compress `data`
     * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
     *     last one
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Function} [cb] Callback
     * @public
     */
    send(data, options, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate$1.extensionName];
      let opcode = options.binary ? 2 : 1;
      let rsv1 = options.compress;
      let byteLength;
      let readOnly;
      if (typeof data === 'string') {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else {
        data = toBuffer$1(data);
        byteLength = data.length;
        readOnly = toBuffer$1.readOnly;
      }
      if (this._firstFragment) {
        this._firstFragment = false;
        if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? 'server_no_context_takeover' : 'client_no_context_takeover']) {
          rsv1 = byteLength >= perMessageDeflate._threshold;
        }
        this._compress = rsv1;
      } else {
        rsv1 = false;
        opcode = 0;
      }
      if (options.fin) this._firstFragment = true;
      if (perMessageDeflate) {
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      } else {
        this.sendFrame(Sender$1.frame(data, {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1: false
        }), cb);
      }
    }

    /**
     * Dispatches a message.
     *
     * @param {(Buffer|String)} data The message to send
     * @param {Boolean} [compress=false] Specifies whether or not to compress
     *     `data`
     * @param {Object} options Options object
     * @param {Boolean} [options.fin=false] Specifies whether or not to set the
     *     FIN bit
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
     *     key
     * @param {Number} options.opcode The opcode
     * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
     *     modified
     * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
     *     RSV1 bit
     * @param {Function} [cb] Callback
     * @private
     */
    dispatch(data, compress, options, cb) {
      if (!compress) {
        this.sendFrame(Sender$1.frame(data, options), cb);
        return;
      }
      const perMessageDeflate = this._extensions[PerMessageDeflate$1.extensionName];
      this._bufferedBytes += options[kByteLength];
      this._deflating = true;
      perMessageDeflate.compress(data, options.fin, (_, buf) => {
        if (this._socket.destroyed) {
          const err = new Error('The socket was closed while data was being compressed');
          if (typeof cb === 'function') cb(err);
          for (let i = 0; i < this._queue.length; i++) {
            const params = this._queue[i];
            const callback = params[params.length - 1];
            if (typeof callback === 'function') callback(err);
          }
          return;
        }
        this._bufferedBytes -= options[kByteLength];
        this._deflating = false;
        options.readOnly = false;
        this.sendFrame(Sender$1.frame(buf, options), cb);
        this.dequeue();
      });
    }

    /**
     * Executes queued send operations.
     *
     * @private
     */
    dequeue() {
      while (!this._deflating && this._queue.length) {
        const params = this._queue.shift();
        this._bufferedBytes -= params[3][kByteLength];
        Reflect.apply(params[0], this, params.slice(1));
      }
    }

    /**
     * Enqueues a send operation.
     *
     * @param {Array} params Send operation parameters.
     * @private
     */
    enqueue(params) {
      this._bufferedBytes += params[3][kByteLength];
      this._queue.push(params);
    }

    /**
     * Sends a frame.
     *
     * @param {Buffer[]} list The frame to send
     * @param {Function} [cb] Callback
     * @private
     */
    sendFrame(list, cb) {
      if (list.length === 2) {
        this._socket.cork();
        this._socket.write(list[0]);
        this._socket.write(list[1], cb);
        this._socket.uncork();
      } else {
        this._socket.write(list[0], cb);
      }
    }
  }
  var sender = Sender$1;

  const {
    kForOnEventAttribute: kForOnEventAttribute$1,
    kListener: kListener$1
  } = constants;
  const kCode = Symbol('kCode');
  const kData = Symbol('kData');
  const kError = Symbol('kError');
  const kMessage = Symbol('kMessage');
  const kReason = Symbol('kReason');
  const kTarget = Symbol('kTarget');
  const kType = Symbol('kType');
  const kWasClean = Symbol('kWasClean');

  /**
   * Class representing an event.
   */
  class Event {
    /**
     * Create a new `Event`.
     *
     * @param {String} type The name of the event
     * @throws {TypeError} If the `type` argument is not specified
     */
    constructor(type) {
      this[kTarget] = null;
      this[kType] = type;
    }

    /**
     * @type {*}
     */
    get target() {
      return this[kTarget];
    }

    /**
     * @type {String}
     */
    get type() {
      return this[kType];
    }
  }
  Object.defineProperty(Event.prototype, 'target', {
    enumerable: true
  });
  Object.defineProperty(Event.prototype, 'type', {
    enumerable: true
  });

  /**
   * Class representing a close event.
   *
   * @extends Event
   */
  class CloseEvent extends Event {
    /**
     * Create a new `CloseEvent`.
     *
     * @param {String} type The name of the event
     * @param {Object} [options] A dictionary object that allows for setting
     *     attributes via object members of the same name
     * @param {Number} [options.code=0] The status code explaining why the
     *     connection was closed
     * @param {String} [options.reason=''] A human-readable string explaining why
     *     the connection was closed
     * @param {Boolean} [options.wasClean=false] Indicates whether or not the
     *     connection was cleanly closed
     */
    constructor(type, options = {}) {
      super(type);
      this[kCode] = options.code === undefined ? 0 : options.code;
      this[kReason] = options.reason === undefined ? '' : options.reason;
      this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    }

    /**
     * @type {Number}
     */
    get code() {
      return this[kCode];
    }

    /**
     * @type {String}
     */
    get reason() {
      return this[kReason];
    }

    /**
     * @type {Boolean}
     */
    get wasClean() {
      return this[kWasClean];
    }
  }
  Object.defineProperty(CloseEvent.prototype, 'code', {
    enumerable: true
  });
  Object.defineProperty(CloseEvent.prototype, 'reason', {
    enumerable: true
  });
  Object.defineProperty(CloseEvent.prototype, 'wasClean', {
    enumerable: true
  });

  /**
   * Class representing an error event.
   *
   * @extends Event
   */
  class ErrorEvent extends Event {
    /**
     * Create a new `ErrorEvent`.
     *
     * @param {String} type The name of the event
     * @param {Object} [options] A dictionary object that allows for setting
     *     attributes via object members of the same name
     * @param {*} [options.error=null] The error that generated this event
     * @param {String} [options.message=''] The error message
     */
    constructor(type, options = {}) {
      super(type);
      this[kError] = options.error === undefined ? null : options.error;
      this[kMessage] = options.message === undefined ? '' : options.message;
    }

    /**
     * @type {*}
     */
    get error() {
      return this[kError];
    }

    /**
     * @type {String}
     */
    get message() {
      return this[kMessage];
    }
  }
  Object.defineProperty(ErrorEvent.prototype, 'error', {
    enumerable: true
  });
  Object.defineProperty(ErrorEvent.prototype, 'message', {
    enumerable: true
  });

  /**
   * Class representing a message event.
   *
   * @extends Event
   */
  class MessageEvent extends Event {
    /**
     * Create a new `MessageEvent`.
     *
     * @param {String} type The name of the event
     * @param {Object} [options] A dictionary object that allows for setting
     *     attributes via object members of the same name
     * @param {*} [options.data=null] The message content
     */
    constructor(type, options = {}) {
      super(type);
      this[kData] = options.data === undefined ? null : options.data;
    }

    /**
     * @type {*}
     */
    get data() {
      return this[kData];
    }
  }
  Object.defineProperty(MessageEvent.prototype, 'data', {
    enumerable: true
  });

  /**
   * This provides methods for emulating the `EventTarget` interface. It's not
   * meant to be used directly.
   *
   * @mixin
   */
  const EventTarget = {
    /**
     * Register an event listener.
     *
     * @param {String} type A string representing the event type to listen for
     * @param {(Function|Object)} handler The listener to add
     * @param {Object} [options] An options object specifies characteristics about
     *     the event listener
     * @param {Boolean} [options.once=false] A `Boolean` indicating that the
     *     listener should be invoked at most once after being added. If `true`,
     *     the listener would be automatically removed when invoked.
     * @public
     */
    addEventListener(type, handler, options = {}) {
      for (const listener of this.listeners(type)) {
        if (!options[kForOnEventAttribute$1] && listener[kListener$1] === handler && !listener[kForOnEventAttribute$1]) {
          return;
        }
      }
      let wrapper;
      if (type === 'message') {
        wrapper = function onMessage(data, isBinary) {
          const event = new MessageEvent('message', {
            data: isBinary ? data : data.toString()
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === 'close') {
        wrapper = function onClose(code, message) {
          const event = new CloseEvent('close', {
            code,
            reason: message.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === 'error') {
        wrapper = function onError(error) {
          const event = new ErrorEvent('error', {
            error,
            message: error.message
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === 'open') {
        wrapper = function onOpen() {
          const event = new Event('open');
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else {
        return;
      }
      wrapper[kForOnEventAttribute$1] = !!options[kForOnEventAttribute$1];
      wrapper[kListener$1] = handler;
      if (options.once) {
        this.once(type, wrapper);
      } else {
        this.on(type, wrapper);
      }
    },
    /**
     * Remove an event listener.
     *
     * @param {String} type A string representing the event type to remove
     * @param {(Function|Object)} handler The listener to remove
     * @public
     */
    removeEventListener(type, handler) {
      for (const listener of this.listeners(type)) {
        if (listener[kListener$1] === handler && !listener[kForOnEventAttribute$1]) {
          this.removeListener(type, listener);
          break;
        }
      }
    }
  };
  var eventTarget = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent
  };

  /**
   * Call an event listener
   *
   * @param {(Function|Object)} listener The listener to call
   * @param {*} thisArg The value to use as `this`` when calling the listener
   * @param {Event} event The event to pass to the listener
   * @private
   */
  function callListener(listener, thisArg, event) {
    if (typeof listener === 'object' && listener.handleEvent) {
      listener.handleEvent.call(listener, event);
    } else {
      listener.call(thisArg, event);
    }
  }

  const {
    tokenChars
  } = validation.exports;

  /**
   * Adds an offer to the map of extension offers or a parameter to the map of
   * parameters.
   *
   * @param {Object} dest The map of extension offers or parameters
   * @param {String} name The extension or parameter name
   * @param {(Object|Boolean|String)} elem The extension parameters or the
   *     parameter value
   * @private
   */
  function push(dest, name, elem) {
    if (dest[name] === undefined) dest[name] = [elem];else dest[name].push(elem);
  }

  /**
   * Parses the `Sec-WebSocket-Extensions` header into an object.
   *
   * @param {String} header The field value of the header
   * @return {Object} The parsed object
   * @public
   */
  function parse$2(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for (; i < header.length; i++) {
      code = header.charCodeAt(i);
      if (extensionName === undefined) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const name = header.slice(start, end);
          if (code === 0x2c) {
            push(offers, name, params);
            params = Object.create(null);
          } else {
            extensionName = name;
          }
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (paramName === undefined) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 0x20 || code === 0x09) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 0x3b || code === 0x2c) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          push(params, header.slice(start, end), true);
          if (code === 0x2c) {
            push(offers, extensionName, params);
            params = Object.create(null);
            extensionName = undefined;
          }
          start = end = -1;
        } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
          paramName = header.slice(start, i);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else {
        //
        // The value of a quoted-string after unescaping must conform to the
        // token ABNF, so only token characters are valid.
        // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
        //
        if (isEscaping) {
          if (tokenChars[code] !== 1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (start === -1) start = i;else if (!mustUnescape) mustUnescape = true;
          isEscaping = false;
        } else if (inQuotes) {
          if (tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 0x22 /* '"' */ && start !== -1) {
            inQuotes = false;
            end = i;
          } else if (code === 0x5c /* '\' */) {
            isEscaping = true;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
          inQuotes = true;
        } else if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
          if (end === -1) end = i;
        } else if (code === 0x3b || code === 0x2c) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          let value = header.slice(start, end);
          if (mustUnescape) {
            value = value.replace(/\\/g, '');
            mustUnescape = false;
          }
          push(params, paramName, value);
          if (code === 0x2c) {
            push(offers, extensionName, params);
            params = Object.create(null);
            extensionName = undefined;
          }
          paramName = undefined;
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
    }
    if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
      throw new SyntaxError('Unexpected end of input');
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
      push(offers, token, params);
    } else {
      if (paramName === undefined) {
        push(params, token, true);
      } else if (mustUnescape) {
        push(params, paramName, token.replace(/\\/g, ''));
      } else {
        push(params, paramName, token);
      }
      push(offers, extensionName, params);
    }
    return offers;
  }

  /**
   * Builds the `Sec-WebSocket-Extensions` header field value.
   *
   * @param {Object} extensions The map of extensions and parameters to format
   * @return {String} A string representing the given object
   * @public
   */
  function format$1(extensions) {
    return Object.keys(extensions).map(extension => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations)) configurations = [configurations];
      return configurations.map(params => {
        return [extension].concat(Object.keys(params).map(k => {
          let values = params[k];
          if (!Array.isArray(values)) values = [values];
          return values.map(v => v === true ? k : `${k}=${v}`).join('; ');
        })).join('; ');
      }).join(', ');
    }).join(', ');
  }
  var extension = {
    format: format$1,
    parse: parse$2
  };

  /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */

  const EventEmitter = require$$0__default$2["default"];
  const https = require$$2__default["default"];
  const http = require$$1__default$1["default"];
  const net = require$$3__default["default"];
  const tls = require$$4__default$1["default"];
  const {
    randomBytes,
    createHash
  } = require$$5__default["default"];
  const {
    URL: URL$1
  } = url$2;
  const PerMessageDeflate = permessageDeflate;
  const Receiver = receiver;
  const Sender = sender;
  const {
    BINARY_TYPES,
    EMPTY_BUFFER,
    GUID,
    kForOnEventAttribute,
    kListener,
    kStatusCode,
    kWebSocket,
    NOOP
  } = constants;
  const {
    EventTarget: {
      addEventListener: addEventListener$1,
      removeEventListener: removeEventListener$1
    }
  } = eventTarget;
  const {
    format,
    parse: parse$1
  } = extension;
  const {
    toBuffer
  } = bufferUtil$1.exports;
  const closeTimeout = 30 * 1000;
  const kAborted = Symbol('kAborted');
  const protocolVersions = [8, 13];
  const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
  const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

  /**
   * Class representing a WebSocket.
   *
   * @extends EventEmitter
   */
  class WebSocket$1 extends EventEmitter {
    /**
     * Create a new `WebSocket`.
     *
     * @param {(String|URL)} address The URL to which to connect
     * @param {(String|String[])} [protocols] The subprotocols
     * @param {Object} [options] Connection options
     */
    constructor(address, protocols, options) {
      super();
      this._binaryType = BINARY_TYPES[0];
      this._closeCode = 1006;
      this._closeFrameReceived = false;
      this._closeFrameSent = false;
      this._closeMessage = EMPTY_BUFFER;
      this._closeTimer = null;
      this._extensions = {};
      this._paused = false;
      this._protocol = '';
      this._readyState = WebSocket$1.CONNECTING;
      this._receiver = null;
      this._sender = null;
      this._socket = null;
      if (address !== null) {
        this._bufferedAmount = 0;
        this._isServer = false;
        this._redirects = 0;
        if (protocols === undefined) {
          protocols = [];
        } else if (!Array.isArray(protocols)) {
          if (typeof protocols === 'object' && protocols !== null) {
            options = protocols;
            protocols = [];
          } else {
            protocols = [protocols];
          }
        }
        initAsClient(this, address, protocols, options);
      } else {
        this._isServer = true;
      }
    }

    /**
     * This deviates from the WHATWG interface since ws doesn't support the
     * required default "blob" type (instead we define a custom "nodebuffer"
     * type).
     *
     * @type {String}
     */
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(type) {
      if (!BINARY_TYPES.includes(type)) return;
      this._binaryType = type;

      //
      // Allow to change `binaryType` on the fly.
      //
      if (this._receiver) this._receiver._binaryType = type;
    }

    /**
     * @type {Number}
     */
    get bufferedAmount() {
      if (!this._socket) return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes;
    }

    /**
     * @type {String}
     */
    get extensions() {
      return Object.keys(this._extensions).join();
    }

    /**
     * @type {Boolean}
     */
    get isPaused() {
      return this._paused;
    }

    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onclose() {
      return null;
    }

    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onerror() {
      return null;
    }

    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onopen() {
      return null;
    }

    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onmessage() {
      return null;
    }

    /**
     * @type {String}
     */
    get protocol() {
      return this._protocol;
    }

    /**
     * @type {Number}
     */
    get readyState() {
      return this._readyState;
    }

    /**
     * @type {String}
     */
    get url() {
      return this._url;
    }

    /**
     * Set up the socket and the internal resources.
     *
     * @param {(net.Socket|tls.Socket)} socket The network socket between the
     *     server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Object} options Options object
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Number} [options.maxPayload=0] The maximum allowed message size
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     * @private
     */
    setSocket(socket, head, options) {
      const receiver = new Receiver({
        binaryType: this.binaryType,
        extensions: this._extensions,
        isServer: this._isServer,
        maxPayload: options.maxPayload,
        skipUTF8Validation: options.skipUTF8Validation
      });
      this._sender = new Sender(socket, this._extensions, options.generateMask);
      this._receiver = receiver;
      this._socket = socket;
      receiver[kWebSocket] = this;
      socket[kWebSocket] = this;
      receiver.on('conclude', receiverOnConclude);
      receiver.on('drain', receiverOnDrain);
      receiver.on('error', receiverOnError);
      receiver.on('message', receiverOnMessage);
      receiver.on('ping', receiverOnPing);
      receiver.on('pong', receiverOnPong);
      socket.setTimeout(0);
      socket.setNoDelay();
      if (head.length > 0) socket.unshift(head);
      socket.on('close', socketOnClose);
      socket.on('data', socketOnData);
      socket.on('end', socketOnEnd);
      socket.on('error', socketOnError);
      this._readyState = WebSocket$1.OPEN;
      this.emit('open');
    }

    /**
     * Emit the `'close'` event.
     *
     * @private
     */
    emitClose() {
      if (!this._socket) {
        this._readyState = WebSocket$1.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
        return;
      }
      if (this._extensions[PerMessageDeflate.extensionName]) {
        this._extensions[PerMessageDeflate.extensionName].cleanup();
      }
      this._receiver.removeAllListeners();
      this._readyState = WebSocket$1.CLOSED;
      this.emit('close', this._closeCode, this._closeMessage);
    }

    /**
     * Start a closing handshake.
     *
     *          +----------+   +-----------+   +----------+
     *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
     *    |     +----------+   +-----------+   +----------+     |
     *          +----------+   +-----------+         |
     * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
     *          +----------+   +-----------+   |
     *    |           |                        |   +---+        |
     *                +------------------------+-->|fin| - - - -
     *    |         +---+                      |   +---+
     *     - - - - -|fin|<---------------------+
     *              +---+
     *
     * @param {Number} [code] Status code explaining why the connection is closing
     * @param {(String|Buffer)} [data] The reason why the connection is
     *     closing
     * @public
     */
    close(code, data) {
      if (this.readyState === WebSocket$1.CLOSED) return;
      if (this.readyState === WebSocket$1.CONNECTING) {
        const msg = 'WebSocket was closed before the connection was established';
        return abortHandshake(this, this._req, msg);
      }
      if (this.readyState === WebSocket$1.CLOSING) {
        if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
          this._socket.end();
        }
        return;
      }
      this._readyState = WebSocket$1.CLOSING;
      this._sender.close(code, data, !this._isServer, err => {
        //
        // This error is handled by the `'error'` listener on the socket. We only
        // want to know if the close frame has been sent here.
        //
        if (err) return;
        this._closeFrameSent = true;
        if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
          this._socket.end();
        }
      });

      //
      // Specify a timeout for the closing handshake to complete.
      //
      this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
    }

    /**
     * Pause the socket.
     *
     * @public
     */
    pause() {
      if (this.readyState === WebSocket$1.CONNECTING || this.readyState === WebSocket$1.CLOSED) {
        return;
      }
      this._paused = true;
      this._socket.pause();
    }

    /**
     * Send a ping.
     *
     * @param {*} [data] The data to send
     * @param {Boolean} [mask] Indicates whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when the ping is sent
     * @public
     */
    ping(data, mask, cb) {
      if (this.readyState === WebSocket$1.CONNECTING) {
        throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
      }
      if (typeof data === 'function') {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === 'function') {
        cb = mask;
        mask = undefined;
      }
      if (typeof data === 'number') data = data.toString();
      if (this.readyState !== WebSocket$1.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === undefined) mask = !this._isServer;
      this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }

    /**
     * Send a pong.
     *
     * @param {*} [data] The data to send
     * @param {Boolean} [mask] Indicates whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when the pong is sent
     * @public
     */
    pong(data, mask, cb) {
      if (this.readyState === WebSocket$1.CONNECTING) {
        throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
      }
      if (typeof data === 'function') {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === 'function') {
        cb = mask;
        mask = undefined;
      }
      if (typeof data === 'number') data = data.toString();
      if (this.readyState !== WebSocket$1.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === undefined) mask = !this._isServer;
      this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }

    /**
     * Resume the socket.
     *
     * @public
     */
    resume() {
      if (this.readyState === WebSocket$1.CONNECTING || this.readyState === WebSocket$1.CLOSED) {
        return;
      }
      this._paused = false;
      if (!this._receiver._writableState.needDrain) this._socket.resume();
    }

    /**
     * Send a data message.
     *
     * @param {*} data The message to send
     * @param {Object} [options] Options object
     * @param {Boolean} [options.binary] Specifies whether `data` is binary or
     *     text
     * @param {Boolean} [options.compress] Specifies whether or not to compress
     *     `data`
     * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
     *     last one
     * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when data is written out
     * @public
     */
    send(data, options, cb) {
      if (this.readyState === WebSocket$1.CONNECTING) {
        throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
      }
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }
      if (typeof data === 'number') data = data.toString();
      if (this.readyState !== WebSocket$1.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      const opts = {
        binary: typeof data !== 'string',
        mask: !this._isServer,
        compress: true,
        fin: true,
        ...options
      };
      if (!this._extensions[PerMessageDeflate.extensionName]) {
        opts.compress = false;
      }
      this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }

    /**
     * Forcibly close the connection.
     *
     * @public
     */
    terminate() {
      if (this.readyState === WebSocket$1.CLOSED) return;
      if (this.readyState === WebSocket$1.CONNECTING) {
        const msg = 'WebSocket was closed before the connection was established';
        return abortHandshake(this, this._req, msg);
      }
      if (this._socket) {
        this._readyState = WebSocket$1.CLOSING;
        this._socket.destroy();
      }
    }
  }

  /**
   * @constant {Number} CONNECTING
   * @memberof WebSocket
   */
  Object.defineProperty(WebSocket$1, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
  });

  /**
   * @constant {Number} CONNECTING
   * @memberof WebSocket.prototype
   */
  Object.defineProperty(WebSocket$1.prototype, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
  });

  /**
   * @constant {Number} OPEN
   * @memberof WebSocket
   */
  Object.defineProperty(WebSocket$1, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
  });

  /**
   * @constant {Number} OPEN
   * @memberof WebSocket.prototype
   */
  Object.defineProperty(WebSocket$1.prototype, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
  });

  /**
   * @constant {Number} CLOSING
   * @memberof WebSocket
   */
  Object.defineProperty(WebSocket$1, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
  });

  /**
   * @constant {Number} CLOSING
   * @memberof WebSocket.prototype
   */
  Object.defineProperty(WebSocket$1.prototype, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
  });

  /**
   * @constant {Number} CLOSED
   * @memberof WebSocket
   */
  Object.defineProperty(WebSocket$1, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
  });

  /**
   * @constant {Number} CLOSED
   * @memberof WebSocket.prototype
   */
  Object.defineProperty(WebSocket$1.prototype, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
  });
  ['binaryType', 'bufferedAmount', 'extensions', 'isPaused', 'protocol', 'readyState', 'url'].forEach(property => {
    Object.defineProperty(WebSocket$1.prototype, property, {
      enumerable: true
    });
  });

  //
  // Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
  // See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
  //
  ['open', 'error', 'close', 'message'].forEach(method => {
    Object.defineProperty(WebSocket$1.prototype, `on${method}`, {
      enumerable: true,
      get() {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute]) return listener[kListener];
        }
        return null;
      },
      set(handler) {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute]) {
            this.removeListener(method, listener);
            break;
          }
        }
        if (typeof handler !== 'function') return;
        this.addEventListener(method, handler, {
          [kForOnEventAttribute]: true
        });
      }
    });
  });
  WebSocket$1.prototype.addEventListener = addEventListener$1;
  WebSocket$1.prototype.removeEventListener = removeEventListener$1;
  var websocket = WebSocket$1;

  /**
   * Initialize a WebSocket client.
   *
   * @param {WebSocket} websocket The client to initialize
   * @param {(String|URL)} address The URL to which to connect
   * @param {Array} protocols The subprotocols
   * @param {Object} [options] Connection options
   * @param {Boolean} [options.followRedirects=false] Whether or not to follow
   *     redirects
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
   *     handshake request
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Number} [options.maxRedirects=10] The maximum number of redirects
   *     allowed
   * @param {String} [options.origin] Value of the `Origin` or
   *     `Sec-WebSocket-Origin` header
   * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.protocolVersion=13] Value of the
   *     `Sec-WebSocket-Version` header
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */
  function initAsClient(websocket, address, protocols, options) {
    const opts = {
      protocolVersion: protocolVersions[1],
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: true,
      followRedirects: false,
      maxRedirects: 10,
      ...options,
      createConnection: undefined,
      socketPath: undefined,
      hostname: undefined,
      protocol: undefined,
      timeout: undefined,
      method: 'GET',
      host: undefined,
      path: undefined,
      port: undefined
    };
    if (!protocolVersions.includes(opts.protocolVersion)) {
      throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(', ')})`);
    }
    let parsedUrl;
    if (address instanceof URL$1) {
      parsedUrl = address;
      websocket._url = address.href;
    } else {
      try {
        parsedUrl = new URL$1(address);
      } catch (e) {
        throw new SyntaxError(`Invalid URL: ${address}`);
      }
      websocket._url = address;
    }
    const isSecure = parsedUrl.protocol === 'wss:';
    const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
    let invalidUrlMessage;
    if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
      invalidUrlMessage = 'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"';
    } else if (isIpcUrl && !parsedUrl.pathname) {
      invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
      invalidUrlMessage = 'The URL contains a fragment identifier';
    }
    if (invalidUrlMessage) {
      const err = new SyntaxError(invalidUrlMessage);
      if (websocket._redirects === 0) {
        throw err;
      } else {
        emitErrorAndClose(websocket, err);
        return;
      }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString('base64');
    const request = isSecure ? https.request : http.request;
    const protocolSet = new Set();
    let perMessageDeflate;
    opts.createConnection = isSecure ? tlsConnect : netConnect;
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
      ...opts.headers,
      'Sec-WebSocket-Version': opts.protocolVersion,
      'Sec-WebSocket-Key': key,
      Connection: 'Upgrade',
      Upgrade: 'websocket'
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
      perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
      opts.headers['Sec-WebSocket-Extensions'] = format({
        [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
      });
    }
    if (protocols.length) {
      for (const protocol of protocols) {
        if (typeof protocol !== 'string' || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
          throw new SyntaxError('An invalid or duplicated subprotocol was specified');
        }
        protocolSet.add(protocol);
      }
      opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
    }
    if (opts.origin) {
      if (opts.protocolVersion < 13) {
        opts.headers['Sec-WebSocket-Origin'] = opts.origin;
      } else {
        opts.headers.Origin = opts.origin;
      }
    }
    if (parsedUrl.username || parsedUrl.password) {
      opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
      const parts = opts.path.split(':');
      opts.socketPath = parts[0];
      opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
      if (websocket._redirects === 0) {
        websocket._originalIpc = isIpcUrl;
        websocket._originalSecure = isSecure;
        websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
        const headers = options && options.headers;

        //
        // Shallow copy the user provided options so that headers can be changed
        // without mutating the original object.
        //
        options = {
          ...options,
          headers: {}
        };
        if (headers) {
          for (const [key, value] of Object.entries(headers)) {
            options.headers[key.toLowerCase()] = value;
          }
        }
      } else if (websocket.listenerCount('redirect') === 0) {
        const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
        if (!isSameHost || websocket._originalSecure && !isSecure) {
          //
          // Match curl 7.77.0 behavior and drop the following headers. These
          // headers are also dropped when following a redirect to a subdomain.
          //
          delete opts.headers.authorization;
          delete opts.headers.cookie;
          if (!isSameHost) delete opts.headers.host;
          opts.auth = undefined;
        }
      }

      //
      // Match curl 7.77.0 behavior and make the first `Authorization` header win.
      // If the `Authorization` header is set, then there is nothing to do as it
      // will take precedence.
      //
      if (opts.auth && !options.headers.authorization) {
        options.headers.authorization = 'Basic ' + Buffer.from(opts.auth).toString('base64');
      }
      req = websocket._req = request(opts);
      if (websocket._redirects) {
        //
        // Unlike what is done for the `'upgrade'` event, no early exit is
        // triggered here if the user calls `websocket.close()` or
        // `websocket.terminate()` from a listener of the `'redirect'` event. This
        // is because the user can also call `request.destroy()` with an error
        // before calling `websocket.close()` or `websocket.terminate()` and this
        // would result in an error being emitted on the `request` object with no
        // `'error'` event listeners attached.
        //
        websocket.emit('redirect', websocket.url, req);
      }
    } else {
      req = websocket._req = request(opts);
    }
    if (opts.timeout) {
      req.on('timeout', () => {
        abortHandshake(websocket, req, 'Opening handshake has timed out');
      });
    }
    req.on('error', err => {
      if (req === null || req[kAborted]) return;
      req = websocket._req = null;
      emitErrorAndClose(websocket, err);
    });
    req.on('response', res => {
      const location = res.headers.location;
      const statusCode = res.statusCode;
      if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
        if (++websocket._redirects > opts.maxRedirects) {
          abortHandshake(websocket, req, 'Maximum redirects exceeded');
          return;
        }
        req.abort();
        let addr;
        try {
          addr = new URL$1(location, address);
        } catch (e) {
          const err = new SyntaxError(`Invalid URL: ${location}`);
          emitErrorAndClose(websocket, err);
          return;
        }
        initAsClient(websocket, addr, protocols, options);
      } else if (!websocket.emit('unexpected-response', req, res)) {
        abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
      }
    });
    req.on('upgrade', (res, socket, head) => {
      websocket.emit('upgrade', res);

      //
      // The user may have closed the connection from a listener of the
      // `'upgrade'` event.
      //
      if (websocket.readyState !== WebSocket$1.CONNECTING) return;
      req = websocket._req = null;
      if (res.headers.upgrade.toLowerCase() !== 'websocket') {
        abortHandshake(websocket, socket, 'Invalid Upgrade header');
        return;
      }
      const digest = createHash('sha1').update(key + GUID).digest('base64');
      if (res.headers['sec-websocket-accept'] !== digest) {
        abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
        return;
      }
      const serverProt = res.headers['sec-websocket-protocol'];
      let protError;
      if (serverProt !== undefined) {
        if (!protocolSet.size) {
          protError = 'Server sent a subprotocol but none was requested';
        } else if (!protocolSet.has(serverProt)) {
          protError = 'Server sent an invalid subprotocol';
        }
      } else if (protocolSet.size) {
        protError = 'Server sent no subprotocol';
      }
      if (protError) {
        abortHandshake(websocket, socket, protError);
        return;
      }
      if (serverProt) websocket._protocol = serverProt;
      const secWebSocketExtensions = res.headers['sec-websocket-extensions'];
      if (secWebSocketExtensions !== undefined) {
        if (!perMessageDeflate) {
          const message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
          abortHandshake(websocket, socket, message);
          return;
        }
        let extensions;
        try {
          extensions = parse$1(secWebSocketExtensions);
        } catch (err) {
          const message = 'Invalid Sec-WebSocket-Extensions header';
          abortHandshake(websocket, socket, message);
          return;
        }
        const extensionNames = Object.keys(extensions);
        if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
          const message = 'Server indicated an extension that was not requested';
          abortHandshake(websocket, socket, message);
          return;
        }
        try {
          perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
        } catch (err) {
          const message = 'Invalid Sec-WebSocket-Extensions header';
          abortHandshake(websocket, socket, message);
          return;
        }
        websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
      }
      websocket.setSocket(socket, head, {
        generateMask: opts.generateMask,
        maxPayload: opts.maxPayload,
        skipUTF8Validation: opts.skipUTF8Validation
      });
    });
    req.end();
  }

  /**
   * Emit the `'error'` and `'close'` events.
   *
   * @param {WebSocket} websocket The WebSocket instance
   * @param {Error} The error to emit
   * @private
   */
  function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket$1.CLOSING;
    websocket.emit('error', err);
    websocket.emitClose();
  }

  /**
   * Create a `net.Socket` and initiate a connection.
   *
   * @param {Object} options Connection options
   * @return {net.Socket} The newly created socket used to start the connection
   * @private
   */
  function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
  }

  /**
   * Create a `tls.TLSSocket` and initiate a connection.
   *
   * @param {Object} options Connection options
   * @return {tls.TLSSocket} The newly created socket used to start the connection
   * @private
   */
  function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== '') {
      options.servername = net.isIP(options.host) ? '' : options.host;
    }
    return tls.connect(options);
  }

  /**
   * Abort the handshake and emit an error.
   *
   * @param {WebSocket} websocket The WebSocket instance
   * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
   *     abort or the socket to destroy
   * @param {String} message The error message
   * @private
   */
  function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket$1.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
      stream[kAborted] = true;
      stream.abort();
      if (stream.socket && !stream.socket.destroyed) {
        //
        // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
        // called after the request completed. See
        // https://github.com/websockets/ws/issues/1869.
        //
        stream.socket.destroy();
      }
      process.nextTick(emitErrorAndClose, websocket, err);
    } else {
      stream.destroy(err);
      stream.once('error', websocket.emit.bind(websocket, 'error'));
      stream.once('close', websocket.emitClose.bind(websocket));
    }
  }

  /**
   * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
   * when the `readyState` attribute is `CLOSING` or `CLOSED`.
   *
   * @param {WebSocket} websocket The WebSocket instance
   * @param {*} [data] The data to send
   * @param {Function} [cb] Callback
   * @private
   */
  function sendAfterClose(websocket, data, cb) {
    if (data) {
      const length = toBuffer(data).length;

      //
      // The `_bufferedAmount` property is used only when the peer is a client and
      // the opening handshake fails. Under these circumstances, in fact, the
      // `setSocket()` method is not called, so the `_socket` and `_sender`
      // properties are set to `null`.
      //
      if (websocket._socket) websocket._sender._bufferedBytes += length;else websocket._bufferedAmount += length;
    }
    if (cb) {
      const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} ` + `(${readyStates[websocket.readyState]})`);
      cb(err);
    }
  }

  /**
   * The listener of the `Receiver` `'conclude'` event.
   *
   * @param {Number} code The status code
   * @param {Buffer} reason The reason for closing
   * @private
   */
  function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === undefined) return;
    websocket._socket.removeListener('data', socketOnData);
    process.nextTick(resume, websocket._socket);
    if (code === 1005) websocket.close();else websocket.close(code, reason);
  }

  /**
   * The listener of the `Receiver` `'drain'` event.
   *
   * @private
   */
  function receiverOnDrain() {
    const websocket = this[kWebSocket];
    if (!websocket.isPaused) websocket._socket.resume();
  }

  /**
   * The listener of the `Receiver` `'error'` event.
   *
   * @param {(RangeError|Error)} err The emitted error
   * @private
   */
  function receiverOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== undefined) {
      websocket._socket.removeListener('data', socketOnData);

      //
      // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
      // https://github.com/websockets/ws/issues/1940.
      //
      process.nextTick(resume, websocket._socket);
      websocket.close(err[kStatusCode]);
    }
    websocket.emit('error', err);
  }

  /**
   * The listener of the `Receiver` `'finish'` event.
   *
   * @private
   */
  function receiverOnFinish() {
    this[kWebSocket].emitClose();
  }

  /**
   * The listener of the `Receiver` `'message'` event.
   *
   * @param {Buffer|ArrayBuffer|Buffer[])} data The message
   * @param {Boolean} isBinary Specifies whether the message is binary or not
   * @private
   */
  function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit('message', data, isBinary);
  }

  /**
   * The listener of the `Receiver` `'ping'` event.
   *
   * @param {Buffer} data The data included in the ping frame
   * @private
   */
  function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    websocket.pong(data, !websocket._isServer, NOOP);
    websocket.emit('ping', data);
  }

  /**
   * The listener of the `Receiver` `'pong'` event.
   *
   * @param {Buffer} data The data included in the pong frame
   * @private
   */
  function receiverOnPong(data) {
    this[kWebSocket].emit('pong', data);
  }

  /**
   * Resume a readable stream
   *
   * @param {Readable} stream The readable stream
   * @private
   */
  function resume(stream) {
    stream.resume();
  }

  /**
   * The listener of the `net.Socket` `'close'` event.
   *
   * @private
   */
  function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener('close', socketOnClose);
    this.removeListener('data', socketOnData);
    this.removeListener('end', socketOnEnd);
    websocket._readyState = WebSocket$1.CLOSING;
    let chunk;

    //
    // The close frame might not have been received or the `'end'` event emitted,
    // for example, if the socket was destroyed due to an error. Ensure that the
    // `receiver` stream is closed after writing any remaining buffered data to
    // it. If the readable side of the socket is in flowing mode then there is no
    // buffered data as everything has been already written and `readable.read()`
    // will return `null`. If instead, the socket is paused, any possible buffered
    // data will be read as a single chunk.
    //
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
      websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
      websocket.emitClose();
    } else {
      websocket._receiver.on('error', receiverOnFinish);
      websocket._receiver.on('finish', receiverOnFinish);
    }
  }

  /**
   * The listener of the `net.Socket` `'data'` event.
   *
   * @param {Buffer} chunk A chunk of data
   * @private
   */
  function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
      this.pause();
    }
  }

  /**
   * The listener of the `net.Socket` `'end'` event.
   *
   * @private
   */
  function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket$1.CLOSING;
    websocket._receiver.end();
    this.end();
  }

  /**
   * The listener of the `net.Socket` `'error'` event.
   *
   * @private
   */
  function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener('error', socketOnError);
    this.on('error', NOOP);
    if (websocket) {
      websocket._readyState = WebSocket$1.CLOSING;
      this.destroy();
    }
  }

  const WebSocket = websocket;
  const usingBrowserWebSocket = false;
  const defaultBinaryType = "nodebuffer";
  const nextTick = process.nextTick;

  // detect ReactNative environment
  const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  class WS extends Transport {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */
    constructor(opts) {
      super(opts);
      this.supportsBinary = !opts.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check()) {
        // let probe timeout
        return;
      }
      const uri = this.uri();
      const protocols = this.opts.protocols;
      // React Native only supports the 'headers' option, and will print a warning if anything else is passed
      const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
      this.ws.onopen = () => {
        if (this.opts.autoUnref) {
          this.ws._socket.unref();
        }
        this.onOpen();
      };
      this.ws.onclose = closeEvent => this.onClose({
        description: "websocket connection closed",
        context: closeEvent
      });
      this.ws.onmessage = ev => this.onData(ev.data);
      this.ws.onerror = e => this.onError("websocket error", e);
    }
    write(packets) {
      this.writable = false;
      // encodePacket efficient as it uses WS framing
      // no need for encodePayload
      for (let i = 0; i < packets.length; i++) {
        const packet = packets[i];
        const lastPacket = i === packets.length - 1;
        encodePacket(packet, this.supportsBinary, data => {
          // always create a new object (GH-437)
          const opts = {};
          {
            if (packet.options) {
              opts.compress = packet.options.compress;
            }
            if (this.opts.perMessageDeflate) {
              const len =
              // @ts-ignore
              "string" === typeof data ? Buffer.byteLength(data) : data.length;
              if (len < this.opts.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          }
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            if (usingBrowserWebSocket) ; else {
              this.ws.send(data, opts);
            }
          } catch (e) {}
          if (lastPacket) {
            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      let query = this.query || {};
      const schema = this.opts.secure ? "wss" : "ws";
      let port = "";
      // avoid port if default for schema
      if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      }
      // append timestamp to URI
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      // communicate binary support capabilities
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      const encodedQuery = encode(query);
      const ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */
    check() {
      return !!WebSocket;
    }
  }

  const transports = {
    websocket: WS,
    polling: Polling
  };

  // imported from https://github.com/galkn/parseuri
  /**
   * Parses a URI
   *
   * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
   *
   * See:
   * - https://developer.mozilla.org/en-US/docs/Web/API/URL
   * - https://caniuse.com/url
   * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
   *
   * History of the parse() method:
   * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
   * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
   * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  const parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  function parse(str) {
    const src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''),
      uri = {},
      i = 14;
    while (i--) {
      uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
  }
  function pathNames(obj, path) {
    const regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  class Socket$1 extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts = {}) {
      super();
      this.writeBuffer = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query) opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(this, opts);
      this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
      }
      this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
      this.transports = opts.transports || ["polling", "websocket"];
      this.writeBuffer = [];
      this.prevBufferLen = 0;
      this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: true
      }, opts);
      this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
      if (typeof this.opts.query === "string") {
        this.opts.query = decode(this.opts.query);
      }
      // set on handshake
      this.id = null;
      this.upgrades = null;
      this.pingInterval = null;
      this.pingTimeout = null;
      // set on heartbeat
      this.pingTimeoutTimer = null;
      if (typeof addEventListener === "function") {
        if (this.opts.closeOnBeforeunload) {
          // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
          // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
          // closed/reloaded)
          this.beforeunloadEventListener = () => {
            if (this.transport) {
              // silently close the transport
              this.transport.removeAllListeners();
              this.transport.close();
            }
          };
          addEventListener("beforeunload", this.beforeunloadEventListener, false);
        }
        if (this.hostname !== "localhost") {
          this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost"
            });
          };
          addEventListener("offline", this.offlineEventListener, false);
        }
      }
      this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
      const query = Object.assign({}, this.opts.query);
      // append engine.io protocol identifier
      query.EIO = protocol$1;
      // transport name
      query.transport = name;
      // session id if we already have one
      if (this.id) query.sid = this.id;
      const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      });
      return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    open() {
      let transport;
      if (this.opts.rememberUpgrade && Socket$1.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (0 === this.transports.length) {
        // Emit error on next tick so it can be listened to
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }
      this.readyState = "opening";
      // Retry with the next transport if the transport is disabled (jsonp: false)
      try {
        transport = this.createTransport(transport);
      } catch (e) {
        this.transports.shift();
        this.open();
        return;
      }
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      // set up transport
      this.transport = transport;
      // set up transport listeners
      transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    probe(name) {
      let transport = this.createTransport(name);
      let failed = false;
      Socket$1.priorWebsocketSuccess = false;
      const onTransportOpen = () => {
        if (failed) return;
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", msg => {
          if (failed) return;
          if ("pong" === msg.type && "probe" === msg.data) {
            this.upgrading = true;
            this.emitReserved("upgrading", transport);
            if (!transport) return;
            Socket$1.priorWebsocketSuccess = "websocket" === transport.name;
            this.transport.pause(() => {
              if (failed) return;
              if ("closed" === this.readyState) return;
              cleanup();
              this.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              this.emitReserved("upgrade", transport);
              transport = null;
              this.upgrading = false;
              this.flush();
            });
          } else {
            const err = new Error("probe error");
            // @ts-ignore
            err.transport = transport.name;
            this.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed) return;
        // Any callback called by transport should be ignored since now
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      // Handle any error that happens while probing
      const onerror = err => {
        const error = new Error("probe error: " + err);
        // @ts-ignore
        error.transport = transport.name;
        freezeTransport();
        this.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      // When the socket is closed while we're probing
      function onclose() {
        onerror("socket closed");
      }
      // When the socket is upgraded while we're probing
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      // Remove all listeners on the transport and on self
      const cleanup = () => {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
      this.readyState = "open";
      Socket$1.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
      // we check for `readyState` in case an `open`
      // listener already closed the socket
      if ("open" === this.readyState && this.opts.upgrade) {
        let i = 0;
        const l = this.upgrades.length;
        for (; i < l; i++) {
          this.probe(this.upgrades[i]);
        }
      }
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        // Socket is live - any packet counts
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            break;
          case "error":
            const err = new Error("server error");
            // @ts-ignore
            err.code = packet.data;
            this.onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.maxPayload = data.maxPayload;
      this.onOpen();
      // In case open handler closes socket
      if ("closed" === this.readyState) return;
      this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
      if (this.opts.autoUnref) {
        this.pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen);
      // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`
      this.prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const packets = this.getWritablePackets();
        this.transport.send(packets);
        // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`
        this.prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
      const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      let payloadSize = 1; // first packet type
      for (let i = 0; i < this.writeBuffer.length; i++) {
        const data = this.writeBuffer[i].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i > 0 && payloadSize > this.maxPayload) {
          return this.writeBuffer.slice(0, i);
        }
        payloadSize += 2; // separator + packet type
      }

      return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      const packet = {
        type: type,
        data: data,
        options: options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
      const close = () => {
        this.onClose("forced close");
        this.transport.close();
      };
      const cleanupAndClose = () => {
        this.off("upgrade", cleanupAndClose);
        this.off("upgradeError", cleanupAndClose);
        close();
      };
      const waitForUpgrade = () => {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", () => {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    onError(err) {
      Socket$1.priorWebsocketSuccess = false;
      this.emitReserved("error", err);
      this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        // clear timers
        this.clearTimeoutFn(this.pingTimeoutTimer);
        // stop event from firing again for transport
        this.transport.removeAllListeners("close");
        // ensure transport won't stay open
        this.transport.close();
        // ignore further transport communication
        this.transport.removeAllListeners();
        if (typeof removeEventListener === "function") {
          removeEventListener("beforeunload", this.beforeunloadEventListener, false);
          removeEventListener("offline", this.offlineEventListener, false);
        }
        // set ready state
        this.readyState = "closed";
        // clear session id
        this.id = null;
        // emit close event
        this.emitReserved("close", reason, description);
        // clean buffers after, so users can still
        // grab the buffers on `close` event
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    filterUpgrades(upgrades) {
      const filteredUpgrades = [];
      let i = 0;
      const j = upgrades.length;
      for (; i < j; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    }
  }
  Socket$1.protocol = protocol$1;

  /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */
  function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      // parse
      obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  const withNativeArrayBuffer = typeof ArrayBuffer === "function";
  const isView = obj => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  const toString = Object.prototype.toString;
  const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }

  /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */
  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
      packet: pack,
      buffers: buffers
    };
  }
  function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (isBinary(data)) {
      const placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);
      for (let i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }
      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return newData;
    }
    return data;
  }
  /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
      const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }

  /**
   * Protocol version.
   *
   * @public
   */
  const protocol = 5;
  var PacketType;
  (function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  /**
   * A socket.io Encoder instance
   */
  class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
      // first is type
      let str = "" + obj.type;
      // attachments if we have them
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      // if we have a namespace other than `/`
      // we append it followed by a comma `,`
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      // immediately followed by the id
      if (null != obj.id) {
        str += obj.id;
      }
      // json data
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
      const deconstruction = deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list
      return buffers; // write all the buffers
    }
  }
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */
  class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
      super();
      this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
      let packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet);
          // no attachments, labeled binary but no binary data to follow
          if (packet.attachments === 0) {
            super.emitReserved("decoded", packet);
          }
        } else {
          // non-binary full packet
          super.emitReserved("decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            // received final buffer
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
      let i = 0;
      // look up type
      const p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      }
      // look up attachments if type binary
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        const start = i + 1;
        while (str.charAt(++i) !== "-" && i != str.length) {}
        const buf = str.substring(start, i);
        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      // look up namespace (if any)
      if ("/" === str.charAt(i + 1)) {
        const start = i + 1;
        while (++i) {
          const c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }
        p.nsp = str.substring(start, i);
      } else {
        p.nsp = "/";
      }
      // look up id
      const next = str.charAt(i + 1);
      if ("" !== next && Number(next) == next) {
        const start = i + 1;
        while (++i) {
          const c = str.charAt(i);
          if (null == c || Number(c) != c) {
            --i;
            break;
          }
          if (i === str.length) break;
        }
        p.id = Number(str.substring(start, i + 1));
      }
      // look up json data
      if (str.charAt(++i)) {
        const payload = this.tryParse(str.substr(i));
        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    }
    tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    }
    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return typeof payload === "object";
        case PacketType.DISCONNECT:
          return payload === undefined;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || typeof payload === "object";
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    }
  }
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */
  class BinaryReconstructor {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        const packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }

  var parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder
  });

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  /**
   * Internal events.
   * These events can't be emitted by the user.
   */
  const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  /**
   * A Socket is the fundamental class for interacting with the server.
   *
   * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log("connected");
   * });
   *
   * // send an event to the server
   * socket.emit("foo", "bar");
   *
   * socket.on("foobar", () => {
   *   // an event was received from the server
   * });
   *
   * // upon disconnection
   * socket.on("disconnect", (reason) => {
   *   console.log(`disconnected due to ${reason}`);
   * });
   */
  class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
      super();
      /**
       * Whether the socket is currently connected to the server.
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.connected); // true
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.connected); // false
       * });
       */
      this.connected = false;
      /**
       * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
       * be transmitted by the server.
       */
      this.recovered = false;
      /**
       * Buffer for packets received before the CONNECT packet
       */
      this.receiveBuffer = [];
      /**
       * Buffer for packets that will be sent once the socket is connected
       */
      this.sendBuffer = [];
      /**
       * The queue of packets to be sent with retry in case of failure.
       *
       * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
       * @private
       */
      this._queue = [];
      /**
       * A sequence to generate the ID of the {@link QueuedPacket}.
       * @private
       */
      this._queueSeq = 0;
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      if (opts && opts.auth) {
        this.auth = opts.auth;
      }
      this._opts = Object.assign({}, opts);
      if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
      return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
      if (this.subs) return;
      const io = this.io;
      this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open
      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
        this._addToQueue(args);
        return this;
      }
      const packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      // event ack callback
      if ("function" === typeof args[args.length - 1]) {
        const id = this.ids++;
        const ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
      if (discardPacket) ; else if (this.connected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
      var _a;
      const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
      if (timeout === undefined) {
        this.acks[id] = ack;
        return;
      }
      // @ts-ignore
      const timer = this.io.setTimeoutFn(() => {
        delete this.acks[id];
        for (let i = 0; i < this.sendBuffer.length; i++) {
          if (this.sendBuffer[i].id === id) {
            this.sendBuffer.splice(i, 1);
          }
        }
        ack.call(this, new Error("operation has timed out"));
      }, timeout);
      this.acks[id] = (...args) => {
        // @ts-ignore
        this.io.clearTimeoutFn(timer);
        ack.apply(this, [null, ...args]);
      };
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
      // the timeout flag is optional
      const withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
      return new Promise((resolve, reject) => {
        args.push((arg1, arg2) => {
          if (withErr) {
            return arg1 ? reject(arg1) : resolve(arg2);
          } else {
            return resolve(arg1);
          }
        });
        this.emit(ev, ...args);
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
      let ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      const packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args,
        flags: Object.assign({
          fromQueue: true
        }, this.flags)
      };
      args.push((err, ...responseArgs) => {
        if (packet !== this._queue[0]) {
          // the packet has already been acknowledged
          return;
        }
        const hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > this._opts.retries) {
            this._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          this._queue.shift();
          if (ack) {
            ack(null, ...responseArgs);
          }
        }
        packet.pending = false;
        return this._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      const packet = this._queue[0];
      if (packet.pending && !force) {
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
      packet.nsp = this.nsp;
      this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
      if (typeof this.auth == "function") {
        this.auth(data => {
          this._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? Object.assign({
          pid: this._pid,
          offset: this._lastOffset
        }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          // @ts-ignore
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
      const args = packet.data || [];
      if (null != packet.id) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }
      super.emit.apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
      const self = this;
      let sent = false;
      return function (...args) {
        // prevent double callbacks
        if (sent) return;
        sent = true;
        self.packet({
          type: PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
      const ack = this.acks[packet.id];
      if ("function" === typeof ack) {
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
      this.id = id;
      this.recovered = pid && this._pid === pid;
      this._pid = pid; // defined only if connection state recovery is enabled
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
      this.receiveBuffer.forEach(args => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach(packet => {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(subDestroy => subDestroy());
        this.subs = undefined;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
      if (this.connected) {
        this.packet({
          type: PacketType.DISCONNECT
        });
      }
      // remove socket from pool
      this.destroy();
      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
      this.flags.timeout = timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyListeners;
        for (let i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyOutgoingListeners;
        for (let i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const listeners = this._anyOutgoingListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, packet.data);
        }
      }
    }
  }

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */
  Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  /**
   * Reset the number of attempts.
   *
   * @api public
   */
  Backoff.prototype.reset = function () {
    this.attempts = 0;
  };
  /**
   * Set the minimum duration
   *
   * @api public
   */
  Backoff.prototype.setMin = function (min) {
    this.ms = min;
  };
  /**
   * Set the maximum duration
   *
   * @api public
   */
  Backoff.prototype.setMax = function (max) {
    this.max = max;
  };
  /**
   * Set the jitter
   *
   * @api public
   */
  Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
  };

  class Manager extends Emitter {
    constructor(uri, opts) {
      var _a;
      super();
      this.nsps = {};
      this.subs = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = undefined;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      this.opts = opts;
      installTimerFunctions(this, opts);
      this.reconnection(opts.reconnection !== false);
      this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      this.reconnectionDelay(opts.reconnectionDelay || 1000);
      this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
      this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      this.backoff = new Backoff({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(null == opts.timeout ? 20000 : opts.timeout);
      this._readyState = "closed";
      this.uri = uri;
      const _parser = opts.parser || parser;
      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect) this.open();
    }
    reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      return this;
    }
    reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
    reconnectionDelay(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    }
    randomizationFactor(v) {
      var _a;
      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    }
    reconnectionDelayMax(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    }
    timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new Socket$1(this.uri, this.opts);
      const socket = this.engine;
      const self = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      // emit `open`
      const openSubDestroy = on(socket, "open", function () {
        self.onopen();
        fn && fn();
      });
      // emit `error`
      const errorSub = on(socket, "error", err => {
        self.cleanup();
        self._readyState = "closed";
        this.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          self.maybeReconnectOnOpen();
        }
      });
      if (false !== this._timeout) {
        const timeout = this._timeout;
        if (timeout === 0) {
          openSubDestroy(); // prevents a race condition with the 'open' event
        }
        // set timer
        const timer = this.setTimeoutFn(() => {
          openSubDestroy();
          socket.close();
          // @ts-ignore
          socket.emit("error", new Error("timeout"));
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
      // clear old subs
      this.cleanup();
      // mark as open
      this._readyState = "open";
      this.emitReserved("open");
      // add new subs
      const socket = this.engine;
      this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
      // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
      nextTick(() => {
        this.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
      let socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
      const nsps = Object.keys(this.nsps);
      for (const nsp of nsps) {
        const socket = this.nsps[nsp];
        if (socket.active) {
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
      const encodedPackets = this.encoder.encode(packet);
      for (let i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
      if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const self = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        this._reconnecting = true;
        const timer = this.setTimeoutFn(() => {
          if (self.skipReconnect) return;
          this.emitReserved("reconnect_attempt", self.backoff.attempts);
          // check again for the case socket closed in above events
          if (self.skipReconnect) return;
          self.open(err => {
            if (err) {
              self._reconnecting = false;
              self.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              self.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  }

  /**
   * Managers cache.
   */
  const cache = {};
  function lookup(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
  // namespace (e.g. `io.connect(...)`), for backward compatibility
  Object.assign(lookup, {
    Manager,
    Socket,
    io: lookup,
    connect: lookup
  });

  class Common {
      router = undefined;
      apiUrl = undefined;
      watchInterval = undefined;
      loadingState = false;
      SocketClient;
      timeEquivalentsInSeconds = {
          '5s': 5,
          '10s': 10,
          '20s': 20,
          '30s': 30,
          '1m': 60,
          '1m 30s': 90,
          '2m': 120,
          '3m': 180,
          '4m': 240,
          '5m': 300,
      };
      EquivalentsSecondsInString = {
          '5': '5s',
          '10': '10s',
          '20': '20s',
          '30': '30s',
          '60': '1m',
          '90': '1m 30s',
          '120': '2m',
          '180': '3m',
          '240': '4m',
          '300': '5m',
      };
      setupWebsocket = () => {
          `${process.env.VUE_APP_API_URL}/api/socket.io`;
          const domain = `${process.env.VUE_APP_API_URL}`;
          const path = `/api/socket.io`;
          const tokens = localStorage.getItem('AuthTokens')
              ? JSON.parse(localStorage.getItem('AuthTokens') || '{}')
              : undefined;
          const accessToken = `${tokens?.accessToken}`;
          this.SocketClient = lookup(domain, {
              path: path,
              auth: { token: accessToken },
          });
      };
      listenOnSocket = (initialChannel, listener, onleave) => {
          let finalChannel = '';
          this.SocketClient.emit('join', { channel: initialChannel }, (res) => {
              finalChannel = res.channel;
              if (res.code !== StatusCodes.success)
                  return;
              this.SocketClient.on(finalChannel, (data) => {
                  if (finalChannel !== data.channel)
                      return;
                  // Do whatever you want with the data depending on the type emitted
                  listener(data);
              });
          });
          const closeConnection = () => {
              try {
                  this.SocketClient.emit('leave', { channel: finalChannel }, (res) => {
                      // Perform any cleanup after the connection is closed
                      onleave(res);
                  });
              }
              catch (e) {
                  return e;
              }
          };
          return {
              closeConnection,
          };
      };
      SetRouter = (router) => {
          this.router = router;
      };
      makeid = (length) => {
          let result = '';
          let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let charactersLength = characters.length;
          for (let i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
      };
      showValidationError = (error, formElement) => {
          const responseData = error.response?.data;
          const validationErrors = responseData;
          if (validationErrors) {
              validationErrors.forEach((validation) => {
                  const field = formElement.fieldsToValidate[validation.field];
                  if (field) {
                      field.showError(validation.message);
                  }
              });
          }
          this.hideLoader();
      };
      capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }
      loaderSetup = vue.reactive({
          show: false,
          useModal: false,
          hasError: false,
          loading: false,
          message: '',
          ctaText: '',
          ctaFunction: () => { },
          icon: 'success-thumb',
          title: '',
      });
      SetApiUrl = (apiUrl) => {
          this.apiUrl = apiUrl;
      };
      GoToRoute = (path) => {
          this.router?.push(path);
      };
      convertToFormData = (data) => {
          // convert request data to formData
          const formData = new FormData();
          for (const key in data) {
              const param = data[key];
              if (Array.isArray(param)) {
                  formData.append(`${key}`, JSON.stringify(param));
              }
              else {
                  if (typeof param != 'string' && param instanceof Blob == false) {
                      formData.append(key, JSON.stringify(param));
                  }
                  else {
                      formData.append(key, param);
                  }
              }
          }
          return formData;
      };
      mediaQuery = () => {
          const windowWidth = window.screen.width;
          if (windowWidth <= 640) {
              return 'sm';
          }
          else if (windowWidth > 640 && windowWidth <= 768) {
              return 'md';
          }
          else if (windowWidth > 769 && windowWidth <= 1000) {
              return 'mdlg';
          }
          else if (windowWidth > 1001 && windowWidth <= 1580) {
              return 'lg';
          }
          else if (windowWidth > 1581 && windowWidth <= 1280) {
              return 'xl';
          }
          else if (windowWidth > 1280) {
              return '2xl';
          }
      };
      // public showError = (
      //   error: CombinedError,
      //   title: string,
      //   icon: 'error-alert' | 'error-kite' | 'success-kite' | 'success-thumb',
      //   fallbackMsg = '',
      // ) => {
      //   const message = error.graphQLErrors[0].message
      //   this.sideBarInfo.errorMessage = message != 'null' ? message : fallbackMsg
      // }
      getLabel = (data, key) => {
          const thisData = data.filter((Option) => {
              return Option.key == key;
          });
          return thisData.length > 0 ? thisData[0].value : '';
      };
      showLoader = (loaderSetup) => {
          this.loaderSetup = loaderSetup;
      };
      goBack = () => {
          window.history.length > 1 ? this.router?.go(-1) : this.router?.push('/');
      };
      hideLoader = () => {
          const Loader = {
              show: false,
              useModal: false,
              loading: false,
          };
          this.loaderSetup = Loader;
      };
      globalParameters = vue.reactive({
          currency: 'ngn',
      });
      momentInstance = moment;
      convertToMoney = (float, withZeros = true, currencyType = 'ngn', withSymbol = true) => {
          let currencySymbol = '';
          if (currencyType == 'usd') {
              currencySymbol = '$';
          }
          else if (currencyType == 'ngn') {
              currencySymbol = '₦';
          }
          if (!withSymbol) {
              currencySymbol = '';
          }
          if (withZeros) {
              return currency(float, {
                  separator: ',',
                  symbol: currencySymbol,
              }).format();
          }
          else {
              return currencySymbol + new Intl.NumberFormat().format(parseFloat(float));
          }
      };
      isString = (x) => {
          return Object.prototype.toString.call(x) === '[object String]';
      };
      searchArray = (arr, searchKey) => {
          return arr.filter((obj) => {
              return Object.keys(obj).some((key) => {
                  return this.isString(obj[key]) ? obj[key].includes(searchKey) : false;
              });
          });
      };
      debounce = (method = () => {
          //
      }, delay = 500) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (typeof window.LIT !== 'undefined') {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              clearTimeout(window.LIT);
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          window.LIT = setTimeout(() => {
              method();
          }, delay);
      };
      watchProperty = (objectToWatch, objectToUpdate) => {
          let upatedValue = this[`${objectToWatch}`];
          const watchAction = () => {
              upatedValue = this[`${objectToWatch}`];
              if (objectToUpdate) {
                  objectToUpdate.value = upatedValue;
              }
              this.watchInterval = window.requestAnimationFrame(watchAction);
          };
          watchAction();
      };
      stopWatchAction = () => {
          if (this.watchInterval != undefined) {
              window.cancelAnimationFrame(this.watchInterval);
          }
      };
      fetchFile = (url) => {
          return new Promise(function (resolve, reject) {
              // Get file name from url.
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = function () {
                  resolve(xhr);
              };
              xhr.onerror = reject;
              xhr.open('GET', url);
              xhr.send();
          }).then(function (xhr) {
              const filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0];
              const a = document.createElement('a');
              a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
              a.download = filename; // Set the file name.
              a.style.display = 'none';
              document.body.appendChild(a);
              a.click();
              return xhr;
          });
      };
      downloadFiles = (urls = []) => {
          return Promise.all(urls.map(this.fetchFile));
      };
      fomartDate = (date, format) => {
          return moment(date).format(format);
      };
      countDownTime = (endTime) => {
          return moment(moment(endTime).diff(moment.now())).format('mm:ss');
      };
      timeFromNow = (time) => {
          return moment(time).fromNow();
      };
      updatedData = (oldData, newData) => {
          if (oldData != undefined && newData != undefined) {
              return { ...oldData, ...newData };
          }
          return oldData;
      };
      preFetchRouteData = (routeTo, next, _routeFrom) => {
          const allActions = [];
          if (this.loaderSetup.loading) {
              return;
          }
          const routeMiddlewares = routeTo.meta.middlewares;
          // handle fetchRules
          const fetchRules = routeMiddlewares.fetchRules;
          let BreakException = {};
          try {
              fetchRules?.forEach((rule) => {
                  if (rule.requireAuth) {
                      if (!Logic.Auth.AuthUser) {
                          this.GoToRoute('/auth/login');
                          throw BreakException;
                      }
                  }
                  // @ts-ignore
                  const domain = Logic[rule.domain];
                  if (rule.alignCurrency) {
                      if (rule.params[0] != this.globalParameters.currency) {
                          rule.params[0] = this.globalParameters.currency;
                          rule.ignoreProperty = true;
                      }
                  }
                  if (domain[rule.property] == undefined ||
                      (typeof rule.ignoreProperty == 'function' && rule.ignoreProperty()) ||
                      rule.ignoreProperty) {
                      allActions.push(new Promise((resolve) => {
                          if (rule.useRouteId) {
                              rule.params.unshift(routeTo.params.id.toString());
                          }
                          if (rule.useRouteQuery) {
                              rule.queries?.forEach((item) => {
                                  rule.params.unshift(routeTo.query[item]);
                              });
                          }
                          const request = domain[rule.method](...rule.params);
                          request?.then((value) => {
                              resolve(value);
                          });
                      }));
                  }
              });
          }
          catch (error) {
              if (error !== BreakException)
                  throw error;
          }
          // save user activities
          if (routeMiddlewares.tracking_data) {
              routeMiddlewares.tracking_data;
          }
          if (allActions.length > 0) {
              this.showLoader({
                  show: true,
                  useModal: true,
                  loading: true,
              });
              Promise.all(allActions).then(() => {
                  this.hideLoader();
                  return next();
              });
          }
          else {
              this.hideLoader();
              return next();
          }
      };
  }

  class Auth extends Common {
      constructor() {
          super();
          this.AccessToken = localStorage.getItem('access_token');
          this.AuthUser = localStorage.getItem('auth_user')
              ? JSON.parse(localStorage.getItem('auth_user') || '{}')
              : undefined;
      }
      AccessToken = null;
      AuthUser = undefined;
      // input data
      UpdateUserProfileForm;
      UpdateUserRolesForm;
      SignUpForm;
      SignInForm;
      VerifyWithTokenForm;
      ResetPasswordWithTokenForm;
      UpdatePasswordForm;
      GoogleSignInForm;
      AppleSignInForm;
      SendPhoneVerificationForm;
      RedirectUser = () => {
          if (!this.AuthUser.isEmailVerified) {
              this.SendVerificationEmail();
              Logic.Common.GoToRoute('/auth/verify-email');
          }
          else {
              Logic.Common.GoToRoute('/');
          }
      };
      SetTokens = (AuthData) => {
          localStorage.setItem('AuthTokens', JSON.stringify({
              accessToken: AuthData.accessToken,
              refreshToken: AuthData.refreshToken,
          }));
          localStorage.setItem('auth_user', JSON.stringify(AuthData.user));
      };
      GetAuthUser = () => {
          return $api.auth.user.getAuthUser().then((response) => {
              this.AuthUser = response.data;
              return response.data;
          });
      };
      DeleteUserAccount = () => {
          return $api.auth.user.deleteUserAccount().then((response) => {
              return response.data;
          });
      };
      UpdateUserProfile = (formIsValid, uploadProgress) => {
          if (formIsValid && this.UpdateUserProfileForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.auth.user
                  .updateUserProfile(this.UpdateUserProfileForm, uploadProgress)
                  .then((response) => {
                  this.AuthUser = response.data;
                  Logic.Common.hideLoader();
                  return response.data;
              })
                  .catch((error) => {
                  // error handler
              });
          }
      };
      UpdateUserRoles = (formIsValid) => {
          if (formIsValid && this.UpdateUserRolesForm) {
              $api.auth.user
                  .updateUserRoles(this.UpdateUserRolesForm)
                  .then((response) => {
                  // do something
              })
                  .catch((error) => {
                  // error handler
              });
          }
      };
      SetSuperAdminRole = () => {
          return $api.auth.user
              .setSuperAdminRoles()
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      SignOut = () => {
          $api.auth.user
              .signOut()
              .then((response) => {
              //
              Logic.Common.GoToRoute('/auth/login');
              localStorage.clear();
          })
              .catch((error) => {
              //
          });
      };
      SendVerificationEmail = () => {
          return $api.auth.email
              .sendVerificationMail()
              .then((response) => { })
              .then((error) => { });
      };
      SignUp = (formIsValid) => {
          if (formIsValid && this.SignUpForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.auth.email
                  .signUp(this.SignUpForm)
                  .then((response) => {
                  this.AuthUser = response.data.user;
                  this.SetTokens(response.data);
                  this.SendVerificationEmail();
                  Logic.Common.hideLoader();
                  this.RedirectUser();
              })
                  .catch((error) => {
                  // handle error
                  throw error;
              });
          }
      };
      SignIn = (formIsValid) => {
          if (formIsValid && this.SignInForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.auth.email
                  .signIn(this.SignInForm)
                  .then((response) => {
                  this.AuthUser = response.data.user;
                  this.SetTokens(response.data);
                  Logic.Common.hideLoader();
                  this.RedirectUser();
                  return response.data.user;
              })
                  .catch((error) => {
                  throw error;
              });
          }
      };
      GoogleSignIn = () => {
          if (this.GoogleSignInForm) {
              return $api.auth.identities
                  .googleSignIn(this.GoogleSignInForm)
                  .then((response) => {
                  this.AuthUser = response.data.user;
                  this.SetTokens(response.data);
              })
                  .catch((error) => {
                  //
              });
          }
      };
      AppleSignIn = () => {
          if (this.AppleSignInForm) {
              return $api.auth.identities
                  .appleSignIn(this.AppleSignInForm)
                  .then((response) => {
                  this.AuthUser = response.data.user;
                  this.SetTokens(response.data);
              })
                  .catch((error) => {
                  //
              });
          }
      };
      VerifyEmailWithToken = (formIsValid) => {
          if (formIsValid && this.VerifyWithTokenForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              $api.auth.email
                  .verifyEmail(this.VerifyWithTokenForm)
                  .then((response) => {
                  this.AuthUser = response.data.user;
                  this.SetTokens(response.data);
                  Logic.Common.hideLoader();
                  this.RedirectUser();
              })
                  .catch((error) => {
                  //
              });
          }
      };
      RefreshAuthToken = () => {
          return $api.auth.token
              .exchangeToken()
              .then((response) => {
              this.AuthUser = response.data.user;
              this.SetTokens(response.data);
              return response.data;
          })
              .then((error) => {
              //
          });
      };
      SendPasswordResetMail = (email) => {
          return $api.auth.passwords
              .sendResetPasswordMail({ email })
              .then((response) => {
              return response.data;
          })
              .catch((error) => {
              //
          });
      };
      ResetPasswordWithToken = (formIsValid) => {
          if (formIsValid && this.ResetPasswordWithTokenForm) {
              return $api.auth.passwords
                  .resetPassword(this.ResetPasswordWithTokenForm)
                  .then((response) => {
                  //
              })
                  .catch((error) => {
                  //
              });
          }
      };
      UpdatePassword = (formIsValid) => {
          if (formIsValid && this.UpdatePasswordForm) {
              return $api.auth.passwords
                  .updatePassword(this.UpdatePasswordForm)
                  .then((response) => {
                  //
              })
                  .then((error) => {
                  //
              });
          }
      };
      SendPhoneVerification = (formIsValid) => {
          if (formIsValid && this.SendPhoneVerificationForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.auth.phone
                  .sendVerifyPhone(this.SendPhoneVerificationForm)
                  .then((response) => {
                  //
                  Logic.Common.hideLoader();
              })
                  .catch((error) => {
                  Logic.Common.hideLoader();
                  //
              });
          }
      };
      VerifyPhone = (token) => {
          Logic.Common.showLoader({
              loading: true,
              show: true,
              useModal: true,
          });
          return $api.auth.phone
              .verifyPhone({ token })
              .then((response) => {
              this.AuthUser = response.data.user;
              this.SetTokens(response.data);
              Logic.Common.hideLoader();
          })
              .catch((error) => {
              //
              Logic.Common.hideLoader();
          });
      };
  }

  class Conversations extends Common {
      constructor() {
          super();
      }
      AllConversations;
      SingleConversation;
      Messages;
      SingleMessage;
      Reviews;
      SingleReview;
      // form input
      AddTutorForm;
      DeleteTutorForm;
      CreateMessageForm;
      GetConversations = (filters) => {
          return $api.conversations.conversation.fetch(filters).then((response) => {
              this.AllConversations = response.data;
          });
      };
      GetConversation = (id) => {
          return $api.conversations.conversation.get(id).then((response) => {
              this.SingleConversation = response.data;
              return response.data;
          });
      };
      GetMessages = (conversationId) => {
          if (!conversationId) {
              return new Promise((resolve) => {
                  resolve('');
              });
          }
          return $api.conversations.conversation
              .getMessages(conversationId)
              .then((response) => {
              this.Messages = response.data;
              return response.data;
          });
      };
      GetMessage = (conversationId, messageId) => {
          return $api.conversations.conversation
              .getMessage(conversationId, messageId)
              .then((response) => {
              this.SingleMessage = response.data;
          });
      };
      GetReviews = (filters) => {
          return $api.conversations.review.fetch(filters).then((response) => {
              this.Reviews = response.data;
          });
      };
      GetReview = (id) => {
          return $api.conversations.review
              .get(id)
              .then((response) => {
              this.SingleReview = response.data;
          })
              .catch((error) => {
              //
          });
      };
      CreateConversation = (title) => {
          return $api.conversations.conversation
              .post(null, {
              body: title,
          })
              .then((response) => {
              this.SingleConversation = response.data;
              return response.data;
          })
              .catch((error) => {
              //
          });
      };
      StarMessage = (conversationId, messageId, starred) => {
          return $api.conversations.conversation
              .starMessage(conversationId, messageId, { starred })
              .then((response) => {
              this.SingleMessage = response.data;
              this.Messages.results.forEach((message) => {
                  if (message.id == response.data.id) {
                      message = response.data;
                  }
              });
          })
              .catch((error) => {
              //
          });
      };
      MarkMessages = (conversationId) => {
          return $api.conversations.conversation
              .markMessagesAsRead(conversationId)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      CreateMessage = (conversationId, formIsValid) => {
          if (formIsValid && this.CreateMessageForm) {
              return $api.conversations.conversation
                  .createMessage(conversationId, this.CreateMessageForm)
                  .then((response) => {
                  this.SingleMessage = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      AddTutor = () => {
          if (this.AddTutorForm) {
              return $api.conversations.conversation
                  .addTutor(this.AddTutorForm)
                  .then((response) => {
                  this.SingleConversation = response.data;
              });
          }
      };
      DeleteConversation = (id) => {
          return $api.conversations.conversation
              .delete(id)
              .then((response) => {
              //
          })
              .then((error) => {
              //
          });
      };
      DeleteTutor = () => {
          if (this.DeleteTutorForm) {
              return $api.conversations.conversation
                  .deleteTutor(this.DeleteTutorForm)
                  .then((response) => {
                  this.SingleConversation = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
  }

  class Form {
      constructor() {
          // initiate things here
      }
      RequiredRule = {
          type: "isRequired",
          errorMessage: "",
          value: 0,
      };
      EmailRule = {
          type: "isRegex",
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          errorMessage: "Email must be valid",
      };
      PasswordRule = {
          type: "isRegex",
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,
          errorMessage: "Password must contain at least 8 characters that includes alphabets, symbols and numbers",
      };
      handleConfirmPassword = (password, comfirm_password) => {
          const rule = {
              type: "isCondition",
              value: password == comfirm_password,
              errorMessage: "Do not match password"
          };
          return rule;
      };
      handleIsNumber = (value) => {
          const rule = {
              type: "isCondition",
              value: !isNaN(parseInt(value)),
              errorMessage: "Must be a number"
          };
          return rule;
      };
      customValidator = (condition, errorMessage) => {
          const rule = {
              type: "isCondition",
              value: condition,
              errorMessage
          };
          return rule;
      };
      getPhoneNumber = (phoneCode, phoneInput) => {
          let realPhone = phoneInput.trim();
          if (realPhone.charAt(0) == "0") {
              realPhone = realPhone.substring(1);
          }
          const stringWithoutCharacter = (phoneCode + realPhone).replace(/[^\d.-]/g, "");
          return stringWithoutCharacter;
      };
  }

  class Notifications extends Common {
      constructor() {
          super();
      }
      AllNotifications;
      SingleNotification;
      GetNotifications = (filters) => {
          return $api.notifications.notifications.fetch(filters).then((response) => {
              this.AllNotifications = response.data;
          });
      };
      GetNotification = (id) => {
          return $api.notifications.notifications.get(id).then((response) => {
              this.SingleNotification = response.data;
          });
      };
      ToggleSeenNotifications = (id, seen) => {
          return $api.notifications.notifications
              .toggleNotification({ id, seen })
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      ToggleAllNotifications = (seen) => {
          return $api.notifications.notifications
              .toggleAllNotification(seen)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      SubscribeDevice = (token) => {
          return $api.notifications.pushTokens
              .subscribeDevice({ token })
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      UnSubscribeToken = (token) => {
          return $api.notifications.pushTokens
              .unsubscribeDevice({ token })
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
  }

  class Payment extends Common {
      constructor() {
          super();
      }
      PaymentMethods;
      PaymentMethod;
      GetPaymentMethods = (filter) => {
          return $api.payment.paymentMethod.fetch(filter).then((response) => {
              this.PaymentMethods = response.data;
          });
      };
      GetPaymentMethod = (id) => {
          return $api.payment.paymentMethod.get(id).then((response) => {
              this.PaymentMethod = response.data;
          });
      };
      MakeMethodPrimary = (id) => {
          return $api.payment.paymentMethod
              .makePrimaryPaymentMethod(id)
              .then((response) => {
              this.PaymentMethod = response.data;
          })
              .catch((error) => {
              //
          });
      };
      DeleteMethod = (id) => {
          return $api.payment.paymentMethod
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
  }

  class Plays extends Common {
      constructor() {
          super();
      }
      AllGames;
      SingleGame;
      AllParticipantAnswers;
      ParticipantAnswer;
      GameQuestions;
      // Form input
      CreateGameForm;
      AnswerGameQuestionForm;
      GetGames = (filters) => {
          return $api.plays.game.fetch(filters).then((response) => {
              this.AllGames = response.data;
          });
      };
      GetGameAnswers = (gameId, filters) => {
          return $api.plays.game.getGameAnswers(gameId, filters).then((response) => {
              this.AllParticipantAnswers = response.data;
          });
      };
      GetGame = (id) => {
          return $api.plays.game.get(id).then((response) => {
              this.SingleGame = response.data;
          });
      };
      GetParticipantAnswer = (gameId, participantId) => {
          return $api.plays.game
              .getParticipantAnswer(gameId, participantId)
              .then((response) => {
              this.ParticipantAnswer = response.data;
          });
      };
      GetQuizQuestions = (gameId) => {
          return $api.plays.game.getGameQuestions(gameId).then((response) => {
              this.GameQuestions = response.data;
          });
      };
      CreateGame = (formIsValid) => {
          if (formIsValid && this.CreateGameForm) {
              return $api.plays.game
                  .post(null, this.CreateGameForm)
                  .then((response) => {
                  this.SingleGame = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      JoinGame = (gameId, join) => {
          return $api.plays.game
              .joinGame(gameId, { join })
              .then((response) => {
              this.SingleGame = response.data;
          })
              .catch((error) => {
              //
          });
      };
      StartGame = (gameId) => {
          return $api.plays.game
              .startGame(gameId)
              .then((response) => {
              this.SingleGame = response.data;
          })
              .catch((error) => {
              //
          });
      };
      AnswerGameQuestion = (gameId) => {
          if (this.AnswerGameQuestionForm) {
              return $api.plays.game
                  .answerGameQuestion(gameId, this.AnswerGameQuestionForm)
                  .then((response) => {
                  this.ParticipantAnswer = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      DeleteGame = (id) => {
          return $api.plays.game
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
  }

  class Schools extends Common {
      constructor() {
          super();
      }
      AllInstitutions;
      SingleInstitution;
      AllFaculties;
      SingleFaculty;
      AllDepartments;
      SingleDepartment;
      AllDepartmentCourses;
      SingleDepartmentCourse;
      // Form input
      CreateInstitutionForm;
      UpdateInstitutionForm;
      CreateFacultyForm;
      UpdateFacultyForm;
      CreateDepartmentForm;
      UpdateDepartmentForm;
      CreateDepartmentCourseForm;
      UpdateDepartmentCourseForm;
      GetInstitutions = (filters) => {
          return $api.schools.institution.fetch(filters).then((response) => {
              this.AllInstitutions = response.data;
          });
      };
      GetIntitution = (id) => {
          return $api.schools.institution.get(id).then((response) => {
              this.SingleInstitution = response.data;
          });
      };
      GetFaculties = (filters) => {
          return $api.schools.faculty.fetch(filters).then((response) => {
              this.AllFaculties = response.data;
          });
      };
      GetFaculty = (id) => {
          return $api.schools.faculty.get(id).then((response) => {
              this.SingleFaculty = response.data;
          });
      };
      GetDepartments = (filters) => {
          return $api.schools.department.fetch(filters).then((response) => {
              this.AllDepartments = response.data;
          });
      };
      GetDepartment = (id) => {
          return $api.schools.department.get(id).then((response) => {
              this.SingleDepartment = response.data;
          });
      };
      GetDepartmentCourses = (filters) => {
          return $api.schools.course.fetch(filters).then((response) => {
              this.AllDepartmentCourses = response.data;
          });
      };
      GetDepartmentCourse = (id) => {
          return $api.schools.course.get(id).then((response) => {
              this.SingleDepartmentCourse = response.data;
          });
      };
      CreateInstitution = (formIsValid) => {
          if (formIsValid && this.CreateInstitutionForm) {
              return $api.schools.institution
                  .post(null, this.CreateInstitutionForm)
                  .then((response) => {
                  this.SingleInstitution = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateInstitution = (formIsValid, id) => {
          if (formIsValid && this.UpdateInstitutionForm) {
              return $api.schools.institution
                  .put(null, id, this.UpdateInstitutionForm)
                  .then((response) => {
                  this.SingleInstitution = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      CreateFaculty = (formIsValid) => {
          if (formIsValid && this.CreateFacultyForm) {
              return $api.schools.faculty
                  .post(null, this.CreateFacultyForm)
                  .then((response) => {
                  this.SingleFaculty = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateFaculty = (formIsValid, id) => {
          if (formIsValid && this.UpdateFacultyForm) {
              return $api.schools.faculty
                  .put(null, id, this.UpdateFacultyForm)
                  .then((response) => {
                  this.SingleFaculty = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      CreateDepartment = (formIsValid) => {
          if (formIsValid && this.CreateDepartmentForm) {
              return $api.schools.department
                  .post(null, this.CreateDepartmentForm)
                  .then((response) => {
                  this.SingleDepartment = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateDepartment = (formIsValid, id) => {
          if (formIsValid && this.UpdateDepartmentForm) {
              return $api.schools.department
                  .put(null, id, this.UpdateDepartmentForm)
                  .then((response) => {
                  this.SingleDepartment = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      CreateDepartmentCourse = (formIsValid) => {
          if (formIsValid && this.CreateDepartmentCourseForm) {
              return $api.schools.course
                  .post(null, this.CreateDepartmentCourseForm)
                  .then((response) => {
                  this.SingleDepartmentCourse = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateDepartmentCourse = (formIsValid, id) => {
          if (formIsValid && this.UpdateDepartmentCourseForm) {
              return $api.schools.course
                  .put(null, id, this.UpdateDepartmentCourseForm)
                  .then((response) => {
                  this.SingleDepartmentCourse = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      DeleteInstitution = (id) => {
          return $api.schools.institution
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteFaculty = (id) => {
          return $api.schools.faculty
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteDepartment = (id) => {
          return $api.schools.department
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteDepartmentCourse = (id) => {
          return $api.schools.course
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
  }

  class Study extends Common {
      constructor() {
          super();
      }
      Tags;
      SingleTag;
      AllFolders;
      SingleFolder;
      AllQuzzies;
      SingleQuiz;
      AllQuestions;
      SingleQuestion;
      AllCourses;
      SingleCourse;
      AllFiles;
      SingleFile;
      SaveItemToFolderForm;
      SingleMediaFile;
      NewCoursableItem;
      UpdatedQuestion;
      SelectedMaterialDetails = vue.reactive({
          title: '',
          descriptions: '',
      });
      UpdatedFile;
      // Form input
      CreateTagForm;
      UpdateTagForm;
      CreateFolderForm;
      UpdateFolderForm;
      CreateQuizForm;
      UpdateQuizForm;
      CreateQuestionForm;
      UpdateQuestionForm;
      CreateCourseForm;
      UpdateCourseForm;
      CreateFileForm;
      UpdateFileForm;
      ReorderQuizQuestionsForm;
      MoveItemToCourseForm;
      UpdateCourseSectionForm;
      convertQuestionToInput = (questions, type) => {
          let timeLimit = 0;
          let questionContent = questions.content;
          questions.settings.forEach((setting) => {
              if (setting.type == 'time-limit') {
                  timeLimit = Logic.Common.timeEquivalentsInSeconds[`${setting.value}`];
              }
          });
          let set = [];
          if (type == 'match') {
              questions.options.forEach((questionOptions, index) => {
                  set.push({
                      q: questionOptions.value,
                      // @ts-ignore
                      a: questions.match[index].value,
                  });
              });
          }
          if (set.length == 0) {
              set = undefined;
          }
          let options = questions.options.map((option) => {
              return option.value;
          });
          let answers = [];
          if (type == 'multipleChoice') {
              answers = questions.options
                  .map((option, index) => {
                  if (option.answer) {
                      return index;
                  }
              })
                  .filter((item) => {
                  return item != undefined;
              });
          }
          else {
              answers = questions.options
                  .map((option) => {
                  if (option.answer) {
                      return option.answer;
                  }
              })
                  .filter((item) => {
                  return item != undefined;
              });
          }
          if (type == 'trueOrFalse') {
              answers = undefined;
              options = undefined;
          }
          if (type == 'sequence') {
              options = undefined;
          }
          if (type == 'match') {
              options = undefined;
              answers = undefined;
          }
          if (type == 'dragAnswers' || type == 'fillInBlanks') {
              options = undefined;
              // @ts-ignore
              answers = questions.data
                  .map((item) => {
                  if (item.type == 'answer') {
                      return item.value;
                  }
              })
                  .filter((item) => {
                  return item != undefined;
              });
              questionContent = questions.data
                  .map((item) => {
                  if (item.type == 'text') {
                      return item.value.trim();
                  }
                  else {
                      return '__________';
                  }
              })
                  .join('');
          }
          return {
              id: Logic.Study.SingleQuiz.id,
              question: questionContent,
              timeLimit: timeLimit,
              data: {
                  type,
                  options,
                  answers,
                  answer: type == 'trueOrFalse'
                      ? questions.options[0].answer == 'True'
                      : undefined,
                  indicator: type == 'dragAnswers' || type == 'fillInBlanks'
                      ? '__________'
                      : undefined,
                  set,
              },
          };
      };
      questionTypes = {
          multipleChoice: {
              id: '',
              type: 'Multiple choice',
              image: 'multiple_choice',
              icon: 'multiple-choice-type',
              active: true,
              placeholder: 'Enter question',
              content: 'Enter question',
              options: [
                  {
                      shape: 'circle',
                      text: 'Enter answer',
                      shapeSize: 'h-[23px]',
                      isRadio: true,
                      id: this.makeid(8),
                      value: 'a',
                      answer: 'a',
                  },
                  {
                      shape: 'triangle',
                      text: 'Enter answer',
                      shapeSize: 'h-[20px]',
                      isRadio: true,
                      id: this.makeid(8),
                      value: 'b',
                      answer: '',
                  },
                  {
                      shape: 'square',
                      text: 'Enter answer',
                      shapeSize: 'h-[20px]',
                      isRadio: true,
                      id: this.makeid(8),
                      value: 'c',
                      answer: '',
                  },
                  {
                      shape: 'kite',
                      text: 'Enter answer',
                      shapeSize: 'h-[24px]',
                      isRadio: true,
                      id: this.makeid(8),
                      value: 'd',
                      answer: '',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'Multiple choice',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
                  {
                      type: 'total-options',
                      value: '4',
                  },
                  {
                      type: 'correct-anwsers',
                      value: '1',
                  },
              ],
          },
          writeAnswer: {
              id: '',
              type: 'Write answer',
              image: 'write_answer',
              content: 'Enter question',
              active: false,
              placeholder: 'Enter question',
              icon: 'write-answer-type',
              options: [
                  {
                      shape: 'circle',
                      text: 'Enter correct answer',
                      shapeSize: 'h-[23px]',
                      isRadio: false,
                      id: '',
                      value: 'a',
                      answer: 'a',
                  },
                  {
                      shape: 'triangle',
                      text: 'Enter another accepted answer (optional)',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: '',
                  },
                  {
                      shape: 'square',
                      text: 'Enter another accepted answer (optional)',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: '',
                  },
                  {
                      shape: 'kite',
                      text: 'Enter another accepted answer (optional)',
                      shapeSize: 'h-[24px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: '',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'Write answer',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
              ],
          },
          trueOrFalse: {
              id: '',
              type: 'True/False',
              image: 'true_false',
              content: 'Enter question',
              active: false,
              placeholder: 'Enter question',
              icon: 'true-false-type',
              options: [
                  {
                      shape: 'circle',
                      text: 'True',
                      shapeSize: 'h-[23px]',
                      isRadio: true,
                      id: this.makeid(8),
                      value: 'True',
                      answer: 'true',
                  },
                  {
                      shape: 'triangle',
                      text: 'False',
                      shapeSize: 'h-[20px]',
                      isRadio: true,
                      id: this.makeid(8),
                      value: 'False',
                      answer: '',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'True/False',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
              ],
          },
          fillInBlanks: {
              id: '',
              type: 'Fill in blank(s)',
              image: 'fill_in_blank',
              content: '__________ Enter text',
              options: [],
              icon: 'fill-in-blanks-type',
              active: false,
              data: [
                  {
                      content: '',
                      type: 'text',
                      value: '',
                  },
                  {
                      content: '',
                      type: 'answer',
                      value: 'answer here',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'Fill in blank(s)',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
              ],
          },
          dragAnswers: {
              id: '',
              type: 'Drag answers',
              image: 'drag_answer',
              content: '__________ Enter text',
              active: false,
              icon: 'drag-answers-type',
              options: [],
              data: [
                  {
                      content: '',
                      type: 'text',
                      value: '',
                  },
                  {
                      content: '',
                      type: 'answer',
                      value: 'answer here',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'Drag answers',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
              ],
          },
          sequence: {
              id: '',
              type: 'Sequence',
              image: 'sequence',
              content: 'Enter question',
              icon: 'sequence-type',
              active: false,
              placeholder: 'Enter instruction/question here (e.g. arrange these sentences in alphabetical order)',
              options: [
                  {
                      shape: 'circle',
                      text: 'Enter 1st word/sentence',
                      shapeSize: 'h-[23px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: 'a',
                  },
                  {
                      shape: 'triangle',
                      text: 'Enter 2nd word/sentence',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: 'b',
                  },
                  {
                      shape: 'square',
                      text: 'Enter 3rd word/sentence',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: 'c',
                  },
                  {
                      shape: 'kite',
                      text: 'Enter 4th word/sentence',
                      shapeSize: 'h-[24px]',
                      isRadio: false,
                      id: '',
                      value: '',
                      answer: 'd',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'Sequence',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
                  {
                      type: 'sequence-total',
                      value: '',
                  },
              ],
          },
          match: {
              id: '',
              type: 'Match',
              image: 'match',
              content: 'Enter question',
              active: false,
              icon: 'match-type',
              placeholder: 'Enter instruction/questions here (e.g. match the vegetables with their colors)',
              options: [
                  {
                      shape: 'circle',
                      text: 'Enter 1st word/sentence',
                      shapeSize: 'h-[23px]',
                      isRadio: false,
                      id: '',
                      value: 'a',
                      answer: 'a',
                  },
                  {
                      shape: 'triangle',
                      text: 'Enter 2nd word/sentence',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: 'b',
                      answer: 'b',
                  },
                  {
                      shape: 'square',
                      text: 'Enter 3rd word/sentence',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: 'c',
                      answer: 'c',
                  },
                  {
                      shape: 'kite',
                      text: 'Enter 4th word/sentence',
                      shapeSize: 'h-[24px]',
                      isRadio: false,
                      id: '',
                      value: 'd',
                      answer: 'd',
                  },
              ],
              match: [
                  {
                      shape: 'circle',
                      text: 'Enter match',
                      shapeSize: 'h-[23px]',
                      isRadio: false,
                      id: '',
                      value: '1',
                      answer: '1',
                  },
                  {
                      shape: 'triangle',
                      text: 'Enter match',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: '2',
                      answer: '2',
                  },
                  {
                      shape: 'square',
                      text: 'Enter match',
                      shapeSize: 'h-[20px]',
                      isRadio: false,
                      id: '',
                      value: '3',
                      answer: '3',
                  },
                  {
                      shape: 'kite',
                      text: 'Enter match',
                      shapeSize: 'h-[24px]',
                      isRadio: false,
                      id: '',
                      value: '4',
                      answer: '4',
                  },
              ],
              settings: [
                  {
                      type: 'question-type',
                      value: 'Match',
                  },
                  {
                      type: 'time-limit',
                      value: '30s',
                  },
                  {
                      type: 'match-total',
                      value: '',
                  },
              ],
          },
      };
      getQuestionTemplate = (type) => {
          return this.questionTypes[type];
      };
      ProcessQuestionData = (question) => {
          const questionData = JSON.parse(JSON.stringify(this.getQuestionTemplate(question.data.type)));
          questionData.id = question.id;
          questionData.itemType = question.data.type;
          question.data.options?.forEach((option, index) => {
              questionData.options[index].value = option;
          });
          if (question.data.type == 'multipleChoice') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
                  if (setting.type == 'total-options') {
                      setting.value = `${question.data.options.length}`;
                  }
                  if (setting.type == 'correct-anwsers') {
                      setting.value = `${question.data.answers.length}`;
                  }
              });
              questionData.content = question.question;
          }
          if (question.data.type == 'writeAnswer') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
              });
              question.data.answers.forEach((item, index) => {
                  questionData.options[index].value = item;
                  questionData.options[index].answer = item;
              });
              questionData.content = question.question;
          }
          if (question.data.type == 'trueOrFalse') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
              });
              questionData.content = question.question;
          }
          if (question.data.type == 'fillInBlanks') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
              });
          }
          if (question.data.type == 'dragAnswers') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
              });
          }
          if (question.data.type == 'sequence') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
              });
              question.data.answers.forEach((item, index) => {
                  questionData.options[index].value = item;
                  questionData.options[index].answer = item;
              });
              questionData.content = question.question;
          }
          if (question.data.type == 'match') {
              questionData.settings.forEach((setting) => {
                  if (setting.type == 'time-limit') {
                      setting.value =
                          Logic.Common.EquivalentsSecondsInString[`${question.timeLimit}`];
                  }
              });
              question.data.set.forEach((item, index) => {
                  questionData.options[index].value = item.q;
                  questionData.options[index].answer = item.q;
                  questionData.match[index].value = item.a;
                  questionData.match[index].answer = item.a;
              });
              questionData.content = question.question;
          }
          if (question.data.type == 'dragAnswers' ||
              question.data.type == 'fillInBlanks') {
              const questionContent = question.question
                  .trim()
                  .replaceAll(`${question.data.indicator}`, '{}')
                  .split('}');
              const answers = question.data.answers;
              questionData.data.length = 0;
              questionContent.forEach((item) => {
                  if (item.trim()) {
                      const itemStrings = item.split('');
                      let textHasAnswer = false;
                      let finalString = '';
                      if (itemStrings[itemStrings.length - 1] == '{') {
                          itemStrings.pop();
                          finalString = itemStrings.join('');
                          textHasAnswer = true;
                      }
                      else {
                          finalString = itemStrings.join('');
                      }
                      questionData.data.push({
                          content: '',
                          type: 'text',
                          value: finalString,
                      });
                      if (textHasAnswer) {
                          questionData.data.push({
                              content: '',
                              type: 'answer',
                              value: answers.shift(),
                          });
                      }
                  }
              });
          }
          return questionData;
      };
      GetTags = (filters) => {
          return $api.interactions.tag.fetch(filters).then((response) => {
              this.Tags = response.data;
          });
      };
      GetTag = (id) => {
          return $api.interactions.tag.get(id).then((response) => {
              this.SingleTag = response.data;
          });
      };
      GetFolders = (filters) => {
          return $api.study.folder.fetch(filters).then((response) => {
              this.AllFolders = response.data;
          });
      };
      GetFolder = (id) => {
          return $api.study.folder.get(id).then((response) => {
              this.SingleFolder = response.data;
          });
      };
      GetQuizzes = (filters) => {
          return $api.study.quiz.fetch(filters).then((response) => {
              this.AllQuzzies = response.data;
          });
      };
      GetQuiz = (id) => {
          return $api.study.quiz.get(id).then((response) => {
              this.SingleQuiz = response.data;
          });
      };
      GetQuestions = (quizId) => {
          if (!quizId) {
              return new Promise((resolve) => {
                  resolve('');
              });
          }
          return $api.study.quiz.getQuestions(quizId).then((response) => {
              this.AllQuestions = response.data;
              return response.data;
          });
      };
      GetQuestion = (quidId, questionId) => {
          return $api.study.quiz.getQuestion(quidId, questionId).then((response) => {
              this.SingleQuestion = response.data;
          });
      };
      GetCourses = (filters) => {
          return $api.study.course.fetch(filters).then((response) => {
              this.AllCourses = response.data;
          });
      };
      GetCourse = (id) => {
          return $api.study.course.get(id).then((response) => {
              this.SingleCourse = response.data;
          });
      };
      GetFiles = (filters) => {
          return $api.study.file.fetch(filters).then((response) => {
              this.AllFiles = response.data;
          });
      };
      GetFileMedia = (fileId) => {
          return $api.study.file.getFileMedia(fileId).then((response) => {
              this.SingleMediaFile = response.data;
              return response.data;
          });
      };
      CreateTag = (formIsValid) => {
          if (formIsValid && this.CreateTagForm) {
              return $api.interactions.tag
                  .post(null, this.CreateTagForm)
                  .then((response) => {
                  this.SingleTag = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateTag = (formIsValid, id) => {
          if (formIsValid && this.UpdateTagForm) {
              return $api.interactions.tag
                  .put(null, id, this.CreateTagForm)
                  .then((response) => {
                  this.SingleTag = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      CreateFolder = (formIsValid) => {
          if (formIsValid && this.CreateFolderForm) {
              return $api.study.folder
                  .post(null, this.CreateFolderForm)
                  .then((response) => {
                  this.SingleFolder = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateFolder = (formIsValid, id) => {
          if (formIsValid && this.UpdateFolderForm) {
              return $api.study.folder
                  .put(null, id, this.UpdateFolderForm)
                  .then((response) => {
                  this.SingleFolder = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      SaveItemToFolder = (formIsValid) => {
          if (formIsValid && this.SaveItemToFolderForm) {
              return $api.study.folder
                  .saveItemToFolder(this.SaveItemToFolderForm)
                  .then((response) => {
                  this.SingleFolder = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      CreateQuiz = (formIsValid) => {
          if (formIsValid && this.CreateQuizForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.study.quiz
                  .post(null, this.CreateQuizForm)
                  .then((response) => {
                  this.SingleQuiz = response.data;
                  this.GetQuestions(this.SingleQuiz.id);
              })
                  .catch((error) => {
                  throw error;
              });
          }
      };
      UpdateQuiz = (formIsValid, id) => {
          if (formIsValid && this.UpdateQuizForm) {
              return $api.study.folder
                  .put(null, id, this.UpdateQuizForm)
                  .then((response) => {
                  this.SingleQuiz = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      PublishQuiz = (id) => {
          return $api.study.quiz
              .publishQuiz(id)
              .then((response) => {
              this.SingleQuiz = response.data;
          })
              .catch((errro) => {
              //
          });
      };
      ReorderQuizQuestions = (id) => {
          return $api.study.quiz
              .reorderQuiz(id, this.ReorderQuizQuestionsForm)
              .then((response) => {
              this.SingleQuiz = response.data;
          });
      };
      CreateQuestion = (formIsValid, quizId) => {
          if (formIsValid && this.CreateQuestionForm) {
              return $api.study.quiz
                  .createQuestion(quizId, this.CreateQuestionForm)
                  .then((response) => {
                  this.SingleQuestion = response.data;
                  this.GetQuestions(quizId);
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateQuestion = (formIsValid, quizId) => {
          if (formIsValid && this.UpdateQuestionForm) {
              this.UpdatedQuestion = undefined;
              return $api.study.quiz
                  .updateQuestion(quizId, this.UpdateQuestionForm)
                  .then((response) => {
                  this.UpdatedQuestion = response.data;
                  this.GetQuestions(quizId);
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      CreateCourse = (formIsValid) => {
          if (formIsValid && this.CreateCourseForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.study.course
                  .post(null, this.CreateCourseForm)
                  .then((response) => {
                  this.SingleCourse = response.data;
                  Logic.Common.hideLoader();
                  return response.data;
              })
                  .catch((error) => {
                  throw error;
              });
          }
      };
      UpdateCourse = (formIsValid, id) => {
          if (formIsValid && this.UpdateCourseForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.study.course
                  .put(null, id, this.UpdateCourseForm)
                  .then((response) => {
                  this.SingleCourse = response.data;
              })
                  .catch((error) => { });
          }
      };
      MoveItemToCourse = (formIsValid) => {
          if (formIsValid && this.MoveItemToCourseForm) {
              return $api.study.course
                  .moveItemIntoCourse(this.MoveItemToCourseForm)
                  .then((response) => {
                  this.SingleCourse = response.data;
                  this.NewCoursableItem = Logic.Common.makeid(16);
                  return response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      UpdateCourseSection = () => {
          if (this.UpdateCourseSectionForm) {
              return $api.study.course
                  .updateCourseSections(this.UpdateCourseSectionForm)
                  .then((response) => {
                  this.SingleCourse = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      PublishCourse = (id) => {
          return $api.study.course
              .publishCourse(id)
              .then((response) => {
              this.SingleCourse = response.data;
          })
              .catch((error) => {
              //
          });
      };
      FreezeCourse = (id) => {
          return $api.study.course
              .freezeCourse(id)
              .then((response) => {
              this.SingleCourse = response.data;
          })
              .catch((error) => {
              //
          });
      };
      CreateFile = (formIsValid) => {
          if (formIsValid && this.CreateFileForm) {
              return $api.study.file
                  .post(null, this.CreateFileForm)
                  .then((response) => {
                  this.SingleFile = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      UpdateFile = (formIsValid, id) => {
          if (formIsValid && this.UpdateFileForm) {
              return $api.study.file
                  .put(null, id, this.UpdateFileForm)
                  .then((response) => {
                  this.UpdatedFile = response.data;
              })
                  .catch((errro) => {
                  //
              });
          }
      };
      DeleteTag = (id) => {
          return $api.interactions.tag
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteFolder = (id) => {
          return $api.study.folder
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteQuiz = (id) => {
          return $api.study.quiz
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteQuestion = (id, quizId) => {
          return $api.study.quiz
              .deleteQuestion(quizId, id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteCourse = (id) => {
          return $api.study.course
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
      DeleteFile = (id) => {
          return $api.study.file
              .delete(id)
              .then((response) => {
              //
          })
              .catch((error) => {
              //
          });
      };
  }

  class Users extends Common {
      constructor() {
          super();
      }
      AllUsers;
      SingleUser;
      Verification;
      Verifications;
      // form inputs
      CustomizeAIForm;
      UpdateUserForm;
      CreateVerificationForm;
      UpdateUserVerificationForm;
      GetUsers = (filters) => {
          return $api.users.users.fetch(filters).then((response) => {
              this.AllUsers = response.data;
          });
      };
      GetVerifications = (filters) => {
          return $api.users.verifications.fetch(filters).then((response) => {
              this.Verifications = response.data;
          });
      };
      GetVerification = (id) => {
          return $api.users.verifications.get(id).then((response) => {
              this.Verification = response.data;
          });
      };
      GetUser = (id) => {
          return $api.users.users.get(id).then((response) => {
              this.SingleUser = response.data;
          });
      };
      CustomizeAI = (formIsValid) => {
          if (formIsValid && this.CustomizeAIForm) {
              return $api.users.users
                  .customizeUserAI(this.CustomizeAIForm)
                  .then((response) => {
                  this.SingleUser = response.data;
              })
                  .catch((error) => {
                  //
              });
          }
      };
      UpdateUser = (formIsValid) => {
          if (formIsValid && this.UpdateUserForm) {
              Logic.Common.showLoader({
                  loading: true,
                  show: true,
                  useModal: true,
              });
              return $api.users.users
                  .updateUser(this.UpdateUserForm)
                  .then((response) => {
                  this.SingleUser = response.data;
                  Logic.Common.hideLoader();
              })
                  .catch((error) => {
                  throw error;
              });
          }
      };
      CreateVerification = (formIsValid) => {
          if (formIsValid && this.CreateVerificationForm) {
              $api.users.verifications
                  .createVerification(this.CreateVerificationForm)
                  .then((response) => {
                  this.Verification = response.data;
              });
          }
      };
      UpdateUserVerification = (formIsValid) => {
          if (formIsValid && this.UpdateUserVerificationForm) {
              return $api.users.verifications
                  .updateUserVerification(this.UpdateUserVerificationForm)
                  .then((response) => {
                  //
              })
                  .catch((error) => {
                  //
              });
          }
      };
  }

  const Logic = {
      Auth: new Auth(),
      Common: new Common(),
      Form: new Form(),
      Conversations: new Conversations(),
      Notifications: new Notifications(),
      Payment: new Payment(),
      Plays: new Plays(),
      Schools: new Schools(),
      Study: new Study(),
      Users: new Users(),
  };

  exports.Logic = Logic;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
