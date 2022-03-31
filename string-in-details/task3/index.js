const splitString = (str, num = 10) => {
  let arr = [];
  let startPosition = 0;

  if (typeof str != 'string') {
    return null;
  }

  while (true) {
    let chunk = str.substr(startPosition, num);

    if (chunk.length === 0) {
      break;
    }

    if (num === undefined) {
      startPosition += 10;
      arr.push((chunk[0] + chunk.slice(1)).padEnd(startPosition, '.'));
    } else {
      startPosition += num;
      arr.push((chunk[0] + chunk.slice(1)).padEnd(num, '.'));
    }
  }
  return arr;
};

console.log(splitString('abcd123456 ', 4));
