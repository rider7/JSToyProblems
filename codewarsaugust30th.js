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
