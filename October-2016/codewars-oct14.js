//Exclamation marks series #1: Remove a exclamation mark from the end of string

//My solution

function remove(s){
  var array = s.split('')
  var last = array.length-1;
    if(array[last] === "!"){
    array.splice(last,1);
    }
return array.join('');
}

//Best Practice
const remove = s => s.replace(/!$/, '');
