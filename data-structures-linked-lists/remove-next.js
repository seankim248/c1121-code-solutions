/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const restOfList = list.next.next;
    list.next = restOfList;
  }
}
