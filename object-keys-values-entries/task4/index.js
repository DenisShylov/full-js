function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData2, userId2) {
  const id2 = { id: userId2 };
  const res1 = Object.assign(userData2, id2);
  return res1;
}
function addPropertyV3(userData3, userId3) {
  const newObj = {};
  Object.assign(newObj, userData3, { id: userId3 });

  return newObj;
}
function addPropertyV4(userData4, userId4) {
  const id = userId4;
  const newObj = { ...userData4, id };
  return newObj;
}
// examples
const user = {
  name: 'Sam',
};
console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
