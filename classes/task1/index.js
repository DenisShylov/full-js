class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(num) {
    this.age = num;
    if (num >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    if (num < 0) {
      return false;
    } else if (num > 0) {
      return num;
    }
  }
  static createEmpty() {
    return { name: '', age: null };
  }
}

const user1 = new User('Tom', 18);
console.log(User.createEmpty());
