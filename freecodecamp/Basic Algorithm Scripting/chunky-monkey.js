const chunkArrayInGroups = (arr, size) =>
  arr.reduce(
    (acc, _, idx, arr) =>
      idx % size == 0 ? [...acc, [...arr.slice(idx, size + idx)]] : [...acc],
    []
  );

console.table(
  chunkArrayInGroups(["a", "b", "c", "d", 5, 6, 7, 8, 9, 10, 11], 5)
);
