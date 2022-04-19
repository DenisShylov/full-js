function sumOfSquares() {
  return [].reduce.apply(arguments, [
    (acc, el) => {
      return Math.pow(el, 2) + acc;
    },
  ]);
}
console.log(sumOfSquares(1, 2, 3, 4, 5));
