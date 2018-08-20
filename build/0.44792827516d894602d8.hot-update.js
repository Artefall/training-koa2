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
	return new Promise((resolve, reject) => {
		wait(ms, wait);
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi9zcmNcXGluZGV4LmpzIiwiRDovQXRvbVNwYWNlSmF2YVNjcmlwdC90cmFpbmluZy1rb2EyL3Rlc3QuanMiXSwibmFtZXMiOlsib24iLCJlcnIiLCJjdHgiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YWl0IiwibXMiLCJjYWxsYmFjayIsIm5vdyIsIkRhdGUiLCJzZXRUaW1lb3V0IiwicGFzcyIsImRlbHRhIiwidGltZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQSwrREFBZSxJQUFJLDJDQUFKLEdBQ2JBLEVBRGEsQ0FDVixPQURVLEVBQ0QsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2hDQyxTQUFRQyxLQUFSLENBQWNILEdBQWQsRUFBbUJDLEdBQW5CO0FBQ0EsQ0FIYSxDQUFmLEU7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQSxTQUFTRyxJQUFULENBQWVDLEVBQWYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzVCLEtBQUlDLE1BQU0sSUFBSUMsSUFBSixFQUFWOztBQUVBQyxZQUFXLE1BQU07QUFDaEIsTUFBSUMsT0FBTyxJQUFJRixJQUFKLEVBQVg7QUFDQSxNQUFJRyxRQUFRRCxPQUFPSCxHQUFuQjs7QUFFQUQsV0FBU0ssS0FBVDtBQUNBLEVBTEQsRUFLR04sRUFMSDtBQU1BOztBQUVERCxLQUFLLEdBQUwsRUFBVSxVQUFVUSxJQUFWLEVBQWdCO0FBQ3pCVixTQUFRVyxHQUFSLENBQVlELElBQVo7QUFDQSxDQUZEOztBQUlBLFNBQVNFLEtBQVQsR0FBZ0I7QUFDZixRQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVNDLE1BQVQsS0FBb0I7QUFDdENiLE9BQUtDLEVBQUwsRUFBU0QsSUFBVDtBQUNBLEVBRk0sQ0FBUDtBQUdBLEMiLCJmaWxlIjoiMC40NDc5MjgyNzUxNmQ4OTQ2MDJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJztcblxuaW1wb3J0ICcuLi90ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEtvYSgpXG5cdC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyLCBjdHgpIHtcblx0XHRjb25zb2xlLmVycm9yKGVyciwgY3R4KTtcblx0fSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zcmMvY2xhc3Nlcy9zdG9yYWdlJztcblxuLy8gY29uc29sZS5sb2cobmV3IFN0b3JhZ2UoKSk7XG5cbmZ1bmN0aW9uIHdhaXQgKG1zLCBjYWxsYmFjaykge1xuXHRsZXQgbm93ID0gbmV3IERhdGUoKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRsZXQgcGFzcyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IGRlbHRhID0gcGFzcyAtIG5vdztcblxuXHRcdGNhbGxiYWNrKGRlbHRhKTtcblx0fSwgbXMpO1xufVxuXG53YWl0KDEwMCwgZnVuY3Rpb24gKHRpbWUpIHtcblx0Y29uc29sZS5sb2codGltZSk7XG59KTtcblxuZnVuY3Rpb24gZGVsYXkoKXtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xuXHRcdHdhaXQobXMgLHdhaXQpXG5cdH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=