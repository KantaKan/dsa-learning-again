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

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (w, i, a) {
      return a.indexOf(w) === a.lastIndexOf(w) ? "(" : ")";
    })
    .join("");
}
