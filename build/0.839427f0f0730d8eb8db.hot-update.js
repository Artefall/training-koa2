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
	return new Promise(resolve => {
		wait(time, resolve());
	});
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi90ZXN0LmpzIl0sIm5hbWVzIjpbIndhaXQiLCJtcyIsImNhbGxiYWNrIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJwYXNzIiwiZGVsdGEiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsRUFBZixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDNUIsS0FBSUMsTUFBTSxJQUFJQyxJQUFKLEVBQVY7O0FBRUFDLFlBQVcsTUFBTTtBQUNoQixNQUFJQyxPQUFPLElBQUlGLElBQUosRUFBWDtBQUNBLE1BQUlHLFFBQVFELE9BQU9ILEdBQW5COztBQUVBRCxXQUFTSyxLQUFUO0FBQ0EsRUFMRCxFQUtHTixFQUxIO0FBTUE7O0FBRURELEtBQUssR0FBTCxFQUFVLFVBQVVRLElBQVYsRUFBZ0I7QUFDekJDLFNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLENBRkQ7O0FBSUEsU0FBU0csS0FBVCxDQUFnQkgsSUFBaEIsRUFBc0I7QUFDckIsUUFBTyxJQUFJSSxPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUMvQmIsT0FBS1EsSUFBTCxFQUFXSyxTQUFYO0FBQ0EsRUFGTSxDQUFQO0FBR0EsQyIsImZpbGUiOiIwLjgzOTQyN2YwZjA3MzBkOGViOGRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3NyYy9jbGFzc2VzL3N0b3JhZ2UnO1xuXG4vLyBjb25zb2xlLmxvZyhuZXcgU3RvcmFnZSgpKTtcblxuZnVuY3Rpb24gd2FpdCAobXMsIGNhbGxiYWNrKSB7XG5cdGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCBwYXNzID0gbmV3IERhdGUoKTtcblx0XHRsZXQgZGVsdGEgPSBwYXNzIC0gbm93O1xuXG5cdFx0Y2FsbGJhY2soZGVsdGEpO1xuXHR9LCBtcyk7XG59XG5cbndhaXQoMTAwLCBmdW5jdGlvbiAodGltZSkge1xuXHRjb25zb2xlLmxvZyh0aW1lKTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxheSAodGltZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHR3YWl0KHRpbWUsIHJlc29sdmUoKSk7XG5cdH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9