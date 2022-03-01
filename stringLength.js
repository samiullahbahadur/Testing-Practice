function stringLength(string) {
  if (string.length >= 1 && string.length < 10) {
    return string.length;
  } else return false;
}
stringLength("h1");
stringLength("");
stringLength("Hello World");
module.exports = stringLength;

