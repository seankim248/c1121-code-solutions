/* exported defaults */
// define function
function defaults(target, source) {
  // go through item in source storage
  for (var key in source) {
    // if the key doesn't exist in target storage,
    if (target[key] === undefined) {
      // put in the source properties into target storage
      target[key] = source[key];
    }
  }
}
