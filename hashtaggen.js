function generateHashtag(str) {
  if (!str || str.trim().length === 0) return false;

  const hashtag =
    "#" +
    str
      .split(" ")
      .filter((w) => w)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");

  return hashtag.length > 140 ? false : hashtag;
}
