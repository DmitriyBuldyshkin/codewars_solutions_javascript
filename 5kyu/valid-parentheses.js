function validParentheses(parens) {
  let count = 0;
  for (let el of parens.split("")) {
    el === "(" ? count++ : count--;
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
