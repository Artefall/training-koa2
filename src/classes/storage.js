import fs from 'fs';

import example from './example';


export default class Storage {
	constructor(fileName) {

		this.whenReady = Promise.resolve();
		this.fileName = fileName;
		this.fullFileName = `${fileName}.json`;
		fs.writeFile(this.fullFileName, JSON.stringify(example));
		this.value = JSON.stringify(example);
	}
	get(key) {
		this.fullFileName = this.fullFileName;
		return new Promise((resolve, reject) => {
			resolve(key);
		})
			.then(key => {
				let jsonObject = fs.readFile(this.fullFileName, (err, data) => {
					if (err) {
						reject();
					}
					else {
						resolve({ key, data });
					}
				});

				return;
			})
			.then(({ key, data }) => {
				let jsObject = JSON.parse(jsonObject);
				let value = jsObject.key;

				resolve(value);
			})
			.catch(() => {
				reject();
			});
	}

	set(key, newValue) {
		this.fullFileName = this.fullFileName;
		return new Promise((resolve, reject) => {
			resolve(key, newValue);
		})
			.then((key, newValue) => {
				let jsonObject = fs.readFile(this.fullFileName, (err, data) => {
					if (err) {
						reject();
					}
					else {
						resolve(key, newValue, data);
					}
				})
					.then((key, newValue) => {
						let jsObject = JSON.parse(jsonObject);

						jsObject.key = newValue;
						let newJsonObject = JSON.stringify(jsObject);

						fs.writeFile(this.fullFileName, newJsonObject, () => {
							resolve();
						});
					})
					.catch(() => {
						reject();
					});
			});
	}

	remove(key) {
		return new Promise((resolve, reject) => {
			resolve(key);
		})
			.then(key => {
				delete this[key];
			});
	}
}