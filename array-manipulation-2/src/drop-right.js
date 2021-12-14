/* exported dropRight */
// define function
function dropRight(array, count) {
  // push out the items that don't include the items from the end of the list to "count" value
  return array.slice(0, -count);
}
