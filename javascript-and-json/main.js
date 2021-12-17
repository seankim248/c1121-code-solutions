var books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Artemis Fowl',
    author: 'Eoin Colfer'
  },
  {
    isbn: '878-3-16-148410-0',
    title: 'To Kill a MockingBird',
    author: 'Harper Lee'
  },
  {
    isbn: '778-3-16-148410-0',
    title: 'Lord of the Flies',
    author: 'William Golding'
  }
];

console.log('books array:', books);
console.log('Type:', typeof books);

console.log(JSON.stringify(books));
console.log('Type:', typeof JSON.stringify(books));

var student = '{ "id": 1127, "name": "sean" }';
console.log('String: ' + student);
console.log('Type: ' + typeof student);

console.log(JSON.parse(student));
console.log('Type: ', typeof JSON.parse(student));
