/* exported tail */
// define function
function tail(array) {
  // storage for tail list
  var tail = [];
  // iterate through the tail list starting with the second item
  for (var i = 1; i < array.length; i++) {
    // put the item at the current index into the tail list
    tail.push(array[i]);
  }
  // push out the tail list
  return tail;
}
