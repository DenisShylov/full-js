function getKeys(obj) {
  Object.keys(obj).forEach((user) => console.log(user));
  
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
