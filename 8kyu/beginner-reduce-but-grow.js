function grow(x) {
  let res = 1;
  x.forEach(el => res *= el);
  return res;
}
