// через цикл
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i] ** 2);
    }
    return newArr;
  }
}
//через метод Мар
function squareArray(arr) {
  // put your code here
  let newArr = arr.slice();
  if (!Array.isArray(arr)) {
    console.log(null);
  } else {
    console.log(newArr.map((item) => item * item));
  }
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
squareArray('1');
