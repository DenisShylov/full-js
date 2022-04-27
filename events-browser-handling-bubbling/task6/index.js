//                      Вариант 1

// const btn = document.querySelector('.single-use-btn');

// const text = () => {
//   console.log('clicked');
//   btn.removeEventListener('click', text);
// };

// btn.addEventListener('click', text);

//                      Вариант 2

const btn = document.querySelector('.single-use-btn');

const text = () => {
  console.log('clicked');
};

btn.addEventListener('click', text, { once: true });
