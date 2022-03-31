const squareArray = (numbers) => {
  if (!Array.isArray(numbers)) return null;

  const newArr = numbers.slice();

  return newArr.map((item) => item * item);
};

console.log(squareArray('2, 5, 6'));
console.log(squareArray([2, 5, 6]));
