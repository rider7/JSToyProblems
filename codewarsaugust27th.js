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
