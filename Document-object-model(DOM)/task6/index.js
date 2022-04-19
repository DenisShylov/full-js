const setButton = (buttonText) => {
  document.querySelector('body').innerHTML = buttonText;
  // document.querySelector('body').textContent = buttonText;
};

// setButton('<button>button text</button>');
export { setButton };
