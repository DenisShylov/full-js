const superRound = (num, prec) => {
  const precision = Math.pow(10, prec);
  return [
    Math.floor(num * precision) / precision,
    Math.trunc(num * precision) / precision,
    Math.ceil(num * precision) / precision,
    Math.round(num * precision) / precision,
    +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(-11.12556, 2));
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
