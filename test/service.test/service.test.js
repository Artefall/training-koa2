import students from '../../src/service/students';
import Storage from '../../src/classes/storage';

describe('Students service', () => {

	beforeEach(() => {
		let spy = jest.spyOn(Storage, 'get');

		spy.mockResolvedValue('[{name:Empty}]');
	});

	it('can find searched student', async () => {
		expect(await students.get(0, 'name')).toBe('Empty');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});