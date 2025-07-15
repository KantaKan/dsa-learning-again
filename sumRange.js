function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//this shit is better than recursive for this function

function sumRange(num) {
  return (num * (num + 1)) / 2;
}
