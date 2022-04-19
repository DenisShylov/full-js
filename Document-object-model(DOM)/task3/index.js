export const getItemList = () => {
  const technologyes = document.querySelectorAll('.technology');
  console.dir(technologyes);
  return technologyes;
};

export const getItemsArray = () => {
  const tool = Array.from(document.querySelectorAll('.tool'));
  console.dir(tool);
  return tool;
};
// console.log(getItemList());
// console.log(getItemsArray());
