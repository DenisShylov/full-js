function getSpecialNumbers(from, to) {
  let specialNumbers = 0;
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      return specialNumbers.push(i);
    }
  }
}
