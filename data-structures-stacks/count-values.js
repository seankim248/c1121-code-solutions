/* exported countValues */

function countValues(stack) {
  if (stack.pop() === undefined) {
    return 0;
  } else {
    return countValues(stack) + 1;
  }
}
