// Miles per gallon to kilometers per liter Kyu 8
// Description:
//
// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.
//
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
//
// Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.
//
// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
// My Solution
function converter (mpg) {
var kpl = mpg * 1.609344/4.54609188;
return kpl = +kpl.toFixed(2);
}

//Best Practice
var LITRES_PER_GALLON = 4.54609188;
var KILOMETERS_PER_MILE = 1.609344;
function converter (mpg) {
  return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}

// Remove the time Kyu 8
// Description:
//
// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:
//
// Weekday Month Day, time e.g., Friday May 2, 7pm
//
// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
//
// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.
//
// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".
// name on billboard
//
//My Solution
function shortenToDate(longDate) {
 var shortDate = longDate.split(',').shift();
 return shortDate;
}

//Best Practice
function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

// Name on billboard 8 Kyu
// Description:
//
// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
//
// You can not use multiplier "*" operator.
//
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

//My Solution
function billboard(name, price = 30){
  var total = 0;
  for(var i = 0; i < name.length; i++){
    total+=price;
  }
  return total;
}
