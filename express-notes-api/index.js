const express = require('express');
const JSONData = require('./data.json');
const app = express();
const notesObj = JSONData.notes;
const fs = require('fs');
const jsonParser = express.json();

app.use('/api/notes', jsonParser);

app.get('/api/notes', (req, res) => {
  res.status(200).json(objToArr(notesObj));
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObj[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(notesObj[id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content property is a required field' });
  } else {
    req.body.id = JSONData.nextId++;
    notesObj[req.body.id] = req.body;
    fs.writeFile('data.json', JSON.stringify(JSONData, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObj[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete notesObj[id];
    fs.writeFile('data.json', JSON.stringify(JSONData, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!notesObj[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    notesObj[id] = req.body;
    notesObj[id].id = id;
    fs.writeFile('data.json', JSON.stringify(JSONData, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(notesObj[id]);
      }
    });
  }
});

function objToArr(obj) {
  const arr = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});
