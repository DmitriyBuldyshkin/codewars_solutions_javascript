function findOdd(A) {
  let stack = [];
  for (let num of A) {
    if (!stack || !stack.includes(num)) {
      stack.push(num);
    } else {
      stack.splice(stack.indexOf(num), 1);
    }
  }
  return stack[0];
}
