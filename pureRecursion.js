function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));

function power(num, exp) {
  if (exp === 0) return 1;

  return num * power(num, exp - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

function fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;

  return fib(n - 1) + fib(n - 2);
}
