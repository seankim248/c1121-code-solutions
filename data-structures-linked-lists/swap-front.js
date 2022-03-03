/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const nodeData = list.data;
    const nextData = list.next.data;
    list.data = nextData;
    list.next.data = nodeData;
    return list;
  } else {
    return list;
  }
}
