import { reverseArray } from './index.js';

it('should return null if not an array passed ', () => {
  const result = reverseArray('1 + 2');
  expect(result).toEqual(null);
});

it('should return an empty array ', () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});

it('should return the resulting array', () => {
  const result = reverseArray([2, 5, 6]);
  expect(result).toEqual([6, 5, 2]);
});
