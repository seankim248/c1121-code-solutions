const pg = require('pg');
const express = require('express');
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const jsonParser = express.json();
app.use('/api/grades', jsonParser);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  const text = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score];
  if (values.includes(undefined)) {
    res.status(400).json({
      error: 'name, course, body are required fields'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  }
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const score = Number(req.body.score);
  const id = Number(req.params.gradeId);
  const text = 'UPDATE "grades" SET "name" = $1, "course" = $2, "score" = $3 WHERE "gradeId" = $4 RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score, id];
  if (values.includes(undefined)) {
    res.status(400).json({
      error: 'name, course, body are required fields'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  } else if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  db.query(text, values)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({
          error: `grade with id ${req.params.gradeId} does not exist`
        });
      } else {
        const grade = result.rows[0];
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const text = 'DELETE FROM "grades" WHERE "gradeId" = $1 RETURNING *';
  const values = [id];
  db.query(text, values)
    .then(result => {
      if (result.rows.length === 0) {
        res.status(404).json({
          error: `grade with id ${id} does not exist`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});
