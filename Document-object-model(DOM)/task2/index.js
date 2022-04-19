export const getTitleElement = () => {
  console.dir(document.querySelector('.title'));
  return document.querySelector('.title');
};

export const getInputElement = () => {
  const inputElem = document.querySelector('input');
  console.dir(inputElem);
  return inputElem;
};
// console.log(getInputElement());
// console.log(getTitleElement());
