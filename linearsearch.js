function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return arr[i];
    }
  }
  return -1;
}
