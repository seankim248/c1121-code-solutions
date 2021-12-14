/* exported truncate */
// define function
function truncate(length, string) {
  // storage for the truncated word by using the slice method starting at index 0 until the length input
  var truncatedWord = string.slice(0, length);
  // push out the truncated word with an ellipsis
  return truncatedWord + '...';
}
