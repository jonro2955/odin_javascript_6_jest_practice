/* The capitalize function takes a string and returns it with the first character capitalized. */

function capitalize(string) {
  if (!string.length) return;
  return [string[0].toUpperCase(), string.substring(1)].join('');
}

export default capitalize;
