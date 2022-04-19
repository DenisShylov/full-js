export const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  elem.textContent = buttonText;
  elem.innerHTML = buttonText;
};

// console.log(setButton('<button>button text</button>'));
