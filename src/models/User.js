export class User {
  constructor(id, name, email) {
    this.email = email;
    this.name = name;
    this.id = id;
  }
}

export function objToUser(obj) {
  return new User(obj.id, obj.email, obj.name);
}