const arrAverage = (arr) => {
  if (!Array.isArray(arr)) return null;

  const avSum = arr.reduce((acc, elem) => {
    return acc + elem;
  });
  return avSum / arr.length;
};

console.log(arrAverage([2, 5, 6, 3]));
