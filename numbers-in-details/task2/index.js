const getParsedIntegers = (arr) => {
  return arr.map((el) => Number.parseInt(el));
};
const getParsedIntegersV2 = (arr) => {
  return arr.map((el) => parseInt(el));
};
const getParsedFloats = (arr) => {
  return arr.map((el) => Number.parseFloat(el));
};
const getParsedFloatsV2 = (arr) => {
  return arr.map((el) => parseFloat(el));
};
let newArr1 = [1.2, 2.1, 3, 4, 5, NaN, null, undefined];

console.log(getParsedIntegers(newArr1));
console.log(getParsedIntegersV2(newArr1));
console.log(getParsedFloats(newArr1));
console.log(getParsedFloatsV2(newArr1));
