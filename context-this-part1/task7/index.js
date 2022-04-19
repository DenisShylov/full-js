const user = {
  firstName: 'Denis',
  lastName: 'Shylov',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(string) {
    const spl = string.split(' ');
    return `${(this.firstName = spl[0])} ${(this.lastName = spl[1])}`;
  },
};
const res = user.setFullName.bind({ user });
console.log(res('John Doe'));

console.log(user.getFullName());
