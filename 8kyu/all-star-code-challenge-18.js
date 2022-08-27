function strCount(str, letter){  
  const arr = str.split("");
  let res = 0;
  for (let item of arr) {
    if (item === letter) {
      res ++;
    }
  }
  return res;
}
