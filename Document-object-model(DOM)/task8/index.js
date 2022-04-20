const finishList = () => {
  const itemElem = document.querySelector('.list');
  const elem1 = document.createElement('li');
  const elem8 = document.createElement('li');
  const elem4 = document.createElement('li');

  elem4 = before();
  elem8.textContent = 8;
  elem1.textContent = 1;
  itemElem.prepend(elem1);
  itemElem.append(elem8);
};
console.log(finishList());
// export { finishList };
