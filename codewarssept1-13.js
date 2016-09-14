// Find the Odd Int - Kyu 6
// Description:
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
var count = 0;
  for(var i = 0; i < A.length; i ++){
    for(var h = 0; h < A.length; h ++){
      if(A[h] === A[i]){
        count ++;
      }
    }
    if(count % 2 != 0){
    return A[i];
    }
  }
}
//Best Practice
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Split The Strings - Kyu 6
// Description:
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  if(str.length % 2 != 0){
    str = str + '_';
   }
   var result = [];
   var temp = '';
   for(var i = 0; i < str.length; i += 2){
   temp = str[i] + str[i + 1];
   result.push(temp);
   }
   return result;
}
//Best Practice
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

//Clock In Mirror - Kyu 6
// Description:
// Clock in Mirror
// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22
// He knows that the time is 11:38
// in the same manner:
// 05:25 --> 06:35
// 01:50 --> 10:10
// 11:58 --> 12:02
// 12:01 --> 11:59

function WhatIsTheTime(timeInMirror){
  var array1 = [12, 01, 02, 03, 04, 05];
  var array2 = [11, 10, 09, 08, 07, 06];
  var sixty = 60;
  var temp = timeInMirror.split('');
  var hour = timeInMirror.slice(0,2);
  var minutes = timeInMirror.slice(3,5);
  var refHour = '';
  var refMins = '';
  var refTime = ''
  for(var i = 0; i < 12; i ++){
    if(hour == array1[i]){
    refHour = array2[i]
    }
    if(hour == array2[i]){
    refHour = array1[i]
    }
  }
    refMins = sixty - minutes;
    if(refMins < 10){
    refMins = "0" + refMins;
    }
    if(refMins == 60){
    refHour += 1;
    refMins = '00';
    }
    if(refHour < 10){
    refHour = '0' + refHour;
    console.log(refHour)
    }
    refMins = ':' + refMins;
    refTime = refHour + refMins;
 return refTime;
}
