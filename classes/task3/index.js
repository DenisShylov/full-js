class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(num) {
    this.balance += num;
  }

  withdraw(num) {
    if (this.balance < num) {
      return 'No enough funds';
    }
    return (balance -= num);
  }
}
const wallet = new Wallet();
console.log(wallet.deposit(5));
console.log(wallet.getBalance());
console.log(wallet.withdraw(10));
