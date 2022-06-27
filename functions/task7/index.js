function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}

const sum = (from, to) => {
  let counter = 0;
  for (let i = from; i <= to; i++) {
    counter += i;
  }
  return counter;
};

console.log(sum(5, 10));
console.log(compareSums(-2, 5, 5, 9));
