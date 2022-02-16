const { getMa } = require("./wordlist.js");

const Ba = new Date(2021, 5, 19, 0, 0, 0, 0);
const wordList = getMa();
function getDateKey(e, a) {
  var s = new Date(e),
    t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.round(t / 864e5);
}
function solveWordle(e) {
  var a,
    s = getDateKey(Ba, e);
  return (a = s % wordList.length), wordList[a];
}

const today = new Date();
const word = solveWordle(today);

console.log(word);
