import { writeFile, readJsonFile } from '../service/fsp';
import {
	createJsonFileFromName, jsonStringify, parseJson
} from '../service/utils';

export default class Storage {
	constructor (name) {

		this.name = name;

		this.fileName = createJsonFileFromName(name);

		readJsonFile('./storages/example.json')
			.then(data => {writeFile(`./storages/${this.fileName}`, jsonStringify(data)); return;})
			.catch(() => Error);
	}
}