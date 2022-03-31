function getPrimes(num) {
  let k = 0;
  for (let i = 0; i < num; i++) {
    k = 0;
    for (let j = 1; j <= num; j++) {
      if ((num - i) % j === 0) {
        k += 1;
      }
    }
    if (k - 2 === 0 && num - i !== 1) {
      console.log(num - i);
    }
  }
}
