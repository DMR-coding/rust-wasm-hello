(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/rust_wasm_hello.js":
/*!*********************************!*\
  !*** ../pkg/rust_wasm_hello.js ***!
  \*********************************/
/*! exports provided: fib_s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fib_s\", function() { return fib_s; });\n/* harmony import */ var _rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_hello_bg.wasm */ \"../pkg/rust_wasm_hello_bg.wasm\");\n\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n* @param {number} n\n* @returns {string}\n*/\nfunction fib_s(n) {\n    const retptr = 8;\n    const ret = _rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fib_s\"](retptr, n);\n    const memi32 = getInt32Memory();\n    const v0 = getStringFromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n    _rust_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n    return v0;\n}\n\n\n\n//# sourceURL=webpack:///../pkg/rust_wasm_hello.js?");

/***/ }),

/***/ "../pkg/rust_wasm_hello_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/rust_wasm_hello_bg.wasm ***!
  \**************************************/
/*! exports provided: memory, fib_s, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rust_wasm_hello_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rust_wasm_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rust-wasm-hello */ \"../pkg/rust_wasm_hello.js\");\n\n\nfunction fib(n) {\n    let i1 = BigInt(0), i2 = BigInt(1);\n    let scratch;\n\n    for(let x = 0; x < n; x++) {\n        scratch = i1 + i2;\n        i1 = i2;\n        i2 = scratch;\n    }\n\n    return i1;\n}\nconst go_button = document.querySelector(\"#go_btn\");\nconst iterations_box = document.querySelector(\"#iterations\");\nconst time_output = document.querySelector(\"#time_output\");\nconst value_output = document.querySelector(\"#value_output\");\n\ngo_button.addEventListener(\"click\", function(){\n    const iterations = parseInt(iterations_box.value);\n\n    const start = performance.now();\n    const rust_val = rust_wasm_hello__WEBPACK_IMPORTED_MODULE_0__[\"fib_s\"](iterations);\n    let rust = performance.now();\n    const _ = fib(iterations);\n    let native = performance.now();\n\n    const rust_time = rust - start;\n    const native_time = native - rust;\n    \n    time_output.textContent = `Rust took: ${rust_time}\\nJavascript Took: ${native_time}`;\n    value_output.textContent = rust_val;\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);