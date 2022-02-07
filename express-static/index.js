const express = require('express');
const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public');
const servedFiles = express.static(absolutePath);

app.use(servedFiles);
app.listen(3000, () => {
  console.log('Listening on Port 3000!');
});
