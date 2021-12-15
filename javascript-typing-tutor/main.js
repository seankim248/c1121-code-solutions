var order = 0;
var $spans = document.querySelectorAll('span');
var nodeItem = $spans[order];

document.addEventListener('keydown', function (e) {
  if (nodeItem.textContent === e.key) {
    nodeItem.className = 'matrix-green';
    nodeItem = $spans[order++];
    nodeItem.className = 'underline';
  } else {
    nodeItem.className = 'alert-red';
  }
});
