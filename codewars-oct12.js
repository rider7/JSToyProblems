// Beginner - Lost Without a Map

// Given and array of integers (x), return the array with each value doubled. Example:
// [1, 2, 3] --> [2, 4, 6]

//My Answer
function maps(x){
// function to double the value
  function double(n){
    return n * 2;
    }
//map method will create a new array
//with the results of calling a function on each value in the original array
//returning the array with map method calling the double function
   return x.map(double);


//Best Practice
function maps(x){
  return x.map(n => n * 2);
}
