const sortContacts = (arr, bol) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.sort((a, b) => {
    if (bol === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });
};

console.log(
  sortContacts([
    { name: 'Tom', phoneNumber: '777-77-77' },
    { name: 'Adam', phoneNumber: '222-22-22' },
    { name: 'Denis', phoneNumber: '111-11-11' },
  ])
);
console.log(splitText(12, 4));
