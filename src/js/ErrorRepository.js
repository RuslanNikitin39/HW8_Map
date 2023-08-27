const map = new Map([
  [404, 'Not Found'],
  [405, 'Not Allowed'],
  [400, 'Bad Request'],
]);

export default class ErrorRepository {
  constructor() {
    this.map = map;
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}