import { calc } from './calculator';

it('should return the result of addition', () => {
  const sum = calc('1 + 2');
  expect(sum).toEqual('1 + 2 = 3');
});

it('should return the result of the subtraction', () => {
  const sum = calc('1 - 2');
  expect(sum).toEqual('1 - 2 = -1');
});

it('should return the result of the multiplication', () => {
  const sum = calc('1 * 2');
  expect(sum).toEqual('1 * 2 = 2');
});

it('should return the result of the division', () => {
  const sum = calc('1 / 2');
  expect(sum).toEqual('1 / 2 = 0.5');
});

it('should return null if not a string', () => {
  const sum = calc(1 / 2);
  expect(sum).toEqual(null);
});
