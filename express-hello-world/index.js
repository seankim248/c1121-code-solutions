var express = require('express');
var app = express();

app.use(function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('Hello World');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is now listening on port 3000');
});
