const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    min;
  }
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    max;
  }
  return min + max > 1000;
};
console.log(checker([1000, 20, 30, 40]));

// console.log(getMax([10, 20, 30, 40]));
// console.log(getMin([10, 20, 30, 40]));
