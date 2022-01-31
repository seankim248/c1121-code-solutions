const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, num) => sum + num);

const product = numbers.reduce((product, num) => product * num);

const balance = account.reduce((balance, account) => {
  if (account.type === 'deposit') {
    return balance + account.amount;
  } else {
    return balance - account.amount;
  }
}, 0);

const composite = traits.reduce((trait, property) => Object.assign(trait, property));

console.log(sum);
console.log(product);
console.log(balance);
console.log(composite);
