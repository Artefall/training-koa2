exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__("koa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("./src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__("./test.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__test__);






/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_koa___default.a().on('error', function (err, ctx) {
	console.error(err, ctx);
}));

/***/ }),

/***/ "./test.js":
/***/ (function(module, exports) {

// import Storage from './src/classes/storage';

// console.log(new Storage());

function wait(ms, callback) {
	let now = new Date();

	setTimeout(() => {
		let pass = new Date();
		let delta = pass - now;

		callback(delta);
	}, ms);
}

wait(100, function (time) {
	console.log(time);
});

function delay() {}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi9zcmNcXGluZGV4LmpzIiwiRDovQXRvbVNwYWNlSmF2YVNjcmlwdC90cmFpbmluZy1rb2EyL3Rlc3QuanMiXSwibmFtZXMiOlsib24iLCJlcnIiLCJjdHgiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YWl0IiwibXMiLCJjYWxsYmFjayIsIm5vdyIsIkRhdGUiLCJzZXRUaW1lb3V0IiwicGFzcyIsImRlbHRhIiwidGltZSIsImxvZyIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUEsK0RBQWUsSUFBSSwyQ0FBSixHQUNiQSxFQURhLENBQ1YsT0FEVSxFQUNELFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNoQ0MsU0FBUUMsS0FBUixDQUFjSCxHQUFkLEVBQW1CQyxHQUFuQjtBQUNBLENBSGEsQ0FBZixFOzs7Ozs7O0FDTkE7O0FBRUE7O0FBRUEsU0FBU0csSUFBVCxDQUFlQyxFQUFmLEVBQW1CQyxRQUFuQixFQUE2QjtBQUM1QixLQUFJQyxNQUFNLElBQUlDLElBQUosRUFBVjs7QUFFQUMsWUFBVyxNQUFNO0FBQ2hCLE1BQUlDLE9BQU8sSUFBSUYsSUFBSixFQUFYO0FBQ0EsTUFBSUcsUUFBUUQsT0FBT0gsR0FBbkI7O0FBRUFELFdBQVNLLEtBQVQ7QUFDQSxFQUxELEVBS0dOLEVBTEg7QUFNQTs7QUFFREQsS0FBSyxHQUFMLEVBQVUsVUFBVVEsSUFBVixFQUFnQjtBQUN6QlYsU0FBUVcsR0FBUixDQUFZRCxJQUFaO0FBQ0EsQ0FGRDs7QUFJQSxTQUFTRSxLQUFULEdBQWdCLENBQUUsQyIsImZpbGUiOiIwLmQ5Y2UzYjc0ZDUxNzJhNGQ5MThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5cbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuXG5pbXBvcnQgJy4uL3Rlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgS29hKClcblx0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIsIGN0eCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyLCBjdHgpO1xuXHR9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3NyYy9jbGFzc2VzL3N0b3JhZ2UnO1xuXG4vLyBjb25zb2xlLmxvZyhuZXcgU3RvcmFnZSgpKTtcblxuZnVuY3Rpb24gd2FpdCAobXMsIGNhbGxiYWNrKSB7XG5cdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCBwYXNzID0gbmV3IERhdGUoKTtcblx0XHRsZXQgZGVsdGEgPSBwYXNzIC0gbm93O1xuXG5cdFx0Y2FsbGJhY2soZGVsdGEpO1xuXHR9LCBtcyk7XG59XG5cbndhaXQoMTAwLCBmdW5jdGlvbiAodGltZSkge1xuXHRjb25zb2xlLmxvZyh0aW1lKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxheSgpe31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==