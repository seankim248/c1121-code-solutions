const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const jsonParser = express.json();

app.get('/api/grades', (req, res) => {
  res.json(objToArr());
});

app.use('/api/grades', jsonParser);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId++;
  grades[req.body.id] = req.body;
  res.status(201).send(req.body);
  // eslint-disable-next-line no-console
  console.log(req.body);
});

function objToArr() {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  return arr;
}

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on Port 3000!');
});
