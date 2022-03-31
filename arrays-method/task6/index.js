export const reverseArray = (num) => {
  if (!Array.isArray(num)) return null;

  const newArr = num.slice();

  return newArr.reverse();
};

console.log(reverseArray('2, 5, 6'));
console.log(reverseArray([2, 5, 6]));
