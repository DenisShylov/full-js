const createCalculator = () => {
  let memory = 0;
  function add(num) {
    memory += num;
  }
  function decrease(num) {
    memory -= num;
  }
  function reset() {
    memory = 0;
  }
  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc = createCalculator();
console.log(calc.add(3));
