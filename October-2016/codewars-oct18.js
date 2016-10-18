// Title: I love you, a little , a lot, passionately ... not at all
//Description: Who remembers the time where in the schoolyard, girls take flower petals. Tears saying:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal torn comes to the word 'madness', these are cries of excitement, dreams and emotions surging in thoughts.
//
// Your goal in this kata is to define the result of such a game given nb_petals > 0, the number of petals torn.


function howMuchILoveYou(nbPetals) {
var petals = nbPetals % 6;
if(nbPetals % 6 === 0){
return "not at all";
}
if(nbPetals <= 7) {
  if(nbPetals === 1 || nbPetals % 7 === 0) {
  return "I love you";
  }
  else if(nbPetals % 6 === 0) {
  return "not at all";
  }
  else if(nbPetals % 2 === 0) {
  return "a little";
  }
  else if(nbPetals % 3 === 0) {
  return "a lot";
  }
  else if(nbPetals % 4 === 0) {
  return "passionately";
  }
  else if(nbPetals % 5 === 0) {
  return "madly";
  }
}
else {
  if(petals === 1 || petals % 7 === 0) {
  return "I love you";
  }
  else if(petals % 6 === 0) {
  return "not at all";
  }
  else if(petals % 4 === 0) {
  return "passionately";
  }
  else if(petals % 2 === 0) {
  return "a little";
  }
  else if(petals % 3 === 0) {
  return "a lot";
  }
  else if(petals % 5 === 0) {
  return "madly";
  }
}
}

//Best Practice

const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length]
}
