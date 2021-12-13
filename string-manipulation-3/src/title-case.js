/* exported titleCase */
// define function
function titleCase(title) {
  var titledArr = [];
  var stringArr = title.split(' ');
  for (var i = 0; i < stringArr.length; i++) {
    if (stringArr[i].toLowerCase() === 'api') {
      titledArr.push('API');
    } else if (stringArr[i].toLowerCase() === 'web') {
      titledArr.push('Web');
    } else if (stringArr[i].toLowerCase() === 'javascript') {
      titledArr.push('JavaScript');
    } else if (stringArr[i].toLowerCase() === 'javascript:') {
      titledArr.push('JavaScript:');
    } else if (stringArr[i].length > 2 && stringArr[i].toLowerCase() !== 'for' && stringArr[i].toLowerCase() !== 'the' && stringArr[i].toLowerCase() !== 'and') {
      titledArr.push(stringArr[i][0].toUpperCase() + lastChars(stringArr[i]));
    } else if (stringArr[i - 1].endsWith(':')) {
      titledArr.push(stringArr[i][0].toUpperCase() + lastChars(stringArr[i]));
    } else if (stringArr.includes('-')) {
      // var capitalizeAfterDash = stringArr.indexOf('-');
      titledArr.push(stringArr[i].index);
    } else {
      titledArr.push(stringArr[i].toLowerCase());
    }
  }
  return titledArr.join(' ');
}

function lastChars(string) {
  return string.slice(1).toLowerCase();
}
