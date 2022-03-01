/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const topValue = stack.pop();
  if (topValue === undefined) {
    return undefined;
  }
  stack.push(value);
  stack.push(topValue);
}
