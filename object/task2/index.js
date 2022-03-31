const concatProps = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
