export class Post {
  constructor(id, title, body) {
    this.body = body;
    this.title = title;
    this.id = id;
  }
}

export function objToPost(obj) {
  return new Post(obj.id, obj.body, obj.title);
}