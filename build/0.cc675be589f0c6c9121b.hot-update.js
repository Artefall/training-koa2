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
		wait(time, resolve);
	});
}

delay();

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi90ZXN0LmpzIl0sIm5hbWVzIjpbIndhaXQiLCJtcyIsImNhbGxiYWNrIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJwYXNzIiwiZGVsdGEiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsRUFBZixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDNUIsS0FBSUMsTUFBTSxJQUFJQyxJQUFKLEVBQVY7O0FBRUFDLFlBQVcsTUFBTTtBQUNoQixNQUFJQyxPQUFPLElBQUlGLElBQUosRUFBWDtBQUNBLE1BQUlHLFFBQVFELE9BQU9ILEdBQW5COztBQUVBRCxXQUFTSyxLQUFUO0FBQ0EsRUFMRCxFQUtHTixFQUxIO0FBTUE7O0FBRURELEtBQUssR0FBTCxFQUFVLFVBQVVRLElBQVYsRUFBZ0I7QUFDekJDLFNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLENBRkQ7O0FBSUEsU0FBU0csS0FBVCxDQUFnQkgsSUFBaEIsRUFBc0I7QUFDckIsUUFBTyxJQUFJSSxPQUFKLENBQVlDLFdBQVc7QUFDN0JiLE9BQUtRLElBQUwsRUFBV0ssT0FBWDtBQUNBLEVBRk0sQ0FBUDtBQUdBOztBQUVERixRIiwiZmlsZSI6IjAuY2M2NzViZTU4OWYwYzZjOTEyMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3JjL2NsYXNzZXMvc3RvcmFnZSc7XG5cbi8vIGNvbnNvbGUubG9nKG5ldyBTdG9yYWdlKCkpO1xuXG5mdW5jdGlvbiB3YWl0IChtcywgY2FsbGJhY2spIHtcblx0bGV0IG5vdyA9IG5ldyBEYXRlKCk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bGV0IHBhc3MgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCBkZWx0YSA9IHBhc3MgLSBub3c7XG5cblx0XHRjYWxsYmFjayhkZWx0YSk7XG5cdH0sIG1zKTtcbn1cblxud2FpdCgxMDAsIGZ1bmN0aW9uICh0aW1lKSB7XG5cdGNvbnNvbGUubG9nKHRpbWUpO1xufSk7XG5cbmZ1bmN0aW9uIGRlbGF5ICh0aW1lKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR3YWl0KHRpbWUsIHJlc29sdmUpO1xuXHR9KTtcbn1cblxuZGVsYXkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==