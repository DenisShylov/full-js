const getSection = (num) => {
  const search = document.querySelector(`span[data-number="${num}"]`);
  const parent = search.closest('.box');
  return parent.dataset;
};
// console.log(getSection(5));
export { getSection };
