function ceasar(string, shift) {
  // map array of chars into an array of char codes 
  const arrayOfCharCodes = string.split('').map((x) => x.charCodeAt());
  // convert only the char codes that are letters into shifted char codes
  const arrayOfShiftedCodes = arrayOfCharCodes.map((x) => {
    let base = x > 90 ? 97 : 65;
    if ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
      /*wrapShift: The (x - base + shift) part gives a letter's shifted position 
      in a 26 position alphabet, and the % 26) wraps it, if over 26. 
      The + 26) % 26) part overcomes javascript's inability to do mod 
      on negative numbers.*/
      let wrapShift = (((x - base + shift) % 26) + 26) % 26;
      return base + wrapShift;
    } else {
      // don't modify if x is not a letter
      return x;
    }
  });
  //Again use map, String.fromCharCode(x) and join() to return a joined string
  return arrayOfShiftedCodes.map((x) => String.fromCharCode(x)).join('');
}

module.exports = ceasar;
