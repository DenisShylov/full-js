const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
const func = user.getFullName.bind(user);
func();
// console.log(user.getFullName());
