/* exported isVowel */
// define function
function isVowel(char) {
  // if the lowercase value of the character is equal to any of the listed vowels,
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    // push out a value of true
    return true;
  }
  // push out a value of false
  return false;
}
