// 8 kyu
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

function remove(s,n){
var string = s.split('');
var count = n;
  for(var i = 0; i < string.length; i ++){
    if(string[i] === "!" && count !== 0){
      delete string[i];
      count --;
  }
}
return string.join('');
}

// Best Practice
function remove(s,n){
  return n>0 ? remove(s.replace('!', ''), n-1) : s;
}
