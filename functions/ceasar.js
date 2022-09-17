/* A caesarCipher function takes a string and a shift number and returns a string with each character “shifted” by the shift number. */

function ceasar(string, shift) {
  const arrayOfCharCodes = string.split("").map((x) => x.charCodeAt());
  const arrayOfShiftedCodes = arrayOfCharCodes.map((x) => {
    if (x >= 65 && x <= 90) {
      let letter = x - 65;
      let shiftedLetter = (letter + shift) % 26;
      return shiftedLetter + 65;
    }
    if (x >= 97 && x <= 122) {
      let letter = x - 97;
      let shiftedLetter = (letter + shift) % 26;
      return shiftedLetter + 97;
    }
    return x;
  });
  return arrayOfShiftedCodes.map((x) => String.fromCharCode(x)).join("");
}

// Alternate version
function ceasar1(string, shift) {
  const arrayOfCharCodes = string.split("").map((x) => x.charCodeAt());
  const arrayOfShiftedCodes = arrayOfCharCodes.map((x) => {
    let base = x > 90 ? 97 : 65;
    if ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
      /* 
      (x - base) gives the letter's position in the 26 letter alphabet. 
      
      (x - base + shift) gives the shifted position.

      Mod 26 wraps it if over 26. 

      The additional + 26) % 26) overcomes javascript's inability to do mod on negative numbers.
      */
      let wrapShift = (((x - base + shift) % 26) + 26) % 26;
      return base + wrapShift;
    }
    // If it's not a letter, just return it
    return x;
  });
  return arrayOfShiftedCodes.map((x) => String.fromCharCode(x)).join("");
}

module.exports = ceasar;
