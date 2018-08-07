let fs = require('fs');
let example = require('./example.js');

class Storage {
	constructor(fileName) {

		this.whenReady = Promise.resolve();
		this.fileName = fileName;
		this.fullFileName = fileName + ".json";
		fs.writeFile(fullFileName, JSON.stringify(example));
		this.value = JSON.stringify(example);
	}
	// get() {
	// 	return this.whenReady = this.whenReady.then(() => {
	// 		return delay(1000);
	// 	}).then(() => {
	// 		return 64;
	// 	});
	// 	return this.whenReady;
	// }

	// set() {
	// 	this.whenReady = this.whenReady.then(() => {
	// 		return delay(500);
	// 	}).then(() => {
	// 		return 28;
	// 	});
	// 	return this.whenReady;
	// }
}

let store = new Storage("boby");

// store.set().then((number) => {
// 	console.log(number);
// });
// store.get().then((number) => {
// 	console.log(number);
// });

