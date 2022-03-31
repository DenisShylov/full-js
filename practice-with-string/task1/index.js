const calc = (expression) => {
  let [a, operator, b] = expression.split(' ');
  let result;
  switch (operator) {
    case '+': {
      result = +a + +b;
      break;
    }
    case '-': {
      result = +a - +b;
      break;
    }
    case '*': {
      result = Number(a) * +b;
      break;
    }
    case '/': {
      result = Number(a) / +b;
    }
  }
  return `${expression} = ${result}`;
};

console.log(calc('2 - 2'));
