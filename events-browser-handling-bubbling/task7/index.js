const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn:nth-child(2)');

const handleClick = (event) => {
  console.log(event.target.textContent);
};
btn.addEventListener('click', handleClick);
btn1.addEventListener('click', handleClick);
