/* exported maxValue */

function maxValue(stack) {
  let maxNum = -Infinity;
  while (stack.peek() !== undefined) {
    const topValue = stack.pop();
    if (topValue >= maxNum) {
      maxNum = topValue;
    }
  }
  return maxNum;
}
