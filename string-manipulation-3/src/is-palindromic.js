/* exported isPalindromic */
// define function
function isPalindromic(string) {
  // storage for list that contains string without any spaces
  var stringArr = string.split(' ').join('').split('');
  // storage for list that contains reversed string without any spaces
  var stringArrReverse = string.split(' ').join('').split('').reverse();
  // if string is equal to reversed string,
  if (stringArr.join('') === stringArrReverse.join('')) {
    // return true
    return true;
  }
  // return false
  return false;
}
