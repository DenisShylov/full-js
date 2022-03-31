const includes = (arr, num) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};
console.log(includes([1, 4, 8, 3], 5)); // ==> false
console.log(includes([1, 4, 8, 3], 3)); // ==> true
