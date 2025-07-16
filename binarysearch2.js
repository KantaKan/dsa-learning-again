function binarySearch(arr, val) {
  min = 0;
  max = arr.length - 1;

  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (arr[middle] === val) return middle;

    if (arr[middle] < val) {
      min = middle + 1;
    }
    if (arr[middle] > val) {
      max = middle - 1;
    }
  }
  return -1;
}
