// const removeDublicates = (array) => {
//   if (!Array.isArray(array)) return null;

//   if (Array.isArray(array)) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length; j++) {
//         if (newArr[i] === newArr[j]) {
//           break;
//         }
//       }

//       newArr.push(array[i]);
//     }
//     return newArr;
//   }
// };

const removeDublicates = (array) => {
  const newArr = [...new Set(array)];
  return newArr;
};
console.log(removeDublicates([1, 2, 3, 4, 4, 3, 2, 1]));
