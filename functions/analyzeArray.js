function analyzeArray(array) {
  if(!array.length) return null;
  //first alter the array into ascending order
  array.sort(function (a, b) {
    return a - b;
  });
  let min = array[0];
  let max = array[array.length - 1];
  let length = array.length;
  let sum = array.reduce((accum, next) => {
    return accum + next;
  }, 0);
  let average = sum / length;
  let result = { average, min, max, length };
  return result;
}

module.exports = analyzeArray;
