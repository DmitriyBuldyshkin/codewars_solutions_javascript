function find_average(array) {
  if (array.length > 0) {
    let sum = 0;
    array.forEach(el => sum += el)
    return sum / array.length;
  } else {
    return 0;
  }
}
