const btn1 = document.querySelector('.pagination__page:nth-child(1)');
const btn2 = document.querySelector('.pagination__page:nth-child(2)');
const btn3 = document.querySelector('.pagination__page:nth-child(3)');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);
