function generateHashtag (str) {
  if (str.trim() === "") {
    return false;
  }
  let res = "#";
  str.split(" ").map(el => res += el.charAt(0).toUpperCase() + el.slice(1));
  return res.trim().length > 140 ? false : res.trim();
}
