function sumIntervals(intervals) {
  intervals.sort(function(a, b) {
  return a[0] - b[0];
});
  let sum = 0;
  let currentStart = intervals[0][0];
  let currentEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > currentEnd) {
      sum += currentEnd - currentStart;
      currentStart = intervals[i][0];
      currentEnd = intervals[i][1];
    } else {
      currentEnd = Math.max(currentEnd, intervals[i][1]);
    }
  }
  sum += currentEnd - currentStart;
  return sum;
}
