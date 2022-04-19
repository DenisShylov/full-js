function makeCounter() {
  let count = 0;
  return function counter() {
    return count++;
  };
}
const counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
