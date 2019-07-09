function FindGreatestSumOfSubArray(array) {
  let res = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    max = Math.max(max + array[i], array[i]);
    res = Math.max(max, res);
  }
  return res
}

