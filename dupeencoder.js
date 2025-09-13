function duplicateEncode(word) {
  let text = word.toLowerCase();
  let textCount = {};

  for (let char of text) {
    textCount[char] = (textCount[char] || 0) + 1;
  }

  let result = "";
  for (let char of text) {
    result += textCount[char] > 1 ? ")" : "(";
  }

  return result;
}
