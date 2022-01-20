const fs = require('fs');
const JSONdata = require('./data.json');

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    for (const key in JSONdata.notes) {
      console.log(`${key}: ${JSONdata.notes[key]}`);
    }
  });
}

if (process.argv[2] === 'create') {
  JSONdata.notes[`${JSONdata.nextId++}`] = process.argv[3];
  renderJSON();
}

if (process.argv[2] === 'delete') {
  delete JSONdata.notes[process.argv[3]];
  renderJSON();
}

if (process.argv[2] === 'update') {
  JSONdata.notes[process.argv[3]] = process.argv[4];
  renderJSON();
}

function renderJSON() {
  fs.writeFile('data.json', `${JSON.stringify(JSONdata, null, 2)}`, 'utf8', err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}
