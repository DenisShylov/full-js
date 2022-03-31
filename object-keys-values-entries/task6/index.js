const getPeople = (obj) => {
  if (Object.keys(obj).length === 0) {
    return [];
  }
  const arr = Object.values(obj);
  const newArr = arr
    .reduce((acc, num) => acc.concat(num))
    .map((user) => user.name);

  return newArr;
};
const rooms = {
  room: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
const sas = {};
console.log(getPeople(rooms));
