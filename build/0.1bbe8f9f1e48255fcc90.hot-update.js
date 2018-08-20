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
	return new Promise((resolve, reject) => {
		wait(ms, wait());
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi90ZXN0LmpzIl0sIm5hbWVzIjpbIndhaXQiLCJtcyIsImNhbGxiYWNrIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJwYXNzIiwiZGVsdGEiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsRUFBZixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDNUIsS0FBSUMsTUFBTSxJQUFJQyxJQUFKLEVBQVY7O0FBRUFDLFlBQVcsTUFBTTtBQUNoQixNQUFJQyxPQUFPLElBQUlGLElBQUosRUFBWDtBQUNBLE1BQUlHLFFBQVFELE9BQU9ILEdBQW5COztBQUVBRCxXQUFTSyxLQUFUO0FBQ0EsRUFMRCxFQUtHTixFQUxIO0FBTUE7O0FBRURELEtBQUssR0FBTCxFQUFVLFVBQVVRLElBQVYsRUFBZ0I7QUFDekJDLFNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLENBRkQ7O0FBSUEsU0FBU0csS0FBVCxHQUFrQjtBQUNqQixRQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdkNkLE9BQUtDLEVBQUwsRUFBVUQsTUFBVjtBQUNBLEVBRk0sQ0FBUDtBQUdBLEMiLCJmaWxlIjoiMC4xYmJlOGY5ZjFlNDgyNTVmY2M5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zcmMvY2xhc3Nlcy9zdG9yYWdlJztcblxuLy8gY29uc29sZS5sb2cobmV3IFN0b3JhZ2UoKSk7XG5cbmZ1bmN0aW9uIHdhaXQgKG1zLCBjYWxsYmFjaykge1xuXHRsZXQgbm93ID0gbmV3IERhdGUoKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRsZXQgcGFzcyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IGRlbHRhID0gcGFzcyAtIG5vdztcblxuXHRcdGNhbGxiYWNrKGRlbHRhKTtcblx0fSwgbXMpO1xufVxuXG53YWl0KDEwMCwgZnVuY3Rpb24gKHRpbWUpIHtcblx0Y29uc29sZS5sb2codGltZSk7XG59KTtcblxuZnVuY3Rpb24gZGVsYXkgKCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXQobXMgLCB3YWl0KCkpO1xuXHR9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==