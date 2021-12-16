/* exported zip */
// define function
function zip(first, second) {
  // storage for empty list
  var zipped = [];
  // if second list is longer than first list,
  if (first.length < second.length) {
    // cut the second list so its length is equal to the first list
    second = second.slice(0, second.length - (second.length - first.length));
    // otherwise, if first list is longer than second list,
  } else if (second.length < first.length) {
    // cut the first list so its length is equal to the second list
    first = first.slice(0, first.length - (first.length - second.length));
  }
  // then loop through the first list
  for (var i = 0; i < first.length; i++) {
    // put the item from first and second lists into another list into the zipped list
    zipped.push([first[i], second[i]]);
  }
  // return the list zipped
  return zipped;
}
