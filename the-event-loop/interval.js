var count = 3;

var countDown = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
