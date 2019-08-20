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
//   If you can't sleep, just count sheep!
// ========================================

// CHALLENGE
// ----------------------------------------
// Given a non-negative integer, 3 for example, return a string with
// a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
var countSheep = function (num) {
  const maxSheep = parseInt(num);
  let output = "";
  for (let i=1; i<maxSheep+1; i++) {
    output += i + " sheep...";
  }
  return output;
};
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
var countSheep = function (num) {
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//           Count the Monkeys!
// ========================================

// CHALLENGE
// ----------------------------------------
// You take your son to the forest to see the monkeys. You know that
// there are a certain number there (n), but your son is too young to just
// appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n),
// populate an array with all numbers up to and including that number, but
// excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
function monkeyCount(n) {
  const monkeyArr = [];
  for (let i=1; i<=parseInt(n); i++) {
    monkeyArr.push(i);
  }
  return monkeyArr;
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//            Driving License
// ========================================

// CHALLENGE
// ----------------------------------------
// Using personal details from a data array, construct the driving license number in accordance with the following rules:

// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"

// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
function driver(data) {
  // Define our output as an empty string
  let drivingNumber = "";
  
  // Extracting the first 5 chars from surname
  if (data[2].length > 4) {
    drivingNumber += data[2].substring(0,5).toUpperCase();
  } else {
    drivingNumber += data[2].toUpperCase();
    let x = 5 - data[2].length;
    for (let i=0; i<x; i++) {
      drivingNumber += "9";
    };
  };
  
  // Extracting the decade digit
  let dobLength = data[3].length - 2
  drivingNumber += data[3].charAt(dobLength);
  
  // Extract month + gender
  let stringMonth = "";
  let dobMonth = data[3].substring(3,6);
  switch (dobMonth) {
    case "Jan":
      stringMonth = "01";
      break;
    case "Feb":
      stringMonth = "02";
      break;
    case "Mar":
      stringMonth = "03";
      break;
    case "Apr":
      stringMonth = "04";
      break;
    case "May":
      stringMonth = "05";
      break;
    case "Jun":
      stringMonth = "06";
      break;
    case "Jul":
      stringMonth = "07";
      break;
    case "Aug":
      stringMonth = "08";
      break;
    case "Sep":
      stringMonth = "09";
      break;
    case "Oct":
      stringMonth = "10";
      break;
    case "Nov":
      stringMonth = "11";
      break;
    case "Dec":
      stringMonth = "12";
      break;
    default:
      console.log("Error");
  };
  
  if (data[4] === "M") {
    drivingNumber += stringMonth
  } else {
    let test = stringMonth.split("");
    test[0] = parseInt(test[0]) + 5;
    drivingNumber += test[0] + test[1];
  };
  
  // Extracting date of birth
  drivingNumber += data[3].substring(0,2);
  
  // Extracting digit from year of birth
  drivingNumber += data[3].charAt(data[3].length - 1);
  
  // Extracting intials from first name
  drivingNumber += data[0].charAt(0);
  
  // Extracting intials from middle ame
  if (data[1].length) {
    drivingNumber += data[1].charAt(0);
  } else {
    drivingNumber += 9;
  };
  
  // Adding fixed characters
  drivingNumber += "9AA";
  
  // Return final string
  return drivingNumber;
}
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
function driver(data) {
  var name = (data[2].slice(0,5).toUpperCase() +'99999').slice(0,5);    // Combining the 9s with the name up-front
  var dob = new Date(data[3]); // Convert DOB to a "Date" at the beginning
  var dec = (dob.getYear().toString().length==2 ? dob.getYear().toString()[0] : dob.getYear().toString()[1]);  // 1
  var month = (data[4] == "M" ? ("0" + (dob.getMonth()+1).toString()).slice(-2) : dob.getMonth()+51);
  var day = ("0" + dob.getDate().toString()).slice(-2);
  var yearDig = dob.getYear().toString().slice(-1);
  var inits = data[0][0] + (data[1]=="" ? "9" : data[1][0])
  var arb1 = "9"
  var arb2 = "AA"
  return name + dec + month + day + yearDig + inits + arb1 + arb2
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//          Create Phone Number
// ========================================

// CHALLENGE
// ----------------------------------------
// Write a function that accepts an array of 10 integers (between 0 and 9), and that returns a string of those
// numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
};

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//             [INSERT TITLE]
// ========================================

// CHALLENGE
// ----------------------------------------
// Test whether or not the string contains all of the letters which spell a given name, in order.
// A function passing two strings, searching for one (the name) within the other.
// function nameInStr(str, name){ return true || false }
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
//               ¯\_(ツ)_/¯
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
function nameInStr(str, name){
  // Convert both to all-lowercase
  name = name.toLowerCase()
  str = str.toLowerCase()
  
  let index = 0
  
  for (let char of str) {
    if (char === name[index])
      index++
  }
  
  return index === name.length
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//        Alternate Capitalization
// ========================================

// CHALLENGE
// ----------------------------------------
// Given a string, capitalize the letters that occupy even indexes and odd
// indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
// ----------------------------------------

// MY SOLUTION
// ----------------------------------------
function capitalize(s){
  let split1 = s.split("");
  let split2 = s.split("");
  let output=[];
  for (let i=0; i<split1.length; i+=2) {
    split1[i] = split1[i].toUpperCase();
  }
  for (let j=1; j<split2.length; j+=2) {
    split2[j] = split2[j].toUpperCase();
  }
  output.push(split1.join(""), split2.join(""));
  return output;
};
// ----------------------------------------

// SOLUTIONS FROM THE CROWD
// ----------------------------------------
function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};
// ----------------------------------------

// #########################################################################################################
// #########################################################################################################

// ========================================
//        INSERT TITLE
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