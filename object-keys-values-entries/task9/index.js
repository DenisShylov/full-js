const buildObject = (keysList, valuesList) => {
  return keysList.reduce((acc, n, i) => ({ ...acc, [n]: valuesList[i] }), {});
};

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
