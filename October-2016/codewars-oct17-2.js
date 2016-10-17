//Vowel Count
//Return the number (count) of vowels in the given string.

// My Solution
function getCount(str) {
// variable to count vowels
  var vowelsCount = 0;

// loop through string
for(var i = 0; i < str.length; i ++){
// if statement to check for vowels
  if( str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
// increment vowelsCount plus one each time vowel is found
    vowelsCount ++;
  }
}
// return vowelsCount variable which has the value of total amount of vowels
  return vowelsCount;
}


// Best Practice
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
