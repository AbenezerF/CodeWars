// Find the Vowels (7Kyu)

/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word){
  let arr = [];
  word = word.toLowerCase();
  for(let i = 1; i <= word.length; i++){
    if(word.charAt(i-1) === 'a' || word.charAt(i-1) === 'e' || word.charAt(i-1) === 'i' || word.charAt(i-1) === 'o' || word.charAt(i-1) === 'u' || word.charAt(i-1) === 'y'){
      arr.push(i)
    }
  }
  return arr
}
