// через метод sort

// const sortAsc = (array) => {
//   if (!Array.isArray(array)) return null;

//   array.sort((a, b) => a - b);
//   return array;
// };

// const sortDesc = (array) => {
//   if (!Array.isArray(array)) return null;

//   array.sort((a, b) => b - a);
//   return array;
// };

// через цикл
const sortAsc = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tar = array[i];
        array[i] = array[j];
        array[j] = tar;
      }
    }
  }
  return array;
};

const sortDesc = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let tar = array[i];
        array[i] = array[j];
        array[j] = tar;
      }
    }
  }
  return array;
};

console.log(sortAsc(''));
console.log(sortAsc([3, 1, 2, 8, 5, 6, 7]));
console.log(sortDesc(''));
console.log(sortDesc([3, 1, 2, 8, 5, 6, 7]));
