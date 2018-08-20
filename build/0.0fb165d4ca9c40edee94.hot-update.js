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

function delay() {
	return Promise((resolve, reject) => {
		wait(ms, time);
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi9zcmNcXGluZGV4LmpzIiwiRDovQXRvbVNwYWNlSmF2YVNjcmlwdC90cmFpbmluZy1rb2EyL3Rlc3QuanMiXSwibmFtZXMiOlsib24iLCJlcnIiLCJjdHgiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YWl0IiwibXMiLCJjYWxsYmFjayIsIm5vdyIsIkRhdGUiLCJzZXRUaW1lb3V0IiwicGFzcyIsImRlbHRhIiwidGltZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQSwrREFBZSxJQUFJLDJDQUFKLEdBQ2JBLEVBRGEsQ0FDVixPQURVLEVBQ0QsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2hDQyxTQUFRQyxLQUFSLENBQWNILEdBQWQsRUFBbUJDLEdBQW5CO0FBQ0EsQ0FIYSxDQUFmLEU7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQSxTQUFTRyxJQUFULENBQWVDLEVBQWYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzVCLEtBQUlDLE1BQU0sSUFBSUMsSUFBSixFQUFWOztBQUVBQyxZQUFXLE1BQU07QUFDaEIsTUFBSUMsT0FBTyxJQUFJRixJQUFKLEVBQVg7QUFDQSxNQUFJRyxRQUFRRCxPQUFPSCxHQUFuQjs7QUFFQUQsV0FBU0ssS0FBVDtBQUNBLEVBTEQsRUFLR04sRUFMSDtBQU1BOztBQUVERCxLQUFLLEdBQUwsRUFBVSxVQUFVUSxJQUFWLEVBQWdCO0FBQ3pCVixTQUFRVyxHQUFSLENBQVlELElBQVo7QUFDQSxDQUZEOztBQUlBLFNBQVNFLEtBQVQsR0FBZ0I7QUFDZixRQUFPQyxRQUFRLENBQUNDLE9BQUQsRUFBU0MsTUFBVCxLQUFvQjtBQUNsQ2IsT0FBS0MsRUFBTCxFQUFVTyxJQUFWO0FBQ0EsRUFGTSxDQUFQO0FBR0EsQyIsImZpbGUiOiIwLjBmYjE2NWQ0Y2E5YzQwZWRlZTk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5cbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuXG5pbXBvcnQgJy4uL3Rlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgS29hKClcblx0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIsIGN0eCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyLCBjdHgpO1xuXHR9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3NyYy9jbGFzc2VzL3N0b3JhZ2UnO1xuXG4vLyBjb25zb2xlLmxvZyhuZXcgU3RvcmFnZSgpKTtcblxuZnVuY3Rpb24gd2FpdCAobXMsIGNhbGxiYWNrKSB7XG5cdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCBwYXNzID0gbmV3IERhdGUoKTtcblx0XHRsZXQgZGVsdGEgPSBwYXNzIC0gbm93O1xuXG5cdFx0Y2FsbGJhY2soZGVsdGEpO1xuXHR9LCBtcyk7XG59XG5cbndhaXQoMTAwLCBmdW5jdGlvbiAodGltZSkge1xuXHRjb25zb2xlLmxvZyh0aW1lKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxheSgpe1xuXHRyZXR1cm4gUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcblx0XHR3YWl0KG1zICwodGltZSkpXG5cdH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=