// import {
// 	parseJson, throwErrorBecauseOf, throwErrorBecauseOfP, jsonStringify, push, concreteParamFromJsonFormatOfStudent
// } from '../service/utils';


// export default {
// 	get (id, key) {
// 		return storage.get()
// 		.then(jsonFormatStudent => concreteParamFromJsonFormatOfStudent(jsonFormatStudent, id, key))
// 		.catch(throwErrorBecauseOfP());
// 	},
// 	set (id, student) {
// 		return storage.set(id, student)
// 		.then(() => writeFilePromise(storage.fileName, storage.value))
// 		.catch(throwErrorBecauseOf);
// 	},

// 	getAll (key) {
// 		return storage.get()
// 		.then(jsonFormatStudent => {
// 			let collection = parseJson(jsonFormatStudent);

// 			let keyArray = [];

// 			for (let propMas in collection) {
// 				let keyValue = propMas[key];

// 				push(keyArray, keyValue);
// 			}
// 			return keyArray;
// 		})
// 		.catch(throwErrorBecauseOfP());
// 	},
// 	remove (id) {
// 		return storage.remove(id)
// 		.then(data => writeFilePromise(storage.fileName, data))
// 		.catch(throwErrorBecauseOfP());
// 	},
// 	add ({ students }) {
// 		return students.get()
// 			.then(data => {
// 				let collection = parseJson(data);

// 				if (students === Object) push(collection, students);
// 				else throwErrorBecauseOf('Wryyy');

// 				let newJsonObject = jsonStringify(collection);

// 				return writeFilePromise(storage.fileName, newJsonObject);
// 			})
// 			.catch(throwErrorBecauseOfP('Error'));
// 	}
// };