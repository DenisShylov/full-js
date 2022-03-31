const uniqueCount = (arr) => {
  if (!Array.isArray(arr)) return null;
  let result = [];

  let str = [];
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result.length;
};
console.log(uniqueCount([1, 2, 3, 1, 2, 3]));
