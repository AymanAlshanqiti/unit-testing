import { add } from './index';

describe('add function', () => {
	it('should add two numbers', () => {
		expect(add(1, 2)).toBe(3);
	});
});
