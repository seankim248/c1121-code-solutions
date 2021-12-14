var $button = document.querySelector('button');
var $body = document.querySelector('body');
var dark = true;

$button.addEventListener('click', function (e) {
  if (dark === true) {
    $body.className = 'light';
    $button.className = 'btn-light';
    dark = false;
  } else if (dark === false) {
    $body.className = 'dark';
    $button.className = 'btn-dark';
    dark = true;
  }
});
