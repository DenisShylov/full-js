const setButton = (buttonText) => {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
  // document.querySelector('body').textContent = buttonText;
};

// setButton();
export { setButton };
