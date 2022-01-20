const fs = require('fs');

recurse(2);

function recurse(count) {
  fs.readFile(`./${process.argv[count]}`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    const nextCount = count + 1;
    if (nextCount < process.argv.length) {
      recurse(nextCount);
    }
  });
}
