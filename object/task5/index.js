/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const obj = {
  name: 'Denis',
  age: 26,
  From: 'Kharkov',
};
const getKeys = (obj) => {
  for (let propName in obj) {
    console.log(propName);
  }
};
getKeys(obj);
