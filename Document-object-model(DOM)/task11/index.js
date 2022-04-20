const squaredNumbers = () => {
  const search = document.querySelector('.number:nth-child(1)');
  const search2 = document.querySelector('.number:nth-child(2)');
  const search3 = document.querySelector('.number:nth-child(3)');
  const square = Math.pow(search.dataset.number, 2);
  const square2 = Math.pow(search2.dataset.number, 2);
  const square3 = Math.pow(search3.dataset.number, 2);

  search.dataset.squaredNumber = square;
  search2.dataset.squaredNumber = square2;
  search3.dataset.squaredNumber = square3;
};
// squaredNumbers();
export { squaredNumbers };
