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

// MY SOLUTION
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

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
// A 'Set' is a new ES6 object type to create collections of unique values.
// Using a set in this solution inherently completes the filtering I do in my solution (lines 27-30).
// ----------------------------------------


// ========================================
//              TwoToOne
// ========================================
