import {
	getStoragePathByName, stringReplace, getParam, findStudentById, findStudentObjectIndexWithId
} from '../src/service/utils';
import { getAll } from '../src/koa.fn';

const objectWithParams = {
	id: '23',
	name: 'Joseph',
	faculty: 'Programming'
};

const arrayWithStudents = [
	{
		id: '2',
		name: 'Leone',
		faculty: 'Programming'
	},
	{
		id: '5',
		name: 'Joseph',
		faculty: 'Design'
	},
	{
		id: '7',
		name: 'Bruno',
		faculty: 'Admin'
	}
];

const foundedObject = {
	id: '5',
	name: 'Joseph',
	faculty: 'Design'
};

describe('Function', () => {

	describe('getStoragePathByName', () => {
		it('returns correct storage path to file', () => {
			let mockedPath = jest.mock('D:/JSLessons/training-koa2');

			jest.spyOn(process, 'cwd').mockReturnValue(mockedPath);

			expect(getStoragePathByName('storage')).toEqual(`D:/JSLessons/training-koa2/storages/storage.json`);
		});
	});

	describe('getAll', () => {
		it('return object property named item', () => {
			let objectWithItems = {
				items: [12, 34, 65, 23]
			};

			expect(getAll(objectWithItems)).toEqual([12, 34, 65, 23]);
		});
	});

	describe('stringReplace', () => {
		it('remove back slash and change it to right slash', () => {
			expect(stringReplace('D:\\JSLessons\\training-koa2\\storages\\storage.json', '/', /\\/g)).toEqual(`D:/JSLessons/training-koa2/storages/storage.json`);
		});
	});

	describe('getParam', () => {
		it('return faculty value from student object', () => {
			expect(getParam('faculty', objectWithParams)).toEqual('Programming');
		});
	});

	describe('findStudentById', () => {
		it('return student object with correct ID', () => {
			expect(findStudentById(arrayWithStudents, '5')).toEqual(foundedObject);
		});
	});

	describe('findStudentIndexWithId', () => {
		it('find index of student with current id', () => {
			expect(findStudentObjectIndexWithId(arrayWithStudents, '5')).toEqual(1);
		});
	});
});