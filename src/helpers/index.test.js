import { add, sayHi } from './index';

describe('add function', () => {
	it('should add two numbers', () => {
		expect(add(1, 2)).toBe(3);
	});
});

describe('say hi', () => {
	it('should get name and say hi to him', () => {
		expect(sayHi('Khaled')).toBe('Hi Khaled');
	});
});
