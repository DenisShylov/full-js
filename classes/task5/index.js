class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(({ name }) => name);
  }

  getUserIds() {
    return this._users.map(({ id }) => id);
  }

  getUserNameById(id) {
    const user = this._users.find((user) => user.id === id);
    if (user) {
      return user.name;
    }
  }
}
const res1 = new User('5', 'Nastya', 'ses');
// const res = new UserRepository([
//   { id: '5', name: 'Denis', sessionId: 'session1' },
//   { id: '1', name: 'Den', sessionId: 'session' },
// ]);
// console.log(res.users);
console.log(res1.id);
