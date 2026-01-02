function bSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
}

//with comparator
function comparator2(a, b) {
  let anum = typeof a === "number";
  let bnum = typeof b === "number";

  if (anum && bnum) {
    return a - b;
  }

  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
}

function bubbleSort2(arr, compare = comparator2) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
