function naiveStrSearch(long, short) {
  let count = 0;
  for (let i = 0; i <= long.length - short.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break; //มันนับตาม i+j เพราะว่า j มันลูปอยู่
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
