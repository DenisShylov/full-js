const finishList = () => {
  const itemElem = document.querySelector('.list');
  const special = document.querySelector('.special');

  const elem1 = document.createElement('li');
  const elem4 = document.createElement('li');
  const elem6 = document.createElement('li');
  const elem8 = document.createElement('li');

  elem1.textContent = 1;
  elem4.textContent = 4;
  elem6.textContent = 6;
  elem8.textContent = 8;

  itemElem.append(elem8);
  itemElem.prepend(elem1);
  special.before(elem4);
  special.after(elem6);
};
finishList();
export { finishList };
