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

function delay(time) {
	return new Promise(resolve => {
		wait(time, resolve);
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi9zcmNcXGluZGV4LmpzIiwiRDovQXRvbVNwYWNlSmF2YVNjcmlwdC90cmFpbmluZy1rb2EyL3Rlc3QuanMiXSwibmFtZXMiOlsib24iLCJlcnIiLCJjdHgiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YWl0IiwibXMiLCJjYWxsYmFjayIsIm5vdyIsIkRhdGUiLCJzZXRUaW1lb3V0IiwicGFzcyIsImRlbHRhIiwidGltZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQSwrREFBZSxJQUFJLDJDQUFKLEdBQ2JBLEVBRGEsQ0FDVixPQURVLEVBQ0QsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2hDQyxTQUFRQyxLQUFSLENBQWNILEdBQWQsRUFBbUJDLEdBQW5CO0FBQ0EsQ0FIYSxDQUFmLEU7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQSxTQUFTRyxJQUFULENBQWVDLEVBQWYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzVCLEtBQUlDLE1BQU0sSUFBSUMsSUFBSixFQUFWOztBQUVBQyxZQUFXLE1BQU07QUFDaEIsTUFBSUMsT0FBTyxJQUFJRixJQUFKLEVBQVg7QUFDQSxNQUFJRyxRQUFRRCxPQUFPSCxHQUFuQjs7QUFFQUQsV0FBU0ssS0FBVDtBQUNBLEVBTEQsRUFLR04sRUFMSDtBQU1BOztBQUVERCxLQUFLLEdBQUwsRUFBVSxVQUFVUSxJQUFWLEVBQWdCO0FBQ3pCVixTQUFRVyxHQUFSLENBQVlELElBQVo7QUFDQSxDQUZEOztBQUlBLFNBQVNFLEtBQVQsQ0FBZ0JGLElBQWhCLEVBQXNCO0FBQ3JCLFFBQU8sSUFBSUcsT0FBSixDQUFZQyxXQUFXO0FBQzdCWixPQUFLUSxJQUFMLEVBQVdJLE9BQVg7QUFDQSxFQUZNLENBQVA7QUFHQSxDIiwiZmlsZSI6IjAuN2FiNjBjYThhYWZhZWVkMjI3OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcblxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cbmltcG9ydCAnLi4vdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBLb2EoKVxuXHQub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVyciwgY3R4KSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnIsIGN0eCk7XG5cdH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIGltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3JjL2NsYXNzZXMvc3RvcmFnZSc7XG5cbi8vIGNvbnNvbGUubG9nKG5ldyBTdG9yYWdlKCkpO1xuXG5mdW5jdGlvbiB3YWl0IChtcywgY2FsbGJhY2spIHtcblx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bGV0IHBhc3MgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCBkZWx0YSA9IHBhc3MgLSBub3c7XG5cblx0XHRjYWxsYmFjayhkZWx0YSk7XG5cdH0sIG1zKTtcbn1cblxud2FpdCgxMDAsIGZ1bmN0aW9uICh0aW1lKSB7XG5cdGNvbnNvbGUubG9nKHRpbWUpO1xufSk7XG5cbmZ1bmN0aW9uIGRlbGF5ICh0aW1lKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR3YWl0KHRpbWUsIHJlc29sdmUpO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==