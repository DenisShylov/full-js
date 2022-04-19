/* ===> 1 <=== */
const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}

/*
 * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
 * используйте .bind и ф-цию sayName
 */
const sayStudentName = () => {
  const res = sayName.bind(student);
  return res();
};

/*
 * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
 * используйте ф-цию sayName и .bind с нужным объектом
 */
const sayBruceName = () => {
  const res = sayName.bind({ name: 'Bruce' });
  return res();
};

/* ===> 2 <=== */
const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}

/*
 * создайте ф-цию specialGreeting которая будет выводить в консоль
 * 'Hello, Bob Marley. Welcome to the Microsoft`
 * используйте ф-цию greeting и .bind с нужным объектом и аргументами
 * specialGreeting не должна принимать ни одного аргумента
 */
const specialGreeting = () => {
  const result = greeting.bind({ ...company }, 'Bob', 'Marley');
  return result();
};

/* ===> 3 <=== */
const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

/*
 * создайте ф-цию getUkrainePopulation которая будет возвращать строку
 * 'Population in Ukraine is 43000`
 * 43000 передавайте в виде числа
 * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
 * getUkrainePopulation не должна принимать ни одного аргумента
 */
const getUkrainePopulation = () => {
  const result = getPopulation.bind(country, 43000);
  return result();
};

/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(
      `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
    );
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

/*
 * создайте ф-цию printSpecialTransaction которая будет выводить в консоль
 * '400 USD - buy on NASDAQ`
 * используйте метод transaction.printTransaction и .bind с нужным объектом
 * printSpecialTransaction не должна принимать ни одного аргумента
 */
const printSpecialTransaction = () => {
  const result = transaction.printTransaction.bind(anotherTransaction);
  return result();
};
