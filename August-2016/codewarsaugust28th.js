//Mumbling
// Description:
//
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s){
	var tempString = '';
	s = s.toLowerCase();
	for(var i = 0; i < s.length; i ++){
		tempString += s[i].toUpperCase()
		console.log(i)
		for(var h = 0; h < i; h++){
			tempString += s[i];
		}
		tempString += '-';
	}
	var final = tempString.split('')
	final.pop()
	return final.join('');
}


//Best Practice

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
