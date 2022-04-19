function createArrayOfFunctions(num) {
  if (arguments.length === 0) {
    return [];
  }
  if (typeof num !== 'number') {
    return null;
  }

  let arr = [];

  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

console.log(createArrayOfFunctions());
