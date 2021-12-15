var $form = document.querySelector('form');
var $inputs = document.querySelector('form').elements;

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  var obj = {};
  for (var i = 0; i < $inputs.length; i++) {
    obj[$inputs[i].name] = $inputs[i].value;
  }
  console.log('Message Data:', obj);
  $form.reset();
});
