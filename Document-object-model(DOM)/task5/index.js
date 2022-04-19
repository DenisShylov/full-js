export const setTitle = (text) => {
  const search = document.querySelector('.title');
  return (search.textContent = text);
};
// console.log(setTitle(`Nastya`));
