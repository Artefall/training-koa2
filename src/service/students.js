import fsp from '../service/fsp';

let Storage = require('../classes/storage');

let storage = new Storage('data');

export default {
	get (id, key) {
		return storage.get()
		.then(read => {
			let collection = JSON.parse(read);
			let value;

			if (key) {
				value = collection[id][key];
			}
			else {
				value = collection[id];
			}
			return value;
		});
	},
	set (id, student) {
		return storage.set(id, student)
		.then(() => {
			return fsp.writeFilePromise(storage.fileName, storage.value);

		})
		.catch(err => {
			throw new Error(err);
		});
	},

	getAll (key) {
		return storage.get()
		.then(data => {
			let collection = JSON.parse(data);

			let keyArray = [];

			for (let propMas of collection) {
				let keyValue = propMas[key];

				keyArray.push(keyValue);
			}
			return keyArray;
		})
		.catch(err => {
			throw new Error(err);
		});
	},
	remove (id) {
		return storage.remove(id)
		.then(data => {
			fsp.writeFilePromise(storage.fileName, data);
			return;
		});

	},
	add ({ students }) {
		return students.get()
			.then(data => {
				let collection = JSON.parse(data);

				if (students === Object) {
					collection.push(students);
				}
				else {
					throw new Error('Wryyy');
				}

				let newJsonObject = JSON.stringify(collection);

				return fsp.writeFilePromise(storage.fileName, newJsonObject);
			})
			.catch(() => {
				throw new Error('Error');
			});
	}
};