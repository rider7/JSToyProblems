// Hit Count Kata 7

// Description
// You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.
// You have been tasked with adding an effect to this counter to make it more interesting.
// Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.
// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.
// Rules
//
// The function will take one argument which will be a four character string representing hit count
// The function must return a multi-dimensional array containing four inner arrays
// The final value in each inner array must be the actual value to be displayed
// Values returned in the array must be of the type number
// Examples
//
// counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
// counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]]
// counterEffect("0000") // [[0],[0],[0],[0]]

//My Solution
function counterEffect(hitCount) {
var result = [];
var myArray = new Array(3)
for(var k = 0; k < hitCount.length; k++){
  count = k;
	myArray[k] = new Array()
for(var i = 0; i <= hitCount[count]; i ++){
	myArray[k].push(i)
  }
  result.push(myArray[k])
  }
  return result;
}


//Best Practice
function counterEffect(hitCount) {
  return [...hitCount].map( d => Array.from({length:+d+1}, (_,i) => i) )
}

// Polish alphabet Kata 8
// Description:
//
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
//
// Your task is to change the letters with diacritics:
//
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.
//
// Example:
//
// Input: "Jędrzej Błądziński"
// Output: "Jedrzej Bladzinski"

//My Solution

function correctPolishLetters (string) {
var res = string.replace(/ą/g, "a").replace(/ę/g, "e").replace(/ć/g, "c")
.replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o").replace(/ś/g, "s")
.replace(/ź/g, "z").replace(/ż/g, "z");
return res;
}


//Best Practice
function correctPolishLetters (string) {
  var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
  return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}
