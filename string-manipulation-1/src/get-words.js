/* exported getWords */
// define function
function getWords(string) {
  // if the string is empty, push out an empty list
  if (string === '') return [];
  // storage list for separating the words by the space
  var words = string.split(' ');
  // push out a value of a list of the words separated
  return words;
}
