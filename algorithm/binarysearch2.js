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

function betterBinarySearch(arr, val) {
  let [min, max] = [0, arr.length - 1];
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === val) return mid;
    arr[mid] < val ? (min = mid + 1) : (max = mid - 1);
  }
  return -1;
}
