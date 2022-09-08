function isInteresting(number, awesomePhrases) {
  let res = 0;
  if (number < 100) {
    if (number + 1 === 100 || number + 2 === 100) {
      res = 1;
      return res;
    } else {
      res = 0;
      return res;
    }
  }
  for (let n of awesomePhrases) {
    if (n - number === 0) {
      res = 2;
      return res;
    } else if (n - number < 3) {
      res = 1;
    }
  }
  if (isPalindrome(number)) {
    res = 2;
    return res;
  } else if (isPalindrome(number + 1) || isPalindrome(number + 2)) {
    res = 1;
  }
  if (allZeros(number)) {
    res = 2;
    return res;
  } else if (allZeros(number + 1) || allZeros(number + 2)) {
    res = 1;
  }
  if (sameNumber(number)) {
    res = 2;
    return res;
  } else if (sameNumber(number + 1) || sameNumber(number + 2)) {
    res = 1;
  }
  if (seqInc(number)) {
    res = 2;
    return res;
  } else if (seqInc(number + 1) || seqInc(number + 2)) {
    res = 1;
  }
  if (seqDec(number)) {
    res = 2;
    return res;
  } else if (seqDec(number + 1) || seqDec(number + 2)) {
    res = 1;
  }
  
  return res;
}
function isPalindrome(n) {
  const arr = String(n).split("");
  const palindrome = Number(arr.reverse().join(""));
  return n === palindrome ? true : false;
}
function allZeros(n) {
  const array = String(n).split("").map(num => Number(num));
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== 0) {
      return false;
    }
  }
  return true;
}
function sameNumber(n) {
  let digit = n % 10;
  while (n > 0) {
    let currentDigit = n % 10;
    if (currentDigit !== digit) {
      return false;
    }
    n = parseInt(n / 10);
  }
  return true;
}
function seqInc(n) {
  const array = String(n).split("").map(num => Number(num));
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === 9 && array[i + 1] === 0) {
      return true;
    }
    if (array[i] + 1 != array[i + 1]) {
      return false;
    }
    if (array[i] === 0 && array[i + 1] === 1) {
      return false;
    }
  }
  return true;
}
function seqDec(n) {
  const array = String(n).split("").map(num => Number(num));
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] - 1 != array[i + 1]) {
      return false;
    }
  }
  return true;
}
