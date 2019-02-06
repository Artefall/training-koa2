import fsp from '../service/fsp';

export default class Storage {
	constructor (name) {

		this.name = name;

		this.fileName = `${name}.json`;

		let value;

		fsp.readFilePromise('example.json')
			.then(data => {
				// console.log(`steel dan${data}`);
				return JSON.parse(data);
			})
			.then(data => {
				value = data;
				return data;
			})
			.catch(() => {
				throw new Error();
			});

		console.log(`Value:${value}`);

		this.value = value;
		console.log(`this.value:${this.value}`);

		fsp.writeFilePromise(this.fileName, this.value)
			.catch(() => {
				throw new Error();
			});
	}

	get () {
		return fsp.readFilePromise(this.fileName)
			.then(data => {

				return data;
			})
			.catch(err => new Error(err));
	}

	set (id, data) {
		return fsp.readFilePromise(this.fileName)
			.then(read => {
				let jsArr = JSON.parse(read);

				Object.assign(jsArr[id], data);

				return jsArr;
			})
			.then(jsArr => {
				this.value = JSON.stringify(jsArr);
				return;
			})
			.catch(err => new Error(err));
	}

	remove (id) {
		return fsp.readFilePromise(this.fileName)
			.then(read => {
				let jsArr = JSON.parse(read);

				delete jsArr[id];

				return jsArr;
			})
			.then(jsArr => {
				return this.value = JSON.stringify(jsArr);
			})
			.catch(() => {
				throw new Error('Error');
			});
	}
}