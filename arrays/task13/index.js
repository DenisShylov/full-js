// const withdraw = (clients, balances, client, amount) => {
//   for (let i = 0; i < clients.length; i++) {
//     for (let j = 0; j < balances.length; j++) {
//       clients[i] === balances[j];
//       let usersData = clients[i] === client;

//       if (usersData && i === j) {
//         let sum = balances[j] - amount;
//         return sum;
//       }
//       if (balances[i] < amount) {
//         return -1;
//       }
//     }
//   }
// };

const withdraw = (clients, balances, client, amount) => {
  for (let i = 0; i < clients.length; i++) {
    clients[i] === balances[i];
    let usersData = clients[i] === client;
    if (usersData && balances[i] > amount) {
      let sum = balances[i] - amount;
      return sum;
    }
    if (balances[i] < amount) {
      return -1;
    }
  }
};
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
