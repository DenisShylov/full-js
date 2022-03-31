const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  const [start, second, ...rest] = newArr;
  return [...rest, second, start];
};
console.log(reverseArray([10, 20, 30, 40, 50, 60]));
console.log(reverseArray(''));
