const countOccurrences = (text, str) => {
  if (str.length === 0) {
    return null;
  }
  let count = 0;
  let pos = text.indexOf(str);

  while (true) {
    count++;
    pos = text.indexOf(str, pos + 1);
    if (pos === -1) break;
  }
  return count;
};

console.log(countOccurrences('Поиск ои', 'ои'));
