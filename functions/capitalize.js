function capitalize(string) {
  if (!string.length) return;
  return [string[0].toUpperCase(), string.substring(1)].join('');
}

module.exports = capitalize;
