/* exported reverseWords */
// define function
function reverseWords(string) {
  // list for string separated by spaces
  var reverseArr = string.split(' ');
  // empty list
  var arr = [];

  // iterate through reverseArr list
  for (var i = 0; i < reverseArr.length; i++) {
    // empty string
    var reverseStr = '';
    // iterate through reverseArr[i] string backwards
    for (var j = reverseArr[i].length - 1; j >= 0; j--) {
      // add current item to reverseStr string
      reverseStr += reverseArr[i][j];
    }
    // put the reverseStr into the arr list
    arr.push(reverseStr);
  }
  // return the arr list joined with spaces
  return arr.join(' ');
}
