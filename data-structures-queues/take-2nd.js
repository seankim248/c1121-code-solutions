/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const frontValue = queue.dequeue();
  queue.enqueue(frontValue);
  return queue.dequeue();
}
