var $button = document.querySelector('button');
var $body = document.querySelector('body');

$button.addEventListener('click', function (e) {
  if ($body.className === 'dark') {
    $body.className = 'light';
    $button.className = 'btn-light';
  } else {
    $body.className = 'dark';
    $button.className = 'btn-dark';
  }
});
