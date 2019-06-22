// ========================================
//              TwoToOne
// ========================================

// CHALLENGE
// ----------------------------------------
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
// the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// ----------------------------------------

// SOLUTION
// ----------------------------------------
function longest(s1, s2) {
  let letterArr = [];
  let final = [];
  newStr = s1 + s2;
  letterArr = newStr.split('');
  letterArr = letterArr.sort();
  for (let i=0; i<letterArr.length; i++) {
    if (!final.includes(letterArr[i])) {
      final.push(letterArr[i]);
    }
  }
  return final.join('')
}
// ----------------------------------------


