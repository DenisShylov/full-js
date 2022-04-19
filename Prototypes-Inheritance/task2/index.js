function getOwnProps(obj) {
  let arr = [];
  for (let prop in obj) {
    arr.push(prop);
    return arr;
  }
}

console.log(getOwnProps({ name: 'Denis', age: 26 }));
