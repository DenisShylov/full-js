const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};

console.log(cloneArr([10, 20, 30, 40]));
console.log(cloneArr(''));
