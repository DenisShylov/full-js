const getSpecialNumbers = (numbers) => {
  return numbers.filter((num) => num % 3 === 0);
};
const num = [1, 2, 3, 4, 5, 6, 15];
console.log(getSpecialNumbers(num));
console.log(num);
