export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const absoluteNumbers = arr.map((el) => {
    return Math.abs(el * el);
  });
  const result = Math.min.apply(Array, absoluteNumbers);

  return result;
};

// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
