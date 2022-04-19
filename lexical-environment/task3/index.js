'use strict';

let memory = 0;

function add(num) {
  return (memory += num);
}

function decrease(num) {
  return (memory -= num);
}

function reset() {
  return (memory = 0);
}

function getMemo() {
  return memory;
}

console.log(add(2));
console.log(decrease(5));
console.log(reset());
console.log(getMemo());
