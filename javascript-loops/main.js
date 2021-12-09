/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log(getNumbersToTen());
console.log(getNumbersToTen());
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log(repeatWord('WOW ', 10));
console.log(repeatWord('WOW ', 10));
console.log(repeatWord('WOW ', 10));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter(''));
console.log(logEachCharacter('Sean'));
console.log(logEachCharacter('Coding is fun.'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(doubleAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

console.log(getKeys({ name: 'Sean', gender: 'male', occupation: 'student' }));
console.log(getKeys({ firstName: 'Andrew', lastName: 'Kim', birthYear: 1997 }));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log(getValues({ name: 'Sean', lastName: 'male', occupation: 'student' }));
console.log(getValues({ firstName: 'Andrew', lastName: 'Kim', birthYear: 1997 }));
