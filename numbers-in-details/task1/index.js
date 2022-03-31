const getFiniteNumbers = (arr) => {
  return arr.filter((el) => Number.isFinite(el));
};
const getFiniteNumbersV2 = (arr) => {
  return arr.filter((el) => isFinite(el));
};

const getNaN = (arr) => {
  return arr.filter((el) => Number.isNaN(el));
};

const getNaNV2 = (arr) => {
  return arr.filter((el) => isNaN(el));
};

const getIntegers = (arr) => {
  return arr.filter((el) => Number.isInteger(el));
};

let newArr1 = [1.2, 2.1, 3, 4, 5, NaN, null, undefined];

console.log(getFiniteNumbers(newArr1));
console.log(getFiniteNumbersV2(newArr1));
console.log(getNaN(newArr1));
console.log(getNaNV2(newArr1));
console.log(getIntegers(newArr1));
