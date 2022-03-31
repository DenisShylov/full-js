import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should return the result of an empty array input', () => {
  const emptyArr = getMinSquaredNumber([]);
  expect(emptyArr).toEqual(null);
});

it('should return the result of input string', () => {
  const str = getMinSquaredNumber('');
  expect(str).toEqual(null);
});

it('should get minimal squared number from array', () => {
  const arr = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(arr).toEqual(4);
});
