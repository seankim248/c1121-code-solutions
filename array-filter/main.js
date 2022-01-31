const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(n => {
  return n % 2 === 0;
});

const overFive = numbers.filter(n => {
  return n > 5;
});

const startWithE = names.filter(name => {
  return name[0] === 'E';
});

const haveD = names.filter(name => {
  return name.includes('D') || name.includes('d');
});

console.log(evenNumbers);
console.log(overFive);
console.log(startWithE);
console.log(haveD);
