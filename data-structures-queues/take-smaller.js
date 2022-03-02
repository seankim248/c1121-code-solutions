/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const frontValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return frontValue;
  }
  const secondValue = queue.dequeue();
  if (frontValue < secondValue) {
    queue.enqueue(secondValue);
    return frontValue;
  } else {
    queue.enqueue(frontValue);
    return secondValue;
  }
}
