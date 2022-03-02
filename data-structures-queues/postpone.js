/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const frontValue = queue.dequeue();
  queue.enqueue(frontValue);
}
