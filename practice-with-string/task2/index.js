const reverseString = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  const split = str.split('');
  return split.reverse().reduce((acc, el) => {
    return acc + el;
  });
};

console.log(reverseString('hello'));
