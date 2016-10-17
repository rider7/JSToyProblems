// Sum without highest and lowest number
// My Solution

function sumArray(array) {
// checks if array is null and returns 0
if(array === null){
  return 0;
}
// sort method will sort array by ascending order
  array.sort(function(a, b){return a-b})
// pop method will remove last element of array
  array.pop()
// shift method will remove first element of array
  array.shift()
// create sum variable and asign it a value of 0
  var sum = 0;
// loop through the array and add each existing index to the sum variable
  for(var i = 0; i < array.length; i ++){
    sum += array[i]
  }
// return the value of sum
  return sum;
}

// Best Practice
function sumArray(array) {
  return !array || array.length < 4 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b);
}
