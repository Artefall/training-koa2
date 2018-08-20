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

function delay(time) {
	return new Promise((resolve, reject) => {
		wait(100, () => {});
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi90ZXN0LmpzIl0sIm5hbWVzIjpbIndhaXQiLCJtcyIsImNhbGxiYWNrIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJwYXNzIiwiZGVsdGEiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsRUFBZixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDNUIsS0FBSUMsTUFBTSxJQUFJQyxJQUFKLEVBQVY7O0FBRUFDLFlBQVcsTUFBTTtBQUNoQixNQUFJQyxPQUFPLElBQUlGLElBQUosRUFBWDtBQUNBLE1BQUlHLFFBQVFELE9BQU9ILEdBQW5COztBQUVBRCxXQUFTSyxLQUFUO0FBQ0EsRUFMRCxFQUtHTixFQUxIO0FBTUE7O0FBRURELEtBQUssR0FBTCxFQUFVLFVBQVVRLElBQVYsRUFBZ0I7QUFDekJDLFNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLENBRkQ7O0FBSUEsU0FBU0csS0FBVCxDQUFnQkgsSUFBaEIsRUFBc0I7QUFDckIsUUFBTyxJQUFJSSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3ZDZCxPQUFLLEdBQUwsRUFBVSxNQUFNLENBRWYsQ0FGRDtBQUdBLEVBSk0sQ0FBUDtBQUtBLEMiLCJmaWxlIjoiMC4zYjE5YWE0MjliZDA5NjIwOGRmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zcmMvY2xhc3Nlcy9zdG9yYWdlJztcblxuLy8gY29uc29sZS5sb2cobmV3IFN0b3JhZ2UoKSk7XG5cbmZ1bmN0aW9uIHdhaXQgKG1zLCBjYWxsYmFjaykge1xuXHRsZXQgbm93ID0gbmV3IERhdGUoKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRsZXQgcGFzcyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IGRlbHRhID0gcGFzcyAtIG5vdztcblxuXHRcdGNhbGxiYWNrKGRlbHRhKTtcblx0fSwgbXMpO1xufVxuXG53YWl0KDEwMCwgZnVuY3Rpb24gKHRpbWUpIHtcblx0Y29uc29sZS5sb2codGltZSk7XG59KTtcblxuZnVuY3Rpb24gZGVsYXkgKHRpbWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0KDEwMCwgKCkgPT4ge1xuXG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9