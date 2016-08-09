// 8kyu Grasshopper - If/else syntax debug
//
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive. Unfortunately, Greg made some errors while creating the function
// checkAlive should return true if the player's health is greater than 0 or false if it is 0 or below.
// checkAlive receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive (health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}

// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.
// true === isPalindrome("anna")
// false === isPalindrome("walter")

function isPalindrome(line) {
  var trueLine = line;
  var revLine = line.toString().split('').reverse().join('');
  if(trueLine == revLine) {
    return true;
    }
    else {
    return false;
    }
  }

//Alternate solution
function isPalindrome(line) {
  return (String(line) == String(line).split('').reverse().join('') )  
}
