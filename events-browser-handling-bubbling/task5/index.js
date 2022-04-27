const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

const changeInp = () => console.log(input.value);

btn.addEventListener('click', changeInp);
