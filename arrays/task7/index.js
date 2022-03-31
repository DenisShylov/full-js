// через цикл
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let newArr = 0;
    for (let i = 0; i < arr.length; i++) {
      newArr += arr[i];
    }
    return newArr > 100;
  }
};

// через reduce
// const checkSum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else if (
//     Array.isArray(arr) &&
//     arr.reduce((acc, num) => acc + num, 0) > 100
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };
console.log(checkSum('10, 10, 10'));
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
