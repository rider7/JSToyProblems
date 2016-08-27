// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.
// Division by zero should return NaN. Arguments will both be integers.


function remainder(a, b){
  if(a > b){
  return a % b;
  }
  if(b > a){
  return b % a;
  }
  if( a || b < 0){
  // negative check
  return 0;
  }
}

// Alternate solutions

function remainder(a, b){
  return a > b ? a % b : b % a;
  // if a > b is true a % b else b % a
}

//PreFizzBuzz
// This is the second step to understanding FizzBuzz.
//
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
//
// Your expected outputs: n, "Fizz", "Buzz", or "FizzBuzz" depending on the following rules:
//
// Multiples of 5 and 3 return "FizzBuzz"
// Multiples of 3 return "Fizz"
// Multiples of 5 return "Buzz"
// Your job is to write an algorithm that receives the input and outputs the correct value.

function preFizz(n) {
  if( n % 3 === 0 && n % 5 === 0){
  return "FizzBuzz";
  }
  if( n % 3 === 0){
  return "Fizz";
  }
  if(n % 5 === 0){
  return "Buzz";
  }
  else{
  return n;
  }
  }
