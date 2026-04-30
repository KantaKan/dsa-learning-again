function palindromeCheck(str: string): boolean {
  if (str.length < 1) return true;
  str = str.toLowerCase().replaceAll(" ", "");
  const center = Math.floor(str.length / 2);

  return (
    str.slice(0, center) ===
    str
      .slice(str.length % 2 === 0 ? center : center + 1)
      .split("")
      .reverse()
      .join("")
  );
}
