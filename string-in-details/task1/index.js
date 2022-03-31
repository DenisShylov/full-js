const splitText = (str, len) => {
  const arr = [];
  let startPosition = 0;
  if (typeof str !== 'string') {
    return null;
  }
  while (true) {
    let chunk = str.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }

    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    if (len === undefined) {
      startPosition += 10;
    } else {
      startPosition += len;
    }
  }

  return arr.join('\n');
};

console.log(splitText('abcdefg'));
console.log(splitText(12, 4));
