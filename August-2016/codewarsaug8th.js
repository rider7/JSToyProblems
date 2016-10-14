// Kata 8

// Example
// Return the value of the number 4 to be the power of 3 (4*4*4):
// Math.pow(4, 3);
// The result will be:
// 64

// Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).
//E.g: n = 0 -> 2^0 -> [1] n = 1 -> 2^0, 2^1 -> [1,2] n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]
function powersOfTwo(n){
  var powersArray = [];
  for(var i = 0; i <= n; i ++){
    powersArray.push(Math.pow(2,i));
  }
  return powersArray;
}


// In investing, one way of determining where a stock is a worthwhile buy is by comparing a stock's current price to a stock's price at its all time high.
// If a stock's current price is less than or equal to 80% of its all time high, then it's a "buy".
// Build a buy calculator takes the current price of a stock, and the stock's all time high, and returns "Buy" if the stock is a buy, or "Pass" if it's not worthwhile.

function buyOrPass(stockPrice,allTimeHigh) {
  if(stockPrice >= allTimeHigh) {
  return "Pass";
  }
  return "Buy";
}


// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).
// Write a function that given an American floor (passed as an integer) returns the real floor:
// get_real_floor(1) == 0 # getRealFloor for JS and Coffeescript
// get_real_floor(0) == 0 # Special case to please Europeans
// get_real_floor(5) == 4
// get_real_floor(15) == 13
// Moreover, your function should work for basement floors too: just return the same value than the passed one.
// get_real_floor(-3) == -3
function getRealFloor(floorNum){
  if(floorNum > 0 && floorNum < 13){
    return floorNum-1;
  }
  if(floorNum > 13){
    return floorNum-2;
  }
  else{
    return floorNum;
  }
}
