// All Star Code Challenge #3 (7kyu)

/*
This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/

var removeVowels = function(str){
  let final = '';
  str.split('').forEach(x =>{
    if(!x.match(/[aeiou]/ig)){
      final += x;
    }
  })
  return final;
}

// one line solution
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, ''); 
}
