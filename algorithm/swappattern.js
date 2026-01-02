const arr = [1, 2, 3, 4, 5];
[arr[0], arr[2]] = [arr[2], arr[0]];
console.log(arr);

temp = arr[0];
arr[0] = arr[2];
arr[2] = temp;

console.log(arr);
