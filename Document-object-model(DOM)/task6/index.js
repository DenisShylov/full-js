export const setButton = (buttonText) => {
  const elem = document.querySelector('body');
  // elem.textContent = buttonText;
  return (elem.innerHTML = buttonText);
};

setButton('<button>button text</button>');
