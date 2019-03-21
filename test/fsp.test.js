import { readJsonFile } from '../src/service/fsp';

describe('Function', () => {

	describe('readJsonFile', () => {

		it('return file data', () => {
			return readJsonFile('D:/JSLessons/training-koa2/storages/test.json').then(data => {
				expect(data.result).toBe('Hello'); return;
			});
		});

	});

});