function reverseString(string) {
  let arr = [],
    num = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    arr[i] = string[num];
    num--;
  }
  return arr.join('');
}

module.exports = reverseString;