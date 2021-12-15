function handleFocus(event) {
  console.log('focus has been fired!');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur has been fired!');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ':', event.target.value);
}

var $inputs = document.querySelectorAll('input');
var $textArea = document.querySelector('textarea');

for (var input of $inputs) {
  input.addEventListener('focus', handleFocus);
  input.addEventListener('blur', handleBlur);
  input.addEventListener('input', handleInput);
}

$textArea.addEventListener('input', handleInput);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('focus', handleFocus);
