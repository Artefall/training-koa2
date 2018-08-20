// import Storage from './src/classes/storage';

// console.log(new Storage());

function wait (ms, callback) {
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

function delay (time) {
	return new Promise(resolve => {
		wait(time, resolve);
	});
}

delay(1000);