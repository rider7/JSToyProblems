// Reverse A String
// Ex: Pass through 'abc' and return 'cba'
function revString(input){
  var tempArray = [];
  var tempString = input;
  for(var i = tempString.length - 1; i > -1; i --){
    tempArray.push(tempString[i]);
  }
  return tempArray.join('');
}
revString('abc');

//Alternate solutions
function revString2(input){
  return input.split('').reverse().join('');
}
revString2('abc');
