var ten = 10;
var twenty = 20;
var thirty = 30;

var maximumValue = Math.max(ten, twenty, thirty);
console.log('maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Spider-Man', 'Flash', 'Batman'];

var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Artemis Fowl',
    author: 'Eoin Colfer'
  },
  {
    title: 'Artemis Fowl: The Arctic Incident',
    authoer: 'Eoin Colfer'
  },
  {
    title: 'Artemis Fowl: The Eternity Code',
    author: 'Eoin Colfer'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Heisenberg White';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
console.log('You\'re goddamn right.');
