function filter(array, predicate) {
  const filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}
