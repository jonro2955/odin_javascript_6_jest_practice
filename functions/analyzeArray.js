/* 
An analyzeArray function takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
*/

function analyzeArray(array) {
  // first sort the array to easily find min and max
  array.sort((a, b) => a - b);
  let min = array[0];
  let max = array[array.length - 1];
  let sum = array.reduce((accum, next) => accum + next, 0);
  let length = array.length;
  let average = sum / length;

  return { average, min, max, length };
}

module.exports = analyzeArray;
