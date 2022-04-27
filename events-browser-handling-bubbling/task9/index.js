const check = document.querySelector('.task-status');

const handleClick = (event) => {
  console.log(event.target.checked);
};
check.addEventListener('change', handleClick);
