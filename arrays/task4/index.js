function swap(numbers) {
  // put your code here
  const [start, ...rest] = numbers;
  console.log([...rest, start]);
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
// через цикл
function swapManual(numbers) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i]);
  }
  newArr.shift();
  newArr.push(numbers[0]);
  return newArr;
}
// через методы массивов
function swapManual(numbers) {
  // put your code here
  let newArr = numbers.slice();
  newArr.shift();
  newArr.push(numbers[0]);

  console.log(newArr);
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
