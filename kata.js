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

// #########################################################################################################
// #########################################################################################################

// ========================================
//          Square Every Digit
// ========================================

// CHALLENGE
// ----------------------------------------
// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer.
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
function squareDigits(num){
  let outputArr = [];
  let numArray = num.toString().split("");
  numArray.forEach(number => {
    outputArr.push(number*number);
  });
  let output = Number(outputArr.join(''));
  return output
};
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
function squareDigits(num){
  return Number(('' + num)
    .split('')
    .map(val => { 
      return val * val;
    }).join('')); 
}
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//              Sums of Parts
// ========================================

// CHALLENGE
// ----------------------------------------
// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]

// Its following parts:
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []

// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
function partsSums(ls) {
  let sumArray = [];
  let maxTotal = 0;
  for (let j=0; j<ls.length; j++) {    
    maxTotal += ls[j];
  };
  sumArray.push(maxTotal);
  let newTotal = maxTotal;
  for (let i=0; i<ls.length; i++) {
    newTotal -= ls[i]
    sumArray.push(newTotal);
  };
  return sumArray;
};
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map(v => sum = sum - v);
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//              Sums of Parts
// ========================================

// CHALLENGE
// ----------------------------------------
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//              Sums of Parts
// ========================================

// CHALLENGE
// ----------------------------------------
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
// ----------------------------------------