import path from 'path';

import fsp from '../service/fsp';

export default class Storage {
	constructor (name) {

		this.name = name;
		this.fileName = path.join(process.cwd(), `${name}.json`);
		this.whenReady = fsp.readFilePromise(this.fileName)
			.then(data => {
				return JSON.parse(data);
			})
			.then(data => {
				return data;
			})
			.catch(() => {
				throw new Error();
			});
		this.value = JSON.parse(`${name}.json`);
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