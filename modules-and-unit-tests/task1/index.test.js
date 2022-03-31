it('17 равно 17', () => {
  expect(17).toEqual(17);
});
it('18 не равно 17', () => {
  expect(18).toEqual(17);
});

const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

it('should even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
