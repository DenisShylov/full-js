const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;
  const result = arr.map((item) => {
    if (item % 2 === 0) {
      return item + delta;
    } else return item;
  });
  return result;
};

// console.log(increaseEvenEl('2, 5, 6'));
console.log(increaseEvenEl([2, 5, 6, 8, 11, 12], 20));
