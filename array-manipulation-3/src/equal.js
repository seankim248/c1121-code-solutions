/* exported equal */
// define function
function equal(first, second) {
  var string1 = first.join('');
  var string2 = second.join('');
  if (string1 === string2) return true;
  return false;
}
