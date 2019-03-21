import path from 'path';

import { composeP, curry } from 'ramda';

export let jsonStringify = JSON.stringify;

export let parseJson = JSON.parse;

export function createJsonFileFromName (name) {
	return `${name}.json`;
}

export function throwErrorBecauseOf (explanation = 'Error') {
	throw new Error(explanation);
}

export let throwErrorBecauseOfP = composeP(throwErrorBecauseOf);

export function objectAssign (firstObject, secondObject) {
	Object.assign(firstObject, secondObject);
}

export function push (array, value) {
	array.push(value);
}

export function transformObjectToArray (object) {
	return Object.values(object);
}

export function concreteParamFromJsonFormatOfStudent (jsonFormatStudent, id, key) {
	let jsFormatStudent = parseJson(jsonFormatStudent);
	let studentParam;

	if (key) studentParam = jsFormatStudent[id][key];
	else studentParam = jsFormatStudent[id];
	return studentParam;
}

export function arrayOfAllConcreteParamOfAllStudents (jsonFormatStudent, key) {
	let collection = parseJson(jsonFormatStudent);

	let keyArray = [];

	for (let propMas in collection) {
		let keyValue = propMas[key];

		push(keyArray, keyValue);
	}
	return keyArray;
}

export let split = curry((string, deleteSign) => {
	return string.split(deleteSign);
});

export let join = curry((joinSign, arrayOfStringParts) => {
	return arrayOfStringParts.join(joinSign);
});

export function stringReplace (string, changeTo, regexp) {
	let changedString = string.replace(regexp, changeTo);

	return changedString;
}

export function getStoragePathByName (name) {
	let pathInWindowsFormat = path.resolve(process.cwd(), `storages/${name}.json`);

	let normalFormat = stringReplace(pathInWindowsFormat, '/', /\\/g);

	return normalFormat;
}


export let findStudentById = curry((arrayOfStudents, id) => {
	for (let studentObject of arrayOfStudents) {
		if (studentObject.id === id) return studentObject;
	}
});

export let getParam = curry((objectOfStudent, key) => {
	return objectOfStudent[key];
});

export let findStudentObjectIndexWithId = curry((arrayOfStudents, id) => {
	let count = 0;

	for (let studentObject of arrayOfStudents) {
		if (studentObject.id === id) return count;
		count++;
	}
});

export let deleteStudentObjectFromArray = curry((arrayOfStudents, indexOfDeletedStudent) => {
	delete arrayOfStudents[indexOfDeletedStudent];
});