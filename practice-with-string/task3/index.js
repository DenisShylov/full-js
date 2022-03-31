const cleanTransactionsList = (transactions) =>
  transactions
    .filter((el) => isFinite(el))
    .map((el) => `$${Number.parseFloat(el).toFixed(2)}`);

console.log(cleanTransactionsList([' 1.9', '16.4', 17, ' 1 dollar ']));
