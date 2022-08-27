function toCamelCase(str){
  const re = /\W|_/gm;
  const arr = str.split(re);
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return res;
}
