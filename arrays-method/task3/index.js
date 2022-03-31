const flatArray = (arr) =>
  arr.reduce((acc, num) => acc.concat(num).sort((a, b) => a - b), []);

const arr = [4, 2, 3, 6, [1, 8, 7]];
console.log(flatArray(arr));
