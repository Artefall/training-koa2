exports.id = 0;
exports.modules = {

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
		wait(ms, fucn);
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi90ZXN0LmpzIl0sIm5hbWVzIjpbIndhaXQiLCJtcyIsImNhbGxiYWNrIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJwYXNzIiwiZGVsdGEiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWNuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7QUFFQSxTQUFTQSxJQUFULENBQWVDLEVBQWYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzVCLEtBQUlDLE1BQU0sSUFBSUMsSUFBSixFQUFWOztBQUVBQyxZQUFXLE1BQU07QUFDaEIsTUFBSUMsT0FBTyxJQUFJRixJQUFKLEVBQVg7QUFDQSxNQUFJRyxRQUFRRCxPQUFPSCxHQUFuQjs7QUFFQUQsV0FBU0ssS0FBVDtBQUNBLEVBTEQsRUFLR04sRUFMSDtBQU1BOztBQUVERCxLQUFLLEdBQUwsRUFBVSxVQUFVUSxJQUFWLEVBQWdCO0FBQ3pCQyxTQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxDQUZEOztBQUlBLFNBQVNHLEtBQVQsR0FBZ0I7QUFDZixRQUFPQyxRQUFRLENBQUNDLE9BQUQsRUFBU0MsTUFBVCxLQUFvQjtBQUNsQ2QsT0FBS0MsRUFBTCxFQUFTYyxJQUFUO0FBQ0EsRUFGTSxDQUFQO0FBR0EsQyIsImZpbGUiOiIwLmIzNzMxNjNkODJhZWEzN2JiOGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3NyYy9jbGFzc2VzL3N0b3JhZ2UnO1xuXG4vLyBjb25zb2xlLmxvZyhuZXcgU3RvcmFnZSgpKTtcblxuZnVuY3Rpb24gd2FpdCAobXMsIGNhbGxiYWNrKSB7XG5cdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCBwYXNzID0gbmV3IERhdGUoKTtcblx0XHRsZXQgZGVsdGEgPSBwYXNzIC0gbm93O1xuXG5cdFx0Y2FsbGJhY2soZGVsdGEpO1xuXHR9LCBtcyk7XG59XG5cbndhaXQoMTAwLCBmdW5jdGlvbiAodGltZSkge1xuXHRjb25zb2xlLmxvZyh0aW1lKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxheSgpe1xuXHRyZXR1cm4gUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcblx0XHR3YWl0KG1zICxmdWNuKVxuXHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9