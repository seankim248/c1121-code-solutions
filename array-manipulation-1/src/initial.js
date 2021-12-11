/* exported initial */
// define function
function initial(array) {
  // storage for initial list
  var initial = [];
  // iterate through the initial list and ending before the last item
  for (var i = 0; i < array.length - 1; i++) {
    // put the item at the current index into the initial list
    initial.push(array[i]);
  }
  // push out the initial list
  return initial;
}
