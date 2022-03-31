const sum = (arr) => {
  if (!Array.isArray(arr)) return null;
  const sum = arr.reduce((acc, elem) => acc + elem);
  return sum;
};

console.log(sum([1, 2, 3, 4, 5]));
