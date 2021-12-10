/* exported countdown */
function countdown(number) {
  var numArr = [];
  while (number >= 0) {
    numArr.push(number);
    number--;
  }
  return numArr;
}
