// const getTotalPrice = (arr) => {
//   let total = 0;
//   arr.forEach((el) => {
//     return (total = el + el + el);
//   });
//   const abs = Math.abs(total);
//   const res = abs;
//   return `$${Math.floor(res * 100) / 100}`;
// };

const getTotalPrice = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  return `$${Math.floor(sum * 100) / 100}`;
};
// examples
console.log(getTotalPrice([-10, 10, -10])); // ===>
console.log(getTotalPrice([2.1, 0, 1.612])); // ===>
