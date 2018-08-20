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
	return Promise();
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0F0b21TcGFjZUphdmFTY3JpcHQvdHJhaW5pbmcta29hMi90ZXN0LmpzIl0sIm5hbWVzIjpbIndhaXQiLCJtcyIsImNhbGxiYWNrIiwibm93IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJwYXNzIiwiZGVsdGEiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwiUHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFlQyxFQUFmLEVBQW1CQyxRQUFuQixFQUE2QjtBQUM1QixLQUFJQyxNQUFNLElBQUlDLElBQUosRUFBVjs7QUFFQUMsWUFBVyxNQUFNO0FBQ2hCLE1BQUlDLE9BQU8sSUFBSUYsSUFBSixFQUFYO0FBQ0EsTUFBSUcsUUFBUUQsT0FBT0gsR0FBbkI7O0FBRUFELFdBQVNLLEtBQVQ7QUFDQSxFQUxELEVBS0dOLEVBTEg7QUFNQTs7QUFFREQsS0FBSyxHQUFMLEVBQVUsVUFBVVEsSUFBVixFQUFnQjtBQUN6QkMsU0FBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsQ0FGRDs7QUFJQSxTQUFTRyxLQUFULEdBQWdCO0FBQ2YsUUFBT0MsU0FBUDtBQUNBLEMiLCJmaWxlIjoiMC43OTIzNWQ2ZWIwOTljNWExYjdkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zcmMvY2xhc3Nlcy9zdG9yYWdlJztcblxuLy8gY29uc29sZS5sb2cobmV3IFN0b3JhZ2UoKSk7XG5cbmZ1bmN0aW9uIHdhaXQgKG1zLCBjYWxsYmFjaykge1xuXHRsZXQgbm93ID0gbmV3IERhdGUoKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRsZXQgcGFzcyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IGRlbHRhID0gcGFzcyAtIG5vdztcblxuXHRcdGNhbGxiYWNrKGRlbHRhKTtcblx0fSwgbXMpO1xufVxuXG53YWl0KDEwMCwgZnVuY3Rpb24gKHRpbWUpIHtcblx0Y29uc29sZS5sb2codGltZSk7XG59KTtcblxuZnVuY3Rpb24gZGVsYXkoKXtcblx0cmV0dXJuIFByb21pc2UoKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9