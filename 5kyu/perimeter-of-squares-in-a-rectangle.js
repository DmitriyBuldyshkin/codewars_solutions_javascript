function perimeter(n) {
  const table = Array(n + 1).fill(0);
  table[0] = 1;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
    sum += table[i];
  }
  return 4 * sum;
}
