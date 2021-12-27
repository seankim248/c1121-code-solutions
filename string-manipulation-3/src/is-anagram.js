/* exported isAnagram */
// define function
function isAnagram(firstString, secondString) {
  // storage for firstString without spaces
  firstString = firstString.replace(/\s/g, '');
  // storage for firstString without spaces
  secondString = secondString.replace(/\s/g, '');

  // empty storage
  var obj = {};
  // iterate through firstString string
  for (var i = 0; i < firstString.length; i++) {
    // if obj storage doesn't contain current item,
    if (obj[firstString[i]] === undefined) {
      // add item to obj and set the value to 1
      obj[firstString[i]] = 1;
      // otherwise
    } else {
      // increment the value of current item in the obj
      obj[firstString[i]]++;
    }
  }
  // iterate through secondString string
  for (var j = 0; j < secondString.length; j++) {
    // if obj storage doesn't contain current item,
    if (obj[secondString[j]] === undefined) {
      // return false
      return false;
      // otherwise
    } else {
      // if decremented value is equal to 0,
      if (--obj[secondString[j]] === 0) {
        // delete property in obj
        delete obj[secondString[j]];
      }
    }
  }
  // if obj storage is empty,
  if (Object.keys(obj).length === 0) {
    // return true
    return true;
    // otherwise
  } else {
    // return false
    return false;
  }
}
