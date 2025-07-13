function validAnagram(first, second) {
  if (first.leng !== second.length) return false;

  const counter = {};

  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    counter[char] ? counter[char]++ : (counter[char] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!counter[letter]) {
      return false;
    } else {
      counter[letter]--;
    }
  }

  return true;
}
