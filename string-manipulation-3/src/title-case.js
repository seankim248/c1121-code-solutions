/* exported titleCase */
// define function
function titleCase(title) {
  // storage for empty list
  var titledArr = [];
  // storage for list of word items
  var stringArr = title.split(' ');
  // iterate through stringArr list
  for (var i = 0; i < stringArr.length; i++) {
    // if item is equal to "i"
    if (stringArr[i] === 'i') {
      // put "I" in titledArr list
      titledArr.push('I');
    // else if item is equal to "api"
    } else if (stringArr[i].toLowerCase() === 'api') {
      // put "API" in titledArr list
      titledArr.push('API');
    // else if item includes a "-"
    } else if (stringArr[i].includes('-')) {
      // storage for the index at "-"
      var dashIndex = stringArr[i].indexOf('-');
      // storage for uppercased character after dash
      var upperAfterDash = stringArr[i][dashIndex + 1].toUpperCase();
      // storage for characters before dash
      var beforeDash = stringArr[i][0].toUpperCase() + stringArr[i].slice(1, dashIndex).toLowerCase();
      // storage for characters after dash
      var afterDash = upperAfterDash + stringArr[i].slice(dashIndex + 2).toLowerCase();
      // put the combination of storages into list
      titledArr.push(beforeDash + '-' + afterDash);
    // else if item is equal to "web"
    } else if (stringArr[i].toLowerCase() === 'web') {
      // put in "Web" in list
      titledArr.push('Web');
    // else if item is equal to "javascript"
    } else if (stringArr[i].toLowerCase() === 'javascript') {
      // put in "JavaScript" in list
      titledArr.push('JavaScript');
    // else if item is equal to "javascript:"
    } else if (stringArr[i].toLowerCase() === 'javascript:') {
      // put in "JavaScript: in list"
      titledArr.push('JavaScript:');
    // else if index is equal to zero
    } else if (i === 0) {
      // put in the item capitalized into list
      titledArr.push(stringArr[i][0].toUpperCase() + lastChars(stringArr[i]));
    // else if item length is greater than 3 and if item is equal to "for", "the", and "and"
    } else if (stringArr[i].length > 2 && stringArr[i].toLowerCase() !== 'for' && stringArr[i].toLowerCase() !== 'the' && stringArr[i].toLowerCase() !== 'and') {
      // put in item capitalized in list
      titledArr.push(stringArr[i][0].toUpperCase() + lastChars(stringArr[i]));
    // else if index is not zero and there is a semicolon at the end of the last item
    } else if (i !== 0 && stringArr[i - 1][stringArr[i - 1].length - 1] === ':') {
      // put in item capitalized in list
      titledArr.push(stringArr[i][0].toUpperCase() + lastChars(stringArr[i]));
    } else {
      // put in item lowercased in list
      titledArr.push(stringArr[i].toLowerCase());
    }
  }
  // return string that was joined with a space from the list using "join" method
  return titledArr.join(' ');
}

// define helper function
function lastChars(string) {
  // return list of characters lowercased after the first character of the string
  return string.slice(1).toLowerCase();
}
