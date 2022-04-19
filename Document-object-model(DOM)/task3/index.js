const getItemsList = () => {
  const technologyes = document.querySelectorAll('.technology');
  console.dir(technologyes);
  return technologyes;
};

const getItemsArray = () => {
  const tool = Array.from(document.querySelectorAll('.tool'));
  console.dir(tool);
  return tool;
};
console.log(getItemsList());
console.log(getItemsArray());
