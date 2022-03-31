const filterNames = (arr, text) => {
  const newArr = arr.filter((word) => word.length > 5 && word.includes(text));

  return newArr;
};

console.log(filterNames(['Alex', 'Olivya', 'Vanya', 'Nastya'], 'ya'));
