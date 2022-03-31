'Use Strict';
const getRandomNumbers = (length, from, to) => {
  const min = Math.ceil(from);
  const max = Math.ceil(to);
  if (to - from < 1) {
    return null;
  }

  // if(min === max) {
  // return null;
  // }

  return new Array(length)
    .fill()
    .map(() => Math.trunc(Math.random() * (max - min) + min));
};

// examples
console.log(getRandomNumbers(5, 1.4, 1.5));
console.log(getRandomNumbers(50, 90, 95));
console.log(getRandomNumbers(20, -40.5, -30.8));
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
